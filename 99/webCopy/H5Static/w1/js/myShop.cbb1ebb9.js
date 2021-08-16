(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["myShop"], {
    "057f": function (t, e, r) {
      var n = r("fc6a"),
        a = r("241c").f,
        i = {}.toString,
        o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        c = function (t) {
          try {
            return a(t)
          } catch (e) {
            return o.slice()
          }
        };
      t.exports.f = function (t) {
        return o && "[object Window]" == i.call(t) ? c(t) : a(n(t))
      }
    },
    "159b": function (t, e, r) {
      var n = r("da84"),
        a = r("fdbc"),
        i = r("17c2"),
        o = r("9112");
      for (var c in a) {
        var s = n[c],
          u = s && s.prototype;
        if (u && u.forEach !== i) try {
          o(u, "forEach", i)
        } catch (d) {
          u.forEach = i
        }
      }
    },
    "17c2": function (t, e, r) {
      "use strict";
      var n = r("b727").forEach,
        a = r("a640"),
        i = a("forEach");
      t.exports = i ? [].forEach : function (t) {
        return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    },
    "17d3": function (t, e) {
      t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACuklEQVR4Xu2a64uNURSHn/mfaFwyLjEkmuSaiEluSZIkSSRJkiQJSSJJLkkzyS1miCG++kt88kmrfJh0zt7rnFlr73XOed+v737X/v2evfY+++y1hxjwZ2jA/dMAaDJgwAk0U2DAE6BnFsEDwNZ/gzUFnLUauF6YAmL2zH+GtwBPLCBEB3AOON3CqJgXCHN+IgM4D5xq4/AmcHDO7iHsGnABOJkwuBz42K8ALgInEubM5r/0EW0KXAKOlzIfDcBl4FhJ85EAXAGOljYfBcBV4EgN8xEAXAMO1zJfG8B14FBN8zUB3MhsZDYBzyx+53MxavwMyi5uf0LYBuBFTrjV+9IAbgN7E+LHgJdW5jRxSgK4A+xJiFoHTGpEW7YpBeAuMJ4QvhZ4ZWlMG6sEgHvAroSg1cAbrWDrdt4A7gM7E6JXAe+sTXUSzxPAA2BHQswK4EMnYj3aegF4CGxPCF4KTHsY6jSmB4BHwLaEkCXA506FerW3BvA4c1a3CPjqZaabuJYA9gG3EiIWAN+6Een5jSUA2cGtbyN2PvDD00i3sS0ByIq+rI2QecDPbkV6fmcJQIoXqYpNSAiWAGSgWlVxZg9gOAjWAHoOggcADYQwi6IXAA2EYeC75wKnie0JQPrPLYwLgRmNUK823gA0mbAY+OJlMBe3BAANhBHgU06sx/tSADQQZBMltz+KPiUBaNaE4mcEpQFoMmEl8L5UGtQAoIEwCrwtAaEWAA2ENcBrbwg1AWjWBPfj8toANJkgZwwTXpkQAYAGglvJLAoADQSXomkkABoIG4HnltMhGgANhM3AUysIEQHkIPwGpJ5o8gcqKoAcBKk8pcpu6gSJDCC1T+j7u8KzR7DVQWtf3xVulb67AdkV/gHkIvUvdY5nGkafAlY+28ZpALgjDt5BkwHBB8hdXpMB7oiDd/AXxZBmQfRuCOMAAAAASUVORK5CYII="
    },
    2909: function (t, e, r) {
      "use strict";

      function n(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
      }

      function a(t) {
        if (Array.isArray(t)) return n(t)
      }
      r.d(e, "a", (function () {
        return s
      }));
      r("a4d3"), r("e01a"), r("d3b7"), r("d28b"), r("3ca3"), r("ddb0"), r("a630");

      function i(t) {
        if ("undefined" !== typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
      }
      r("fb6a"), r("b0c0");

      function o(t, e) {
        if (t) {
          if ("string" === typeof t) return n(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, e) : void 0
        }
      }

      function c() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }

      function s(t) {
        return a(t) || i(t) || o(t) || c()
      }
    },
    "2bdd": function (t, e, r) {
      "use strict";
      var n = r("d282"),
        a = r("02de"),
        i = r("a8c1"),
        o = r("5fbe"),
        c = r("543e"),
        s = Object(n["a"])("list"),
        u = s[0],
        d = s[1],
        f = s[2];
      e["a"] = u({
        mixins: [Object(o["a"])((function (t) {
          this.scroller || (this.scroller = Object(i["d"])(this.$el)), t(this.scroller, "scroll", this.check)
        }))],
        model: {
          prop: "loading"
        },
        props: {
          error: Boolean,
          loading: Boolean,
          finished: Boolean,
          errorText: String,
          loadingText: String,
          finishedText: String,
          immediateCheck: {
            type: Boolean,
            default: !0
          },
          offset: {
            type: [Number, String],
            default: 300
          },
          direction: {
            type: String,
            default: "down"
          }
        },
        data: function () {
          return {
            innerLoading: this.loading
          }
        },
        updated: function () {
          this.innerLoading = this.loading
        },
        mounted: function () {
          this.immediateCheck && this.check()
        },
        watch: {
          loading: "check",
          finished: "check"
        },
        methods: {
          check: function () {
            var t = this;
            this.$nextTick((function () {
              if (!(t.innerLoading || t.finished || t.error)) {
                var e, r = t.$el,
                  n = t.scroller,
                  i = t.offset,
                  o = t.direction;
                e = n.getBoundingClientRect ? n.getBoundingClientRect() : {
                  top: 0,
                  bottom: n.innerHeight
                };
                var c = e.bottom - e.top;
                if (!c || Object(a["a"])(r)) return !1;
                var s = !1,
                  u = t.$refs.placeholder.getBoundingClientRect();
                s = "up" === o ? e.top - u.top <= i : u.bottom - e.bottom <= i, s && (t.innerLoading = !0, t.$emit("input", !0), t.$emit("load"))
              }
            }))
          },
          clickErrorText: function () {
            this.$emit("update:error", !1), this.check()
          },
          genLoading: function () {
            var t = this.$createElement;
            if (this.innerLoading && !this.finished) return t("div", {
              key: "loading",
              class: d("loading")
            }, [this.slots("loading") || t(c["a"], {
              attrs: {
                size: "16"
              }
            }, [this.loadingText || f("loading")])])
          },
          genFinishedText: function () {
            var t = this.$createElement;
            if (this.finished) {
              var e = this.slots("finished") || this.finishedText;
              if (e) return t("div", {
                class: d("finished-text")
              }, [e])
            }
          },
          genErrorText: function () {
            var t = this.$createElement;
            if (this.error) {
              var e = this.slots("error") || this.errorText;
              if (e) return t("div", {
                on: {
                  click: this.clickErrorText
                },
                class: d("error-text")
              }, [e])
            }
          }
        },
        render: function () {
          var t = arguments[0],
            e = t("div", {
              ref: "placeholder",
              key: "placeholder",
              class: d("placeholder")
            });
          return t("div", {
            class: d(),
            attrs: {
              role: "feed",
              "aria-busy": this.innerLoading
            }
          }, ["down" === this.direction ? this.slots() : e, this.genLoading(), this.genFinishedText(), this.genErrorText(), "up" === this.direction ? this.slots() : e])
        }
      })
    },
    "466d": function (t, e, r) {
      "use strict";
      var n = r("d784"),
        a = r("825a"),
        i = r("50c4"),
        o = r("1d80"),
        c = r("8aa5"),
        s = r("14c3");
      n("match", (function (t, e, r) {
        return [function (e) {
          var r = o(this),
            n = void 0 == e ? void 0 : e[t];
          return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r))
        }, function (t) {
          var n = r(e, this, t);
          if (n.done) return n.value;
          var o = a(this),
            u = String(t);
          if (!o.global) return s(o, u);
          var d = o.unicode;
          o.lastIndex = 0;
          var f, l = [],
            p = 0;
          while (null !== (f = s(o, u))) {
            var h = String(f[0]);
            l[p] = h, "" === h && (o.lastIndex = c(u, i(o.lastIndex), d)), p++
          }
          return 0 === p ? null : l
        }]
      }))
    },
    "4de4": function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        a = r("b727").filter,
        i = r("1dde"),
        o = i("filter");
      n({
        target: "Array",
        proto: !0,
        forced: !o
      }, {
        filter: function (t) {
          return a(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
      })
    },
    "4df4": function (t, e, r) {
      "use strict";
      var n = r("0366"),
        a = r("7b0b"),
        i = r("9bdd"),
        o = r("e95a"),
        c = r("50c4"),
        s = r("8418"),
        u = r("35a1");
      t.exports = function (t) {
        var e, r, d, f, l, p, h = a(t),
          g = "function" == typeof this ? this : Array,
          v = arguments.length,
          m = v > 1 ? arguments[1] : void 0,
          b = void 0 !== m,
          y = u(h),
          A = 0;
        if (b && (m = n(m, v > 2 ? arguments[2] : void 0, 2)), void 0 == y || g == Array && o(y))
          for (e = c(h.length), r = new g(e); e > A; A++) p = b ? m(h[A], A) : h[A], s(r, A, p);
        else
          for (f = y.call(h), l = f.next, r = new g; !(d = l.call(f)).done; A++) p = b ? i(f, m, [d.value, A], !0) : d.value, s(r, A, p);
        return r.length = A, r
      }
    },
    "543ea": function (t, e, r) {
      "use strict";
      r("99e1")
    },
    5530: function (t, e, r) {
      "use strict";
      r.d(e, "a", (function () {
        return i
      }));
      r("b64b"), r("a4d3"), r("4de4"), r("e439"), r("159b"), r("dbb4");

      function n(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }

      function a(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? a(Object(r), !0).forEach((function (e) {
            n(t, e, r[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return t
      }
    },
    "746f": function (t, e, r) {
      var n = r("428f"),
        a = r("5135"),
        i = r("e538"),
        o = r("9bf2").f;
      t.exports = function (t) {
        var e = n.Symbol || (n.Symbol = {});
        a(e, t) || o(e, t, {
          value: i.f(t)
        })
      }
    },
    "7da9": function (t, e, r) {},
    "7db0": function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        a = r("b727").find,
        i = r("44d2"),
        o = "find",
        c = !0;
      o in [] && Array(1)[o]((function () {
        c = !1
      })), n({
        target: "Array",
        proto: !0,
        forced: c
      }, {
        find: function (t) {
          return a(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
      }), i(o)
    },
    "99e1": function (t, e, r) {},
    "9bdd": function (t, e, r) {
      var n = r("825a"),
        a = r("2a62");
      t.exports = function (t, e, r, i) {
        try {
          return i ? e(n(r)[0], r[1]) : e(r)
        } catch (o) {
          throw a(t), o
        }
      }
    },
    a434: function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        a = r("23cb"),
        i = r("a691"),
        o = r("50c4"),
        c = r("7b0b"),
        s = r("65f0"),
        u = r("8418"),
        d = r("1dde"),
        f = d("splice"),
        l = Math.max,
        p = Math.min,
        h = 9007199254740991,
        g = "Maximum allowed length exceeded";
      n({
        target: "Array",
        proto: !0,
        forced: !f
      }, {
        splice: function (t, e) {
          var r, n, d, f, v, m, b = c(this),
            y = o(b.length),
            A = a(t, y),
            O = arguments.length;
          if (0 === O ? r = n = 0 : 1 === O ? (r = 0, n = y - A) : (r = O - 2, n = p(l(i(e), 0), y - A)), y + r - n > h) throw TypeError(g);
          for (d = s(b, n), f = 0; f < n; f++) v = A + f, v in b && u(d, f, b[v]);
          if (d.length = n, r < n) {
            for (f = A; f < y - n; f++) v = f + n, m = f + r, v in b ? b[m] = b[v] : delete b[m];
            for (f = y; f > y - n + r; f--) delete b[f - 1]
          } else if (r > n)
            for (f = y - n; f > A; f--) v = f + n - 1, m = f + r - 1, v in b ? b[m] = b[v] : delete b[m];
          for (f = 0; f < r; f++) b[f + A] = arguments[f + 2];
          return b.length = y - n + r, d
        }
      })
    },
    a4d3: function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        a = r("da84"),
        i = r("d066"),
        o = r("c430"),
        c = r("83ab"),
        s = r("4930"),
        u = r("fdbf"),
        d = r("d039"),
        f = r("5135"),
        l = r("e8b5"),
        p = r("861d"),
        h = r("825a"),
        g = r("7b0b"),
        v = r("fc6a"),
        m = r("c04e"),
        b = r("5c6c"),
        y = r("7c73"),
        A = r("df75"),
        O = r("241c"),
        w = r("057f"),
        k = r("7418"),
        x = r("06cf"),
        S = r("9bf2"),
        I = r("d1e7"),
        j = r("9112"),
        P = r("6eeb"),
        T = r("5692"),
        C = r("f772"),
        E = r("d012"),
        L = r("90e3"),
        B = r("b622"),
        G = r("e538"),
        _ = r("746f"),
        K = r("d44e"),
        M = r("69f3"),
        D = r("b727").forEach,
        N = C("hidden"),
        R = "Symbol",
        $ = "prototype",
        J = B("toPrimitive"),
        H = M.set,
        U = M.getterFor(R),
        W = Object[$],
        Y = a.Symbol,
        z = i("JSON", "stringify"),
        F = x.f,
        Q = S.f,
        X = w.f,
        V = I.f,
        Z = T("symbols"),
        q = T("op-symbols"),
        tt = T("string-to-symbol-registry"),
        et = T("symbol-to-string-registry"),
        rt = T("wks"),
        nt = a.QObject,
        at = !nt || !nt[$] || !nt[$].findChild,
        it = c && d((function () {
          return 7 != y(Q({}, "a", {
            get: function () {
              return Q(this, "a", {
                value: 7
              }).a
            }
          })).a
        })) ? function (t, e, r) {
          var n = F(W, e);
          n && delete W[e], Q(t, e, r), n && t !== W && Q(W, e, n)
        } : Q,
        ot = function (t, e) {
          var r = Z[t] = y(Y[$]);
          return H(r, {
            type: R,
            tag: t,
            description: e
          }), c || (r.description = e), r
        },
        ct = u ? function (t) {
          return "symbol" == typeof t
        } : function (t) {
          return Object(t) instanceof Y
        },
        st = function (t, e, r) {
          t === W && st(q, e, r), h(t);
          var n = m(e, !0);
          return h(r), f(Z, n) ? (r.enumerable ? (f(t, N) && t[N][n] && (t[N][n] = !1), r = y(r, {
            enumerable: b(0, !1)
          })) : (f(t, N) || Q(t, N, b(1, {})), t[N][n] = !0), it(t, n, r)) : Q(t, n, r)
        },
        ut = function (t, e) {
          h(t);
          var r = v(e),
            n = A(r).concat(ht(r));
          return D(n, (function (e) {
            c && !ft.call(r, e) || st(t, e, r[e])
          })), t
        },
        dt = function (t, e) {
          return void 0 === e ? y(t) : ut(y(t), e)
        },
        ft = function (t) {
          var e = m(t, !0),
            r = V.call(this, e);
          return !(this === W && f(Z, e) && !f(q, e)) && (!(r || !f(this, e) || !f(Z, e) || f(this, N) && this[N][e]) || r)
        },
        lt = function (t, e) {
          var r = v(t),
            n = m(e, !0);
          if (r !== W || !f(Z, n) || f(q, n)) {
            var a = F(r, n);
            return !a || !f(Z, n) || f(r, N) && r[N][n] || (a.enumerable = !0), a
          }
        },
        pt = function (t) {
          var e = X(v(t)),
            r = [];
          return D(e, (function (t) {
            f(Z, t) || f(E, t) || r.push(t)
          })), r
        },
        ht = function (t) {
          var e = t === W,
            r = X(e ? q : v(t)),
            n = [];
          return D(r, (function (t) {
            !f(Z, t) || e && !f(W, t) || n.push(Z[t])
          })), n
        };
      if (s || (Y = function () {
          if (this instanceof Y) throw TypeError("Symbol is not a constructor");
          var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            e = L(t),
            r = function (t) {
              this === W && r.call(q, t), f(this, N) && f(this[N], e) && (this[N][e] = !1), it(this, e, b(1, t))
            };
          return c && at && it(W, e, {
            configurable: !0,
            set: r
          }), ot(e, t)
        }, P(Y[$], "toString", (function () {
          return U(this).tag
        })), P(Y, "withoutSetter", (function (t) {
          return ot(L(t), t)
        })), I.f = ft, S.f = st, x.f = lt, O.f = w.f = pt, k.f = ht, G.f = function (t) {
          return ot(B(t), t)
        }, c && (Q(Y[$], "description", {
          configurable: !0,
          get: function () {
            return U(this).description
          }
        }), o || P(W, "propertyIsEnumerable", ft, {
          unsafe: !0
        }))), n({
          global: !0,
          wrap: !0,
          forced: !s,
          sham: !s
        }, {
          Symbol: Y
        }), D(A(rt), (function (t) {
          _(t)
        })), n({
          target: R,
          stat: !0,
          forced: !s
        }, {
          for: function (t) {
            var e = String(t);
            if (f(tt, e)) return tt[e];
            var r = Y(e);
            return tt[e] = r, et[r] = e, r
          },
          keyFor: function (t) {
            if (!ct(t)) throw TypeError(t + " is not a symbol");
            if (f(et, t)) return et[t]
          },
          useSetter: function () {
            at = !0
          },
          useSimple: function () {
            at = !1
          }
        }), n({
          target: "Object",
          stat: !0,
          forced: !s,
          sham: !c
        }, {
          create: dt,
          defineProperty: st,
          defineProperties: ut,
          getOwnPropertyDescriptor: lt
        }), n({
          target: "Object",
          stat: !0,
          forced: !s
        }, {
          getOwnPropertyNames: pt,
          getOwnPropertySymbols: ht
        }), n({
          target: "Object",
          stat: !0,
          forced: d((function () {
            k.f(1)
          }))
        }, {
          getOwnPropertySymbols: function (t) {
            return k.f(g(t))
          }
        }), z) {
        var gt = !s || d((function () {
          var t = Y();
          return "[null]" != z([t]) || "{}" != z({
            a: t
          }) || "{}" != z(Object(t))
        }));
        n({
          target: "JSON",
          stat: !0,
          forced: gt
        }, {
          stringify: function (t, e, r) {
            var n, a = [t],
              i = 1;
            while (arguments.length > i) a.push(arguments[i++]);
            if (n = e, (p(e) || void 0 !== t) && !ct(t)) return l(e) || (e = function (t, e) {
              if ("function" == typeof n && (e = n.call(this, t, e)), !ct(e)) return e
            }), a[1] = e, z.apply(null, a)
          }
        })
      }
      Y[$][J] || j(Y[$], J, Y[$].valueOf), K(Y, R), E[N] = !0
    },
    a630: function (t, e, r) {
      var n = r("23e7"),
        a = r("4df4"),
        i = r("1c7e"),
        o = !i((function (t) {
          Array.from(t)
        }));
      n({
        target: "Array",
        stat: !0,
        forced: o
      }, {
        from: a
      })
    },
    b0c0: function (t, e, r) {
      var n = r("83ab"),
        a = r("9bf2").f,
        i = Function.prototype,
        o = i.toString,
        c = /^\s*function ([^ (]*)/,
        s = "name";
      n && !(s in i) && a(i, s, {
        configurable: !0,
        get: function () {
          try {
            return o.call(this).match(c)[1]
          } catch (t) {
            return ""
          }
        }
      })
    },
    c062: function (t, e, r) {
      "use strict";
      r("7da9")
    },
    d28b: function (t, e, r) {
      var n = r("746f");
      n("iterator")
    },
    dbb4: function (t, e, r) {
      var n = r("23e7"),
        a = r("83ab"),
        i = r("56ef"),
        o = r("fc6a"),
        c = r("06cf"),
        s = r("8418");
      n({
        target: "Object",
        stat: !0,
        sham: !a
      }, {
        getOwnPropertyDescriptors: function (t) {
          var e, r, n = o(t),
            a = c.f,
            u = i(n),
            d = {},
            f = 0;
          while (u.length > f) r = a(n, e = u[f++]), void 0 !== r && s(d, e, r);
          return d
        }
      })
    },
    df09: function (t, e, r) {
      "use strict";
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("div", {
            staticClass: "no-date"
          }, [r("img", {
            attrs: {
              src: t.imgSrc("nodate.png"),
              mode: ""
            }
          }), r("div", [t._v("暂无数据哟~")])])
        },
        a = [],
        i = r("da71"),
        o = {
          computed: {
            imgSrc: function () {
              return function (t) {
                return i["d"] + t
              }
            }
          }
        },
        c = o,
        s = (r("543ea"), r("2877")),
        u = Object(s["a"])(c, n, a, !1, null, null, null);
      e["a"] = u.exports
    },
    e01a: function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        a = r("83ab"),
        i = r("da84"),
        o = r("5135"),
        c = r("861d"),
        s = r("9bf2").f,
        u = r("e893"),
        d = i.Symbol;
      if (a && "function" == typeof d && (!("description" in d.prototype) || void 0 !== d().description)) {
        var f = {},
          l = function () {
            var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
              e = this instanceof l ? new d(t) : void 0 === t ? d() : d(t);
            return "" === t && (f[e] = !0), e
          };
        u(l, d);
        var p = l.prototype = d.prototype;
        p.constructor = l;
        var h = p.toString,
          g = "Symbol(test)" == String(d("test")),
          v = /^Symbol\((.*)\)[^)]+$/;
        s(p, "description", {
          configurable: !0,
          get: function () {
            var t = c(this) ? this.valueOf() : this,
              e = h.call(t);
            if (o(f, t)) return "";
            var r = g ? e.slice(7, -1) : e.replace(v, "$1");
            return "" === r ? void 0 : r
          }
        }), n({
          global: !0,
          forced: !0
        }, {
          Symbol: l
        })
      }
    },
    e439: function (t, e, r) {
      var n = r("23e7"),
        a = r("d039"),
        i = r("fc6a"),
        o = r("06cf").f,
        c = r("83ab"),
        s = a((function () {
          o(1)
        })),
        u = !c || s;
      n({
        target: "Object",
        stat: !0,
        forced: u,
        sham: !c
      }, {
        getOwnPropertyDescriptor: function (t, e) {
          return o(i(t), e)
        }
      })
    },
    e538: function (t, e, r) {
      var n = r("b622");
      e.f = n
    },
    f03c: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [n("div", {
            staticClass: "top-1"
          }, [n("img", {
            attrs: {
              src: r("17d3"),
              mode: ""
            },
            on: {
              click: t.back
            }
          }), t._v(" " + t._s(t.title) + " ")]), n("div", {
            staticClass: "nav-top",
            style: {
              display: t.teamList.length < 4 ? "flex" : "unset"
            }
          }, t._l(t.teamList, (function (e) {
            return n("div", {
              key: e.priceAreaId,
              class: {
                active: e.priceAreaId == t.activeId
              },
              style: {
                flex: t.teamList.length < 4 ? 1 : "unset"
              },
              on: {
                click: function (r) {
                  return t.getTypeList(e.priceAreaId)
                }
              }
            }, [t._v(t._s(e.price) + "专区")])
          })), 0), n("list", {
            staticClass: "my-shop",
            on: {
              load: t.scrollChange
            }
          }, [n("div", {
            staticClass: "my-shop-top",
            staticStyle: {
              "font-size": "13px",
              padding: "1rem 0.5rem"
            }
          }, [t._v("今日已做任务"), n("span", [t._v(" " + t._s(t.todayAreaTaskCount) + " ")]), t._v("次；累计已完成订单"), n("span", [t._v(" " + t._s(t.totalAreaOrderWinningCount) + " ")]), t._v("条")]), t._l(t.list, (function (e, r) {
            return n("div", {
              key: r,
              staticClass: "shop-item"
            }, [n("div", {
              staticClass: "shop-1"
            }, [n("div", {
              staticClass: "title"
            }, [t._v("订单号：" + t._s(e.OrderNo) + t._s(6 === e.OrderStatus ? "(已关闭)" : ""))]), n("div", {
              staticClass: "buy-type",
              class: {
                active1: 0 === e.OrderStatus || 1 !== e.ManyPGLotteryStatus
              }
            }, [t._v(" " + t._s(0 === e.OrderStatus ? "待支付" : 1 === e.ManyPGLotteryStatus ? "已完成" + (1 === e.ManyPGReturnStatus ? "，已返还" : "，未返还") : "待完成") + " ")])]), n("div", {
              staticClass: "shop-2"
            }, [n("div", {
              staticClass: "zhuanqu"
            }, [t._v(t._s(e.PriceAreaName) + "专区")]), n("img", {
              staticClass: "img",
              attrs: {
                src: e.ProductMainImage ? e.ProductMainImage + "!100r70" : "",
                mode: ""
              }
            }), n("div", {
              staticClass: "title"
            }, [t._v(t._s(e.ProductTitle))])]), n("div", {
              staticClass: "shop-3"
            }, [n("div", {
              staticClass: "title"
            }, [t._v(" 已做任务" + t._s(1 !== e.ManyPGLotteryStatus ? e.UserTaskNum : e.UserTaskNum + 1) + "次，累计奖励￥" + t._s(e.UserTaskReturnPrice) + " ")]), n("div", {
              staticClass: "price"
            }, [t._v("实付款:￥" + t._s(e.TotalPrice))])]), n("div", {
              staticClass: "shop-4"
            }, [6 !== e.OrderStatus && 0 !== e.OrderStatus && 0 === e.ManyPGLotteryStatus ? n("div", {
              staticClass: "active",
              on: {
                click: function (r) {
                  return t.toGame(e)
                }
              }
            }, [t._v("做任务")]) : t._e(), 0 === e.OrderStatus ? n("div", {
              on: {
                click: function (r) {
                  return t.cancelOrder(e)
                }
              }
            }, [t._v("取消订单")]) : t._e(), 0 === e.OrderStatus ? n("div", {
              staticClass: "active",
              on: {
                click: function (r) {
                  return t.goPay(e)
                }
              }
            }, [t._v("去支付")]) : t._e(), 0 !== e.OrderStatus ? n("div", {
              on: {
                click: function (r) {
                  return t.toOrderDetail(e)
                }
              }
            }, [t._v("查看详情")]) : t._e()])])
          })), 0 === t.list.length ? n("div", {
            staticStyle: {
              "padding-top": "50%"
            }
          }, [n("no-data", {
            attrs: {
              color: "#999999",
              title: "参加团购才能做任务哟~"
            }
          }), n("div", {
            staticClass: "joinBuy",
            on: {
              click: t.joinBuy
            }
          }, [t._v("参加团购")])], 1) : t._e()], 2)], 1)
        },
        a = [],
        i = r("2909"),
        o = r("1da1"),
        c = r("5530"),
        s = (r("96cf"), r("7db0"), r("ac1f"), r("466d"), r("a434"), r("99af"), r("2bdd")),
        u = r("d399"),
        d = r("2241"),
        f = r("df09"),
        l = r("c97a"),
        p = r("2f62"),
        h = {
          name: "myShop",
          components: {
            NoData: f["a"],
            List: s["a"]
          },
          data: function () {
            return {
              activeId: "",
              PageSize: 20,
              pageIndex: 1,
              list: [],
              ajaxKey: !0,
              advId: null,
              mchId: null,
              taskToken: "",
              PriceAreaName: "",
              title: "",
              teamList: "",
              areaId: "",
              manyPGLotteryStatus: "",
              totalAreaOrderWinningCount: "",
              u: "",
              gameKey: !1,
              toGameKey: !1,
              todayAreaTaskCount: 0
            }
          },
          created: function () {
            var t = this.$route.query;
            this.manyPGLotteryStatus = t.type, this.title = t.title, this.reKey && (this.areaId = t.areaId, this.setReKey(!1)), "true" == localStorage.getItem("gameKey") ? (localStorage.setItem("gameKey", !1), this.$router.push("/game"), this.gameKey = !1) : 0 === this.teamList.length ? this.getList2() : this.getList(!0)
          },
          computed: Object(c["a"])({}, Object(p["c"])("newGroup", ["priceAreaId", "reKey"])),
          activated: function () {
            console.log("activated页面打开时触发")
          },
          deactivated: function () {
            console.log("deactivated页面关闭时触发")
          },
          mounted: function () {
            this.u = window.webkit && window.webkit.messageHandlers.onItemClick, window.closeVideo = this.closeVideo
          },
          methods: Object(c["a"])(Object(c["a"])({}, Object(p["b"])("newGroup", ["setTaskToken", "setPriceAreaId", "setPrice", "setReKey"])), {}, {
            joinBuy: function () {
              var t = this,
                e = this.teamList.find((function (e) {
                  return e.priceAreaId == t.areaId
                }));
              this.$router.push("/newTeam/shopList?price=" + e.price + "&priceAreaId=" + e.priceAreaId)
            },
            getToDateTaskNum: function (t) {
              var e = this;
              return Object(o["a"])(regeneratorRuntime.mark((function r() {
                var n, a;
                return regeneratorRuntime.wrap((function (r) {
                  while (1) switch (r.prev = r.next) {
                    case 0:
                      return r.next = 2, e.$http.post("/api/v3/ManyPGProduct/GetToDateTaskNum", {
                        priceAreaId: t
                      }, {
                        custom: {
                          url: "99",
                          nonce: Object(l["a"])(),
                          timestamp: Object(l["b"])(),
                          loading: "加载"
                        }
                      });
                    case 2:
                      n = r.sent, a = n.data, 1 === a.code && (u["a"].clear(), e.todayAreaTaskCount = a.data.todayAreaTaskCount, e.totalAreaOrderWinningCount = a.data.totalAreaOrderWinningCount);
                    case 5:
                    case "end":
                      return r.stop()
                  }
                }), r)
              })))()
            },
            getTypeList: function (t) {
              this.pageIndex = 1, this.areaId = t, this.ajaxKey = !0, this.getList(!0)
            },
            getList2: function () {
              var t = this;
              return Object(o["a"])(regeneratorRuntime.mark((function e() {
                var r, n;
                return regeneratorRuntime.wrap((function (e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, t.$http.post("/api/v1/PriceArea/GetList", {
                        type: 1
                      }, {
                        custom: {
                          url: "99",
                          nonce: Object(l["a"])(),
                          timestamp: Object(l["b"])(),
                          loading: "加载"
                        }
                      });
                    case 2:
                      r = e.sent, n = r.data, 1 === n.code && (u["a"].clear(), t.teamList = n.data, t.areaId = t.areaId || t.priceAreaId ? t.areaId || t.priceAreaId : n.data[0].priceAreaId, t.pageIndex = 1, t.ajaxKey = !0, t.getList(!0));
                    case 5:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })))()
            },
            back: function () {
              this.$router.push({
                path: "/home/newTeam",
                replace: !0
              })
            },
            goPay: function (t) {
              this.$router.push("/newTeam/goPay?orderId=" + t.OrderId + "&price=" + t.TotalPrice + "&createTime=" + t.CreateTime)
            },
            cancelOrder: function (t) {
              var e = this;
              return Object(o["a"])(regeneratorRuntime.mark((function r() {
                return regeneratorRuntime.wrap((function (r) {
                  while (1) switch (r.prev = r.next) {
                    case 0:
                      d["a"].confirm({
                        title: "提示",
                        message: "是否取消订单"
                      }).then(Object(o["a"])(regeneratorRuntime.mark((function r() {
                        var n, a;
                        return regeneratorRuntime.wrap((function (r) {
                          while (1) switch (r.prev = r.next) {
                            case 0:
                              return r.next = 2, e.$http.post("/api/v3/ManyPGProduct/CancelOrder", {
                                orderId: t.OrderId
                              }, {
                                custom: {
                                  url: "99",
                                  nonce: Object(l["a"])(),
                                  timestamp: Object(l["b"])()
                                }
                              });
                            case 2:
                              n = r.sent, a = n.data, 1 === a.code && (Object(u["a"])("取消成功"), e.pageIndex = 1, e.ajaxKey = !0, e.getList(!0));
                            case 5:
                            case "end":
                              return r.stop()
                          }
                        }), r)
                      }))));
                    case 1:
                    case "end":
                      return r.stop()
                  }
                }), r)
              })))()
            },
            closeVideo: function () {
              this.$router.push("/game")
            },
            isSafari: function () {
              var t = navigator.userAgent.toLowerCase();
              return t.indexOf("applewebkit") > -1 && t.indexOf("safari") > -1 && -1 === t.indexOf("linux") && -1 === t.indexOf("android") && -1 === t.indexOf("chrome") && -1 === t.indexOf("ios") && -1 === t.indexOf("browser")
            },
            toGame: function (t) {
              var e = this;
              return Object(o["a"])(regeneratorRuntime.mark((function r() {
                var n, a, i, o, c, s, d, f, p;
                return regeneratorRuntime.wrap((function (r) {
                  while (1) switch (r.prev = r.next) {
                    case 0:
                      if (e.setPrice(t.PriceAreaName), e.setPriceAreaId(t.PriceAreaId), e.PriceAreaName = t.PriceAreaName, !e.toGameKey) {
                        r.next = 5;
                        break
                      }
                      return r.abrupt("return");
                    case 5:
                      if (n = navigator.userAgent, a = !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), i = navigator.userAgent, o = new MobileDetect(i), c = o.os(), e.isSafari()) {
                        r.next = 16;
                        break
                      }
                      if ("AndroidOS" == c && window.nuandouAndroid || "iOS" == c && window.webkit && window.webkit.messageHandlers.onItemClick) {
                        r.next = 14;
                        break
                      }
                      // return Object(u["a"])("请用移动端App进行登录"), r.abrupt("return", !1);
                    case 14:
                      r.next = 24;
                      break;
                    case 16:
                      return e.toGameKey = !0, setTimeout((function () {
                        e.toGameKey = !1
                      }), 3e3), r.next = 20, e.$http.post("/api/v3/ManyPGTask/StartAdvTask", {
                        orderId: t.OrderId
                      }, {
                        custom: {
                          url: "99",
                          nonce: Object(l["a"])(),
                          timestamp: Object(l["b"])()
                        }
                      });
                    case 20:
                      return s = r.sent, d = s.data, 1 === d.code ? (e.setTaskToken(d.data.taskToken), e.taskToken = d.data.taskToken, e.$router.push("/newTeam/video")) : e.toGameKey = !1, r.abrupt("return", !1);
                    case 24:
                      return u["a"].loading({
                        duration: 0,
                        message: "正在请求任务...",
                        forbidClick: !0
                      }), e.toGameKey = !0, setTimeout((function () {
                        e.toGameKey = !1
                      }), 3e3), r.next = 29, e.$http.post("/api/v3/ManyPGTask/StartAdvTask", {
                        orderId: t.OrderId
                      }, {
                        custom: {
                          url: "99",
                          nonce: Object(l["a"])(),
                          timestamp: Object(l["b"])()
                        }
                      });
                    case 29:
                      f = r.sent, f && (p = f.data, 1 === p.code ? (Object(u["a"])({
                        duration: 6e3,
                        message: "正在拉起广告,广告类型：" + p.data.advData.mchId
                      }), e.setTaskToken(p.data.taskToken), e.advId = p.data.advData.advId, e.mchId = p.data.advData.mchId, e.taskToken = p.data.taskToken, setTimeout((function () {
                        a ? window.webkit.messageHandlers.onItemClick.postMessage(JSON.stringify(p.data.advData)) : nuandouAndroid.onItemClick(JSON.stringify(p.data.advData))
                      }), 2e3)) : e.toGameKey = !1);
                    case 31:
                    case "end":
                      return r.stop()
                  }
                }), r)
              })))()
            },
            scrollChange: function () {
              this.ajaxKey && 1 !== this.pageIndex && (this.pageIndex++, this.getList(!1, 1))
            },
            getList: function () {
              var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                r = arguments.length > 1 ? arguments[1] : void 0;
              this.ajaxKey ? (this.ajaxKey = !1, u["a"].loading({
                duration: 1e4,
                message: "正在加载..."
              }), setTimeout(Object(o["a"])(regeneratorRuntime.mark((function r() {
                var n, a, o, c;
                return regeneratorRuntime.wrap((function (r) {
                  while (1) switch (r.prev = r.next) {
                    case 0:
                      return r.next = 2, t.$http.post("/api/v3/ManyPGProduct/GetManyOrderList", {
                        manyPGLotteryStatus: t.manyPGLotteryStatus,
                        pageSize: t.PageSize,
                        pageIndex: t.pageIndex,
                        priceAreaId: t.areaId
                      }, {
                        custom: {
                          url: "99",
                          nonce: Object(l["a"])(),
                          timestamp: Object(l["b"])()
                        }
                      });
                    case 2:
                      if (n = r.sent, !n) {
                        r.next = 20;
                        break
                      }
                      if (a = n.data, 1 !== a.code) {
                        r.next = 16;
                        break
                      }
                      if (t.getToDateTaskNum(t.areaId), t.activeId = t.areaId, u["a"].clear(), e ? (c = t.list.length, (o = t.list).splice.apply(o, [0, c].concat(Object(i["a"])(a.data)))) : t.list = t.list.concat(a.data), 0 !== a.data.length) {
                        r.next = 13;
                        break
                      }
                      return t.ajaxKey = !1, r.abrupt("return");
                    case 13:
                      t.ajaxKey = !0, r.next = 18;
                      break;
                    case 16:
                      t.areaId = t.activeId, 1 === t.pageIndex ? t.pageIndex : t.pageIndex--;
                    case 18:
                      r.next = 22;
                      break;
                    case 20:
                      t.areaId = t.activeId, 1 === t.pageIndex ? t.pageIndex : t.pageIndex--;
                    case 22:
                    case "end":
                      return r.stop()
                  }
                }), r)
              }))), 3e3)) : 1 == r && this.pageIndex--
            },
            toOrderDetail: function (t) {
              this.$router.push("/newTeam/orderDetail?id=" + t.OrderId)
            }
          })
        },
        g = h,
        v = (r("c062"), r("2877")),
        m = Object(v["a"])(g, n, a, !1, null, "7ea0256a", null);
      e["default"] = m.exports
    },
    fb6a: function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        a = r("861d"),
        i = r("e8b5"),
        o = r("23cb"),
        c = r("50c4"),
        s = r("fc6a"),
        u = r("8418"),
        d = r("b622"),
        f = r("1dde"),
        l = f("slice"),
        p = d("species"),
        h = [].slice,
        g = Math.max;
      n({
        target: "Array",
        proto: !0,
        forced: !l
      }, {
        slice: function (t, e) {
          var r, n, d, f = s(this),
            l = c(f.length),
            v = o(t, l),
            m = o(void 0 === e ? l : e, l);
          if (i(f) && (r = f.constructor, "function" != typeof r || r !== Array && !i(r.prototype) ? a(r) && (r = r[p], null === r && (r = void 0)) : r = void 0, r === Array || void 0 === r)) return h.call(f, v, m);
          for (n = new(void 0 === r ? Array : r)(g(m - v, 0)), d = 0; v < m; v++, d++) v in f && u(n, d, f[v]);
          return n.length = d, n
        }
      })
    }
  }
]);
//# sourceMappingURL=myShop.cbb1ebb9.js.map