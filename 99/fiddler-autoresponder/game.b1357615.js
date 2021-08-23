(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["game"],
  {
    "057f": function (t, e, r) {
      var n = r("fc6a"),
        i = r("241c").f,
        a = {}.toString,
        o =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [],
        c = function (t) {
          try {
            return i(t);
          } catch (e) {
            return o.slice();
          }
        };
      t.exports.f = function (t) {
        return o && "[object Window]" == a.call(t) ? c(t) : i(n(t));
      };
    },
    "159b": function (t, e, r) {
      var n = r("da84"),
        i = r("fdbc"),
        a = r("17c2"),
        o = r("9112");
      for (var c in i) {
        var s = n[c],
          u = s && s.prototype;
        if (u && u.forEach !== a)
          try {
            o(u, "forEach", a);
          } catch (f) {
            u.forEach = a;
          }
      }
    },
    "17c2": function (t, e, r) {
      "use strict";
      var n = r("b727").forEach,
        i = r("a640"),
        a = i("forEach");
      t.exports = a
        ? [].forEach
        : function (t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
    },
    2909: function (t, e, r) {
      "use strict";
      function n(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function i(t) {
        if (Array.isArray(t)) return n(t);
      }
      r.d(e, "a", function () {
        return s;
      });
      r("a4d3"),
        r("e01a"),
        r("d3b7"),
        r("d28b"),
        r("3ca3"),
        r("ddb0"),
        r("a630");
      function a(t) {
        if (
          ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      }
      r("fb6a"), r("b0c0");
      function o(t, e) {
        if (t) {
          if ("string" === typeof t) return n(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(t, e)
              : void 0
          );
        }
      }
      function c() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function s(t) {
        return i(t) || a(t) || o(t) || c();
      }
    },
    "3b6a": function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("div", { staticClass: "game-div", style: t.gameDivStyle }, [
            r("div", { staticClass: "game-div-div" }, [
              t._m(0),
              r("div", { staticClass: "game-view", style: t.gameViewStyle }, [
                r(
                  "div",
                  { staticClass: "game", style: t.gameStyle },
                  [
                    t._l(18, function (e) {
                      return r(
                        "div",
                        {
                          key: e,
                          staticClass: "dian",
                          style: {
                            transform: "rotate(" + 20 * (e - 1) + "deg)",
                          },
                        },
                        [t._m(1, !0)]
                      );
                    }),
                    t._l(t.lists, function (e, n) {
                      return r(
                        "div",
                        {
                          key: n + 100,
                          staticClass: "left",
                          style: t.leftStyle(n),
                        },
                        [
                          r(
                            "div",
                            {
                              staticClass: "left-1",
                              staticStyle: { "background-color": "#999" },
                              style: t.left1(n),
                            },
                            [
                              r(
                                "div",
                                {
                                  staticClass: "text",
                                  style: {
                                    marginLeft: n % 2 === 0 ? "14px" : "12px",
                                  },
                                },
                                [t._v(t._s(e))]
                              ),
                            ]
                          ),
                        ]
                      );
                    }),
                  ],
                  2
                ),
              ]),
              r(
                "div",
                {
                  staticClass: "action",
                  style: t.actionStyle,
                  on: { click: t.action },
                },
                [
                  t._v(
                    " " +
                      t._s(
                        0 !== t.t
                          ? t.t + "s后开始转转盘"
                          : t.actionKey
                          ? "开始抽奖"
                          : t.showErr
                          ? "谢谢惠顾"
                          : "等待结果"
                      )
                  ),
                ]
              ),
            ]),
            r(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.mubuKey && t.showPhoto,
                    expression: "mubuKey && showPhoto",
                  },
                ],
                staticClass: "mubu",
              },
              [
                r("div", { staticClass: "close", on: { click: t.close } }, [
                  r("img", {
                    attrs: {
                      src: t.imgSrc("gg_pup_close.png"),
                      mode: "aspectFit",
                    },
                  }),
                ]),
                r("div", { staticClass: "div", style: t.mubuDivStyle }, [
                  r("div", { staticClass: "game_1" }, [
                    r("img", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: t.gameKey,
                          expression: "gameKey",
                        },
                      ],
                      attrs: { src: t.imgSrc("game_1.png"), mode: "aspectFit" },
                    }),
                    r("img", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !t.gameKey,
                          expression: "!gameKey",
                        },
                      ],
                      attrs: { src: t.imgSrc("game_2.png"), mode: "aspectFit" },
                    }),
                  ]),
                  r("div", { staticClass: "btn" }, [
                    r("img", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: t.gameKey,
                          expression: "gameKey",
                        },
                      ],
                      attrs: {
                        src: t.imgSrc("btn_again.png"),
                        mode: "aspectFit",
                      },
                      on: { click: t.goShopList },
                    }),
                    r("img", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !t.gameKey,
                          expression: "!gameKey",
                        },
                      ],
                      attrs: {
                        src: t.imgSrc("btn_again_1.png"),
                        mode: "aspectFit",
                      },
                      on: { click: t.close },
                    }),
                  ]),
                ]),
              ]
            ),
          ]);
        },
        i = [
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r("div", { staticClass: "yuan-div" }, [
              r("div", { staticClass: "yuan" }, [
                r("div", { staticClass: "yuan1" }),
                r("div", { staticClass: "jiantou" }),
                r("div", { staticClass: "jiantou2" }),
              ]),
            ]);
          },
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r("div", [r("div")]);
          },
        ],
        a = r("1da1"),
        o = r("2909"),
        c = r("5530"),
        s = (r("96cf"), r("d81d"), r("c740"), r("da71")),
        u = r("c97a"),
        f = r("2f62"),
        l = {
          data: function () {
            return {
              gameKey: !0,
              gameStyle: { transform: "rotate(0)" },
              actionKey: !0,
              mubuKey: !1,
              mubuDivStyle: { transform: "scale(1)" },
              showPhoto: !1,
              showErr: !1,
              goKey: !1,
              index: null,
              t: 0,
              i: null,
              list1: [],
              gameViewStyle: {},
            };
          },
          computed: Object(c["a"])(
            Object(c["a"])(
              {},
              Object(f["c"])("newGroup", [
                "list",
                "gameDate",
                "taskToken",
                "priceAreaId",
                "price",
              ])
            ),
            {},
            {
              imgSrc: function () {
                return function (t) {
                  return s["d"] + t;
                };
              },
              gameDivStyle: function () {
                return {
                  backgroundImage: s["d"]
                    ? "url(" + s["d"] + "game_bac.png)"
                    : "",
                  overflow: "hidden",
                };
              },
              left1: function () {
                var t = this;
                return function (e) {
                  return {
                    backgroundColor: e % 2 === 0 ? "#ff5959" : "#ff6666",
                    transform: "rotate(-" + 360 / t.lists.length + "deg)",
                  };
                };
              },
              leftStyle: function () {
                var t = this;
                return function (e) {
                  return {
                    transform: "rotate(".concat(
                      (e + 1) * (360 / t.lists.length),
                      "deg)"
                    ),
                  };
                };
              },
              actionStyle: function () {
                return this.actionKey
                  ? {
                      backgroundImage:
                        "linear-gradient(to right, #fccf5f, #FBB663)",
                    }
                  : { backgroundColor: "#ccc" };
              },
              lists: function () {
                var t = [];
                return (
                  t.push.apply(
                    t,
                    Object(o["a"])(
                      this.list1.map(function (t) {
                        return t.manyPGBalance + "元红包";
                      })
                    )
                  ),
                  t.push.apply(t, ["谢谢惠顾", "能量券", "任务完成"]),
                  t.push.apply(t, t),
                  t
                );
              },
            }
          ),
          created: function () {
            this.list1 = JSON.parse(localStorage.getItem("list"));
          },
          mounted: function () {
            const delay = 5
            console.log(`在${delay}s后开始抽奖`)
            setTimeout(()=>{
              this.action()
            }, delay*1000)
          },
          destroyed: function () {
            this.i && (clearInterval(this.i), (this.i = null));
          },
          methods: Object(c["a"])(
            Object(c["a"])(
              {},
              Object(f["b"])("newGroup", ["setGameDate", "setTaskToken"])
            ),
            {},
            {
              getToken: function () {
                var t = this;
                t.$http.post('/api/v3/ManyPGTask/FinishAdvTask', {
                  data: this.taskToken
                }, {
                  custom: {
                    url: '99',
                    nonce: Object(u["a"])(),
                    timestamp: Object(u["b"])()
                  }
                }).then(res=>{
                  const data = res.data
                  if(data.code == 1){
                    console.log('中奖了')
                  }else{
                    console.warn('未中奖')
                  }
                }).finally(()=>{
                  const delay= parseInt(Math.random()*10+45)
                  console.log(`${delay}s 返回 myShop`)
                  setTimeout(()=>{
                    t.close()
                  },delay*1000)
                })
              },
              goShopList: function () {
                this.$router.push(
                  "/newTeam/shopList?price=" +
                    this.price +
                    "&priceAreaId=" +
                    this.priceAreaId
                );
              },
              close: function () {
                this.$router.go(-1);
              },
              action: function () {
                console.log('开始抽奖')
                var t = this;
                t.getToken()
                // return Object(a["a"])(
                //   regeneratorRuntime.mark(function e() {
                //     var r;
                //     return regeneratorRuntime.wrap(function (e) {
                //       while (1)
                //         switch ((e.prev = e.next)) {
                //           case 0:
                //             if (t.actionKey) {
                //               e.next = 2;
                //               break;
                //             }
                //             return e.abrupt("return");
                //           case 2:
                //             (t.actionKey = !1),
                //               (r = new Date()),
                //               0 === t.gameDate
                //                 ? t.getToken()
                //                 : r.getTime() - t.gameDate < 45e3
                //                 ? ((t.t = parseInt(
                //                     (45e3 - (r.getTime() - t.gameDate)) / 1e3 +
                //                       1
                //                   )),
                //                   setTimeout(function () {
                //                     t.getToken();
                //                   }, 1e3 * t.t),
                //                   (t.i = setInterval(function () {
                //                     (t.t = t.t - 1),
                //                       0 == t.t &&
                //                         (clearInterval(t.i), (t.i = null));
                //                   }, 1e3)))
                //                 : t.getToken();
                //           case 5:
                //           case "end":
                //             return e.stop();
                //         }
                //     }, e);
                //   })
                // )();
              },
            }
          ),
        },
        d = l,
        g = (r("74f5"), r("2877")),
        m = Object(g["a"])(d, n, i, !1, null, null, null);
      e["default"] = m.exports;
    },
    "4de4": function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        i = r("b727").filter,
        a = r("1dde"),
        o = a("filter");
      n(
        { target: "Array", proto: !0, forced: !o },
        {
          filter: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    "4df4": function (t, e, r) {
      "use strict";
      var n = r("0366"),
        i = r("7b0b"),
        a = r("9bdd"),
        o = r("e95a"),
        c = r("50c4"),
        s = r("8418"),
        u = r("35a1");
      t.exports = function (t) {
        var e,
          r,
          f,
          l,
          d,
          g,
          m = i(t),
          p = "function" == typeof this ? this : Array,
          v = arguments.length,
          y = v > 1 ? arguments[1] : void 0,
          b = void 0 !== y,
          h = u(m),
          w = 0;
        if (
          (b && (y = n(y, v > 2 ? arguments[2] : void 0, 2)),
          void 0 == h || (p == Array && o(h)))
        )
          for (e = c(m.length), r = new p(e); e > w; w++)
            (g = b ? y(m[w], w) : m[w]), s(r, w, g);
        else
          for (
            l = h.call(m), d = l.next, r = new p();
            !(f = d.call(l)).done;
            w++
          )
            (g = b ? a(l, y, [f.value, w], !0) : f.value), s(r, w, g);
        return (r.length = w), r;
      };
    },
    5530: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return a;
      });
      r("b64b"), r("a4d3"), r("4de4"), r("e439"), r("159b"), r("dbb4");
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function i(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(r), !0).forEach(function (e) {
                n(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
    },
    "746f": function (t, e, r) {
      var n = r("428f"),
        i = r("5135"),
        a = r("e538"),
        o = r("9bf2").f;
      t.exports = function (t) {
        var e = n.Symbol || (n.Symbol = {});
        i(e, t) || o(e, t, { value: a.f(t) });
      };
    },
    "74f5": function (t, e, r) {
      "use strict";
      r("9878");
    },
    9878: function (t, e, r) {},
    "9bdd": function (t, e, r) {
      var n = r("825a"),
        i = r("2a62");
      t.exports = function (t, e, r, a) {
        try {
          return a ? e(n(r)[0], r[1]) : e(r);
        } catch (o) {
          throw (i(t), o);
        }
      };
    },
    a4d3: function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        i = r("da84"),
        a = r("d066"),
        o = r("c430"),
        c = r("83ab"),
        s = r("4930"),
        u = r("fdbf"),
        f = r("d039"),
        l = r("5135"),
        d = r("e8b5"),
        g = r("861d"),
        m = r("825a"),
        p = r("7b0b"),
        v = r("fc6a"),
        y = r("c04e"),
        b = r("5c6c"),
        h = r("7c73"),
        w = r("df75"),
        S = r("241c"),
        O = r("057f"),
        j = r("7418"),
        k = r("06cf"),
        T = r("9bf2"),
        x = r("d1e7"),
        P = r("9112"),
        A = r("6eeb"),
        C = r("5692"),
        _ = r("f772"),
        D = r("d012"),
        I = r("90e3"),
        K = r("b622"),
        E = r("e538"),
        N = r("746f"),
        F = r("d44e"),
        $ = r("69f3"),
        G = r("b727").forEach,
        R = _("hidden"),
        J = "Symbol",
        L = "prototype",
        V = K("toPrimitive"),
        B = $.set,
        M = $.getterFor(J),
        Q = Object[L],
        U = i.Symbol,
        W = a("JSON", "stringify"),
        q = k.f,
        z = T.f,
        H = O.f,
        X = x.f,
        Y = C("symbols"),
        Z = C("op-symbols"),
        tt = C("string-to-symbol-registry"),
        et = C("symbol-to-string-registry"),
        rt = C("wks"),
        nt = i.QObject,
        it = !nt || !nt[L] || !nt[L].findChild,
        at =
          c &&
          f(function () {
            return (
              7 !=
              h(
                z({}, "a", {
                  get: function () {
                    return z(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function (t, e, r) {
                var n = q(Q, e);
                n && delete Q[e], z(t, e, r), n && t !== Q && z(Q, e, n);
              }
            : z,
        ot = function (t, e) {
          var r = (Y[t] = h(U[L]));
          return (
            B(r, { type: J, tag: t, description: e }),
            c || (r.description = e),
            r
          );
        },
        ct = u
          ? function (t) {
              return "symbol" == typeof t;
            }
          : function (t) {
              return Object(t) instanceof U;
            },
        st = function (t, e, r) {
          t === Q && st(Z, e, r), m(t);
          var n = y(e, !0);
          return (
            m(r),
            l(Y, n)
              ? (r.enumerable
                  ? (l(t, R) && t[R][n] && (t[R][n] = !1),
                    (r = h(r, { enumerable: b(0, !1) })))
                  : (l(t, R) || z(t, R, b(1, {})), (t[R][n] = !0)),
                at(t, n, r))
              : z(t, n, r)
          );
        },
        ut = function (t, e) {
          m(t);
          var r = v(e),
            n = w(r).concat(mt(r));
          return (
            G(n, function (e) {
              (c && !lt.call(r, e)) || st(t, e, r[e]);
            }),
            t
          );
        },
        ft = function (t, e) {
          return void 0 === e ? h(t) : ut(h(t), e);
        },
        lt = function (t) {
          var e = y(t, !0),
            r = X.call(this, e);
          return (
            !(this === Q && l(Y, e) && !l(Z, e)) &&
            (!(r || !l(this, e) || !l(Y, e) || (l(this, R) && this[R][e])) || r)
          );
        },
        dt = function (t, e) {
          var r = v(t),
            n = y(e, !0);
          if (r !== Q || !l(Y, n) || l(Z, n)) {
            var i = q(r, n);
            return (
              !i || !l(Y, n) || (l(r, R) && r[R][n]) || (i.enumerable = !0), i
            );
          }
        },
        gt = function (t) {
          var e = H(v(t)),
            r = [];
          return (
            G(e, function (t) {
              l(Y, t) || l(D, t) || r.push(t);
            }),
            r
          );
        },
        mt = function (t) {
          var e = t === Q,
            r = H(e ? Z : v(t)),
            n = [];
          return (
            G(r, function (t) {
              !l(Y, t) || (e && !l(Q, t)) || n.push(Y[t]);
            }),
            n
          );
        };
      if (
        (s ||
          ((U = function () {
            if (this instanceof U)
              throw TypeError("Symbol is not a constructor");
            var t =
                arguments.length && void 0 !== arguments[0]
                  ? String(arguments[0])
                  : void 0,
              e = I(t),
              r = function (t) {
                this === Q && r.call(Z, t),
                  l(this, R) && l(this[R], e) && (this[R][e] = !1),
                  at(this, e, b(1, t));
              };
            return c && it && at(Q, e, { configurable: !0, set: r }), ot(e, t);
          }),
          A(U[L], "toString", function () {
            return M(this).tag;
          }),
          A(U, "withoutSetter", function (t) {
            return ot(I(t), t);
          }),
          (x.f = lt),
          (T.f = st),
          (k.f = dt),
          (S.f = O.f = gt),
          (j.f = mt),
          (E.f = function (t) {
            return ot(K(t), t);
          }),
          c &&
            (z(U[L], "description", {
              configurable: !0,
              get: function () {
                return M(this).description;
              },
            }),
            o || A(Q, "propertyIsEnumerable", lt, { unsafe: !0 }))),
        n({ global: !0, wrap: !0, forced: !s, sham: !s }, { Symbol: U }),
        G(w(rt), function (t) {
          N(t);
        }),
        n(
          { target: J, stat: !0, forced: !s },
          {
            for: function (t) {
              var e = String(t);
              if (l(tt, e)) return tt[e];
              var r = U(e);
              return (tt[e] = r), (et[r] = e), r;
            },
            keyFor: function (t) {
              if (!ct(t)) throw TypeError(t + " is not a symbol");
              if (l(et, t)) return et[t];
            },
            useSetter: function () {
              it = !0;
            },
            useSimple: function () {
              it = !1;
            },
          }
        ),
        n(
          { target: "Object", stat: !0, forced: !s, sham: !c },
          {
            create: ft,
            defineProperty: st,
            defineProperties: ut,
            getOwnPropertyDescriptor: dt,
          }
        ),
        n(
          { target: "Object", stat: !0, forced: !s },
          { getOwnPropertyNames: gt, getOwnPropertySymbols: mt }
        ),
        n(
          {
            target: "Object",
            stat: !0,
            forced: f(function () {
              j.f(1);
            }),
          },
          {
            getOwnPropertySymbols: function (t) {
              return j.f(p(t));
            },
          }
        ),
        W)
      ) {
        var pt =
          !s ||
          f(function () {
            var t = U();
            return (
              "[null]" != W([t]) || "{}" != W({ a: t }) || "{}" != W(Object(t))
            );
          });
        n(
          { target: "JSON", stat: !0, forced: pt },
          {
            stringify: function (t, e, r) {
              var n,
                i = [t],
                a = 1;
              while (arguments.length > a) i.push(arguments[a++]);
              if (((n = e), (g(e) || void 0 !== t) && !ct(t)))
                return (
                  d(e) ||
                    (e = function (t, e) {
                      if (
                        ("function" == typeof n && (e = n.call(this, t, e)),
                        !ct(e))
                      )
                        return e;
                    }),
                  (i[1] = e),
                  W.apply(null, i)
                );
            },
          }
        );
      }
      U[L][V] || P(U[L], V, U[L].valueOf), F(U, J), (D[R] = !0);
    },
    a630: function (t, e, r) {
      var n = r("23e7"),
        i = r("4df4"),
        a = r("1c7e"),
        o = !a(function (t) {
          Array.from(t);
        });
      n({ target: "Array", stat: !0, forced: o }, { from: i });
    },
    b0c0: function (t, e, r) {
      var n = r("83ab"),
        i = r("9bf2").f,
        a = Function.prototype,
        o = a.toString,
        c = /^\s*function ([^ (]*)/,
        s = "name";
      n &&
        !(s in a) &&
        i(a, s, {
          configurable: !0,
          get: function () {
            try {
              return o.call(this).match(c)[1];
            } catch (t) {
              return "";
            }
          },
        });
    },
    c740: function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        i = r("b727").findIndex,
        a = r("44d2"),
        o = "findIndex",
        c = !0;
      o in [] &&
        Array(1)[o](function () {
          c = !1;
        }),
        n(
          { target: "Array", proto: !0, forced: c },
          {
            findIndex: function (t) {
              return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        a(o);
    },
    d28b: function (t, e, r) {
      var n = r("746f");
      n("iterator");
    },
    dbb4: function (t, e, r) {
      var n = r("23e7"),
        i = r("83ab"),
        a = r("56ef"),
        o = r("fc6a"),
        c = r("06cf"),
        s = r("8418");
      n(
        { target: "Object", stat: !0, sham: !i },
        {
          getOwnPropertyDescriptors: function (t) {
            var e,
              r,
              n = o(t),
              i = c.f,
              u = a(n),
              f = {},
              l = 0;
            while (u.length > l)
              (r = i(n, (e = u[l++]))), void 0 !== r && s(f, e, r);
            return f;
          },
        }
      );
    },
    e01a: function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        i = r("83ab"),
        a = r("da84"),
        o = r("5135"),
        c = r("861d"),
        s = r("9bf2").f,
        u = r("e893"),
        f = a.Symbol;
      if (
        i &&
        "function" == typeof f &&
        (!("description" in f.prototype) || void 0 !== f().description)
      ) {
        var l = {},
          d = function () {
            var t =
                arguments.length < 1 || void 0 === arguments[0]
                  ? void 0
                  : String(arguments[0]),
              e = this instanceof d ? new f(t) : void 0 === t ? f() : f(t);
            return "" === t && (l[e] = !0), e;
          };
        u(d, f);
        var g = (d.prototype = f.prototype);
        g.constructor = d;
        var m = g.toString,
          p = "Symbol(test)" == String(f("test")),
          v = /^Symbol\((.*)\)[^)]+$/;
        s(g, "description", {
          configurable: !0,
          get: function () {
            var t = c(this) ? this.valueOf() : this,
              e = m.call(t);
            if (o(l, t)) return "";
            var r = p ? e.slice(7, -1) : e.replace(v, "$1");
            return "" === r ? void 0 : r;
          },
        }),
          n({ global: !0, forced: !0 }, { Symbol: d });
      }
    },
    e439: function (t, e, r) {
      var n = r("23e7"),
        i = r("d039"),
        a = r("fc6a"),
        o = r("06cf").f,
        c = r("83ab"),
        s = i(function () {
          o(1);
        }),
        u = !c || s;
      n(
        { target: "Object", stat: !0, forced: u, sham: !c },
        {
          getOwnPropertyDescriptor: function (t, e) {
            return o(a(t), e);
          },
        }
      );
    },
    e538: function (t, e, r) {
      var n = r("b622");
      e.f = n;
    },
    fb6a: function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        i = r("861d"),
        a = r("e8b5"),
        o = r("23cb"),
        c = r("50c4"),
        s = r("fc6a"),
        u = r("8418"),
        f = r("b622"),
        l = r("1dde"),
        d = l("slice"),
        g = f("species"),
        m = [].slice,
        p = Math.max;
      n(
        { target: "Array", proto: !0, forced: !d },
        {
          slice: function (t, e) {
            var r,
              n,
              f,
              l = s(this),
              d = c(l.length),
              v = o(t, d),
              y = o(void 0 === e ? d : e, d);
            if (
              a(l) &&
              ((r = l.constructor),
              "function" != typeof r || (r !== Array && !a(r.prototype))
                ? i(r) && ((r = r[g]), null === r && (r = void 0))
                : (r = void 0),
              r === Array || void 0 === r)
            )
              return m.call(l, v, y);
            for (
              n = new (void 0 === r ? Array : r)(p(y - v, 0)), f = 0;
              v < y;
              v++, f++
            )
              v in l && u(n, f, l[v]);
            return (n.length = f), n;
          },
        }
      );
    },
  },
]);
//# sourceMappingURL=game.b1357615.js.map
