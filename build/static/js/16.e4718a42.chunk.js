(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [16],
  {
    104: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return k;
      }),
        n.d(t, "l", function () {
          return x;
        }),
        n.d(t, "e", function () {
          return C;
        }),
        n.d(t, "j", function () {
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
        n.d(t, "h", function () {
          return E;
        }),
        n.d(t, "k", function () {
          return P;
        }),
        n.d(t, "d", function () {
          return B;
        }),
        n.d(t, "i", function () {
          return F;
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
        m,
        O,
        h,
        v,
        g = n(94),
        y = n(548),
        k = Object(y.a)(
          a ||
            (a = Object(g.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        x = Object(y.a)(
          c ||
            (c = Object(g.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
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
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n    ) {\n      ok\n      err\n    }\n  }\n",
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
          )),
        P =
          (Object(y.a)(
            p ||
              (p = Object(g.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            m ||
              (m = Object(g.a)([
                "\n  mutation editPopup($up: String!, $url: String) {\n    editPopup(up: $up, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        B = Object(y.a)(
          O ||
            (O = Object(g.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        F =
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
    115: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var a = n(134);
      n(172);
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
    133: function (e, t, n) {
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
    142: function (e, t, n) {
      "use strict";
      var a = n(6),
        c = n(88),
        r = n(96),
        i = n(90),
        o = n(97),
        l = n(98),
        u = n(101),
        s = n(102),
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
                      m = t.onClick,
                      O = t.onFocus,
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
                            onClick: m,
                            onFocus: O,
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
    157: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var a = n(45),
        c = n(115),
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
    158: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var a = n(114),
        c = n(112),
        r = n.n(c),
        i = n(45),
        o = n(115),
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
    203: function (e, t, n) {
      "use strict";
      var a = n(88),
        c = n(6),
        r = n(2),
        i = n(87),
        o = n.n(i),
        l = n(142),
        u = n(92),
        s = n(89),
        d = n(106),
        b = n(170),
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
            m = e.prefixCls,
            O = e.className,
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
            P = E[0],
            B = E[1];
          r.useEffect(
            function () {
              "value" in g && S(g.value || []);
            },
            [g.value]
          );
          var F = function () {
              return p.map(function (e) {
                return "string" === typeof e ? { label: e, value: e } : e;
              });
            },
            K = x("checkbox", m),
            R = "".concat(K, "-group"),
            D = Object(d.a)(g, ["value", "disabled"]);
          p &&
            p.length > 0 &&
            (i = F().map(function (e) {
              return r.createElement(
                k,
                {
                  prefixCls: K,
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
          var L = {
              toggleOption: function (e) {
                var t = I.indexOf(e.value),
                  n = Object(u.a)(I);
                -1 === t ? n.push(e.value) : n.splice(t, 1),
                  "value" in g || S(n);
                var a = F();
                null === v ||
                  void 0 === v ||
                  v(
                    n
                      .filter(function (e) {
                        return -1 !== P.indexOf(e);
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
            A = o()(R, Object(a.a)({}, "".concat(R, "-rtl"), "rtl" === C), O);
          return r.createElement(
            "div",
            Object(c.a)({ className: A, style: h }, D, { ref: t }),
            r.createElement(j.Provider, { value: L }, i)
          );
        },
        m = r.forwardRef(p),
        O = r.memo(m),
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
            m = e.onMouseEnter,
            O = e.onMouseLeave,
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
            P = o()(Object(a.a)({}, "".concat(S, "-indeterminate"), f));
          return r.createElement(
            "label",
            { className: E, style: p, onMouseEnter: m, onMouseLeave: O },
            r.createElement(
              l.a,
              Object(c.a)({}, N, { prefixCls: S, className: P, ref: t })
            ),
            void 0 !== s && r.createElement("span", null, s)
          );
        },
        y = r.forwardRef(g);
      y.displayName = "Checkbox";
      var k = y,
        x = k;
      (x.Group = O), (x.__ANT_CHECKBOX = !0);
      t.a = x;
    },
    235: function (e, t, n) {
      "use strict";
      var a = n(252);
      t.a = a.a;
    },
    327: function (e, t, n) {
      "use strict";
      var a = n(6),
        c = n(88),
        r = n(2),
        i = n(89),
        o = n(96),
        l = n(87),
        u = n.n(l),
        s = n(123),
        d = n(124),
        b = r.forwardRef(function (e, t) {
          var n,
            a = e.prefixCls,
            l = void 0 === a ? "rc-switch" : a,
            b = e.className,
            f = e.checked,
            j = e.defaultChecked,
            p = e.disabled,
            m = e.loadingIcon,
            O = e.checkedChildren,
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
            m,
            r.createElement(
              "span",
              { className: "".concat(l, "-inner") },
              $ ? O : h
            )
          );
        });
      b.displayName = "Switch";
      var f = b,
        j = n(139),
        p = n(193),
        m = n(170),
        O = n(116),
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
          var y = r.useContext(m.b),
            k = y.getPrefixCls,
            x = y.direction,
            C = r.useContext(O.b),
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
    557: function (e, t, n) {
      "use strict";
      n.r(t);
      var a,
        c,
        r = n(94),
        i = n(90),
        o = n(92),
        l = n(114),
        u = n(89),
        s = n(112),
        d = n.n(s),
        b = n(2),
        f = n(167),
        j = n.n(f),
        p = n(131),
        m = n(103),
        O = m.a.div(
          a ||
            (a = Object(r.a)([
              "\n  & .link-checkbox {\n    margin: 20px;\n    margin-left: 40px;\n  }\n\n  & .upload-list-inline {\n    width: 200px;\n    margin-right: 8px;\n  }\n\n  & .ant-upload-list-picture-container {\n    width: 300px;\n  }\n  & .ant-upload-list-item-info {\n    width: 300px;\n  }\n",
            ]))
        ),
        h = n(244),
        v = n(546),
        g = n(494),
        y = n(327),
        k = n(235),
        x = n(200),
        C = n(203),
        $ = n(541),
        w = n(165),
        I = n(104),
        S = n(45),
        N = n(4),
        E = n(133),
        P = n(561),
        B = n(139),
        F = n(158),
        K = n(157),
        R = n(115),
        D = n(196),
        L = n.n(D),
        A = (n(198), n(11)),
        M = { wrapperCol: { span: 16 } },
        V = {
          toolbar: [
            [{ header: [1, 2, !1] }],
            ["bold", "italic"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
          ],
        },
        q = ["header", "bold", "italic", "underline", "list"],
        T =
          ((t.default = function () {
            var e = Object(N.g)(),
              t = Object(N.h)().search,
              n = j.a.parse(t),
              a = n.category,
              c = n.param,
              r = n.subparam,
              s = Object(p.a)(""),
              f = Object(u.a)(s, 3),
              m = f[0],
              D = f[1],
              L = f[2],
              U = Object(b.useState)(""),
              W = Object(u.a)(U, 2),
              _ = W[0],
              G = W[1],
              J = Object(p.a)(""),
              z = Object(u.a)(J, 3),
              H = z[0],
              Y = z[1],
              X = z[2],
              Z = Object(b.useState)(!1),
              Q = Object(u.a)(Z, 2),
              ee = Q[0],
              te = Q[1],
              ne = Object(b.useState)(),
              ae = Object(u.a)(ne, 2),
              ce = ae[0],
              re = ae[1],
              ie = Object(b.useState)(),
              oe = Object(u.a)(ie, 2),
              le = oe[0],
              ue = oe[1],
              se = Object(b.useState)([]),
              de = Object(u.a)(se, 2),
              be = de[0],
              fe = de[1],
              je = Object(b.useState)(!1),
              pe = Object(u.a)(je, 2),
              me = pe[0],
              Oe = pe[1],
              he = Object(b.useState)(!1),
              ve = Object(u.a)(he, 2),
              ge = ve[0],
              ye = ve[1],
              ke = Object(b.useState)(!1),
              xe = Object(u.a)(ke, 2),
              Ce = xe[0],
              $e = xe[1],
              we = Object(b.useState)(!0),
              Ie = Object(u.a)(we, 2),
              Se = Ie[0],
              Ne = Ie[1],
              Ee = Object(b.useState)(!1),
              Pe = Object(u.a)(Ee, 2),
              Be = Pe[0],
              Fe = Pe[1],
              Ke = Object(b.useState)(!0),
              Re = Object(u.a)(Ke, 2),
              De = Re[0],
              Le = Re[1],
              Ae = Object(b.useState)(0),
              Me = Object(u.a)(Ae, 2),
              Ve = Me[0],
              qe = Me[1],
              Te = Object(b.useState)(),
              Ue = Object(u.a)(Te, 2),
              We = Ue[0],
              _e = Ue[1],
              Ge = Object(b.useState)(!0),
              Je = Object(u.a)(Ge, 2),
              ze = Je[0],
              He = Je[1];
            Object(b.useEffect)(
              function () {
                $e(Object(E.c)(r)),
                  Oe(Object(E.d)(r)),
                  ye(Object(E.b)(r)),
                  Ne(Object(E.a)(r)),
                  Fe(Object(E.f)(r));
              },
              [r]
            );
            var Ye = Object(w.a)(I.a, {
                onCompleted: function (t) {
                  var n = t.createBoard,
                    a = n.ok,
                    i = n.err;
                  a
                    ? (L(""),
                      G(""),
                      X(""),
                      re(""),
                      S.b.success(
                        "\uac8c\uc2dc\ubb3c\uc744 \uc0dd\uc131 \ud558\uc600\uc2b5\ub2c8\ub2e4"
                      ),
                      e.push({
                        pathname: "/admin/".concat(c, "/").concat(r),
                        state: { refresh: !0 },
                      }))
                    : (console.log(i),
                      S.b.error(
                        "\uac8c\uc2dc\ubb3c\uc744 \uc0dd\uc131 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                      ));
                },
              }),
              Xe = Object(u.a)(Ye, 2),
              Ze = Xe[0],
              Qe = Xe[1].loading,
              et = Object(b.useCallback)(
                function () {
                  te(!ee), ee || X("");
                },
                [ee, X, te]
              ),
              tt = Object(b.useCallback)(
                Object(l.a)(
                  d.a.mark(function e() {
                    return d.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (0 === be.length) {
                              e.next = 5;
                              break;
                            }
                            return (
                              (e.next = 3),
                              Ze({
                                variables: {
                                  title: m.trim() ? m : null,
                                  content: _.trim() ? _ : null,
                                  link: H.trim() ? H : null,
                                  category: a,
                                  files: 0 !== be.length ? be : null,
                                  images:
                                    null !== ce && void 0 !== ce && ce.trim()
                                      ? [{ url: ce, fileName: le }]
                                      : null,
                                  private: !De,
                                  type:
                                    null === We || void 0 === We
                                      ? void 0
                                      : We.type,
                                  showAttach: !!ze,
                                },
                              })
                            );
                          case 3:
                          case 8:
                            e.next = 12;
                            break;
                          case 5:
                            if (!ce) {
                              e.next = 10;
                              break;
                            }
                            return (
                              (e.next = 8),
                              Ze({
                                variables: {
                                  title: m.trim() ? m : null,
                                  content: _.trim() ? _ : null,
                                  link: H.trim() ? H : null,
                                  category: a,
                                  files: null,
                                  images:
                                    null !== ce && void 0 !== ce && ce.trim()
                                      ? [{ url: ce, fileName: le }]
                                      : null,
                                  private: !De,
                                  type:
                                    null === We || void 0 === We
                                      ? void 0
                                      : We.type,
                                  showAttach: !!ze,
                                },
                              })
                            );
                          case 10:
                            return (
                              (e.next = 12),
                              Ze({
                                variables: {
                                  title: m.trim() ? m : null,
                                  content: _.trim() ? _ : null,
                                  link: H.trim() ? H : null,
                                  private: !De,
                                  category: a,
                                  type:
                                    null === We || void 0 === We
                                      ? void 0
                                      : We.type,
                                  showAttach: !!ze,
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
                [m, _, H, Ze, a, be, le, ce, De, We, ze]
              ),
              nt = Object(b.useCallback)(
                function (e) {
                  qe(Ve + 1);
                  var t = e.name;
                  ue(e.name), Object(F.a)("images", e, a, t, re, Ve, qe);
                },
                [a, Ve]
              ),
              at = Object(b.useCallback)(
                function (e) {
                  qe(Ve + 1),
                    R.a
                      .ref("/files/".concat(a, "/").concat(e.name))
                      .put(e)
                      .on(
                        "state_changed",
                        function (e) {},
                        function (e) {
                          return console.log(e);
                        },
                        function () {
                          R.a
                            .ref("/files/".concat(a, "/").concat(e.name))
                            .getDownloadURL()
                            .then(function (t) {
                              fe(function (n) {
                                return [].concat(Object(o.a)(n), [
                                  { url: t, fileName: e.name },
                                ]);
                              }),
                                S.b.success(
                                  "\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                ),
                                qe(Ve - 1);
                            });
                        }
                      );
                },
                [a, Ve]
              ),
              ct = Object(b.useCallback)(
                function () {
                  le && le.trim() && Object(K.a)("images", a, le, re);
                },
                [a, le]
              ),
              rt = Object(b.useCallback)(
                function (e) {
                  R.a
                    .ref("/files/".concat(a, "/").concat(e.name))
                    .delete()
                    .then(function () {
                      S.b.success(
                        "\uc5c5\ub85c\ub4dc \ub41c \ud30c\uc77c/\uc774\ubbf8\uc9c0\uac00 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                      ),
                        fe(
                          be.filter(function (t) {
                            return t.fileName !== e.name;
                          })
                        );
                    })
                    .catch(function (e) {
                      return S.b.error(e);
                    });
                },
                [a, be]
              ),
              it = Object(b.useMemo)(function () {
                return Object(A.jsxs)(h.a, {
                  style: { width: 150 },
                  children: [
                    Object(A.jsx)(
                      h.a.Item,
                      {
                        children: Object(A.jsx)("div", {
                          onClick: function () {
                            return _e({
                              type: "basic",
                              title: "SW\uae30\ucd08\uad50\uc721",
                            });
                          },
                          children: "SW\uae30\ucd08\uad50\uc721",
                        }),
                      },
                      "0"
                    ),
                    Object(A.jsx)(
                      h.a.Item,
                      {
                        children: Object(A.jsx)("div", {
                          onClick: function () {
                            return _e({
                              type: "major",
                              title: "SW\uc804\uacf5\uad50\uc721",
                            });
                          },
                          children: "SW\uc804\uacf5\uad50\uc721",
                        }),
                      },
                      "1"
                    ),
                    Object(A.jsx)(
                      h.a.Item,
                      {
                        children: Object(A.jsx)("div", {
                          onClick: function () {
                            return _e({
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
              ot = Object(b.useMemo)(function () {
                return Object(A.jsxs)(h.a, {
                  style: { width: 150 },
                  children: [
                    Object(A.jsx)(
                      h.a.Item,
                      {
                        children: Object(A.jsx)("div", {
                          onClick: function () {
                            return _e({
                              type: "edu",
                              title: "\uc218\uc694\uc911\uc2ec",
                            });
                          },
                          children: "\uc218\uc694\uc911\uc2ec",
                        }),
                      },
                      "0"
                    ),
                    Object(A.jsx)(
                      h.a.Item,
                      {
                        children: Object(A.jsx)("div", {
                          onClick: function () {
                            return _e({
                              type: "training",
                              title: "\uc120\ub3c4\uc790\uc591\uc131",
                            });
                          },
                          children: "\uc120\ub3c4\uc790\uc591\uc131",
                        }),
                      },
                      "1"
                    ),
                    Object(A.jsx)(
                      h.a.Item,
                      {
                        children: Object(A.jsx)("div", {
                          onClick: function () {
                            return _e({
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
              lt = Object(b.useMemo)(function () {
                return Object(A.jsxs)(h.a, {
                  style: { width: 150 },
                  children: [
                    Object(A.jsx)(
                      h.a.Item,
                      {
                        children: Object(A.jsx)("div", {
                          onClick: function () {
                            return _e({
                              type: "network",
                              title: "\uae30\uad00 \ub124\ud2b8\uc6cc\ud06c",
                            });
                          },
                          children: "\uae30\uad00 \ub124\ud2b8\uc6cc\ud06c",
                        }),
                      },
                      "0"
                    ),
                    Object(A.jsx)(
                      h.a.Item,
                      {
                        children: Object(A.jsx)("div", {
                          onClick: function () {
                            return _e({
                              type: "project",
                              title: "\uae30\uad00 \ud504\ub85c\uc81d\ud2b8",
                            });
                          },
                          children: "\uae30\uad00 \ud504\ub85c\uc81d\ud2b8",
                        }),
                      },
                      "1"
                    ),
                    Object(A.jsx)(
                      h.a.Item,
                      {
                        children: Object(A.jsx)("div", {
                          onClick: function () {
                            return _e({
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
              ut = Object(b.useCallback)(
                function (e) {
                  switch (e) {
                    case "coopnews":
                      return lt;
                    case "valuenews":
                      return ot;
                    default:
                      return it;
                  }
                },
                [lt, ot, it]
              );
            return (
              Object(b.useEffect)(
                function () {
                  Ve < 0 && qe(0);
                },
                [Ve]
              ),
              Object(A.jsx)(O, {
                children: Object(A.jsxs)(
                  v.a,
                  Object(i.a)(
                    Object(i.a)({}, M),
                    {},
                    {
                      name: "upload-board",
                      onFinish: tt,
                      children: [
                        Object(A.jsx)(v.a.Item, {
                          name: ["title"],
                          label: "\uc81c\ubaa9",
                          children: Object(A.jsx)(g.a, {
                            type: "text",
                            onChange: D,
                            value: m,
                          }),
                        }),
                        Object(A.jsxs)(v.a.Item, {
                          name: ["checked"],
                          label: "\uacf5\uac1c / \ube44\uacf5\uac1c",
                          children: [
                            Object(A.jsx)(y.a, {
                              defaultChecked: !0,
                              onChange: function () {
                                return Le(!De);
                              },
                            }),
                            Object(A.jsx)("span", {
                              style: { marginLeft: 15 },
                              children: De
                                ? "\uacf5\uac1c"
                                : "\ube44\uacf5\uac1c",
                            }),
                          ],
                        }),
                        Be &&
                          Object(A.jsx)(v.a.Item, {
                            name: ["type"],
                            label: "\ub300\ubd84\ub958",
                            children: Object(A.jsx)(k.a, {
                              overlay: function () {
                                return ut(
                                  null === r || void 0 === r
                                    ? void 0
                                    : r.toString().split("-")[1]
                                );
                              },
                              trigger: ["click"],
                              children: Object(A.jsxs)(x.a, {
                                children: [
                                  We ? We.title : "\uc120\ud0dd\ud558\uae30",
                                  "\u2002\u2002\u2228",
                                ],
                              }),
                            }),
                          }),
                        me &&
                          Object(A.jsxs)(A.Fragment, {
                            children: [
                              Object(A.jsx)("div", {
                                className: "link-checkbox",
                                children: Object(A.jsx)(C.a, {
                                  onChange: et,
                                  children: ee
                                    ? "\ub9c1\ud06c\uc81c\uac70"
                                    : "\ub9c1\ud06c\ucd94\uac00",
                                }),
                              }),
                              ee &&
                                Object(A.jsx)(v.a.Item, {
                                  name: ["link"],
                                  label: "\ub9c1\ud06c",
                                  children: Object(A.jsx)(g.a, {
                                    type: "text",
                                    onChange: Y,
                                    value: H,
                                  }),
                                }),
                            ],
                          }),
                        Ce &&
                          Object(A.jsx)(v.a.Item, {
                            name: ["image"],
                            label: "\uc774\ubbf8\uc9c0",
                            children: Object(A.jsx)($.a, {
                              style: { marginBottom: 20 },
                              listType: "picture",
                              customRequest: function (e) {
                                var t = e.file;
                                return nt(t);
                              },
                              progress: { showInfo: !0 },
                              accept: "image/*",
                              onChange: function (e) {
                                var t = e.file;
                                t.status = "" !== ce ? "done" : "removed";
                              },
                              className: "upload-list-inline",
                              maxCount: 1,
                              onRemove: function () {
                                return ct();
                              },
                              children:
                                Ve <= 0 &&
                                Object(A.jsx)(x.a, {
                                  icon: Object(A.jsx)(P.a, {}),
                                  children: "Upload",
                                }),
                            }),
                          }),
                        ge &&
                          Object(A.jsx)(v.a.Item, {
                            name: ["file"],
                            label: "\ud30c\uc77c",
                            children: Object(A.jsx)($.a, {
                              multiple: !0,
                              customRequest: function (e) {
                                var t = e.file;
                                return at(t);
                              },
                              maxCount: 4,
                              onChange: function (e) {
                                var t = e.file;
                                0 !== be.length
                                  ? (t.status = "done")
                                  : (t.status = "removed");
                              },
                              onRemove: function (e) {
                                return rt(e);
                              },
                              children:
                                Ve <= 0 &&
                                Object(A.jsx)(x.a, {
                                  style: { marginBottom: 20 },
                                  icon: Object(A.jsx)(P.a, {}),
                                  children: "Upload",
                                }),
                            }),
                          }),
                        Se &&
                          Object(A.jsx)(v.a.Item, {
                            name: "content",
                            label: "\ub0b4\uc6a9",
                            style: { marginTop: 20 },
                            initialValue: "",
                            rules: [{ required: !0 }],
                            children: Object(A.jsx)(T, {
                              modules: V,
                              formats: q,
                              value: _ || "",
                              onChange: function (e) {
                                G(e);
                              },
                              theme: "snow",
                            }),
                          }),
                        ge &&
                          Object(A.jsx)(v.a.Item, {
                            name: "showAttach",
                            label:
                              "\ucca8\ubd80\ud30c\uc77c \uacf5\uac1c\uc5ec\ubd80",
                            style: { marginTop: 20 },
                            initialValue: "",
                            children: Object(A.jsx)(y.a, {
                              defaultChecked: !0,
                              onChange: function () {
                                return He(!ze);
                              },
                            }),
                          }),
                        Object(A.jsx)(v.a.Item, {
                          wrapperCol: Object(i.a)(
                            Object(i.a)({}, M.wrapperCol),
                            {},
                            { offset: 8 }
                          ),
                          children: Object(A.jsx)(x.a, {
                            type: "primary",
                            htmlType: "submit",
                            disabled: 0 !== Ve,
                            children: Qe
                              ? "Uploading..."
                              : Ve <= 0
                              ? "\uc62c\ub9ac\uae30"
                              : Object(A.jsxs)(A.Fragment, {
                                  children: [
                                    Object(A.jsx)(B.a, {}),
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
          }),
          Object(m.a)(L.a)(
            c ||
              (c = Object(r.a)([
                "\n  background-color: white;\n  min-height: 300px;\n  .ql-container {\n    min-height: 300px;\n  }\n",
              ]))
          ));
    },
  },
]);
//# sourceMappingURL=16.e4718a42.chunk.js.map
