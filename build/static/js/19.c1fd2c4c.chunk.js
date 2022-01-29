(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [19],
  {
    104: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return $;
      }),
        t.d(n, "l", function () {
          return k;
        }),
        t.d(n, "e", function () {
          return x;
        }),
        t.d(n, "j", function () {
          return C;
        }),
        t.d(n, "f", function () {
          return S;
        }),
        t.d(n, "g", function () {
          return I;
        }),
        t.d(n, "b", function () {
          return w;
        }),
        t.d(n, "c", function () {
          return N;
        }),
        t.d(n, "h", function () {
          return B;
        }),
        t.d(n, "k", function () {
          return E;
        }),
        t.d(n, "d", function () {
          return A;
        }),
        t.d(n, "i", function () {
          return P;
        });
      var a,
        r,
        c,
        i,
        o,
        u,
        l,
        s,
        d,
        f,
        b,
        p,
        m,
        j,
        O,
        v,
        g,
        h = t(94),
        y = t(548),
        $ = Object(y.a)(
          a ||
            (a = Object(h.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        k = Object(y.a)(
          r ||
            (r = Object(h.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        inputCreatedAt\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        x = Object(y.a)(
          c ||
            (c = Object(h.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        C = Object(y.a)(
          i ||
            (i = Object(h.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S =
          (Object(y.a)(
            o ||
              (o = Object(h.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            u ||
              (u = Object(h.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            l ||
              (l = Object(h.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        I = Object(y.a)(
          s ||
            (s = Object(h.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        w = Object(y.a)(
          d ||
            (d = Object(h.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N = Object(y.a)(
          f ||
            (f = Object(h.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B =
          (Object(y.a)(
            b ||
              (b = Object(h.a)([
                "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            p ||
              (p = Object(h.a)([
                "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        E =
          (Object(y.a)(
            m ||
              (m = Object(h.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            j ||
              (j = Object(h.a)([
                "\n  mutation editPopup($up: String!, $url: String) {\n    editPopup(up: $up, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        A = Object(y.a)(
          O ||
            (O = Object(h.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        P =
          (Object(y.a)(
            v ||
              (v = Object(h.a)([
                "\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            g ||
              (g = Object(h.a)([
                "\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ));
    },
    115: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return r;
      });
      var a = t(133);
      t(172);
      a.a.initializeApp({
        apiKey: "AIzaSyDM5Cqu1m1YJ7E44OfM9Yo3LH0ZUN8Y6x4",
        authDomain: "sunmoon-swe.firebaseapp.com",
        projectId: "sunmoon-swe",
        storageBucket: "sunmoon-swe.appspot.com",
        messagingSenderId: "1064857281018",
        appId: "1:1064857281018:web:b2881ce151e1a16b068443",
        measurementId: "G-JYK8JT1WEN",
      });
      var r = a.a.storage();
    },
    132: function (e, n, t) {
      "use strict";
      t.d(n, "d", function () {
        return a;
      }),
        t.d(n, "c", function () {
          return r;
        }),
        t.d(n, "f", function () {
          return c;
        }),
        t.d(n, "b", function () {
          return i;
        }),
        t.d(n, "a", function () {
          return o;
        }),
        t.d(n, "e", function () {
          return u;
        });
      var a = function (e) {
          return (
            "storage" ===
            (null === e || void 0 === e ? void 0 : e.toString().split("-")[0])
          );
        },
        r = function (e) {
          var n =
              null === e || void 0 === e ? void 0 : e.toString().split("-")[0],
            t =
              null === e || void 0 === e ? void 0 : e.toString().split("-")[1];
          switch (n) {
            case "community":
              return (
                "notice" === t || "administration" === t || "storage" === t
              );
            case "storage":
            case "achievement":
              return !0;
            default:
              return !1;
          }
        },
        c = function (e) {
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
          var n =
              null === e || void 0 === e ? void 0 : e.toString().split("-")[0],
            t =
              null === e || void 0 === e ? void 0 : e.toString().split("-")[1];
          switch (n) {
            case "community":
              return (
                "notice" === t || "administration" === t || "storage" === t
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
        u = function (e) {
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
    141: function (e, n, t) {
      "use strict";
      var a = t(6),
        r = t(88),
        c = t(96),
        i = t(90),
        o = t(97),
        u = t(98),
        l = t(101),
        s = t(102),
        d = t(2),
        f = t.n(d),
        b = t(87),
        p = t.n(b),
        m = (function (e) {
          Object(l.a)(t, e);
          var n = Object(s.a)(t);
          function t(e) {
            var a;
            Object(o.a)(this, t),
              ((a = n.call(this, e)).handleChange = function (e) {
                var n = a.props,
                  t = n.disabled,
                  r = n.onChange;
                t ||
                  ("checked" in a.props ||
                    a.setState({ checked: e.target.checked }),
                  r &&
                    r({
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
            var r = "checked" in e ? e.checked : e.defaultChecked;
            return (a.state = { checked: r }), a;
          }
          return (
            Object(u.a)(
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
                    var e,
                      n = this.props,
                      t = n.prefixCls,
                      i = n.className,
                      o = n.style,
                      u = n.name,
                      l = n.id,
                      s = n.type,
                      d = n.disabled,
                      b = n.readOnly,
                      m = n.tabIndex,
                      j = n.onClick,
                      O = n.onFocus,
                      v = n.onBlur,
                      g = n.onKeyDown,
                      h = n.onKeyPress,
                      y = n.onKeyUp,
                      $ = n.autoFocus,
                      k = n.value,
                      x = n.required,
                      C = Object(c.a)(n, [
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
                      S = Object.keys(C).reduce(function (e, n) {
                        return (
                          ("aria-" !== n.substr(0, 5) &&
                            "data-" !== n.substr(0, 5) &&
                            "role" !== n) ||
                            (e[n] = C[n]),
                          e
                        );
                      }, {}),
                      I = this.state.checked,
                      w = p()(
                        t,
                        i,
                        ((e = {}),
                        Object(r.a)(e, "".concat(t, "-checked"), I),
                        Object(r.a)(e, "".concat(t, "-disabled"), d),
                        e)
                      );
                    return f.a.createElement(
                      "span",
                      { className: w, style: o },
                      f.a.createElement(
                        "input",
                        Object(a.a)(
                          {
                            name: u,
                            id: l,
                            type: s,
                            required: x,
                            readOnly: b,
                            disabled: d,
                            tabIndex: m,
                            className: "".concat(t, "-input"),
                            checked: !!I,
                            onClick: j,
                            onFocus: O,
                            onBlur: v,
                            onKeyUp: y,
                            onKeyDown: g,
                            onKeyPress: h,
                            onChange: this.handleChange,
                            autoFocus: $,
                            ref: this.saveInput,
                            value: k,
                          },
                          S
                        )
                      ),
                      f.a.createElement("span", {
                        className: "".concat(t, "-inner"),
                      })
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, n) {
                    return "checked" in e
                      ? Object(i.a)(
                          Object(i.a)({}, n),
                          {},
                          { checked: e.checked }
                        )
                      : null;
                  },
                },
              ]
            ),
            t
          );
        })(d.Component);
      (m.defaultProps = {
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
        (n.a = m);
    },
    156: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return c;
      });
      var a = t(45),
        r = t(115),
        c = function (e, n, t, c) {
          r.a
            .ref("/".concat(e, "/").concat(n, "/").concat(t))
            .delete()
            .then(function () {
              c("");
            })
            .catch(function (e) {
              return a.b.error(e);
            });
        };
    },
    157: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return u;
      });
      var a = t(114),
        r = t(112),
        c = t.n(r),
        i = t(45),
        o = t(115),
        u = function (e, n, t, r, u, l, s, d, f) {
          o.a
            .ref("/".concat(e, "/").concat(t, "/").concat(r))
            .put(n)
            .on(
              "state_changed",
              function (e) {},
              function (e) {
                return console.log(e);
              },
              function () {
                s(1),
                  o.a
                    .ref("/".concat(e, "/").concat(t, "/").concat(r))
                    .getDownloadURL()
                    .then(
                      (function () {
                        var e = Object(a.a)(
                          c.a.mark(function e(n) {
                            return c.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if ((u(n), !d || !f)) {
                                      e.next = 4;
                                      break;
                                    }
                                    return (
                                      (e.next = 4),
                                      d({
                                        variables: {
                                          url: n,
                                          fileName: r,
                                          boardId: f,
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
                        return function (n) {
                          return e.apply(this, arguments);
                        };
                      })()
                    );
              }
            );
        };
    },
    203: function (e, n, t) {
      "use strict";
      var a = t(88),
        r = t(6),
        c = t(2),
        i = t(87),
        o = t.n(i),
        u = t(141),
        l = t(92),
        s = t(89),
        d = t(106),
        f = t(170),
        b = function (e, n) {
          var t = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              n.indexOf(a) < 0 &&
              (t[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              n.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (t[a[r]] = e[a[r]]);
          }
          return t;
        },
        p = c.createContext(null),
        m = function (e, n) {
          var t = e.defaultValue,
            i = e.children,
            u = e.options,
            m = void 0 === u ? [] : u,
            j = e.prefixCls,
            O = e.className,
            v = e.style,
            g = e.onChange,
            h = b(e, [
              "defaultValue",
              "children",
              "options",
              "prefixCls",
              "className",
              "style",
              "onChange",
            ]),
            y = c.useContext(f.b),
            k = y.getPrefixCls,
            x = y.direction,
            C = c.useState(h.value || t || []),
            S = Object(s.a)(C, 2),
            I = S[0],
            w = S[1],
            N = c.useState([]),
            B = Object(s.a)(N, 2),
            E = B[0],
            A = B[1];
          c.useEffect(
            function () {
              "value" in h && w(h.value || []);
            },
            [h.value]
          );
          var P = function () {
              return m.map(function (e) {
                return "string" === typeof e ? { label: e, value: e } : e;
              });
            },
            F = k("checkbox", j),
            K = "".concat(F, "-group"),
            R = Object(d.a)(h, ["value", "disabled"]);
          m &&
            m.length > 0 &&
            (i = P().map(function (e) {
              return c.createElement(
                $,
                {
                  prefixCls: F,
                  key: e.value.toString(),
                  disabled: "disabled" in e ? e.disabled : h.disabled,
                  value: e.value,
                  checked: -1 !== I.indexOf(e.value),
                  onChange: e.onChange,
                  className: "".concat(K, "-item"),
                  style: e.style,
                },
                e.label
              );
            }));
          var L = {
              toggleOption: function (e) {
                var n = I.indexOf(e.value),
                  t = Object(l.a)(I);
                -1 === n ? t.push(e.value) : t.splice(n, 1),
                  "value" in h || w(t);
                var a = P();
                null === g ||
                  void 0 === g ||
                  g(
                    t
                      .filter(function (e) {
                        return -1 !== E.indexOf(e);
                      })
                      .sort(function (e, n) {
                        return (
                          a.findIndex(function (n) {
                            return n.value === e;
                          }) -
                          a.findIndex(function (e) {
                            return e.value === n;
                          })
                        );
                      })
                  );
              },
              value: I,
              disabled: h.disabled,
              name: h.name,
              registerValue: function (e) {
                A(function (n) {
                  return [].concat(Object(l.a)(n), [e]);
                });
              },
              cancelValue: function (e) {
                A(function (n) {
                  return n.filter(function (n) {
                    return n !== e;
                  });
                });
              },
            },
            D = o()(K, Object(a.a)({}, "".concat(K, "-rtl"), "rtl" === x), O);
          return c.createElement(
            "div",
            Object(r.a)({ className: D, style: v }, R, { ref: n }),
            c.createElement(p.Provider, { value: L }, i)
          );
        },
        j = c.forwardRef(m),
        O = c.memo(j),
        v = t(99),
        g = function (e, n) {
          var t = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              n.indexOf(a) < 0 &&
              (t[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              n.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (t[a[r]] = e[a[r]]);
          }
          return t;
        },
        h = function (e, n) {
          var t,
            i = e.prefixCls,
            l = e.className,
            s = e.children,
            d = e.indeterminate,
            b = void 0 !== d && d,
            m = e.style,
            j = e.onMouseEnter,
            O = e.onMouseLeave,
            h = e.skipGroup,
            y = void 0 !== h && h,
            $ = g(e, [
              "prefixCls",
              "className",
              "children",
              "indeterminate",
              "style",
              "onMouseEnter",
              "onMouseLeave",
              "skipGroup",
            ]),
            k = c.useContext(f.b),
            x = k.getPrefixCls,
            C = k.direction,
            S = c.useContext(p),
            I = c.useRef($.value);
          c.useEffect(function () {
            null === S || void 0 === S || S.registerValue($.value),
              Object(v.a)(
                "checked" in $ || !!S || !("value" in $),
                "Checkbox",
                "`value` is not a valid prop, do you mean `checked`?"
              );
          }, []),
            c.useEffect(
              function () {
                if (!y)
                  return (
                    $.value !== I.current &&
                      (null === S || void 0 === S || S.cancelValue(I.current),
                      null === S || void 0 === S || S.registerValue($.value)),
                    function () {
                      return null === S || void 0 === S
                        ? void 0
                        : S.cancelValue($.value);
                    }
                  );
              },
              [$.value]
            );
          var w = x("checkbox", i),
            N = Object(r.a)({}, $);
          S &&
            !y &&
            ((N.onChange = function () {
              $.onChange && $.onChange.apply($, arguments),
                S.toggleOption && S.toggleOption({ label: s, value: $.value });
            }),
            (N.name = S.name),
            (N.checked = -1 !== S.value.indexOf($.value)),
            (N.disabled = $.disabled || S.disabled));
          var B = o()(
              ((t = {}),
              Object(a.a)(t, "".concat(w, "-wrapper"), !0),
              Object(a.a)(t, "".concat(w, "-rtl"), "rtl" === C),
              Object(a.a)(t, "".concat(w, "-wrapper-checked"), N.checked),
              Object(a.a)(t, "".concat(w, "-wrapper-disabled"), N.disabled),
              t),
              l
            ),
            E = o()(Object(a.a)({}, "".concat(w, "-indeterminate"), b));
          return c.createElement(
            "label",
            { className: B, style: m, onMouseEnter: j, onMouseLeave: O },
            c.createElement(
              u.a,
              Object(r.a)({}, N, { prefixCls: w, className: E, ref: n })
            ),
            void 0 !== s && c.createElement("span", null, s)
          );
        },
        y = c.forwardRef(h);
      y.displayName = "Checkbox";
      var $ = y,
        k = $;
      (k.Group = O), (k.__ANT_CHECKBOX = !0);
      n.a = k;
    },
    538: function (e, n, t) {
      "use strict";
      t.r(n);
      var a,
        r = t(94),
        c = t(90),
        i = t(92),
        o = t(114),
        u = t(89),
        l = t(112),
        s = t.n(l),
        d = t(2),
        f = t(167),
        b = t.n(f),
        p = t(4),
        m = t(132),
        j = t(164),
        O = t(104),
        v = t(130),
        g = t(45),
        h = t(546),
        y = t(203),
        $ = t(494),
        k = t(541),
        x = t(200),
        C = t(561),
        S = t(138),
        I = t(157),
        w = t(115),
        N = t(156),
        B = t(103),
        E = t(11),
        A = { wrapperCol: { span: 16 } };
      n.default = function () {
        var e = Object(p.g)(),
          n = Object(p.h)().search,
          t = b.a.parse(n),
          a = t.category,
          r = t.param,
          l = t.subparam,
          f = Object(v.a)(""),
          B = Object(u.a)(f, 3),
          F = B[0],
          K = B[1],
          R = B[2],
          L = Object(d.useState)(!1),
          D = Object(u.a)(L, 2),
          M = D[0],
          U = D[1],
          q = Object(d.useState)([]),
          V = Object(u.a)(q, 2),
          J = V[0],
          _ = V[1],
          G = Object(d.useState)(),
          T = Object(u.a)(G, 2),
          Y = T[0],
          z = T[1],
          H = Object(d.useState)(),
          W = Object(u.a)(H, 2),
          X = W[0],
          Z = W[1],
          Q = Object(d.useState)(!1),
          ee = Object(u.a)(Q, 2),
          ne = ee[0],
          te = ee[1],
          ae = Object(d.useState)(!1),
          re = Object(u.a)(ae, 2),
          ce = re[0],
          ie = re[1],
          oe = Object(d.useState)(0),
          ue = Object(u.a)(oe, 2),
          le = ue[0],
          se = ue[1],
          de = Object(d.useState)(!1),
          fe = Object(u.a)(de, 2),
          be = fe[0],
          pe = fe[1];
        Object(d.useEffect)(
          function () {
            te(Object(m.d)(l)), ie(Object(m.b)(l));
          },
          [l]
        );
        var me = Object(j.a)(O.a, {
            onCompleted: function (n) {
              var t = n.createBoard,
                a = t.ok,
                c = t.err;
              a
                ? (R(""),
                  g.b.success(
                    "\uac8c\uc2dc\ubb3c\uc744 \uc0dd\uc131 \ud558\uc600\uc2b5\ub2c8\ub2e4"
                  ),
                  e.push({
                    pathname: "/admin/".concat(r, "/").concat(l),
                    state: { refresh: !0 },
                  }))
                : (console.log(c),
                  g.b.error(
                    "\uac8c\uc2dc\ubb3c\uc744 \uc0dd\uc131 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                  ));
            },
          }),
          je = Object(u.a)(me, 1)[0],
          Oe = Object(d.useCallback)(
            function () {
              U(!M), M || R("");
            },
            [M, R, U]
          ),
          ve = Object(d.useCallback)(
            Object(o.a)(
              s.a.mark(function e() {
                return s.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          je({
                            variables: {
                              link: F.trim()
                                ? F.includes("http")
                                  ? F
                                  : "http://".concat(F)
                                : null,
                              category: a,
                              files: 0 !== J.length ? J : null,
                              images:
                                null !== Y && void 0 !== Y && Y.trim()
                                  ? [{ url: Y, fileName: X }]
                                  : null,
                            },
                          })
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [je, a, J, X, Y, F]
          ),
          ge = Object(d.useCallback)(
            function (e) {
              var n = e.name;
              Z(e.name),
                pe(!0),
                Object(I.a)("images", e, a, n, z, le, se),
                pe(!1),
                se(0);
            },
            [a, le]
          ),
          he = Object(d.useCallback)(
            function (e) {
              se(le + 1),
                w.a
                  .ref("/files/".concat(a, "/").concat(e.name))
                  .put(e)
                  .on(
                    "state_changed",
                    function (e) {},
                    function (e) {
                      return console.log(e);
                    },
                    function () {
                      w.a
                        .ref("/files/".concat(a, "/").concat(e.name))
                        .getDownloadURL()
                        .then(function (n) {
                          _(function (t) {
                            return [].concat(Object(i.a)(t), [
                              { url: n, fileName: e.name },
                            ]);
                          }),
                            g.b.success(
                              "\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                            ),
                            se(0);
                        });
                    }
                  );
            },
            [a, le]
          ),
          ye = Object(d.useCallback)(
            function () {
              X && X.trim() && (Object(N.a)("images", a, X, z), se(0));
            },
            [a, X]
          ),
          $e = Object(d.useCallback)(
            function (e) {
              w.a
                .ref("/files/".concat(a, "/").concat(e.name))
                .delete()
                .then(function () {
                  g.b.success(
                    "\uc5c5\ub85c\ub4dc \ub41c \ud30c\uc77c/\uc774\ubbf8\uc9c0\uac00 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                    _(
                      J.filter(function (n) {
                        return n.fileName !== e.name;
                      })
                    );
                })
                .catch(function (e) {
                  return g.b.error(e);
                });
            },
            [a, J]
          );
        return Object(E.jsxs)(P, {
          children: [
            Object(E.jsx)("span", {
              style: { marginBottom: 20, display: "block" },
              children:
                "\u203b\uc0c1\uc138 \ud398\uc774\uc9c0 \uc774\ubbf8\uc9c0\ub294 \ucd5c\uc18c \uac00\ub85c 1024\ud53d\uc140 \uc774\uc0c1\uc758 \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9 \ud574 \uc8fc\uc138\uc694.",
            }),
            Object(E.jsxs)(
              h.a,
              Object(c.a)(
                Object(c.a)({}, A),
                {},
                {
                  name: "upload-board",
                  onFinish: ve,
                  children: [
                    ne &&
                      Object(E.jsxs)(E.Fragment, {
                        children: [
                          Object(E.jsx)("div", {
                            className: "link-checkbox",
                            children: Object(E.jsx)(y.a, {
                              onChange: Oe,
                              children: M
                                ? "\ub9c1\ud06c\uc81c\uac70"
                                : "\ub9c1\ud06c\ucd94\uac00",
                            }),
                          }),
                          M &&
                            Object(E.jsx)(h.a.Item, {
                              name: ["link"],
                              label: "\ub9c1\ud06c",
                              children: Object(E.jsx)($.a, {
                                type: "text",
                                onChange: K,
                                value: F,
                              }),
                            }),
                        ],
                      }),
                    ce &&
                      Object(E.jsx)(h.a.Item, {
                        name: ["file"],
                        label: "\ud30c\uc77c",
                        children: Object(E.jsx)(k.a, {
                          style: { marginBottom: 20 },
                          multiple: !0,
                          customRequest: function (e) {
                            var n = e.file;
                            return he(n);
                          },
                          maxCount: 4,
                          onChange: function (e) {
                            var n = e.file;
                            0 !== J.length
                              ? (n.status = "done")
                              : (n.status = "removed");
                          },
                          onRemove: function (e) {
                            return $e(e);
                          },
                          children: Object(E.jsx)(x.a, {
                            icon: Object(E.jsx)(C.a, {}),
                            children: "Upload",
                          }),
                        }),
                      }),
                    Object(E.jsx)(h.a.Item, {
                      name: ["image"],
                      label: "\uc774\ubbf8\uc9c0",
                      children: Object(E.jsx)(k.a, {
                        style: { marginBottom: 20 },
                        listType: "picture",
                        customRequest: function (e) {
                          var n = e.file;
                          pe(!0), ge(n);
                        },
                        progress: { showInfo: !0 },
                        onChange: function (e) {
                          var n = e.file;
                          0 !== J.length
                            ? (n.status = "done")
                            : (n.status = "removed");
                        },
                        maxCount: 1,
                        onRemove: function () {
                          return ye();
                        },
                        children: Object(E.jsx)(x.a, {
                          icon: Object(E.jsx)(C.a, {}),
                          children: "Upload",
                        }),
                      }),
                    }),
                    Object(E.jsx)(h.a.Item, {
                      wrapperCol: Object(c.a)(
                        Object(c.a)({}, A.wrapperCol),
                        {},
                        { offset: 8 }
                      ),
                      children: Object(E.jsx)(x.a, {
                        type: "primary",
                        htmlType: "submit",
                        disabled: !!be,
                        children: be
                          ? Object(E.jsxs)(E.Fragment, {
                              children: [
                                Object(E.jsx)(S.a, {}),
                                " \u2002 Uploading...",
                              ],
                            })
                          : "\uc5c5\ub85c\ub4dc",
                      }),
                    }),
                  ],
                }
              )
            ),
          ],
        });
      };
      var P = B.a.div(
        a ||
          (a = Object(r.a)([
            "\n  .link-checkbox {\n    margin: 20px 0;\n  }\n",
          ]))
      );
    },
  },
]);
//# sourceMappingURL=19.c1fd2c4c.chunk.js.map
