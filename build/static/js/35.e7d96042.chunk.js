(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [35],
  {
    539: function (e, t, a) {
      "use strict";
      a.r(t);
      var n,
        c = a(92),
        r = a(115),
        o = a(89),
        i = a(113),
        s = a.n(i),
        l = a(255),
        d = a(474),
        b = a(521),
        u = a(527),
        j = a(2),
        O = a(184),
        f = a.n(O),
        p = a(4),
        m = a(94),
        h = a(101).a.div(
          n ||
            (n = Object(m.a)([
              "\n  & .attach-group {\n    display: flex;\n    margin: 5px 0;\n  }\n\n  & .attach-button {\n    margin-left: 15px;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    &:hover {\n      color: #e74c3c;\n      transition: linear 0.2s;\n    }\n  }\n  & .button-group {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  img {\n    object-fit: contain;\n    width: 300px;\n    height: 400px;\n  }\n",
            ]))
        ),
        g = a(138),
        v = a(198),
        x = a(121),
        y = a(126),
        B = a(323),
        k = a(137),
        I = a(480),
        C = a(541),
        w = a(104),
        S = a(45),
        N = a(172),
        F = a(171),
        R = a(132),
        q = a(114),
        E = a(11);
      t.default = function () {
        var e = Object(p.g)(),
          t = Object(p.i)(),
          a = t.param,
          n = t.subparam,
          i = Object(p.h)().search,
          O = f.a.parse(i),
          m = O.category,
          J = O.id,
          T = Object(j.useState)(),
          _ = Object(o.a)(T, 2),
          z = _[0],
          D = _[1],
          L = Object(j.useState)(),
          U = Object(o.a)(L, 2),
          A = U[0],
          G = U[1],
          H = Object(j.useState)([]),
          K = Object(o.a)(H, 2),
          M = K[0],
          P = K[1],
          Q = Object(j.useState)(),
          V = Object(o.a)(Q, 2),
          W = V[0],
          X = V[1],
          Y = Object(j.useState)(),
          Z = Object(o.a)(Y, 2),
          $ = Z[0],
          ee = Z[1],
          te = Object(j.useState)(),
          ae = Object(o.a)(te, 2),
          ne = ae[0],
          ce = ae[1],
          re = Object(y.a)(""),
          oe = Object(o.a)(re, 3),
          ie = oe[0],
          se = oe[1],
          le = oe[2],
          de = Object(j.useState)(0),
          be = Object(o.a)(de, 2),
          ue = be[0],
          je = be[1],
          Oe = Object(j.useState)(!1),
          fe = Object(o.a)(Oe, 2),
          pe = fe[0],
          me = fe[1],
          he = Object(j.useState)(!1),
          ge = Object(o.a)(he, 2),
          ve = ge[0],
          xe = ge[1];
        Object(j.useEffect)(
          function () {
            me(Object(R.b)(n)), xe(Object(R.d)(n));
          },
          [n]
        );
        var ye = Object(g.a)(x.b, { variables: { id: parseInt(J, 10) } }),
          Be = ye.loading,
          ke = ye.data,
          Ie = ye.refetch,
          Ce = Object(v.a)(w.c, {
            onCompleted: function (e) {
              e.createImage.ok && (je(0), Ie && Ie());
            },
          }),
          we = Object(o.a)(Ce, 1)[0],
          Se = Object(v.a)(w.g, {
            onCompleted: function (e) {
              var t = e.deleteImage,
                a = t.ok,
                n = t.err;
              a
                ? (Ie && Ie(),
                  S.b.error(
                    "\uc774\ubbf8\uc9c0\uac00 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ))
                : (console.log(n), S.b.error(n));
            },
          }),
          Ne = Object(o.a)(Se, 1)[0],
          Fe = Object(v.a)(w.b, {
            onCompleted: function (e) {
              e.createFile.ok && (je(0), Ie && Ie());
            },
          }),
          Re = Object(o.a)(Fe, 1)[0],
          qe = Object(v.a)(w.f, {
            onCompleted: function (e) {
              var t = e.deleteFile,
                a = t.ok,
                n = t.err;
              a
                ? (S.b.success(
                    "\ud30c\uc77c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  Ie && Ie())
                : (console.log(n), S.b.error(n));
            },
          }),
          Ee = Object(o.a)(qe, 1)[0],
          Je = Object(v.a)(w.i, {
            onCompleted: function (t) {
              var n = t.editBoard,
                c = n.ok,
                r = n.err;
              c
                ? (S.b.success(
                    "\uac8c\uc2dc\ubb3c\uc774 \uc218\uc815 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  e.push({
                    pathname: "/admin/".concat(a, "/").concat(m),
                    state: { refresh: !0 },
                  }))
                : (console.log(r),
                  S.b.error(
                    "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                  ));
            },
          }),
          Te = Object(o.a)(Je, 1)[0],
          _e = Object(j.useCallback)(
            function () {
              $ && $.trim() && Object(F.a)("images", m, $, X);
            },
            [m, $]
          ),
          ze = Object(j.useCallback)(
            (function () {
              var e = Object(r.a)(
                s.a.mark(function e(t) {
                  var a;
                  return s.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          _e(),
                            je(ue + 1),
                            (a = t.name),
                            ee(t.name),
                            Object(N.a)(
                              "images",
                              t,
                              m,
                              a,
                              X,
                              ue,
                              je,
                              we,
                              parseInt(J, 10)
                            );
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            [m, ue, _e, we, J]
          ),
          De = Object(j.useCallback)(
            function (e) {
              je(1),
                q.a
                  .ref("/files/".concat(m, "/").concat(e.name))
                  .put(e)
                  .on(
                    "state_changed",
                    function (e) {},
                    function (e) {
                      return console.log(e);
                    },
                    function () {
                      q.a
                        .ref("/files/".concat(m, "/").concat(e.name))
                        .getDownloadURL()
                        .then(
                          (function () {
                            var t = Object(r.a)(
                              s.a.mark(function t(a) {
                                return s.a.wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          P(function (t) {
                                            return [].concat(Object(c.a)(t), [
                                              { url: a, fileName: e.name },
                                            ]);
                                          }),
                                          (t.next = 3),
                                          Re({
                                            variables: {
                                              url: a,
                                              fileName: e.name,
                                              boardId: parseInt(J, 10),
                                            },
                                            onCompleted: function (e) {
                                              var t = e.createFile,
                                                a = t.ok,
                                                n = t.err;
                                              a
                                                ? (S.b.success(
                                                    "\ud30c\uc77c\uc774 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                                  ),
                                                  Ie && Ie())
                                                : (S.b.error(
                                                    "\ud30c\uc77c \uc5c5\ub85c\ub4dc\uc5d0 \uc2e4\ud328 \ud558\uc600\uc2b5\ub2c8\ub2e4"
                                                  ),
                                                  console.log(n));
                                            },
                                          })
                                        );
                                      case 3:
                                        je(ue - 1);
                                      case 4:
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
            [Re, J, m, ue, Ie]
          ),
          Le = Object(j.useCallback)(
            (function () {
              var e = Object(r.a)(
                s.a.mark(function e(t, a) {
                  return s.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            q.a
                              .ref("/files/".concat(m, "/").concat(a))
                              .delete(),
                            (e.next = 3),
                            Ee({ variables: { id: t } })
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
            [Ee, m]
          );
        return (
          Object(j.useEffect)(
            function () {
              var e;
              (ke &&
                ke.getBoardById &&
                ke.getBoardById.data &&
                (D(ke.getBoardById.data), le(ke.getBoardById.data.link || "")),
              ke &&
                ke.getBoardById &&
                ke.getBoardById.data &&
                ke.getBoardById.data.files &&
                G(ke.getBoardById.data.files),
              ke &&
                ke.getBoardById &&
                ke.getBoardById.data &&
                ke.getBoardById.data.images) &&
                (ce(ke.getBoardById.data.images[0]),
                ee(
                  null === (e = ke.getBoardById.data.images[0]) || void 0 === e
                    ? void 0
                    : e.fileName
                ));
            },
            [ke, D, le]
          ),
          Be
            ? Object(E.jsx)("div", { children: "loading..." })
            : Object(E.jsxs)(h, {
                children: [
                  Object(E.jsxs)("div", {
                    className: "button-group",
                    children: [
                      Object(E.jsx)(B.a, {
                        type: "ghost",
                        onClick: function () {
                          return e.goBack();
                        },
                        children: "\ub4a4\ub85c",
                      }),
                      Object(E.jsx)(B.a, {
                        type: "primary",
                        disabled: 0 !== ue,
                        onClick: function () {
                          return Te({
                            variables: {
                              id: parseInt(J, 10),
                              link: ie.includes("http")
                                ? ie
                                : "http://".concat(ie),
                            },
                          });
                        },
                        children:
                          0 === ue
                            ? "\uc644\ub8cc"
                            : Object(E.jsxs)(E.Fragment, {
                                children: [
                                  Object(E.jsx)(k.a, {}),
                                  " \ud30c\uc77c / \uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub529 \uc911",
                                ],
                              }),
                      }),
                    ],
                  }),
                  Object(E.jsxs)(l.b, {
                    bordered: !0,
                    column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
                    layout: "horizontal",
                    children: [
                      ve &&
                        Object(E.jsx)(l.b.Item, {
                          label: "\ub9c1\ud06c",
                          span: 4,
                          labelStyle: { width: 100 },
                          children: Object(E.jsx)(d.a, {
                            placeholder:
                              (null === z || void 0 === z ? void 0 : z.link) ||
                              void 0,
                            value: ie,
                            onChange: se,
                          }),
                        }),
                      pe &&
                        Object(E.jsxs)(l.b.Item, {
                          label: "\ud30c\uc77c",
                          span: 4,
                          labelStyle: { width: 100 },
                          children: [
                            A && 0 !== A.length
                              ? Object(E.jsx)(E.Fragment, {
                                  children: A.map(function (e, t) {
                                    return Object(E.jsxs)(
                                      "div",
                                      {
                                        className: "attach-group",
                                        children: [
                                          Object(E.jsx)("a", {
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
                                          Object(E.jsx)("button", {
                                            className: "attach-button",
                                            onClick: function () {
                                              return Le(
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.id,
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.fileName
                                              );
                                            },
                                            children: Object(E.jsx)(I.a, {}),
                                          }),
                                        ],
                                      },
                                      t
                                    );
                                  }),
                                })
                              : 0 === M.length
                              ? Object(E.jsx)("div", {
                                  children:
                                    "\ucca8\ubd80\ud30c\uc77c \uc5c6\uc74c",
                                })
                              : Object(E.jsx)(E.Fragment, {}),
                            Object(E.jsx)(b.a, {
                              multiple: !0,
                              maxCount: 4,
                              className: "upload-list-inline",
                              customRequest: function (e) {
                                var t = e.file;
                                return De(t);
                              },
                              onChange: function (e) {
                                var t = e.file;
                                0 !== M.length
                                  ? (t.status = "done")
                                  : (t.status = "removed");
                              },
                              children: Object(E.jsx)(B.a, {
                                icon: Object(E.jsx)(C.a, {}),
                                children: "\ud30c\uc77c \uc5c5\ub85c\ub4dc",
                              }),
                            }),
                          ],
                        }),
                      Object(E.jsxs)(l.b.Item, {
                        label: "\uc774\ubbf8\uc9c0",
                        span: 4,
                        labelStyle: { width: 100 },
                        children: [
                          ne &&
                            Object(E.jsx)(B.a, {
                              danger: !0,
                              icon: Object(E.jsx)(I.a, {}),
                              onClick: function () {
                                Object(F.a)("images", m, ne.fileName, X),
                                  Ne({ variables: { id: ne.id } });
                              },
                              children: "\uc774\ubbf8\uc9c0 \uc0ad\uc81c",
                            }),
                          Object(E.jsx)(b.a, {
                            listType: "picture",
                            customRequest: function (e) {
                              var t = e.file;
                              ne && Ne({ variables: { id: ne && ne.id } }),
                                ze(t);
                            },
                            progress: { showInfo: !0 },
                            onChange: function (e) {
                              var t = e.file;
                              t.status = W ? "done" : "removed";
                            },
                            maxCount: 1,
                            children: Object(E.jsx)(B.a, {
                              icon: Object(E.jsx)(C.a, {}),
                              children: "\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc",
                            }),
                          }),
                          ne
                            ? Object(E.jsx)("img", {
                                src: ne.url,
                                alt: ne.fileName,
                              })
                            : Object(E.jsx)(u.a.Text, {
                                children:
                                  "\uc5c5\ub85c\ub4dc \ub41c \uc774\ubbf8\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4",
                              }),
                        ],
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
//# sourceMappingURL=35.e7d96042.chunk.js.map
