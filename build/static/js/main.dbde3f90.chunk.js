(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [10],
  {
    47: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return p;
      });
      var a = n(23),
        r = n(77),
        o = n(76),
        c = n(74),
        i = n(75),
        s = n(24),
        u = n(55),
        b = n(21),
        p = Object(a.c)(!!localStorage.getItem("admin")),
        j = new r.a(),
        m = new o.a({
          uri: "http://ec2-15-165-19-80.ap-northeast-2.compute.amazonaws.com/graphql",
        }),
        h = Object(u.a)(function (t) {
          var e = t.graphQLErrors;
          t.networkError;
          e &&
            e.map(function (t) {
              var e = t.message;
              return console.log("network graphql error :", e);
            });
        }),
        l = Object(c.a)(function (t) {
          var e = t.query;
          return "OperationDefinition" === Object(b.e)(e).kind;
        }, m),
        d = new i.a({ cache: j, link: s.a.from([h, l]) });
      e.b = d;
    },
    66: function (t, e, n) {},
    72: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(85),
        r = n(46),
        o = n(31),
        c = n.n(o),
        i = (n(2), n(40)),
        s = (n(66), n(4)),
        u = n(11),
        b = Object(i.a)(function () {
          return Promise.all([n.e(7), n.e(13), n.e(21)]).then(
            n.bind(null, 550)
          );
        }),
        p = Object(i.a)(function () {
          return Promise.all([n.e(6), n.e(7), n.e(9), n.e(27)]).then(
            n.bind(null, 545)
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
        m = function (t) {
          t &&
            t instanceof Function &&
            n
              .e(36)
              .then(n.bind(null, 532))
              .then(function (e) {
                var n = e.getCLS,
                  a = e.getFID,
                  r = e.getFCP,
                  o = e.getLCP,
                  c = e.getTTFB;
                n(t), a(t), r(t), o(t), c(t);
              });
        },
        h = n(47),
        l = n(45);
      n(71);
      c.a.render(
        Object(u.jsx)(a.a, {
          client: h.b,
          children: Object(u.jsxs)(r.a, {
            children: [
              Object(u.jsx)(l.a, { position: "bottom-right", autoClose: 3e3 }),
              Object(u.jsx)(j, {}),
            ],
          }),
        }),
        document.getElementById("root")
      ),
        m();
    },
  },
  [[72, 11, 12]],
]);
//# sourceMappingURL=main.dbde3f90.chunk.js.map
