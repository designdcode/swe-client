(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [27],
  {
    125: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return a;
      });
      var i = e(89),
        c = e(2),
        a = function () {
          var n = "object" === typeof window,
            t = Object(c.useCallback)(
              function () {
                return {
                  width: n ? window.innerWidth : 0,
                  height: n ? window.innerWidth : 0,
                };
              },
              [n]
            ),
            e = Object(c.useState)(t),
            a = Object(i.a)(e, 2),
            o = a[0],
            d = a[1];
          return (
            Object(c.useEffect)(
              function () {
                if (n) {
                  var e = function () {
                    d(t());
                  };
                  return (
                    window.addEventListener("resize", e),
                    function () {
                      return window.removeEventListener("resize", e);
                    }
                  );
                }
              },
              [t, n]
            ),
            o
          );
        };
    },
    132: function (n, t, e) {
      "use strict";
      e.d(t, "d", function () {
        return i;
      }),
        e.d(t, "c", function () {
          return c;
        }),
        e.d(t, "f", function () {
          return a;
        }),
        e.d(t, "b", function () {
          return o;
        }),
        e.d(t, "a", function () {
          return d;
        }),
        e.d(t, "e", function () {
          return r;
        });
      var i = function (n) {
          return (
            "storage" ===
            (null === n || void 0 === n ? void 0 : n.toString().split("-")[0])
          );
        },
        c = function (n) {
          var t =
              null === n || void 0 === n ? void 0 : n.toString().split("-")[0],
            e =
              null === n || void 0 === n ? void 0 : n.toString().split("-")[1];
          switch (t) {
            case "community":
              return (
                "notice" === e || "administration" === e || "storage" === e
              );
            case "storage":
            case "achievement":
              return !0;
            default:
              return !1;
          }
        },
        a = function (n) {
          switch (
            null === n || void 0 === n ? void 0 : n.toString().split("-")[1]
          ) {
            case "aidnews":
            case "valuenews":
            case "coopnews":
              return !0;
            default:
              return !1;
          }
        },
        o = function (n) {
          var t =
              null === n || void 0 === n ? void 0 : n.toString().split("-")[0],
            e =
              null === n || void 0 === n ? void 0 : n.toString().split("-")[1];
          switch (t) {
            case "community":
              return (
                "notice" === e || "administration" === e || "storage" === e
              );
            case "storage":
            case "achievement":
              return !0;
            default:
              return !1;
          }
        },
        d = function (n) {
          return (
            "introduce" !==
            (null === n || void 0 === n ? void 0 : n.toString().split("-")[0])
          );
        },
        r = function (n) {
          switch (
            null === n || void 0 === n ? void 0 : n.toString().split("-")[1]
          ) {
            case "help":
            case "request":
              return !0;
            default:
              return !1;
          }
        };
    },
    234: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return i;
      });
      var i = function (n) {
        switch (n) {
          case "achievement-news":
            return "\uc0ac\uc5c5\ub2e8 \uc18c\uc2dd";
          case "achievement-aidnews":
            return "SW\uad50\uc721\uc9c0\uc6d0\uc13c\ud130 \uc18c\uc2dd";
          case "achievement-valuenews":
            return "SW\uac00\uce58\ud655\uc0b0\uc13c\ud130 \uc18c\uc2dd";
          case "achievement-coopnews":
            return "SW\uc0b0\ud559\ud611\ub825\uc18c\uc2dd";
          case "achievement-startup":
            return "\ucc3d\uc5c5\uc9c0\uc6d0\uc18c\uc2dd";
          case "community-notice":
            return "\uacf5\uc9c0\uc0ac\ud56d";
          case "community-administration":
            return "\ud559\uc0ac\uacf5\uc9c0";
          case "community-storage":
            return "\uc11c\uc2dd\uc790\ub8cc\uc2e4";
          case "community-request":
            return "\uac74\uc758\uc0ac\ud56d";
          case "community-help":
            return "\ud5ec\ud504\ub370\uc2a4\ud06c";
          case "community-sitemap":
            return "\uc0ac\uc774\ud2b8\ub9f5";
          default:
            return "NULL";
        }
      };
    },
    535: function (n, t, e) {
      "use strict";
      e.r(t);
      var i,
        c,
        a,
        o,
        d,
        r,
        l,
        s,
        p,
        u,
        h,
        b,
        f = e(94),
        x = e(89),
        g = e(2),
        j = e(4),
        m = e(103),
        v = e(119),
        w = e(234),
        O = e(139),
        y = e(121),
        B = e(421),
        k = e(46),
        I = e(162),
        z = e(125),
        N = e(45),
        S = e(132),
        L = e(11);
      t.default = function () {
        var n,
          t,
          e,
          i,
          c,
          a,
          o,
          d,
          r,
          l = Object(z.a)(),
          s = Object(j.g)(),
          p = Object(j.i)(),
          u = p.param,
          h = p.subparam,
          b = p.id,
          f = Object(g.useState)(),
          m = Object(x.a)(f, 2),
          D = m[0],
          F = m[1],
          K = localStorage.getItem("stno"),
          P = Object(g.useState)(!1),
          Q = Object(x.a)(P, 2),
          R = Q[0],
          V = Q[1],
          X = Object(O.a)(y.b, { variables: { id: parseInt(b, 10) } }),
          Y = X.data,
          Z = X.loading;
        return (
          Object(g.useEffect)(
            function () {
              F(Object(w.a)(h)), V(Object(S.e)(h));
            },
            [h]
          ),
          Object(g.useEffect)(
            function () {
              var n;
              null !== Y &&
                void 0 !== Y &&
                null !== (n = Y.getBoardById.data) &&
                void 0 !== n &&
                n.private &&
                Y.getBoardById.data.writer !== K &&
                (N.b.info("\ube44\ubc00\uae00 \uc785\ub2c8\ub2e4"),
                s.push("/main/board/".concat(u, "/").concat(h)));
            },
            [Y, K, u, h, s]
          ),
          Z
            ? Object(L.jsx)("div", { children: "loading..." })
            : Object(L.jsxs)(_, {
                children: [
                  Object(L.jsxs)(W, {
                    children: [
                      Object(L.jsx)(E, {
                        margin: l.width > 1500 ? "25%" : "15%",
                        children: I.a.map(function (n, t) {
                          return n.title === u.split("-")[0]
                            ? Object(L.jsxs)(
                                "div",
                                {
                                  children: [
                                    Object(L.jsx)("span", {
                                      className: "cover-main-title",
                                      children: n.ko_title,
                                    }),
                                    Object(L.jsx)("span", {
                                      className: "cover-description",
                                      children: n.description,
                                    }),
                                  ],
                                },
                                n.key
                              )
                            : null;
                        }),
                      }),
                      Object(L.jsx)(M, {
                        isBigger: "major" === u,
                        margin: "5%",
                        children: Object(L.jsx)("div", {
                          className: "submenu-content",
                          children: I.a.map(function (n, t) {
                            return n.title === u
                              ? n.subMenu.map(function (n, t) {
                                  var e = n.key === h ? 0 : 1;
                                  return Object(L.jsxs)(
                                    A,
                                    {
                                      className: "submenu-col",
                                      first: e,
                                      children: [
                                        Object(L.jsx)(C, { first: e }),
                                        Object(L.jsx)(q, {
                                          to: "/main/board/"
                                            .concat(u, "/")
                                            .concat(n.key),
                                          first: e,
                                          children: Object(L.jsx)("span", {
                                            style: { fontWeight: 400 },
                                            children: n.ko_title,
                                          }),
                                        }),
                                      ],
                                    },
                                    "".concat(t, "key")
                                  );
                                })
                              : null;
                          }),
                        }),
                      }),
                      Object(L.jsx)("img", {
                        src: "/img/detailBG.jpeg",
                        alt: "cover",
                      }),
                    ],
                  }),
                  Object(L.jsxs)(H, {
                    children: [
                      Object(L.jsxs)("div", {
                        className: "head",
                        children: [
                          Object(L.jsx)("div", {}),
                          Object(L.jsx)("div", {
                            className: "head-title",
                            children: D,
                          }),
                          Object(L.jsx)("div", {
                            className: "head-logo",
                            children: Object(L.jsx)("img", {
                              src: "/img/blackLogo.jpeg",
                              alt: "logo",
                            }),
                          }),
                        ],
                      }),
                      Object(L.jsxs)(J, {
                        children: [
                          Object(L.jsxs)("div", {
                            className: "content-head",
                            children: [
                              Object(L.jsx)("div", {
                                className: "content-head-title",
                                children:
                                  null === Y ||
                                  void 0 === Y ||
                                  null === (n = Y.getBoardById.data) ||
                                  void 0 === n
                                    ? void 0
                                    : n.title,
                              }),
                              Object(L.jsxs)("div", {
                                className: "content-head-desc",
                                children: [
                                  Object(L.jsx)("div", {
                                    className: "content-head-desc-date",
                                    children:
                                      null === Y ||
                                      void 0 === Y ||
                                      null === (t = Y.getBoardById.data) ||
                                      void 0 === t
                                        ? void 0
                                        : t.inputCreatedAt,
                                  }),
                                  Object(L.jsx)("div", {
                                    children:
                                      null !== Y &&
                                      void 0 !== Y &&
                                      null !== (e = Y.getBoardById.data) &&
                                      void 0 !== e &&
                                      e.writer
                                        ? null === Y || void 0 === Y
                                          ? void 0
                                          : Y.getBoardById.data.writer
                                        : "\uad00\ub9ac\uc790",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(L.jsxs)(T, {
                            children: [
                              null !== Y &&
                              void 0 !== Y &&
                              null !== (i = Y.getBoardById.data) &&
                              void 0 !== i &&
                              i.images &&
                              Y.getBoardById.data.images[0]
                                ? Object(L.jsx)("img", {
                                    src: Y.getBoardById.data.images[0].url,
                                    alt: "news uploaded img",
                                  })
                                : "",
                              Object(L.jsx)("div", {
                                className: "content-body-desc",
                                dangerouslySetInnerHTML: {
                                  __html:
                                    (null === Y ||
                                    void 0 === Y ||
                                    null === (c = Y.getBoardById.data) ||
                                    void 0 === c
                                      ? void 0
                                      : c.content) || "",
                                },
                              }),
                              (null === Y ||
                              void 0 === Y ||
                              null === (a = Y.getBoardById.data) ||
                              void 0 === a
                                ? void 0
                                : a.showAttach) &&
                                (null === Y ||
                                void 0 === Y ||
                                null === (o = Y.getBoardById.data) ||
                                void 0 === o
                                  ? void 0
                                  : o.files) &&
                                Y.getBoardById.data.files.length > 0 &&
                                Object(L.jsx)("div", {
                                  className: "content-body-attachment",
                                  children:
                                    null === Y ||
                                    void 0 === Y ||
                                    null === (d = Y.getBoardById.data) ||
                                    void 0 === d
                                      ? void 0
                                      : d.files.map(function (n, t) {
                                          return Object(L.jsxs)(
                                            "div",
                                            {
                                              className: "attachment-row",
                                              children: [
                                                Object(L.jsx)(B.a, {
                                                  size:
                                                    l.width > v.c.phoneMedium
                                                      ? 14
                                                      : 8,
                                                }),
                                                Object(L.jsx)("a", {
                                                  href:
                                                    null === n || void 0 === n
                                                      ? void 0
                                                      : n.url,
                                                  download: !0,
                                                  target: "_blank",
                                                  rel: "noreferrer",
                                                  children:
                                                    null === n || void 0 === n
                                                      ? void 0
                                                      : n.fileName,
                                                }),
                                              ],
                                            },
                                            t
                                          );
                                        }),
                                }),
                            ],
                          }),
                          Object(L.jsxs)(G, {
                            children: [
                              R &&
                                Object(L.jsx)("div", {
                                  className: "reply-title",
                                  children: "\u21aa\ub2f5\uae00",
                                }),
                              Object(L.jsx)("div", {
                                className: "reply-content",
                                dangerouslySetInnerHTML: {
                                  __html:
                                    (Y &&
                                      Y.getBoardById.data &&
                                      Y.getBoardById.data.replies &&
                                      Y.getBoardById.data.replies[0] &&
                                      (null ===
                                        (r = Y.getBoardById.data.replies[0]) ||
                                      void 0 === r
                                        ? void 0
                                        : r.content)) ||
                                    "",
                                },
                              }),
                            ],
                          }),
                          Object(L.jsx)(U, {
                            children: Object(L.jsx)(k.b, {
                              to: "/main/board/".concat(u, "/").concat(h),
                              children: "\ubaa9\ub85d\ubcf4\uae30",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
        );
      };
      var _ = m.a.div(
          i ||
            (i = Object(f.a)([
              "\n  ",
              " {\n  }\n  ",
              " {\n    /* width: 1280px; */\n    margin: 0 auto;\n    padding-top: 15px;\n    min-height: 50vh;\n    min-width: 800px;\n    max-width: 1920px;\n  }\n",
            ])),
          Object(v.d)(v.b),
          Object(v.d)(v.a)
        ),
        W = m.a.div(
          c ||
            (c = Object(f.a)([
              "\n  ",
              " {\n    width: 100%;\n    height: 120px;\n    & img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n  ",
              " {\n    width: 100%;\n    min-width: 1280px;\n    height: 350px;\n    margin: 0 auto;\n    position: relative;\n    & img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n",
            ])),
          Object(v.d)(v.b),
          Object(v.d)(v.a)
        ),
        E = m.a.div(
          a ||
            (a = Object(f.a)([
              "\n  ",
              " {\n    position: absolute;\n    top: 10%;\n    left: 5%;\n    & .cover-main-title {\n      font-size: 20px;\n      font-weight: 500px;\n      color: white;\n      display: block;\n    }\n    & .cover-description {\n      display: block;\n      font-size: 10px;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n    }\n  }\n  ",
              " {\n    position: absolute;\n    font-size: 20px;\n    margin-left: ",
              ";\n    margin-top: 50px;\n    & .cover-main-title {\n      font-size: 40px;\n      font-weight: 500;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n      text-shadow: 3px 3px 3px #000000e3;\n      display: block;\n    }\n\n    & .cover-description {\n      display: block;\n      font-size: 20px;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n      text-shadow: 3px 3px 3px #000000e3;\n    }\n  }\n",
            ])),
          Object(v.d)(v.b),
          Object(v.d)(v.a),
          function (n) {
            return n.margin;
          }
        ),
        M = m.a.div(
          o ||
            (o = Object(f.a)([
              "\n  ",
              " {\n    display: none;\n  }\n  ",
              " {\n    width: 100%;\n    background-color: #e5e2e2b8;\n    position: absolute;\n    bottom: 0;\n    font-size: 15px;\n    & .submenu-content {\n      max-width: 1200px;\n      min-width: 1000px;\n      min-height: 50px;\n      height: ",
              ";\n      margin: 0 auto;\n      display: flex;\n      align-items: center;\n      flex-wrap: wrap;\n      padding-left: ",
              ";\n    }\n    & .submenu-col {\n      width: 16%;\n      height: 50px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n",
            ])),
          Object(v.d)(v.b),
          Object(v.d)(v.a),
          function (n) {
            return n.isBigger ? "100px" : "50px";
          },
          function (n) {
            return n.margin;
          }
        ),
        q = Object(m.a)(k.b)(
          d ||
            (d = Object(f.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2px 5px;\n    font-size: 16px;\n    color: ",
              ";\n    &:hover {\n      color: white;\n    }\n  }\n",
            ])),
          Object(v.d)(v.b),
          Object(v.d)(v.a),
          function (n) {
            return 0 === n.first ? "white" : "black";
          }
        ),
        A = m.a.div(
          r ||
            (r = Object(f.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    background-color: ",
              ";\n    color: ",
              ";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    &:hover {\n      background-color: #0c1b58;\n      transition: 0.2s linear;\n      color: white;\n    }\n  }\n",
            ])),
          Object(v.d)(v.b),
          Object(v.d)(v.a),
          function (n) {
            return 0 === n.first ? "#0c1b58" : "";
          },
          function (n) {
            return 0 === n.first ? "white" : "black";
          }
        ),
        C = m.a.div(
          l ||
            (l = Object(f.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    width: 50%;\n    height: 2px;\n    border-top: ",
              ";\n  }\n",
            ])),
          Object(v.d)(v.b),
          Object(v.d)(v.a),
          function (n) {
            return 0 === n.first ? "2px solid white" : "";
          }
        ),
        H = m.a.div(
          s ||
            (s = Object(f.a)([
              "\n  ",
              " {\n    & .head {\n      height: 80px;\n      width: 100%;\n      display: flex;\n      align-items: center;\n    }\n    & .head-title {\n      font-size: 20px;\n      font-weight: 500;\n      color: #0c1b58;\n    }\n\n    & .head-logo {\n      display: none;\n    }\n  }\n  ",
              " {\n    max-width: 1280px;\n    min-width: 1000px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    margin: 0 auto;\n    & .head {\n      min-height: 150px;\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n    & .head-title {\n      font-size: 35px;\n      font-weight: 500;\n      color: #0c1b58;\n    }\n\n    & .head-logo {\n      img {\n        height: 100px;\n        width: 100px;\n      }\n    }\n  }\n",
            ])),
          Object(v.d)(v.b),
          Object(v.d)(v.a)
        ),
        J = m.a.div(
          p ||
            (p = Object(f.a)([
              "\n  ",
              " {\n    width: 100%;\n\n    & .content-head {\n      width: 100%;\n      border-top: 2px solid black;\n      border-bottom: 2px solid black;\n      padding: 20px 10px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      & .content-head-title {\n        font-size: 12px;\n        font-weight: 600;\n        display: flex;\n        align-items: center;\n      }\n\n      & .content-head-desc {\n        display: flex;\n        font-size: 10px;\n        color: #868686;\n\n        & .content-head-desc-date {\n          margin-right: 15px;\n        }\n      }\n    }\n  }\n  ",
              " {\n    width: 100%;\n    min-height: 30vh;\n    border-top: 3px solid #0c1b58;\n\n    & .content-head {\n      min-height: 150px;\n      width: 100%;\n      border-bottom: 1px solid black;\n      padding: 30px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      & .content-head-title {\n        font-size: 20px;\n        font-weight: 600;\n        min-height: 35px;\n        display: flex;\n        align-items: center;\n        color: #0c1b58;\n      }\n      & .content-head-desc {\n        display: flex;\n        font-size: 20px;\n        color: #868686;\n        margin-top: 15px;\n        & .content-head-desc-date {\n          margin-right: 50px;\n        }\n      }\n    }\n  }\n",
            ])),
          Object(v.d)(v.b),
          Object(v.d)(v.a)
        ),
        T = m.a.div(
          u ||
            (u = Object(f.a)([
              "\n  ",
              " {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 10px;\n    & img {\n      width: 310px;\n      height: 150px;\n    }\n\n    & .content-body-desc {\n      font-size: 10px;\n      margin-top: 30px;\n      width: 310px;\n    }\n\n    & .content-body-attachment {\n      width: 80%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      font-size: 10px;\n      min-height: 20px;\n      margin: 30px 0;\n      /* padding:0 15px; */\n      background-color: #f7f7f7;\n      & .attachment-row {\n        display: flex;\n\n        a {\n          margin-left: 20px;\n          width: 230px;\n          display: block;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n        }\n      }\n    }\n  }\n  ",
              " {\n    padding: 30px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* align-items: center; */\n\n    & img {\n      width: 850px;\n      height: 450px;\n      object-fit: cover;\n    }\n\n    & .content-body-desc {\n      margin-top: 30px;\n    }\n\n    & .content-body-attachment {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      width: 100%;\n      min-height: 40px;\n      background-color: #f7f7f7;\n      margin: 50px 0;\n      padding: 20px;\n      a {\n        margin-left: 20px;\n      }\n    }\n  }\n",
            ])),
          Object(v.d)(v.b),
          Object(v.d)(v.a)
        ),
        G = m.a.div(
          h ||
            (h = Object(f.a)([
              "\n  ",
              " {\n    display: none;\n  }\n  ",
              " {\n    width: 100%;\n    min-height: 50px;\n    margin: 0 auto;\n    border-top: 2px solid #dddddd;\n    padding: 20px 30px;\n    & .reply-title {\n      font-size: 24px;\n      color: #0c1b58;\n      font-weight: 600;\n    }\n\n    & .reply-content {\n      width: 90%;\n      padding: 10px 40px;\n    }\n  }\n",
            ])),
          Object(v.d)(v.b),
          Object(v.d)(v.a)
        ),
        U = m.a.div(
          b ||
            (b = Object(f.a)([
              "\n  ",
              " {\n    height: 70px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    a {\n      color: #b7b7b7;\n      font-size: 10px;\n    }\n  }\n  ",
              " {\n    height: 150px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    a {\n      color: #b7b7b7;\n      font-size: 18px;\n    }\n  }\n",
            ])),
          Object(v.d)(v.b),
          Object(v.d)(v.a)
        );
    },
  },
]);
//# sourceMappingURL=27.5dfd5522.chunk.js.map
