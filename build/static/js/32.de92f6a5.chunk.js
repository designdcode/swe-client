(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [32],
  {
    104: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return k;
      }),
        e.d(t, "k", function () {
          return y;
        }),
        e.d(t, "e", function () {
          return w;
        }),
        e.d(t, "i", function () {
          return v;
        }),
        e.d(t, "f", function () {
          return I;
        }),
        e.d(t, "g", function () {
          return S;
        }),
        e.d(t, "b", function () {
          return N;
        }),
        e.d(t, "c", function () {
          return B;
        }),
        e.d(t, "j", function () {
          return A;
        }),
        e.d(t, "d", function () {
          return C;
        }),
        e.d(t, "h", function () {
          return z;
        });
      var i,
        r,
        a,
        c,
        o,
        l,
        d,
        s,
        u,
        p,
        b,
        g,
        j,
        m,
        h,
        f,
        x,
        O = e(94),
        $ = e(528),
        k = Object($.a)(
          i ||
            (i = Object(O.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        y = Object($.a)(
          r ||
            (r = Object(O.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        inputCreatedAt\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        w = Object($.a)(
          a ||
            (a = Object(O.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        v = Object($.a)(
          c ||
            (c = Object(O.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        I =
          (Object($.a)(
            o ||
              (o = Object(O.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object($.a)(
            l ||
              (l = Object(O.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object($.a)(
            d ||
              (d = Object(O.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        S = Object($.a)(
          s ||
            (s = Object(O.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N = Object($.a)(
          u ||
            (u = Object(O.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B = Object($.a)(
          p ||
            (p = Object(O.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        A =
          (Object($.a)(
            b ||
              (b = Object(O.a)([
                "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object($.a)(
            g ||
              (g = Object(O.a)([
                "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object($.a)(
            j ||
              (j = Object(O.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object($.a)(
            m ||
              (m = Object(O.a)([
                "\n  mutation editPopup($up: String!, $url: String, $link: String) {\n    editPopup(up: $up, url: $url, link: $link) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        C = Object($.a)(
          h ||
            (h = Object(O.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        z =
          (Object($.a)(
            f ||
              (f = Object(O.a)([
                "\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object($.a)(
            x ||
              (x = Object(O.a)([
                "\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ));
    },
    125: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return a;
      });
      var i = e(89),
        r = e(2),
        a = function () {
          var n = "object" === typeof window,
            t = Object(r.useCallback)(
              function () {
                return {
                  width: n ? window.innerWidth : 0,
                  height: n ? window.innerWidth : 0,
                };
              },
              [n]
            ),
            e = Object(r.useState)(t),
            a = Object(i.a)(e, 2),
            c = a[0],
            o = a[1];
          return (
            Object(r.useEffect)(
              function () {
                if (n) {
                  var e = function () {
                    o(t());
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
            c
          );
        };
    },
    513: function (n, t, e) {
      "use strict";
      e.r(t);
      var i,
        r,
        a,
        c,
        o,
        l,
        d,
        s,
        u,
        p = e(94),
        b = e(2),
        g = e(101),
        j = e(4),
        m = e(177),
        h = e(119),
        f = e(125),
        x = e(46),
        O = e(138),
        $ = e(104),
        k = e(478),
        y = e(11),
        w = function () {
          return Object(y.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: Object(y.jsx)("path", {
              d: "M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z",
            }),
          });
        };
      t.default = function () {
        var n,
          t = Object(f.a)(),
          e = Object(j.i)(),
          i = e.param,
          r = e.subparam,
          a = Object(O.a)($.k, { variables: { category: r } }),
          c = a.loading,
          o = a.data,
          l = Object(b.useCallback)(
            function () {
              switch (r.split("-")[1]) {
                case "cs":
                  return Object(y.jsx)("a", {
                    className: "link-button",
                    href: "https://cs.sunmoon.ac.kr/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: Object(y.jsx)("img", {
                      src: "/img/cs_button.jpeg",
                      alt: "buttonimg",
                    }),
                  });
                case "ai":
                  return Object(y.jsx)("a", {
                    className: "link-button",
                    href: "https://ais.sunmoon.ac.kr/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: Object(y.jsx)("img", {
                      src: "/img/ai_button.jpg",
                      alt: "buttonimg",
                    }),
                  });
                case "convergence":
                  return Object(y.jsx)("a", {
                    className: "link-button",
                    href: "https://swc.sunmoon.ac.kr/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: Object(y.jsx)("img", {
                      src: "/img/swc_button.jpeg",
                      alt: "buttonimg",
                    }),
                  });
                case "it":
                  return Object(y.jsx)("a", {
                    className: "link-button",
                    href: "https://itedu.sunmoon.ac.kr/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: Object(y.jsx)("img", {
                      src: "/img/itedu_button.jpg",
                      alt: "buttonimg",
                    }),
                  });
                case "smartcar":
                  return Object(y.jsx)("a", {
                    className: "link-button",
                    href: "https://smartcar.sunmoon.ac.kr/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: Object(y.jsx)("img", {
                      src: "/img/smartcar_button.jpeg",
                      alt: "buttonimg",
                    }),
                  });
                case "sw":
                  return Object(y.jsx)("a", {
                    className: "link-button",
                    href: "https://sw.sunmoon.ac.kr/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: Object(y.jsx)("img", {
                      src: "/img/sw_button.jpeg",
                      alt: "buttonimg",
                    }),
                  });
                default:
                  return null;
              }
            },
            [r]
          );
        return c
          ? Object(y.jsx)("div", { children: "loading..." })
          : Object(y.jsxs)(v, {
              children: [
                Object(y.jsxs)(I, {
                  children: [
                    Object(y.jsx)(S, {
                      margin: t.width > 1500 ? "25%" : "15%",
                      children: m.a.map(function (n) {
                        return n.title === i.split("-")[0]
                          ? Object(y.jsxs)(
                              "div",
                              {
                                children: [
                                  Object(y.jsx)("span", {
                                    className: "cover-main-title",
                                    children: n.ko_title,
                                  }),
                                  Object(y.jsx)("span", {
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
                    Object(y.jsx)(N, {
                      isBigger: "major" === i,
                      children: Object(y.jsx)("div", {
                        className: "submenu-content",
                        children: m.a.map(function (n, t) {
                          return n.title === i
                            ? n.subMenu.map(function (n, t) {
                                var e,
                                  i = n.key === r ? 0 : 1;
                                return (
                                  (e =
                                    "achievement" === n.title.split("-")[0] ||
                                    "community" === n.title.split("-")[0]
                                      ? "sitemap" === n.key.split("-")[1]
                                        ? "/main/detail/"
                                            .concat(n.title.split("-")[0], "/")
                                            .concat(n.key)
                                        : "/main/board/"
                                            .concat(n.title.split("-")[0], "/")
                                            .concat(n.key)
                                      : "/main/detail/"
                                          .concat(n.title.split("-")[0], "/")
                                          .concat(n.key)),
                                  Object(y.jsxs)(
                                    A,
                                    {
                                      className: "submenu-col",
                                      first: i,
                                      children: [
                                        Object(y.jsx)(C, { first: i }),
                                        Object(y.jsx)(B, {
                                          to: e,
                                          first: i,
                                          children: Object(y.jsx)("span", {
                                            style: { fontWeight: 400 },
                                            children: n.ko_title,
                                          }),
                                        }),
                                      ],
                                    },
                                    "".concat(t, "key")
                                  )
                                );
                              })
                            : null;
                        }),
                      }),
                    }),
                    Object(y.jsx)("img", {
                      src: "/img/detailBG.jpeg",
                      alt: "cover",
                    }),
                  ],
                }),
                Object(y.jsxs)(z, {
                  children: [
                    Object(y.jsx)(_, {
                      children:
                        (null === o || void 0 === o
                          ? void 0
                          : o.getBoardByCategory.data) &&
                        o.getBoardByCategory.data[0] &&
                        o.getBoardByCategory.data[0].images &&
                        Object(y.jsx)("img", {
                          src:
                            null ===
                              (n = o.getBoardByCategory.data[0].images[0]) ||
                            void 0 === n
                              ? void 0
                              : n.url,
                          alt: "uploadedImage",
                        }),
                    }),
                    "sitelink" === i.toString() &&
                      Object(y.jsxs)("div", {
                        className: "button-text",
                        children: [
                          "\ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc2dc\uba74 \ud574\ub2f9 \uc0ac\uc774\ud2b8\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4",
                          l(),
                        ],
                      }),
                    "online" === r.split("-")[1] &&
                      Object(y.jsxs)("div", {
                        className: "platform",
                        children: [
                          Object(y.jsxs)("div", {
                            className: "platform-text",
                            children: [
                              Object(y.jsx)("span", {
                                children:
                                  "\u25bc \ud558\ub2e8 \uc0ac\uc774\ud2b8 \ucc38\uace0 \u25bc",
                              }),
                              Object(y.jsx)("a", {
                                href: "http://mpp.sunmoon.ac.kr",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "http://mpp.sunmoon.ac.kr",
                              }),
                            ],
                          }),
                          Object(y.jsx)(_, {
                            children: Object(y.jsx)("img", {
                              src: "/img/platform2.jpeg",
                              alt: "uploadedImage",
                            }),
                          }),
                        ],
                      }),
                    "route" === r.split("-")[1] &&
                      Object(y.jsx)("div", {
                        className: "route",
                        children: Object(y.jsx)(k.a, {
                          bootstrapURLKeys: {
                            key: "AIzaSyAFBszUq_SeeEeqQTQtkTzi3t82zSeGuCQ",
                          },
                          yesIWantToUseGoogleMapApiInternals: !0,
                          defaultCenter: {
                            lat: 36.80028982700267,
                            lng: 127.07714923339945,
                          },
                          defaultZoom: 16,
                          children: Object(y.jsx)(w, {}),
                        }),
                      }),
                  ],
                }),
              ],
            });
      };
      var v = g.a.div(
          i ||
            (i = Object(p.a)([
              "\n  ",
              " {\n    min-height: 50vh;\n  }\n  ",
              " {\n    margin-top: 15px;\n    width: 100%;\n    min-width: 1280px;\n    max-width: 1920px;\n    min-height: 100%;\n  }\n",
            ])),
          Object(h.d)(h.b),
          Object(h.d)(h.a)
        ),
        I = g.a.div(
          r ||
            (r = Object(p.a)([
              "\n  ",
              " {\n    width: 100%;\n    height: 120px;\n    & img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n  ",
              " {\n    width: 100%;\n    height: 350px;\n    margin: 0 auto;\n    position: relative;\n    & img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n",
            ])),
          Object(h.d)(h.b),
          Object(h.d)(h.a)
        ),
        S = g.a.div(
          a ||
            (a = Object(p.a)([
              "\n  ",
              " {\n    position: absolute;\n    top: 10%;\n    left: 5%;\n    & .cover-main-title {\n      font-size: 20px;\n      font-weight: 500px;\n      color: white;\n      display: block;\n    }\n    & .cover-description {\n      display: block;\n      font-size: 10px;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n    }\n  }\n  ",
              " {\n    position: absolute;\n    font-size: 20px;\n    margin-left: ",
              ";\n    margin-top: 50px;\n    & .cover-main-title {\n      font-size: 40px;\n      font-weight: 500;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n      text-shadow: 3px 3px 3px #000000e3;\n      display: block;\n    }\n\n    & .cover-description {\n      display: block;\n      font-size: 20px;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n      text-shadow: 3px 3px 3px #000000e3;\n    }\n  }\n",
            ])),
          Object(h.d)(h.b),
          Object(h.d)(h.a),
          function (n) {
            return n.margin;
          }
        ),
        N = g.a.div(
          c ||
            (c = Object(p.a)([
              "\n  ",
              " {\n    display: none;\n  }\n  ",
              " {\n    width: 100%;\n    background-color: #e5e2e2b8;\n    position: absolute;\n    bottom: 0;\n    font-size: 15px;\n    & .submenu-content {\n      max-width: 1280px;\n      min-width: 1000px;\n      min-height: 50px;\n      height: 50px;\n      margin: 0 auto;\n      padding-left: 5%;\n      display: flex;\n      flex-wrap: wrap;\n      align-items: center;\n    }\n    & .submenu-col {\n      min-width: 14%;\n      padding: 0 5px;\n      height: 50px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n",
            ])),
          Object(h.d)(h.b),
          Object(h.d)(h.a)
        ),
        B = Object(g.a)(x.b)(
          o ||
            (o = Object(p.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2px 5px;\n    font-size: 16px;\n    color: ",
              ";\n    &:hover {\n      color: white;\n    }\n  }\n",
            ])),
          Object(h.d)(h.b),
          Object(h.d)(h.a),
          function (n) {
            return 0 === n.first ? "white" : "black";
          }
        ),
        A = g.a.div(
          l ||
            (l = Object(p.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    background-color: ",
              ";\n    color: ",
              ";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    &:hover {\n      background-color: #0c1b58;\n      transition: 0.2s linear;\n      color: white;\n    }\n  }\n",
            ])),
          Object(h.d)(h.b),
          Object(h.d)(h.a),
          function (n) {
            return 0 === n.first ? "#0c1b58" : "";
          },
          function (n) {
            return 0 === n.first ? "white" : "black";
          }
        ),
        C = g.a.div(
          d ||
            (d = Object(p.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    width: 50%;\n    height: 2px;\n    border-top: ",
              ";\n  }\n",
            ])),
          Object(h.d)(h.b),
          Object(h.d)(h.a),
          function (n) {
            return 0 === n.first ? "2px solid white" : "";
          }
        ),
        z = g.a.div(
          s ||
            (s = Object(p.a)([
              "\n  ",
              " {\n    height: 100%;\n\n    & .link-button {\n      display: flex;\n      justify-content: center;\n      width: 100%;\n      min-height: 50px;\n      margin: 10px auto;\n      & img {\n        width: 200px;\n      }\n    }\n    & .button-text {\n      margin-top: 50px;\n      width: 100%;\n      height: 200px;\n      margin: 0 auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n\n    & .route {\n      width: 300px;\n      height: 300px;\n      margin: 10px auto;\n    }\n  }\n  ",
              " {\n    width: 1280px;\n    min-height: 100vh;\n    margin: 0 auto;\n    & .link-button {\n      display: flex;\n      justify-content: center;\n      width: 100%;\n      min-height: 50px;\n      margin: 20px auto;\n      & img {\n        width: 300px;\n      }\n    }\n    & .button-text {\n      margin-top: 50px;\n      width: 400px;\n      height: 300px;\n      margin: 0 auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n\n    & .route {\n      width: 800px;\n      height: 600px;\n      margin: 25px auto;\n    }\n\n    & .platform {\n      & .platform-text {\n        display: flex;\n        width: 300px;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        color: #0c1b58;\n        margin: 0 auto;\n        & span {\n          display: block;\n        }\n        & a {\n          color: #0c1b58;\n          text-decoration: underline;\n          font-size: 18px;\n          font-weight: 600;\n        }\n      }\n    }\n  }\n",
            ])),
          Object(h.d)(h.b),
          Object(h.d)(h.a)
        ),
        _ = g.a.div(
          u ||
            (u = Object(p.a)([
              "\n  ",
              " {\n    width: 100%;\n    padding: 40px 0;\n    display: flex;\n    justify-content: center;\n    & img {\n      width: 80%;\n      object-fit: contain;\n    }\n  }\n  ",
              " {\n    padding: 60px 0;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    & img {\n      width: 80%;\n      margin: 0 auto;\n    }\n  }\n",
            ])),
          Object(h.d)(h.b),
          Object(h.d)(h.a)
        );
    },
  },
]);
//# sourceMappingURL=32.de92f6a5.chunk.js.map
