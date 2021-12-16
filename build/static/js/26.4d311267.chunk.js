(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [26],
  {
    108: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return m;
      }),
        t.d(e, "k", function () {
          return u;
        }),
        t.d(e, "e", function () {
          return f;
        }),
        t.d(e, "i", function () {
          return w;
        }),
        t.d(e, "f", function () {
          return v;
        }),
        t.d(e, "g", function () {
          return y;
        }),
        t.d(e, "b", function () {
          return k;
        }),
        t.d(e, "c", function () {
          return $;
        }),
        t.d(e, "d", function () {
          return N;
        }),
        t.d(e, "h", function () {
          return S;
        }),
        t.d(e, "j", function () {
          return z;
        });
      var i,
        c,
        a,
        r,
        d,
        l,
        o,
        s,
        b,
        j,
        h,
        x,
        g,
        p = t(101),
        O = t(440),
        m = Object(O.a)(
          i ||
            (i = Object(p.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        u = Object(O.a)(
          c ||
            (c = Object(p.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        f = Object(O.a)(
          a ||
            (a = Object(p.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        w = Object(O.a)(
          r ||
            (r = Object(p.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n  ) {\n    editBoard(id: $id, title: $title, content: $content, link: $link) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        v =
          (Object(O.a)(
            d ||
              (d = Object(p.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(O.a)(
            l ||
              (l = Object(p.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(O.a)(
            o ||
              (o = Object(p.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        y = Object(O.a)(
          s ||
            (s = Object(p.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        k = Object(O.a)(
          b ||
            (b = Object(p.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        $ = Object(O.a)(
          j ||
            (j = Object(p.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N = Object(O.a)(
          h ||
            (h = Object(p.a)([
              "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S = Object(O.a)(
          x ||
            (x = Object(p.a)([
              "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        z = Object(O.a)(
          g ||
            (g = Object(p.a)([
              "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        );
    },
    127: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return i;
      });
      var i = function (n) {
        var e = new Date(1e3 * Math.floor(parseInt(n, 10) / 1e3));
        return (
          e.getFullYear() +
          "-" +
          (e.getMonth() + 1 >= 10
            ? e.getMonth() + 1
            : "0".concat(e.getMonth() + 1)) +
          "-" +
          (e.getDate() >= 10 ? e.getDate() : "0".concat(e.getDate()))
        );
      };
    },
    132: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return a;
      });
      var i = t(109),
        c = t(2),
        a = function () {
          var n = "object" === typeof window,
            e = Object(c.useCallback)(
              function () {
                return {
                  width: n ? window.innerWidth : 0,
                  height: n ? window.innerWidth : 0,
                };
              },
              [n]
            ),
            t = Object(c.useState)(e),
            a = Object(i.a)(t, 2),
            r = a[0],
            d = a[1];
          return (
            Object(c.useEffect)(
              function () {
                if (n) {
                  var t = function () {
                    d(e());
                  };
                  return (
                    window.addEventListener("resize", t),
                    function () {
                      return window.removeEventListener("resize", t);
                    }
                  );
                }
              },
              [e, n]
            ),
            r
          );
        };
    },
    442: function (n, e, t) {
      "use strict";
      t.r(e);
      var i,
        c,
        a,
        r,
        d,
        l,
        o,
        s,
        b,
        j,
        h,
        x,
        g,
        p,
        O,
        m,
        u,
        f,
        w,
        v,
        y,
        k,
        $,
        N,
        S,
        z,
        I,
        B,
        F,
        C,
        M,
        L,
        A,
        D = t(2),
        W = t(101),
        E = t(110),
        P = t(119),
        Y = E.a.div(
          i ||
            (i = Object(W.a)([
              "\n  ",
              " {\n    width: 100%;\n    /* max-width:375px; */\n    min-height: 100vh;\n  }\n  ",
              " {\n    max-width: 1920px;\n    margin-top: 15px;\n    margin: 0 auto;\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        J = t(171),
        T = (t(377), t(274)),
        V = t(236),
        _ = t(132),
        q = t(13),
        K = function () {
          var n = Object(_.a)();
          return Object(q.jsx)(R, {
            children: Object(q.jsxs)(T.Carousel, {
              autoPlay: !0,
              infiniteLoop: !0,
              showArrows: !1,
              showThumbs: !1,
              showStatus: !1,
              renderIndicator:
                n.width > 375
                  ? function (n, e, t, i) {
                      var c = {
                          marginLeft: 20,
                          color: "white",
                          cursor: "pointer",
                        },
                        a = e
                          ? Object(J.a)(
                              Object(J.a)({}, c),
                              {},
                              { color: "red" }
                            )
                          : Object(J.a)({}, c);
                      return Object(q.jsxs)(
                        "span",
                        {
                          style: a,
                          onClick: n,
                          onKeyDown: n,
                          role: "button",
                          tabIndex: 0,
                          "aria-label": "".concat(i, " ").concat(t + 1),
                          children: [
                            0 === t &&
                              Object(q.jsx)(V.a, { size: 45, color: "white" }),
                            1 === t &&
                              Object(q.jsx)(V.b, { size: 45, color: "white" }),
                          ],
                        },
                        t
                      );
                    }
                  : void 0,
              children: [
                Object(q.jsxs)(U, {
                  children: [
                    Object(q.jsx)(G, {
                      src:
                        n.width > 375
                          ? "img/banner1.jpeg"
                          : "img/mobileBanner.jpeg",
                      alt: "banner",
                    }),
                    n.width > 375 &&
                      Object(q.jsx)(H, {
                        src: "img/banner2_cover.jpeg",
                        alt: "banner cover",
                      }),
                  ],
                }),
                Object(q.jsxs)(U, {
                  children: [
                    Object(q.jsx)(G, {
                      src:
                        n.width > 375
                          ? "img/banner2.jpeg"
                          : "img/mobileBanner2.jpeg",
                      alt: "banner2",
                    }),
                    n.width > 375 &&
                      Object(q.jsx)(H, {
                        src: "img/banner1_cover.jpeg",
                        alt: "banner2 cover",
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        R = E.a.div(
          c ||
            (c = Object(W.a)([
              "\n  ",
              " {\n    height: 400px;\n    width: 100%;\n  }\n  ",
              " {\n    width: 100%;\n    margin-top: 15px;\n    max-width: 1920px;\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        U = E.a.div(
          a ||
            (a = Object(W.a)([
              "\n  width: 100%;\n  height: 100%;\n  ",
              " {\n    margin: 0;\n  }\n  ",
              " {\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        G = E.a.img(
          r ||
            (r = Object(W.a)([
              "\n  object-fit: contain;\n  ",
              " {\n    height: 400px;\n  }\n  ",
              " {\n    height: 640px;\n    width: 1280px;\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        H = E.a.img(
          d ||
            (d = Object(W.a)([
              "\n  height: 400px;\n  object-fit: cover;\n  position: absolute;\n  ",
              " {\n    height: 640px;\n  }\n",
            ])),
          Object(P.d)(P.a)
        ),
        Q =
          (E.a.span(
            l ||
              (l = Object(W.a)([
                "\n  display: none;\n  ",
                " {\n    display: block;\n    color: white;\n    width: 450px;\n  }\n",
              ])),
            Object(P.d)(P.a)
          ),
          E.a.div(
            o ||
              (o = Object(W.a)([
                "\n  ",
                " {\n    max-width: 1280px;\n    text-align: start;\n    position: absolute;\n    top: 30%;\n    z-index: 5;\n    right: 20%;\n\n    & .first-content {\n    }\n    & .second-content {\n      font-size: 50px;\n      letter-spacing: -1.43px;\n    }\n    & .third-content {\n      letter-spacing: 0.22px;\n    }\n  }\n",
              ])),
            Object(P.d)(P.a)
          ),
          t(109)),
        X = t(145),
        Z = t(437),
        nn = t(108),
        en = function () {
          var n = Object(_.a)(),
            e = Object(D.useState)(),
            t = Object(Q.a)(e, 2),
            i = t[0],
            c = t[1],
            a = Object(D.useState)(0),
            r = Object(Q.a)(a, 2),
            d = r[0],
            l = r[1];
          return Object(X.a)(nn.k, {
            variables: { category: "achievement-news" },
            onCompleted: function (n) {
              var e = n.getBoardByCategory,
                t = e.ok,
                i = e.data,
                a = e.err;
              t && i && null !== i ? c(i) : console.log(a);
            },
          }).loading
            ? Object(q.jsx)("div", { children: "loading..." })
            : Object(q.jsx)(tn, {
                children: Object(q.jsxs)(cn, {
                  children: [
                    Object(q.jsxs)(an, {
                      children: [
                        Object(q.jsxs)("div", {
                          className: "main-sub-title",
                          children: [
                            Object(q.jsx)("div", { className: "line" }),
                            Object(q.jsx)("span", {
                              className: "title",
                              children: "\uc0ac\uc5c5\ub2e8\uc18c\uc2dd",
                            }),
                          ],
                        }),
                        i &&
                          null !== i &&
                          Object(q.jsx)("div", {
                            className: "dots",
                            children: i.map(function (n, e) {
                              return e < 5
                                ? Object(q.jsx)(
                                    ln,
                                    {
                                      current: d === e,
                                      onClick: function () {
                                        return l(e);
                                      },
                                    },
                                    e
                                  )
                                : null;
                            }),
                          }),
                      ],
                    }),
                    Object(q.jsx)(dn, {
                      children: i
                        ? Object(q.jsx)(q.Fragment, {
                            children:
                              n.width < 376
                                ? Object(q.jsx)(T.Carousel, {
                                    showIndicators: !1,
                                    showStatus: !1,
                                    showThumbs: !1,
                                    showArrows: !1,
                                    selectedItem: d,
                                    infiniteLoop: !0,
                                    width: 285,
                                    children: i.map(function (n, e) {
                                      var t,
                                        i = "";
                                      n.images &&
                                        n.images.length > 0 &&
                                        (i =
                                          null ===
                                            (t =
                                              n.images[n.images.length - 1]) ||
                                          void 0 === t
                                            ? void 0
                                            : t.url);
                                      return Object(q.jsxs)(
                                        on,
                                        {
                                          children: [
                                            Object(q.jsx)(rn, {
                                              src: i,
                                              alt: "news image",
                                            }),
                                            Object(q.jsx)("div", {
                                              className: "carousel-text",
                                              children: n.title,
                                            }),
                                          ],
                                        },
                                        e
                                      );
                                    }),
                                  })
                                : Object(q.jsx)("div", {
                                    className: "card-container",
                                    children: i.map(function (n, e) {
                                      var t,
                                        i = "";
                                      n.images &&
                                        n.images.length > 0 &&
                                        (i =
                                          null ===
                                            (t =
                                              n.images[n.images.length - 1]) ||
                                          void 0 === t
                                            ? void 0
                                            : t.url);
                                      return e > 2
                                        ? null
                                        : Object(q.jsx)(
                                            sn,
                                            {
                                              hoverable: !0,
                                              bordered: !1,
                                              cover: Object(q.jsx)("img", {
                                                src: i,
                                                alt: "example",
                                                height: 270,
                                                width: 240,
                                              }),
                                              children: Object(q.jsx)("div", {
                                                className: "card-desc",
                                                children: n.title,
                                              }),
                                            },
                                            e
                                          );
                                    }),
                                  }),
                          })
                        : Object(q.jsx)(q.Fragment, {
                            children:
                              "\uc5c5\ub85c\ub4dc \ub41c \uc18c\uc2dd\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
                          }),
                    }),
                  ],
                }),
              });
        },
        tn = E.a.div(
          s ||
            (s = Object(W.a)([
              '\n  background-image: url("img/homebnews.jpeg");\n  ',
              " {\n    min-height: 400px;\n    background-position: center;\n    background-size: cover;\n  }\n  ",
              " {\n    min-height: 450px;\n    max-width: 1980px;\n    background-position: center;\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        cn = E.a.div(
          b ||
            (b = Object(W.a)([
              "\n  display: flex;\n  ",
              " {\n    min-height: 400px;\n    flex-direction: column;\n    padding: 25px;\n  }\n  ",
              " {\n    width: 900px;\n    min-height: 450px;\n    margin: 0 auto;\n    flex-direction: column;\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        an = E.a.div(
          j ||
            (j = Object(W.a)([
              "\n  display: flex;\n  ",
              " {\n    width: 100%;\n    justify-content: space-between;\n    margin-bottom: 25px;\n    & .line {\n      width: 25px;\n      border-bottom: 3px solid #c53082;\n    }\n\n    & .title {\n      font-size: 17px;\n      font-weight: 600;\n      color: white;\n    }\n\n    & .dots {\n      display: flex;\n    }\n  }\n  ",
              " {\n    & .main-sub-title {\n      width: 100%;\n      display: flex;\n      position: relative;\n      height: 60px;\n    }\n\n    & .line {\n      width: 1px;\n      height: 60px;\n      border-left: 10px solid #c53082;\n      margin-right: 10px;\n    }\n\n    & .title {\n      font-size: 17px;\n      font-weight: 600;\n      color: white;\n      display: block;\n      text-align: end;\n      padding-top: 30px;\n    }\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        rn = E.a.img(
          h ||
            (h = Object(W.a)([
              "\n  ",
              " {\n    margin-top: 25px;\n    width: 285px;\n    height: 260px;\n    object-fit: cover;\n  }\n  ",
              " {\n    width: 100%;\n    height: 250px;\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        dn = E.a.div(
          x ||
            (x = Object(W.a)([
              "\n  ",
              " {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  ",
              " {\n    width: 100%;\n    margin-top: 15px;\n    height: 360px;\n    padding-bottom: 20px;\n    & .card-container {\n      display: flex;\n      height: 100%;\n      width: 100%;\n      justify-content: space-between;\n    }\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        ln = E.a.div(
          g ||
            (g = Object(W.a)([
              "\n  ",
              " {\n    width: 8px;\n    height: 8px;\n    background-color: ",
              ";\n    border-radius: 10px;\n    margin: 2px;\n  }\n",
            ])),
          Object(P.d)(P.b),
          function (n) {
            return n.current ? "white" : "gray";
          }
        ),
        on = E.a.div(
          p ||
            (p = Object(W.a)([
              "\n  width: 100%;\n  ",
              " {\n    max-width: 375px;\n    margin: 0 auto;\n    & .carousel-text {\n      margin-top: 25px;\n      max-width: 270px;\n      color: white;\n      max-height: 40px;\n      text-align: left;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n",
            ])),
          Object(P.d)(P.b)
        ),
        sn = Object(E.a)(Z.a)(
          O ||
            (O = Object(W.a)([
              "\n  ",
              " {\n    width: 200px;\n    height: 100%;\n    border: 1px solid cyan;\n  }\n  ",
              " {\n    width: 280px;\n    height: 100%;\n    background: transparent;\n    & .card-desc {\n      max-height: 65px;\n      color: white;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        bn = t(445),
        jn = t(127),
        hn = t(121),
        xn = t(384),
        gn = t(53),
        pn = function (n) {
          var e = n.data,
            t = new Date().getMonth() + 1,
            i = ""
              .concat(new Date().getFullYear(), ".")
              .concat(new Date().getMonth() + 1),
            c =
              null === e || void 0 === e
                ? void 0
                : e
                    .filter(function (n) {
                      return (
                        parseInt(
                          Object(jn.a)(n.createdAt || "").split("-")[1]
                        ) === t
                      );
                    })
                    .splice(0, 6),
            a = Object(D.useCallback)(function (n) {
              var e = Object(jn.a)(n.createdAt);
              return Object(q.jsxs)(kn, {
                children: [
                  Object(q.jsx)($n, { children: "\uacf5\uc9c0" }),
                  Object(q.jsxs)(Nn, {
                    children: ["[\uc548\ub0b4] ", n.title],
                  }),
                  Object(q.jsx)(Sn, { children: e }),
                ],
              });
            }, []);
          return Object(q.jsxs)(vn, {
            children: [
              Object(q.jsxs)("div", {
                className: "board-title",
                children: [
                  Object(q.jsxs)("div", {
                    className: "board-top-title",
                    children: [
                      Object(q.jsxs)(yn, {
                        children: [
                          Object(q.jsx)("div", { className: "line" }),
                          Object(q.jsx)("span", {
                            className: "title",
                            children: "\uacf5\uc9c0\uc0ac\ud56d",
                          }),
                        ],
                      }),
                      Object(q.jsx)(gn.b, {
                        to: "/main/board/community/community-notice",
                        style: { color: "black" },
                        children: "\ub354\ubcf4\uae30 +",
                      }),
                    ],
                  }),
                  Object(q.jsxs)("div", {
                    className: "board-bottom-title",
                    children: [
                      Object(q.jsxs)("div", {
                        className: "date",
                        children: [
                          Object(q.jsx)("span", {
                            className: "date-title",
                            children: t,
                          }),
                          Object(q.jsx)("span", {
                            className: "date-subtitle",
                            children: i,
                          }),
                        ],
                      }),
                      Object(q.jsxs)("div", {
                        className: "title",
                        children: [
                          "SW \uc911\uc2ec\ub300\ud559 ",
                          t,
                          "\uc6d4 \uacf5\uc9c0\uc0ac\ud56d",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(q.jsx)("div", {
                children: Object(q.jsx)(bn.b, {
                  style: { width: "100%" },
                  dataSource: c,
                  renderItem: function (n) {
                    return a(n);
                  },
                }),
              }),
            ],
          });
        },
        On = function () {
          return Object(q.jsx)(zn, {
            children: Object(q.jsxs)("div", {
              className: "board-title",
              children: [
                Object(q.jsx)("div", {
                  className: "board-top-title",
                  children: Object(q.jsxs)(yn, {
                    children: [
                      Object(q.jsx)("div", { className: "line" }),
                      Object(q.jsx)("span", {
                        className: "title",
                        children: "\ud64d\ubcf4\uc601\uc0c1",
                      }),
                    ],
                  }),
                }),
                Object(q.jsx)("div", {
                  className: "video-container",
                  children: Object(q.jsx)(xn.a, {
                    videoId: "0ftF6DYPhUk",
                    opts: {
                      height: "300px",
                      width: "100%",
                      playVars: { autoPlay: 1 },
                    },
                    onReady: function (n) {
                      n.target.pauseVideo();
                    },
                  }),
                }),
              ],
            }),
          });
        },
        mn = function () {
          var n = Object(_.a)(),
            e = Object(X.a)(hn.c, {
              variables: { category: "community-notice" },
            }),
            t = e.loading,
            i = e.data;
          return t
            ? Object(q.jsx)("div", { children: "loading..." })
            : Object(q.jsx)(un, {
                children: Object(q.jsx)(fn, {
                  children:
                    n.width > 375
                      ? Object(q.jsxs)(q.Fragment, {
                          children: [
                            Object(q.jsx)(wn, {
                              children:
                                null ===
                                (null === i || void 0 === i
                                  ? void 0
                                  : i.getBoardByMonth.data)
                                  ? Object(q.jsx)(q.Fragment, {
                                      children: "no data",
                                    })
                                  : Object(q.jsx)(pn, {
                                      data:
                                        null === i || void 0 === i
                                          ? void 0
                                          : i.getBoardByMonth.data,
                                    }),
                            }),
                            Object(q.jsx)(wn, {
                              children: Object(q.jsx)(On, {}),
                            }),
                          ],
                        })
                      : Object(q.jsxs)(q.Fragment, {
                          children: [
                            Object(q.jsx)(wn, {
                              children: Object(q.jsx)(On, {}),
                            }),
                            Object(q.jsx)(wn, {
                              children:
                                null ===
                                (null === i || void 0 === i
                                  ? void 0
                                  : i.getBoardByMonth.data)
                                  ? Object(q.jsx)(q.Fragment, {
                                      children: "no data",
                                    })
                                  : Object(q.jsx)(pn, {
                                      data:
                                        null === i || void 0 === i
                                          ? void 0
                                          : i.getBoardByMonth.data,
                                    }),
                            }),
                          ],
                        }),
                }),
              });
        },
        un = E.a.div(
          m ||
            (m = Object(W.a)([
              "\n  ",
              " {\n    min-height: 400px;\n    width: 100%;\n  }\n  ",
              " {\n    height: 400px;\n    max-width: 1980px;\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        fn = E.a.div(
          u ||
            (u = Object(W.a)([
              "\n  ",
              " {\n    width: 100%;\n  }\n  ",
              " {\n    width: 1280px;\n    height: 100%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        wn = E.a.div(
          f ||
            (f = Object(W.a)([
              "\n  ",
              " {\n    min-height: 300px;\n  }\n  ",
              " {\n    height: 90%;\n    width: 600px;\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        vn = E.a.div(
          w ||
            (w = Object(W.a)([
              "\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n  width: 100%;\n  padding: 0 35px;\n  ",
              " {\n    padding-top: 30px;\n    & .board-title {\n      display: flex;\n      flex-direction: column;\n      margin-bottom: 15px;\n      & .board-top-title {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center;\n        font-size: 11px;\n        font-weight: 600;\n        margin-bottom: 35px;\n      }\n      & .board-bottom-title {\n        display: flex;\n        align-items: center;\n        & .date {\n          height: 50px;\n          width: 50px;\n          background-color: #f0f2fa;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          margin-right: 20px;\n          & .date-title {\n            display: block;\n            font-size: 28px;\n            color: #003875;\n            font-weight: 600;\n            line-height: 1;\n          }\n\n          & .date-subtitle {\n            display: block;\n            font-size: 8px;\n          }\n        }\n\n        & .title {\n          font-size: 18px;\n          font-weight: 600;\n          letter-spacing: -0.9px;\n        }\n      }\n    }\n  }\n  ",
              " {\n    padding-top: 15px;\n    & .board-title {\n      display: flex;\n      flex-direction: column;\n      margin-bottom: 15px;\n      & .board-top-title {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center;\n        font-size: 11px;\n        font-weight: 600;\n        margin-bottom: 15px;\n      }\n      & .board-bottom-title {\n        display: flex;\n        align-items: center;\n        & .date {\n          height: 50px;\n          width: 50px;\n          background-color: #f0f2fa;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          margin-right: 20px;\n          & .date-title {\n            display: block;\n            font-size: 26px;\n            color: #003875;\n            font-weight: 600;\n            line-height: 1;\n          }\n\n          & .date-subtitle {\n            display: block;\n            font-size: 8px;\n          }\n        }\n\n        & .title {\n          font-size: 18px;\n          font-weight: 600;\n          letter-spacing: -0.9px;\n        }\n      }\n    }\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        yn = E.a.div(
          v ||
            (v = Object(W.a)([
              "\n  ",
              " {\n    & .line {\n      width: 25px;\n      border-bottom: 3px solid #c53082;\n    }\n\n    & .title {\n      font-size: 17px;\n      font-weight: 600;\n    }\n  }\n  ",
              " {\n    & .title {\n      font-size: 20px;\n      font-weight: 600;\n    }\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        kn = Object(E.a)(bn.b.Item)(
          y ||
            (y = Object(W.a)([
              "\n  display: flex;\n  ",
              " {\n  }\n  ",
              " {\n    padding: 5px;\n    cursor: pointer;\n    &:hover {\n      opacity: 0.7;\n      transition: 0.2s linear;\n    }\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        $n = E.a.div(
          k ||
            (k = Object(W.a)([
              "\n  ",
              " {\n    width: 35px;\n    height: 20px;\n    color: #334ebc;\n    border: 1px solid #334ebc;\n    font-size: 7px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  ",
              " {\n    width: 45px;\n    height: 25px;\n    color: #334ebc;\n    border: 1px solid #334ebc;\n    font-size: 7px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        Nn = E.a.div(
          $ ||
            ($ = Object(W.a)([
              "\n  ",
              " {\n    font-size: 11px;\n    font-weight: 600;\n    width: 55%;\n    max-width: 200px;\n    color: #0c1b58;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  ",
              " {\n    font-size: 17px;\n    font-weight: 600;\n    width: 55%;\n    color: #0c1b58;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        Sn = E.a.div(
          N ||
            (N = Object(W.a)([
              "\n  ",
              " {\n    font-size: 11px;\n    font-weight: 600;\n    float: rigth;\n  }\n  ",
              " {\n    font-size: 16px;\n    font-weight: 600;\n    float: rigth;\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        zn = E.a.div(
          S ||
            (S = Object(W.a)([
              "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0 35px;\n  padding-top: 15px;\n  ",
              " {\n    height: 400px;\n    display: flex;\n    width: 100%;\n    box-shadow: 5px 5px 14px #0000005a;\n    padding: 15px 35px;\n  }\n\n  ",
              " {\n    height: 500px;\n\n    .video-container {\n      margin-top: 20px;\n    }\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        In = function () {
          var n = Object(D.useState)(),
            e = Object(Q.a)(n, 2),
            t = e[0],
            i = e[1],
            c = Object(D.useState)(),
            a = Object(Q.a)(c, 2),
            r = a[0],
            d = a[1],
            l = Object(D.useState)(),
            o = Object(Q.a)(l, 2),
            s = o[0],
            b = o[1],
            j = Object(D.useState)(),
            h = Object(Q.a)(j, 2),
            x = h[0],
            g = h[1],
            p = Object(D.useState)(),
            O = Object(Q.a)(p, 2),
            m = O[0],
            u = O[1],
            f = Object(D.useState)(),
            w = Object(Q.a)(f, 2),
            v = w[0],
            y = w[1],
            k = Object(D.useState)(),
            $ = Object(Q.a)(k, 2),
            N = $[0],
            S = $[1],
            z = Object(D.useState)(),
            I = Object(Q.a)(z, 2),
            B = I[0],
            F = I[1],
            C = Object(X.a)(nn.k, {
              variables: { category: "achievement-aidnews" },
              onCompleted: function (n) {
                var e = n.getBoardByCategory,
                  t = e.ok,
                  c = e.err,
                  a = e.data;
                t && a && a.length > 0
                  ? (i(a[0].images), u(a))
                  : console.log(c);
              },
            }).loading,
            M = Object(X.a)(nn.k, {
              variables: { category: "achievement-valuenews" },
              onCompleted: function (n) {
                var e = n.getBoardByCategory,
                  t = e.ok,
                  i = e.err,
                  c = e.data;
                t && c && c.length > 0
                  ? (d(c[0].images), S(c))
                  : console.log(i);
              },
            }).loading,
            L = Object(X.a)(nn.k, {
              variables: { category: "achievement-coopnews" },
              onCompleted: function (n) {
                var e = n.getBoardByCategory,
                  t = e.ok,
                  i = e.err,
                  c = e.data;
                t && c && c.length > 0
                  ? (b(c[0].images), y(c))
                  : console.log(i);
              },
            }).loading,
            A = Object(X.a)(nn.k, {
              variables: { category: "achievement-startup" },
              onCompleted: function (n) {
                var e = n.getBoardByCategory,
                  t = e.ok,
                  i = e.err,
                  c = e.data;
                t && c && c.length > 0
                  ? (g(c[0].images), F(c))
                  : console.log(i);
              },
            }).loading,
            W = Object(D.useCallback)(function (n) {
              return Object(q.jsx)("img", {
                src: n ? n.url : "",
                alt: "newsImage",
                style: { width: "100%", height: "100%", objectFit: "cover" },
              });
            }, []);
          return Object(q.jsx)(Bn, {
            children: Object(q.jsxs)(Fn, {
              children: [
                Object(q.jsxs)(Cn, {
                  children: [
                    Object(q.jsx)(Mn, {
                      children: C
                        ? Object(q.jsx)(q.Fragment, { children: "loading" })
                        : Object(q.jsxs)(q.Fragment, {
                            children: [
                              Object(q.jsxs)(Ln, {
                                children: [
                                  Object(q.jsx)("div", {
                                    className: "title-burger",
                                    children: "|||",
                                  }),
                                  Object(q.jsx)("div", {
                                    className: "title-title",
                                    children:
                                      "SW \uad50\uc721\uc9c0\uc6d0\uc13c\ud130 \uc18c\uc2dd",
                                  }),
                                  Object(q.jsx)("div", {
                                    className: "title-more",
                                    children: Object(q.jsx)(gn.b, {
                                      to: "/main/detail/achievement/achievement-aidnews",
                                      className: "title-link",
                                      children: "\ub354\ubcf4\uae30+",
                                    }),
                                  }),
                                ],
                              }),
                              Object(q.jsxs)(An, {
                                to: "/main/detail/achievement/achievement-aidnews/".concat(
                                  m && m[m.length - 1].id
                                ),
                                children: [
                                  Object(q.jsx)(Dn, {
                                    children: t
                                      ? W(t[t.length - 1])
                                      : Object(q.jsx)(q.Fragment, {
                                          children: "none",
                                        }),
                                  }),
                                  Object(q.jsxs)(Wn, {
                                    children: [
                                      Object(q.jsx)("div", {
                                        className: "section-title",
                                        children: m && m[0].title,
                                      }),
                                      Object(q.jsx)("div", {
                                        className: "section-desc",
                                        children: m && m[0].content,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                    }),
                    Object(q.jsx)(Mn, {
                      children: L
                        ? Object(q.jsx)(q.Fragment, { children: "loading" })
                        : Object(q.jsxs)(q.Fragment, {
                            children: [
                              Object(q.jsxs)(Ln, {
                                children: [
                                  Object(q.jsx)("div", {
                                    className: "title-burger",
                                    children: "|||",
                                  }),
                                  Object(q.jsx)("div", {
                                    className: "title-title",
                                    children:
                                      "SW \uc0b0\ud559\ud611\ub825 \uc18c\uc2dd",
                                  }),
                                  Object(q.jsx)("div", {
                                    className: "title-more",
                                    children: Object(q.jsx)(gn.b, {
                                      to: "/main/detail/achievement/achievement-coopnews",
                                      className: "title-link",
                                      children: "\ub354\ubcf4\uae30+",
                                    }),
                                  }),
                                ],
                              }),
                              Object(q.jsxs)(An, {
                                to: "/main/detail/achievement/achievement-coopnews/".concat(
                                  v && v[v.length - 1].id
                                ),
                                children: [
                                  Object(q.jsx)(Dn, {
                                    children: s
                                      ? W(s[s.length - 1])
                                      : Object(q.jsx)(q.Fragment, {
                                          children: "none",
                                        }),
                                  }),
                                  Object(q.jsxs)(Wn, {
                                    children: [
                                      Object(q.jsx)("div", {
                                        className: "section-title",
                                        children: v && v[0].title,
                                      }),
                                      Object(q.jsx)("div", {
                                        className: "section-desc",
                                        children: v && v[0].content,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
                Object(q.jsxs)(Cn, {
                  children: [
                    Object(q.jsx)(Mn, {
                      children: M
                        ? Object(q.jsx)(q.Fragment, { children: "loading" })
                        : Object(q.jsxs)(q.Fragment, {
                            children: [
                              Object(q.jsxs)(Ln, {
                                children: [
                                  Object(q.jsx)("div", {
                                    className: "title-burger",
                                    children: "|||",
                                  }),
                                  Object(q.jsx)("div", {
                                    className: "title-title",
                                    children:
                                      "SW \uac00\uce58\ud655\uc0b0\uc13c\ud130 \uc18c\uc2dd",
                                  }),
                                  Object(q.jsx)("div", {
                                    className: "title-more",
                                    children: Object(q.jsx)(gn.b, {
                                      to: "/main/detail/achievement/achievement-valuenews",
                                      className: "title-link",
                                      children: "\ub354\ubcf4\uae30+",
                                    }),
                                  }),
                                ],
                              }),
                              Object(q.jsxs)(An, {
                                to: "/main/detail/achievement/achievement-valuenews/".concat(
                                  N && N[N.length - 1].id
                                ),
                                children: [
                                  Object(q.jsx)(Dn, {
                                    children: r
                                      ? W(r[r.length - 1])
                                      : Object(q.jsx)(q.Fragment, {
                                          children: "none",
                                        }),
                                  }),
                                  Object(q.jsxs)(Wn, {
                                    children: [
                                      Object(q.jsx)("div", {
                                        className: "section-title",
                                        children: N && N[0].title,
                                      }),
                                      Object(q.jsx)("div", {
                                        className: "section-desc",
                                        children: N && N[0].content,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                    }),
                    Object(q.jsx)(Mn, {
                      children: A
                        ? Object(q.jsx)(q.Fragment, { children: "loading" })
                        : Object(q.jsxs)(q.Fragment, {
                            children: [
                              Object(q.jsxs)(Ln, {
                                children: [
                                  Object(q.jsx)("div", {
                                    className: "title-burger",
                                    children: "|||",
                                  }),
                                  Object(q.jsx)("div", {
                                    className: "title-title",
                                    children:
                                      "\ucc3d\uc5c5\uc13c\ud130 \uc18c\uc2dd",
                                  }),
                                  Object(q.jsx)("div", {
                                    className: "title-more",
                                    children: Object(q.jsx)(gn.b, {
                                      to: "/main/detail/achievement/achievement-startup",
                                      className: "title-link",
                                      children: "\ub354\ubcf4\uae30+",
                                    }),
                                  }),
                                ],
                              }),
                              Object(q.jsxs)(An, {
                                to: "/main/detail/achievement/achievement-startup/".concat(
                                  B && B[B.length - 1].id
                                ),
                                children: [
                                  Object(q.jsx)(Dn, {
                                    children: x
                                      ? W(x[x.length - 1])
                                      : Object(q.jsx)(q.Fragment, {
                                          children: "none",
                                        }),
                                  }),
                                  Object(q.jsxs)(Wn, {
                                    children: [
                                      Object(q.jsx)("div", {
                                        className: "section-title",
                                        children: B && B[0].title,
                                      }),
                                      Object(q.jsx)("div", {
                                        className: "section-desc",
                                        children: B && B[0].content,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Bn = E.a.div(
          z ||
            (z = Object(W.a)([
              "\n  ",
              " {\n    margin-top: 10px;\n    padding: 25px;\n  }\n  ",
              ' {\n    background-image: url("img/homeswnews.jpeg");\n    min-height: 500px;\n    max-width: 1980px;\n    background-position: center;\n    box-shadow: 0px 6px 11px 0px rgba(0, 0, 0, 0.89);\n  }\n',
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        Fn = E.a.div(
          I ||
            (I = Object(W.a)([
              "\n  ",
              " {\n    width: 100%;\n  }\n  ",
              " {\n    width: 900px;\n    height: 100%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        Cn = E.a.div(
          B ||
            (B = Object(W.a)([
              "\n  ",
              " {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  ",
              " {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 100%;\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        Mn = E.a.div(
          F ||
            (F = Object(W.a)([
              "\n  color: black;\n  ",
              " {\n    height: 250px;\n    border-bottom: 3px dashed #eee;\n    padding-top: 30px;\n  }\n  ",
              " {\n    height: 200px;\n    width: 400px;\n    margin-bottom: 50px;\n    margin: 50px 0;\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        Ln = E.a.div(
          C ||
            (C = Object(W.a)([
              "\n  ",
              " {\n    height: 25px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 20px;\n    font-weight: 600;\n    color: #0c1b58;\n    margin-bottom: 15px;\n    & .title-burger {\n      transform: rotate(90deg);\n      color: black;\n    }\n    & .title-title {\n      width: 75%;\n    }\n\n    & .title-more {\n      font-size: 10px;\n      color: black;\n      & .title-link {\n        text-decoration: none;\n        color: black;\n      }\n    }\n  }\n  ",
              " {\n    height: 25px;\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 20px;\n    font-weight: 600;\n    color: #0c1b58;\n    margin-bottom: 15px;\n    & .title-burger {\n      transform: rotate(90deg);\n      color: black;\n    }\n    & .title-title {\n      width: 75%;\n    }\n\n    & .title-more {\n      font-size: 10px;\n      color: black;\n      & .title-link {\n        text-decoration: none;\n        color: black;\n      }\n    }\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        An = Object(E.a)(gn.b)(
          M ||
            (M = Object(W.a)([
              "\n  ",
              " {\n    display: flex;\n    width: 100%;\n    height: 75%;\n  }\n  ",
              " {\n    display: flex;\n    width: 100%;\n    height: 95%;\n    padding: 5px;\n    cursor: pointer;\n    &:hover {\n      transition: 0.2s linear;\n      background-color: #eee;\n    }\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        Dn = E.a.div(
          L ||
            (L = Object(W.a)([
              "\n  ",
              " {\n    width: 50%;\n    height: 100%;\n    margin-right: 10px;\n  }\n  ",
              " {\n    width: 50%;\n    height: 100%;\n    margin-right: 10px;\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        ),
        Wn = E.a.div(
          A ||
            (A = Object(W.a)([
              "\n  color: black;\n\n  ",
              " {\n    width: 50%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    & .section-title {\n      height: 30%;\n      width: 80%;\n      word-break: break-all;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      font-size: 14px;\n      font-weight: 600;\n    }\n\n    & .section-desc {\n      height: 60%;\n      width: 80%;\n      word-break: break-all;\n      text-overflow: ellipsis;\n      line-height: 1.2;\n      font-size: 9px;\n    }\n  }\n  ",
              " {\n    width: 50%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    & .section-title {\n      height: 38%;\n      width: 80%;\n      word-break: break-all;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      font-size: 14px;\n      font-weight: 600;\n    }\n\n    & .section-desc {\n      margin-top: 10px;\n      height: 54%;\n      width: 80%;\n      display: block;\n      overflow: hidden;\n      word-break: break-all;\n      text-overflow: ellipsis;\n      line-height: 1.2;\n      font-size: 9px;\n    }\n  }\n",
            ])),
          Object(P.d)(P.b),
          Object(P.d)(P.a)
        );
      e.default = function () {
        return Object(q.jsxs)(Y, {
          children: [
            Object(q.jsx)(K, {}),
            Object(q.jsx)(mn, {}),
            Object(q.jsx)(en, {}),
            Object(q.jsx)(In, {}),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=26.4d311267.chunk.js.map
