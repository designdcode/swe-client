(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [1],
  {
    54: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return l;
      });
      var a = n(28),
        r = n(84),
        o = n(83),
        c = n(81),
        i = n(82),
        s = n(29),
        u = n(62),
        b = n(26),
        l = Object(a.c)(!!localStorage.getItem("admin")),
        j = new r.a(),
        p = new o.a({ uri: "http://localhost:4000/graphql" }),
        h = Object(u.a)(function (t) {
          var e = t.graphQLErrors;
          t.networkError;
          e &&
            e.map(function (t) {
              var e = t.message;
              return console.log("network graphql error :", e);
            });
        }),
        m = Object(c.a)(function (t) {
          var e = t.query;
          return "OperationDefinition" === Object(b.e)(e).kind;
        }, p),
        d = new i.a({ cache: j, link: s.a.from([h, m]) });
      e.b = d;
    },
    73: function (t, e, n) {},
    79: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(90),
        r = n(53),
        o = n(35),
        c = n.n(o),
        i = (n(2), n(48)),
        s = (n(73), n(5)),
        u = n(13),
        b = Object(i.a)(function () {
          return Promise.all([n.e(0), n.e(5), n.e(7)]).then(n.bind(null, 395));
        }),
        l = Object(i.a)(function () {
          return Promise.all([n.e(0), n.e(4), n.e(6)]).then(n.bind(null, 394));
        }),
        j = function () {
          return Object(u.jsxs)(s.d, {
            children: [
              Object(u.jsx)(s.a, { exact: !0, path: "/", to: "/main" }),
              Object(u.jsx)(s.a, {
                exact: !0,
                path: "/admin",
                to: "/admin/dashboard/dashboard",
              }),
              Object(u.jsx)(s.b, { path: "/main", component: b }),
              Object(u.jsx)(s.b, {
                path: "/admin/:param/:subparam",
                component: l,
              }),
            ],
          });
        },
        p = function (t) {
          t &&
            t instanceof Function &&
            n
              .e(8)
              .then(n.bind(null, 391))
              .then(function (e) {
                var n = e.getCLS,
                  a = e.getFID,
                  r = e.getFCP,
                  o = e.getLCP,
                  c = e.getTTFB;
                n(t), a(t), r(t), o(t), c(t);
              });
        },
        h = n(54),
        m = n(52);
      n(78);
      c.a.render(
        Object(u.jsx)(a.a, {
          client: h.b,
          children: Object(u.jsxs)(r.a, {
            children: [
              Object(u.jsx)(m.a, { position: "bottom-right", autoClose: 3e3 }),
              Object(u.jsx)(j, {}),
            ],
          }),
        }),
        document.getElementById("root")
      ),
        p();
    },
  },
  [[79, 2, 3]],
]);
//# sourceMappingURL=main.f74c7c9c.chunk.js.map
