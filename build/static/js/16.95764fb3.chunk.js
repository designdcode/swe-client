(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [16],
  {
    104: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return k;
      }),
        n.d(t, "k", function () {
          return x;
        }),
        n.d(t, "e", function () {
          return C;
        }),
        n.d(t, "i", function () {
          return $;
        }),
        n.d(t, "f", function () {
          return w;
        }),
        n.d(t, "g", function () {
          return I;
        }),
        n.d(t, "b", function () {
          return S;
        }),
        n.d(t, "c", function () {
          return N;
        }),
        n.d(t, "j", function () {
          return E;
        }),
        n.d(t, "d", function () {
          return A;
        }),
        n.d(t, "h", function () {
          return B;
        });
      var a,
        c,
        r,
        i,
        o,
        l,
        u,
        s,
        d,
        b,
        f,
        j,
        p,
        O,
        m,
        h,
        v,
        g = n(94),
        y = n(528),
        k = Object(y.a)(
          a ||
            (a = Object(g.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        x = Object(y.a)(
          c ||
            (c = Object(g.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        inputCreatedAt\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        C = Object(y.a)(
          r ||
            (r = Object(g.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        $ = Object(y.a)(
          i ||
            (i = Object(g.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        w =
          (Object(y.a)(
            o ||
              (o = Object(g.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            l ||
              (l = Object(g.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            u ||
              (u = Object(g.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        I = Object(y.a)(
          s ||
            (s = Object(g.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S = Object(y.a)(
          d ||
            (d = Object(g.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N = Object(y.a)(
          b ||
            (b = Object(g.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        E =
          (Object(y.a)(
            f ||
              (f = Object(g.a)([
                "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            j ||
              (j = Object(g.a)([
                "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            p ||
              (p = Object(g.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            O ||
              (O = Object(g.a)([
                "\n  mutation editPopup($up: String!, $url: String, $link: String) {\n    editPopup(up: $up, url: $url, link: $link) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        A = Object(y.a)(
          m ||
            (m = Object(g.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B =
          (Object(y.a)(
            h ||
              (h = Object(g.a)([
                "\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            v ||
              (v = Object(g.a)([
                "\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ));
    },
    114: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var a = n(133);
      n(189);
      a.a.initializeApp({
        apiKey: "AIzaSyDM5Cqu1m1YJ7E44OfM9Yo3LH0ZUN8Y6x4",
        authDomain: "sunmoon-swe.firebaseapp.com",
        projectId: "sunmoon-swe",
        storageBucket: "sunmoon-swe.appspot.com",
        messagingSenderId: "1064857281018",
        appId: "1:1064857281018:web:b2881ce151e1a16b068443",
        measurementId: "G-JYK8JT1WEN",
      });
      var c = a.a.storage();
    },
    132: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "f", function () {
          return r;
        }),
        n.d(t, "b", function () {
          return i;
        }),
        n.d(t, "a", function () {
          return o;
        }),
        n.d(t, "e", function () {
          return l;
        });
      var a = function (e) {
          return (
            "storage" ===
            (null === e || void 0 === e ? void 0 : e.toString().split("-")[0])
          );
        },
        c = function (e) {
          var t =
              null === e || void 0 === e ? void 0 : e.toString().split("-")[0],
            n =
              null === e || void 0 === e ? void 0 : e.toString().split("-")[1];
          switch (t) {
            case "community":
              return (
                "notice" === n || "administration" === n || "storage" === n
              );
            case "storage":
            case "achievement":
              return !0;
            default:
              return !1;
          }
        },
        r = function (e) {
          switch (
            null === e || void 0 === e ? void 0 : e.toString().split("-")[1]
          ) {
            case "aidnews":
            case "valuenews":
            case "coopnews":
              return !0;
            default:
              return !1;
          }
        },
        i = function (e) {
          var t =
              null === e || void 0 === e ? void 0 : e.toString().split("-")[0],
            n =
              null === e || void 0 === e ? void 0 : e.toString().split("-")[1];
          switch (t) {
            case "community":
              return (
                "notice" === n || "administration" === n || "storage" === n
              );
            case "storage":
            case "achievement":
              return !0;
            default:
              return !1;
          }
        },
        o = function (e) {
          return (
            "introduce" !==
            (null === e || void 0 === e ? void 0 : e.toString().split("-")[0])
          );
        },
        l = function (e) {
          switch (
            null === e || void 0 === e ? void 0 : e.toString().split("-")[1]
          ) {
            case "help":
            case "request":
              return !0;
            default:
              return !1;
          }
        };
    },
    140: function (e, t, n) {
      "use strict";
      var a = n(6),
        c = n(88),
        r = n(96),
        i = n(90),
        o = n(97),
        l = n(98),
        u = n(102),
        s = n(103),
        d = n(2),
        b = n.n(d),
        f = n(87),
        j = n.n(f),
        p = (function (e) {
          Object(u.a)(n, e);
          var t = Object(s.a)(n);
          function n(e) {
            var a;
            Object(o.a)(this, n),
              ((a = t.call(this, e)).handleChange = function (e) {
                var t = a.props,
                  n = t.disabled,
                  c = t.onChange;
                n ||
                  ("checked" in a.props ||
                    a.setState({ checked: e.target.checked }),
                  c &&
                    c({
                      target: Object(i.a)(
                        Object(i.a)({}, a.props),
                        {},
                        { checked: e.target.checked }
                      ),
                      stopPropagation: function () {
                        e.stopPropagation();
                      },
                      preventDefault: function () {
                        e.preventDefault();
                      },
                      nativeEvent: e.nativeEvent,
                    }));
              }),
              (a.saveInput = function (e) {
                a.input = e;
              });
            var c = "checked" in e ? e.checked : e.defaultChecked;
            return (a.state = { checked: c }), a;
          }
          return (
            Object(l.a)(
              n,
              [
                {
                  key: "focus",
                  value: function () {
                    this.input.focus();
                  },
                },
                {
                  key: "blur",
                  value: function () {
                    this.input.blur();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e,
                      t = this.props,
                      n = t.prefixCls,
                      i = t.className,
                      o = t.style,
                      l = t.name,
                      u = t.id,
                      s = t.type,
                      d = t.disabled,
                      f = t.readOnly,
                      p = t.tabIndex,
                      O = t.onClick,
                      m = t.onFocus,
                      h = t.onBlur,
                      v = t.onKeyDown,
                      g = t.onKeyPress,
                      y = t.onKeyUp,
                      k = t.autoFocus,
                      x = t.value,
                      C = t.required,
                      $ = Object(r.a)(t, [
                        "prefixCls",
                        "className",
                        "style",
                        "name",
                        "id",
                        "type",
                        "disabled",
                        "readOnly",
                        "tabIndex",
                        "onClick",
                        "onFocus",
                        "onBlur",
                        "onKeyDown",
                        "onKeyPress",
                        "onKeyUp",
                        "autoFocus",
                        "value",
                        "required",
                      ]),
                      w = Object.keys($).reduce(function (e, t) {
                        return (
                          ("aria-" !== t.substr(0, 5) &&
                            "data-" !== t.substr(0, 5) &&
                            "role" !== t) ||
                            (e[t] = $[t]),
                          e
                        );
                      }, {}),
                      I = this.state.checked,
                      S = j()(
                        n,
                        i,
                        ((e = {}),
                        Object(c.a)(e, "".concat(n, "-checked"), I),
                        Object(c.a)(e, "".concat(n, "-disabled"), d),
                        e)
                      );
                    return b.a.createElement(
                      "span",
                      { className: S, style: o },
                      b.a.createElement(
                        "input",
                        Object(a.a)(
                          {
                            name: l,
                            id: u,
                            type: s,
                            required: C,
                            readOnly: f,
                            disabled: d,
                            tabIndex: p,
                            className: "".concat(n, "-input"),
                            checked: !!I,
                            onClick: O,
                            onFocus: m,
                            onBlur: h,
                            onKeyUp: y,
                            onKeyDown: v,
                            onKeyPress: g,
                            onChange: this.handleChange,
                            autoFocus: k,
                            ref: this.saveInput,
                            value: x,
                          },
                          w
                        )
                      ),
                      b.a.createElement("span", {
                        className: "".concat(n, "-inner"),
                      })
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return "checked" in e
                      ? Object(i.a)(
                          Object(i.a)({}, t),
                          {},
                          { checked: e.checked }
                        )
                      : null;
                  },
                },
              ]
            ),
            n
          );
        })(d.Component);
      (p.defaultProps = {
        prefixCls: "rc-checkbox",
        className: "",
        style: {},
        type: "checkbox",
        defaultChecked: !1,
        onFocus: function () {},
        onBlur: function () {},
        onChange: function () {},
        onKeyDown: function () {},
        onKeyPress: function () {},
        onKeyUp: function () {},
      }),
        (t.a = p);
    },
    144: function (e, t, n) {
      "use strict";
      var a,
        c = n(94),
        r = n(2),
        i = n(101),
        o = n(211),
        l = n.n(o),
        u = (n(214), n(11));
      t.a = function (e) {
        e.content;
        var t = e.onChange,
          n = Object(r.useRef)(),
          a = Object(r.useCallback)(function (e) {
            n.current = e;
          }, []),
          c = Object(r.useCallback)(function (e) {
            if (e && e.imageInfo) {
              var t = e.imageInfo.split("base64,");
              console.log(t);
            }
          }, []);
        return Object(u.jsx)(s, {
          getSunEditorInstance: a,
          onChange: t,
          onImageUpload: c,
          setOptions: {
            minHeight: "400px",
            buttonList: [
              ["fontSize", "bold", "underline", "italic", "fontColor", "list"],
            ],
          },
        });
      };
      var s = Object(i.a)(l.a)(
        a ||
          (a = Object(c.a)([
            "\n  background-color: white;\n  min-height: 300px;\n  & .ql-container {\n    min-height: 300px;\n  }\n  & .ql-editor {\n    min-height: 300px;\n  }\n",
          ]))
      );
    },
    171: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var a = n(45),
        c = n(114),
        r = function (e, t, n, r) {
          c.a
            .ref("/".concat(e, "/").concat(t, "/").concat(n))
            .delete()
            .then(function () {
              r("");
            })
            .catch(function (e) {
              return a.b.error(e);
            });
        };
    },
    172: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var a = n(115),
        c = n(113),
        r = n.n(c),
        i = n(45),
        o = n(114),
        l = function (e, t, n, c, l, u, s, d, b) {
          o.a
            .ref("/".concat(e, "/").concat(n, "/").concat(c))
            .put(t)
            .on(
              "state_changed",
              function (e) {},
              function (e) {
                return console.log(e);
              },
              function () {
                s(1),
                  o.a
                    .ref("/".concat(e, "/").concat(n, "/").concat(c))
                    .getDownloadURL()
                    .then(
                      (function () {
                        var e = Object(a.a)(
                          r.a.mark(function e(t) {
                            return r.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if ((l(t), !d || !b)) {
                                      e.next = 4;
                                      break;
                                    }
                                    return (
                                      (e.next = 4),
                                      d({
                                        variables: {
                                          url: t,
                                          fileName: c,
                                          boardId: b,
                                        },
                                      })
                                    );
                                  case 4:
                                    i.b.success(
                                      "\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                    ),
                                      s(0);
                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })()
                    );
              }
            );
        };
    },
    212: function (e, t, n) {
      var a = {
        "./ckb.js": 153,
        "./da.js": 154,
        "./de.js": 155,
        "./en.js": 145,
        "./es.js": 156,
        "./fr.js": 157,
        "./he.js": 158,
        "./index.js": 213,
        "./it.js": 159,
        "./ja.js": 160,
        "./ko.js": 161,
        "./lv.js": 162,
        "./nl.js": 163,
        "./pl.js": 164,
        "./pt_br.js": 165,
        "./ro.js": 166,
        "./ru.js": 167,
        "./se.js": 168,
        "./ua.js": 169,
        "./zh_cn.js": 170,
      };
      function c(e) {
        var t = r(e);
        return n(t);
      }
      function r(e) {
        if (!n.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return a[e];
      }
      (c.keys = function () {
        return Object.keys(a);
      }),
        (c.resolve = r),
        (e.exports = c),
        (c.id = 212);
    },
    219: function (e, t, n) {
      "use strict";
      var a = n(88),
        c = n(6),
        r = n(2),
        i = n(87),
        o = n.n(i),
        l = n(140),
        u = n(92),
        s = n(89),
        d = n(106),
        b = n(187),
        f = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var c = 0;
            for (a = Object.getOwnPropertySymbols(e); c < a.length; c++)
              t.indexOf(a[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[c]) &&
                (n[a[c]] = e[a[c]]);
          }
          return n;
        },
        j = r.createContext(null),
        p = function (e, t) {
          var n = e.defaultValue,
            i = e.children,
            l = e.options,
            p = void 0 === l ? [] : l,
            O = e.prefixCls,
            m = e.className,
            h = e.style,
            v = e.onChange,
            g = f(e, [
              "defaultValue",
              "children",
              "options",
              "prefixCls",
              "className",
              "style",
              "onChange",
            ]),
            y = r.useContext(b.b),
            x = y.getPrefixCls,
            C = y.direction,
            $ = r.useState(g.value || n || []),
            w = Object(s.a)($, 2),
            I = w[0],
            S = w[1],
            N = r.useState([]),
            E = Object(s.a)(N, 2),
            A = E[0],
            B = E[1];
          r.useEffect(
            function () {
              "value" in g && S(g.value || []);
            },
            [g.value]
          );
          var P = function () {
              return p.map(function (e) {
                return "string" === typeof e ? { label: e, value: e } : e;
              });
            },
            F = x("checkbox", O),
            R = "".concat(F, "-group"),
            D = Object(d.a)(g, ["value", "disabled"]);
          p &&
            p.length > 0 &&
            (i = P().map(function (e) {
              return r.createElement(
                k,
                {
                  prefixCls: F,
                  key: e.value.toString(),
                  disabled: "disabled" in e ? e.disabled : g.disabled,
                  value: e.value,
                  checked: -1 !== I.indexOf(e.value),
                  onChange: e.onChange,
                  className: "".concat(R, "-item"),
                  style: e.style,
                },
                e.label
              );
            }));
          var K = {
              toggleOption: function (e) {
                var t = I.indexOf(e.value),
                  n = Object(u.a)(I);
                -1 === t ? n.push(e.value) : n.splice(t, 1),
                  "value" in g || S(n);
                var a = P();
                null === v ||
                  void 0 === v ||
                  v(
                    n
                      .filter(function (e) {
                        return -1 !== A.indexOf(e);
                      })
                      .sort(function (e, t) {
                        return (
                          a.findIndex(function (t) {
                            return t.value === e;
                          }) -
                          a.findIndex(function (e) {
                            return e.value === t;
                          })
                        );
                      })
                  );
              },
              value: I,
              disabled: g.disabled,
              name: g.name,
              registerValue: function (e) {
                B(function (t) {
                  return [].concat(Object(u.a)(t), [e]);
                });
              },
              cancelValue: function (e) {
                B(function (t) {
                  return t.filter(function (t) {
                    return t !== e;
                  });
                });
              },
            },
            L = o()(R, Object(a.a)({}, "".concat(R, "-rtl"), "rtl" === C), m);
          return r.createElement(
            "div",
            Object(c.a)({ className: L, style: h }, D, { ref: t }),
            r.createElement(j.Provider, { value: K }, i)
          );
        },
        O = r.forwardRef(p),
        m = r.memo(O),
        h = n(99),
        v = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var c = 0;
            for (a = Object.getOwnPropertySymbols(e); c < a.length; c++)
              t.indexOf(a[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[c]) &&
                (n[a[c]] = e[a[c]]);
          }
          return n;
        },
        g = function (e, t) {
          var n,
            i = e.prefixCls,
            u = e.className,
            s = e.children,
            d = e.indeterminate,
            f = void 0 !== d && d,
            p = e.style,
            O = e.onMouseEnter,
            m = e.onMouseLeave,
            g = e.skipGroup,
            y = void 0 !== g && g,
            k = v(e, [
              "prefixCls",
              "className",
              "children",
              "indeterminate",
              "style",
              "onMouseEnter",
              "onMouseLeave",
              "skipGroup",
            ]),
            x = r.useContext(b.b),
            C = x.getPrefixCls,
            $ = x.direction,
            w = r.useContext(j),
            I = r.useRef(k.value);
          r.useEffect(function () {
            null === w || void 0 === w || w.registerValue(k.value),
              Object(h.a)(
                "checked" in k || !!w || !("value" in k),
                "Checkbox",
                "`value` is not a valid prop, do you mean `checked`?"
              );
          }, []),
            r.useEffect(
              function () {
                if (!y)
                  return (
                    k.value !== I.current &&
                      (null === w || void 0 === w || w.cancelValue(I.current),
                      null === w || void 0 === w || w.registerValue(k.value)),
                    function () {
                      return null === w || void 0 === w
                        ? void 0
                        : w.cancelValue(k.value);
                    }
                  );
              },
              [k.value]
            );
          var S = C("checkbox", i),
            N = Object(c.a)({}, k);
          w &&
            !y &&
            ((N.onChange = function () {
              k.onChange && k.onChange.apply(k, arguments),
                w.toggleOption && w.toggleOption({ label: s, value: k.value });
            }),
            (N.name = w.name),
            (N.checked = -1 !== w.value.indexOf(k.value)),
            (N.disabled = k.disabled || w.disabled));
          var E = o()(
              ((n = {}),
              Object(a.a)(n, "".concat(S, "-wrapper"), !0),
              Object(a.a)(n, "".concat(S, "-rtl"), "rtl" === $),
              Object(a.a)(n, "".concat(S, "-wrapper-checked"), N.checked),
              Object(a.a)(n, "".concat(S, "-wrapper-disabled"), N.disabled),
              n),
              u
            ),
            A = o()(Object(a.a)({}, "".concat(S, "-indeterminate"), f));
          return r.createElement(
            "label",
            { className: E, style: p, onMouseEnter: O, onMouseLeave: m },
            r.createElement(
              l.a,
              Object(c.a)({}, N, { prefixCls: S, className: A, ref: t })
            ),
            void 0 !== s && r.createElement("span", null, s)
          );
        },
        y = r.forwardRef(g);
      y.displayName = "Checkbox";
      var k = y,
        x = k;
      (x.Group = m), (x.__ANT_CHECKBOX = !0);
      t.a = x;
    },
    245: function (e, t, n) {
      "use strict";
      var a = n(262);
      t.a = a.a;
    },
    330: function (e, t, n) {
      "use strict";
      var a = n(6),
        c = n(88),
        r = n(2),
        i = n(89),
        o = n(96),
        l = n(87),
        u = n.n(l),
        s = n(122),
        d = n(123),
        b = r.forwardRef(function (e, t) {
          var n,
            a = e.prefixCls,
            l = void 0 === a ? "rc-switch" : a,
            b = e.className,
            f = e.checked,
            j = e.defaultChecked,
            p = e.disabled,
            O = e.loadingIcon,
            m = e.checkedChildren,
            h = e.unCheckedChildren,
            v = e.onClick,
            g = e.onChange,
            y = e.onKeyDown,
            k = Object(o.a)(e, [
              "prefixCls",
              "className",
              "checked",
              "defaultChecked",
              "disabled",
              "loadingIcon",
              "checkedChildren",
              "unCheckedChildren",
              "onClick",
              "onChange",
              "onKeyDown",
            ]),
            x = Object(s.a)(!1, { value: f, defaultValue: j }),
            C = Object(i.a)(x, 2),
            $ = C[0],
            w = C[1];
          function I(e, t) {
            var n = $;
            return p || (w((n = e)), null === g || void 0 === g || g(n, t)), n;
          }
          var S = u()(
            l,
            b,
            ((n = {}),
            Object(c.a)(n, "".concat(l, "-checked"), $),
            Object(c.a)(n, "".concat(l, "-disabled"), p),
            n)
          );
          return r.createElement(
            "button",
            Object.assign({}, k, {
              type: "button",
              role: "switch",
              "aria-checked": $,
              disabled: p,
              className: S,
              ref: t,
              onKeyDown: function (e) {
                e.which === d.a.LEFT
                  ? I(!1, e)
                  : e.which === d.a.RIGHT && I(!0, e),
                  null === y || void 0 === y || y(e);
              },
              onClick: function (e) {
                var t = I(!$, e);
                null === v || void 0 === v || v(t, e);
              },
            }),
            O,
            r.createElement(
              "span",
              { className: "".concat(l, "-inner") },
              $ ? m : h
            )
          );
        });
      b.displayName = "Switch";
      var f = b,
        j = n(137),
        p = n(208),
        O = n(187),
        m = n(116),
        h = n(99),
        v = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var c = 0;
            for (a = Object.getOwnPropertySymbols(e); c < a.length; c++)
              t.indexOf(a[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[c]) &&
                (n[a[c]] = e[a[c]]);
          }
          return n;
        },
        g = r.forwardRef(function (e, t) {
          var n,
            i = e.prefixCls,
            o = e.size,
            l = e.loading,
            s = e.className,
            d = void 0 === s ? "" : s,
            b = e.disabled,
            g = v(e, ["prefixCls", "size", "loading", "className", "disabled"]);
          Object(h.a)(
            "checked" in g || !("value" in g),
            "Switch",
            "`value` is not a valid prop, do you mean `checked`?"
          );
          var y = r.useContext(O.b),
            k = y.getPrefixCls,
            x = y.direction,
            C = r.useContext(m.b),
            $ = k("switch", i),
            w = r.createElement(
              "div",
              { className: "".concat($, "-handle") },
              l &&
                r.createElement(j.a, {
                  className: "".concat($, "-loading-icon"),
                })
            ),
            I = u()(
              ((n = {}),
              Object(c.a)(n, "".concat($, "-small"), "small" === (o || C)),
              Object(c.a)(n, "".concat($, "-loading"), l),
              Object(c.a)(n, "".concat($, "-rtl"), "rtl" === x),
              n),
              d
            );
          return r.createElement(
            p.a,
            { insertExtraNode: !0 },
            r.createElement(
              f,
              Object(a.a)({}, g, {
                prefixCls: $,
                className: I,
                disabled: b || l,
                ref: t,
                loadingIcon: w,
              })
            )
          );
        });
      (g.__ANT_SWITCH = !0), (g.displayName = "Switch");
      t.a = g;
    },
    537: function (e, t, n) {
      "use strict";
      n.r(t);
      var a,
        c = n(90),
        r = n(92),
        i = n(115),
        o = n(89),
        l = n(113),
        u = n.n(l),
        s = n(2),
        d = n(198),
        b = n(4),
        f = n(541),
        j = n(137),
        p = n(184),
        O = n.n(p),
        m = n(126),
        h = n(94),
        v = n(101).a.div(
          a ||
            (a = Object(h.a)([
              "\n  & .link-checkbox {\n    margin: 20px;\n    margin-left: 40px;\n  }\n\n  & .upload-list-inline {\n    width: 200px;\n    margin-right: 8px;\n  }\n\n  & .ant-upload-list-picture-container {\n    width: 300px;\n  }\n  & .ant-upload-list-item-info {\n    width: 300px;\n  }\n",
            ]))
        ),
        g = n(254),
        y = n(526),
        k = n(474),
        x = n(330),
        C = n(245),
        $ = n(216),
        w = n(219),
        I = n(521),
        S = n(114),
        N = n(104),
        E = n(45),
        A = n(132),
        B = n(172),
        P = n(171),
        F = n(144),
        R = n(11),
        D = { wrapperCol: { span: 16 } };
      t.default = function () {
        var e = Object(b.g)(),
          t = Object(b.h)().search,
          n = O.a.parse(t),
          a = n.category,
          l = n.param,
          p = n.subparam,
          h = Object(m.a)(""),
          K = Object(o.a)(h, 3),
          L = K[0],
          M = K[1],
          U = K[2],
          _ = Object(m.a)(""),
          q = Object(o.a)(_, 3),
          T = q[0],
          V = q[1],
          W = q[2],
          Y = Object(s.useState)(""),
          z = Object(o.a)(Y, 2),
          G = z[0],
          H = z[1],
          J = Object(m.a)(""),
          X = Object(o.a)(J, 3),
          Z = X[0],
          Q = X[1],
          ee = X[2],
          te = Object(s.useState)(!1),
          ne = Object(o.a)(te, 2),
          ae = ne[0],
          ce = ne[1],
          re = Object(s.useState)(),
          ie = Object(o.a)(re, 2),
          oe = ie[0],
          le = ie[1],
          ue = Object(s.useState)(),
          se = Object(o.a)(ue, 2),
          de = se[0],
          be = se[1],
          fe = Object(s.useState)([]),
          je = Object(o.a)(fe, 2),
          pe = je[0],
          Oe = je[1],
          me = Object(s.useState)(!1),
          he = Object(o.a)(me, 2),
          ve = he[0],
          ge = he[1],
          ye = Object(s.useState)(!1),
          ke = Object(o.a)(ye, 2),
          xe = ke[0],
          Ce = ke[1],
          $e = Object(s.useState)(!1),
          we = Object(o.a)($e, 2),
          Ie = we[0],
          Se = we[1],
          Ne = Object(s.useState)(!0),
          Ee = Object(o.a)(Ne, 2),
          Ae = Ee[0],
          Be = Ee[1],
          Pe = Object(s.useState)(!1),
          Fe = Object(o.a)(Pe, 2),
          Re = Fe[0],
          De = Fe[1],
          Ke = Object(s.useState)(!0),
          Le = Object(o.a)(Ke, 2),
          Me = Le[0],
          Ue = Le[1],
          _e = Object(s.useState)(0),
          qe = Object(o.a)(_e, 2),
          Te = qe[0],
          Ve = qe[1],
          We = Object(s.useState)(),
          Ye = Object(o.a)(We, 2),
          ze = Ye[0],
          Ge = Ye[1],
          He = Object(s.useState)(!0),
          Je = Object(o.a)(He, 2),
          Xe = Je[0],
          Ze = Je[1];
        Object(s.useEffect)(
          function () {
            Se(Object(A.c)(p)),
              ge(Object(A.d)(p)),
              Ce(Object(A.b)(p)),
              Be(Object(A.a)(p)),
              De(Object(A.f)(p));
          },
          [p]
        );
        var Qe = Object(d.a)(N.a, {
            onCompleted: function (t) {
              var n = t.createBoard,
                a = n.ok,
                c = n.err;
              console.log(a, c),
                a
                  ? (U(""),
                    H(""),
                    ee(""),
                    le(""),
                    W(""),
                    E.b.success(
                      "\uac8c\uc2dc\ubb3c\uc744 \uc0dd\uc131 \ud558\uc600\uc2b5\ub2c8\ub2e4"
                    ),
                    e.push({
                      pathname: "/admin/".concat(l, "/").concat(p),
                      state: { refresh: !0 },
                    }))
                  : (console.log(c),
                    E.b.error(
                      "\uac8c\uc2dc\ubb3c\uc744 \uc0dd\uc131 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                    ));
            },
          }),
          et = Object(o.a)(Qe, 2),
          tt = et[0],
          nt = et[1].loading,
          at = Object(s.useCallback)(
            function () {
              ce(!ae), ae || ee("");
            },
            [ae, ee, ce]
          ),
          ct = Object(s.useCallback)(
            Object(i.a)(
              u.a.mark(function e() {
                return u.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (0 === pe.length) {
                          e.next = 5;
                          break;
                        }
                        return (
                          (e.next = 3),
                          tt({
                            variables: {
                              title: L.trim() ? L : "\uc81c\ubaa9\uc5c6\uc74c",
                              content: G.trim() ? G : null,
                              link: Z.trim() ? Z : null,
                              category: a,
                              files: 0 !== pe.length ? pe : null,
                              images:
                                null !== oe && void 0 !== oe && oe.trim()
                                  ? [{ url: oe, fileName: de }]
                                  : null,
                              private: !Me,
                              type:
                                null === ze || void 0 === ze ? void 0 : ze.type,
                              showAttach: !!Xe,
                              inputCreatedAt: T,
                            },
                          })
                        );
                      case 3:
                      case 8:
                        e.next = 12;
                        break;
                      case 5:
                        if (!oe) {
                          e.next = 10;
                          break;
                        }
                        return (
                          (e.next = 8),
                          tt({
                            variables: {
                              title: L.trim() ? L : "\uc81c\ubaa9\uc5c6\uc74c",
                              content: G.trim() ? G : null,
                              link: Z.trim() ? Z : null,
                              category: a,
                              files: null,
                              images:
                                null !== oe && void 0 !== oe && oe.trim()
                                  ? [{ url: oe, fileName: de }]
                                  : null,
                              private: !Me,
                              type:
                                null === ze || void 0 === ze ? void 0 : ze.type,
                              showAttach: !!Xe,
                              inputCreatedAt: T,
                            },
                          })
                        );
                      case 10:
                        return (
                          (e.next = 12),
                          tt({
                            variables: {
                              title: L.trim() ? L : "\uc81c\ubaa9\uc5c6\uc74c",
                              content: G.trim() ? G : null,
                              link: Z.trim() ? Z : null,
                              private: !Me,
                              category: a,
                              type:
                                null === ze || void 0 === ze ? void 0 : ze.type,
                              showAttach: !!Xe,
                              inputCreatedAt: T,
                            },
                          })
                        );
                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [L, G, Z, tt, a, pe, de, oe, Me, ze, Xe, T]
          ),
          rt = Object(s.useCallback)(
            function (e) {
              Ve(Te + 1);
              var t = e.name;
              be(e.name), Object(B.a)("images", e, a, t, le, Te, Ve);
            },
            [a, Te]
          ),
          it = Object(s.useCallback)(
            function (e) {
              Ve(Te + 1),
                S.a
                  .ref("/files/".concat(a, "/").concat(e.name))
                  .put(e)
                  .on(
                    "state_changed",
                    function (e) {},
                    function (e) {
                      return console.log(e);
                    },
                    function () {
                      S.a
                        .ref("/files/".concat(a, "/").concat(e.name))
                        .getDownloadURL()
                        .then(function (t) {
                          Oe(function (n) {
                            return [].concat(Object(r.a)(n), [
                              { url: t, fileName: e.name },
                            ]);
                          }),
                            E.b.success(
                              "\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                            ),
                            Ve(Te - 1);
                        });
                    }
                  );
            },
            [a, Te]
          ),
          ot = Object(s.useCallback)(
            function () {
              de && de.trim() && Object(P.a)("images", a, de, le);
            },
            [a, de]
          ),
          lt = Object(s.useCallback)(
            function (e) {
              S.a
                .ref("/files/".concat(a, "/").concat(e.name))
                .delete()
                .then(function () {
                  E.b.success(
                    "\uc5c5\ub85c\ub4dc \ub41c \ud30c\uc77c/\uc774\ubbf8\uc9c0\uac00 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                    Oe(
                      pe.filter(function (t) {
                        return t.fileName !== e.name;
                      })
                    );
                })
                .catch(function (e) {
                  return E.b.error(e);
                });
            },
            [a, pe]
          ),
          ut = Object(s.useMemo)(function () {
            return Object(R.jsxs)(g.a, {
              style: { width: 150 },
              children: [
                Object(R.jsx)(
                  g.a.Item,
                  {
                    children: Object(R.jsx)("div", {
                      onClick: function () {
                        return Ge({
                          type: "basic",
                          title: "SW\uae30\ucd08\uad50\uc721",
                        });
                      },
                      children: "SW\uae30\ucd08\uad50\uc721",
                    }),
                  },
                  "0"
                ),
                Object(R.jsx)(
                  g.a.Item,
                  {
                    children: Object(R.jsx)("div", {
                      onClick: function () {
                        return Ge({
                          type: "major",
                          title: "SW\uc804\uacf5\uad50\uc721",
                        });
                      },
                      children: "SW\uc804\uacf5\uad50\uc721",
                    }),
                  },
                  "1"
                ),
                Object(R.jsx)(
                  g.a.Item,
                  {
                    children: Object(R.jsx)("div", {
                      onClick: function () {
                        return Ge({
                          type: "convergence",
                          title: "SW\uc735\ud569\uad50\uc721",
                        });
                      },
                      children: "SW\uc735\ud569\uad50\uc721",
                    }),
                  },
                  "2"
                ),
              ],
            });
          }, []),
          st = Object(s.useMemo)(function () {
            return Object(R.jsxs)(g.a, {
              style: { width: 150 },
              children: [
                Object(R.jsx)(
                  g.a.Item,
                  {
                    children: Object(R.jsx)("div", {
                      onClick: function () {
                        return Ge({
                          type: "edu",
                          title: "\uc218\uc694\uc911\uc2ec",
                        });
                      },
                      children: "\uc218\uc694\uc911\uc2ec",
                    }),
                  },
                  "0"
                ),
                Object(R.jsx)(
                  g.a.Item,
                  {
                    children: Object(R.jsx)("div", {
                      onClick: function () {
                        return Ge({
                          type: "training",
                          title: "\uc120\ub3c4\uc790\uc591\uc131",
                        });
                      },
                      children: "\uc120\ub3c4\uc790\uc591\uc131",
                    }),
                  },
                  "1"
                ),
                Object(R.jsx)(
                  g.a.Item,
                  {
                    children: Object(R.jsx)("div", {
                      onClick: function () {
                        return Ge({
                          type: "share",
                          title: "\uac00\uce58\uacf5\uc720",
                        });
                      },
                      children: "\uac00\uce58\uacf5\uc720",
                    }),
                  },
                  "2"
                ),
              ],
            });
          }, []),
          dt = Object(s.useMemo)(function () {
            return Object(R.jsxs)(g.a, {
              style: { width: 150 },
              children: [
                Object(R.jsx)(
                  g.a.Item,
                  {
                    children: Object(R.jsx)("div", {
                      onClick: function () {
                        return Ge({
                          type: "network",
                          title: "\uae30\uad00 \ub124\ud2b8\uc6cc\ud06c",
                        });
                      },
                      children: "\uae30\uad00 \ub124\ud2b8\uc6cc\ud06c",
                    }),
                  },
                  "0"
                ),
                Object(R.jsx)(
                  g.a.Item,
                  {
                    children: Object(R.jsx)("div", {
                      onClick: function () {
                        return Ge({
                          type: "project",
                          title: "\uae30\uad00 \ud504\ub85c\uc81d\ud2b8",
                        });
                      },
                      children: "\uae30\uad00 \ud504\ub85c\uc81d\ud2b8",
                    }),
                  },
                  "1"
                ),
                Object(R.jsx)(
                  g.a.Item,
                  {
                    children: Object(R.jsx)("div", {
                      onClick: function () {
                        return Ge({
                          type: "internship",
                          title: "\uae30\uad00 \uc778\ud134\uc27d",
                        });
                      },
                      children: "\uae30\uad00 \uc778\ud134\uc27d",
                    }),
                  },
                  "2"
                ),
              ],
            });
          }, []),
          bt = Object(s.useCallback)(
            function (e) {
              switch (e) {
                case "coopnews":
                  return dt;
                case "valuenews":
                  return st;
                default:
                  return ut;
              }
            },
            [dt, st, ut]
          );
        return (
          Object(s.useEffect)(
            function () {
              Te < 0 && Ve(0);
            },
            [Te]
          ),
          Object(R.jsx)(v, {
            children: Object(R.jsxs)(
              y.a,
              Object(c.a)(
                Object(c.a)({}, D),
                {},
                {
                  name: "upload-board",
                  onFinish: ct,
                  children: [
                    Object(R.jsx)(y.a.Item, {
                      name: ["title"],
                      label: "\uc81c\ubaa9",
                      children: Object(R.jsx)(k.a, {
                        type: "text",
                        onChange: M,
                        value: L,
                      }),
                    }),
                    Object(R.jsx)(y.a.Item, {
                      name: ["create"],
                      label: "\uc0dd\uc131\ub0a0\uc9dc",
                      children: Object(R.jsx)(k.a, {
                        placeholder: "YYYY-MM-DD",
                        type: "text",
                        onChange: V,
                        value: T,
                        style: { width: 200 },
                      }),
                    }),
                    Object(R.jsxs)(y.a.Item, {
                      name: ["checked"],
                      label: "\uacf5\uac1c / \ube44\uacf5\uac1c",
                      children: [
                        Object(R.jsx)(x.a, {
                          defaultChecked: !0,
                          onChange: function () {
                            return Ue(!Me);
                          },
                        }),
                        Object(R.jsx)("span", {
                          style: { marginLeft: 15 },
                          children: Me ? "\uacf5\uac1c" : "\ube44\uacf5\uac1c",
                        }),
                      ],
                    }),
                    Re &&
                      Object(R.jsx)(y.a.Item, {
                        name: ["type"],
                        label: "\ub300\ubd84\ub958",
                        children: Object(R.jsx)(C.a, {
                          overlay: function () {
                            return bt(
                              null === p || void 0 === p
                                ? void 0
                                : p.toString().split("-")[1]
                            );
                          },
                          trigger: ["click"],
                          children: Object(R.jsxs)($.a, {
                            children: [
                              ze ? ze.title : "\uc120\ud0dd\ud558\uae30",
                              "\u2002\u2002\u2228",
                            ],
                          }),
                        }),
                      }),
                    ve &&
                      Object(R.jsxs)(R.Fragment, {
                        children: [
                          Object(R.jsx)("div", {
                            className: "link-checkbox",
                            children: Object(R.jsx)(w.a, {
                              onChange: at,
                              children: ae
                                ? "\ub9c1\ud06c\uc81c\uac70"
                                : "\ub9c1\ud06c\ucd94\uac00",
                            }),
                          }),
                          ae &&
                            Object(R.jsx)(y.a.Item, {
                              name: ["link"],
                              label: "\ub9c1\ud06c",
                              children: Object(R.jsx)(k.a, {
                                type: "text",
                                onChange: Q,
                                value: Z,
                              }),
                            }),
                        ],
                      }),
                    Ie &&
                      Object(R.jsx)(y.a.Item, {
                        name: ["image"],
                        label: "\uc774\ubbf8\uc9c0",
                        children: Object(R.jsx)(I.a, {
                          style: { marginBottom: 20 },
                          listType: "picture",
                          customRequest: function (e) {
                            var t = e.file;
                            return rt(t);
                          },
                          progress: { showInfo: !0 },
                          accept: "image/*",
                          onChange: function (e) {
                            var t = e.file;
                            t.status = "" !== oe ? "done" : "removed";
                          },
                          className: "upload-list-inline",
                          maxCount: 1,
                          onRemove: function () {
                            return ot();
                          },
                          children:
                            Te <= 0 &&
                            Object(R.jsx)($.a, {
                              icon: Object(R.jsx)(f.a, {}),
                              children: "Upload",
                            }),
                        }),
                      }),
                    xe &&
                      Object(R.jsx)(y.a.Item, {
                        name: ["file"],
                        label: "\ucca8\ubd80\ud30c\uc77c",
                        children: Object(R.jsx)(I.a, {
                          multiple: !0,
                          customRequest: function (e) {
                            var t = e.file;
                            return it(t);
                          },
                          maxCount: 4,
                          onChange: function (e) {
                            var t = e.file;
                            0 !== pe.length
                              ? (t.status = "done")
                              : (t.status = "removed");
                          },
                          onRemove: function (e) {
                            return lt(e);
                          },
                          children:
                            Te <= 0 &&
                            Object(R.jsx)($.a, {
                              style: { marginBottom: 20 },
                              icon: Object(R.jsx)(f.a, {}),
                              children: "Upload",
                            }),
                        }),
                      }),
                    Ae &&
                      Object(R.jsx)(y.a.Item, {
                        name: "content",
                        label: "\ub0b4\uc6a9",
                        style: { marginTop: 20 },
                        initialValue: "",
                        rules: [{ required: !0 }],
                        children: Object(R.jsx)(F.a, {
                          onChange: function (e) {
                            H(e);
                          },
                          content: G,
                        }),
                      }),
                    xe &&
                      Object(R.jsx)(y.a.Item, {
                        name: "showAttach",
                        label:
                          "\ucca8\ubd80\ud30c\uc77c \uacf5\uac1c\uc5ec\ubd80",
                        style: { marginTop: 20 },
                        initialValue: "",
                        children: Object(R.jsx)(x.a, {
                          defaultChecked: !0,
                          onChange: function () {
                            return Ze(!Xe);
                          },
                        }),
                      }),
                    Object(R.jsx)(y.a.Item, {
                      wrapperCol: Object(c.a)(
                        Object(c.a)({}, D.wrapperCol),
                        {},
                        { offset: 8 }
                      ),
                      name: "Upload",
                      children: Object(R.jsx)($.a, {
                        type: "primary",
                        htmlType: "submit",
                        disabled: 0 !== Te,
                        children: nt
                          ? "Uploading..."
                          : Te <= 0
                          ? "\uc62c\ub9ac\uae30"
                          : Object(R.jsxs)(R.Fragment, {
                              children: [
                                Object(R.jsx)(j.a, {}),
                                " \uc774\ubbf8\uc9c0 / \ud30c\uc77c \uc5c5\ub85c\ub4dc \uc911\uc785\ub2c8\ub2e4...",
                              ],
                            }),
                      }),
                    }),
                  ],
                }
              )
            ),
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=16.95764fb3.chunk.js.map
