(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [11],
  {
    47: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return l;
      });
      var a = t(23),
        r = t(77),
        o = t(76),
        c = t(74),
        i = t(75),
        s = t(24),
        u = t(55),
        b = t(21),
        l = Object(a.c)(!!localStorage.getItem("admin")),
        j = new r.a(),
        p = new o.a({ uri: "http://swedu.sunmoon.ac.kr/graphql" }),
        h = Object(u.a)(function (e) {
          var n = e.graphQLErrors;
          e.networkError;
          n &&
            n.map(function (e) {
              var n = e.message;
              return console.log("network graphql error :", n);
            });
        }),
        m = Object(c.a)(function (e) {
          var n = e.query;
          return "OperationDefinition" === Object(b.e)(n).kind;
        }, p),
        d = new i.a({ cache: j, link: s.a.from([h, m]) });
      n.b = d;
    },
    66: function (e, n, t) {},
    72: function (e, n, t) {
      "use strict";
      t.r(n);
      var a = t(85),
        r = t(46),
        o = t(31),
        c = t.n(o),
        i = (t(2), t(35)),
        s = (t(66), t(4)),
        u = t(10),
        b = Object(i.a)(function () {
          return Promise.all([t.e(6), t.e(8), t.e(14), t.e(22)]).then(
            t.bind(null, 531)
          );
        }),
        l = Object(i.a)(function () {
          return Promise.all([t.e(7), t.e(6), t.e(8), t.e(10), t.e(28)]).then(
            t.bind(null, 526)
          );
        }),
        j = Object(i.a)(function () {
          return Promise.all([t.e(6), t.e(36)]).then(t.bind(null, 512));
        }),
        p = function () {
          return Object(u.jsxs)(s.d, {
            children: [
              Object(u.jsx)(s.a, { exact: !0, path: "/", to: "/renewal" }),
              Object(u.jsx)(s.a, {
                exact: !0,
                path: "/admin",
                to: "/admin/dashboard/dashboard",
              }),
              Object(u.jsx)(s.b, { path: "/renewal", component: j }),
              Object(u.jsx)(s.b, { path: "/main", component: b }),
              Object(u.jsx)(s.b, {
                path: "/admin/:param/:subparam",
                component: l,
              }),
            ],
          });
        },
        h = function (e) {
          e &&
            e instanceof Function &&
            t
              .e(38)
              .then(t.bind(null, 513))
              .then(function (n) {
                var t = n.getCLS,
                  a = n.getFID,
                  r = n.getFCP,
                  o = n.getLCP,
                  c = n.getTTFB;
                t(e), a(e), r(e), o(e), c(e);
              });
        },
        m = t(47),
        d = t(45);
      t(71);
      c.a.render(
        Object(u.jsx)(a.a, {
          client: m.b,
          children: Object(u.jsxs)(r.a, {
            children: [
              Object(u.jsx)(d.a, { position: "bottom-right", autoClose: 3e3 }),
              Object(u.jsx)(p, {}),
            ],
          }),
        }),
        document.getElementById("root")
      ),
        h();
    },
  },
  [[72, 12, 13]],
]);
//# sourceMappingURL=main.a8ac17f1.chunk.js.map
