(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [28],
  {
    104: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return v;
      }),
        t.d(e, "l", function () {
          return y;
        }),
        t.d(e, "e", function () {
          return k;
        }),
        t.d(e, "j", function () {
          return $;
        }),
        t.d(e, "f", function () {
          return N;
        }),
        t.d(e, "g", function () {
          return S;
        }),
        t.d(e, "b", function () {
          return I;
        }),
        t.d(e, "c", function () {
          return z;
        }),
        t.d(e, "h", function () {
          return B;
        }),
        t.d(e, "k", function () {
          return C;
        }),
        t.d(e, "d", function () {
          return F;
        }),
        t.d(e, "i", function () {
          return A;
        });
      var i,
        a,
        c,
        o,
        r,
        d,
        l,
        s,
        b,
        j,
        h,
        p,
        x,
        g,
        m,
        O,
        u,
        f = t(94),
        w = t(548),
        v = Object(w.a)(
          i ||
            (i = Object(f.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        y = Object(w.a)(
          a ||
            (a = Object(f.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        inputCreatedAt\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        k = Object(w.a)(
          c ||
            (c = Object(f.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        $ = Object(w.a)(
          o ||
            (o = Object(f.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N =
          (Object(w.a)(
            r ||
              (r = Object(f.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(w.a)(
            d ||
              (d = Object(f.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(w.a)(
            l ||
              (l = Object(f.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        S = Object(w.a)(
          s ||
            (s = Object(f.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        I = Object(w.a)(
          b ||
            (b = Object(f.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        z = Object(w.a)(
          j ||
            (j = Object(f.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B =
          (Object(w.a)(
            h ||
              (h = Object(f.a)([
                "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(w.a)(
            p ||
              (p = Object(f.a)([
                "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        C =
          (Object(w.a)(
            x ||
              (x = Object(f.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(w.a)(
            g ||
              (g = Object(f.a)([
                "\n  mutation editPopup($up: String!, $url: String) {\n    editPopup(up: $up, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        F = Object(w.a)(
          m ||
            (m = Object(f.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        A =
          (Object(w.a)(
            O ||
              (O = Object(f.a)([
                "\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(w.a)(
            u ||
              (u = Object(f.a)([
                "\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ));
    },
    125: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return c;
      });
      var i = t(89),
        a = t(2),
        c = function () {
          var n = "object" === typeof window,
            e = Object(a.useCallback)(
              function () {
                return {
                  width: n ? window.innerWidth : 0,
                  height: n ? window.innerWidth : 0,
                };
              },
              [n]
            ),
            t = Object(a.useState)(e),
            c = Object(i.a)(t, 2),
            o = c[0],
            r = c[1];
          return (
            Object(a.useEffect)(
              function () {
                if (n) {
                  var t = function () {
                    r(e());
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
            o
          );
        };
    },
    166: function (n, e, t) {
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
    549: function (n, e, t) {
      "use strict";
      t.r(e);
      var i,
        a,
        c,
        o,
        r,
        d,
        l,
        s,
        b,
        j,
        h,
        p,
        x,
        g,
        m,
        O,
        u,
        f,
        w,
        v,
        y,
        k,
        $,
        N,
        S,
        I,
        z,
        B,
        C,
        F,
        A,
        M,
        L,
        P,
        D,
        _,
        T = t(89),
        R = t(139),
        W = t(2),
        U = t(94),
        E = t(103),
        H = t(11),
        J = function (n) {
          var e = n.showPopup,
            t = n.setShowPopUp,
            i = n.url;
          return Object(H.jsx)(H.Fragment, {
            children:
              e &&
              Object(H.jsxs)(V, {
                children: [
                  Object(H.jsx)(Y, {
                    children: Object(H.jsx)("img", { src: i, alt: "popupimg" }),
                  }),
                  Object(H.jsxs)(q, {
                    children: [
                      Object(H.jsx)("button", {
                        onClick: function () {
                          var n = localStorage.getItem("fuzePopUpNotShow"),
                            e = Date.parse(n || ""),
                            i = e + 12e3,
                            a = Math.floor(new Date().getTime());
                          Number.isNaN(e) && t(!0), i < a && t(!0), t(!1);
                        },
                        children:
                          "\uc624\ub298 \ud558\ub8e8 \ubcf4\uc9c0 \uc54a\uae30",
                      }),
                      Object(H.jsx)("button", {
                        onClick: function () {
                          return t(!1);
                        },
                        children: "\ub2eb\uae30",
                      }),
                    ],
                  }),
                ],
              }),
          });
        },
        V = E.a.div(
          i ||
            (i = Object(U.a)([
              "\n  width: 500px;\n  height: 700px;\n  position: absolute;\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  top: 20%;\n  left: 0;\n  right: 35%;\n  z-index: 9999;\n",
            ]))
        ),
        Y = E.a.div(
          a ||
            (a = Object(U.a)([
              "\n  width: 100%;\n  height: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  & img {\n    width: 100%;\n    height: 95%;\n    object-fit: contain;\n  }\n",
            ]))
        ),
        q = E.a.div(
          c ||
            (c = Object(U.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n",
            ]))
        ),
        K = t(125),
        G = t(122),
        Q = t(121),
        X = E.a.div(
          o ||
            (o = Object(U.a)([
              "\n  ",
              " {\n    width: 100%;\n    /* max-width:375px; */\n    min-height: 100vh;\n  }\n  ",
              " {\n    max-width: 1920px;\n    margin-top: 15px;\n    margin: 0 auto;\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        Z = t(90),
        nn = (t(409), t(297)),
        en = t(270),
        tn = function () {
          var n = Object(K.a)();
          return Object(H.jsx)(an, {
            children: Object(H.jsxs)(nn.Carousel, {
              autoPlay: !0,
              infiniteLoop: !0,
              showArrows: !1,
              showThumbs: !1,
              showStatus: !1,
              renderIndicator:
                n.width > 375
                  ? function (n, e, t, i) {
                      var a = {
                          marginLeft: 10,
                          color: "white",
                          cursor: "pointer",
                        },
                        c = e
                          ? Object(Z.a)(
                              Object(Z.a)({}, a),
                              {},
                              { color: "red" }
                            )
                          : Object(Z.a)({}, a);
                      return Object(H.jsxs)(
                        "span",
                        {
                          style: c,
                          onClick: n,
                          onKeyDown: n,
                          role: "button",
                          tabIndex: 0,
                          "aria-label": "".concat(i, " ").concat(t + 1),
                          children: [
                            0 === t &&
                              Object(H.jsx)(en.a, {
                                size: 40,
                                color: "white",
                                style: { opacity: 0.5 },
                              }),
                            1 === t &&
                              Object(H.jsx)(en.b, {
                                size: 40,
                                color: "white",
                                style: { opacity: 0.5 },
                              }),
                          ],
                        },
                        t
                      );
                    }
                  : void 0,
              children: [
                Object(H.jsxs)(cn, {
                  children: [
                    Object(H.jsx)(on, {
                      src:
                        n.width > 375
                          ? "img/banner1.jpeg"
                          : "img/mobileBanner.jpeg",
                      alt: "banner",
                    }),
                    n.width > 375 &&
                      Object(H.jsx)(rn, {
                        src: "img/banner2_cover.jpeg",
                        alt: "banner cover",
                      }),
                  ],
                }),
                Object(H.jsxs)(cn, {
                  children: [
                    Object(H.jsx)(on, {
                      src:
                        n.width > 375
                          ? "img/banner2.jpeg"
                          : "img/MobileBanner2.jpeg",
                      alt: "banner2",
                    }),
                    n.width > 375 &&
                      Object(H.jsx)(rn, {
                        src: "img/banner1_cover.jpeg",
                        alt: "banner2 cover",
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        an = E.a.div(
          r ||
            (r = Object(U.a)([
              "\n  ",
              " {\n    height: 400px;\n    width: 100%;\n  }\n  ",
              " {\n    width: 100%;\n    margin-top: 15px;\n    max-width: 1920px;\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        cn = E.a.div(
          d ||
            (d = Object(U.a)([
              "\n  width: 100%;\n  height: 100%;\n  ",
              " {\n    margin: 0;\n  }\n  ",
              " {\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        on = E.a.img(
          l ||
            (l = Object(U.a)([
              "\n  object-fit: contain;\n  ",
              " {\n    width: 100%;\n    height: 400px;\n  }\n  ",
              " {\n    height: 550px;\n    width: 1280px;\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        rn = E.a.img(
          s ||
            (s = Object(U.a)([
              "\n  height: 400px;\n  object-fit: cover;\n  position: absolute;\n  ",
              " {\n    height: 640px;\n  }\n",
            ])),
          Object(Q.d)(Q.a)
        ),
        dn =
          (E.a.span(
            b ||
              (b = Object(U.a)([
                "\n  display: none;\n  ",
                " {\n    display: block;\n    color: white;\n    width: 450px;\n  }\n",
              ])),
            Object(Q.d)(Q.a)
          ),
          E.a.div(
            j ||
              (j = Object(U.a)([
                "\n  ",
                " {\n    max-width: 1280px;\n    text-align: start;\n    position: absolute;\n    top: 30%;\n    z-index: 5;\n    right: 20%;\n\n    & .first-content {\n    }\n    & .second-content {\n      font-size: 50px;\n      letter-spacing: -1.43px;\n    }\n    & .third-content {\n      letter-spacing: 0.22px;\n    }\n  }\n",
              ])),
            Object(Q.d)(Q.a)
          ),
          t(543)),
        ln = t(4),
        sn = t(104),
        bn = function () {
          var n = Object(K.a)(),
            e = Object(ln.g)(),
            t = Object(W.useState)(),
            i = Object(T.a)(t, 2),
            a = i[0],
            c = i[1],
            o = Object(W.useState)(0),
            r = Object(T.a)(o, 2),
            d = r[0],
            l = r[1];
          return Object(R.a)(sn.l, {
            variables: { category: "achievement-news" },
            onCompleted: function (n) {
              var e = n.getBoardByCategory,
                t = e.ok,
                i = e.data,
                a = e.err;
              t && i && null !== i ? c(i) : console.log(a);
            },
          }).loading
            ? Object(H.jsx)("div", { children: "loading..." })
            : Object(H.jsx)(jn, {
                children: Object(H.jsxs)(hn, {
                  children: [
                    Object(H.jsxs)(pn, {
                      children: [
                        Object(H.jsxs)("div", {
                          className: "main-sub-title",
                          children: [
                            Object(H.jsx)("div", { className: "line" }),
                            Object(H.jsx)("span", {
                              className: "title",
                              children: "\uc0ac\uc5c5\ub2e8\uc18c\uc2dd",
                            }),
                          ],
                        }),
                        a &&
                          null !== a &&
                          Object(H.jsx)("div", {
                            className: "dots",
                            children: a.map(function (n, e) {
                              return e < 5
                                ? Object(H.jsx)(
                                    mn,
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
                    Object(H.jsx)(gn, {
                      children: a
                        ? Object(H.jsx)(H.Fragment, {
                            children:
                              n.width < 376
                                ? Object(H.jsx)(nn.Carousel, {
                                    showIndicators: !1,
                                    showStatus: !1,
                                    showThumbs: !1,
                                    showArrows: !1,
                                    selectedItem: d,
                                    infiniteLoop: !0,
                                    width: 300,
                                    children: a.map(function (n, t) {
                                      var i,
                                        a = "";
                                      n.images &&
                                        n.images.length > 0 &&
                                        (a =
                                          null ===
                                            (i =
                                              n.images[n.images.length - 1]) ||
                                          void 0 === i
                                            ? void 0
                                            : i.url);
                                      return Object(H.jsxs)(
                                        On,
                                        {
                                          onClick: function () {
                                            return e.push(
                                              "/main/detail/achievement/achievement-news/".concat(
                                                n.id
                                              )
                                            );
                                          },
                                          children: [
                                            Object(H.jsx)(xn, {
                                              src: a,
                                              alt: "news image",
                                            }),
                                            Object(H.jsx)("div", {
                                              className: "carousel-text",
                                              children: n.title,
                                            }),
                                          ],
                                        },
                                        t
                                      );
                                    }),
                                  })
                                : Object(H.jsx)("div", {
                                    className: "card-container",
                                    children: a.map(function (n, t) {
                                      var i,
                                        a = "";
                                      n.images &&
                                        n.images.length > 0 &&
                                        (a =
                                          null ===
                                            (i =
                                              n.images[n.images.length - 1]) ||
                                          void 0 === i
                                            ? void 0
                                            : i.url);
                                      return t > 2
                                        ? null
                                        : Object(H.jsx)(
                                            un,
                                            {
                                              hoverable: !0,
                                              bordered: !1,
                                              onClick: function () {
                                                return e.push(
                                                  "/main/detail/achievement/achievement-news/".concat(
                                                    n.id
                                                  )
                                                );
                                              },
                                              cover: Object(H.jsx)("img", {
                                                src: a,
                                                alt: "example",
                                                height: 270,
                                                width: 240,
                                              }),
                                              children: Object(H.jsx)("div", {
                                                className: "card-desc",
                                                children: n.title,
                                              }),
                                            },
                                            t
                                          );
                                    }),
                                  }),
                          })
                        : Object(H.jsx)(H.Fragment, {
                            children:
                              "\uc5c5\ub85c\ub4dc \ub41c \uc18c\uc2dd\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
                          }),
                    }),
                  ],
                }),
              });
        },
        jn = E.a.div(
          h ||
            (h = Object(U.a)([
              '\n  background-image: url("img/homebnews.jpeg");\n  ',
              " {\n    min-height: 400px;\n    background-position: center;\n    background-size: cover;\n  }\n  ",
              " {\n    min-height: 450px;\n    max-width: 1980px;\n    background-position: center;\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        hn = E.a.div(
          p ||
            (p = Object(U.a)([
              "\n  display: flex;\n  ",
              " {\n    min-height: 400px;\n    flex-direction: column;\n    padding: 25px;\n  }\n  ",
              " {\n    width: 1280px;\n    min-height: 450px;\n    margin: 0 auto;\n    flex-direction: column;\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        pn = E.a.div(
          x ||
            (x = Object(U.a)([
              "\n  display: flex;\n  ",
              " {\n    width: 100%;\n    justify-content: space-between;\n    margin-bottom: 25px;\n    & .line {\n      width: 25px;\n      border-bottom: 3px solid #c53082;\n    }\n\n    & .title {\n      font-size: 17px;\n      font-weight: 600;\n      color: white;\n    }\n\n    & .dots {\n      display: flex;\n    }\n  }\n  ",
              " {\n    & .main-sub-title {\n      width: 100%;\n      display: flex;\n      position: relative;\n      height: 60px;\n    }\n\n    & .line {\n      width: 1px;\n      height: 60px;\n      border-left: 10px solid #c53082;\n      margin-right: 10px;\n    }\n\n    & .title {\n      font-size: 24px;\n      font-weight: 600;\n      color: white;\n      display: block;\n      text-align: end;\n      padding-top: 25px;\n    }\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        xn = E.a.img(
          g ||
            (g = Object(U.a)([
              "\n  ",
              " {\n    margin-top: 25px;\n    width: 285px;\n    height: 260px;\n    object-fit: cover;\n  }\n  ",
              " {\n    width: 100%;\n    height: 250px;\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        gn = E.a.div(
          m ||
            (m = Object(U.a)([
              "\n  ",
              " {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  ",
              " {\n    width: 100%;\n    margin-top: 15px;\n    height: 360px;\n    padding-bottom: 20px;\n    & .card-container {\n      display: flex;\n      height: 100%;\n      width: 100%;\n      justify-content: space-between;\n    }\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        mn = E.a.div(
          O ||
            (O = Object(U.a)([
              "\n  ",
              " {\n    width: 8px;\n    height: 8px;\n    background-color: ",
              ";\n    border-radius: 10px;\n    margin: 2px;\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          function (n) {
            return n.current ? "white" : "gray";
          }
        ),
        On = E.a.div(
          u ||
            (u = Object(U.a)([
              "\n  width: 100%;\n  ",
              " {\n    width: 350px;\n    max-width: 375px;\n    margin: 0 auto;\n    & .carousel-text {\n      margin-top: 25px;\n      max-width: 300px;\n      color: white;\n      max-height: 40px;\n      text-align: left;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n",
            ])),
          Object(Q.d)(Q.b)
        ),
        un = Object(E.a)(dn.a)(
          f ||
            (f = Object(U.a)([
              "\n  ",
              " {\n    width: 200px;\n    height: 100%;\n    & .card-desc {\n      max-height: 65px;\n      color: white;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n  ",
              " {\n    width: 400px;\n    height: 100%;\n    background: transparent;\n    & .card-desc {\n      max-height: 65px;\n      color: white;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    & img {\n      object-fit: cover;\n    }\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        fn = t(554),
        wn = t(166),
        vn = t(46),
        yn = function (n) {
          var e,
            t = n.data,
            i = new Date().getMonth() + 1,
            a = ""
              .concat(new Date().getFullYear(), ".")
              .concat(new Date().getMonth() + 1);
          e = t && t.length > 6 ? t.splice(0, 6) : t;
          var c = Object(W.useCallback)(function (n) {
            var e = Object(wn.a)(n.createdAt);
            return Object(H.jsxs)(Cn, {
              children: [
                Object(H.jsx)(Fn, { children: "\uacf5\uc9c0" }),
                Object(H.jsx)(vn.b, {
                  to: "/main/detail/community/community-notice/".concat(n.id),
                  children: Object(H.jsxs)(An, {
                    children: ["[\uc548\ub0b4] ", n.title],
                  }),
                }),
                Object(H.jsx)(Mn, { children: e }),
              ],
            });
          }, []);
          return Object(H.jsxs)(zn, {
            children: [
              Object(H.jsxs)("div", {
                className: "board-title",
                children: [
                  Object(H.jsxs)("div", {
                    className: "board-top-title",
                    children: [
                      Object(H.jsxs)(Bn, {
                        children: [
                          Object(H.jsx)("div", { className: "line" }),
                          Object(H.jsx)("span", {
                            className: "title",
                            children: "\uacf5\uc9c0\uc0ac\ud56d",
                          }),
                        ],
                      }),
                      Object(H.jsx)(vn.b, {
                        to: "/main/board/community/community-notice",
                        style: { color: "black" },
                        children: "\ub354\ubcf4\uae30 +",
                      }),
                    ],
                  }),
                  Object(H.jsxs)("div", {
                    className: "board-bottom-title",
                    children: [
                      Object(H.jsxs)("div", {
                        className: "date",
                        children: [
                          Object(H.jsx)("span", {
                            className: "date-title",
                            children: i,
                          }),
                          Object(H.jsx)("span", {
                            className: "date-subtitle",
                            children: a,
                          }),
                        ],
                      }),
                      Object(H.jsxs)("div", {
                        className: "title",
                        children: [
                          "SW \uc911\uc2ec\ub300\ud559 ",
                          i,
                          "\uc6d4 \uacf5\uc9c0\uc0ac\ud56d",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(H.jsx)("div", {
                children: Object(H.jsx)(fn.b, {
                  style: { width: "100%" },
                  dataSource: e,
                  renderItem: function (n) {
                    return c(n);
                  },
                }),
              }),
            ],
          });
        },
        kn = function (n) {
          n.data;
          return Object(H.jsx)(Ln, {
            children: Object(H.jsxs)("div", {
              className: "board-title",
              children: [
                Object(H.jsx)("div", {
                  className: "board-top-title",
                  children: Object(H.jsxs)(Bn, {
                    children: [
                      Object(H.jsx)("div", { className: "line" }),
                      Object(H.jsx)("span", {
                        className: "title",
                        children: "\ud64d\ubcf4\uc601\uc0c1",
                      }),
                    ],
                  }),
                }),
                Object(H.jsx)("div", {
                  className: "video-container",
                  children: Object(H.jsx)("video", {
                    autoPlay: !0,
                    muted: !0,
                    controls: !0,
                    children: Object(H.jsx)("source", {
                      src: "/img/sunmoon.mp4",
                      type: "video/mp4",
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        $n = function () {
          var n = Object(K.a)(),
            e = Object(R.a)(G.c, {
              variables: { category: "community-notice" },
            }),
            t = e.loading,
            i = e.data,
            a = Object(R.a)(G.f).data;
          return t
            ? Object(H.jsx)("div", { children: "loading..." })
            : Object(H.jsx)(Nn, {
                children: Object(H.jsx)(Sn, {
                  children:
                    n.width > 375
                      ? Object(H.jsxs)(H.Fragment, {
                          children: [
                            Object(H.jsx)(In, {
                              children:
                                null ===
                                (null === i || void 0 === i
                                  ? void 0
                                  : i.getBoardByMonth.data)
                                  ? Object(H.jsx)(H.Fragment, {
                                      children: "no data",
                                    })
                                  : Object(H.jsx)(yn, {
                                      data:
                                        null === i || void 0 === i
                                          ? void 0
                                          : i.getBoardByMonth.data,
                                    }),
                            }),
                            Object(H.jsx)(In, {
                              children: Object(H.jsx)(kn, {
                                data:
                                  null === a || void 0 === a
                                    ? void 0
                                    : a.getVideoLink.link,
                              }),
                            }),
                          ],
                        })
                      : Object(H.jsxs)(H.Fragment, {
                          children: [
                            Object(H.jsx)(In, {
                              children: Object(H.jsx)(kn, {
                                data:
                                  null === a || void 0 === a
                                    ? void 0
                                    : a.getVideoLink.link,
                              }),
                            }),
                            Object(H.jsx)(In, {
                              children:
                                null ===
                                (null === i || void 0 === i
                                  ? void 0
                                  : i.getBoardByMonth.data)
                                  ? Object(H.jsx)(H.Fragment, {
                                      children: "no data",
                                    })
                                  : Object(H.jsx)(yn, {
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
        Nn = E.a.div(
          w ||
            (w = Object(U.a)([
              "\n  ",
              " {\n    min-height: 400px;\n    width: 100%;\n  }\n  ",
              " {\n    height: 400px;\n    max-width: 1980px;\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        Sn = E.a.div(
          v ||
            (v = Object(U.a)([
              "\n  ",
              " {\n    width: 100%;\n  }\n  ",
              " {\n    width: 1280px;\n    height: 100%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        In = E.a.div(
          y ||
            (y = Object(U.a)([
              "\n  ",
              " {\n    min-height: 300px;\n  }\n  ",
              " {\n    height: 90%;\n    width: 600px;\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        zn = E.a.div(
          k ||
            (k = Object(U.a)([
              "\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n  width: 100%;\n  padding: 0 35px;\n  ",
              " {\n    padding-top: 30px;\n    & .board-title {\n      display: flex;\n      flex-direction: column;\n      margin-bottom: 15px;\n      & .board-top-title {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center;\n        font-size: 11px;\n        font-weight: 600;\n        margin-bottom: 35px;\n      }\n      & .board-bottom-title {\n        display: flex;\n        align-items: center;\n        & .date {\n          height: 50px;\n          width: 50px;\n          background-color: #f0f2fa;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          margin-right: 20px;\n          & .date-title {\n            display: block;\n            font-size: 28px;\n            color: #003875;\n            font-weight: 600;\n            line-height: 1;\n          }\n\n          & .date-subtitle {\n            display: block;\n            font-size: 8px;\n          }\n        }\n\n        & .title {\n          font-size: 18px;\n          font-weight: 600;\n          letter-spacing: -0.9px;\n        }\n      }\n    }\n  }\n  ",
              " {\n    padding-top: 15px;\n    & .board-title {\n      display: flex;\n      flex-direction: column;\n      margin-bottom: 15px;\n      & .board-top-title {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center;\n        font-size: 11px;\n        font-weight: 600;\n        margin-bottom: 15px;\n      }\n      & .board-bottom-title {\n        display: flex;\n        align-items: center;\n        & .date {\n          height: 50px;\n          width: 50px;\n          background-color: #f0f2fa;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          margin-right: 20px;\n          & .date-title {\n            display: block;\n            font-size: 26px;\n            color: #003875;\n            font-weight: 600;\n            line-height: 1;\n          }\n\n          & .date-subtitle {\n            display: block;\n            font-size: 8px;\n          }\n        }\n\n        & .title {\n          font-size: 20px;\n          margin-left: 20px;\n          font-weight: 600;\n          letter-spacing: -0.9px;\n        }\n      }\n    }\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        Bn = E.a.div(
          $ ||
            ($ = Object(U.a)([
              "\n  ",
              " {\n    & .line {\n      width: 25px;\n      border-bottom: 3px solid #c53082;\n    }\n\n    & .title {\n      font-size: 17px;\n      font-weight: 600;\n    }\n  }\n  ",
              " {\n    & .title {\n      font-size: 24px;\n      font-weight: 600;\n    }\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        Cn = Object(E.a)(fn.b.Item)(
          N ||
            (N = Object(U.a)([
              "\n  display: flex;\n  ",
              " {\n  }\n  ",
              " {\n    padding: 5px;\n    cursor: pointer;\n\n    & a {\n      font-size: 17px;\n      font-weight: 600;\n      width: 60%;\n      color: #0c1b58;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    &:hover {\n      opacity: 0.7;\n      transition: 0.2s linear;\n    }\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        Fn = E.a.div(
          S ||
            (S = Object(U.a)([
              "\n  ",
              " {\n    width: 35px;\n    height: 20px;\n    color: #334ebc;\n    border: 1px solid #334ebc;\n    font-size: 7px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  ",
              " {\n    width: 45px;\n    height: 25px;\n    color: #334ebc;\n    border: 1px solid #334ebc;\n    font-size: 7px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        An = E.a.div(
          I ||
            (I = Object(U.a)([
              "\n  ",
              " {\n    font-size: 11px;\n    font-weight: 600;\n    width: 55%;\n    max-width: 200px;\n    color: #0c1b58;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  ",
              " {\n    font-size: 14px;\n    font-weight: 500;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        Mn = E.a.div(
          z ||
            (z = Object(U.a)([
              "\n  ",
              " {\n    font-size: 11px;\n    font-weight: 600;\n    float: rigth;\n  }\n  ",
              " {\n    font-size: 14px;\n    font-weight: 500;\n    float: rigth;\n    color: #636363;\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        Ln = E.a.div(
          B ||
            (B = Object(U.a)([
              "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0 35px;\n  padding-top: 15px;\n  ",
              " {\n    height: 320px;\n    display: flex;\n    max-width: 375px;\n    width: 100%;\n    box-shadow: 5px 5px 14px #0000005a;\n    padding: 15px 35px;\n    .video-container {\n      & video {\n        width: 310px;\n        margin: 0 auto;\n        height: 250px;\n      }\n    }\n  }\n\n  ",
              " {\n    height: 500px;\n\n    .video-container {\n      margin-top: 20px;\n      & video {\n        width: 480px;\n      }\n    }\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        Pn = function () {
          var n = Object(ln.g)(),
            e = Object(W.useState)(),
            t = Object(T.a)(e, 2),
            i = t[0],
            a = t[1],
            c = Object(W.useState)(),
            o = Object(T.a)(c, 2),
            r = o[0],
            d = o[1],
            l = Object(W.useState)(),
            s = Object(T.a)(l, 2),
            b = s[0],
            j = s[1],
            h = Object(W.useState)(),
            p = Object(T.a)(h, 2),
            x = p[0],
            g = p[1],
            m = Object(W.useState)(),
            O = Object(T.a)(m, 2),
            u = O[0],
            f = O[1],
            w = Object(W.useState)(),
            v = Object(T.a)(w, 2),
            y = v[0],
            k = v[1],
            $ = Object(W.useState)(),
            N = Object(T.a)($, 2),
            S = N[0],
            I = N[1],
            z = Object(W.useState)(),
            B = Object(T.a)(z, 2),
            C = B[0],
            F = B[1],
            A = Object(R.a)(sn.l, {
              variables: { category: "achievement-aidnews" },
              onCompleted: function (n) {
                var e = n.getBoardByCategory,
                  t = e.ok,
                  i = e.err,
                  c = e.data;
                t && c && c.length > 0
                  ? (a(c[0].images), f(c))
                  : console.log(i);
              },
            }).loading,
            M = Object(R.a)(sn.l, {
              variables: { category: "achievement-valuenews" },
              onCompleted: function (n) {
                var e = n.getBoardByCategory,
                  t = e.ok,
                  i = e.err,
                  a = e.data;
                t && a && a.length > 0
                  ? (d(a[0].images), I(a))
                  : console.log(i);
              },
            }).loading,
            L = Object(R.a)(sn.l, {
              variables: { category: "achievement-coopnews" },
              onCompleted: function (n) {
                var e = n.getBoardByCategory,
                  t = e.ok,
                  i = e.err,
                  a = e.data;
                t && a && a.length > 0
                  ? (j(a[0].images), k(a))
                  : console.log(i);
              },
            }).loading,
            P = Object(R.a)(sn.l, {
              variables: { category: "achievement-startup" },
              onCompleted: function (n) {
                var e = n.getBoardByCategory,
                  t = e.ok,
                  i = e.err,
                  a = e.data;
                t && a && a.length > 0
                  ? (g(a[0].images), F(a))
                  : console.log(i);
              },
            }).loading,
            D = Object(W.useCallback)(function (n) {
              return Object(H.jsx)("img", {
                src: n ? n.url : "",
                alt: "newsImage",
              });
            }, []);
          return Object(H.jsx)(Dn, {
            children: Object(H.jsxs)(_n, {
              children: [
                Object(H.jsxs)(Tn, {
                  children: [
                    Object(H.jsx)(Rn, {
                      children: A
                        ? Object(H.jsx)(H.Fragment, { children: "loading" })
                        : Object(H.jsxs)(H.Fragment, {
                            children: [
                              Object(H.jsxs)(Wn, {
                                children: [
                                  Object(H.jsx)("div", {
                                    className: "title-burger",
                                    onClick: function () {
                                      n.push(
                                        "/main/board/achievement/achievement-aidnews"
                                      );
                                    },
                                    children: "|||",
                                  }),
                                  Object(H.jsx)("div", {
                                    className: "title-title",
                                    children:
                                      "SW \uad50\uc721\uc9c0\uc6d0\uc13c\ud130 \uc18c\uc2dd",
                                  }),
                                  Object(H.jsx)("div", {
                                    className: "title-more",
                                    children: Object(H.jsx)(vn.b, {
                                      to: "/main/board/achievement/achievement-aidnews",
                                      className: "title-link",
                                      children: "\ub354\ubcf4\uae30+",
                                    }),
                                  }),
                                ],
                              }),
                              Object(H.jsxs)(Un, {
                                to: "/main/detail/achievement/achievement-aidnews/".concat(
                                  u && u[u.length - 1].id
                                ),
                                children: [
                                  Object(H.jsx)(En, {
                                    children: i
                                      ? D(i[i.length - 1])
                                      : Object(H.jsx)(H.Fragment, {
                                          children: "none",
                                        }),
                                  }),
                                  Object(H.jsxs)(Hn, {
                                    children: [
                                      Object(H.jsx)("div", {
                                        className: "section-title",
                                        children: u && u[0].title,
                                      }),
                                      Object(H.jsx)("div", {
                                        className: "section-desc",
                                        dangerouslySetInnerHTML: {
                                          __html: (u && u[0].content) || "",
                                        },
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                    }),
                    Object(H.jsx)(Rn, {
                      children: L
                        ? Object(H.jsx)(H.Fragment, { children: "loading" })
                        : Object(H.jsxs)(H.Fragment, {
                            children: [
                              Object(H.jsxs)(Wn, {
                                children: [
                                  Object(H.jsx)("div", {
                                    className: "title-burger",
                                    onClick: function () {
                                      n.push(
                                        "/main/board/achievement/achievement-coopnews"
                                      );
                                    },
                                    children: "|||",
                                  }),
                                  Object(H.jsx)("div", {
                                    className: "title-title",
                                    children:
                                      "SW \uc0b0\ud559\ud611\ub825 \uc18c\uc2dd",
                                  }),
                                  Object(H.jsx)("div", {
                                    className: "title-more",
                                    children: Object(H.jsx)(vn.b, {
                                      to: "/main/board/achievement/achievement-coopnews",
                                      className: "title-link",
                                      children: "\ub354\ubcf4\uae30+",
                                    }),
                                  }),
                                ],
                              }),
                              Object(H.jsxs)(Un, {
                                to: "/main/detail/achievement/achievement-coopnews/".concat(
                                  y && y[y.length - 1].id
                                ),
                                children: [
                                  Object(H.jsx)(En, {
                                    children: b
                                      ? D(b[b.length - 1])
                                      : Object(H.jsx)(H.Fragment, {
                                          children: "none",
                                        }),
                                  }),
                                  Object(H.jsxs)(Hn, {
                                    children: [
                                      Object(H.jsx)("div", {
                                        className: "section-title",
                                        children: y && y[0].title,
                                      }),
                                      Object(H.jsx)("div", {
                                        className: "section-desc",
                                        dangerouslySetInnerHTML: {
                                          __html: (y && y[0].content) || "",
                                        },
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
                Object(H.jsxs)(Tn, {
                  children: [
                    Object(H.jsx)(Rn, {
                      children: M
                        ? Object(H.jsx)(H.Fragment, { children: "loading" })
                        : Object(H.jsxs)(H.Fragment, {
                            children: [
                              Object(H.jsxs)(Wn, {
                                children: [
                                  Object(H.jsx)("div", {
                                    className: "title-burger",
                                    onClick: function () {
                                      n.push(
                                        "/main/board/achievement/achievement-valuenews"
                                      );
                                    },
                                    children: "|||",
                                  }),
                                  Object(H.jsx)("div", {
                                    className: "title-title",
                                    children:
                                      "SW \uac00\uce58\ud655\uc0b0\uc13c\ud130 \uc18c\uc2dd",
                                  }),
                                  Object(H.jsx)("div", {
                                    className: "title-more",
                                    children: Object(H.jsx)(vn.b, {
                                      to: "/main/board/achievement/achievement-valuenews",
                                      className: "title-link",
                                      children: "\ub354\ubcf4\uae30+",
                                    }),
                                  }),
                                ],
                              }),
                              Object(H.jsxs)(Un, {
                                to: "/main/detail/achievement/achievement-valuenews/".concat(
                                  S && S[S.length - 1].id
                                ),
                                children: [
                                  Object(H.jsx)(En, {
                                    children: r
                                      ? D(r[r.length - 1])
                                      : Object(H.jsx)(H.Fragment, {
                                          children: "none",
                                        }),
                                  }),
                                  Object(H.jsxs)(Hn, {
                                    children: [
                                      Object(H.jsx)("div", {
                                        className: "section-title",
                                        children: S && S[0].title,
                                      }),
                                      Object(H.jsx)("div", {
                                        className: "section-desc",
                                        dangerouslySetInnerHTML: {
                                          __html: (S && S[0].content) || "",
                                        },
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                    }),
                    Object(H.jsx)(Rn, {
                      children: P
                        ? Object(H.jsx)(H.Fragment, { children: "loading" })
                        : Object(H.jsxs)(H.Fragment, {
                            children: [
                              Object(H.jsxs)(Wn, {
                                children: [
                                  Object(H.jsx)("div", {
                                    className: "title-burger",
                                    onClick: function () {
                                      n.push(
                                        "/main/board/achievement/achievement-startup"
                                      );
                                    },
                                    children: "|||",
                                  }),
                                  Object(H.jsx)("div", {
                                    className: "title-title",
                                    children:
                                      "\ucc3d\uc5c5\uc13c\ud130 \uc18c\uc2dd",
                                  }),
                                  Object(H.jsx)("div", {
                                    className: "title-more",
                                    children: Object(H.jsx)(vn.b, {
                                      to: "/main/board/achievement/achievement-startup",
                                      className: "title-link",
                                      children: "\ub354\ubcf4\uae30+",
                                    }),
                                  }),
                                ],
                              }),
                              Object(H.jsxs)(Un, {
                                to: "/main/detail/achievement/achievement-startup/".concat(
                                  C && C[C.length - 1].id
                                ),
                                children: [
                                  Object(H.jsx)(En, {
                                    children: x
                                      ? D(x[x.length - 1])
                                      : Object(H.jsx)(H.Fragment, {
                                          children: "none",
                                        }),
                                  }),
                                  Object(H.jsxs)(Hn, {
                                    children: [
                                      Object(H.jsx)("div", {
                                        className: "section-title",
                                        children: C && C[0].title,
                                      }),
                                      Object(H.jsx)("div", {
                                        className: "section-desc",
                                        dangerouslySetInnerHTML: {
                                          __html: (C && C[0].content) || "",
                                        },
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
        Dn = E.a.div(
          C ||
            (C = Object(U.a)([
              "\n  ",
              " {\n    margin-top: 10px;\n    padding: 25px;\n  }\n  ",
              ' {\n    background-image: url("img/homeswnews.jpeg");\n    min-height: 500px;\n    max-width: 1980px;\n    min-width: 1280px;\n    background-position: center;\n    box-shadow: 0px 6px 11px 0px rgba(0, 0, 0, 0.89);\n  }\n',
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        _n = E.a.div(
          F ||
            (F = Object(U.a)([
              "\n  ",
              " {\n    width: 100%;\n  }\n  ",
              " {\n    width: 1280px;\n    height: 100%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        Tn = E.a.div(
          A ||
            (A = Object(U.a)([
              "\n  ",
              " {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  ",
              " {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 100%;\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        Rn = E.a.div(
          M ||
            (M = Object(U.a)([
              "\n  color: black;\n  ",
              " {\n    height: 450px;\n    border-bottom: 3px dashed #eee;\n    padding-top: 30px;\n  }\n  ",
              " {\n    height: 370px;\n    width: 600px;\n    margin-bottom: 50px;\n    margin: 50px 0;\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        Wn = E.a.div(
          L ||
            (L = Object(U.a)([
              "\n  ",
              " {\n    height: 25px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 20px;\n    font-weight: 600;\n    color: #0c1b58;\n    margin-bottom: 15px;\n    & .title-burger {\n      transform: rotate(90deg);\n      color: black;\n      opacity: 0.2;\n    }\n    & .title-title {\n      width: 75%;\n    }\n\n    & .title-more {\n      font-size: 10px;\n      color: black;\n      & .title-link {\n        text-decoration: none;\n        color: black;\n      }\n    }\n  }\n  ",
              " {\n    height: 25px;\n    width: 80%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 20px;\n    font-weight: 600;\n    color: #0c1b58;\n    margin-bottom: 15px;\n    & .title-burger {\n      transform: rotate(90deg);\n      color: black;\n      opacity: 0.2;\n      font-size: 24px;\n      cursor: pointer;\n    }\n    & .title-title {\n      width: 75%;\n      font-size: 24px;\n    }\n\n    & .title-more {\n      font-size: 10px;\n      color: black;\n      & .title-link {\n        text-decoration: none;\n        color: black;\n      }\n    }\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        Un = Object(E.a)(vn.b)(
          P ||
            (P = Object(U.a)([
              "\n  ",
              " {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 75%;\n  }\n  ",
              " {\n    display: flex;\n    width: 100%;\n    height: 95%;\n    padding: 5px;\n    cursor: pointer;\n    justify-content: space-between;\n    &:hover {\n      transition: 0.2s linear;\n      background-color: #eee;\n    }\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        En = E.a.div(
          D ||
            (D = Object(U.a)([
              "\n  ",
              " {\n    width: 50%;\n    height: 100%;\n    margin-right: 10px;\n\n    & img {\n      width: 320px;\n      height: 200px;\n      margin: 0 auto;\n      object-fit: cover;\n    }\n  }\n  ",
              " {\n    width: 50%;\n    height: 100%;\n    margin-right: 10px;\n    & img {\n      width: 350px;\n      height: 350px;\n      object-fit: cover;\n    }\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        ),
        Hn = E.a.div(
          _ ||
            (_ = Object(U.a)([
              "\n  color: black;\n\n  ",
              " {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    & .section-title {\n      height: 25%;\n      width: 95%;\n      word-break: break-all;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      font-size: 12px;\n      font-weight: 600;\n      margin-top: 10px;\n      line-height: 1.4;\n    }\n\n    & .section-desc {\n      height: 60%;\n      width: 95%;\n      word-break: break-all;\n      text-overflow: ellipsis;\n      line-height: 1.3;\n      font-size: 9px;\n    }\n  }\n  ",
              " {\n    width: 37%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    & .section-title {\n      height: 29%;\n      width: 80%;\n      word-break: break-all;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      font-size: 16px;\n      font-weight: 600;\n    }\n    & .section-desc {\n      margin-top: 10px;\n      height: 29%;\n      width: 80%;\n      display: block;\n      overflow: hidden;\n      word-break: break-all;\n      line-height: 1.6;\n      font-size: 12px;\n    }\n  }\n",
            ])),
          Object(Q.d)(Q.b),
          Object(Q.d)(Q.a)
        );
      e.default = function () {
        var n = Object(W.useState)(!1),
          e = Object(T.a)(n, 2),
          t = e[0],
          i = e[1],
          a = Object(K.a)(),
          c = Object(R.a)(G.e).data;
        return (
          localStorage.setItem(
            "fuzePopUpNotShow",
            new Date().getTime().toString()
          ),
          Object(W.useEffect)(function () {
            var n = localStorage.getItem("fuzePopUpNotShow") || "",
              e = Date.parse(n || ""),
              t = parseInt(n, 10) + 6e4,
              a = Math.floor(new Date().getTime());
            Number.isNaN(e) && i(!0), t < a && i(!0);
          }, []),
          Object(H.jsxs)(X, {
            children: [
              a.width > 376 &&
                (null === c || void 0 === c ? void 0 : c.getPopupStatus.data) &&
                c.getPopupStatus.data.up &&
                Object(H.jsx)(J, {
                  showPopup: t,
                  setShowPopUp: i,
                  url: c.getPopupStatus.data.url || "",
                }),
              Object(H.jsx)(tn, {}),
              Object(H.jsx)($n, {}),
              Object(H.jsx)(bn, {}),
              Object(H.jsx)(Pn, {}),
            ],
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=28.218950b0.chunk.js.map
