(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [2],
  {
    129: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var r = n(0),
        o = (n(1), n(2)),
        a = n(7),
        i = n(27),
        c = n(4),
        s = n(116),
        l = (function (e) {
          function t(t) {
            var n = t.options,
              r = t.context,
              o = t.onNewData,
              a = e.call(this, n, r) || this;
            return (
              (a.runLazy = !1),
              (a.previous = Object.create(null)),
              (a.runLazyQuery = function (e) {
                a.cleanup(),
                  (a.runLazy = !0),
                  (a.lazyOptions = e),
                  a.onNewData();
              }),
              (a.obsRefetch = function (e) {
                var t;
                return null === (t = a.currentObservable) || void 0 === t
                  ? void 0
                  : t.refetch(e);
              }),
              (a.obsFetchMore = function (e) {
                var t;
                return null === (t = a.currentObservable) || void 0 === t
                  ? void 0
                  : t.fetchMore(e);
              }),
              (a.obsUpdateQuery = function (e) {
                var t;
                return null === (t = a.currentObservable) || void 0 === t
                  ? void 0
                  : t.updateQuery(e);
              }),
              (a.obsStartPolling = function (e) {
                var t;
                null === (t = a.currentObservable) ||
                  void 0 === t ||
                  t.startPolling(e);
              }),
              (a.obsStopPolling = function () {
                var e;
                null === (e = a.currentObservable) ||
                  void 0 === e ||
                  e.stopPolling();
              }),
              (a.obsSubscribeToMore = function (e) {
                var t;
                return null === (t = a.currentObservable) || void 0 === t
                  ? void 0
                  : t.subscribeToMore(e);
              }),
              (a.onNewData = o),
              a
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.execute = function () {
              this.refreshClient();
              var e = this.getOptions(),
                t = e.skip,
                n = e.query;
              return (
                (t || n !== this.previous.query) &&
                  (this.removeQuerySubscription(),
                  this.removeObservable(!t),
                  (this.previous.query = n)),
                this.updateObservableQuery(),
                this.getExecuteSsrResult() || this.getExecuteResult()
              );
            }),
            (t.prototype.executeLazy = function () {
              return this.runLazy
                ? [this.runLazyQuery, this.execute()]
                : [
                    this.runLazyQuery,
                    {
                      loading: !1,
                      networkStatus: c.a.ready,
                      called: !1,
                      data: void 0,
                    },
                  ];
            }),
            (t.prototype.fetchData = function () {
              var e = this,
                t = this.getOptions();
              return (
                !t.skip &&
                !1 !== t.ssr &&
                new Promise(function (t) {
                  return e.startQuerySubscription(t);
                })
              );
            }),
            (t.prototype.afterExecute = function (e) {
              var t = (void 0 === e ? {} : e).lazy,
                n = void 0 !== t && t;
              this.isMounted = !0;
              var r = this.getOptions();
              return (
                this.currentObservable &&
                  !this.ssrInitiated() &&
                  this.startQuerySubscription(),
                (n && !this.runLazy) || this.handleErrorOrCompleted(),
                (this.previousOptions = r),
                this.unmount.bind(this)
              );
            }),
            (t.prototype.cleanup = function () {
              this.removeQuerySubscription(),
                this.removeObservable(!0),
                delete this.previous.result;
            }),
            (t.prototype.getOptions = function () {
              var t = e.prototype.getOptions.call(this);
              return (
                this.lazyOptions &&
                  ((t.variables = Object(r.a)(
                    Object(r.a)({}, t.variables),
                    this.lazyOptions.variables
                  )),
                  (t.context = Object(r.a)(
                    Object(r.a)({}, t.context),
                    this.lazyOptions.context
                  ))),
                this.runLazy && delete t.skip,
                t
              );
            }),
            (t.prototype.ssrInitiated = function () {
              return this.context && this.context.renderPromises;
            }),
            (t.prototype.getExecuteSsrResult = function () {
              var e = this.getOptions(),
                t = e.ssr,
                n = e.skip,
                o = !1 === t,
                a = this.refreshClient().client.disableNetworkFetches,
                i = Object(r.a)(
                  {
                    loading: !0,
                    networkStatus: c.a.loading,
                    called: !0,
                    data: void 0,
                    stale: !1,
                    client: this.client,
                  },
                  this.observableQueryFields()
                );
              if (o && (this.ssrInitiated() || a))
                return (this.previous.result = i), i;
              if (this.ssrInitiated()) {
                var s = this.getExecuteResult() || i;
                return (
                  s.loading &&
                    !n &&
                    this.context.renderPromises.addQueryPromise(
                      this,
                      function () {
                        return null;
                      }
                    ),
                  s
                );
              }
            }),
            (t.prototype.prepareObservableQueryOptions = function () {
              var e = this.getOptions();
              this.verifyDocumentType(e.query, s.a.Query);
              var t = e.displayName || "Query";
              return (
                !this.ssrInitiated() ||
                  ("network-only" !== e.fetchPolicy &&
                    "cache-and-network" !== e.fetchPolicy) ||
                  (e.fetchPolicy = "cache-first"),
                Object(r.a)(Object(r.a)({}, e), {
                  displayName: t,
                  context: e.context,
                })
              );
            }),
            (t.prototype.initializeObservableQuery = function () {
              if (
                (this.ssrInitiated() &&
                  (this.currentObservable =
                    this.context.renderPromises.getSSRObservable(
                      this.getOptions()
                    )),
                !this.currentObservable)
              ) {
                var e = this.prepareObservableQueryOptions();
                (this.previous.observableQueryOptions = Object(r.a)(
                  Object(r.a)({}, e),
                  { children: void 0 }
                )),
                  (this.currentObservable =
                    this.refreshClient().client.watchQuery(Object(r.a)({}, e))),
                  this.ssrInitiated() &&
                    this.context.renderPromises.registerSSRObservable(
                      this.currentObservable,
                      e
                    );
              }
            }),
            (t.prototype.updateObservableQuery = function () {
              if (this.currentObservable) {
                var e = Object(r.a)(
                  Object(r.a)({}, this.prepareObservableQueryOptions()),
                  { children: void 0 }
                );
                this.getOptions().skip
                  ? (this.previous.observableQueryOptions = e)
                  : Object(a.a)(e, this.previous.observableQueryOptions) ||
                    ((this.previous.observableQueryOptions = e),
                    this.currentObservable.setOptions(e).catch(function () {}));
              } else this.initializeObservableQuery();
            }),
            (t.prototype.startQuerySubscription = function (e) {
              var t = this;
              void 0 === e && (e = this.onNewData),
                this.currentSubscription ||
                  this.getOptions().skip ||
                  (this.currentSubscription = this.currentObservable.subscribe({
                    next: function (n) {
                      var r = n.loading,
                        o = n.networkStatus,
                        i = n.data,
                        c = t.previous.result;
                      (c &&
                        c.loading === r &&
                        c.networkStatus === o &&
                        Object(a.a)(c.data, i)) ||
                        e();
                    },
                    error: function (n) {
                      if (
                        (t.resubscribeToQuery(),
                        !n.hasOwnProperty("graphQLErrors"))
                      )
                        throw n;
                      var r = t.previous.result;
                      ((r && r.loading) || !Object(a.a)(n, t.previous.error)) &&
                        ((t.previous.error = n), e());
                    },
                  }));
            }),
            (t.prototype.resubscribeToQuery = function () {
              this.removeQuerySubscription();
              var e = this.currentObservable;
              if (e) {
                var t = e.last;
                try {
                  e.resetLastResults(), this.startQuerySubscription();
                } finally {
                  e.last = t;
                }
              }
            }),
            (t.prototype.getExecuteResult = function () {
              var e = this.observableQueryFields(),
                t = this.getOptions();
              if (t.skip)
                e = Object(r.a)(Object(r.a)({}, e), {
                  data: void 0,
                  error: void 0,
                  loading: !1,
                  networkStatus: c.a.ready,
                  called: !0,
                });
              else if (this.currentObservable) {
                var n = this.currentObservable.getCurrentResult(),
                  o = n.data,
                  a = n.loading,
                  s = n.partial,
                  l = n.networkStatus,
                  u = n.errors,
                  p = n.error;
                if (
                  (u && u.length > 0 && (p = new i.a({ graphQLErrors: u })),
                  (e = Object(r.a)(Object(r.a)({}, e), {
                    data: o,
                    loading: a,
                    networkStatus: l,
                    error: p,
                    called: !0,
                  })),
                  a)
                );
                else if (p)
                  Object.assign(e, {
                    data: (this.currentObservable.getLastResult() || {}).data,
                  });
                else {
                  var d = this.currentObservable.options.fetchPolicy;
                  if (
                    t.partialRefetch &&
                    s &&
                    (!o || 0 === Object.keys(o).length) &&
                    "cache-only" !== d
                  )
                    return (
                      Object.assign(e, {
                        loading: !0,
                        networkStatus: c.a.loading,
                      }),
                      e.refetch(),
                      e
                    );
                }
              }
              (e.client = this.client), this.setOptions(t, !0);
              var f = this.previous.result;
              return (
                (this.previous.loading = (f && f.loading) || !1),
                (e.previousData = f && (f.data || f.previousData)),
                (this.previous.result = e),
                this.currentObservable &&
                  this.currentObservable.resetQueryStoreErrors(),
                e
              );
            }),
            (t.prototype.handleErrorOrCompleted = function () {
              if (this.currentObservable && this.previous.result) {
                var e = this.previous.result,
                  t = e.data,
                  n = e.loading,
                  r = e.error;
                if (!n) {
                  var o = this.getOptions(),
                    i = o.query,
                    c = o.variables,
                    s = o.onCompleted,
                    l = o.onError,
                    u = o.skip;
                  if (
                    this.previousOptions &&
                    !this.previous.loading &&
                    Object(a.a)(this.previousOptions.query, i) &&
                    Object(a.a)(this.previousOptions.variables, c)
                  )
                    return;
                  !s || r || u ? l && r && l(r) : s(t);
                }
              }
            }),
            (t.prototype.removeQuerySubscription = function () {
              this.currentSubscription &&
                (this.currentSubscription.unsubscribe(),
                delete this.currentSubscription);
            }),
            (t.prototype.removeObservable = function (e) {
              this.currentObservable &&
                (this.currentObservable.tearDownQuery(),
                e && delete this.currentObservable);
            }),
            (t.prototype.observableQueryFields = function () {
              var e;
              return {
                variables:
                  null === (e = this.currentObservable) || void 0 === e
                    ? void 0
                    : e.variables,
                refetch: this.obsRefetch,
                fetchMore: this.obsFetchMore,
                updateQuery: this.obsUpdateQuery,
                startPolling: this.obsStartPolling,
                stopPolling: this.obsStopPolling,
                subscribeToMore: this.obsSubscribeToMore,
              };
            }),
            t
          );
        })(n(123).a);
      var u = n(63);
      function p(e, t, n) {
        void 0 === n && (n = !1);
        var i = Object(o.useContext)(Object(u.a)()),
          c = Object(o.useReducer)(function (e) {
            return e + 1;
          }, 0),
          s = c[0],
          p = c[1],
          d = t ? Object(r.a)(Object(r.a)({}, t), { query: e }) : { query: e },
          f = Object(o.useRef)(),
          v =
            f.current ||
            (f.current = new l({
              options: d,
              context: i,
              onNewData: function () {
                v.ssrInitiated()
                  ? p()
                  : Promise.resolve().then(function () {
                      return f.current && f.current.isMounted && p();
                    });
              },
            }));
        v.setOptions(d), (v.context = i);
        var b = (function (e, t) {
            var n = Object(o.useRef)();
            return (
              (n.current && Object(a.a)(t, n.current.key)) ||
                (n.current = { key: t, value: e() }),
              n.current.value
            );
          })(
            function () {
              return n ? v.executeLazy() : v.execute();
            },
            {
              options: Object(r.a)(Object(r.a)({}, d), {
                onError: void 0,
                onCompleted: void 0,
              }),
              context: i,
              tick: s,
            }
          ),
          h = n ? b[1] : b;
        return (
          __DEV__ &&
            (function (e) {
              if (__DEV__) {
                var t = Object(o.useRef)(!1);
                Object(o.useEffect)(function () {
                  return function () {
                    t.current = !0;
                  };
                }, []),
                  Object(o.useEffect)(function () {
                    !0 === t.current && ((t.current = !1), e());
                  }, []);
              }
            })(p),
          Object(o.useEffect)(function () {
            return function () {
              v.cleanup(), (f.current = void 0);
            };
          }, []),
          Object(o.useEffect)(
            function () {
              return v.afterExecute({ lazy: n });
            },
            [h.loading, h.networkStatus, h.error, h.data, v.currentObservable]
          ),
          b
        );
      }
    },
    188: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var r = n(129);
      function o(e, t) {
        return Object(r.a)(e, t, !1);
      }
    },
    273: function (e, t, n) {
      "use strict";
      var r = n(96),
        o = n(2),
        a = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z",
                },
              },
            ],
          },
          name: "edit",
          theme: "outlined",
        },
        i = n(97),
        c = function (e, t) {
          return o.createElement(
            i.a,
            Object(r.a)(Object(r.a)({}, e), {}, { ref: t, icon: a })
          );
        };
      c.displayName = "EditOutlined";
      t.a = o.forwardRef(c);
    },
    379: function (e, t, n) {
      "use strict";
      var r = n(380),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          a,
          i,
          c,
          s,
          l,
          u = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((i = r()),
            (c = document.createRange()),
            (s = document.getSelection()),
            ((l = document.createElement("span")).textContent = e),
            (l.style.all = "unset"),
            (l.style.position = "fixed"),
            (l.style.top = 0),
            (l.style.clip = "rect(0, 0, 0, 0)"),
            (l.style.whiteSpace = "pre"),
            (l.style.webkitUserSelect = "text"),
            (l.style.MozUserSelect = "text"),
            (l.style.msUserSelect = "text"),
            (l.style.userSelect = "text"),
            l.addEventListener("copy", function (r) {
              if ((r.stopPropagation(), t.format))
                if (
                  (r.preventDefault(), "undefined" === typeof r.clipboardData)
                ) {
                  n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var a = o[t.format] || o.default;
                  window.clipboardData.setData(a, e);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(t.format, e);
              t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
            }),
            document.body.appendChild(l),
            c.selectNodeContents(l),
            s.addRange(c),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          u = !0;
        } catch (p) {
          n && console.error("unable to copy using execCommand: ", p),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (u = !0);
          } catch (p) {
            n && console.error("unable to copy using clipboardData: ", p),
              n && console.error("falling back to prompt"),
              (a = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(a, e);
          }
        } finally {
          s &&
            ("function" == typeof s.removeRange
              ? s.removeRange(c)
              : s.removeAllRanges()),
            l && document.body.removeChild(l),
            i();
        }
        return u;
      };
    },
    380: function (e, t) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], r = 0;
          r < e.rangeCount;
          r++
        )
          n.push(e.getRangeAt(r));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    401: function (e, t, n) {
      "use strict";
      var r = n(8),
        o = n(93),
        a = n(2),
        i = n(92),
        c = n.n(i),
        s = n(118),
        l = n(160),
        u = n(107),
        p = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        d = function (e, t) {
          var n = e.prefixCls,
            i = e.component,
            d = void 0 === i ? "article" : i,
            f = e.className,
            v = e["aria-label"],
            b = e.setContentRef,
            h = e.children,
            y = p(e, [
              "prefixCls",
              "component",
              "className",
              "aria-label",
              "setContentRef",
              "children",
            ]),
            m = t;
          return (
            b &&
              (Object(u.a)(
                !1,
                "Typography",
                "`setContentRef` is deprecated. Please use `ref` instead."
              ),
              (m = Object(s.a)(t, b))),
            a.createElement(l.a, null, function (e) {
              var t = e.getPrefixCls,
                i = e.direction,
                s = d,
                l = t("typography", n),
                u = c()(
                  l,
                  Object(o.a)({}, "".concat(l, "-rtl"), "rtl" === i),
                  f
                );
              return a.createElement(
                s,
                Object(r.a)({ className: u, "aria-label": v, ref: m }, y),
                h
              );
            })
          );
        },
        f = a.forwardRef(d);
      f.displayName = "Typography";
      var v = f,
        b = n(100),
        h = n(109),
        y = n(102),
        m = n(103),
        O = n(104),
        g = n(105),
        C = n(106),
        j = n(115),
        x = n(379),
        E = n.n(x),
        k = n(273),
        w = n(150),
        S = n(96),
        N = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z",
                },
              },
            ],
          },
          name: "copy",
          theme: "outlined",
        },
        P = n(97),
        R = function (e, t) {
          return a.createElement(
            P.a,
            Object(S.a)(Object(S.a)({}, e), {}, { ref: t, icon: N })
          );
        };
      R.displayName = "CopyOutlined";
      var T = a.forwardRef(R),
        M = n(140),
        z = n(95),
        I = n(149),
        L = n(130),
        D = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        Q = {
          border: 0,
          background: "transparent",
          padding: 0,
          lineHeight: "inherit",
          display: "inline-block",
        },
        A = a.forwardRef(function (e, t) {
          var n = e.style,
            o = e.noStyle,
            i = e.disabled,
            c = D(e, ["style", "noStyle", "disabled"]),
            s = {};
          return (
            o || (s = Object(r.a)({}, Q)),
            i && (s.pointerEvents = "none"),
            (s = Object(r.a)(Object(r.a)({}, s), n)),
            a.createElement(
              "div",
              Object(r.a)({ role: "button", tabIndex: 0, ref: t }, c, {
                onKeyDown: function (e) {
                  e.keyCode === L.a.ENTER && e.preventDefault();
                },
                onKeyUp: function (t) {
                  var n = t.keyCode,
                    r = e.onClick;
                  n === L.a.ENTER && r && r();
                },
                style: s,
              })
            )
          );
        }),
        H = n(255),
        U = n(248),
        _ = n(159),
        F = n(94),
        B = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z",
                },
              },
            ],
          },
          name: "enter",
          theme: "outlined",
        },
        K = function (e, t) {
          return a.createElement(
            P.a,
            Object(S.a)(Object(S.a)({}, e), {}, { ref: t, icon: B })
          );
        };
      K.displayName = "EnterOutlined";
      var V,
        q = a.forwardRef(K),
        W = n(256),
        J = function (e) {
          var t = e.prefixCls,
            n = e["aria-label"],
            r = e.className,
            i = e.style,
            s = e.direction,
            l = e.maxLength,
            u = e.autoSize,
            p = void 0 === u || u,
            d = e.value,
            f = e.onSave,
            v = e.onCancel,
            b = e.onEnd,
            h = a.useRef(),
            y = a.useRef(!1),
            m = a.useRef(),
            O = a.useState(d),
            g = Object(F.a)(O, 2),
            C = g[0],
            j = g[1];
          a.useEffect(
            function () {
              j(d);
            },
            [d]
          ),
            a.useEffect(function () {
              if (h.current && h.current.resizableTextArea) {
                var e = h.current.resizableTextArea.textArea;
                e.focus();
                var t = e.value.length;
                e.setSelectionRange(t, t);
              }
            }, []);
          var x = function () {
              f(C.trim());
            },
            E = c()(
              t,
              "".concat(t, "-edit-content"),
              Object(o.a)({}, "".concat(t, "-rtl"), "rtl" === s),
              r
            );
          return a.createElement(
            "div",
            { className: E, style: i },
            a.createElement(W.a, {
              ref: h,
              maxLength: l,
              value: C,
              onChange: function (e) {
                var t = e.target;
                j(t.value.replace(/[\n\r]/g, ""));
              },
              onKeyDown: function (e) {
                var t = e.keyCode;
                y.current || (m.current = t);
              },
              onKeyUp: function (e) {
                var t = e.keyCode,
                  n = e.ctrlKey,
                  r = e.altKey,
                  o = e.metaKey,
                  a = e.shiftKey;
                m.current !== t ||
                  y.current ||
                  n ||
                  r ||
                  o ||
                  a ||
                  (t === L.a.ENTER
                    ? (x(), null === b || void 0 === b || b())
                    : t === L.a.ESC && v());
              },
              onCompositionStart: function () {
                y.current = !0;
              },
              onCompositionEnd: function () {
                y.current = !1;
              },
              onBlur: function () {
                x();
              },
              "aria-label": n,
              autoSize: p,
            }),
            a.createElement(q, {
              className: "".concat(t, "-edit-content-confirm"),
            })
          );
        },
        $ = n(35),
        X = { padding: 0, margin: 0, display: "inline", lineHeight: "inherit" };
      function G(e) {
        if (!e) return 0;
        var t = e.match(/^\d*(\.\d*)?/);
        return t ? Number(t[0]) : 0;
      }
      function Y(e, t) {
        e.setAttribute("aria-hidden", "true");
        var n,
          r = window.getComputedStyle(t),
          o =
            ((n = r),
            Array.prototype.slice
              .apply(n)
              .map(function (e) {
                return "".concat(e, ": ").concat(n.getPropertyValue(e), ";");
              })
              .join(""));
        e.setAttribute("style", o),
          (e.style.position = "fixed"),
          (e.style.left = "0"),
          (e.style.height = "auto"),
          (e.style.minHeight = "auto"),
          (e.style.maxHeight = "auto"),
          (e.style.top = "-999999px"),
          (e.style.zIndex = "-1000"),
          (e.style.textOverflow = "clip"),
          (e.style.whiteSpace = "normal"),
          (e.style.webkitLineClamp = "none");
      }
      var Z = function (e, t, n, r, o) {
          V ||
            (V = document.createElement("div")).setAttribute(
              "aria-hidden",
              "true"
            ),
            V.parentNode || document.body.appendChild(V);
          var i = t.rows,
            c = t.suffix,
            s = void 0 === c ? "" : c,
            l = window.getComputedStyle(e),
            u = (function (e) {
              var t = document.createElement("div");
              Y(t, e),
                t.appendChild(document.createTextNode("text")),
                document.body.appendChild(t);
              var n = t.offsetHeight,
                r = G(window.getComputedStyle(e).lineHeight);
              return document.body.removeChild(t), n > r ? n : r;
            })(e),
            p = Math.floor(u) * (i + 1) + G(l.paddingTop) + G(l.paddingBottom);
          Y(V, e);
          var d = (function (e) {
            var t = [];
            return (
              e.forEach(function (e) {
                var n = t[t.length - 1];
                "string" === typeof e && "string" === typeof n
                  ? (t[t.length - 1] += e)
                  : t.push(e);
              }),
              t
            );
          })(Object(j.a)(n));
          function f() {
            return Math.ceil(V.getBoundingClientRect().height) < p;
          }
          if (
            (Object($.render)(
              a.createElement(
                "div",
                { style: X },
                a.createElement("span", { style: X }, d, s),
                a.createElement("span", { style: X }, r)
              ),
              V
            ),
            f())
          )
            return (
              Object($.unmountComponentAtNode)(V),
              { content: n, text: V.innerHTML, ellipsis: !1 }
            );
          var v = Array.prototype.slice
              .apply(V.childNodes[0].childNodes[0].cloneNode(!0).childNodes)
              .filter(function (e) {
                return 8 !== e.nodeType;
              }),
            b = Array.prototype.slice.apply(
              V.childNodes[0].childNodes[1].cloneNode(!0).childNodes
            );
          Object($.unmountComponentAtNode)(V);
          var h = [];
          V.innerHTML = "";
          var y = document.createElement("span");
          V.appendChild(y);
          var m = document.createTextNode(o + s);
          function O(e) {
            y.insertBefore(e, m);
          }
          function g(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : t.length,
              o =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 0,
              a = Math.floor((n + r) / 2),
              i = t.slice(0, a);
            if (((e.textContent = i), n >= r - 1))
              for (var c = r; c >= n; c -= 1) {
                var s = t.slice(0, c);
                if (((e.textContent = s), f() || !s))
                  return c === t.length
                    ? { finished: !1, reactNode: t }
                    : { finished: !0, reactNode: s };
              }
            return f() ? g(e, t, a, r, a) : g(e, t, n, a, o);
          }
          function C(e, t) {
            var n = e.nodeType;
            if (1 === n)
              return (
                O(e),
                f()
                  ? { finished: !1, reactNode: d[t] }
                  : (y.removeChild(e), { finished: !0, reactNode: null })
              );
            if (3 === n) {
              var r = e.textContent || "",
                o = document.createTextNode(r);
              return O(o), g(o, r);
            }
            return { finished: !1, reactNode: null };
          }
          return (
            y.appendChild(m),
            b.forEach(function (e) {
              V.appendChild(e);
            }),
            v.some(function (e, t) {
              var n = C(e, t),
                r = n.finished,
                o = n.reactNode;
              return o && h.push(o), r;
            }),
            { content: h, text: V.innerHTML, ellipsis: !0 }
          );
        },
        ee = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        te = Object(U.b)("webkitLineClamp"),
        ne = Object(U.b)("textOverflow");
      function re(e, t, n) {
        return !0 === e || void 0 === e ? t : e || (n && t);
      }
      var oe = (function (e) {
        Object(g.a)(n, e);
        var t = Object(C.a)(n);
        function n() {
          var e;
          return (
            Object(m.a)(this, n),
            ((e = t.apply(this, arguments)).contentRef = a.createRef()),
            (e.state = {
              edit: !1,
              copied: !1,
              ellipsisText: "",
              ellipsisContent: null,
              isEllipsis: !1,
              expanded: !1,
              clientRendered: !1,
            }),
            (e.getPrefixCls = function () {
              var t = e.props.prefixCls;
              return (0, e.context.getPrefixCls)("typography", t);
            }),
            (e.onExpandClick = function (t) {
              var n,
                r = e.getEllipsis().onExpand;
              e.setState({ expanded: !0 }),
                null === (n = r) || void 0 === n || n(t);
            }),
            (e.onEditClick = function (t) {
              t.preventDefault(), e.triggerEdit(!0);
            }),
            (e.onEditChange = function (t) {
              var n = e.getEditable().onChange;
              null === n || void 0 === n || n(t), e.triggerEdit(!1);
            }),
            (e.onEditCancel = function () {
              var t, n;
              null === (n = (t = e.getEditable()).onCancel) ||
                void 0 === n ||
                n.call(t),
                e.triggerEdit(!1);
            }),
            (e.onCopyClick = function (t) {
              t.preventDefault();
              var n = e.props,
                o = n.children,
                a = n.copyable,
                i = Object(r.a)({}, "object" === Object(b.a)(a) ? a : null);
              void 0 === i.text && (i.text = String(o)),
                E()(i.text || ""),
                e.setState({ copied: !0 }, function () {
                  i.onCopy && i.onCopy(),
                    (e.copyId = window.setTimeout(function () {
                      e.setState({ copied: !1 });
                    }, 3e3));
                });
            }),
            (e.setEditRef = function (t) {
              e.editIcon = t;
            }),
            (e.triggerEdit = function (t) {
              var n = e.getEditable().onStart;
              t && n && n(),
                e.setState({ edit: t }, function () {
                  !t && e.editIcon && e.editIcon.focus();
                });
            }),
            (e.resizeOnNextFrame = function () {
              H.a.cancel(e.rafId),
                (e.rafId = Object(H.a)(function () {
                  e.syncEllipsis();
                }));
            }),
            e
          );
        }
        return (
          Object(O.a)(
            n,
            [
              {
                key: "componentDidMount",
                value: function () {
                  this.setState({ clientRendered: !0 }),
                    this.resizeOnNextFrame();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this.props.children,
                    n = this.getEllipsis(),
                    r = this.getEllipsis(e);
                  (t === e.children && n.rows === r.rows) ||
                    this.resizeOnNextFrame();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.clearTimeout(this.copyId), H.a.cancel(this.rafId);
                },
              },
              {
                key: "getEditable",
                value: function (e) {
                  var t = this.state.edit,
                    n = (e || this.props).editable;
                  return n
                    ? Object(r.a)(
                        { editing: t },
                        "object" === Object(b.a)(n) ? n : null
                      )
                    : { editing: t };
                },
              },
              {
                key: "getEllipsis",
                value: function (e) {
                  var t = (e || this.props).ellipsis;
                  return t
                    ? Object(r.a)(
                        { rows: 1, expandable: !1 },
                        "object" === Object(b.a)(t) ? t : null
                      )
                    : {};
                },
              },
              {
                key: "canUseCSSEllipsis",
                value: function () {
                  var e = this.state.clientRendered,
                    t = this.props,
                    n = t.editable,
                    r = t.copyable,
                    o = this.getEllipsis(),
                    a = o.rows,
                    i = o.expandable,
                    c = o.suffix,
                    s = o.onEllipsis,
                    l = o.tooltip;
                  return (
                    !c && !l && !(n || r || i || !e || s) && (1 === a ? ne : te)
                  );
                },
              },
              {
                key: "syncEllipsis",
                value: function () {
                  var e = this.state,
                    t = e.ellipsisText,
                    n = e.isEllipsis,
                    r = e.expanded,
                    o = this.getEllipsis(),
                    a = o.rows,
                    i = o.suffix,
                    c = o.onEllipsis,
                    s = this.props.children;
                  if (
                    a &&
                    !(a < 0) &&
                    this.contentRef.current &&
                    !r &&
                    !this.canUseCSSEllipsis()
                  ) {
                    Object(u.a)(
                      Object(j.a)(s).every(function (e) {
                        return "string" === typeof e;
                      }),
                      "Typography",
                      "`ellipsis` should use string as children only."
                    );
                    var l = Z(
                        this.contentRef.current,
                        { rows: a, suffix: i },
                        s,
                        this.renderOperations(!0),
                        "..."
                      ),
                      p = l.content,
                      d = l.text,
                      f = l.ellipsis;
                    (t === d && n === f) ||
                      (this.setState({
                        ellipsisText: d,
                        ellipsisContent: p,
                        isEllipsis: f,
                      }),
                      n !== f && c && c(f));
                  }
                },
              },
              {
                key: "renderExpand",
                value: function (e) {
                  var t,
                    n = this.getEllipsis(),
                    r = n.expandable,
                    o = n.symbol,
                    i = this.state,
                    c = i.expanded,
                    s = i.isEllipsis;
                  return r && (e || (!c && s))
                    ? ((t = o || this.expandStr),
                      a.createElement(
                        "a",
                        {
                          key: "expand",
                          className: "".concat(this.getPrefixCls(), "-expand"),
                          onClick: this.onExpandClick,
                          "aria-label": this.expandStr,
                        },
                        t
                      ))
                    : null;
                },
              },
              {
                key: "renderEdit",
                value: function () {
                  var e = this.props.editable;
                  if (e) {
                    var t = e.icon,
                      n = e.tooltip,
                      r = Object(j.a)(n)[0] || this.editStr,
                      o = "string" === typeof r ? r : "";
                    return a.createElement(
                      _.a,
                      { key: "edit", title: !1 === n ? "" : r },
                      a.createElement(
                        A,
                        {
                          ref: this.setEditRef,
                          className: "".concat(this.getPrefixCls(), "-edit"),
                          onClick: this.onEditClick,
                          "aria-label": o,
                        },
                        t || a.createElement(k.a, { role: "button" })
                      )
                    );
                  }
                },
              },
              {
                key: "renderCopy",
                value: function () {
                  var e = this.state.copied,
                    t = this.props.copyable;
                  if (t) {
                    var n = this.getPrefixCls(),
                      r = t.tooltips,
                      o = t.icon,
                      i = Array.isArray(r) ? r : [r],
                      s = Array.isArray(o) ? o : [o],
                      l = e ? re(i[1], this.copiedStr) : re(i[0], this.copyStr),
                      u = e ? this.copiedStr : this.copyStr,
                      p = "string" === typeof l ? l : u;
                    return a.createElement(
                      _.a,
                      { key: "copy", title: l },
                      a.createElement(
                        A,
                        {
                          className: c()(
                            "".concat(n, "-copy"),
                            e && "".concat(n, "-copy-success")
                          ),
                          onClick: this.onCopyClick,
                          "aria-label": p,
                        },
                        e
                          ? re(s[1], a.createElement(w.a, null), !0)
                          : re(s[0], a.createElement(T, null), !0)
                      )
                    );
                  }
                },
              },
              {
                key: "renderEditInput",
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.className,
                    r = e.style,
                    o = this.context.direction,
                    i = this.getEditable(),
                    c = i.maxLength,
                    s = i.autoSize,
                    l = i.onEnd;
                  return a.createElement(J, {
                    value: "string" === typeof t ? t : "",
                    onSave: this.onEditChange,
                    onCancel: this.onEditCancel,
                    onEnd: l,
                    prefixCls: this.getPrefixCls(),
                    className: n,
                    style: r,
                    direction: o,
                    maxLength: c,
                    autoSize: s,
                  });
                },
              },
              {
                key: "renderOperations",
                value: function (e) {
                  return [
                    this.renderExpand(e),
                    this.renderEdit(),
                    this.renderCopy(),
                  ].filter(function (e) {
                    return e;
                  });
                },
              },
              {
                key: "renderContent",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.ellipsisContent,
                    i = t.isEllipsis,
                    s = t.expanded,
                    l = this.props,
                    u = l.component,
                    p = l.children,
                    d = l.className,
                    f = l.type,
                    b = l.disabled,
                    m = l.style,
                    O = ee(l, [
                      "component",
                      "children",
                      "className",
                      "type",
                      "disabled",
                      "style",
                    ]),
                    g = this.context.direction,
                    C = this.getEllipsis(),
                    j = C.rows,
                    x = C.suffix,
                    E = C.tooltip,
                    k = this.getPrefixCls(),
                    w = Object(h.a)(
                      O,
                      [
                        "prefixCls",
                        "editable",
                        "copyable",
                        "ellipsis",
                        "mark",
                        "code",
                        "delete",
                        "underline",
                        "strong",
                        "keyboard",
                        "italic",
                      ].concat(Object(y.a)(z.a))
                    ),
                    S = this.canUseCSSEllipsis(),
                    N = 1 === j && S,
                    P = j && j > 1 && S,
                    R = p;
                  if (j && i && !s && !S) {
                    var T = O.title,
                      L = T || "";
                    T ||
                      ("string" !== typeof p && "number" !== typeof p) ||
                      (L = String(p)),
                      (L = L.slice(String(n || "").length)),
                      (R = a.createElement(
                        a.Fragment,
                        null,
                        n,
                        a.createElement(
                          "span",
                          { title: L, "aria-hidden": "true" },
                          "..."
                        ),
                        x
                      )),
                      E &&
                        (R = a.createElement(
                          _.a,
                          { title: !0 === E ? p : E },
                          a.createElement("span", null, R)
                        ));
                  } else R = a.createElement(a.Fragment, null, p, x);
                  return (
                    (R = (function (e, t) {
                      var n = e.mark,
                        r = e.code,
                        o = e.underline,
                        i = e.delete,
                        c = e.strong,
                        s = e.keyboard,
                        l = e.italic,
                        u = t;
                      function p(e, t) {
                        e && (u = a.createElement(t, {}, u));
                      }
                      return (
                        p(c, "strong"),
                        p(o, "u"),
                        p(i, "del"),
                        p(r, "code"),
                        p(n, "mark"),
                        p(s, "kbd"),
                        p(l, "i"),
                        u
                      );
                    })(this.props, R)),
                    a.createElement(
                      I.a,
                      { componentName: "Text" },
                      function (t) {
                        var n,
                          i = t.edit,
                          s = t.copy,
                          l = t.copied,
                          p = t.expand;
                        return (
                          (e.editStr = i),
                          (e.copyStr = s),
                          (e.copiedStr = l),
                          (e.expandStr = p),
                          a.createElement(
                            M.a,
                            { onResize: e.resizeOnNextFrame, disabled: S },
                            a.createElement(
                              v,
                              Object(r.a)(
                                {
                                  className: c()(
                                    ((n = {}),
                                    Object(o.a)(
                                      n,
                                      "".concat(k, "-").concat(f),
                                      f
                                    ),
                                    Object(o.a)(
                                      n,
                                      "".concat(k, "-disabled"),
                                      b
                                    ),
                                    Object(o.a)(
                                      n,
                                      "".concat(k, "-ellipsis"),
                                      j
                                    ),
                                    Object(o.a)(
                                      n,
                                      "".concat(k, "-single-line"),
                                      1 === j
                                    ),
                                    Object(o.a)(
                                      n,
                                      "".concat(k, "-ellipsis-single-line"),
                                      N
                                    ),
                                    Object(o.a)(
                                      n,
                                      "".concat(k, "-ellipsis-multiple-line"),
                                      P
                                    ),
                                    n),
                                    d
                                  ),
                                  style: Object(r.a)(Object(r.a)({}, m), {
                                    WebkitLineClamp: P ? j : void 0,
                                  }),
                                  component: u,
                                  ref: e.contentRef,
                                  direction: g,
                                },
                                w
                              ),
                              R,
                              e.renderOperations()
                            )
                          )
                        );
                      }
                    )
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return this.getEditable().editing
                    ? this.renderEditInput()
                    : this.renderContent();
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (e) {
                  var t = e.children,
                    n = e.editable;
                  return (
                    Object(u.a)(
                      !n || "string" === typeof t,
                      "Typography",
                      "When `editable` is enabled, the `children` should use string."
                    ),
                    {}
                  );
                },
              },
            ]
          ),
          n
        );
      })(a.Component);
      (oe.contextType = l.b), (oe.defaultProps = { children: "" });
      var ae = oe,
        ie = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        ce = function (e) {
          var t = e.ellipsis,
            n = ie(e, ["ellipsis"]),
            o = a.useMemo(
              function () {
                return t && "object" === Object(b.a)(t)
                  ? Object(h.a)(t, ["expandable", "rows"])
                  : t;
              },
              [t]
            );
          return (
            Object(u.a)(
              "object" !== Object(b.a)(t) ||
                !t ||
                (!("expandable" in t) && !("rows" in t)),
              "Typography.Text",
              "`ellipsis` do not support `expandable` or `rows` props."
            ),
            a.createElement(
              ae,
              Object(r.a)({}, n, { ellipsis: o, component: "span" })
            )
          );
        },
        se = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        le = function (e, t) {
          var n = e.ellipsis,
            o = e.rel,
            i = se(e, ["ellipsis", "rel"]);
          Object(u.a)(
            "object" !== Object(b.a)(n),
            "Typography.Link",
            "`ellipsis` only supports boolean value."
          );
          var c = a.useRef(null);
          a.useImperativeHandle(t, function () {
            var e;
            return null === (e = c.current) || void 0 === e
              ? void 0
              : e.contentRef.current;
          });
          var s = Object(r.a)(Object(r.a)({}, i), {
            rel:
              void 0 === o && "_blank" === i.target ? "noopener noreferrer" : o,
          });
          return (
            delete s.navigate,
            a.createElement(
              ae,
              Object(r.a)({}, s, { ref: c, ellipsis: !!n, component: "a" })
            )
          );
        },
        ue = a.forwardRef(le),
        pe = n(124),
        de = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        fe = Object(pe.b)(1, 2, 3, 4, 5),
        ve = function (e) {
          var t,
            n = e.level,
            o = void 0 === n ? 1 : n,
            i = de(e, ["level"]);
          return (
            -1 !== fe.indexOf(o)
              ? (t = "h".concat(o))
              : (Object(u.a)(
                  !1,
                  "Typography.Title",
                  "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."
                ),
                (t = "h1")),
            a.createElement(ae, Object(r.a)({}, i, { component: t }))
          );
        },
        be = function (e) {
          return a.createElement(ae, Object(r.a)({}, e, { component: "div" }));
        },
        he = v;
      (he.Text = ce), (he.Link = ue), (he.Title = ve), (he.Paragraph = be);
      t.a = he;
    },
    95: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return He;
      }),
        n.d(t, "b", function () {
          return Fe;
        });
      var r = n(8),
        o = n(2),
        a = n(187),
        i = n(143),
        c = n(166),
        s = n(103),
        l = n(104),
        u = n(105),
        p = n(106),
        d = n(107),
        f = n(147),
        v = Object(r.a)({}, f.a.Modal);
      function b(e) {
        v = e ? Object(r.a)(Object(r.a)({}, v), e) : Object(r.a)({}, f.a.Modal);
      }
      var h = n(226),
        y = "internalMark",
        m = (function (e) {
          Object(u.a)(n, e);
          var t = Object(p.a)(n);
          function n(e) {
            var r;
            return (
              Object(s.a)(this, n),
              (r = t.call(this, e)),
              b(e.locale && e.locale.Modal),
              Object(d.a)(
                e._ANT_MARK__ === y,
                "LocaleProvider",
                "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale"
              ),
              r
            );
          }
          return (
            Object(l.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  b(this.props.locale && this.props.locale.Modal);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this.props.locale;
                  e.locale !== t && b(t && t.Modal);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  b();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.locale,
                    n = e.children;
                  return o.createElement(
                    h.a.Provider,
                    { value: Object(r.a)(Object(r.a)({}, t), { exist: !0 }) },
                    n
                  );
                },
              },
            ]),
            n
          );
        })(o.Component);
      m.defaultProps = { locale: {} };
      var O = n(149),
        g = n(160),
        C = n(127),
        j = n(93),
        x = n(92),
        E = n.n(x),
        k = n(101),
        w = n(98),
        S = n(35),
        N = n.n(S),
        P = n(128),
        R = (function (e) {
          Object(u.a)(n, e);
          var t = Object(p.a)(n);
          function n() {
            var e;
            Object(s.a)(this, n);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              ((e = t.call.apply(t, [this].concat(o))).closeTimer = null),
              (e.close = function (t) {
                t && t.stopPropagation(), e.clearCloseTimer();
                var n = e.props,
                  r = n.onClose,
                  o = n.noticeKey;
                r && r(o);
              }),
              (e.startCloseTimer = function () {
                e.props.duration &&
                  (e.closeTimer = window.setTimeout(function () {
                    e.close();
                  }, 1e3 * e.props.duration));
              }),
              (e.clearCloseTimer = function () {
                e.closeTimer &&
                  (clearTimeout(e.closeTimer), (e.closeTimer = null));
              }),
              e
            );
          }
          return (
            Object(l.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.startCloseTimer();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  (this.props.duration !== e.duration ||
                    this.props.updateMark !== e.updateMark ||
                    (this.props.visible !== e.visible && this.props.visible)) &&
                    this.restartCloseTimer();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.clearCloseTimer();
                },
              },
              {
                key: "restartCloseTimer",
                value: function () {
                  this.clearCloseTimer(), this.startCloseTimer();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.prefixCls,
                    a = t.className,
                    i = t.closable,
                    c = t.closeIcon,
                    s = t.style,
                    l = t.onClick,
                    u = t.children,
                    p = t.holder,
                    d = "".concat(n, "-notice"),
                    f = Object.keys(this.props).reduce(function (t, n) {
                      return (
                        ("data-" !== n.substr(0, 5) &&
                          "aria-" !== n.substr(0, 5) &&
                          "role" !== n) ||
                          (t[n] = e.props[n]),
                        t
                      );
                    }, {}),
                    v = o.createElement(
                      "div",
                      Object(r.a)(
                        {
                          className: E()(
                            d,
                            a,
                            Object(j.a)({}, "".concat(d, "-closable"), i)
                          ),
                          style: s,
                          onMouseEnter: this.clearCloseTimer,
                          onMouseLeave: this.startCloseTimer,
                          onClick: l,
                        },
                        f
                      ),
                      o.createElement(
                        "div",
                        { className: "".concat(d, "-content") },
                        u
                      ),
                      i
                        ? o.createElement(
                            "a",
                            {
                              tabIndex: 0,
                              onClick: this.close,
                              className: "".concat(d, "-close"),
                            },
                            c ||
                              o.createElement("span", {
                                className: "".concat(d, "-close-x"),
                              })
                          )
                        : null
                    );
                  return p ? N.a.createPortal(v, p) : v;
                },
              },
            ]),
            n
          );
        })(o.Component);
      R.defaultProps = { onClose: function () {}, duration: 1.5 };
      var T = n(102),
        M = n(94);
      function z(e) {
        var t = o.useRef({}),
          n = o.useState([]),
          a = Object(M.a)(n, 2),
          i = a[0],
          c = a[1];
        return [
          function (n) {
            var a = !0;
            e.add(n, function (e, n) {
              var i = n.key;
              if (e && (!t.current[i] || a)) {
                var s = o.createElement(R, Object(r.a)({}, n, { holder: e }));
                (t.current[i] = s),
                  c(function (e) {
                    var t = e.findIndex(function (e) {
                      return e.key === n.key;
                    });
                    if (-1 === t) return [].concat(Object(T.a)(e), [s]);
                    var r = Object(T.a)(e);
                    return (r[t] = s), r;
                  });
              }
              a = !1;
            });
          },
          o.createElement(o.Fragment, null, i),
        ];
      }
      var I = 0,
        L = Date.now();
      function D() {
        var e = I;
        return (I += 1), "rcNotification_".concat(L, "_").concat(e);
      }
      var Q = (function (e) {
        Object(u.a)(n, e);
        var t = Object(p.a)(n);
        function n() {
          var e;
          Object(s.a)(this, n);
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          return (
            ((e = t.call.apply(t, [this].concat(o))).state = { notices: [] }),
            (e.hookRefs = new Map()),
            (e.add = function (t, n) {
              var r = t.key || D(),
                o = Object(w.a)(Object(w.a)({}, t), {}, { key: r }),
                a = e.props.maxCount;
              e.setState(function (e) {
                var t = e.notices,
                  i = t
                    .map(function (e) {
                      return e.notice.key;
                    })
                    .indexOf(r),
                  c = t.concat();
                return (
                  -1 !== i
                    ? c.splice(i, 1, { notice: o, holderCallback: n })
                    : (a &&
                        t.length >= a &&
                        ((o.key = c[0].notice.key),
                        (o.updateMark = D()),
                        (o.userPassKey = r),
                        c.shift()),
                      c.push({ notice: o, holderCallback: n })),
                  { notices: c }
                );
              });
            }),
            (e.remove = function (t) {
              e.setState(function (e) {
                return {
                  notices: e.notices.filter(function (e) {
                    var n = e.notice,
                      r = n.key;
                    return (n.userPassKey || r) !== t;
                  }),
                };
              });
            }),
            (e.noticePropsMap = {}),
            e
          );
        }
        return (
          Object(l.a)(n, [
            {
              key: "getTransitionName",
              value: function () {
                var e = this.props,
                  t = e.prefixCls,
                  n = e.animation,
                  r = this.props.transitionName;
                return !r && n && (r = "".concat(t, "-").concat(n)), r;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.state.notices,
                  n = this.props,
                  a = n.prefixCls,
                  i = n.className,
                  c = n.closeIcon,
                  s = n.style,
                  l = [];
                return (
                  t.forEach(function (n, r) {
                    var o = n.notice,
                      i = n.holderCallback,
                      s = r === t.length - 1 ? o.updateMark : void 0,
                      u = o.key,
                      p = o.userPassKey,
                      d = Object(w.a)(
                        Object(w.a)(
                          Object(w.a)({ prefixCls: a, closeIcon: c }, o),
                          o.props
                        ),
                        {},
                        {
                          key: u,
                          noticeKey: p || u,
                          updateMark: s,
                          onClose: function (t) {
                            var n;
                            e.remove(t),
                              null === (n = o.onClose) ||
                                void 0 === n ||
                                n.call(o);
                          },
                          onClick: o.onClick,
                          children: o.content,
                        }
                      );
                    l.push(u),
                      (e.noticePropsMap[u] = { props: d, holderCallback: i });
                  }),
                  o.createElement(
                    "div",
                    { className: E()(a, i), style: s },
                    o.createElement(
                      P.a,
                      {
                        keys: l,
                        motionName: this.getTransitionName(),
                        onVisibleChanged: function (t, n) {
                          var r = n.key;
                          t || delete e.noticePropsMap[r];
                        },
                      },
                      function (t) {
                        var n = t.key,
                          i = t.className,
                          c = t.style,
                          s = t.visible,
                          l = e.noticePropsMap[n],
                          u = l.props,
                          p = l.holderCallback;
                        return p
                          ? o.createElement("div", {
                              key: n,
                              className: E()(i, "".concat(a, "-hook-holder")),
                              style: Object(w.a)({}, c),
                              ref: function (t) {
                                "undefined" !== typeof n &&
                                  (t
                                    ? (e.hookRefs.set(n, t), p(t, u))
                                    : e.hookRefs.delete(n));
                              },
                            })
                          : o.createElement(
                              R,
                              Object(r.a)({}, u, {
                                className: E()(
                                  i,
                                  null === u || void 0 === u
                                    ? void 0
                                    : u.className
                                ),
                                style: Object(w.a)(
                                  Object(w.a)({}, c),
                                  null === u || void 0 === u ? void 0 : u.style
                                ),
                                visible: s,
                              })
                            );
                      }
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(o.Component);
      (Q.newInstance = void 0),
        (Q.defaultProps = {
          prefixCls: "rc-notification",
          animation: "fade",
          style: { top: 65, left: "50%" },
        }),
        (Q.newInstance = function (e, t) {
          var n = e || {},
            a = n.getContainer,
            i = Object(k.a)(n, ["getContainer"]),
            c = document.createElement("div");
          a ? a().appendChild(c) : document.body.appendChild(c);
          var s = !1;
          N.a.render(
            o.createElement(
              Q,
              Object(r.a)({}, i, {
                ref: function (e) {
                  s ||
                    ((s = !0),
                    t({
                      notice: function (t) {
                        e.add(t);
                      },
                      removeNotice: function (t) {
                        e.remove(t);
                      },
                      component: e,
                      destroy: function () {
                        N.a.unmountComponentAtNode(c),
                          c.parentNode && c.parentNode.removeChild(c);
                      },
                      useNotification: function () {
                        return z(e);
                      },
                    }));
                },
              })
            ),
            c
          );
        });
      var A,
        H = Q,
        U = n(163),
        _ = n(269),
        F = n(162),
        B = n(213),
        K = n(96),
        V = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z",
                },
              },
            ],
          },
          name: "info-circle",
          theme: "filled",
        },
        q = n(97),
        W = function (e, t) {
          return o.createElement(
            q.a,
            Object(K.a)(Object(K.a)({}, e), {}, { ref: t, icon: V })
          );
        };
      W.displayName = "InfoCircleFilled";
      var J,
        $,
        X,
        G = 3,
        Y = 1,
        Z = "",
        ee = "move-up",
        te = !1,
        ne = !1;
      function re(e, t) {
        var n = e.prefixCls,
          r = Fe(),
          o = r.getPrefixCls,
          a = r.getRootPrefixCls,
          i = o("message", n || Z),
          c = a(e.rootPrefixCls, i);
        if (A) t({ prefixCls: i, rootPrefixCls: c, instance: A });
        else {
          var s = {
            prefixCls: i,
            transitionName: te ? ee : "".concat(c, "-").concat(ee),
            style: { top: J },
            getContainer: $,
            maxCount: X,
          };
          H.newInstance(s, function (e) {
            A
              ? t({ prefixCls: i, rootPrefixCls: c, instance: A })
              : ((A = e), t({ prefixCls: i, rootPrefixCls: c, instance: e }));
          });
        }
      }
      var oe = {
        info: o.forwardRef(W),
        success: B.a,
        error: F.a,
        warning: _.a,
        loading: U.a,
      };
      function ae(e, t) {
        var n,
          r = void 0 !== e.duration ? e.duration : G,
          a = oe[e.type],
          i = E()(
            "".concat(t, "-custom-content"),
            ((n = {}),
            Object(j.a)(n, "".concat(t, "-").concat(e.type), e.type),
            Object(j.a)(n, "".concat(t, "-rtl"), !0 === ne),
            n)
          );
        return {
          key: e.key,
          duration: r,
          style: e.style || {},
          className: e.className,
          content: o.createElement(
            "div",
            { className: i },
            e.icon || (a && o.createElement(a, null)),
            o.createElement("span", null, e.content)
          ),
          onClose: e.onClose,
          onClick: e.onClick,
        };
      }
      var ie,
        ce,
        se = {
          open: function (e) {
            var t = e.key || Y++,
              n = new Promise(function (n) {
                var o = function () {
                  return "function" === typeof e.onClose && e.onClose(), n(!0);
                };
                re(e, function (n) {
                  var a = n.prefixCls;
                  n.instance.notice(
                    ae(
                      Object(r.a)(Object(r.a)({}, e), { key: t, onClose: o }),
                      a
                    )
                  );
                });
              }),
              o = function () {
                A && A.removeNotice(t);
              };
            return (
              (o.then = function (e, t) {
                return n.then(e, t);
              }),
              (o.promise = n),
              o
            );
          },
          config: function (e) {
            void 0 !== e.top && ((J = e.top), (A = null)),
              void 0 !== e.duration && (G = e.duration),
              void 0 !== e.prefixCls && (Z = e.prefixCls),
              void 0 !== e.getContainer && ($ = e.getContainer),
              void 0 !== e.transitionName &&
                ((ee = e.transitionName), (A = null), (te = !0)),
              void 0 !== e.maxCount && ((X = e.maxCount), (A = null)),
              void 0 !== e.rtl && (ne = e.rtl);
          },
          destroy: function (e) {
            if (A)
              if (e) {
                (0, A.removeNotice)(e);
              } else {
                var t = A.destroy;
                t(), (A = null);
              }
          },
        };
      function le(e, t) {
        e[t] = function (n, o, a) {
          return (function (e) {
            return (
              "[object Object]" === Object.prototype.toString.call(e) &&
              !!e.content
            );
          })(n)
            ? e.open(Object(r.a)(Object(r.a)({}, n), { type: t }))
            : ("function" === typeof o && ((a = o), (o = void 0)),
              e.open({ content: n, duration: o, type: t, onClose: a }));
        };
      }
      ["success", "info", "warning", "error", "loading"].forEach(function (e) {
        return le(se, e);
      }),
        (se.warn = se.warning),
        (se.useMessage =
          ((ie = re),
          (ce = ae),
          function () {
            var e,
              t = null,
              n = z({
                add: function (e, n) {
                  null === t || void 0 === t || t.component.add(e, n);
                },
              }),
              a = Object(M.a)(n, 2),
              i = a[0],
              c = a[1],
              s = o.useRef({});
            return (
              (s.current.open = function (n) {
                var o = n.prefixCls,
                  a = e("message", o),
                  c = e(),
                  s = n.key || Y++,
                  l = new Promise(function (e) {
                    var o = function () {
                      return (
                        "function" === typeof n.onClose && n.onClose(), e(!0)
                      );
                    };
                    ie(
                      Object(r.a)(Object(r.a)({}, n), {
                        prefixCls: a,
                        rootPrefixCls: c,
                      }),
                      function (e) {
                        var a = e.prefixCls,
                          c = e.instance;
                        (t = c),
                          i(
                            ce(
                              Object(r.a)(Object(r.a)({}, n), {
                                key: s,
                                onClose: o,
                              }),
                              a
                            )
                          );
                      }
                    );
                  }),
                  u = function () {
                    t && t.removeNotice(s);
                  };
                return (
                  (u.then = function (e, t) {
                    return l.then(e, t);
                  }),
                  (u.promise = l),
                  u
                );
              }),
              ["success", "info", "warning", "error", "loading"].forEach(
                function (e) {
                  return le(s.current, e);
                }
              ),
              [
                s.current,
                o.createElement(g.a, { key: "holder" }, function (t) {
                  return (e = t.getPrefixCls), c;
                }),
              ]
            );
          }));
      var ue = se,
        pe = (n(158), n(148)),
        de = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
                },
              },
            ],
          },
          name: "check-circle",
          theme: "outlined",
        },
        fe = function (e, t) {
          return o.createElement(
            q.a,
            Object(K.a)(Object(K.a)({}, e), {}, { ref: t, icon: de })
          );
        };
      fe.displayName = "CheckCircleOutlined";
      var ve = o.forwardRef(fe),
        be = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
                },
              },
            ],
          },
          name: "close-circle",
          theme: "outlined",
        },
        he = function (e, t) {
          return o.createElement(
            q.a,
            Object(K.a)(Object(K.a)({}, e), {}, { ref: t, icon: be })
          );
        };
      he.displayName = "CloseCircleOutlined";
      var ye = o.forwardRef(he),
        me = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z",
                },
              },
            ],
          },
          name: "exclamation-circle",
          theme: "outlined",
        },
        Oe = function (e, t) {
          return o.createElement(
            q.a,
            Object(K.a)(Object(K.a)({}, e), {}, { ref: t, icon: me })
          );
        };
      Oe.displayName = "ExclamationCircleOutlined";
      var ge = o.forwardRef(Oe),
        Ce = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z",
                },
              },
            ],
          },
          name: "info-circle",
          theme: "outlined",
        },
        je = function (e, t) {
          return o.createElement(
            q.a,
            Object(K.a)(Object(K.a)({}, e), {}, { ref: t, icon: Ce })
          );
        };
      je.displayName = "InfoCircleOutlined";
      var xe,
        Ee,
        ke = {},
        we = 4.5,
        Se = 24,
        Ne = 24,
        Pe = "",
        Re = "topRight",
        Te = !1;
      function Me(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Se,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ne;
        switch (e) {
          case "topLeft":
            t = { left: 0, top: n, bottom: "auto" };
            break;
          case "topRight":
            t = { right: 0, top: n, bottom: "auto" };
            break;
          case "bottomLeft":
            t = { left: 0, top: "auto", bottom: r };
            break;
          default:
            t = { right: 0, top: "auto", bottom: r };
        }
        return t;
      }
      function ze(e, t) {
        var n = e.placement,
          r = void 0 === n ? Re : n,
          a = e.top,
          i = e.bottom,
          c = e.getContainer,
          s = void 0 === c ? xe : c,
          l = e.closeIcon,
          u = void 0 === l ? Ee : l,
          p = e.prefixCls,
          d = (0, Fe().getPrefixCls)("notification", p || Pe),
          f = "".concat(d, "-").concat(r),
          v = ke[f];
        if (v)
          Promise.resolve(v).then(function (e) {
            t({ prefixCls: "".concat(d, "-notice"), instance: e });
          });
        else {
          var b = o.createElement(
              "span",
              { className: "".concat(d, "-close-x") },
              u ||
                o.createElement(pe.a, {
                  className: "".concat(d, "-close-icon"),
                })
            ),
            h = E()(
              "".concat(d, "-").concat(r),
              Object(j.a)({}, "".concat(d, "-rtl"), !0 === Te)
            );
          ke[f] = new Promise(function (e) {
            H.newInstance(
              {
                prefixCls: d,
                className: h,
                style: Me(r, a, i),
                getContainer: s,
                closeIcon: b,
              },
              function (n) {
                e(n), t({ prefixCls: "".concat(d, "-notice"), instance: n });
              }
            );
          });
        }
      }
      var Ie = { success: ve, info: o.forwardRef(je), error: ye, warning: ge };
      function Le(e, t) {
        var n = e.duration,
          r = e.icon,
          a = e.type,
          i = e.description,
          c = e.message,
          s = e.btn,
          l = e.onClose,
          u = e.onClick,
          p = e.key,
          d = e.style,
          f = e.className,
          v = void 0 === n ? we : n,
          b = null;
        r
          ? (b = o.createElement(
              "span",
              { className: "".concat(t, "-icon") },
              e.icon
            ))
          : a &&
            (b = o.createElement(Ie[a] || null, {
              className: "".concat(t, "-icon ").concat(t, "-icon-").concat(a),
            }));
        var h =
          !i && b
            ? o.createElement("span", {
                className: "".concat(t, "-message-single-line-auto-margin"),
              })
            : null;
        return {
          content: o.createElement(
            "div",
            { className: b ? "".concat(t, "-with-icon") : "", role: "alert" },
            b,
            o.createElement(
              "div",
              { className: "".concat(t, "-message") },
              h,
              c
            ),
            o.createElement(
              "div",
              { className: "".concat(t, "-description") },
              i
            ),
            s
              ? o.createElement("span", { className: "".concat(t, "-btn") }, s)
              : null
          ),
          duration: v,
          closable: !0,
          onClose: l,
          onClick: u,
          key: p,
          style: d || {},
          className: E()(f, Object(j.a)({}, "".concat(t, "-").concat(a), !!a)),
        };
      }
      var De = {
        open: function (e) {
          ze(e, function (t) {
            var n = t.prefixCls;
            t.instance.notice(Le(e, n));
          });
        },
        close: function (e) {
          Object.keys(ke).forEach(function (t) {
            return Promise.resolve(ke[t]).then(function (t) {
              t.removeNotice(e);
            });
          });
        },
        config: function (e) {
          var t = e.duration,
            n = e.placement,
            r = e.bottom,
            o = e.top,
            a = e.getContainer,
            i = e.closeIcon,
            c = e.prefixCls;
          void 0 !== c && (Pe = c),
            void 0 !== t && (we = t),
            void 0 !== n ? (Re = n) : e.rtl && (Re = "topLeft"),
            void 0 !== r && (Ne = r),
            void 0 !== o && (Se = o),
            void 0 !== a && (xe = a),
            void 0 !== i && (Ee = i),
            void 0 !== e.rtl && (Te = e.rtl);
        },
        destroy: function () {
          Object.keys(ke).forEach(function (e) {
            Promise.resolve(ke[e]).then(function (e) {
              e.destroy();
            }),
              delete ke[e];
          });
        },
      };
      ["success", "info", "warning", "error"].forEach(function (e) {
        De[e] = function (t) {
          return De.open(Object(r.a)(Object(r.a)({}, t), { type: e }));
        };
      }),
        (De.warn = De.warning),
        (De.useNotification = (function (e, t) {
          return function () {
            var n,
              a = null,
              i = z({
                add: function (e, t) {
                  null === a || void 0 === a || a.component.add(e, t);
                },
              }),
              c = Object(M.a)(i, 2),
              s = c[0],
              l = c[1];
            var u = o.useRef({});
            return (
              (u.current.open = function (o) {
                var i = o.prefixCls,
                  c = n("notification", i);
                e(
                  Object(r.a)(Object(r.a)({}, o), { prefixCls: c }),
                  function (e) {
                    var n = e.prefixCls,
                      r = e.instance;
                    (a = r), s(t(o, n));
                  }
                );
              }),
              ["success", "info", "warning", "error"].forEach(function (e) {
                u.current[e] = function (t) {
                  return u.current.open(
                    Object(r.a)(Object(r.a)({}, t), { type: e })
                  );
                };
              }),
              [
                u.current,
                o.createElement(g.a, { key: "holder" }, function (e) {
                  return (n = e.getPrefixCls), l;
                }),
              ]
            );
          };
        })(ze, Le));
      var Qe,
        Ae = De,
        He = [
          "getTargetContainer",
          "getPopupContainer",
          "rootPrefixCls",
          "getPrefixCls",
          "renderEmpty",
          "csp",
          "autoInsertSpaceInButton",
          "locale",
          "pageHeader",
        ],
        Ue = [
          "getTargetContainer",
          "getPopupContainer",
          "renderEmpty",
          "pageHeader",
          "input",
          "form",
        ];
      function _e() {
        return Qe || "ant";
      }
      var Fe = function () {
          return {
            getPrefixCls: function (e, t) {
              return t || (e ? "".concat(_e(), "-").concat(e) : _e());
            },
            getRootPrefixCls: function (e, t) {
              return (
                e ||
                Qe ||
                (t && t.includes("-") ? t.replace(/^(.*)-[^-]*$/, "$1") : _e())
              );
            },
          };
        },
        Be = function (e) {
          var t,
            n,
            s = e.children,
            l = e.csp,
            u = e.autoInsertSpaceInButton,
            p = e.form,
            d = e.locale,
            v = e.componentSize,
            b = e.direction,
            h = e.space,
            O = e.virtual,
            j = e.dropdownMatchSelectWidth,
            x = e.legacyLocale,
            E = e.parentContext,
            k = e.iconPrefixCls,
            w = o.useCallback(
              function (t, n) {
                var r = e.prefixCls;
                if (n) return n;
                var o = r || E.getPrefixCls("");
                return t ? "".concat(o, "-").concat(t) : o;
              },
              [E.getPrefixCls, e.prefixCls]
            ),
            S = Object(r.a)(Object(r.a)({}, E), {
              csp: l,
              autoInsertSpaceInButton: u,
              locale: d || x,
              direction: b,
              space: h,
              virtual: O,
              dropdownMatchSelectWidth: j,
              getPrefixCls: w,
            });
          Ue.forEach(function (t) {
            var n = e[t];
            n && (S[t] = n);
          });
          var N = Object(c.a)(
              function () {
                return S;
              },
              S,
              function (e, t) {
                var n = Object.keys(e),
                  r = Object.keys(t);
                return (
                  n.length !== r.length ||
                  n.some(function (n) {
                    return e[n] !== t[n];
                  })
                );
              }
            ),
            P = o.useMemo(
              function () {
                return { prefixCls: k, csp: l };
              },
              [k]
            ),
            R = s,
            T = {};
          return (
            d &&
              (T =
                (null === (t = d.Form) || void 0 === t
                  ? void 0
                  : t.defaultValidateMessages) ||
                (null === (n = f.a.Form) || void 0 === n
                  ? void 0
                  : n.defaultValidateMessages) ||
                {}),
            p &&
              p.validateMessages &&
              (T = Object(r.a)(Object(r.a)({}, T), p.validateMessages)),
            Object.keys(T).length > 0 &&
              (R = o.createElement(i.b, { validateMessages: T }, s)),
            d && (R = o.createElement(m, { locale: d, _ANT_MARK__: y }, R)),
            k && (R = o.createElement(a.a.Provider, { value: P }, R)),
            v && (R = o.createElement(C.a, { size: v }, R)),
            o.createElement(g.b.Provider, { value: N }, R)
          );
        },
        Ke = function (e) {
          return (
            o.useEffect(
              function () {
                e.direction &&
                  (ue.config({ rtl: "rtl" === e.direction }),
                  Ae.config({ rtl: "rtl" === e.direction }));
              },
              [e.direction]
            ),
            o.createElement(O.a, null, function (t, n, a) {
              return o.createElement(g.a, null, function (t) {
                return o.createElement(
                  Be,
                  Object(r.a)({ parentContext: t, legacyLocale: a }, e)
                );
              });
            })
          );
        };
      (Ke.ConfigContext = g.b),
        (Ke.SizeContext = C.b),
        (Ke.config = function (e) {
          void 0 !== e.prefixCls && (Qe = e.prefixCls);
        });
    },
  },
]);
//# sourceMappingURL=2.a90e3f23.chunk.js.map
