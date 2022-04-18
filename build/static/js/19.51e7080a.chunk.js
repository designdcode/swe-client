(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [19],
  {
    104: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return v;
      }),
        t.d(e, "k", function () {
          return k;
        }),
        t.d(e, "e", function () {
          return w;
        }),
        t.d(e, "i", function () {
          return $;
        }),
        t.d(e, "f", function () {
          return C;
        }),
        t.d(e, "g", function () {
          return I;
        }),
        t.d(e, "b", function () {
          return S;
        }),
        t.d(e, "c", function () {
          return N;
        }),
        t.d(e, "j", function () {
          return E;
        }),
        t.d(e, "d", function () {
          return B;
        }),
        t.d(e, "h", function () {
          return z;
        });
      var i,
        a,
        o,
        c,
        r,
        l,
        d,
        s,
        u,
        p,
        b,
        f,
        h,
        j,
        m,
        g,
        x,
        O = t(94),
        y = t(528),
        v = Object(y.a)(
          i ||
            (i = Object(O.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        k = Object(y.a)(
          a ||
            (a = Object(O.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        inputCreatedAt\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        w = Object(y.a)(
          o ||
            (o = Object(O.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        $ = Object(y.a)(
          c ||
            (c = Object(O.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        C =
          (Object(y.a)(
            r ||
              (r = Object(O.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            l ||
              (l = Object(O.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            d ||
              (d = Object(O.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        I = Object(y.a)(
          s ||
            (s = Object(O.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S = Object(y.a)(
          u ||
            (u = Object(O.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N = Object(y.a)(
          p ||
            (p = Object(O.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        E =
          (Object(y.a)(
            b ||
              (b = Object(O.a)([
                "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            f ||
              (f = Object(O.a)([
                "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            h ||
              (h = Object(O.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            j ||
              (j = Object(O.a)([
                "\n  mutation editPopup($up: String!, $url: String, $link: String) {\n    editPopup(up: $up, url: $url, link: $link) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        B = Object(y.a)(
          m ||
            (m = Object(O.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        z =
          (Object(y.a)(
            g ||
              (g = Object(O.a)([
                "\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            x ||
              (x = Object(O.a)([
                "\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ));
    },
    114: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return a;
      });
      var i = t(133);
      t(189);
      i.a.initializeApp({
        apiKey: "AIzaSyDM5Cqu1m1YJ7E44OfM9Yo3LH0ZUN8Y6x4",
        authDomain: "sunmoon-swe.firebaseapp.com",
        projectId: "sunmoon-swe",
        storageBucket: "sunmoon-swe.appspot.com",
        messagingSenderId: "1064857281018",
        appId: "1:1064857281018:web:b2881ce151e1a16b068443",
        measurementId: "G-JYK8JT1WEN",
      });
      var a = i.a.storage();
    },
    125: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return o;
      });
      var i = t(89),
        a = t(2),
        o = function () {
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
            o = Object(i.a)(t, 2),
            c = o[0],
            r = o[1];
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
            c
          );
        };
    },
    140: function (n, e, t) {
      "use strict";
      var i = t(6),
        a = t(88),
        o = t(96),
        c = t(90),
        r = t(97),
        l = t(98),
        d = t(102),
        s = t(103),
        u = t(2),
        p = t.n(u),
        b = t(87),
        f = t.n(b),
        h = (function (n) {
          Object(d.a)(t, n);
          var e = Object(s.a)(t);
          function t(n) {
            var i;
            Object(r.a)(this, t),
              ((i = e.call(this, n)).handleChange = function (n) {
                var e = i.props,
                  t = e.disabled,
                  a = e.onChange;
                t ||
                  ("checked" in i.props ||
                    i.setState({ checked: n.target.checked }),
                  a &&
                    a({
                      target: Object(c.a)(
                        Object(c.a)({}, i.props),
                        {},
                        { checked: n.target.checked }
                      ),
                      stopPropagation: function () {
                        n.stopPropagation();
                      },
                      preventDefault: function () {
                        n.preventDefault();
                      },
                      nativeEvent: n.nativeEvent,
                    }));
              }),
              (i.saveInput = function (n) {
                i.input = n;
              });
            var a = "checked" in n ? n.checked : n.defaultChecked;
            return (i.state = { checked: a }), i;
          }
          return (
            Object(l.a)(
              t,
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
                    var n,
                      e = this.props,
                      t = e.prefixCls,
                      c = e.className,
                      r = e.style,
                      l = e.name,
                      d = e.id,
                      s = e.type,
                      u = e.disabled,
                      b = e.readOnly,
                      h = e.tabIndex,
                      j = e.onClick,
                      m = e.onFocus,
                      g = e.onBlur,
                      x = e.onKeyDown,
                      O = e.onKeyPress,
                      y = e.onKeyUp,
                      v = e.autoFocus,
                      k = e.value,
                      w = e.required,
                      $ = Object(o.a)(e, [
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
                      C = Object.keys($).reduce(function (n, e) {
                        return (
                          ("aria-" !== e.substr(0, 5) &&
                            "data-" !== e.substr(0, 5) &&
                            "role" !== e) ||
                            (n[e] = $[e]),
                          n
                        );
                      }, {}),
                      I = this.state.checked,
                      S = f()(
                        t,
                        c,
                        ((n = {}),
                        Object(a.a)(n, "".concat(t, "-checked"), I),
                        Object(a.a)(n, "".concat(t, "-disabled"), u),
                        n)
                      );
                    return p.a.createElement(
                      "span",
                      { className: S, style: r },
                      p.a.createElement(
                        "input",
                        Object(i.a)(
                          {
                            name: l,
                            id: d,
                            type: s,
                            required: w,
                            readOnly: b,
                            disabled: u,
                            tabIndex: h,
                            className: "".concat(t, "-input"),
                            checked: !!I,
                            onClick: j,
                            onFocus: m,
                            onBlur: g,
                            onKeyUp: y,
                            onKeyDown: x,
                            onKeyPress: O,
                            onChange: this.handleChange,
                            autoFocus: v,
                            ref: this.saveInput,
                            value: k,
                          },
                          C
                        )
                      ),
                      p.a.createElement("span", {
                        className: "".concat(t, "-inner"),
                      })
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (n, e) {
                    return "checked" in n
                      ? Object(c.a)(
                          Object(c.a)({}, e),
                          {},
                          { checked: n.checked }
                        )
                      : null;
                  },
                },
              ]
            ),
            t
          );
        })(u.Component);
      (h.defaultProps = {
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
        (e.a = h);
    },
    144: function (n, e, t) {
      "use strict";
      var i,
        a = t(94),
        o = t(2),
        c = t(101),
        r = t(211),
        l = t.n(r),
        d = (t(214), t(11));
      e.a = function (n) {
        n.content;
        var e = n.onChange,
          t = Object(o.useRef)(),
          i = Object(o.useCallback)(function (n) {
            t.current = n;
          }, []),
          a = Object(o.useCallback)(function (n) {
            if (n && n.imageInfo) {
              var e = n.imageInfo.split("base64,");
              console.log(e);
            }
          }, []);
        return Object(d.jsx)(s, {
          getSunEditorInstance: i,
          onChange: e,
          onImageUpload: a,
          setOptions: {
            minHeight: "400px",
            buttonList: [
              ["fontSize", "bold", "underline", "italic", "fontColor", "list"],
            ],
          },
        });
      };
      var s = Object(c.a)(l.a)(
        i ||
          (i = Object(a.a)([
            "\n  background-color: white;\n  min-height: 300px;\n  & .ql-container {\n    min-height: 300px;\n  }\n  & .ql-editor {\n    min-height: 300px;\n  }\n",
          ]))
      );
    },
    212: function (n, e, t) {
      var i = {
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
      function a(n) {
        var e = o(n);
        return t(e);
      }
      function o(n) {
        if (!t.o(i, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return i[n];
      }
      (a.keys = function () {
        return Object.keys(i);
      }),
        (a.resolve = o),
        (n.exports = a),
        (a.id = 212);
    },
    253: function (n, e, t) {
      "use strict";
      var i = t(88),
        a = t(6),
        o = t(2),
        c = t(140),
        r = t(87),
        l = t.n(r),
        d = t(117),
        s = t(187),
        u = o.createContext(null),
        p = u.Provider,
        b = u,
        f = t(99),
        h = function (n, e) {
          var t = {};
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) &&
              e.indexOf(i) < 0 &&
              (t[i] = n[i]);
          if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (i = Object.getOwnPropertySymbols(n); a < i.length; a++)
              e.indexOf(i[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(n, i[a]) &&
                (t[i[a]] = n[i[a]]);
          }
          return t;
        },
        j = function (n, e) {
          var t,
            r = o.useContext(b),
            u = o.useContext(s.b),
            p = u.getPrefixCls,
            j = u.direction,
            m = o.useRef(),
            g = Object(d.a)(e, m);
          o.useEffect(function () {
            Object(f.a)(
              !("optionType" in n),
              "Radio",
              "`optionType` is only support in Radio.Group."
            );
          }, []);
          var x = n.prefixCls,
            O = n.className,
            y = n.children,
            v = n.style,
            k = h(n, ["prefixCls", "className", "children", "style"]),
            w = p("radio", x),
            $ = Object(a.a)({}, k);
          r &&
            (($.name = r.name),
            ($.onChange = function (e) {
              var t, i;
              null === (t = n.onChange) || void 0 === t || t.call(n, e),
                null ===
                  (i = null === r || void 0 === r ? void 0 : r.onChange) ||
                  void 0 === i ||
                  i.call(r, e);
            }),
            ($.checked = n.value === r.value),
            ($.disabled = n.disabled || r.disabled));
          var C = l()(
            "".concat(w, "-wrapper"),
            ((t = {}),
            Object(i.a)(t, "".concat(w, "-wrapper-checked"), $.checked),
            Object(i.a)(t, "".concat(w, "-wrapper-disabled"), $.disabled),
            Object(i.a)(t, "".concat(w, "-wrapper-rtl"), "rtl" === j),
            t),
            O
          );
          return o.createElement(
            "label",
            {
              className: C,
              style: v,
              onMouseEnter: n.onMouseEnter,
              onMouseLeave: n.onMouseLeave,
            },
            o.createElement(
              c.a,
              Object(a.a)({}, $, { type: "radio", prefixCls: w, ref: g })
            ),
            void 0 !== y ? o.createElement("span", null, y) : null
          );
        },
        m = o.forwardRef(j);
      m.displayName = "Radio";
      var g = m,
        x = t(89),
        O = t(122),
        y = t(116);
      var v = o.forwardRef(function (n, e) {
          var t = o.useContext(s.b),
            c = t.getPrefixCls,
            r = t.direction,
            d = o.useContext(y.b),
            u = Object(O.a)(n.defaultValue, { value: n.value }),
            b = Object(x.a)(u, 2),
            f = b[0],
            h = b[1];
          return o.createElement(
            p,
            {
              value: {
                onChange: function (e) {
                  var t = f,
                    i = e.target.value;
                  "value" in n || h(i);
                  var a = n.onChange;
                  a && i !== t && a(e);
                },
                value: f,
                disabled: n.disabled,
                name: n.name,
              },
            },
            (function () {
              var t,
                s = n.prefixCls,
                u = n.className,
                p = void 0 === u ? "" : u,
                b = n.options,
                h = n.optionType,
                j = n.buttonStyle,
                m = void 0 === j ? "outline" : j,
                x = n.disabled,
                O = n.children,
                y = n.size,
                v = n.style,
                k = n.id,
                w = n.onMouseEnter,
                $ = n.onMouseLeave,
                C = c("radio", s),
                I = "".concat(C, "-group"),
                S = O;
              if (b && b.length > 0) {
                var N = "button" === h ? "".concat(C, "-button") : C;
                S = b.map(function (n) {
                  return "string" === typeof n
                    ? o.createElement(
                        g,
                        {
                          key: n,
                          prefixCls: N,
                          disabled: x,
                          value: n,
                          checked: f === n,
                        },
                        n
                      )
                    : o.createElement(
                        g,
                        {
                          key: "radio-group-value-options-".concat(n.value),
                          prefixCls: N,
                          disabled: n.disabled || x,
                          value: n.value,
                          checked: f === n.value,
                          style: n.style,
                        },
                        n.label
                      );
                });
              }
              var E = y || d,
                B = l()(
                  I,
                  "".concat(I, "-").concat(m),
                  ((t = {}),
                  Object(i.a)(t, "".concat(I, "-").concat(E), E),
                  Object(i.a)(t, "".concat(I, "-rtl"), "rtl" === r),
                  t),
                  p
                );
              return o.createElement(
                "div",
                Object(a.a)(
                  {},
                  (function (n) {
                    return Object.keys(n).reduce(function (e, t) {
                      return (
                        ("data-" !== t.substr(0, 5) &&
                          "aria-" !== t.substr(0, 5) &&
                          "role" !== t) ||
                          "data-__" === t.substr(0, 7) ||
                          (e[t] = n[t]),
                        e
                      );
                    }, {});
                  })(n),
                  {
                    className: B,
                    style: v,
                    onMouseEnter: w,
                    onMouseLeave: $,
                    id: k,
                    ref: e,
                  }
                ),
                S
              );
            })()
          );
        }),
        k = o.memo(v),
        w = function (n, e) {
          var t = {};
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) &&
              e.indexOf(i) < 0 &&
              (t[i] = n[i]);
          if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (i = Object.getOwnPropertySymbols(n); a < i.length; a++)
              e.indexOf(i[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(n, i[a]) &&
                (t[i[a]] = n[i[a]]);
          }
          return t;
        },
        $ = function (n, e) {
          var t = o.useContext(b),
            i = o.useContext(s.b).getPrefixCls,
            c = n.prefixCls,
            r = w(n, ["prefixCls"]),
            l = i("radio-button", c);
          return (
            t &&
              ((r.checked = n.value === t.value),
              (r.disabled = n.disabled || t.disabled)),
            o.createElement(
              g,
              Object(a.a)({ prefixCls: l }, r, { type: "radio", ref: e })
            )
          );
        },
        C = o.forwardRef($),
        I = g;
      (I.Button = C), (I.Group = k);
      e.a = I;
    },
    516: function (n, e, t) {
      "use strict";
      t.r(e);
      var i,
        a,
        o,
        c,
        r,
        l,
        d,
        s,
        u,
        p,
        b,
        f = t(94),
        h = t(115),
        j = t(92),
        m = t(89),
        g = t(113),
        x = t.n(g),
        O = t(2),
        y = t(4),
        v = t(45),
        k = t(101),
        w = t(119),
        $ = t(177),
        C = t(125),
        I = t(46),
        S = t(474),
        N = t(253),
        E = t(521),
        B = t(216),
        z = t(126),
        A = t(198),
        P = t(104),
        R = t(114),
        L = t(541),
        F = t(144),
        K = t(11);
      e.default = function () {
        var n = Object(C.a)(),
          e = Object(y.i)(),
          t = e.param,
          i = e.subparam,
          a = localStorage.getItem("stno"),
          o = Object(y.g)(),
          c = Object(z.a)(""),
          r = Object(m.a)(c, 3),
          l = r[0],
          d = r[1],
          s = r[2],
          u = Object(O.useState)(""),
          p = Object(m.a)(u, 2),
          b = p[0],
          f = p[1],
          g = Object(O.useState)(!1),
          k = Object(m.a)(g, 2),
          w = k[0],
          I = k[1],
          V = Object(O.useState)([]),
          Z = Object(m.a)(V, 2),
          Q = Z[0],
          X = Z[1],
          nn = Object(O.useState)(!1),
          en = Object(m.a)(nn, 2),
          tn = en[0],
          an = en[1],
          on = Object(A.a)(P.a, {
            onCompleted: function (n) {
              var e = n.createBoard,
                a = e.ok,
                c = e.err;
              a
                ? (v.b.success(
                    "\uac8c\uc2dc\ubb3c\uc774 \ub4f1\ub85d \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  o.push("/main/board/".concat(t, "/").concat(i), {
                    refetch: !0,
                  }))
                : (v.b.error(
                    "\uac8c\uc2dc\ubb3c \ub4f1\ub85d\uc5d0 \uc2e4\ud328 \ud558\uc600\uc2b5\ub2c8\ub2e4"
                  ),
                  console.log(c));
            },
          }),
          cn = Object(m.a)(on, 1)[0],
          rn = Object(O.useCallback)(
            function (n) {
              R.a
                .ref("/files/request/".concat(a || "empty", "/").concat(n.name))
                .put(n)
                .on(
                  "state_changed",
                  function (n) {},
                  function (n) {
                    return console.log(n);
                  },
                  function () {
                    R.a
                      .ref(
                        "/files/request/"
                          .concat(a || "empty", "/")
                          .concat(n.name)
                      )
                      .getDownloadURL()
                      .then(function (e) {
                        X(function (t) {
                          return [].concat(Object(j.a)(t), [
                            { url: e, fileName: n.name },
                          ]);
                        }),
                          v.b.success(
                            "\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                          );
                      });
                  }
                ),
                an(!1);
            },
            [a]
          ),
          ln = Object(O.useCallback)(
            Object(h.a)(
              x.a.mark(function n() {
                return x.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2),
                          cn({
                            variables: {
                              title: l,
                              content: b,
                              category: i,
                              private: w,
                              writer: a,
                              files: 0 !== Q.length ? Q : null,
                            },
                          })
                        );
                      case 2:
                        s("");
                      case 3:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            ),
            [cn, l, b, i, w, a, Q, s]
          );
        Object(O.useEffect)(
          function () {
            a ||
              (v.b.error(
                "\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9 \uac00\ub2a5 \ud569\ub2c8\ub2e4"
              ),
              o.push("/main/board/".concat(t, "/").concat(i)));
          },
          [a, t, i, o]
        );
        var dn = Object(O.useCallback)(
          function (n) {
            R.a
              .ref("/files/request/".concat(a || "empty", "/").concat(n.name))
              .delete()
              .then(function () {
                v.b.success(
                  "\uc5c5\ub85c\ub4dc \ub41c \ud30c\uc77c/\uc774\ubbf8\uc9c0\uac00 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                ),
                  X(
                    Q.filter(function (e) {
                      return e.fileName !== n.name;
                    })
                  );
              })
              .catch(function (n) {
                return v.b.error(n);
              });
          },
          [a, Q]
        );
        return Object(K.jsxs)(M, {
          children: [
            Object(K.jsxs)(q, {
              children: [
                Object(K.jsx)(D, {
                  margin: n.width > 1500 ? "25%" : "15%",
                  children: $.a.map(function (n, e) {
                    return n.title === t.split("-")[0]
                      ? Object(K.jsxs)(
                          "div",
                          {
                            children: [
                              Object(K.jsx)("span", {
                                className: "cover-main-title",
                                children: n.ko_title,
                              }),
                              Object(K.jsx)("span", {
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
                Object(K.jsx)(U, {
                  isBigger: "major" === t || "basic" === t,
                  margin: "5%",
                  children: Object(K.jsx)("div", {
                    className: "submenu-content",
                    children: $.a.map(function (n, e) {
                      return n.title === t
                        ? n.subMenu.map(function (n, e) {
                            var a = n.key === i ? 0 : 1;
                            return Object(K.jsxs)(
                              J,
                              {
                                className: "submenu-col",
                                first: a,
                                children: [
                                  Object(K.jsx)(T, { first: a }),
                                  Object(K.jsx)(_, {
                                    to: "/main/board/"
                                      .concat(t, "/")
                                      .concat(n.key),
                                    first: a,
                                    children: Object(K.jsx)("span", {
                                      style: { fontWeight: 600 },
                                      children: n.ko_title,
                                    }),
                                  }),
                                ],
                              },
                              "".concat(e, "key")
                            );
                          })
                        : null;
                    }),
                  }),
                }),
                Object(K.jsx)("img", {
                  src: "/img/detailBG.jpeg",
                  alt: "cover",
                }),
              ],
            }),
            Object(K.jsxs)(G, {
              children: [
                Object(K.jsx)("div", {
                  className: "head",
                  children: Object(K.jsx)("div", {
                    className: "head-title",
                    children:
                      "request" === i.split("-")[1]
                        ? "\uac74\uc758\uc0ac\ud56d"
                        : "\ud5ec\ud504\ub370\uc2a4\ud06c",
                  }),
                }),
                Object(K.jsxs)(W, {
                  children: [
                    Object(K.jsx)("div", {
                      className: "content-head",
                      children: Object(K.jsx)("div", {
                        className: "content-head-title",
                        children: "\ubb38\uc758\ud558\uae30",
                      }),
                    }),
                    Object(K.jsxs)(Y, {
                      children: [
                        Object(K.jsxs)("div", {
                          className: "input-box",
                          children: [
                            Object(K.jsx)(S.a, {
                              className: "title-input",
                              placeholder:
                                "\uc81c\ubaa9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694",
                              value: l,
                              onChange: d,
                            }),
                            Object(K.jsx)(N.a, {
                              className: "title-radio",
                              checked: w,
                              onClick: function () {
                                return I(!w);
                              },
                              children: "\ube44\ubc00\uae00 \uc124\uc815",
                            }),
                          ],
                        }),
                        Object(K.jsx)(F.a, {
                          onChange: function (n) {
                            f(n);
                          },
                          content: b,
                        }),
                        Object(K.jsx)("div", {
                          className: "content-upload",
                          children: Object(K.jsx)(E.a, {
                            multiple: !0,
                            customRequest: function (n) {
                              var e = n.file;
                              an(!0), rn(e);
                            },
                            maxCount: 4,
                            onChange: function (n) {
                              var e = n.file;
                              0 !== Q.length
                                ? (e.status = "done")
                                : (e.status = "removed");
                            },
                            onRemove: function (n) {
                              return dn(n);
                            },
                            children: Object(K.jsx)(B.a, {
                              disabled: !!tn,
                              style: { marginBottom: 20 },
                              icon: Object(K.jsx)(L.a, {}),
                              children:
                                "\ucca8\ubd80\ud30c\uc77c \uc5c5\ub85c\ub4dc",
                            }),
                          }),
                        }),
                      ],
                    }),
                    Object(K.jsxs)(H, {
                      children: [
                        Object(K.jsx)(B.a, {
                          className: "button-cancel",
                          onClick: function () {
                            return o.push(
                              "/main/board/".concat(t, "/").concat(i)
                            );
                          },
                          children: "\ucde8\uc18c",
                        }),
                        Object(K.jsx)(B.a, {
                          className: "button-submit",
                          onClick: ln,
                          children: tn
                            ? "\uc5c5\ub85c\ub4dc \uc911\uc785\ub2c8\ub2e4..."
                            : "\ub4f1\ub85d",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var M = k.a.div(
          i ||
            (i = Object(f.a)([
              "\n  ",
              " {\n    max-width: 412px;\n  }\n  ",
              " {\n    margin: 0 auto;\n    padding-top: 15px;\n    min-height: 100vh;\n    min-width: 800px;\n    max-width: 1920px;\n  }\n",
            ])),
          Object(w.d)(w.b),
          Object(w.d)(w.a)
        ),
        q = k.a.div(
          a ||
            (a = Object(f.a)([
              "\n  ",
              " {\n    width: 100%;\n    height: 120px;\n    & img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n  ",
              " {\n    width: 100%;\n    min-width: 1280px;\n    height: 350px;\n    margin: 0 auto;\n    position: relative;\n    & img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n",
            ])),
          Object(w.d)(w.b),
          Object(w.d)(w.a)
        ),
        D = k.a.div(
          o ||
            (o = Object(f.a)([
              "\n  ",
              " {\n    position: absolute;\n    top: 10%;\n    left: 5%;\n    & .cover-main-title {\n      font-size: 20px;\n      font-weight: 500px;\n      color: white;\n      display: block;\n    }\n    & .cover-description {\n      display: block;\n      font-size: 10px;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n    }\n  }\n  ",
              " {\n    position: absolute;\n    font-size: 20px;\n    margin-left: ",
              ";\n    margin-top: 50px;\n    & .cover-main-title {\n      font-size: 40px;\n      font-weight: 500;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n      text-shadow: 3px 3px 3px #000000e3;\n      display: block;\n    }\n\n    & .cover-description {\n      display: block;\n      font-size: 20px;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n      text-shadow: 3px 3px 3px #000000e3;\n    }\n  }\n",
            ])),
          Object(w.d)(w.b),
          Object(w.d)(w.a),
          function (n) {
            return n.margin;
          }
        ),
        U = k.a.div(
          c ||
            (c = Object(f.a)([
              "\n  ",
              " {\n    display: none;\n  }\n  ",
              " {\n    width: 100%;\n    background-color: #e5e2e2b8;\n    position: absolute;\n    bottom: 0;\n    font-size: 15px;\n    & .submenu-content {\n      max-width: 1200px;\n      min-width: 800px;\n      min-height: 50px;\n      height: ",
              ";\n      margin: 0 auto;\n      display: flex;\n      align-items: center;\n      flex-wrap: wrap;\n      padding-left: ",
              ";\n    }\n    & .submenu-col {\n      width: 16%;\n      height: 50px;\n      display: flex;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n",
            ])),
          Object(w.d)(w.b),
          Object(w.d)(w.a),
          function (n) {
            return n.isBigger ? "100px" : "50px";
          },
          function (n) {
            return n.margin;
          }
        ),
        _ = Object(k.a)(I.b)(
          r ||
            (r = Object(f.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2px 5px;\n    font-size: 13px;\n    color: ",
              ";\n    &:hover {\n      color: white;\n    }\n  }\n",
            ])),
          Object(w.d)(w.b),
          Object(w.d)(w.a),
          function (n) {
            return 0 === n.first ? "white" : "black";
          }
        ),
        J = k.a.div(
          l ||
            (l = Object(f.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    background-color: ",
              ";\n    color: ",
              ";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    &:hover {\n      background-color: #0c1b58;\n      transition: 0.2s linear;\n      color: white;\n    }\n  }\n",
            ])),
          Object(w.d)(w.b),
          Object(w.d)(w.a),
          function (n) {
            return 0 === n.first ? "#0c1b58" : "";
          },
          function (n) {
            return 0 === n.first ? "white" : "black";
          }
        ),
        T = k.a.div(
          d ||
            (d = Object(f.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    width: 50%;\n    height: 2px;\n    border-top: ",
              ";\n  }\n",
            ])),
          Object(w.d)(w.b),
          Object(w.d)(w.a),
          function (n) {
            return 0 === n.first ? "2px solid white" : "";
          }
        ),
        G = k.a.div(
          s ||
            (s = Object(f.a)([
              "\n  ",
              " {\n    max-width: 412px;\n    & .head {\n      height: 80px;\n      width: 100%;\n      display: flex;\n      align-items: center;\n    }\n    & .head-title {\n      font-size: 20px;\n      font-weight: 500;\n      color: #0c1b58;\n    }\n\n    & .head-logo {\n      display: none;\n    }\n  }\n  ",
              " {\n    max-width: 1280px;\n    min-width: 1000px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    margin: 0 auto;\n    & .head {\n      min-height: 150px;\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    & .head-title {\n      font-size: 35px;\n      font-weight: 500;\n      color: #0c1b58;\n      text-align: center;\n      width: 300px;\n    }\n\n    & .head-logo {\n      img {\n        height: 130px;\n        width: 130px;\n      }\n    }\n  }\n",
            ])),
          Object(w.d)(w.b),
          Object(w.d)(w.a)
        ),
        W = k.a.div(
          u ||
            (u = Object(f.a)([
              "\n  ",
              " {\n    width: 100%;\n    & .content-head {\n      width: 100%;\n      border-top: 2px solid black;\n      border-bottom: 2px solid black;\n      padding: 20px 10px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      & .content-head-title {\n        font-size: 12px;\n        font-weight: 600;\n        display: flex;\n        align-items: center;\n      }\n\n      & .content-head-desc {\n        display: flex;\n        font-size: 10px;\n        color: #868686;\n\n        & .content-head-desc-date {\n          margin-right: 15px;\n        }\n      }\n    }\n  }\n  ",
              " {\n    min-width: 1000px;\n    max-width: 1280px;\n    min-height: 60vh;\n    border-top: 3px solid #0c1b58;\n    & .content-head {\n      min-height: 60px;\n      width: 100%;\n      padding: 30px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      & .content-head-title {\n        font-size: 24px;\n        font-weight: 600;\n        min-height: 35px;\n        display: flex;\n        align-items: center;\n        color: #0c1b58;\n      }\n      & .content-head-desc {\n        display: flex;\n        font-size: 20px;\n        color: #868686;\n        margin-top: 15px;\n        & .content-head-desc-date {\n          margin-right: 50px;\n        }\n      }\n    }\n  }\n",
            ])),
          Object(w.d)(w.b),
          Object(w.d)(w.a)
        ),
        Y = k.a.div(
          p ||
            (p = Object(f.a)([
              "\n  ",
              " {\n    padding: 20px;\n    width: 100%;\n    min-height: 30vh;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n    & .input-box {\n      display: flex;\n      align-items: center;\n      & .title-input {\n        padding: 8px 12px;\n        width: 220px;\n        margin-bottom: 25px;\n      }\n      & .title-radio {\n        font-size: 8px;\n        height: 50px;\n        margin-left: 30px;\n        width: 100px;\n      }\n    }\n    & .content-upload {\n      display: none;\n    }\n  }\n  ",
              " {\n    padding: 30px;\n    width: 100%;\n    min-height: 30vh;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 50px;\n    & .input-box {\n      display: flex;\n      align-items: center;\n      & .title-input {\n        padding: 8px 12px;\n        width: 800px;\n        margin-bottom: 25px;\n      }\n      & .title-radio {\n        height: 50px;\n        margin-left: 30px;\n      }\n    }\n    & .content-upload {\n      min-height: 50px;\n      margin-top: 60px;\n      width: 100%;\n      border-bottom: 1px solid #c9c9c9;\n    }\n  }\n",
            ])),
          Object(w.d)(w.b),
          Object(w.d)(w.a)
        ),
        H = k.a.div(
          b ||
            (b = Object(f.a)([
              "\n  ",
              " {\n    height: 20px;\n    display: flex;\n    width: 50%;\n    margin: 10px auto;\n    margin-bottom: 50px;\n    justify-content: space-around;\n    & button {\n      width: 120px;\n      height: 50px;\n      color: white;\n      cursor: pointer;\n      margin: 0 10px;\n    }\n    & .button-cancel {\n      background-color: #959595;\n    }\n    & .button-submit {\n      background-color: #04083e;\n    }\n  }\n  ",
              " {\n    height: 30px;\n    display: flex;\n    width: 30%;\n    margin: 15px auto;\n    margin-bottom: 100px;\n    justify-content: space-around;\n    & button {\n      width: 150px;\n      height: 50px;\n      color: white;\n      cursor: pointer;\n    }\n    & .button-cancel {\n      background-color: #959595;\n    }\n    & .button-submit {\n      background-color: #04083e;\n    }\n  }\n",
            ])),
          Object(w.d)(w.b),
          Object(w.d)(w.a)
        );
    },
  },
]);
//# sourceMappingURL=19.51e7080a.chunk.js.map
