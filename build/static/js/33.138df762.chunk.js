(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [33],
  {
    104: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return h;
      }),
        e.d(t, "l", function () {
          return x;
        }),
        e.d(t, "e", function () {
          return I;
        }),
        e.d(t, "j", function () {
          return S;
        }),
        e.d(t, "f", function () {
          return v;
        }),
        e.d(t, "g", function () {
          return w;
        }),
        e.d(t, "b", function () {
          return N;
        }),
        e.d(t, "c", function () {
          return A;
        }),
        e.d(t, "h", function () {
          return B;
        }),
        e.d(t, "k", function () {
          return C;
        }),
        e.d(t, "d", function () {
          return R;
        }),
        e.d(t, "i", function () {
          return F;
        });
      var i,
        r,
        a,
        o,
        c,
        l,
        d,
        u,
        p,
        b,
        $,
        s,
        g,
        j,
        m,
        O,
        f,
        k = e(94),
        y = e(548),
        h = Object(y.a)(
          i ||
            (i = Object(k.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        x = Object(y.a)(
          r ||
            (r = Object(k.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        inputCreatedAt\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        I = Object(y.a)(
          a ||
            (a = Object(k.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S = Object(y.a)(
          o ||
            (o = Object(k.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        v =
          (Object(y.a)(
            c ||
              (c = Object(k.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            l ||
              (l = Object(k.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            d ||
              (d = Object(k.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        w = Object(y.a)(
          u ||
            (u = Object(k.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N = Object(y.a)(
          p ||
            (p = Object(k.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        A = Object(y.a)(
          b ||
            (b = Object(k.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B =
          (Object(y.a)(
            $ ||
              ($ = Object(k.a)([
                "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            s ||
              (s = Object(k.a)([
                "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        C =
          (Object(y.a)(
            g ||
              (g = Object(k.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            j ||
              (j = Object(k.a)([
                "\n  mutation editPopup($up: String!, $url: String) {\n    editPopup(up: $up, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        R = Object(y.a)(
          m ||
            (m = Object(k.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        F =
          (Object(y.a)(
            O ||
              (O = Object(k.a)([
                "\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            f ||
              (f = Object(k.a)([
                "\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ));
    },
    560: function (n, t, e) {
      "use strict";
      e.r(t);
      var i,
        r,
        a,
        o,
        c,
        l = e(94),
        d = e(114),
        u = e(89),
        p = e(112),
        b = e.n(p),
        $ = e(2),
        s = e(103),
        g = s.a.div(i || (i = Object(l.a)([""]))),
        j =
          (s.a.div(
            r ||
              (r = Object(l.a)([
                "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & .list-description {\n    margin: 8px 0;\n    width: 800px;\n  }\n\n  & .list-title {\n    display: inline-block;\n    min-width: 100px;\n  }\n\n  & .list-href {\n    margin-left: 30px;\n  }\n\n  & .button-group {\n    display: inline-block;\n    margin-left: 15px;\n  }\n\n  & .button {\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n\n    &:hover {\n      color: red;\n      transition: 0.2s linear;\n    }\n  }\n\n  & .edit-input {\n    display: block;\n    width: 400px;\n    margin: 8px 0;\n  }\n\n  & .delete-button {\n    margin-left: 5px;\n  }\n",
              ]))
          ),
          s.a.div(
            a ||
              (a = Object(l.a)([
                "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  & .input-row {\n    margin: 5px 0;\n    max-width: 800px;\n  }\n",
              ]))
          ),
          e(139)),
        m = e(164),
        O = e(104),
        f = e(478),
        k = e(130),
        y = e(494),
        h = e(45),
        x = e(11),
        I =
          ((t.default = function () {
            var n = Object($.useState)(""),
              t = Object(u.a)(n, 2),
              e = t[0],
              i = t[1],
              r = Object(k.a)(""),
              a = Object(u.a)(r, 3),
              o = a[0],
              c = a[1],
              l = a[2],
              p = Object($.useState)(!1),
              s = Object(u.a)(p, 2),
              y = s[0],
              v = s[1],
              w = Object(j.a)(O.l, {
                variables: { category: "link" },
                onCompleted: function (n) {
                  var t = n.getBoardByCategory,
                    e = t.ok,
                    r = t.err,
                    a = t.data;
                  e && a && a.length > 0
                    ? a[0].link && i(a[0].link.split("v=")[1])
                    : console.log(r);
                },
              }),
              N = w.loading,
              A = w.refetch,
              B = Object(m.a)(O.a, {
                onCompleted: function (n) {
                  var t = n.createBoard,
                    e = t.ok,
                    i = t.err;
                  e
                    ? (h.b.success(
                        "\uc131\uacf5\uc801\uc73c\ub85c \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                      ),
                      l(""),
                      window.location.reload())
                    : console.log(i);
                },
              }),
              C = Object(u.a)(B, 1)[0],
              R = Object($.useCallback)(
                Object(d.a)(
                  b.a.mark(function n() {
                    return b.a.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              C({
                                variables: {
                                  title: "video link",
                                  content: "video-content",
                                  link: o,
                                  category: "link",
                                },
                              }).then(function (n) {
                                A();
                              })
                            );
                          case 2:
                            l("");
                          case 3:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                ),
                [o, C, A, l]
              );
            return N
              ? Object(x.jsx)("div", { children: "loading..." })
              : Object(x.jsx)(g, {
                  children: Object(x.jsxs)(I, {
                    children: [
                      Object(x.jsxs)("div", {
                        className: "head",
                        children: [
                          Object(x.jsx)("span", {
                            className: "title",
                            children:
                              "\ud604\uc7ac \uc5c5\ub85c\ub4dc\ub41c \uc601\uc0c1",
                          }),
                          Object(x.jsx)("div", {
                            className: "head-button",
                            onClick: function () {
                              return v(!y);
                            },
                            children: "\ub9c1\ud06c \uc62c\ub9ac\uae30",
                          }),
                        ],
                      }),
                      y &&
                        Object(x.jsxs)("div", {
                          className: "input-content",
                          children: [
                            Object(x.jsx)(S, { value: o, onChange: c }),
                            Object(x.jsx)("button", {
                              onClick: R,
                              children: "\uc62c\ub9ac\uae30",
                            }),
                          ],
                        }),
                      "" !== e
                        ? Object(x.jsx)(f.a, {
                            opts: {
                              height: "350",
                              width: "500",
                              playerVars: { autoplay: 1 },
                            },
                            videoId: e,
                            onReady: function (n) {
                              n.target.pauseVideo();
                            },
                          })
                        : Object(x.jsx)("div", {
                            className: "notice",
                            children:
                              "\ud604\uc7ac \uc5c5\ub85c\ub4dc \ub41c \ube44\ub514\uc624\uac00 \uc5c6\uc2b5\ub2c8\ub2e4",
                          }),
                    ],
                  }),
                });
          }),
          s.a.div(
            o ||
              (o = Object(l.a)([
                "\n  & .head {\n    display: flex;\n    align-items: center;\n\n    & .title {\n      font-size: 16px;\n      display: block;\n    }\n\n    & .head-button {\n      padding: 6px 8px;\n      background-color: skyblue;\n      color: white;\n      margin-left: 150px;\n      cursor: pointer;\n    }\n    margin-bottom: 30px;\n  }\n\n  & .input-content {\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    padding: 10px 5px;\n\n    & button {\n      border: none;\n      background-color: skyblue;\n      color: white;\n      cursor: pointer;\n      padding: 4px 6px;\n      margin-left: 20px;\n    }\n  }\n\n  & .notice {\n    padding: 15px;\n  }\n",
              ]))
          )),
        S = Object(s.a)(y.a)(c || (c = Object(l.a)(["\n  width: 400px;\n"])));
    },
  },
]);
//# sourceMappingURL=33.138df762.chunk.js.map
