(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [6],
  {
    54: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var a = n(28),
        r = n(84),
        o = n(83),
        c = n(81),
        i = n(82),
        s = n(29),
        u = n(62),
        b = n(26),
        p = Object(a.c)(!!localStorage.getItem("admin")),
        j = new r.a(),
        m = new o.a({
          uri: "ec2-15-165-19-80.ap-northeast-2.compute.amazonaws.com/graphql",
        }),
        l = Object(u.a)(function (e) {
          var t = e.graphQLErrors;
          e.networkError;
          t &&
            t.map(function (e) {
              var t = e.message;
              return console.log("network graphql error :", t);
            });
        }),
        h = Object(c.a)(function (e) {
          var t = e.query;
          return "OperationDefinition" === Object(b.e)(t).kind;
        }, m),
        d = new i.a({ cache: j, link: s.a.from([l, h]) });
      t.b = d;
    },
    73: function (e, t, n) {},
    79: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(90),
        r = n(53),
        o = n(35),
        c = n.n(o),
        i = (n(2), n(48)),
        s = (n(73), n(5)),
        u = n(13),
        b = Object(i.a)(function () {
          return Promise.all([n.e(3), n.e(4), n.e(9), n.e(18)]).then(
            n.bind(null, 399)
          );
        }),
        p = Object(i.a)(function () {
          return Promise.all([n.e(4), n.e(10), n.e(20)]).then(
            n.bind(null, 406)
          );
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
                component: p,
              }),
            ],
          });
        },
        m = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(23)
              .then(n.bind(null, 395))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  r = t.getFCP,
                  o = t.getLCP,
                  c = t.getTTFB;
                n(e), a(e), r(e), o(e), c(e);
              });
        },
        l = n(54),
        h = n(52);
      n(78);
      c.a.render(
        Object(u.jsx)(a.a, {
          client: l.b,
          children: Object(u.jsxs)(r.a, {
            children: [
              Object(u.jsx)(h.a, { position: "bottom-right", autoClose: 3e3 }),
              Object(u.jsx)(j, {}),
            ],
          }),
        }),
        document.getElementById("root")
      ),
        m();
    },
  },
  [[79, 7, 8]],
]);
//# sourceMappingURL=main.4663cb0e.chunk.js.map
