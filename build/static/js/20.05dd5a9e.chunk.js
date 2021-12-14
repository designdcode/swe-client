(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [20],
  {
    132: function (e, t, i) {
      "use strict";
      var n = i(114),
        a = i(2);
      t.a = function (e) {
        var t = Object(a.useState)(e),
          i = Object(n.a)(t, 2),
          o = i[0],
          c = i[1];
        return [
          o,
          Object(a.useCallback)(function (e) {
            c(e.target.value);
          }, []),
          c,
        ];
      };
    },
    164: function (e, t, i) {
      "use strict";
      i.d(t, "b", function () {
        return u;
      }),
        i.d(t, "a", function () {
          return b;
        }),
        i.d(t, "d", function () {
          return j;
        }),
        i.d(t, "c", function () {
          return m;
        });
      var n,
        a = i(99),
        o = i(402),
        c = i(52),
        r = i(54),
        l = i(165),
        s = Object(o.a)(
          n ||
            (n = Object(a.a)([
              "\n  query adminLogin {\n    adminLogin @client\n  }\n",
            ]))
        ),
        u = function () {
          r.b.cache.writeQuery({ query: s, data: { adminLogin: !0 } }),
            localStorage.setItem("admin", "".concat(Date.now() + 72e5)),
            Object(r.a)(!0);
        },
        b = function () {
          r.b.cache.writeQuery({ query: s, data: { adminLogin: !1 } }),
            localStorage.removeItem("admin"),
            Object(r.a)(!1);
        },
        j = function (e) {
          localStorage.setItem("stno", "".concat(e));
        },
        m = function () {
          localStorage.removeItem("stno"),
            c.b.success(
              "\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
            ),
            l.a.push("/main");
        };
    },
    165: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return a;
      });
      var n = i(12),
        a = Object(n.a)({ forceRefresh: !0 });
    },
    406: function (e, t, i) {
      "use strict";
      i.r(t);
      var n,
        a,
        o = i(114),
        c = i(2),
        r = i(207),
        l = i(394),
        s = i(407),
        u = i(400),
        b = i(403),
        j = i(177),
        m = [
          {
            title: "intro",
            ko_title: "\uc0ac\uc5c5\ub2e8 \uc18c\uac1c",
            subMenu: [
              {
                key: "intro-introduce",
                title: "introduce",
                ko_title: "\uc778\uc0ac\ub9d0",
              },
              {
                key: "intro-overview",
                title: "overview",
                ko_title: "\uc0ac\uc5c5\uac1c\uc694",
              },
              {
                key: "intro-history",
                title: "history",
                ko_title: "\uc5f0\ud601",
              },
              {
                key: "intro-task",
                title: "task",
                ko_title: "\uc870\uc9c1\ub3c4 \ubc0f \uc5c5\ubb34",
              },
              {
                key: "intro-route",
                title: "route",
                ko_title: "\uc624\uc2dc\ub294\uae38",
              },
            ],
          },
          {
            title: "basic",
            ko_title: "SW\uae30\ucd08\uad50\uc721",
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
                key: "basic-lecture",
                title: "basic-lecture",
                ko_title: "ST@R EDX \uacf5\uac1c\uac15\uc88c",
              },
              {
                key: "basic-clinic",
                title: "basic-clinic",
                ko_title: "SW\ud074\ub9ac\ub2c9",
              },
              {
                key: "basic-tutoring",
                title: "basic-tutoring",
                ko_title: "SW\ud29c\ud130\ub9c1",
              },
              {
                key: "basic-AI",
                title: "basic-AI",
                ko_title: "AI SW \uc11c\ud3ec\ud130\uc988 \ub9e8\ud1a0\ub9c1",
              },
              {
                key: "basic-online",
                title: "basic-online",
                ko_title:
                  "\uac1c\ubc29\ud615 \uc628\ub77c\uc778 \ud50c\ub7ab\ud3fc(K-MOOC)",
              },
            ],
          },
          {
            title: "major",
            ko_title: "SW\uc804\uacf5\uad50\uc721",
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
                  "\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc804\ubb38\uc5ed\ub7c9 \uc778\uc99d\uc81c",
              },
              {
                key: "major-contest",
                title: "major-contest",
                ko_title: "SW \uacbd\uc9c4\ub300\ud68c",
              },
              {
                key: "major-training",
                title: "major-training",
                ko_title: "\ud574\uc678\ud604\uc7a5\uc2e4\uc2b5",
              },
              {
                key: "major-taprogram",
                title: "major-taprogram",
                ko_title:
                  "\ud504\ub85c\uadf8\ub798\ubc0d\uad50\uacfc\ubaa9 \uba58\ud1a0(TA) \ud504\ub85c\uadf8\ub7a8",
              },
            ],
          },
          {
            title: "integration",
            ko_title: "SW\uc735\ud569\uad50\uc721",
            subMenu: [
              {
                key: "integration-overview",
                title: "integration-overview",
                ko_title: "\uac1c\uc694",
              },
              {
                key: "integration-software",
                title: "integration-software",
                ko_title:
                  "\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc735\ud569\uacbd\uc601\uc804\uacf5",
              },
              {
                key: "integration-product",
                title: "integration-product",
                ko_title:
                  "\uc2a4\ub9c8\ud2b8\uc81c\uc870 IOT\uc735\ud569\uc804\uacf5",
              },
              {
                key: "integration-content",
                title: "integration-content",
                ko_title:
                  "\uc2a4\ub9c8\ud2b8\ucf58\ud150\uce20 \uc735\ud569\uc804\uacf5",
              },
              {
                key: "integration-automobile",
                title: "integration-automobile",
                ko_title:
                  "\ubbf8\ub798\uc790\ub3d9\ucc28 \uc735\ud569\uc804\uacf5",
              },
              {
                key: "integration-inteligence",
                title: "integration-inteligence",
                ko_title:
                  "\uc9c0\ub2a5\ud615 \uc804\uc7a5 \uc81c\uc5b4 \uc804\uacf5",
              },
            ],
          },
          {
            title: "value",
            ko_title: "SW\uac00\uce58\ud655\uc0b0",
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
              {
                key: "value-platform",
                title: "value-platform",
                ko_title: "SW \uac00\uce58\ud655\uc0b0 \ud50c\ub7ab\ud3fc",
              },
            ],
          },
          {
            title: "cooperation",
            ko_title: "SW\uc0b0\ud559\ud611\ub825",
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
                  "\uad6d\ub0b4 \xb7 \uc678 \uae30\uad00\uacfc\uc758 \ub124\ud2b8\uc6cc\ud06c",
              },
              {
                key: "cooperation-project",
                title: "cooperation-project",
                ko_title:
                  "\uad6d\ub0b4 \xb7 \uc678 \uae30\uad00\uacfc\uc758 \ud504\ub85c\uc81d\ud2b8",
              },
              {
                key: "cooperation-internship",
                title: "cooperation-internship",
                ko_title:
                  "\uad6d\ub0b4 \xb7 \uc678 \uae30\uad00\uacfc\uc758 \uc5f0\uacc4 \uc778\ud134\uc27d",
              },
            ],
          },
          {
            title: "achievement",
            ko_title: "\uc0ac\uc5c5\uc131\uacfc",
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
                key: "community-storaoge",
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
            subMenu: [
              {
                key: "site-link",
                title: "link",
                ko_title: "\ub9c1\ud06c\uad00\ub9ac",
              },
            ],
          },
        ],
        k = i(5),
        d = i(48),
        h = i(13),
        y = Object(d.a)(function () {
          return Promise.all([i.e(0), i.e(2), i.e(19)]).then(i.bind(null, 410));
        }),
        O = Object(d.a)(function () {
          return Promise.all([i.e(3), i.e(5), i.e(21)]).then(i.bind(null, 405));
        }),
        p = Object(d.a)(function () {
          return Promise.all([i.e(2), i.e(3), i.e(5), i.e(15)]).then(
            i.bind(null, 408)
          );
        }),
        g = Object(d.a)(function () {
          return Promise.all([i.e(0), i.e(1), i.e(12)]).then(i.bind(null, 396));
        }),
        v = Object(d.a)(function () {
          return Promise.all([i.e(0), i.e(1), i.e(13)]).then(i.bind(null, 411));
        }),
        f = Object(d.a)(function () {
          return Promise.all([i.e(2), i.e(16)]).then(i.bind(null, 412));
        }),
        _ = Object(d.a)(function () {
          return Promise.all([i.e(0), i.e(1), i.e(14)]).then(i.bind(null, 413));
        }),
        x = Object(d.a)(function () {
          return Promise.all([i.e(0), i.e(1), i.e(2), i.e(17)]).then(
            i.bind(null, 414)
          );
        }),
        w = Object(d.a)(function () {
          return Promise.all([i.e(11), i.e(22)]).then(i.bind(null, 415));
        }),
        S = function () {
          var e = Object(k.i)(),
            t = e.param,
            i = e.subparam;
          return Object(h.jsx)(h.Fragment, {
            children: (function (e, t) {
              switch (e) {
                case "dashboard":
                  return Object(h.jsx)(p, {});
                case "intro":
                case "basic":
                case "major":
                case "integration":
                case "value":
                case "cooperation":
                  return t === "create-image-".concat(e)
                    ? Object(h.jsx)(_, {})
                    : t === "edit-image-".concat(e)
                    ? Object(h.jsx)(x, {})
                    : t === "create-".concat(e)
                    ? Object(h.jsx)(v, {})
                    : t === "detail-".concat(e)
                    ? Object(h.jsx)(y, {})
                    : t === "edit-".concat(e)
                    ? Object(h.jsx)(g, {})
                    : t.includes("storage")
                    ? Object(h.jsx)(O, {})
                    : Object(h.jsx)(f, {});
                case "achievement":
                case "community":
                  return t === "create-image-".concat(e)
                    ? Object(h.jsx)(_, {})
                    : t === "edit-image-".concat(e)
                    ? Object(h.jsx)(x, {})
                    : t === "create-".concat(e)
                    ? Object(h.jsx)(v, {})
                    : t === "detail-".concat(e)
                    ? Object(h.jsx)(y, {})
                    : t === "edit-".concat(e)
                    ? Object(h.jsx)(g, {})
                    : (t.includes("storage"), Object(h.jsx)(O, {}));
                case "sitelink":
                  return Object(h.jsx)(w, {});
                default:
                  return;
              }
            })(t, i),
          });
        },
        I = i(53),
        W = i(393),
        C = i(54),
        P = i(132),
        M = i(164),
        N = i(52),
        q = i(416),
        A = i(417),
        L = i(418),
        T = i(99),
        D = i(111),
        F =
          (D.a.div(n || (n = Object(T.a)([""]))),
          D.a.div(
            a ||
              (a = Object(T.a)([
                "\n  width: 100vw;\n  height: 100vh;\n  & .login-form {\n    height: 700px;\n    width: 800px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  & .login-input {\n    width: 300px;\n  }\n",
              ]))
          ));
      t.default = function () {
        var e = Object(W.a)(C.a),
          t = Object(k.g)(),
          i = Object(P.a)(""),
          n = Object(o.a)(i, 3),
          a = n[0],
          d = n[1],
          y = n[2],
          O = Object(P.a)(""),
          p = Object(o.a)(O, 3),
          g = p[0],
          v = p[1],
          f = p[2],
          _ = Object(c.useState)("\ub300\uc2dc\ubcf4\ub4dc"),
          x = Object(o.a)(_, 2),
          w = x[0],
          T = x[1],
          D = Object(c.useState)("\ub300\uc2dc\ubcf4\ub4dc"),
          H = Object(o.a)(D, 2),
          K = H[0],
          R = H[1],
          E = Object(c.useState)({ param: "dashboard", subparam: "dashboard" }),
          J = Object(o.a)(E, 2),
          Q = (J[0], J[1]),
          U = Object(c.useState)(!1),
          z = Object(o.a)(U, 2),
          V = z[0],
          X = z[1],
          B = r.a.SubMenu,
          G = l.a.Header,
          Y = l.a.Content,
          Z = l.a.Sider,
          $ = Object(c.useCallback)(
            function () {
              "adminswe" === a && "adminswe" === g
                ? (y(""),
                  f(""),
                  Object(M.b)(),
                  N.b.success(
                    "\ub85c\uadf8\uc778 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ))
                : N.b.error(
                    "\uc544\uc774\ub514 & \uc554\ud638\uac00 \ud2c0\ub9bd\ub2c8\ub2e4"
                  );
            },
            [a, g, y, f]
          ),
          ee = Object(c.useCallback)(function (e, t, i, n) {
            X(!0), R(t), T(e), Q({ param: i, subparam: n });
          }, []),
          te = Object(c.useCallback)(function () {
            X(!1),
              R("\ub300\uc2dc\ubcf4\ub4dc"),
              T("\ub300\uc2dc\ubcf4\ub4dc"),
              Q({ param: "dashboard", subparam: "dashboard" });
          }, []);
        return (
          Object(c.useEffect)(function () {
            var e = localStorage.getItem("admin");
            e && parseInt(e, 10) / 1e3 < Date.now() / 1e3 && Object(M.a)();
          }, []),
          Object(h.jsx)(l.a, {
            style: { minHeight: "100vh" },
            children: e
              ? Object(h.jsxs)(h.Fragment, {
                  children: [
                    Object(h.jsxs)(G, {
                      className: "header",
                      children: [
                        Object(h.jsx)("div", { className: "logo" }),
                        Object(h.jsxs)(r.a, {
                          theme: "dark",
                          mode: "horizontal",
                          style: {
                            display: "flex",
                            justifyContent: "flex-end",
                          },
                          children: [
                            Object(h.jsx)(
                              r.a.Item,
                              {
                                onClick: function () {
                                  Object(M.a)(), t.push("/main");
                                },
                                children:
                                  "\uba54\uc778\uc73c\ub85c \uac00\uae30",
                              },
                              1
                            ),
                            Object(h.jsxs)(
                              r.a.Item,
                              {
                                onClick: function () {
                                  return Object(M.a)();
                                },
                                children: [Object(h.jsx)(q.a, {}), " Logout"],
                              },
                              2
                            ),
                          ],
                        }),
                      ],
                    }),
                    Object(h.jsxs)(l.a, {
                      children: [
                        Object(h.jsx)(Z, {
                          width: 200,
                          className: "site-layout-background",
                          children: Object(h.jsxs)(r.a, {
                            mode: "inline",
                            defaultSelectedKeys: ["dashboard"],
                            defaultOpenKeys: ["dashboard"],
                            style: { height: "100%", borderRight: 0 },
                            children: [
                              Object(h.jsx)(
                                r.a.Item,
                                {
                                  title: "\ub300\uc2dc\ubcf4\ub4dc",
                                  children: Object(h.jsx)(I.b, {
                                    to: {
                                      pathname: "/admin/dashboard/dashboard",
                                      state: { refresh: !0 },
                                    },
                                    onClick: te,
                                    children: Object(h.jsx)("span", {
                                      children: "\ub300\uc2dc\ubcf4\ub4dc",
                                    }),
                                  }),
                                },
                                "dashboard"
                              ),
                              m.map(function (e) {
                                return Object(h.jsx)(
                                  B,
                                  {
                                    title: e.ko_title,
                                    children: e.subMenu.map(function (t) {
                                      return Object(h.jsx)(
                                        r.a.Item,
                                        {
                                          children: Object(h.jsx)(I.b, {
                                            to: "/admin/"
                                              .concat(e.title, "/")
                                              .concat(t.key),
                                            onClick: function () {
                                              return ee(
                                                t.ko_title,
                                                e.ko_title,
                                                e.title,
                                                t.key
                                              );
                                            },
                                            children: Object(h.jsx)("span", {
                                              children: t.ko_title,
                                            }),
                                          }),
                                        },
                                        t.key
                                      );
                                    }),
                                  },
                                  e.ko_title
                                );
                              }),
                            ],
                          }),
                        }),
                        Object(h.jsxs)(l.a, {
                          style: { padding: "0 24px 24px" },
                          children: [
                            V &&
                              Object(h.jsxs)(s.a, {
                                style: { margin: "16px 0" },
                                children: [
                                  Object(h.jsx)(s.a.Item, { children: K }),
                                  Object(h.jsx)(s.a.Item, { children: w }),
                                ],
                              }),
                            Object(h.jsx)(Y, {
                              className: "site-layout-background",
                              style: { padding: 24, margin: 0, minHeight: 280 },
                              children: Object(h.jsx)(S, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : Object(h.jsx)(F, {
                  children: Object(h.jsxs)(u.a, {
                    name: "normal_login",
                    className: "login-form",
                    initialValues: { remember: !0 },
                    onFinish: $,
                    children: [
                      Object(h.jsx)(u.a.Item, {
                        name: "username",
                        rules: [
                          {
                            required: !0,
                            message: "Please input your Username!",
                          },
                        ],
                        children: Object(h.jsx)(b.a, {
                          prefix: Object(h.jsx)(A.a, {
                            className: "site-form-item-icon",
                          }),
                          placeholder: "Username",
                          value: a,
                          onChange: d,
                          className: "login-input",
                        }),
                      }),
                      Object(h.jsx)(u.a.Item, {
                        name: "password",
                        rules: [
                          {
                            required: !0,
                            message: "Please input your Password!",
                          },
                        ],
                        children: Object(h.jsx)(b.a, {
                          prefix: Object(h.jsx)(L.a, {
                            className: "site-form-item-icon",
                          }),
                          type: "password",
                          value: g,
                          onChange: v,
                          className: "login-input",
                          placeholder: "Password",
                        }),
                      }),
                      Object(h.jsx)(u.a.Item, {
                        children: Object(h.jsx)(j.a, {
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
      };
    },
  },
]);
//# sourceMappingURL=20.05dd5a9e.chunk.js.map
