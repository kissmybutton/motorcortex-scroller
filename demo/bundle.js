!(function (t) {
  var e = window.webpackHotUpdate;
  window.webpackHotUpdate = function (t, n) {
    !(function (t, e) {
      if (!k[t] || !x[t]) return;
      for (var n in ((x[t] = !1), e))
        Object.prototype.hasOwnProperty.call(e, n) && (f[n] = e[n]);
      0 == --m && 0 === g && O();
    })(t, n),
      e && e(t, n);
  };
  var n,
    r = !0,
    i = "747d7fa54422d6289e70",
    o = {},
    a = [],
    s = [];
  function u(t) {
    var e = A[t];
    if (!e) return E;
    var r = function (r) {
        return (
          e.hot.active
            ? (A[r]
                ? -1 === A[r].parents.indexOf(t) && A[r].parents.push(t)
                : ((a = [t]), (n = r)),
              -1 === e.children.indexOf(r) && e.children.push(r))
            : (console.warn(
                "[HMR] unexpected require(" + r + ") from disposed module " + t
              ),
              (a = [])),
          E(r)
        );
      },
      i = function (t) {
        return {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return E[t];
          },
          set: function (e) {
            E[t] = e;
          },
        };
      };
    for (var o in E)
      Object.prototype.hasOwnProperty.call(E, o) &&
        "e" !== o &&
        "t" !== o &&
        Object.defineProperty(r, o, i(o));
    return (
      (r.e = function (t) {
        return (
          "ready" === h && d("prepare"),
          g++,
          E.e(t).then(e, function (t) {
            throw (e(), t);
          })
        );
        function e() {
          g--, "prepare" === h && (b[t] || I(t), 0 === g && 0 === m && O());
        }
      }),
      (r.t = function (t, e) {
        return 1 & e && (t = r(t)), E.t(t, -2 & e);
      }),
      r
    );
  }
  function c(e) {
    var r = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _selfInvalidated: !1,
      _disposeHandlers: [],
      _main: n !== e,
      active: !0,
      accept: function (t, e) {
        if (void 0 === t) r._selfAccepted = !0;
        else if ("function" == typeof t) r._selfAccepted = t;
        else if ("object" == typeof t)
          for (var n = 0; n < t.length; n++)
            r._acceptedDependencies[t[n]] = e || function () {};
        else r._acceptedDependencies[t] = e || function () {};
      },
      decline: function (t) {
        if (void 0 === t) r._selfDeclined = !0;
        else if ("object" == typeof t)
          for (var e = 0; e < t.length; e++) r._declinedDependencies[t[e]] = !0;
        else r._declinedDependencies[t] = !0;
      },
      dispose: function (t) {
        r._disposeHandlers.push(t);
      },
      addDisposeHandler: function (t) {
        r._disposeHandlers.push(t);
      },
      removeDisposeHandler: function (t) {
        var e = r._disposeHandlers.indexOf(t);
        e >= 0 && r._disposeHandlers.splice(e, 1);
      },
      invalidate: function () {
        switch (((this._selfInvalidated = !0), h)) {
          case "idle":
            ((f = {})[e] = t[e]), d("ready");
            break;
          case "ready":
            P(e);
            break;
          case "prepare":
          case "check":
          case "dispose":
          case "apply":
            (y = y || []).push(e);
        }
      },
      check: w,
      apply: C,
      status: function (t) {
        if (!t) return h;
        l.push(t);
      },
      addStatusHandler: function (t) {
        l.push(t);
      },
      removeStatusHandler: function (t) {
        var e = l.indexOf(t);
        e >= 0 && l.splice(e, 1);
      },
      data: o[e],
    };
    return (n = void 0), r;
  }
  var l = [],
    h = "idle";
  function d(t) {
    h = t;
    for (var e = 0; e < l.length; e++) l[e].call(null, t);
  }
  var p,
    f,
    v,
    y,
    m = 0,
    g = 0,
    b = {},
    x = {},
    k = {};
  function _(t) {
    return +t + "" === t ? +t : t;
  }
  function w(t) {
    if ("idle" !== h) throw new Error("check() is only allowed in idle status");
    return (
      (r = t),
      d("check"),
      ((e = 1e4),
      (e = e || 1e4),
      new Promise(function (t, n) {
        if ("undefined" == typeof XMLHttpRequest)
          return n(new Error("No browser support"));
        try {
          var r = new XMLHttpRequest(),
            o = E.p + "" + i + ".hot-update.json";
          r.open("GET", o, !0), (r.timeout = e), r.send(null);
        } catch (t) {
          return n(t);
        }
        r.onreadystatechange = function () {
          if (4 === r.readyState)
            if (0 === r.status)
              n(new Error("Manifest request to " + o + " timed out."));
            else if (404 === r.status) t();
            else if (200 !== r.status && 304 !== r.status)
              n(new Error("Manifest request to " + o + " failed."));
            else {
              try {
                var e = JSON.parse(r.responseText);
              } catch (t) {
                return void n(t);
              }
              t(e);
            }
        };
      })).then(function (t) {
        if (!t) return d(j() ? "ready" : "idle"), null;
        (x = {}), (b = {}), (k = t.c), (v = t.h), d("prepare");
        var e = new Promise(function (t, e) {
          p = { resolve: t, reject: e };
        });
        f = {};
        return I(0), "prepare" === h && 0 === g && 0 === m && O(), e;
      })
    );
    var e;
  }
  function I(t) {
    k[t]
      ? ((x[t] = !0),
        m++,
        (function (t) {
          var e = document.createElement("script");
          (e.charset = "utf-8"),
            (e.src = E.p + "" + t + "." + i + ".hot-update.js"),
            document.head.appendChild(e);
        })(t))
      : (b[t] = !0);
  }
  function O() {
    d("ready");
    var t = p;
    if (((p = null), t))
      if (r)
        Promise.resolve()
          .then(function () {
            return C(r);
          })
          .then(
            function (e) {
              t.resolve(e);
            },
            function (e) {
              t.reject(e);
            }
          );
      else {
        var e = [];
        for (var n in f)
          Object.prototype.hasOwnProperty.call(f, n) && e.push(_(n));
        t.resolve(e);
      }
  }
  function C(e) {
    if ("ready" !== h)
      throw new Error("apply() is only allowed in ready status");
    return (function e(r) {
      var s, u, c, l, h;
      function p(t) {
        for (
          var e = [t],
            n = {},
            r = e.map(function (t) {
              return { chain: [t], id: t };
            });
          r.length > 0;

        ) {
          var i = r.pop(),
            o = i.id,
            a = i.chain;
          if ((l = A[o]) && (!l.hot._selfAccepted || l.hot._selfInvalidated)) {
            if (l.hot._selfDeclined)
              return { type: "self-declined", chain: a, moduleId: o };
            if (l.hot._main)
              return { type: "unaccepted", chain: a, moduleId: o };
            for (var s = 0; s < l.parents.length; s++) {
              var u = l.parents[s],
                c = A[u];
              if (c) {
                if (c.hot._declinedDependencies[o])
                  return {
                    type: "declined",
                    chain: a.concat([u]),
                    moduleId: o,
                    parentId: u,
                  };
                -1 === e.indexOf(u) &&
                  (c.hot._acceptedDependencies[o]
                    ? (n[u] || (n[u] = []), m(n[u], [o]))
                    : (delete n[u],
                      e.push(u),
                      r.push({ chain: a.concat([u]), id: u })));
              }
            }
          }
        }
        return {
          type: "accepted",
          moduleId: t,
          outdatedModules: e,
          outdatedDependencies: n,
        };
      }
      function m(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          -1 === t.indexOf(r) && t.push(r);
        }
      }
      j();
      var g = {},
        b = [],
        x = {},
        w = function () {
          console.warn(
            "[HMR] unexpected require(" + O.moduleId + ") to disposed module"
          );
        };
      for (var I in f)
        if (Object.prototype.hasOwnProperty.call(f, I)) {
          var O;
          (h = _(I)), (O = f[I] ? p(h) : { type: "disposed", moduleId: I });
          var C = !1,
            P = !1,
            M = !1,
            S = "";
          switch (
            (O.chain && (S = "\nUpdate propagation: " + O.chain.join(" -> ")),
            O.type)
          ) {
            case "self-declined":
              r.onDeclined && r.onDeclined(O),
                r.ignoreDeclined ||
                  (C = new Error(
                    "Aborted because of self decline: " + O.moduleId + S
                  ));
              break;
            case "declined":
              r.onDeclined && r.onDeclined(O),
                r.ignoreDeclined ||
                  (C = new Error(
                    "Aborted because of declined dependency: " +
                      O.moduleId +
                      " in " +
                      O.parentId +
                      S
                  ));
              break;
            case "unaccepted":
              r.onUnaccepted && r.onUnaccepted(O),
                r.ignoreUnaccepted ||
                  (C = new Error(
                    "Aborted because " + h + " is not accepted" + S
                  ));
              break;
            case "accepted":
              r.onAccepted && r.onAccepted(O), (P = !0);
              break;
            case "disposed":
              r.onDisposed && r.onDisposed(O), (M = !0);
              break;
            default:
              throw new Error("Unexception type " + O.type);
          }
          if (C) return d("abort"), Promise.reject(C);
          if (P)
            for (h in ((x[h] = f[h]),
            m(b, O.outdatedModules),
            O.outdatedDependencies))
              Object.prototype.hasOwnProperty.call(O.outdatedDependencies, h) &&
                (g[h] || (g[h] = []), m(g[h], O.outdatedDependencies[h]));
          M && (m(b, [O.moduleId]), (x[h] = w));
        }
      var T,
        D = [];
      for (u = 0; u < b.length; u++)
        (h = b[u]),
          A[h] &&
            A[h].hot._selfAccepted &&
            x[h] !== w &&
            !A[h].hot._selfInvalidated &&
            D.push({
              module: h,
              parents: A[h].parents.slice(),
              errorHandler: A[h].hot._selfAccepted,
            });
      d("dispose"),
        Object.keys(k).forEach(function (t) {
          !1 === k[t] &&
            (function (t) {
              delete installedChunks[t];
            })(t);
        });
      var B,
        L,
        V = b.slice();
      for (; V.length > 0; )
        if (((h = V.pop()), (l = A[h]))) {
          var $ = {},
            z = l.hot._disposeHandlers;
          for (c = 0; c < z.length; c++) (s = z[c])($);
          for (
            o[h] = $, l.hot.active = !1, delete A[h], delete g[h], c = 0;
            c < l.children.length;
            c++
          ) {
            var N = A[l.children[c]];
            N && (T = N.parents.indexOf(h)) >= 0 && N.parents.splice(T, 1);
          }
        }
      for (h in g)
        if (Object.prototype.hasOwnProperty.call(g, h) && (l = A[h]))
          for (L = g[h], c = 0; c < L.length; c++)
            (B = L[c]),
              (T = l.children.indexOf(B)) >= 0 && l.children.splice(T, 1);
      d("apply"), void 0 !== v && ((i = v), (v = void 0));
      for (h in ((f = void 0), x))
        Object.prototype.hasOwnProperty.call(x, h) && (t[h] = x[h]);
      var F = null;
      for (h in g)
        if (Object.prototype.hasOwnProperty.call(g, h) && (l = A[h])) {
          L = g[h];
          var q = [];
          for (u = 0; u < L.length; u++)
            if (((B = L[u]), (s = l.hot._acceptedDependencies[B]))) {
              if (-1 !== q.indexOf(s)) continue;
              q.push(s);
            }
          for (u = 0; u < q.length; u++) {
            s = q[u];
            try {
              s(L);
            } catch (t) {
              r.onErrored &&
                r.onErrored({
                  type: "accept-errored",
                  moduleId: h,
                  dependencyId: L[u],
                  error: t,
                }),
                r.ignoreErrored || F || (F = t);
            }
          }
        }
      for (u = 0; u < D.length; u++) {
        var R = D[u];
        (h = R.module), (a = R.parents), (n = h);
        try {
          E(h);
        } catch (t) {
          if ("function" == typeof R.errorHandler)
            try {
              R.errorHandler(t);
            } catch (e) {
              r.onErrored &&
                r.onErrored({
                  type: "self-accept-error-handler-errored",
                  moduleId: h,
                  error: e,
                  originalError: t,
                }),
                r.ignoreErrored || F || (F = e),
                F || (F = t);
            }
          else
            r.onErrored &&
              r.onErrored({
                type: "self-accept-errored",
                moduleId: h,
                error: t,
              }),
              r.ignoreErrored || F || (F = t);
        }
      }
      if (F) return d("fail"), Promise.reject(F);
      if (y)
        return e(r).then(function (t) {
          return (
            b.forEach(function (e) {
              t.indexOf(e) < 0 && t.push(e);
            }),
            t
          );
        });
      return (
        d("idle"),
        new Promise(function (t) {
          t(b);
        })
      );
    })((e = e || {}));
  }
  function j() {
    if (y) return f || (f = {}), y.forEach(P), (y = void 0), !0;
  }
  function P(e) {
    Object.prototype.hasOwnProperty.call(f, e) || (f[e] = t[e]);
  }
  var A = {};
  function E(e) {
    if (A[e]) return A[e].exports;
    var n = (A[e] = {
      i: e,
      l: !1,
      exports: {},
      hot: c(e),
      parents: ((s = a), (a = []), s),
      children: [],
    });
    return t[e].call(n.exports, n, n.exports, u(e)), (n.l = !0), n.exports;
  }
  (E.m = t),
    (E.c = A),
    (E.d = function (t, e, n) {
      E.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (E.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (E.t = function (t, e) {
      if ((1 & e && (t = E(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (E.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          E.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (E.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return E.d(e, "a", e), e;
    }),
    (E.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (E.p = ""),
    (E.h = function () {
      return i;
    }),
    u(1)((E.s = 1));
})([
  function (t, e, n) {
    (function (t) {
      !(function (e) {
        "use strict";
        function n(t) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function r(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function o(t, e, n) {
          return e && i(t.prototype, e), n && i(t, n), t;
        }
        function a(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function s(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function u(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? s(Object(n), !0).forEach(function (e) {
                  a(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : s(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function c(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e &&
              (function (t, e) {
                (
                  Object.setPrototypeOf ||
                  function (t, e) {
                    return (t.__proto__ = e), t;
                  }
                )(t, e);
              })(t, e);
        }
        function l(t) {
          return (l = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function h() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }
        function d(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function p(t, e) {
          return !e || ("object" != typeof e && "function" != typeof e)
            ? d(t)
            : e;
        }
        function f(t) {
          return function () {
            var e,
              n = l(t);
            if (h()) {
              var r = l(this).constructor;
              e = Reflect.construct(n, arguments, r);
            } else e = n.apply(this, arguments);
            return p(this, e);
          };
        }
        function v(t, e) {
          for (
            ;
            !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = l(t));

          );
          return t;
        }
        function y(t, e, n) {
          return (y =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get
              : function (t, e, n) {
                  var r = v(t, e);
                  if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, e);
                    return i.get ? i.get.call(n) : i.value;
                  }
                })(t, e, n || t);
        }
        function m(t, e, n, r) {
          return (m =
            "undefined" != typeof Reflect && Reflect.set
              ? Reflect.set
              : function (t, e, n, r) {
                  var i,
                    o = v(t, e);
                  if (o) {
                    if ((i = Object.getOwnPropertyDescriptor(o, e)).set)
                      return i.set.call(r, n), !0;
                    if (!i.writable) return !1;
                  }
                  if ((i = Object.getOwnPropertyDescriptor(r, e))) {
                    if (!i.writable) return !1;
                    (i.value = n), Object.defineProperty(r, e, i);
                  } else a(r, e, n);
                  return !0;
                })(t, e, n, r);
        }
        function g(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return k(t);
            })(t) ||
            b(t) ||
            x(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function b(t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        }
        function x(t, e) {
          if (t) {
            if ("string" == typeof t) return k(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(n)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? k(t, e)
                : void 0
            );
          }
        }
        function k(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function _(t) {
          var e = (function (t, e) {
            if ("object" != typeof t || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, e);
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t, "string");
          return "symbol" == typeof e ? e : String(e);
        }
        function w(t, e, n, r) {
          var i = (function () {
            var t = {
              elementsDefinitionOrder: [["method"], ["field"]],
              initializeInstanceElements: function (t, e) {
                ["method", "field"].forEach(function (n) {
                  e.forEach(function (e) {
                    e.kind === n &&
                      "own" === e.placement &&
                      this.defineClassElement(t, e);
                  }, this);
                }, this);
              },
              initializeClassElements: function (t, e) {
                var n = t.prototype;
                ["method", "field"].forEach(function (r) {
                  e.forEach(function (e) {
                    var i = e.placement;
                    if (e.kind === r && ("static" === i || "prototype" === i)) {
                      var o = "static" === i ? t : n;
                      this.defineClassElement(o, e);
                    }
                  }, this);
                }, this);
              },
              defineClassElement: function (t, e) {
                var n = e.descriptor;
                if ("field" === e.kind) {
                  var r = e.initializer;
                  n = {
                    enumerable: n.enumerable,
                    writable: n.writable,
                    configurable: n.configurable,
                    value: void 0 === r ? void 0 : r.call(t),
                  };
                }
                Object.defineProperty(t, e.key, n);
              },
              decorateClass: function (t, e) {
                var n = [],
                  r = [],
                  i = { static: [], prototype: [], own: [] };
                if (
                  (t.forEach(function (t) {
                    this.addElementPlacement(t, i);
                  }, this),
                  t.forEach(function (t) {
                    if (!C(t)) return n.push(t);
                    var e = this.decorateElement(t, i);
                    n.push(e.element),
                      n.push.apply(n, e.extras),
                      r.push.apply(r, e.finishers);
                  }, this),
                  !e)
                )
                  return { elements: n, finishers: r };
                var o = this.decorateConstructor(n, e);
                return r.push.apply(r, o.finishers), (o.finishers = r), o;
              },
              addElementPlacement: function (t, e, n) {
                var r = e[t.placement];
                if (!n && -1 !== r.indexOf(t.key))
                  throw new TypeError("Duplicated element (" + t.key + ")");
                r.push(t.key);
              },
              decorateElement: function (t, e) {
                for (
                  var n = [], r = [], i = t.decorators, o = i.length - 1;
                  o >= 0;
                  o--
                ) {
                  var a = e[t.placement];
                  a.splice(a.indexOf(t.key), 1);
                  var s = this.fromElementDescriptor(t),
                    u = this.toElementFinisherExtras((0, i[o])(s) || s);
                  (t = u.element),
                    this.addElementPlacement(t, e),
                    u.finisher && r.push(u.finisher);
                  var c = u.extras;
                  if (c) {
                    for (var l = 0; l < c.length; l++)
                      this.addElementPlacement(c[l], e);
                    n.push.apply(n, c);
                  }
                }
                return { element: t, finishers: r, extras: n };
              },
              decorateConstructor: function (t, e) {
                for (var n = [], r = e.length - 1; r >= 0; r--) {
                  var i = this.fromClassDescriptor(t),
                    o = this.toClassDescriptor((0, e[r])(i) || i);
                  if (
                    (void 0 !== o.finisher && n.push(o.finisher),
                    void 0 !== o.elements)
                  ) {
                    t = o.elements;
                    for (var a = 0; a < t.length - 1; a++)
                      for (var s = a + 1; s < t.length; s++)
                        if (
                          t[a].key === t[s].key &&
                          t[a].placement === t[s].placement
                        )
                          throw new TypeError(
                            "Duplicated element (" + t[a].key + ")"
                          );
                  }
                }
                return { elements: t, finishers: n };
              },
              fromElementDescriptor: function (t) {
                var e = {
                  kind: t.kind,
                  key: t.key,
                  placement: t.placement,
                  descriptor: t.descriptor,
                };
                return (
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0,
                  }),
                  "field" === t.kind && (e.initializer = t.initializer),
                  e
                );
              },
              toElementDescriptors: function (t) {
                if (void 0 !== t)
                  return (function (t) {
                    return (
                      (function (t) {
                        if (Array.isArray(t)) return t;
                      })(t) ||
                      b(t) ||
                      x(t) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()
                    );
                  })(t).map(function (t) {
                    var e = this.toElementDescriptor(t);
                    return (
                      this.disallowProperty(
                        t,
                        "finisher",
                        "An element descriptor"
                      ),
                      this.disallowProperty(
                        t,
                        "extras",
                        "An element descriptor"
                      ),
                      e
                    );
                  }, this);
              },
              toElementDescriptor: function (t) {
                var e = String(t.kind);
                if ("method" !== e && "field" !== e)
                  throw new TypeError(
                    'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                      e +
                      '"'
                  );
                var n = _(t.key),
                  r = String(t.placement);
                if ("static" !== r && "prototype" !== r && "own" !== r)
                  throw new TypeError(
                    'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                      r +
                      '"'
                  );
                var i = t.descriptor;
                this.disallowProperty(t, "elements", "An element descriptor");
                var o = {
                  kind: e,
                  key: n,
                  placement: r,
                  descriptor: Object.assign({}, i),
                };
                return (
                  "field" !== e
                    ? this.disallowProperty(
                        t,
                        "initializer",
                        "A method descriptor"
                      )
                    : (this.disallowProperty(
                        i,
                        "get",
                        "The property descriptor of a field descriptor"
                      ),
                      this.disallowProperty(
                        i,
                        "set",
                        "The property descriptor of a field descriptor"
                      ),
                      this.disallowProperty(
                        i,
                        "value",
                        "The property descriptor of a field descriptor"
                      ),
                      (o.initializer = t.initializer)),
                  o
                );
              },
              toElementFinisherExtras: function (t) {
                return {
                  element: this.toElementDescriptor(t),
                  finisher: P(t, "finisher"),
                  extras: this.toElementDescriptors(t.extras),
                };
              },
              fromClassDescriptor: function (t) {
                var e = {
                  kind: "class",
                  elements: t.map(this.fromElementDescriptor, this),
                };
                return (
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0,
                  }),
                  e
                );
              },
              toClassDescriptor: function (t) {
                var e = String(t.kind);
                if ("class" !== e)
                  throw new TypeError(
                    'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                      e +
                      '"'
                  );
                this.disallowProperty(t, "key", "A class descriptor"),
                  this.disallowProperty(t, "placement", "A class descriptor"),
                  this.disallowProperty(t, "descriptor", "A class descriptor"),
                  this.disallowProperty(t, "initializer", "A class descriptor"),
                  this.disallowProperty(t, "extras", "A class descriptor");
                var n = P(t, "finisher");
                return {
                  elements: this.toElementDescriptors(t.elements),
                  finisher: n,
                };
              },
              runClassFinishers: function (t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = (0, e[n])(t);
                  if (void 0 !== r) {
                    if ("function" != typeof r)
                      throw new TypeError(
                        "Finishers must return a constructor."
                      );
                    t = r;
                  }
                }
                return t;
              },
              disallowProperty: function (t, e, n) {
                if (void 0 !== t[e])
                  throw new TypeError(n + " can't have a ." + e + " property.");
              },
            };
            return t;
          })();
          if (r) for (var o = 0; o < r.length; o++) i = r[o](i);
          var a = e(function (t) {
              i.initializeInstanceElements(t, s.elements);
            }, n),
            s = i.decorateClass(
              (function (t) {
                for (
                  var e = [],
                    n = function (t) {
                      return (
                        "method" === t.kind &&
                        t.key === o.key &&
                        t.placement === o.placement
                      );
                    },
                    r = 0;
                  r < t.length;
                  r++
                ) {
                  var i,
                    o = t[r];
                  if ("method" === o.kind && (i = e.find(n)))
                    if (j(o.descriptor) || j(i.descriptor)) {
                      if (C(o) || C(i))
                        throw new ReferenceError(
                          "Duplicated methods (" +
                            o.key +
                            ") can't be decorated."
                        );
                      i.descriptor = o.descriptor;
                    } else {
                      if (C(o)) {
                        if (C(i))
                          throw new ReferenceError(
                            "Decorators can't be placed on different accessors with for the same property (" +
                              o.key +
                              ")."
                          );
                        i.decorators = o.decorators;
                      }
                      O(o, i);
                    }
                  else e.push(o);
                }
                return e;
              })(a.d.map(I)),
              t
            );
          return (
            i.initializeClassElements(a.F, s.elements),
            i.runClassFinishers(a.F, s.finishers)
          );
        }
        function I(t) {
          var e,
            n = _(t.key);
          "method" === t.kind
            ? (e = {
                value: t.value,
                writable: !0,
                configurable: !0,
                enumerable: !1,
              })
            : "get" === t.kind
            ? (e = { get: t.value, configurable: !0, enumerable: !1 })
            : "set" === t.kind
            ? (e = { set: t.value, configurable: !0, enumerable: !1 })
            : "field" === t.kind &&
              (e = { configurable: !0, writable: !0, enumerable: !0 });
          var r = {
            kind: "field" === t.kind ? "field" : "method",
            key: n,
            placement: t.static
              ? "static"
              : "field" === t.kind
              ? "own"
              : "prototype",
            descriptor: e,
          };
          return (
            t.decorators && (r.decorators = t.decorators),
            "field" === t.kind && (r.initializer = t.value),
            r
          );
        }
        function O(t, e) {
          void 0 !== t.descriptor.get
            ? (e.descriptor.get = t.descriptor.get)
            : (e.descriptor.set = t.descriptor.set);
        }
        function C(t) {
          return t.decorators && t.decorators.length;
        }
        function j(t) {
          return void 0 !== t && !(void 0 === t.value && void 0 === t.writable);
        }
        function P(t, e) {
          var n = t[e];
          if (void 0 !== n && "function" != typeof n)
            throw new TypeError("Expected '" + e + "' to be a function");
          return n;
        }
        var A = function t(e, n) {
            for (let r in n)
              "object" == typeof n[r] && null !== n[r]
                ? ((e[r] = e[r] || {}), t(e[r], n[r]))
                : (e[r] = n[r]);
            return e;
          },
          E = {
            required: "The '{field}' field is required.",
            string: "The '{field}' field must be a string.",
            stringEmpty: "The '{field}' field must not be empty.",
            stringMin:
              "The '{field}' field length must be greater than or equal to {expected} characters long.",
            stringMax:
              "The '{field}' field length must be less than or equal to {expected} characters long.",
            stringLength:
              "The '{field}' field length must be {expected} characters long.",
            stringPattern:
              "The '{field}' field fails to match the required pattern.",
            stringContains:
              "The '{field}' field must contain the '{expected}' text.",
            stringEnum:
              "The '{field}' field does not match any of the allowed values.",
            stringNumeric: "The '{field}' field must be a numeric string.",
            stringAlpha: "The '{field}' field must be an alphabetic string.",
            stringAlphanum:
              "The '{field}' field must be an alphanumeric string.",
            stringAlphadash: "The '{field}' field must be an alphadash string.",
            number: "The '{field}' field must be a number.",
            numberMin:
              "The '{field}' field must be greater than or equal to {expected}.",
            numberMax:
              "The '{field}' field must be less than or equal to {expected}.",
            numberEqual: "The '{field}' field must be equal to {expected}.",
            numberNotEqual: "The '{field}' field can't be equal to {expected}.",
            numberInteger: "The '{field}' field must be an integer.",
            numberPositive: "The '{field}' field must be a positive number.",
            numberNegative: "The '{field}' field must be a negative number.",
            array: "The '{field}' field must be an array.",
            arrayEmpty: "The '{field}' field must not be an empty array.",
            arrayMin:
              "The '{field}' field must contain at least {expected} items.",
            arrayMax:
              "The '{field}' field must contain less than or equal to {expected} items.",
            arrayLength: "The '{field}' field must contain {expected} items.",
            arrayContains:
              "The '{field}' field must contain the '{expected}' item.",
            arrayUnique:
              "The '{actual}' value in '{field}' field does not unique the '{expected}' values.",
            arrayEnum:
              "The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",
            boolean: "The '{field}' field must be a boolean.",
            date: "The '{field}' field must be a Date.",
            dateMin:
              "The '{field}' field must be greater than or equal to {expected}.",
            dateMax:
              "The '{field}' field must be less than or equal to {expected}.",
            enumValue:
              "The '{field}' field value '{expected}' does not match any of the allowed values.",
            equalValue:
              "The '{field}' field value must be equal to '{expected}'.",
            equalField:
              "The '{field}' field value must be equal to '{expected}' field value.",
            forbidden: "The '{field}' field is forbidden.",
            function: "The '{field}' field must be a function.",
            email: "The '{field}' field must be a valid e-mail.",
            luhn: "The '{field}' field must be a valid checksum luhn.",
            mac: "The '{field}' field must be a valid MAC address.",
            object: "The '{field}' must be an Object.",
            objectStrict:
              "The object '{field}' contains forbidden keys: '{actual}'.",
            url: "The '{field}' field must be a valid URL.",
            uuid: "The '{field}' field must be a valid UUID.",
            uuidVersion:
              "The '{field}' field must be a valid UUID version provided.",
          },
          M = function () {
            return {};
          },
          S = function ({ schema: t, messages: e, customValidation: n }, r, i) {
            const o = [];
            if (
              (o.push(
                `\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({
                  type: "array",
                  actual: "value",
                  messages: e,
                })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`
              ),
              !1 === t.empty &&
                o.push(
                  `\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({
                    type: "arrayEmpty",
                    actual: "value",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != t.min &&
                o.push(
                  `\n\t\t\tif (len < ${t.min}) {\n\t\t\t\t${this.makeError({
                    type: "arrayMin",
                    expected: t.min,
                    actual: "len",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != t.max &&
                o.push(
                  `\n\t\t\tif (len > ${t.max}) {\n\t\t\t\t${this.makeError({
                    type: "arrayMax",
                    expected: t.max,
                    actual: "len",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != t.length &&
                o.push(
                  `\n\t\t\tif (len !== ${
                    t.length
                  }) {\n\t\t\t\t${this.makeError({
                    type: "arrayLength",
                    expected: t.length,
                    actual: "len",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != t.contains &&
                o.push(
                  `\n\t\t\tif (value.indexOf(${JSON.stringify(
                    t.contains
                  )}) === -1) {\n\t\t\t\t${this.makeError({
                    type: "arrayContains",
                    expected: JSON.stringify(t.contains),
                    actual: "value",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              !0 === t.unique &&
                o.push(
                  `\n\t\t\tif(len > (new Set(value)).size) {\n\t\t\t\t${this.makeError(
                    {
                      type: "arrayUnique",
                      expected:
                        "Array.from(new Set(value.filter((item, index) => value.indexOf(item) !== index)))",
                      actual: "value",
                      messages: e,
                    }
                  )}\n\t\t\t}\n\t\t`
                ),
              null != t.enum)
            ) {
              const n = JSON.stringify(t.enum);
              o.push(
                `\n\t\t\tfor (var i = 0; i < value.length; i++) {\n\t\t\t\tif (${n}.indexOf(value[i]) === -1) {\n\t\t\t\t\t${this.makeError(
                  {
                    type: "arrayEnum",
                    expected: '"' + t.enum.join(", ") + '"',
                    actual: "value[i]",
                    messages: e,
                  }
                )}\n\t\t\t\t}\n\t\t\t}\n\t\t`
              );
            }
            if (null != t.items) {
              o.push(
                "\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t\tfor (var i = 0; i < arr.length; i++) {\n\t\t"
              );
              const e = this.getRuleFromSchema(t.items);
              o.push(
                this.compileRule(
                  e,
                  i,
                  r,
                  'arr[i] = context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context);',
                  "arr[i]"
                )
              ),
                o.push("\n\t\t\t}\n\t\t");
            }
            return (
              o.push(`\n\t\t${n("value")}\n\t\treturn value;\n\t`),
              { source: o.join("\n") }
            );
          },
          T = function ({ schema: t, messages: e, customValidation: n }, r) {
            const i = [];
            let o = !1;
            return (
              i.push("\n\t\tvar origValue = value;\n\t"),
              !0 === t.convert &&
                ((o = !0),
                i.push(
                  '\n\t\t\tif (typeof value !== "boolean") {\n\t\t\t\tif (\n\t\t\t\tvalue === 1\n\t\t\t\t|| value === "true"\n\t\t\t\t|| value === "1"\n\t\t\t\t|| value === "on"\n\t\t\t\t) {\n\t\t\t\t\tvalue = true;\n\t\t\t\t} else if (\n\t\t\t\tvalue === 0\n\t\t\t\t|| value === "false"\n\t\t\t\t|| value === "0"\n\t\t\t\t|| value === "off"\n\t\t\t\t) {\n\t\t\t\t\tvalue = false;\n\t\t\t\t}\n\t\t\t}\n\t\t'
                )),
              i.push(
                `\n\t\tif (typeof value !== "boolean")\n\t\t\t${this.makeError({
                  type: "boolean",
                  actual: "origValue",
                  messages: e,
                })}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`
              ),
              { sanitized: o, source: i.join("\n") }
            );
          },
          D = function ({ schema: t, messages: e }, n, r) {
            const i = [];
            return (
              "function" == typeof t.check &&
                ((r.customs[n] = { schema: t, messages: e }),
                i.push(
                  `\n\t\t\tconst rule = context.customs["${n}"];\n\t\t\tconst res = rule.schema.check.call(this, value, rule.schema, "${n}", parent, context);\n\t\t\tif (Array.isArray(res)) {\n\t\t\t\tres.forEach(err => errors.push(Object.assign({ message: rule.messages[err.type], field }, err)));\n\t\t\t}\n\n\t\t\treturn value;\n\t\t`
                )),
              { source: i.join("\n") }
            );
          },
          B = function ({ schema: t, messages: e, customValidation: n }, r) {
            const i = [];
            let o = !1;
            return (
              i.push("\n\t\tvar origValue = value;\n\t"),
              !0 === t.convert &&
                ((o = !0),
                i.push(
                  "\n\t\t\tif (!(value instanceof Date)) {\n\t\t\t\tvalue = new Date(value);\n\t\t\t}\n\t\t"
                )),
              i.push(
                `\n\t\tif (!(value instanceof Date) || isNaN(value.getTime()))\n\t\t\t${this.makeError(
                  { type: "date", actual: "origValue", messages: e }
                )}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`
              ),
              { sanitized: o, source: i.join("\n") }
            );
          };
        const L = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          V = /^\S+@\S+\.\S+$/;
        var $ = function ({ schema: t, messages: e, customValidation: n }, r) {
            const i = [],
              o = "precise" == t.mode ? L : V;
            let a = !1;
            return (
              i.push(
                `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError(
                  { type: "string", actual: "value", messages: e }
                )}\n\t\t\treturn value;\n\t\t}\n\t`
              ),
              t.normalize &&
                ((a = !0),
                i.push("\n\t\t\tvalue = value.trim().toLowerCase();\n\t\t")),
              i.push(
                `\n\t\tif (!${o.toString()}.test(value))\n\t\t\t${this.makeError(
                  { type: "email", actual: "value", messages: e }
                )}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`
              ),
              { sanitized: a, source: i.join("\n") }
            );
          },
          z = function ({ schema: t, messages: e, customValidation: n }, r) {
            return {
              source: `\n\t\t\tif (${JSON.stringify(
                t.values || []
              )}.indexOf(value) === -1)\n\t\t\t\t${this.makeError({
                type: "enumValue",
                expected: '"' + t.values.join(", ") + '"',
                actual: "value",
                messages: e,
              })}\n\t\t\t\n\t\t\t${n("value")}\n\n\t\t\treturn value;\n\t\t`,
            };
          },
          N = function ({ schema: t, messages: e, customValidation: n }, r) {
            const i = [];
            return (
              t.field
                ? (t.strict
                    ? i.push(
                        `\n\t\t\t\tif (value !== parent["${t.field}"])\n\t\t\t`
                      )
                    : i.push(
                        `\n\t\t\t\tif (value != parent["${t.field}"])\n\t\t\t`
                      ),
                  i.push(
                    `\n\t\t\t\t${this.makeError({
                      type: "equalField",
                      actual: "value",
                      expected: JSON.stringify(t.field),
                      messages: e,
                    })}\n\t\t`
                  ))
                : (t.strict
                    ? i.push(
                        `\n\t\t\t\tif (value !== ${JSON.stringify(
                          t.value
                        )})\n\t\t\t`
                      )
                    : i.push(
                        `\n\t\t\t\tif (value != ${JSON.stringify(
                          t.value
                        )})\n\t\t\t`
                      ),
                  i.push(
                    `\n\t\t\t\t${this.makeError({
                      type: "equalValue",
                      actual: "value",
                      expected: JSON.stringify(t.value),
                      messages: e,
                    })}\n\t\t`
                  )),
              i.push(`\n\t\t${n("value")}\n\t\treturn value;\n\t`),
              { source: i.join("\n") }
            );
          },
          F = function ({ schema: t, messages: e, customValidation: n }, r) {
            const i = [];
            return (
              i.push("\n\t\tif (value !== null && value !== undefined) {\n\t"),
              t.remove
                ? i.push("\n\t\t\treturn undefined;\n\t\t")
                : i.push(
                    `\n\t\t\t${this.makeError({
                      type: "forbidden",
                      actual: "value",
                      messages: e,
                    })}\n\t\t`
                  ),
              i.push(`\n\t\t}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`),
              { source: i.join("\n") }
            );
          },
          q = function ({ schema: t, messages: e, customValidation: n }, r) {
            return {
              source: `\n\t\t\tif (typeof value !== "function")\n\t\t\t\t${this.makeError(
                { type: "function", actual: "value", messages: e }
              )}\n\n\t\t\t${n("value")}\n\n\t\t\treturn value;\n\t\t`,
            };
          },
          R = function ({ schema: t, messages: e, customValidation: n }, r, i) {
            const o = [];
            o.push(
              "\n\t\tvar prevErrLen = errors.length;\n\t\tvar errBefore;\n\t\tvar hasValid = false;\n\t\tvar newVal = value;\n\t"
            );
            for (let e = 0; e < t.rules.length; e++) {
              o.push(
                "\n\t\t\tif (!hasValid) {\n\t\t\t\terrBefore = errors.length;\n\t\t"
              );
              const n = this.getRuleFromSchema(t.rules[e]);
              o.push(
                this.compileRule(
                  n,
                  i,
                  r,
                  "var tmpVal = context.fn[%%INDEX%%](value, field, parent, errors, context);",
                  "tmpVal"
                )
              ),
                o.push(
                  "\n\t\t\t\tif (errors.length == errBefore) {\n\t\t\t\t\thasValid = true;\n\t\t\t\t\tnewVal = tmpVal;\n\t\t\t\t}\n\t\t\t}\n\t\t"
                );
            }
            return (
              o.push(
                `\n\t\tif (hasValid) {\n\t\t\terrors.length = prevErrLen;\n\t\t}\n\t\t${n(
                  "newVal"
                )}\n\t\treturn newVal;\n\t`
              ),
              { source: o.join("\n") }
            );
          },
          G = function ({ schema: t, messages: e, customValidation: n }, r) {
            const i = [];
            i.push("\n\t\tvar origValue = value;\n\t");
            let o = !1;
            return (
              !0 === t.convert &&
                ((o = !0),
                i.push(
                  '\n\t\t\tif (typeof value !== "number") {\n\t\t\t\tvalue = Number(value);\n\t\t\t}\n\t\t'
                )),
              i.push(
                `\n\t\tif (typeof value !== "number" || isNaN(value) || !isFinite(value)) {\n\t\t\t${this.makeError(
                  { type: "number", actual: "origValue", messages: e }
                )}\n\t\t\treturn value;\n\t\t}\n\t`
              ),
              null != t.min &&
                i.push(
                  `\n\t\t\tif (value < ${t.min}) {\n\t\t\t\t${this.makeError({
                    type: "numberMin",
                    expected: t.min,
                    actual: "origValue",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != t.max &&
                i.push(
                  `\n\t\t\tif (value > ${t.max}) {\n\t\t\t\t${this.makeError({
                    type: "numberMax",
                    expected: t.max,
                    actual: "origValue",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != t.equal &&
                i.push(
                  `\n\t\t\tif (value !== ${
                    t.equal
                  }) {\n\t\t\t\t${this.makeError({
                    type: "numberEqual",
                    expected: t.equal,
                    actual: "origValue",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != t.notEqual &&
                i.push(
                  `\n\t\t\tif (value === ${
                    t.notEqual
                  }) {\n\t\t\t\t${this.makeError({
                    type: "numberNotEqual",
                    expected: t.notEqual,
                    actual: "origValue",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              !0 === t.integer &&
                i.push(
                  `\n\t\t\tif (value % 1 !== 0) {\n\t\t\t\t${this.makeError({
                    type: "numberInteger",
                    actual: "origValue",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              !0 === t.positive &&
                i.push(
                  `\n\t\t\tif (value <= 0) {\n\t\t\t\t${this.makeError({
                    type: "numberPositive",
                    actual: "origValue",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              !0 === t.negative &&
                i.push(
                  `\n\t\t\tif (value >= 0) {\n\t\t\t\t${this.makeError({
                    type: "numberNegative",
                    actual: "origValue",
                    messages: e,
                  })}\n\t\t\t}\n\t\t`
                ),
              i.push(`\n\t\t${n("value")}\n\t\treturn value;\n\t`),
              { sanitized: o, source: i.join("\n") }
            );
          };
        const H = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/,
          K = /["'\\\n\r\u2028\u2029]/g;
        function W(t) {
          return t.replace(K, function (t) {
            switch (t) {
              case '"':
              case "'":
              case "\\":
                return "\\" + t;
              case "\n":
                return "\\n";
              case "\r":
                return "\\r";
              case "\u2028":
                return "\\u2028";
              case "\u2029":
                return "\\u2029";
            }
          });
        }
        var U = function (
          { schema: t, messages: e, customValidation: n },
          r,
          i
        ) {
          const o = [];
          o.push(
            `\n\t\tif (typeof value !== "object" || value === null || Array.isArray(value)) {\n\t\t\t${this.makeError(
              { type: "object", actual: "value", messages: e }
            )}\n\t\t\treturn value;\n\t\t}\n\t`
          );
          const a = t.properties || t.props;
          if (a) {
            o.push("var parentObj = value;"),
              o.push("var parentField = field;");
            const n = Object.keys(a);
            for (let t = 0; t < n.length; t++) {
              const e = n[t],
                s = W(e),
                u = H.test(s) ? "." + s : `['${s}']`,
                c = "parentObj" + u,
                l = (r ? r + "." : "") + e;
              o.push("\n// Field: " + W(l)),
                o.push(`field = parentField ? parentField + "${u}" : "${s}";`),
                o.push(`value = ${c};`);
              const h = this.getRuleFromSchema(a[e]);
              o.push(
                this.compileRule(
                  h,
                  i,
                  l,
                  c +
                    " = context.fn[%%INDEX%%](value, field, parentObj, errors, context);",
                  c
                )
              );
            }
            if (t.strict) {
              const n = Object.keys(a);
              o.push(
                `\n\t\t\t\tfield = parentField;\n\t\t\t\tvar invalidProps = [];\n\t\t\t\tvar props = Object.keys(parentObj);\n\n\t\t\t\tfor (let i = 0; i < props.length; i++) {\n\t\t\t\t\tif (${JSON.stringify(
                  n
                )}.indexOf(props[i]) === -1) {\n\t\t\t\t\t\tinvalidProps.push(props[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (invalidProps.length) {\n\t\t\t`
              ),
                "remove" == t.strict
                  ? o.push(
                      "\n\t\t\t\t\tinvalidProps.forEach(function(field) {\n\t\t\t\t\t\tdelete parentObj[field];\n\t\t\t\t\t});\n\t\t\t\t"
                    )
                  : o.push(
                      `\n\t\t\t\t\t${this.makeError({
                        type: "objectStrict",
                        expected: '"' + n.join(", ") + '"',
                        actual: "invalidProps.join(', ')",
                        messages: e,
                      })}\n\t\t\t\t`
                    ),
                o.push("\n\t\t\t\t}\n\t\t\t");
            }
            o.push("\n\t\t\treturn parentObj;\n\t\t");
          } else o.push(`\n\t\t\t${n("value")}\n\t\t\treturn value;\n\t\t`);
          return { source: o.join("\n") };
        };
        const J = /^-?[0-9]\d*(\.\d+)?$/,
          Z = /^[a-zA-Z]+$/,
          Q = /^[a-zA-Z0-9]+$/,
          X = /^[a-zA-Z0-9_-]+$/;
        var Y = function (
          { schema: t, messages: e, customValidation: n },
          r,
          i
        ) {
          const o = [];
          let a = !1;
          if (
            (!0 === t.convert &&
              ((a = !0),
              o.push(
                '\n\t\t\tif (typeof value !== "string") {\n\t\t\t\tvalue = String(value);\n\t\t\t}\n\t\t'
              )),
            o.push(
              `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
                type: "string",
                actual: "value",
                messages: e,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar origValue = value;\n\t`
            ),
            t.trim && ((a = !0), o.push("\n\t\t\tvalue = value.trim();\n\t\t")),
            t.trimLeft &&
              ((a = !0), o.push("\n\t\t\tvalue = value.trimLeft();\n\t\t")),
            t.trimRight &&
              ((a = !0), o.push("\n\t\t\tvalue = value.trimRight();\n\t\t")),
            t.padStart)
          ) {
            a = !0;
            const e = null != t.padChar ? t.padChar : " ";
            o.push(
              `\n\t\t\tvalue = value.padStart(${t.padStart}, ${JSON.stringify(
                e
              )});\n\t\t`
            );
          }
          if (t.padEnd) {
            a = !0;
            const e = null != t.padChar ? t.padChar : " ";
            o.push(
              `\n\t\t\tvalue = value.padEnd(${t.padEnd}, ${JSON.stringify(
                e
              )});\n\t\t`
            );
          }
          if (
            (t.lowercase &&
              ((a = !0), o.push("\n\t\t\tvalue = value.toLowerCase();\n\t\t")),
            t.uppercase &&
              ((a = !0), o.push("\n\t\t\tvalue = value.toUpperCase();\n\t\t")),
            t.localeLowercase &&
              ((a = !0),
              o.push("\n\t\t\tvalue = value.toLocaleLowerCase();\n\t\t")),
            t.localeUppercase &&
              ((a = !0),
              o.push("\n\t\t\tvalue = value.toLocaleUpperCase();\n\t\t")),
            o.push("\n\t\t\tvar len = value.length;\n\t"),
            !1 === t.empty &&
              o.push(
                `\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({
                  type: "stringEmpty",
                  actual: "value",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.min &&
              o.push(
                `\n\t\t\tif (len < ${t.min}) {\n\t\t\t\t${this.makeError({
                  type: "stringMin",
                  expected: t.min,
                  actual: "len",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.max &&
              o.push(
                `\n\t\t\tif (len > ${t.max}) {\n\t\t\t\t${this.makeError({
                  type: "stringMax",
                  expected: t.max,
                  actual: "len",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.length &&
              o.push(
                `\n\t\t\tif (len !== ${t.length}) {\n\t\t\t\t${this.makeError({
                  type: "stringLength",
                  expected: t.length,
                  actual: "len",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.pattern)
          ) {
            let n = t.pattern;
            "string" == typeof t.pattern &&
              (n = new RegExp(t.pattern, t.patternFlags)),
              o.push(
                `\n\t\t\tif (!${n.toString()}.test(value))\n\t\t\t\t${this.makeError(
                  {
                    type: "stringPattern",
                    expected: '"' + n.toString().replace('"', '\\"') + '"',
                    actual: "origValue",
                    messages: e,
                  }
                )}\n\t\t`
              );
          }
          if (
            (null != t.contains &&
              o.push(
                `\n\t\t\tif (value.indexOf("${
                  t.contains
                }") === -1) {\n\t\t\t\t${this.makeError({
                  type: "stringContains",
                  expected: '"' + t.contains + '"',
                  actual: "origValue",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.enum)
          ) {
            const n = JSON.stringify(t.enum);
            o.push(
              `\n\t\t\tif (${n}.indexOf(value) === -1) {\n\t\t\t\t${this.makeError(
                {
                  type: "stringEnum",
                  expected: '"' + t.enum.join(", ") + '"',
                  actual: "origValue",
                  messages: e,
                }
              )}\n\t\t\t}\n\t\t`
            );
          }
          return (
            !0 === t.numeric &&
              o.push(
                `\n\t\t\tif (!${J.toString()}.test(value) ) {\n\t\t\t\t${this.makeError(
                  { type: "stringNumeric", actual: "origValue", messages: e }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === t.alpha &&
              o.push(
                `\n\t\t\tif(!${Z.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlpha", actual: "origValue", messages: e }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === t.alphanum &&
              o.push(
                `\n\t\t\tif(!${Q.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlphanum", actual: "origValue", messages: e }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === t.alphadash &&
              o.push(
                `\n\t\t\tif(!${X.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlphadash", actual: "origValue", messages: e }
                )}\n\t\t\t}\n\t\t`
              ),
            o.push(`\n\t\t${n("value")}\n\t\treturn value;\n\t`),
            { sanitized: a, source: o.join("\n") }
          );
        };
        const tt = /^https?:\/\/\S+/;
        var et = function ({ schema: t, messages: e, customValidation: n }, r) {
          const i = [];
          return (
            i.push(
              `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
                type: "string",
                actual: "value",
                messages: e,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tif (!${tt.toString()}.test(value)) {\n\t\t\t${this.makeError(
                { type: "url", actual: "value", messages: e }
              )}\n\t\t}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`
            ),
            { source: i.join("\n") }
          );
        };
        const nt = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        var rt = function ({ schema: t, messages: e }, n) {
          const r = [];
          return (
            r.push(
              `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
                type: "string",
                actual: "value",
                messages: e,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar val = value.toLowerCase();\n\t\tif (!${nt.toString()}.test(val)) {\n\t\t\t${this.makeError(
                { type: "uuid", actual: "value", messages: e }
              )}\n\t\t\treturn value;\n\t\t}\n\n\t\tconst version = val.charAt(14) | 0;\n\t`
            ),
            t.version &&
              r.push(
                `\n\t\t\tif (${
                  t.version
                } !== version) {\n\t\t\t\t${this.makeError({
                  type: "uuidVersion",
                  expected: t.version,
                  actual: "version",
                  messages: e,
                })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
              ),
            r.push(
              `\n\t\tswitch (version) {\n\t\tcase 1:\n\t\tcase 2:\n\t\t\tbreak;\n\t\tcase 3:\n\t\tcase 4:\n\t\tcase 5:\n\t\t\tif (["8", "9", "a", "b"].indexOf(value.charAt(19)) === -1) {\n\t\t\t\t${this.makeError(
                { type: "uuid", actual: "value", messages: e }
              )}\n\t\t\t}\n\t\t}\n\n\t\treturn value;\n\t`
            ),
            { source: r.join("\n") }
          );
        };
        const it = /^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;
        var ot = function ({ schema: t, messages: e, customValidation: n }, r) {
            return {
              source: `\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError(
                { type: "string", actual: "value", messages: e }
              )}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tvar v = value.toLowerCase();\n\t\t\tif (!${it.toString()}.test(v)) {\n\t\t\t\t${this.makeError(
                { type: "mac", actual: "value", messages: e }
              )}\n\t\t\t}\n\t\t\t${n("value")}\n\t\t\treturn value;\n\t\t`,
            };
          },
          at = function ({ schema: t, messages: e, customValidation: n }, r) {
            return {
              source: `\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError(
                { type: "string", actual: "value", messages: e }
              )}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (typeof value !== "string")\n\t\t\t\tvalue = String(value);\n\n\t\t\tval = value.replace(/\\D+/g, "");\n\n\t\t\tvar array = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];\n\t\t\tvar len = val ? val.length : 0,\n\t\t\t\tbit = 1,\n\t\t\t\tsum = 0;\n\t\t\twhile (len--) {\n\t\t\t\tsum += !(bit ^= 1) ? parseInt(val[len], 10) : array[val[len]];\n\t\t\t}\n\n\t\t\tif (!(sum % 10 === 0 && sum > 0)) {\n\t\t\t\t${this.makeError(
                { type: "luhn", actual: "value", messages: e }
              )}\n\t\t\t}\n\n\t\t\t${n("value")}\n\n\t\t\treturn value;\n\t\t`,
            };
          },
          st =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : void 0 !== t
              ? t
              : "undefined" != typeof self
              ? self
              : {};
        function ut() {
          throw new Error(
            "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
          );
        }
        function ct(t, e) {
          return t((e = { exports: {} }), e.exports), e.exports;
        }
        let lt, ht, dt, pt;
        var ft = function (t) {
            lt ||
              ((lt = ut()),
              (ht = {
                parser: "babel",
                useTabs: !1,
                printWidth: 120,
                trailingComma: "none",
                tabWidth: 4,
                singleQuote: !1,
                semi: !0,
                bracketSpacing: !0,
              }),
              (dt = ut()),
              (pt = {
                language: "js",
                theme: dt.fromJson({
                  keyword: ["white", "bold"],
                  built_in: "magenta",
                  literal: "cyan",
                  number: "magenta",
                  regexp: "red",
                  string: ["yellow", "bold"],
                  symbol: "plain",
                  class: "blue",
                  attr: "plain",
                  function: ["white", "bold"],
                  title: "plain",
                  params: "green",
                  comment: "grey",
                }),
              }));
            const e = lt.format(t, ht);
            return dt.highlight(e, pt);
          },
          vt = new RegExp(
            /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/,
            "gi"
          ),
          yt = new RegExp(/^[-+]?\d+$/),
          mt = function () {
            var t = new (class {
              constructor(t) {
                (this.opts = { messages: A({}, E) }),
                  t && A(this.opts, t),
                  (this.messages = this.opts.messages),
                  (this.rules = {
                    any: M,
                    array: S,
                    boolean: T,
                    custom: D,
                    date: B,
                    email: $,
                    enum: z,
                    equal: N,
                    forbidden: F,
                    function: q,
                    multi: R,
                    number: G,
                    object: U,
                    string: Y,
                    url: et,
                    uuid: rt,
                    mac: ot,
                    luhn: at,
                  }),
                  (this.aliases = {}),
                  (this.cache = new Map());
              }
              validate(t, e) {
                return this.compile(e)(t);
              }
              wrapRequiredCheckSourceCode(t, e, n) {
                const r = [],
                  i =
                    null != t.schema.default
                      ? JSON.stringify(t.schema.default)
                      : null;
                return (
                  r.push(
                    "\n\t\t\tif (value === undefined || value === null) {\n\t\t"
                  ),
                  !0 === t.schema.optional || "forbidden" == t.schema.type
                    ? null != i && n
                      ? r.push(`${n} = ${i};`)
                      : r.push("// Do nothing, it's an optional field")
                    : null != i && n
                    ? r.push(`${n} = ${i};`)
                    : r.push(
                        this.makeError({
                          type: "required",
                          actual: "value",
                          messages: t.messages,
                        })
                      ),
                  r.push("} else {"),
                  e && r.push(e),
                  r.push("\t\t}"),
                  r.join("\n")
                );
              }
              compile(t) {
                if (null === t || "object" != typeof t)
                  throw new Error("Invalid schema.");
                const e = this,
                  n = { index: 0, rules: [], fn: [], customs: {} };
                if ((this.cache.clear(), !0 !== t.$$root))
                  if (Array.isArray(t)) t = this.getRuleFromSchema(t).schema;
                  else {
                    const e = Object.assign({}, t);
                    (t = { type: "object", strict: e.$$strict, properties: e }),
                      delete e.$$strict;
                  }
                const r = ["var errors = [];", "var field;"],
                  i = this.getRuleFromSchema(t);
                r.push(
                  this.compileRule(
                    i,
                    n,
                    null,
                    "context.fn[%%INDEX%%](value, field, null, errors, context);",
                    "value"
                  )
                ),
                  r.push("if (errors.length) {"),
                  r.push(
                    '\n\t\t\treturn errors.map(err => {\n\t\t\t\tif (err.message)\n\t\t\t\t\terr.message = err.message\n\t\t\t\t\t\t.replace(/\\{field\\}/g, err.field || "")\n\t\t\t\t\t\t.replace(/\\{expected\\}/g, err.expected != null ? err.expected : "")\n\t\t\t\t\t\t.replace(/\\{actual\\}/g, err.actual != null ? err.actual : "");\n\n\t\t\t\treturn err;\n\t\t\t});\n\t\t'
                  ),
                  r.push("}"),
                  r.push("return true;");
                const o = r.join("\n"),
                  a = new Function("value", "context", o);
                if (this.opts.debug) {
                  let t = function (t) {
                    return t;
                  };
                  "undefined" == typeof window && (t = ft),
                    n.fn.forEach((e, n) =>
                      console.log(t(`// Context.fn[${n}]\n` + e.toString()))
                    ),
                    console.log(t("// Main check function\n" + a.toString()));
                }
                return (
                  this.cache.clear(),
                  function (t) {
                    return (n.data = t), a.call(e, t, n);
                  }
                );
              }
              compileRule(t, e, n, r, i) {
                const o = [],
                  a = this.cache.get(t.schema);
                if (a)
                  ((t = a).cycle = !0),
                    (t.cycleStack = []),
                    o.push(
                      this.wrapRequiredCheckSourceCode(
                        t,
                        `\n\t\t\t\tvar rule = context.rules[${
                          t.index
                        }];\n\t\t\t\tif (rule.cycleStack.indexOf(value) === -1) {\n\t\t\t\t\trule.cycleStack.push(value);\n\t\t\t\t\t${r.replace(
                          "%%INDEX%%",
                          t.index
                        )}\n\t\t\t\t\trule.cycleStack.pop(value);\n\t\t\t\t}\n\t\t\t`,
                        i
                      )
                    );
                else {
                  this.cache.set(t.schema, t),
                    (t.index = e.index),
                    (e.rules[e.index] = t),
                    "function" == typeof t.schema.custom &&
                      ((e.customs[n] = {
                        schema: t.schema,
                        messages: t.messages,
                      }),
                      (t.customValidation = (t) =>
                        `\n\t\t\t\t\tconst rule = context.customs["${n}"];\n\t\t\t\t\tconst res = rule.schema.custom.call(this, ${t}, rule.schema, "${n}", parent, context);\n\t\t\t\t\tif (Array.isArray(res)) {\n\t\t\t\t\t\tres.forEach(err => errors.push(Object.assign({ message: rule.messages[err.type], field }, err)));\n\t\t\t\t\t}\n\t\t\t\t`)),
                    e.index++;
                  const a = t.ruleFunction.call(this, t, n, e);
                  if (a.source) {
                    const n = new Function(
                      "value",
                      "field",
                      "parent",
                      "errors",
                      "context",
                      a.source
                    );
                    (e.fn[t.index] = n),
                      o.push(
                        this.wrapRequiredCheckSourceCode(
                          t,
                          r.replace("%%INDEX%%", t.index),
                          i
                        )
                      );
                  } else o.push(this.wrapRequiredCheckSourceCode(t));
                }
                return o.join("\n");
              }
              getRuleFromSchema(t) {
                if ("string" == typeof t) {
                  const e = t.split("|").map((t) => t.trim());
                  (t = { type: e[0] }),
                    e.slice(1).map((e) => {
                      const n = e.indexOf(":");
                      if (-1 !== n) {
                        const r = e.substr(0, n).trim();
                        let i = e.substr(n + 1).trim();
                        "true" === i || "false" === i
                          ? (i = "true" === i)
                          : Number.isNaN(Number(i)) || (i = Number(i)),
                          (t[r] = i);
                      } else
                        e.startsWith("no-")
                          ? (t[e.slice(3)] = !1)
                          : (t[e] = !0);
                    });
                } else if (Array.isArray(t)) {
                  if (0 == t.length) throw new Error("Invalid schema.");
                  (t = { type: "multi", rules: t }).rules
                    .map((t) => this.getRuleFromSchema(t))
                    .every((t) => 1 == t.schema.optional) && (t.optional = !0);
                }
                const e = this.aliases[t.type];
                e && (delete t.type, (t = Object.assign({}, e, t)));
                const n = this.rules[t.type];
                if (!n)
                  throw new Error(
                    "Invalid '" + t.type + "' type in validator schema."
                  );
                return {
                  messages: Object.assign({}, this.messages, t.messages),
                  schema: t,
                  ruleFunction: n,
                  customValidation: () => "",
                };
              }
              makeError({
                type: t,
                field: e,
                expected: n,
                actual: r,
                messages: i,
              }) {
                const o = { type: `"${t}"`, message: `"${i[t]}"` };
                return (
                  (o.field = e ? `"${e}"` : "field"),
                  n && (o.expected = n),
                  r && (o.actual = r),
                  `errors.push({ ${Object.keys(o)
                    .map((t) => `${t}: ${o[t]}`)
                    .join(", ")} });`
                );
              }
              add(t, e) {
                this.rules[t] = e;
              }
              alias(t, e) {
                if (this.rules[t])
                  throw new Error("Alias name must not be a rule name");
                this.aliases[t] = e;
              }
            })({
              messages: {
                color:
                  "The '{field}' field must be an a valid color! Actual: {actual}",
                measurement:
                  "The '{field}' must be a measurement with specs that are not met. Please check schema definition. Actual: {actual}",
              },
            });
            return (
              t.add("measurement", function (t, e, n) {
                var r = t.schema,
                  i = t.messages,
                  o = new RegExp(
                    "^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)(" +
                      r.units.join("|") +
                      ")$",
                    "gi"
                  ),
                  a = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi"),
                  s = r.units.join(", ");
                return {
                  source: "\n        if(typeof value !== 'string' && !(value instanceof String)){\n          "
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        units: s,
                        messages: i,
                      }),
                      "\n          return ;\n        }\n        if(!value.match("
                    )
                    .concat(o, ")){\n          ")
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        units: s,
                        messages: i,
                      }),
                      "\n        } else {\n          var numberPart = value.match("
                    )
                    .concat(a, ")[0];\n          if(")
                    .concat(
                      Object.prototype.hasOwnProperty.call(r, "min"),
                      "){\n            if("
                    )
                    .concat(r.min, " > numberPart){\n              ")
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        units: s,
                        messages: i,
                      }),
                      "\n            }\n          }\n          if("
                    )
                    .concat(
                      Object.prototype.hasOwnProperty.call(r, "max"),
                      "){\n            if("
                    )
                    .concat(r.max, " < numberPart){\n              ")
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        units: s,
                        messages: i,
                      }),
                      "\n            }\n          }\n           if("
                    )
                    .concat(
                      Object.prototype.hasOwnProperty.call(r, "integer"),
                      "){\n            if(!numberPart.match("
                    )
                    .concat(yt, ")){\n              ")
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        units: s,
                        messages: i,
                      }),
                      "\n            }\n          }\n        }\n        return value;\n      "
                    ),
                };
              }),
              t.add("html", function (t, e, n) {
                t.schema;
                var r = t.messages;
                return {
                  source: "\n        if(value === null){\n          ".concat(
                    this.makeError({
                      type: "html",
                      actual: "value",
                      messages: r,
                    }),
                    "\n        } else {\n          return value;\n        }\n      "
                  ),
                };
              }),
              t.add("css", function (t, e, n) {
                t.schema;
                var r = t.messages;
                return {
                  source: "\n        if(value === null){\n          ".concat(
                    this.makeError({
                      type: "css",
                      actual: "value",
                      messages: r,
                    }),
                    "\n        } else {\n          return value;\n        }\n      "
                  ),
                };
              }),
              t.add("color", function (t, e, n) {
                t.schema;
                var r = t.messages;
                return {
                  source: "\n        if(typeof value !== 'string' && !(value instanceof String)){\n          "
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        messages: r,
                      }),
                      "\n          return ;\n        }\n        if(!value.match("
                    )
                    .concat(
                      vt,
                      ') && [\n            "aliceblue",\n            "antiquewhite",\n            "aqua",\n            "aquamarine",\n            "azure",\n            "beige",\n            "bisque",\n            "black",\n            "blanchedalmond",\n            "blue",\n            "blueviolet",\n            "brown",\n            "burlywood",\n            "cadetblue",\n            "chartreuse",\n            "chocolate",\n            "coral",\n            "cornflowerblue",\n            "cornsilk",\n            "crimson",\n            "cyan",\n            "darkblue",\n            "darkcyan",\n            "darkgoldenrod",\n            "darkgray",\n            "darkgrey",\n            "darkgreen",\n            "darkkhaki",\n            "darkmagenta",\n            "darkolivegreen",\n            "darkorange",\n            "darkorchid",\n            "darkred",\n            "darksalmon",\n            "darkseagreen",\n            "darkslateblue",\n            "darkslategray",\n            "darkslategrey",\n            "darkturquoise",\n            "darkviolet",\n            "deeppink",\n            "deepskyblue",\n            "dimgray",\n            "dimgrey",\n            "dodgerblue",\n            "firebrick",\n            "floralwhite",\n            "forestgreen",\n            "fuchsia",\n            "gainsboro",\n            "ghostwhite",\n            "gold",\n            "goldenrod",\n            "gray",\n            "grey",\n            "green",\n            "greenyellow",\n            "honeydew",\n            "hotpink",\n            "indianred",\n            "indigo",\n            "ivory",\n            "khaki",\n            "lavender",\n            "lavenderblush",\n            "lawngreen",\n            "lemonchiffon",\n            "lightblue",\n            "lightcoral",\n            "lightcyan",\n            "lightgoldenrodyellow",\n            "lightgray",\n            "lightgrey",\n            "lightgreen",\n            "lightpink",\n            "lightsalmon",\n            "lightseagreen",\n            "lightskyblue",\n            "lightslategray",\n            "lightslategrey",\n            "lightsteelblue",\n            "lightyellow",\n            "lime",\n            "limegreen",\n            "linen",\n            "magenta",\n            "maroon",\n            "mediumaquamarine",\n            "mediumblue",\n            "mediumorchid",\n            "mediumpurple",\n            "mediumseagreen",\n            "mediumslateblue",\n            "mediumspringgreen",\n            "mediumturquoise",\n            "mediumvioletred",\n            "midnightblue",\n            "mintcream",\n            "mistyrose",\n            "moccasin",\n            "navajowhite",\n            "navy",\n            "oldlace",\n            "olive",\n            "olivedrab",\n            "orange",\n            "orangered",\n            "orchid",\n            "palegoldenrod",\n            "palegreen",\n            "paleturquoise",\n            "palevioletred",\n            "papayawhip",\n            "peachpuff",\n            "peru",\n            "pink",\n            "plum",\n            "powderblue",\n            "purple",\n            "rebeccapurple",\n            "red",\n            "rosybrown",\n            "royalblue",\n            "saddlebrown",\n            "salmon",\n            "sandybrown",\n            "seagreen",\n            "seashell",\n            "sienna",\n            "silver",\n            "skyblue",\n            "slateblue",\n            "slategray",\n            "slategrey",\n            "snow",\n            "springgreen",\n            "steelblue",\n            "tan",\n            "teal",\n            "thistle",\n            "tomato",\n            "turquoise",\n            "violet",\n            "wheat",\n            "white",\n            "whitesmoke",\n            "yellow",\n            "yellowgreen",\n          ].indexOf(value.toLowerCase()) < 0){\n          '
                    )
                    .concat(
                      this.makeError({
                        type: "color",
                        actual: "value",
                        messages: r,
                      }),
                      "\n        }\n        return value;\n      "
                    ),
                };
              }),
              t
            );
          },
          gt = [
            { key: "info", style: "color: #666;", level: 5 },
            {
              key: "notice",
              style:
                "background: rgba(0, 0, 0, 0.8); color:white; padding:8px;",
              level: 4,
            },
            {
              key: "warning",
              style: "color: black; background: orange;",
              level: 2,
            },
            { key: "error", style: "color: black; background: red;", level: 1 },
          ];
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        var bt = new window.AudioContext();
        function xt(t) {
          return "object" === n(t);
        }
        function kt(t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        }
        function _t(t, e) {
          return Math.round(t / e) * e;
        }
        function wt(t) {
          var e = t.split("___");
          return { mcid: e[0], attribute: e[1] };
        }
        function It() {
          return Math.floor(65536 * (1 + Math.random()))
            .toString(16)
            .substring(1);
        }
        function Ot() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            e = t ? "_" : "-";
          return It() + It() + e + It() + e + It();
        }
        function Ct(t, e) {
          return new Function("return `".concat(t, "`;")).call(e);
        }
        function jt(t, e) {
          return "".concat(t).concat("___").concat(e);
        }
        var Pt = (function () {
            function t(e) {
              r(this, t);
              var n = 1;
              e &&
                Object.prototype.hasOwnProperty.call(e, "logLevel") &&
                (n = e.logLevel);
              for (var i = 0; i < gt.length; i++) {
                var o = gt[i];
                n >= o.level
                  ? (this[o.key] = window.console.log.bind(
                      window.console,
                      "MotorCortex - ".concat(o.key, ": ")
                    ))
                  : (this[o.key] = function () {});
              }
              this.log =
                n >= 3
                  ? window.console.log.bind(window.console, "MotorCortex - ")
                  : function () {};
            }
            return (
              o(t, [
                {
                  key: "validateProps",
                  value: function (t, e, n) {
                    var r = mt().validate(t, e);
                    if (r.length > 0) {
                      for (
                        var i = "Error on plugin's \""
                            .concat(n.plugin_npm_name, '" "')
                            .concat(
                              n.ClassName,
                              '" instantiation. Errors (op props):'
                            ),
                          o = 0;
                        o < r.length;
                        o++
                      )
                        i += "\n - "
                          .concat(r[o].message, ". ")
                          .concat(r[o].actual, " provided");
                      return console.error(i), { result: !1, errors: r };
                    }
                    return { result: !0 };
                  },
                },
                {
                  key: "getElementByMCID",
                  value: function (t, e) {
                    return t.rootElement.querySelectorAll(
                      "[".concat("data-motorcortex2-id", '="').concat(e, '"]')
                    )[0];
                  },
                },
                {
                  key: "buildInitialValuesValidationRules",
                  value: function (t) {
                    var e = JSON.parse(JSON.stringify(t));
                    return (
                      (function t(e) {
                        if (
                          (("string" == typeof e || e instanceof String) &&
                            (e = { type: e }),
                          (e.optional = !0),
                          "object" === e.type)
                        )
                          for (var n in e.props) t(e.props[n]);
                      })(e),
                      e
                    );
                  },
                },
                {
                  key: "systoleDiastoleProjections",
                  value: function (t, e, n) {
                    for (var r = [], i = 0; i < t.length; i++) {
                      var o = t[i],
                        a = o.parentMillisecond - n;
                      1 !== e &&
                        r.push({
                          id: o.incident.id,
                          start: a * e + n,
                          end: a * e + n + o.incident.duration * e,
                          startDelta: a * e + n - o.millisecond,
                        });
                    }
                    return r;
                  },
                },
              ]),
              t
            );
          })(),
          At = new Pt();
        function Et(t) {
          return t.result
            ? { result: !0, execute: t.execute }
            : { result: !1, errors: t.errors };
        }
        var Mt = (function () {
          function t(e) {
            r(this, t),
              (this.runTimeInfo = e.runTimeInfo),
              (this.context = e.context),
              this.onInitialise(),
              (this.getIncidentById = e.getIncidentById);
          }
          return (
            o(
              t,
              [
                { key: "onInitialise", value: function () {} },
                {
                  key: "_resize",
                  value: function () {
                    At.log("Please overwite the _resize method of the Channel");
                  },
                },
                {
                  key: "addIncidents",
                  value: function (t) {
                    return Et(this.checkAddition(t));
                  },
                },
                {
                  key: "editIncidents",
                  value: function (t, e) {
                    return Et(this.checkEdit(t, e));
                  },
                },
                {
                  key: "removeIncidents",
                  value: function (t) {
                    var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return Et(this.checkDelete(t, e));
                  },
                },
                { key: "recalcScratchValues", value: function (t) {} },
                {
                  key: "checkAddition",
                  value: function (t) {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "checkEdit",
                  value: function (t, e) {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "checkDelete",
                  value: function (t) {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "checkResizedIncidents",
                  value: function (t) {
                    return { result: !0, execute: function () {} };
                  },
                },
                { key: "moveTo", value: function (t, e, n) {} },
              ],
              [
                {
                  key: "type",
                  get: function () {
                    return "plain";
                  },
                },
              ]
            ),
            t
          );
        })();
        function St(t) {
          t.descriptor.value = function (t) {
            this.duration = this.duration * t;
          };
        }
        var Tt = "up",
          Dt = "down",
          Bt = "native.tree.bypass",
          Lt = w(null, function (t) {
            return {
              F: function e() {
                var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                r(this, e),
                  t(this),
                  (this.parentNode = null),
                  (this.isNode = !1),
                  Object.prototype.hasOwnProperty.call(n, "id")
                    ? (this.id = n.id)
                    : (this.id = Ot()),
                  (this.props = n);
              },
              d: [
                {
                  kind: "get",
                  key: "delay",
                  value: function () {
                    return Object.prototype.hasOwnProperty.call(
                      this.props,
                      "delay"
                    )
                      ? this.props.delay
                      : 0;
                  },
                },
                {
                  kind: "set",
                  key: "delay",
                  value: function (t) {
                    0 !== t && (this.props.delay = t);
                  },
                },
                {
                  kind: "get",
                  key: "hiatus",
                  value: function () {
                    return Object.prototype.hasOwnProperty.call(
                      this.props,
                      "hiatus"
                    )
                      ? this.props.hiatus
                      : 0;
                  },
                },
                {
                  kind: "set",
                  key: "hiatus",
                  value: function (t) {
                    0 !== t && (this.props.hiatus = t);
                  },
                },
                {
                  kind: "get",
                  key: "repeats",
                  value: function () {
                    return Object.prototype.hasOwnProperty.call(
                      this.props,
                      "repeats"
                    )
                      ? this.props.repeats
                      : 1;
                  },
                },
                {
                  kind: "set",
                  key: "repeats",
                  value: function (t) {
                    this.props.repeats = t;
                  },
                },
                {
                  kind: "get",
                  key: "duration",
                  value: function () {
                    return (
                      this.repeats *
                      (this.delay + this.props.duration + this.hiatus)
                    );
                  },
                },
                {
                  kind: "set",
                  key: "duration",
                  value: function (t) {
                    var e = t / this.duration;
                    (this.props.duration *= e),
                      (this.hiatus *= e),
                      (this.delay *= e);
                  },
                },
                {
                  kind: "method",
                  key: "setNewDuration",
                  value: function (t) {
                    (this.duration = t),
                      this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                        selfExecute: !1,
                        direction: Tt,
                      });
                  },
                },
                {
                  kind: "method",
                  decorators: [St],
                  key: "systoleDiastole",
                  value: function () {},
                },
                {
                  kind: "get",
                  key: "hasParent",
                  value: function () {
                    return null !== this.parentNode;
                  },
                },
                {
                  kind: "method",
                  key: "attachToNode",
                  value: function (t) {
                    this.parentNode = t;
                  },
                },
                {
                  kind: "method",
                  key: "detachFromParent",
                  value: function () {
                    this.parentNode = null;
                  },
                },
                {
                  kind: "method",
                  key: "putMessageOnPipe",
                  value: function (t, e, n) {
                    var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {};
                    if (
                      (Object.prototype.hasOwnProperty.call(r, "direction") ||
                        (r.direction = Dt),
                      r.direction !== Dt ||
                        Object.prototype.hasOwnProperty.call(
                          r,
                          "positionDelta"
                        ) ||
                        (r.positionDelta = 0),
                      r.selfExecute)
                    ) {
                      var i = "handle".concat(kt(t)),
                        o = "function" == typeof this[i];
                      if (o) {
                        var a = this[i](n, e);
                        if (a !== Bt) {
                          var s = { response: a, responder: this };
                          return r.direction === Tt
                            ? s
                            : [u({}, s, { positionDelta: r.positionDelta })];
                        }
                      }
                    }
                    return r.direction === Tt
                      ? this.hasParent
                        ? this.parentNode.putMessageOnPipe(t, e, n, {
                            selfExecute: !0,
                            direction: Tt,
                          })
                        : { response: !1, responder: null }
                      : [];
                  },
                },
                {
                  kind: "method",
                  key: "bypass",
                  value: function () {
                    return Bt;
                  },
                },
                {
                  kind: "get",
                  key: "positionOnPyramidion",
                  value: function () {
                    return this.getPositionOnPyramidion();
                  },
                },
                {
                  kind: "method",
                  key: "getPositionOnPyramidion",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0;
                    if (this.hasParent) {
                      var e = this.putMessageOnPipe(
                        "getPositionOnPyramidion",
                        { delta: t, id: this.id },
                        "Parent",
                        { selfExecute: !1, direction: Tt }
                      );
                      return e.response;
                    }
                    return t;
                  },
                },
              ],
            };
          }),
          Vt = "The Leaf with the requested id couldn't be found on the Tree",
          $t = w(
            null,
            function (t, e) {
              var n = (function (e) {
                c(i, e);
                var n = f(i);
                function i() {
                  var e,
                    o =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  return (
                    r(this, i),
                    (e = n.call(this, o)),
                    t(d(e)),
                    (e.isNode = !0),
                    (e.children = {}),
                    (e.calculatedDuration = 0),
                    e
                  );
                }
                return i;
              })(e);
              return {
                F: n,
                d: [
                  {
                    kind: "get",
                    key: "duration",
                    value: function () {
                      return this.calculatedDuration;
                    },
                  },
                  {
                    kind: "set",
                    key: "duration",
                    value: function (t) {
                      var e = t / this.duration;
                      for (var n in (this.props &&
                        Object.prototype.hasOwnProperty.call(
                          this.props,
                          "duration"
                        ) &&
                        (this.props.duration = t),
                      (this.calculatedDuration = t),
                      this.children)) {
                        var r = this.children[n];
                        this.editPosition(r.id, r.position * e, !0),
                          r.leaf.systoleDiastole(e);
                      }
                    },
                  },
                  {
                    kind: "method",
                    key: "setNewDuration",
                    value: function (t) {
                      (this.duration = t),
                        this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                          selfExecute: !1,
                          direction: Tt,
                        });
                    },
                  },
                  {
                    kind: "method",
                    key: "_calculateDuration",
                    value: function () {
                      var t = 0;
                      for (var e in this.children) {
                        var n = this.children[e];
                        n.position + n.leaf.duration > t &&
                          (t = n.position + n.leaf.duration);
                      }
                      return (
                        t !== this.calculatedDuration &&
                        (this.props &&
                          Object.prototype.hasOwnProperty.call(
                            this.props,
                            "duration"
                          ) &&
                          (this.props.duration = t),
                        (this.calculatedDuration = t),
                        !0)
                      );
                    },
                  },
                  {
                    kind: "method",
                    decorators: [St],
                    key: "systoleDiastole",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "handleRecalcDuration",
                    value: function (t, e) {
                      return (
                        !this._calculateDuration() ||
                        this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                          selfExecute: !1,
                          direction: Tt,
                        })
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "getLeafById",
                    value: function (t) {
                      var e =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      if (
                        Object.prototype.hasOwnProperty.call(this.children, t)
                      )
                        return this.children[t].leaf;
                      if (e) return null;
                      for (var n in this.children) {
                        var r = this.children[n].leaf;
                        if (r.isNode) {
                          var i = r.getLeafById(t);
                          if (null != i) return i;
                        }
                      }
                      return null;
                    },
                  },
                  {
                    kind: "method",
                    key: "getLeafPosition",
                    value: function (t) {
                      if (
                        Object.prototype.hasOwnProperty.call(this.children, t)
                      )
                        return this.children[t].position;
                      var e = this.putMessageOnPipe(
                        "getLeafPosition",
                        { id: t },
                        "Groups",
                        { selfExecute: !1, direction: Dt }
                      );
                      return e.length > 0
                        ? e[0].positionDelta + e[0].response
                        : void 0;
                    },
                  },
                  {
                    kind: "method",
                    key: "handleGetLeafPosition",
                    value: function (t, e) {
                      return this.getLeafPosition(e.id);
                    },
                  },
                  {
                    kind: "method",
                    key: "checkAddition",
                    value: function (t, e) {
                      return t.hasParent
                        ? {
                            result: !1,
                            reason:
                              "Leaf has already been attached to another Node",
                          }
                        : e < 0
                        ? {
                            result: !1,
                            reason:
                              "Negative positioning of childs on nodes is not allowed",
                          }
                        : { result: !0 };
                    },
                  },
                  {
                    kind: "method",
                    key: "addChild",
                    value: function (t, e) {
                      return t.hasParent
                        ? {
                            result: !1,
                            reason:
                              "Leaf has already been attached to another Node",
                          }
                        : ((this.children[t.id] = {
                            id: t.id,
                            leaf: t,
                            position: e,
                          }),
                          t.attachToNode(this),
                          this.putMessageOnPipe(
                            "recalcDuration",
                            {},
                            "Groups",
                            { selfExecute: !0, direction: Tt }
                          ),
                          { result: !0 });
                    },
                  },
                  {
                    kind: "method",
                    key: "checkRemoveChild",
                    value: function (t) {
                      return Object.prototype.hasOwnProperty.call(
                        this.children,
                        t
                      )
                        ? { result: !0 }
                        : { result: !1, reason: Vt };
                    },
                  },
                  {
                    kind: "method",
                    key: "removeChild",
                    value: function (t) {
                      return (
                        this.children[t].leaf.detachFromParent(),
                        delete this.children[t],
                        this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                          selfExecute: !0,
                          direction: Tt,
                        }),
                        { result: !0 }
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "checkEditPosition",
                    value: function (t, e) {
                      return e < 0
                        ? {
                            result: !1,
                            reason:
                              "Negative positioning of childs on nodes is not allowed",
                          }
                        : Object.prototype.hasOwnProperty.call(this.children, t)
                        ? { result: !0 }
                        : { result: !1, reason: Vt };
                    },
                  },
                  {
                    kind: "method",
                    key: "editPosition",
                    value: function (t, e) {
                      var n =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2];
                      if (
                        Object.prototype.hasOwnProperty.call(this.children, t)
                      )
                        return (
                          (this.children[t].position = e),
                          n ||
                            this.putMessageOnPipe(
                              "recalcDuration",
                              {},
                              "Groups",
                              { selfExecute: !0, direction: Tt }
                            ),
                          { result: !0 }
                        );
                    },
                  },
                  {
                    kind: "method",
                    key: "putMessageOnPipe",
                    value: function (t, e, r) {
                      var i =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : {};
                      if (
                        (Object.prototype.hasOwnProperty.call(i, "direction") ||
                          (i.direction = Dt),
                        i.direction !== Dt ||
                          Object.prototype.hasOwnProperty.call(
                            i,
                            "positionDelta"
                          ) ||
                          (i.positionDelta = 0),
                        i.direction === Tt)
                      )
                        return y(l(n.prototype), "putMessageOnPipe", this).call(
                          this,
                          t,
                          e,
                          r,
                          i
                        );
                      var o = y(l(n.prototype), "putMessageOnPipe", this).call(
                        this,
                        t,
                        e,
                        r,
                        i
                      );
                      if (o.length > 0) return o;
                      for (var a in this.children) {
                        var s = this.children[a].leaf,
                          c = u({}, i, {
                            selfExecute: !0,
                            positionDelta:
                              i.positionDelta + this.children[a].position,
                          });
                        o = o.concat(s.putMessageOnPipe(t, e, r, c));
                      }
                      return o;
                    },
                  },
                  {
                    kind: "method",
                    key: "handleGetPositionOnPyramidion",
                    value: function (t, e) {
                      var n = e.delta + this.getLeafPosition(e.id);
                      return this.getPositionOnPyramidion(n);
                    },
                  },
                ],
              };
            },
            Lt
          );
        function zt(t) {
          t.descriptor.value = function (t) {
            void 0 === this.blockID && (this.blockID = Ot()),
              this.DescriptiveIncident.putMessageOnPipe(
                "setBlock",
                {
                  id: this.blockID,
                  description: t,
                  incidentId: this.DescriptiveIncident.id,
                  realIncidentId: this.id,
                },
                "rootClip",
                { selfExecute: !0, direction: Tt }
              );
          };
        }
        function Nt(t) {
          t.descriptor.value = function (t) {
            return this.id === t ? this : this.bypass();
          };
        }
        function Ft(t) {
          t.descriptor.value = function () {
            this.DescriptiveIncident.putMessageOnPipe(
              "unBlock",
              { id: this.blockID },
              "rootClip",
              { selfExecute: !0, direction: Tt }
            );
          };
        }
        var qt = w(
            null,
            function (t, e) {
              var n = (function (e) {
                c(i, e);
                var n = f(i);
                function i(e, o) {
                  var a;
                  return (
                    r(this, i),
                    (a = n.call(this, o)),
                    t(d(a)),
                    (a.mc_plugin_npm_name = "motor-cortex-js"),
                    (a.plugin_channel_class = Mt),
                    (a.hasIncidents = !0),
                    a.onGroupInitialise(),
                    (a.calculatedDuration = 0),
                    a
                  );
                }
                return i;
              })(e);
              return {
                F: n,
                d: [
                  {
                    kind: "method",
                    key: "onGroupInitialise",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "handleAddIncident",
                    value: function (t, e) {
                      if (this.id === t) {
                        var n = (0, e.incidentFromDescription)(
                          e.incident,
                          e.contextData,
                          e.audio
                        );
                        return null === n ? this.bypass() : n;
                      }
                      return this.bypass();
                    },
                  },
                  {
                    kind: "method",
                    key: "handleMoveIncident",
                    value: function (t, e) {
                      if (this.id === t) {
                        var n = this.getLeafById(e.incidentId, !0);
                        return null === n ? this.bypass() : n;
                      }
                      return this.bypass();
                    },
                  },
                  {
                    kind: "method",
                    key: "handleRemoveIncident",
                    value: function (t, e) {
                      if (this.id === t) {
                        var n = this.getLeafById(e.incidentId, !0);
                        return null === n ? this.bypass() : n;
                      }
                      return this.bypass();
                    },
                  },
                  {
                    kind: "method",
                    decorators: [Nt],
                    key: "handleResize",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "removeChild",
                    value: function (t) {
                      this.children[t].leaf.lastWish(),
                        y(l(n.prototype), "removeChild", this).call(this, t);
                    },
                  },
                  {
                    kind: "method",
                    key: "getIncidentsByChannel",
                    value: function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        n = {};
                      for (var r in ((n["motor-cortex-js"] = [
                        {
                          millisecond: t,
                          parentMillisecond: e,
                          incident: this,
                          id: this.id,
                        },
                      ]),
                      this.children)) {
                        var i = this.children[r],
                          o = i.leaf.getIncidentsByChannel(t + i.position, t);
                        for (var a in o)
                          Object.prototype.hasOwnProperty.call(n, a)
                            ? (n[a] = n[a].concat(o[a]))
                            : (n[a] = o[a]);
                      }
                      return n;
                    },
                  },
                  {
                    kind: "method",
                    key: "lastWish",
                    value: function () {
                      for (var t in this.children)
                        this.children[t].leaf.lastWish();
                    },
                  },
                  {
                    kind: "method",
                    decorators: [zt],
                    key: "setBlock",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [Ft],
                    key: "unblock",
                    value: function () {},
                  },
                ],
              };
            },
            $t
          ),
          Rt = ct(function (t, e) {
            var n = "[object Arguments]",
              r = "[object Map]",
              i = "[object Object]",
              o = "[object Set]",
              a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              s = /^\w*$/,
              u = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              c = /\\(\\)?/g,
              l = /^\[object .+?Constructor\]$/,
              h = /^(?:0|[1-9]\d*)$/,
              d = {};
            (d["[object Float32Array]"] = d["[object Float64Array]"] = d[
              "[object Int8Array]"
            ] = d["[object Int16Array]"] = d["[object Int32Array]"] = d[
              "[object Uint8Array]"
            ] = d["[object Uint8ClampedArray]"] = d["[object Uint16Array]"] = d[
              "[object Uint32Array]"
            ] = !0),
              (d[n] = d["[object Array]"] = d["[object ArrayBuffer]"] = d[
                "[object Boolean]"
              ] = d["[object DataView]"] = d["[object Date]"] = d[
                "[object Error]"
              ] = d["[object Function]"] = d[r] = d["[object Number]"] = d[
                i
              ] = d["[object RegExp]"] = d[o] = d["[object String]"] = d[
                "[object WeakMap]"
              ] = !1);
            var p = "object" == typeof st && st && st.Object === Object && st,
              f =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              v = p || f || Function("return this")(),
              y = e && !e.nodeType && e,
              m = y && t && !t.nodeType && t,
              g = m && m.exports === y,
              b = g && p.process,
              x = (function () {
                try {
                  return b && b.binding && b.binding("util");
                } catch (t) {}
              })(),
              k = x && x.isTypedArray;
            function _(t, e) {
              for (
                var n = -1, r = null == t ? 0 : t.length, i = 0, o = [];
                ++n < r;

              ) {
                var a = t[n];
                e(a, n, t) && (o[i++] = a);
              }
              return o;
            }
            function w(t, e) {
              for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
                if (e(t[n], n, t)) return !0;
              return !1;
            }
            function I(t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t, r) {
                  n[++e] = [r, t];
                }),
                n
              );
            }
            function O(t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t) {
                  n[++e] = t;
                }),
                n
              );
            }
            var C,
              j,
              P,
              A = Array.prototype,
              E = Function.prototype,
              M = Object.prototype,
              S = v["__core-js_shared__"],
              T = E.toString,
              D = M.hasOwnProperty,
              B = (C = /[^.]+$/.exec((S && S.keys && S.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + C
                : "",
              L = M.toString,
              V = RegExp(
                "^" +
                  T.call(D)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              $ = g ? v.Buffer : void 0,
              z = v.Symbol,
              N = v.Uint8Array,
              F = M.propertyIsEnumerable,
              q = A.splice,
              R = z ? z.toStringTag : void 0,
              G = Object.getOwnPropertySymbols,
              H = $ ? $.isBuffer : void 0,
              K =
                ((j = Object.keys),
                (P = Object),
                function (t) {
                  return j(P(t));
                }),
              W = Pt(v, "DataView"),
              U = Pt(v, "Map"),
              J = Pt(v, "Promise"),
              Z = Pt(v, "Set"),
              Q = Pt(v, "WeakMap"),
              X = Pt(Object, "create"),
              Y = Vt(W),
              tt = Vt(U),
              et = Vt(J),
              nt = Vt(Z),
              rt = Vt(Q),
              it = z ? z.prototype : void 0,
              ot = it ? it.valueOf : void 0,
              at = it ? it.toString : void 0;
            function ut(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
              }
            }
            function ct(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
              }
            }
            function lt(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
              }
            }
            function ht(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.__data__ = new lt(); ++e < n; ) this.add(t[e]);
            }
            function dt(t) {
              var e = (this.__data__ = new ct(t));
              this.size = e.size;
            }
            function pt(t, e) {
              for (var n = t.length; n--; ) if (zt(t[n][0], e)) return n;
              return -1;
            }
            (ut.prototype.clear = function () {
              (this.__data__ = X ? X(null) : {}), (this.size = 0);
            }),
              (ut.prototype.delete = function (t) {
                var e = this.has(t) && delete this.__data__[t];
                return (this.size -= e ? 1 : 0), e;
              }),
              (ut.prototype.get = function (t) {
                var e = this.__data__;
                if (X) {
                  var n = e[t];
                  return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return D.call(e, t) ? e[t] : void 0;
              }),
              (ut.prototype.has = function (t) {
                var e = this.__data__;
                return X ? void 0 !== e[t] : D.call(e, t);
              }),
              (ut.prototype.set = function (t, e) {
                var n = this.__data__;
                return (
                  (this.size += this.has(t) ? 0 : 1),
                  (n[t] = X && void 0 === e ? "__lodash_hash_undefined__" : e),
                  this
                );
              }),
              (ct.prototype.clear = function () {
                (this.__data__ = []), (this.size = 0);
              }),
              (ct.prototype.delete = function (t) {
                var e = this.__data__,
                  n = pt(e, t);
                return !(
                  n < 0 ||
                  (n == e.length - 1 ? e.pop() : q.call(e, n, 1),
                  --this.size,
                  0)
                );
              }),
              (ct.prototype.get = function (t) {
                var e = this.__data__,
                  n = pt(e, t);
                return n < 0 ? void 0 : e[n][1];
              }),
              (ct.prototype.has = function (t) {
                return pt(this.__data__, t) > -1;
              }),
              (ct.prototype.set = function (t, e) {
                var n = this.__data__,
                  r = pt(n, t);
                return (
                  r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
                );
              }),
              (lt.prototype.clear = function () {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new ut(),
                    map: new (U || ct)(),
                    string: new ut(),
                  });
              }),
              (lt.prototype.delete = function (t) {
                var e = jt(this, t).delete(t);
                return (this.size -= e ? 1 : 0), e;
              }),
              (lt.prototype.get = function (t) {
                return jt(this, t).get(t);
              }),
              (lt.prototype.has = function (t) {
                return jt(this, t).has(t);
              }),
              (lt.prototype.set = function (t, e) {
                var n = jt(this, t),
                  r = n.size;
                return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
              }),
              (ht.prototype.add = ht.prototype.push = function (t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this;
              }),
              (ht.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (dt.prototype.clear = function () {
                (this.__data__ = new ct()), (this.size = 0);
              }),
              (dt.prototype.delete = function (t) {
                var e = this.__data__,
                  n = e.delete(t);
                return (this.size = e.size), n;
              }),
              (dt.prototype.get = function (t) {
                return this.__data__.get(t);
              }),
              (dt.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (dt.prototype.set = function (t, e) {
                var n = this.__data__;
                if (n instanceof ct) {
                  var r = n.__data__;
                  if (!U || r.length < 199)
                    return r.push([t, e]), (this.size = ++n.size), this;
                  n = this.__data__ = new lt(r);
                }
                return n.set(t, e), (this.size = n.size), this;
              });
            var ft,
              vt =
                ((ft = function (t, e) {
                  return t && mt(t, e, Zt);
                }),
                function (t, e) {
                  if (null == t) return t;
                  if (!qt(t)) return ft(t, e);
                  for (
                    var n = t.length, r = -1, i = Object(t);
                    ++r < n && !1 !== e(i[r], r, i);

                  );
                  return t;
                });
            function yt(t, e) {
              var n = [];
              return (
                vt(t, function (t, r, i) {
                  e(t, r, i) && n.push(t);
                }),
                n
              );
            }
            var mt = function (t, e, n) {
              for (var r = -1, i = Object(t), o = n(t), a = o.length; a--; ) {
                var s = o[++r];
                if (!1 === e(i[s], s, i)) break;
              }
              return t;
            };
            function gt(t, e) {
              for (var n = 0, r = (e = It(e, t)).length; null != t && n < r; )
                t = t[Lt(e[n++])];
              return n && n == r ? t : void 0;
            }
            function bt(t) {
              return null == t
                ? void 0 === t
                  ? "[object Undefined]"
                  : "[object Null]"
                : R && R in Object(t)
                ? (function (t) {
                    var e = D.call(t, R),
                      n = t[R];
                    try {
                      t[R] = void 0;
                      var r = !0;
                    } catch (t) {}
                    var i = L.call(t);
                    return r && (e ? (t[R] = n) : delete t[R]), i;
                  })(t)
                : (function (t) {
                    return L.call(t);
                  })(t);
            }
            function xt(t, e) {
              return null != t && e in Object(t);
            }
            function kt(t) {
              return Wt(t) && bt(t) == n;
            }
            function _t(t, e, a, s, u) {
              return (
                t === e ||
                (null == t || null == e || (!Wt(t) && !Wt(e))
                  ? t != t && e != e
                  : (function (t, e, a, s, u, c) {
                      var l = Ft(t),
                        h = Ft(e),
                        d = l ? "[object Array]" : Et(t),
                        p = h ? "[object Array]" : Et(e),
                        f = (d = d == n ? i : d) == i,
                        v = (p = p == n ? i : p) == i,
                        y = d == p;
                      if (y && Rt(t)) {
                        if (!Rt(e)) return !1;
                        (l = !0), (f = !1);
                      }
                      if (y && !f)
                        return (
                          c || (c = new dt()),
                          l || Jt(t)
                            ? Ot(t, e, a, s, u, c)
                            : (function (t, e, n, i, a, s, u) {
                                switch (n) {
                                  case "[object DataView]":
                                    if (
                                      t.byteLength != e.byteLength ||
                                      t.byteOffset != e.byteOffset
                                    )
                                      return !1;
                                    (t = t.buffer), (e = e.buffer);
                                  case "[object ArrayBuffer]":
                                    return !(
                                      t.byteLength != e.byteLength ||
                                      !s(new N(t), new N(e))
                                    );
                                  case "[object Boolean]":
                                  case "[object Date]":
                                  case "[object Number]":
                                    return zt(+t, +e);
                                  case "[object Error]":
                                    return (
                                      t.name == e.name && t.message == e.message
                                    );
                                  case "[object RegExp]":
                                  case "[object String]":
                                    return t == e + "";
                                  case r:
                                    var c = I;
                                  case o:
                                    var l = 1 & i;
                                    if ((c || (c = O), t.size != e.size && !l))
                                      return !1;
                                    var h = u.get(t);
                                    if (h) return h == e;
                                    (i |= 2), u.set(t, e);
                                    var d = Ot(c(t), c(e), i, a, s, u);
                                    return u.delete(t), d;
                                  case "[object Symbol]":
                                    if (ot) return ot.call(t) == ot.call(e);
                                }
                                return !1;
                              })(t, e, d, a, s, u, c)
                        );
                      if (!(1 & a)) {
                        var m = f && D.call(t, "__wrapped__"),
                          g = v && D.call(e, "__wrapped__");
                        if (m || g) {
                          var b = m ? t.value() : t,
                            x = g ? e.value() : e;
                          return c || (c = new dt()), u(b, x, a, s, c);
                        }
                      }
                      return (
                        !!y &&
                        (c || (c = new dt()),
                        (function (t, e, n, r, i, o) {
                          var a = 1 & n,
                            s = Ct(t),
                            u = s.length;
                          if (u != Ct(e).length && !a) return !1;
                          for (var c = u; c--; ) {
                            var l = s[c];
                            if (!(a ? l in e : D.call(e, l))) return !1;
                          }
                          var h = o.get(t);
                          if (h && o.get(e)) return h == e;
                          var d = !0;
                          o.set(t, e), o.set(e, t);
                          for (var p = a; ++c < u; ) {
                            var f = t[(l = s[c])],
                              v = e[l];
                            if (r)
                              var y = a
                                ? r(v, f, l, e, t, o)
                                : r(f, v, l, t, e, o);
                            if (
                              !(void 0 === y ? f === v || i(f, v, n, r, o) : y)
                            ) {
                              d = !1;
                              break;
                            }
                            p || (p = "constructor" == l);
                          }
                          if (d && !p) {
                            var m = t.constructor,
                              g = e.constructor;
                            m == g ||
                              !("constructor" in t) ||
                              !("constructor" in e) ||
                              ("function" == typeof m &&
                                m instanceof m &&
                                "function" == typeof g &&
                                g instanceof g) ||
                              (d = !1);
                          }
                          return o.delete(t), o.delete(e), d;
                        })(t, e, a, s, u, c))
                      );
                    })(t, e, a, s, _t, u))
              );
            }
            function wt(t) {
              if ("string" == typeof t) return t;
              if (Ft(t))
                return (
                  (function (t, e) {
                    for (
                      var n = -1, r = null == t ? 0 : t.length, i = Array(r);
                      ++n < r;

                    )
                      i[n] = e(t[n], n, t);
                    return i;
                  })(t, wt) + ""
                );
              if (Ut(t)) return at ? at.call(t) : "";
              var e = t + "";
              return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
            }
            function It(t, e) {
              return Ft(t)
                ? t
                : St(t, e)
                ? [t]
                : Bt(
                    (function (t) {
                      return null == t ? "" : wt(t);
                    })(t)
                  );
            }
            function Ot(t, e, n, r, i, o) {
              var a = 1 & n,
                s = t.length,
                u = e.length;
              if (s != u && !(a && u > s)) return !1;
              var c = o.get(t);
              if (c && o.get(e)) return c == e;
              var l = -1,
                h = !0,
                d = 2 & n ? new ht() : void 0;
              for (o.set(t, e), o.set(e, t); ++l < s; ) {
                var p = t[l],
                  f = e[l];
                if (r) var v = a ? r(f, p, l, e, t, o) : r(p, f, l, t, e, o);
                if (void 0 !== v) {
                  if (v) continue;
                  h = !1;
                  break;
                }
                if (d) {
                  if (
                    !w(e, function (t, e) {
                      if (((a = e), !d.has(a) && (p === t || i(p, t, n, r, o))))
                        return d.push(e);
                      var a;
                    })
                  ) {
                    h = !1;
                    break;
                  }
                } else if (p !== f && !i(p, f, n, r, o)) {
                  h = !1;
                  break;
                }
              }
              return o.delete(t), o.delete(e), h;
            }
            function Ct(t) {
              return (function (t, e, n) {
                var r = e(t);
                return Ft(t)
                  ? r
                  : (function (t, e) {
                      for (var n = -1, r = e.length, i = t.length; ++n < r; )
                        t[i + n] = e[n];
                      return t;
                    })(r, n(t));
              })(t, Zt, At);
            }
            function jt(t, e) {
              var n,
                r,
                i = t.__data__;
              return (
                "string" == (r = typeof (n = e)) ||
                "number" == r ||
                "symbol" == r ||
                "boolean" == r
                  ? "__proto__" !== n
                  : null === n
              )
                ? i["string" == typeof e ? "string" : "hash"]
                : i.map;
            }
            function Pt(t, e) {
              var n = (function (t, e) {
                return null == t ? void 0 : t[e];
              })(t, e);
              return (function (t) {
                return (
                  !(
                    !Kt(t) ||
                    (function (t) {
                      return !!B && B in t;
                    })(t)
                  ) && (Gt(t) ? V : l).test(Vt(t))
                );
              })(n)
                ? n
                : void 0;
            }
            var At = G
                ? function (t) {
                    return null == t
                      ? []
                      : ((t = Object(t)),
                        _(G(t), function (e) {
                          return F.call(t, e);
                        }));
                  }
                : function () {
                    return [];
                  },
              Et = bt;
            function Mt(t, e) {
              var n = typeof t;
              return (
                !!(e = null == e ? 9007199254740991 : e) &&
                ("number" == n || ("symbol" != n && h.test(t))) &&
                t > -1 &&
                t % 1 == 0 &&
                t < e
              );
            }
            function St(t, e) {
              if (Ft(t)) return !1;
              var n = typeof t;
              return (
                !(
                  "number" != n &&
                  "symbol" != n &&
                  "boolean" != n &&
                  null != t &&
                  !Ut(t)
                ) ||
                s.test(t) ||
                !a.test(t) ||
                (null != e && t in Object(e))
              );
            }
            function Tt(t) {
              return t == t && !Kt(t);
            }
            function Dt(t, e) {
              return function (n) {
                return (
                  null != n && n[t] === e && (void 0 !== e || t in Object(n))
                );
              };
            }
            ((W && "[object DataView]" != Et(new W(new ArrayBuffer(1)))) ||
              (U && Et(new U()) != r) ||
              (J && "[object Promise]" != Et(J.resolve())) ||
              (Z && Et(new Z()) != o) ||
              (Q && "[object WeakMap]" != Et(new Q()))) &&
              (Et = function (t) {
                var e = bt(t),
                  n = e == i ? t.constructor : void 0,
                  a = n ? Vt(n) : "";
                if (a)
                  switch (a) {
                    case Y:
                      return "[object DataView]";
                    case tt:
                      return r;
                    case et:
                      return "[object Promise]";
                    case nt:
                      return o;
                    case rt:
                      return "[object WeakMap]";
                  }
                return e;
              });
            var Bt = (function (t) {
              var e = $t(
                  function (t) {
                    var e = [];
                    return (
                      46 === t.charCodeAt(0) && e.push(""),
                      t.replace(u, function (t, n, r, i) {
                        e.push(r ? i.replace(c, "$1") : n || t);
                      }),
                      e
                    );
                  },
                  function (t) {
                    return 500 === n.size && n.clear(), t;
                  }
                ),
                n = e.cache;
              return e;
            })();
            function Lt(t) {
              if ("string" == typeof t || Ut(t)) return t;
              var e = t + "";
              return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
            }
            function Vt(t) {
              if (null != t) {
                try {
                  return T.call(t);
                } catch (t) {}
                try {
                  return t + "";
                } catch (t) {}
              }
              return "";
            }
            function $t(t, e) {
              if (
                "function" != typeof t ||
                (null != e && "function" != typeof e)
              )
                throw new TypeError("Expected a function");
              var n = function () {
                var r = arguments,
                  i = e ? e.apply(this, r) : r[0],
                  o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = t.apply(this, r);
                return (n.cache = o.set(i, a) || o), a;
              };
              return (n.cache = new ($t.Cache || lt)()), n;
            }
            function zt(t, e) {
              return t === e || (t != t && e != e);
            }
            $t.Cache = lt;
            var Nt = kt(
                (function () {
                  return arguments;
                })()
              )
                ? kt
                : function (t) {
                    return Wt(t) && D.call(t, "callee") && !F.call(t, "callee");
                  },
              Ft = Array.isArray;
            function qt(t) {
              return null != t && Ht(t.length) && !Gt(t);
            }
            var Rt =
              H ||
              function () {
                return !1;
              };
            function Gt(t) {
              if (!Kt(t)) return !1;
              var e = bt(t);
              return (
                "[object Function]" == e ||
                "[object GeneratorFunction]" == e ||
                "[object AsyncFunction]" == e ||
                "[object Proxy]" == e
              );
            }
            function Ht(t) {
              return (
                "number" == typeof t &&
                t > -1 &&
                t % 1 == 0 &&
                t <= 9007199254740991
              );
            }
            function Kt(t) {
              var e = typeof t;
              return null != t && ("object" == e || "function" == e);
            }
            function Wt(t) {
              return null != t && "object" == typeof t;
            }
            function Ut(t) {
              return (
                "symbol" == typeof t || (Wt(t) && "[object Symbol]" == bt(t))
              );
            }
            var Jt = k
              ? (function (t) {
                  return function (e) {
                    return t(e);
                  };
                })(k)
              : function (t) {
                  return Wt(t) && Ht(t.length) && !!d[bt(t)];
                };
            function Zt(t) {
              return qt(t)
                ? (function (t, e) {
                    var n = Ft(t),
                      r = !n && Nt(t),
                      i = !n && !r && Rt(t),
                      o = !n && !r && !i && Jt(t),
                      a = n || r || i || o,
                      s = a
                        ? (function (t, e) {
                            for (var n = -1, r = Array(t); ++n < t; )
                              r[n] = e(n);
                            return r;
                          })(t.length, String)
                        : [],
                      u = s.length;
                    for (var c in t)
                      (!e && !D.call(t, c)) ||
                        (a &&
                          ("length" == c ||
                            (i && ("offset" == c || "parent" == c)) ||
                            (o &&
                              ("buffer" == c ||
                                "byteLength" == c ||
                                "byteOffset" == c)) ||
                            Mt(c, u))) ||
                        s.push(c);
                    return s;
                  })(t)
                : (function (t) {
                    if (
                      ((n = (e = t) && e.constructor),
                      e !== (("function" == typeof n && n.prototype) || M))
                    )
                      return K(t);
                    var e,
                      n,
                      r = [];
                    for (var i in Object(t))
                      D.call(t, i) && "constructor" != i && r.push(i);
                    return r;
                  })(t);
            }
            function Qt(t) {
              return t;
            }
            t.exports = function (t, e) {
              return (Ft(t) ? _ : yt)(
                t,
                (function (t) {
                  return "function" == typeof t
                    ? t
                    : null == t
                    ? Qt
                    : "object" == typeof t
                    ? Ft(t)
                      ? (function (t, e) {
                          return St(t) && Tt(e)
                            ? Dt(Lt(t), e)
                            : function (n) {
                                var r = (function (t, e, n) {
                                  var r = null == t ? void 0 : gt(t, e);
                                  return void 0 === r ? void 0 : r;
                                })(n, t);
                                return void 0 === r && r === e
                                  ? (function (t, e) {
                                      return (
                                        null != t &&
                                        (function (t, e, n) {
                                          for (
                                            var r = -1,
                                              i = (e = It(e, t)).length,
                                              o = !1;
                                            ++r < i;

                                          ) {
                                            var a = Lt(e[r]);
                                            if (!(o = null != t && n(t, a)))
                                              break;
                                            t = t[a];
                                          }
                                          return o || ++r != i
                                            ? o
                                            : !!(i =
                                                null == t ? 0 : t.length) &&
                                                Ht(i) &&
                                                Mt(a, i) &&
                                                (Ft(t) || Nt(t));
                                        })(t, e, xt)
                                      );
                                    })(n, t)
                                  : _t(e, r, 3);
                              };
                        })(t[0], t[1])
                      : (function (t) {
                          var e = (function (t) {
                            for (var e = Zt(t), n = e.length; n--; ) {
                              var r = e[n],
                                i = t[r];
                              e[n] = [r, i, Tt(i)];
                            }
                            return e;
                          })(t);
                          return 1 == e.length && e[0][2]
                            ? Dt(e[0][0], e[0][1])
                            : function (n) {
                                return (
                                  n === t ||
                                  (function (t, e, n, r) {
                                    var i = n.length,
                                      o = i;
                                    if (null == t) return !o;
                                    for (t = Object(t); i--; ) {
                                      var a = n[i];
                                      if (
                                        a[2] ? a[1] !== t[a[0]] : !(a[0] in t)
                                      )
                                        return !1;
                                    }
                                    for (; ++i < o; ) {
                                      var s = (a = n[i])[0],
                                        u = t[s],
                                        c = a[1];
                                      if (a[2]) {
                                        if (void 0 === u && !(s in t))
                                          return !1;
                                      } else {
                                        var l,
                                          h = new dt();
                                        if (
                                          !(void 0 === l
                                            ? _t(c, u, 3, r, h)
                                            : l)
                                        )
                                          return !1;
                                      }
                                    }
                                    return !0;
                                  })(n, 0, e)
                                );
                              };
                        })(t)
                    : St((e = t))
                    ? ((n = Lt(e)),
                      function (t) {
                        return null == t ? void 0 : t[n];
                      })
                    : (function (t) {
                        return function (e) {
                          return gt(e, t);
                        };
                      })(e);
                  var e, n;
                })(e)
              );
            };
          }),
          Gt = ct(function (t, e) {
            var n = "[object Arguments]",
              r = "[object Map]",
              i = "[object Object]",
              o = "[object Set]",
              a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              s = /^\w*$/,
              u = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              c = /\\(\\)?/g,
              l = /^\[object .+?Constructor\]$/,
              h = /^(?:0|[1-9]\d*)$/,
              d = {};
            (d["[object Float32Array]"] = d["[object Float64Array]"] = d[
              "[object Int8Array]"
            ] = d["[object Int16Array]"] = d["[object Int32Array]"] = d[
              "[object Uint8Array]"
            ] = d["[object Uint8ClampedArray]"] = d["[object Uint16Array]"] = d[
              "[object Uint32Array]"
            ] = !0),
              (d[n] = d["[object Array]"] = d["[object ArrayBuffer]"] = d[
                "[object Boolean]"
              ] = d["[object DataView]"] = d["[object Date]"] = d[
                "[object Error]"
              ] = d["[object Function]"] = d[r] = d["[object Number]"] = d[
                i
              ] = d["[object RegExp]"] = d[o] = d["[object String]"] = d[
                "[object WeakMap]"
              ] = !1);
            var p = "object" == typeof st && st && st.Object === Object && st,
              f =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              v = p || f || Function("return this")(),
              y = e && !e.nodeType && e,
              m = y && t && !t.nodeType && t,
              g = m && m.exports === y,
              b = g && p.process,
              x = (function () {
                try {
                  return b && b.binding && b.binding("util");
                } catch (t) {}
              })(),
              k = x && x.isTypedArray;
            function _(t, e, n) {
              switch (n.length) {
                case 0:
                  return t.call(e);
                case 1:
                  return t.call(e, n[0]);
                case 2:
                  return t.call(e, n[0], n[1]);
                case 3:
                  return t.call(e, n[0], n[1], n[2]);
              }
              return t.apply(e, n);
            }
            function w(t, e) {
              for (
                var n = -1, r = null == t ? 0 : t.length, i = Array(r);
                ++n < r;

              )
                i[n] = e(t[n], n, t);
              return i;
            }
            function I(t, e) {
              for (var n = -1, r = e.length, i = t.length; ++n < r; )
                t[i + n] = e[n];
              return t;
            }
            function O(t, e) {
              for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
                if (e(t[n], n, t)) return !0;
              return !1;
            }
            function C(t) {
              return function (e) {
                return t(e);
              };
            }
            function j(t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t, r) {
                  n[++e] = [r, t];
                }),
                n
              );
            }
            function P(t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t) {
                  n[++e] = t;
                }),
                n
              );
            }
            var A,
              E,
              M,
              S = Array.prototype,
              T = Function.prototype,
              D = Object.prototype,
              B = v["__core-js_shared__"],
              L = T.toString,
              V = D.hasOwnProperty,
              $ = (A = /[^.]+$/.exec((B && B.keys && B.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + A
                : "",
              z = D.toString,
              N = RegExp(
                "^" +
                  L.call(V)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              F = g ? v.Buffer : void 0,
              q = v.Symbol,
              R = v.Uint8Array,
              G = D.propertyIsEnumerable,
              H = S.splice,
              K = q ? q.isConcatSpreadable : void 0,
              W = q ? q.toStringTag : void 0,
              U = (function () {
                try {
                  var t = Vt(Object, "defineProperty");
                  return t({}, "", {}), t;
                } catch (t) {}
              })(),
              J = Object.getOwnPropertySymbols,
              Z = F ? F.isBuffer : void 0,
              Q =
                ((E = Object.keys),
                (M = Object),
                function (t) {
                  return E(M(t));
                }),
              X = Math.max,
              Y = Date.now,
              tt = Vt(v, "DataView"),
              et = Vt(v, "Map"),
              nt = Vt(v, "Promise"),
              rt = Vt(v, "Set"),
              it = Vt(v, "WeakMap"),
              ot = Vt(Object, "create"),
              at = Jt(tt),
              ut = Jt(et),
              ct = Jt(nt),
              lt = Jt(rt),
              ht = Jt(it),
              dt = q ? q.prototype : void 0,
              pt = dt ? dt.valueOf : void 0,
              ft = dt ? dt.toString : void 0;
            function vt(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
              }
            }
            function yt(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
              }
            }
            function mt(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
              }
            }
            function gt(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.__data__ = new mt(); ++e < n; ) this.add(t[e]);
            }
            function bt(t) {
              var e = (this.__data__ = new yt(t));
              this.size = e.size;
            }
            function xt(t, e) {
              for (var n = t.length; n--; ) if (Xt(t[n][0], e)) return n;
              return -1;
            }
            (vt.prototype.clear = function () {
              (this.__data__ = ot ? ot(null) : {}), (this.size = 0);
            }),
              (vt.prototype.delete = function (t) {
                var e = this.has(t) && delete this.__data__[t];
                return (this.size -= e ? 1 : 0), e;
              }),
              (vt.prototype.get = function (t) {
                var e = this.__data__;
                if (ot) {
                  var n = e[t];
                  return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return V.call(e, t) ? e[t] : void 0;
              }),
              (vt.prototype.has = function (t) {
                var e = this.__data__;
                return ot ? void 0 !== e[t] : V.call(e, t);
              }),
              (vt.prototype.set = function (t, e) {
                var n = this.__data__;
                return (
                  (this.size += this.has(t) ? 0 : 1),
                  (n[t] = ot && void 0 === e ? "__lodash_hash_undefined__" : e),
                  this
                );
              }),
              (yt.prototype.clear = function () {
                (this.__data__ = []), (this.size = 0);
              }),
              (yt.prototype.delete = function (t) {
                var e = this.__data__,
                  n = xt(e, t);
                return !(
                  n < 0 ||
                  (n == e.length - 1 ? e.pop() : H.call(e, n, 1),
                  --this.size,
                  0)
                );
              }),
              (yt.prototype.get = function (t) {
                var e = this.__data__,
                  n = xt(e, t);
                return n < 0 ? void 0 : e[n][1];
              }),
              (yt.prototype.has = function (t) {
                return xt(this.__data__, t) > -1;
              }),
              (yt.prototype.set = function (t, e) {
                var n = this.__data__,
                  r = xt(n, t);
                return (
                  r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
                );
              }),
              (mt.prototype.clear = function () {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new vt(),
                    map: new (et || yt)(),
                    string: new vt(),
                  });
              }),
              (mt.prototype.delete = function (t) {
                var e = Lt(this, t).delete(t);
                return (this.size -= e ? 1 : 0), e;
              }),
              (mt.prototype.get = function (t) {
                return Lt(this, t).get(t);
              }),
              (mt.prototype.has = function (t) {
                return Lt(this, t).has(t);
              }),
              (mt.prototype.set = function (t, e) {
                var n = Lt(this, t),
                  r = n.size;
                return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
              }),
              (gt.prototype.add = gt.prototype.push = function (t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this;
              }),
              (gt.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (bt.prototype.clear = function () {
                (this.__data__ = new yt()), (this.size = 0);
              }),
              (bt.prototype.delete = function (t) {
                var e = this.__data__,
                  n = e.delete(t);
                return (this.size = e.size), n;
              }),
              (bt.prototype.get = function (t) {
                return this.__data__.get(t);
              }),
              (bt.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (bt.prototype.set = function (t, e) {
                var n = this.__data__;
                if (n instanceof yt) {
                  var r = n.__data__;
                  if (!et || r.length < 199)
                    return r.push([t, e]), (this.size = ++n.size), this;
                  n = this.__data__ = new mt(r);
                }
                return n.set(t, e), (this.size = n.size), this;
              });
            var kt,
              _t =
                ((kt = function (t, e) {
                  return t && wt(t, e, ce);
                }),
                function (t, e) {
                  if (null == t) return t;
                  if (!ee(t)) return kt(t, e);
                  for (
                    var n = t.length, r = -1, i = Object(t);
                    ++r < n && !1 !== e(i[r], r, i);

                  );
                  return t;
                }),
              wt = function (t, e, n) {
                for (var r = -1, i = Object(t), o = n(t), a = o.length; a--; ) {
                  var s = o[++r];
                  if (!1 === e(i[s], s, i)) break;
                }
                return t;
              };
            function It(t, e) {
              for (var n = 0, r = (e = St(e, t)).length; null != t && n < r; )
                t = t[Ut(e[n++])];
              return n && n == r ? t : void 0;
            }
            function Ot(t) {
              return null == t
                ? void 0 === t
                  ? "[object Undefined]"
                  : "[object Null]"
                : W && W in Object(t)
                ? (function (t) {
                    var e = V.call(t, W),
                      n = t[W];
                    try {
                      t[W] = void 0;
                      var r = !0;
                    } catch (t) {}
                    var i = z.call(t);
                    return r && (e ? (t[W] = n) : delete t[W]), i;
                  })(t)
                : (function (t) {
                    return z.call(t);
                  })(t);
            }
            function Ct(t, e) {
              return null != t && e in Object(t);
            }
            function jt(t) {
              return ae(t) && Ot(t) == n;
            }
            function Pt(t, e, a, s, u) {
              return (
                t === e ||
                (null == t || null == e || (!ae(t) && !ae(e))
                  ? t != t && e != e
                  : (function (t, e, a, s, u, c) {
                      var l = te(t),
                        h = te(e),
                        d = l ? "[object Array]" : zt(t),
                        p = h ? "[object Array]" : zt(e),
                        f = (d = d == n ? i : d) == i,
                        v = (p = p == n ? i : p) == i,
                        y = d == p;
                      if (y && ne(t)) {
                        if (!ne(e)) return !1;
                        (l = !0), (f = !1);
                      }
                      if (y && !f)
                        return (
                          c || (c = new bt()),
                          l || ue(t)
                            ? Dt(t, e, a, s, u, c)
                            : (function (t, e, n, i, a, s, u) {
                                switch (n) {
                                  case "[object DataView]":
                                    if (
                                      t.byteLength != e.byteLength ||
                                      t.byteOffset != e.byteOffset
                                    )
                                      return !1;
                                    (t = t.buffer), (e = e.buffer);
                                  case "[object ArrayBuffer]":
                                    return !(
                                      t.byteLength != e.byteLength ||
                                      !s(new R(t), new R(e))
                                    );
                                  case "[object Boolean]":
                                  case "[object Date]":
                                  case "[object Number]":
                                    return Xt(+t, +e);
                                  case "[object Error]":
                                    return (
                                      t.name == e.name && t.message == e.message
                                    );
                                  case "[object RegExp]":
                                  case "[object String]":
                                    return t == e + "";
                                  case r:
                                    var c = j;
                                  case o:
                                    var l = 1 & i;
                                    if ((c || (c = P), t.size != e.size && !l))
                                      return !1;
                                    var h = u.get(t);
                                    if (h) return h == e;
                                    (i |= 2), u.set(t, e);
                                    var d = Dt(c(t), c(e), i, a, s, u);
                                    return u.delete(t), d;
                                  case "[object Symbol]":
                                    if (pt) return pt.call(t) == pt.call(e);
                                }
                                return !1;
                              })(t, e, d, a, s, u, c)
                        );
                      if (!(1 & a)) {
                        var m = f && V.call(t, "__wrapped__"),
                          g = v && V.call(e, "__wrapped__");
                        if (m || g) {
                          var b = m ? t.value() : t,
                            x = g ? e.value() : e;
                          return c || (c = new bt()), u(b, x, a, s, c);
                        }
                      }
                      return (
                        !!y &&
                        (c || (c = new bt()),
                        (function (t, e, n, r, i, o) {
                          var a = 1 & n,
                            s = Bt(t),
                            u = s.length;
                          if (u != Bt(e).length && !a) return !1;
                          for (var c = u; c--; ) {
                            var l = s[c];
                            if (!(a ? l in e : V.call(e, l))) return !1;
                          }
                          var h = o.get(t);
                          if (h && o.get(e)) return h == e;
                          var d = !0;
                          o.set(t, e), o.set(e, t);
                          for (var p = a; ++c < u; ) {
                            var f = t[(l = s[c])],
                              v = e[l];
                            if (r)
                              var y = a
                                ? r(v, f, l, e, t, o)
                                : r(f, v, l, t, e, o);
                            if (
                              !(void 0 === y ? f === v || i(f, v, n, r, o) : y)
                            ) {
                              d = !1;
                              break;
                            }
                            p || (p = "constructor" == l);
                          }
                          if (d && !p) {
                            var m = t.constructor,
                              g = e.constructor;
                            m == g ||
                              !("constructor" in t) ||
                              !("constructor" in e) ||
                              ("function" == typeof m &&
                                m instanceof m &&
                                "function" == typeof g &&
                                g instanceof g) ||
                              (d = !1);
                          }
                          return o.delete(t), o.delete(e), d;
                        })(t, e, a, s, u, c))
                      );
                    })(t, e, a, s, Pt, u))
              );
            }
            function At(t) {
              return "function" == typeof t
                ? t
                : null == t
                ? le
                : "object" == typeof t
                ? te(t)
                  ? (function (t, e) {
                      return Rt(t) && Gt(e)
                        ? Ht(Ut(t), e)
                        : function (n) {
                            var r = (function (t, e, n) {
                              var r = null == t ? void 0 : It(t, e);
                              return void 0 === r ? void 0 : r;
                            })(n, t);
                            return void 0 === r && r === e
                              ? (function (t, e) {
                                  return (
                                    null != t &&
                                    (function (t, e, n) {
                                      for (
                                        var r = -1,
                                          i = (e = St(e, t)).length,
                                          o = !1;
                                        ++r < i;

                                      ) {
                                        var a = Ut(e[r]);
                                        if (!(o = null != t && n(t, a))) break;
                                        t = t[a];
                                      }
                                      return o || ++r != i
                                        ? o
                                        : !!(i = null == t ? 0 : t.length) &&
                                            ie(i) &&
                                            Ft(a, i) &&
                                            (te(t) || Yt(t));
                                    })(t, e, Ct)
                                  );
                                })(n, t)
                              : Pt(e, r, 3);
                          };
                    })(t[0], t[1])
                  : (function (t) {
                      var e = (function (t) {
                        for (var e = ce(t), n = e.length; n--; ) {
                          var r = e[n],
                            i = t[r];
                          e[n] = [r, i, Gt(i)];
                        }
                        return e;
                      })(t);
                      return 1 == e.length && e[0][2]
                        ? Ht(e[0][0], e[0][1])
                        : function (n) {
                            return (
                              n === t ||
                              (function (t, e, n, r) {
                                var i = n.length,
                                  o = i;
                                if (null == t) return !o;
                                for (t = Object(t); i--; ) {
                                  var a = n[i];
                                  if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
                                    return !1;
                                }
                                for (; ++i < o; ) {
                                  var s = (a = n[i])[0],
                                    u = t[s],
                                    c = a[1];
                                  if (a[2]) {
                                    if (void 0 === u && !(s in t)) return !1;
                                  } else {
                                    var l,
                                      h = new bt();
                                    if (!(void 0 === l ? Pt(c, u, 3, r, h) : l))
                                      return !1;
                                  }
                                }
                                return !0;
                              })(n, 0, e)
                            );
                          };
                    })(t)
                : Rt((e = t))
                ? ((n = Ut(e)),
                  function (t) {
                    return null == t ? void 0 : t[n];
                  })
                : (function (t) {
                    return function (e) {
                      return It(e, t);
                    };
                  })(e);
              var e, n;
            }
            var Et = U
              ? function (t, e) {
                  return U(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value:
                      ((n = e),
                      function () {
                        return n;
                      }),
                    writable: !0,
                  });
                  var n;
                }
              : le;
            function Mt(t) {
              if ("string" == typeof t) return t;
              if (te(t)) return w(t, Mt) + "";
              if (se(t)) return ft ? ft.call(t) : "";
              var e = t + "";
              return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
            }
            function St(t, e) {
              return te(t)
                ? t
                : Rt(t, e)
                ? [t]
                : Wt(
                    (function (t) {
                      return null == t ? "" : Mt(t);
                    })(t)
                  );
            }
            function Tt(t, e) {
              if (t !== e) {
                var n = void 0 !== t,
                  r = null === t,
                  i = t == t,
                  o = se(t),
                  a = void 0 !== e,
                  s = null === e,
                  u = e == e,
                  c = se(e);
                if (
                  (!s && !c && !o && t > e) ||
                  (o && a && u && !s && !c) ||
                  (r && a && u) ||
                  (!n && u) ||
                  !i
                )
                  return 1;
                if (
                  (!r && !o && !c && t < e) ||
                  (c && n && i && !r && !o) ||
                  (s && n && i) ||
                  (!a && i) ||
                  !u
                )
                  return -1;
              }
              return 0;
            }
            function Dt(t, e, n, r, i, o) {
              var a = 1 & n,
                s = t.length,
                u = e.length;
              if (s != u && !(a && u > s)) return !1;
              var c = o.get(t);
              if (c && o.get(e)) return c == e;
              var l = -1,
                h = !0,
                d = 2 & n ? new gt() : void 0;
              for (o.set(t, e), o.set(e, t); ++l < s; ) {
                var p = t[l],
                  f = e[l];
                if (r) var v = a ? r(f, p, l, e, t, o) : r(p, f, l, t, e, o);
                if (void 0 !== v) {
                  if (v) continue;
                  h = !1;
                  break;
                }
                if (d) {
                  if (
                    !O(e, function (t, e) {
                      if (((a = e), !d.has(a) && (p === t || i(p, t, n, r, o))))
                        return d.push(e);
                      var a;
                    })
                  ) {
                    h = !1;
                    break;
                  }
                } else if (p !== f && !i(p, f, n, r, o)) {
                  h = !1;
                  break;
                }
              }
              return o.delete(t), o.delete(e), h;
            }
            function Bt(t) {
              return (function (t, e, n) {
                var r = e(t);
                return te(t) ? r : I(r, n(t));
              })(t, ce, $t);
            }
            function Lt(t, e) {
              var n,
                r,
                i = t.__data__;
              return (
                "string" == (r = typeof (n = e)) ||
                "number" == r ||
                "symbol" == r ||
                "boolean" == r
                  ? "__proto__" !== n
                  : null === n
              )
                ? i["string" == typeof e ? "string" : "hash"]
                : i.map;
            }
            function Vt(t, e) {
              var n = (function (t, e) {
                return null == t ? void 0 : t[e];
              })(t, e);
              return (function (t) {
                return (
                  !(
                    !oe(t) ||
                    (function (t) {
                      return !!$ && $ in t;
                    })(t)
                  ) && (re(t) ? N : l).test(Jt(t))
                );
              })(n)
                ? n
                : void 0;
            }
            var $t = J
                ? function (t) {
                    return null == t
                      ? []
                      : ((t = Object(t)),
                        (function (t, e) {
                          for (
                            var n = -1,
                              r = null == t ? 0 : t.length,
                              i = 0,
                              o = [];
                            ++n < r;

                          ) {
                            var a = t[n];
                            e(a) && (o[i++] = a);
                          }
                          return o;
                        })(J(t), function (e) {
                          return G.call(t, e);
                        }));
                  }
                : function () {
                    return [];
                  },
              zt = Ot;
            function Nt(t) {
              return te(t) || Yt(t) || !!(K && t && t[K]);
            }
            function Ft(t, e) {
              var n = typeof t;
              return (
                !!(e = null == e ? 9007199254740991 : e) &&
                ("number" == n || ("symbol" != n && h.test(t))) &&
                t > -1 &&
                t % 1 == 0 &&
                t < e
              );
            }
            function qt(t, e, n) {
              if (!oe(n)) return !1;
              var r = typeof e;
              return (
                !!("number" == r
                  ? ee(n) && Ft(e, n.length)
                  : "string" == r && e in n) && Xt(n[e], t)
              );
            }
            function Rt(t, e) {
              if (te(t)) return !1;
              var n = typeof t;
              return (
                !(
                  "number" != n &&
                  "symbol" != n &&
                  "boolean" != n &&
                  null != t &&
                  !se(t)
                ) ||
                s.test(t) ||
                !a.test(t) ||
                (null != e && t in Object(e))
              );
            }
            function Gt(t) {
              return t == t && !oe(t);
            }
            function Ht(t, e) {
              return function (n) {
                return (
                  null != n && n[t] === e && (void 0 !== e || t in Object(n))
                );
              };
            }
            ((tt && "[object DataView]" != zt(new tt(new ArrayBuffer(1)))) ||
              (et && zt(new et()) != r) ||
              (nt && "[object Promise]" != zt(nt.resolve())) ||
              (rt && zt(new rt()) != o) ||
              (it && "[object WeakMap]" != zt(new it()))) &&
              (zt = function (t) {
                var e = Ot(t),
                  n = e == i ? t.constructor : void 0,
                  a = n ? Jt(n) : "";
                if (a)
                  switch (a) {
                    case at:
                      return "[object DataView]";
                    case ut:
                      return r;
                    case ct:
                      return "[object Promise]";
                    case lt:
                      return o;
                    case ht:
                      return "[object WeakMap]";
                  }
                return e;
              });
            var Kt = (function (t) {
                var e = 0,
                  n = 0;
                return function () {
                  var r = Y(),
                    i = 16 - (r - n);
                  if (((n = r), i > 0)) {
                    if (++e >= 800) return arguments[0];
                  } else e = 0;
                  return t.apply(void 0, arguments);
                };
              })(Et),
              Wt = (function (t) {
                var e = Qt(
                    function (t) {
                      var e = [];
                      return (
                        46 === t.charCodeAt(0) && e.push(""),
                        t.replace(u, function (t, n, r, i) {
                          e.push(r ? i.replace(c, "$1") : n || t);
                        }),
                        e
                      );
                    },
                    function (t) {
                      return 500 === n.size && n.clear(), t;
                    }
                  ),
                  n = e.cache;
                return e;
              })();
            function Ut(t) {
              if ("string" == typeof t || se(t)) return t;
              var e = t + "";
              return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
            }
            function Jt(t) {
              if (null != t) {
                try {
                  return L.call(t);
                } catch (t) {}
                try {
                  return t + "";
                } catch (t) {}
              }
              return "";
            }
            var Zt = (function (t, e) {
              return Kt(
                (function (t, e, n) {
                  return (
                    (e = X(void 0 === e ? t.length - 1 : e, 0)),
                    function () {
                      for (
                        var r = arguments,
                          i = -1,
                          o = X(r.length - e, 0),
                          a = Array(o);
                        ++i < o;

                      )
                        a[i] = r[e + i];
                      i = -1;
                      for (var s = Array(e + 1); ++i < e; ) s[i] = r[i];
                      return (s[e] = n(a)), _(t, this, s);
                    }
                  );
                })(t, void 0, le),
                t + ""
              );
            })(function (t, e) {
              if (null == t) return [];
              var n = e.length;
              return (
                n > 1 && qt(t, e[0], e[1])
                  ? (e = [])
                  : n > 2 && qt(e[0], e[1], e[2]) && (e = [e[0]]),
                (function (t, e, n) {
                  var r = -1;
                  return (
                    (e = w(e.length ? e : [le], C(At))),
                    (function (t, e) {
                      var n = t.length;
                      for (t.sort(e); n--; ) t[n] = t[n].value;
                      return t;
                    })(
                      (function (t, e) {
                        var n = -1,
                          r = ee(t) ? Array(t.length) : [];
                        return (
                          _t(t, function (t, i, o) {
                            r[++n] = e(t);
                          }),
                          r
                        );
                      })(t, function (t, n, i) {
                        return {
                          criteria: w(e, function (e) {
                            return e(t);
                          }),
                          index: ++r,
                          value: t,
                        };
                      }),
                      function (t, e) {
                        return (function (t, e, n) {
                          for (
                            var r = -1,
                              i = t.criteria,
                              o = e.criteria,
                              a = i.length,
                              s = n.length;
                            ++r < a;

                          ) {
                            var u = Tt(i[r], o[r]);
                            if (u)
                              return r >= s ? u : u * ("desc" == n[r] ? -1 : 1);
                          }
                          return t.index - e.index;
                        })(t, e, n);
                      }
                    )
                  );
                })(
                  t,
                  (function t(e, n, r, i, o) {
                    var a = -1,
                      s = e.length;
                    for (r || (r = Nt), o || (o = []); ++a < s; ) {
                      var u = e[a];
                      n > 0 && r(u)
                        ? n > 1
                          ? t(u, n - 1, r, i, o)
                          : I(o, u)
                        : i || (o[o.length] = u);
                    }
                    return o;
                  })(e, 1),
                  []
                )
              );
            });
            function Qt(t, e) {
              if (
                "function" != typeof t ||
                (null != e && "function" != typeof e)
              )
                throw new TypeError("Expected a function");
              var n = function () {
                var r = arguments,
                  i = e ? e.apply(this, r) : r[0],
                  o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = t.apply(this, r);
                return (n.cache = o.set(i, a) || o), a;
              };
              return (n.cache = new (Qt.Cache || mt)()), n;
            }
            function Xt(t, e) {
              return t === e || (t != t && e != e);
            }
            Qt.Cache = mt;
            var Yt = jt(
                (function () {
                  return arguments;
                })()
              )
                ? jt
                : function (t) {
                    return ae(t) && V.call(t, "callee") && !G.call(t, "callee");
                  },
              te = Array.isArray;
            function ee(t) {
              return null != t && ie(t.length) && !re(t);
            }
            var ne =
              Z ||
              function () {
                return !1;
              };
            function re(t) {
              if (!oe(t)) return !1;
              var e = Ot(t);
              return (
                "[object Function]" == e ||
                "[object GeneratorFunction]" == e ||
                "[object AsyncFunction]" == e ||
                "[object Proxy]" == e
              );
            }
            function ie(t) {
              return (
                "number" == typeof t &&
                t > -1 &&
                t % 1 == 0 &&
                t <= 9007199254740991
              );
            }
            function oe(t) {
              var e = typeof t;
              return null != t && ("object" == e || "function" == e);
            }
            function ae(t) {
              return null != t && "object" == typeof t;
            }
            function se(t) {
              return (
                "symbol" == typeof t || (ae(t) && "[object Symbol]" == Ot(t))
              );
            }
            var ue = k
              ? C(k)
              : function (t) {
                  return ae(t) && ie(t.length) && !!d[Ot(t)];
                };
            function ce(t) {
              return ee(t)
                ? (function (t, e) {
                    var n = te(t),
                      r = !n && Yt(t),
                      i = !n && !r && ne(t),
                      o = !n && !r && !i && ue(t),
                      a = n || r || i || o,
                      s = a
                        ? (function (t, e) {
                            for (var n = -1, r = Array(t); ++n < t; )
                              r[n] = e(n);
                            return r;
                          })(t.length, String)
                        : [],
                      u = s.length;
                    for (var c in t)
                      (!e && !V.call(t, c)) ||
                        (a &&
                          ("length" == c ||
                            (i && ("offset" == c || "parent" == c)) ||
                            (o &&
                              ("buffer" == c ||
                                "byteLength" == c ||
                                "byteOffset" == c)) ||
                            Ft(c, u))) ||
                        s.push(c);
                    return s;
                  })(t)
                : (function (t) {
                    if (
                      ((n = (e = t) && e.constructor),
                      e !== (("function" == typeof n && n.prototype) || D))
                    )
                      return Q(t);
                    var e,
                      n,
                      r = [];
                    for (var i in Object(t))
                      V.call(t, i) && "constructor" != i && r.push(i);
                    return r;
                  })(t);
            }
            function le(t) {
              return t;
            }
            t.exports = Zt;
          }),
          Ht = (function (t) {
            c(n, t);
            var e = f(n);
            function n() {
              return r(this, n), e.apply(this, arguments);
            }
            return (
              o(n, [
                {
                  key: "onInitialise",
                  value: function () {
                    (this.incidents = []), (this.incidentsById = {});
                  },
                },
                {
                  key: "_incidentById",
                  value: function (t) {
                    return this.incidentsById[t];
                  },
                },
                {
                  key: "_resize",
                  value: function (t) {
                    for (var e = 0; e < this.incidents.length; e++)
                      this.incidents[e].millisecond =
                        this.incidents[e].millisecond * t;
                  },
                },
                {
                  key: "checkAddition",
                  value: function (t) {
                    for (var e = [], n = {}, r = [], i = 0; i < t.length; i++)
                      (n[t[i].id] = t[i].incident),
                        r.push({ id: t[i].id, millisecond: t[i].millisecond }),
                        Object.prototype.hasOwnProperty.call(
                          this.incidentsById,
                          t[i].id
                        ) &&
                          (At.error(
                            "Incident with the id ".concat(
                              t[i].id,
                              " already exists. Addition is rejected."
                            )
                          ),
                          e.push({
                            type: "Already existing id",
                            meta: { id: t[i].id },
                          }));
                    if (e.length > 0) return { result: !1, errors: e };
                    var o = this;
                    return {
                      result: !0,
                      execute: function () {
                        (o.incidentsById = Object.assign(o.incidentsById, n)),
                          (o.incidents = o.incidents.concat(r)),
                          (o.incidents = Gt(o.incidents, [
                            function (t) {
                              return t.millisecond;
                            },
                          ]));
                        for (var e = 0; e < t.length; e++)
                          o._incidentById(t[e].id)._onGetContextOnce(o.context);
                      },
                    };
                  },
                },
                {
                  key: "checkEdit",
                  value: function (t, e) {
                    var n = this;
                    return {
                      result: !0,
                      execute: function () {
                        for (var r = 0; r < t.length; r++)
                          for (var i = 0; i < n.incidents.length; i++)
                            if (n.incidents[i].id === t[r].id) {
                              n.incidents[i].millisecond += e;
                              break;
                            }
                        n.incidents = Gt(n.incidents, [
                          function (t) {
                            return t.millisecond;
                          },
                        ]);
                      },
                    };
                  },
                },
                {
                  key: "checkDelete",
                  value: function (t) {
                    for (var e = this, n = [], r = 0; r < t.length; r++)
                      n.push(t[r].id);
                    return {
                      result: !0,
                      execute: function () {
                        var t = Rt(e.incidents, function (t) {
                          return -1 === n.indexOf(t.id);
                        });
                        e.incidents = t;
                        for (var r = 0; r < n.length; r++)
                          delete e.incidentsById[n[r]];
                      },
                    };
                  },
                },
                {
                  key: "checkResizedIncidents",
                  value: function (t) {
                    var e = this;
                    return {
                      result: !0,
                      execute: function () {
                        for (var n = 0; n < t.length; n++)
                          for (var r = 0; r < e.incidents.length; r++)
                            if (e.incidents[r].id === t[n].id) {
                              e.incidents[r].millisecond += t[n].startDelta;
                              break;
                            }
                        e.incidents = Gt(e.incidents, [
                          function (t) {
                            return t.millisecond;
                          },
                        ]);
                      },
                    };
                  },
                },
                {
                  key: "moveTo",
                  value: function (t, e, n) {
                    var r =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    if (r)
                      for (var i = 0; i < this.incidents.length; i++) {
                        var o = this.incidents[i],
                          a = this._incidentById(o.id);
                        e < o.millisecond
                          ? a.onProgress(0, 0, n, !0)
                          : e > o.millisecond + a.duration
                          ? a.onProgress(1, a.duration, n, !0)
                          : a.onProgress(
                              (e - o.millisecond) / a.duration,
                              e - o.millisecond,
                              n,
                              !0
                            );
                      }
                    else {
                      var s,
                        u = this;
                      s = Rt(
                        this.incidents,
                        e > t
                          ? function (n) {
                              return (
                                (n.millisecond +
                                  u._incidentById(n.id).duration >=
                                  t &&
                                  n.millisecond +
                                    u._incidentById(n.id).duration <=
                                    e) ||
                                (u._incidentById(n.id).duration +
                                  n.millisecond >=
                                  e &&
                                  n.millisecond <= e)
                              );
                            }
                          : function (n) {
                              return (
                                (n.millisecond +
                                  u._incidentById(n.id).duration >=
                                  e &&
                                  n.millisecond +
                                    u._incidentById(n.id).duration <=
                                    t) ||
                                (u._incidentById(n.id).duration +
                                  n.millisecond >=
                                  t &&
                                  n.millisecond <= t)
                              );
                            }
                      );
                      for (var c = 0; c < s.length; c++) {
                        var l = s[c],
                          h = this._incidentById(l.id),
                          d = (e - l.millisecond) / h.duration >= 1,
                          p = d ? 1 : (e - l.millisecond) / h.duration,
                          f = d ? h.duration : e - l.millisecond;
                        h.onProgress(p, f, n, !1);
                      }
                    }
                  },
                },
              ]),
              n
            );
          })(Mt),
          Kt = "function" == typeof Float32Array;
        function Wt(t, e) {
          return 1 - 3 * e + 3 * t;
        }
        function Ut(t, e) {
          return 3 * e - 6 * t;
        }
        function Jt(t) {
          return 3 * t;
        }
        function Zt(t, e, n) {
          return ((Wt(e, n) * t + Ut(e, n)) * t + Jt(e)) * t;
        }
        function Qt(t, e, n) {
          return 3 * Wt(e, n) * t * t + 2 * Ut(e, n) * t + Jt(e);
        }
        function Xt(t) {
          return t;
        }
        var Yt = function (t, e, n, r) {
          if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
            throw new Error("bezier x values must be in [0, 1] range");
          if (t === e && n === r) return Xt;
          for (
            var i = Kt ? new Float32Array(11) : new Array(11), o = 0;
            o < 11;
            ++o
          )
            i[o] = Zt(0.1 * o, t, n);
          function a(e) {
            for (var r = 0, o = 1; 10 !== o && i[o] <= e; ++o) r += 0.1;
            --o;
            var a = r + ((e - i[o]) / (i[o + 1] - i[o])) * 0.1,
              s = Qt(a, t, n);
            return s >= 0.001
              ? (function (t, e, n, r) {
                  for (var i = 0; i < 4; ++i) {
                    var o = Qt(e, n, r);
                    if (0 === o) return e;
                    e -= (Zt(e, n, r) - t) / o;
                  }
                  return e;
                })(e, a, t, n)
              : 0 === s
              ? a
              : (function (t, e, n, r, i) {
                  var o,
                    a,
                    s = 0;
                  do {
                    (o = Zt((a = e + (n - e) / 2), r, i) - t) > 0
                      ? (n = a)
                      : (e = a);
                  } while (Math.abs(o) > 1e-7 && ++s < 10);
                  return a;
                })(e, r, r + 0.1, t, n);
          }
          return function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : Zt(a(t), e, r);
          };
        };
        function te(t) {
          t.descriptor.value = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n = {};
            return (
              (n[this.mc_plugin_npm_name] = [
                {
                  millisecond: t,
                  parentMillisecond: e,
                  incident: this,
                  id: this.id,
                },
              ]),
              n
            );
          };
        }
        var ee = w(null, function (t) {
            return {
              F: function e() {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  o = arguments.length > 2 ? arguments[2] : void 0;
                r(this, e),
                  t(this),
                  (this.attrs = n),
                  (this.props = i),
                  (this.dna = o),
                  (this.context = o.context),
                  (this.mcid = o.mcid),
                  (this.id = i.id || Ot()),
                  (this.modelId = i.modelId),
                  (this.gotContext = !1),
                  (this.plugin_channel_class = Mt),
                  (this.mc_plugin_npm_name = "motor-cortex-js"),
                  Object.prototype.hasOwnProperty.call(
                    i,
                    "plugin_channel_class"
                  ) && (this.plugin_channel_class = i.plugin_channel_class),
                  Object.prototype.hasOwnProperty.call(
                    i,
                    "mc_plugin_npm_name"
                  ) && (this.mc_plugin_npm_name = i.mc_plugin_npm_name),
                  (this.hasIncidents = !1),
                  (this.initialValues = {}),
                  (this.userDefinedInitialValues = n.initialValues || {}),
                  (this.pureInitialValues = null),
                  (this.autoGenerated = !1),
                  this.onInitialise(n, i);
              },
              d: [
                {
                  kind: "get",
                  key: "selector",
                  value: function () {
                    return this.props.selector;
                  },
                },
                {
                  kind: "get",
                  key: "animAttributes",
                  value: function () {
                    return this.attrs.animatedAttrs;
                  },
                },
                {
                  kind: "set",
                  key: "animAttributes",
                  value: function (t) {
                    this.attrs.animatedAttrs[this.attributeKey] = t;
                  },
                },
                {
                  kind: "method",
                  key: "getScratchValue",
                  value: function () {
                    return 0;
                  },
                },
                {
                  kind: "get",
                  key: "element",
                  value: function () {
                    return null === this.contex
                      ? []
                      : this.context.getElementByMCID
                      ? this.context.getElementByMCID(this.mcid)
                      : this.context.getElements(this.selector)[0];
                  },
                },
                {
                  kind: "get",
                  key: "attributeKey",
                  value: function () {
                    return Object.keys(this.attrs.animatedAttrs)[0];
                  },
                },
                {
                  kind: "get",
                  key: "targetValue",
                  value: function () {
                    return this.animAttributes[this.attributeKey];
                  },
                },
                {
                  kind: "method",
                  key: "getElementAttribute",
                  value: function (t) {
                    return this.element.getAttribute(t);
                  },
                },
                {
                  kind: "method",
                  decorators: [te],
                  key: "getIncidentsByChannel",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "hasUserDefinedInitialValue",
                  value: function () {
                    return !!Object.prototype.hasOwnProperty.call(
                      this.userDefinedInitialValues,
                      this.attributeKey
                    );
                  },
                },
                {
                  kind: "method",
                  key: "setInitialValue",
                  value: function (t) {
                    var e =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1];
                    if (
                      (e &&
                        (this.pureInitialValues = JSON.parse(
                          JSON.stringify(t)
                        )),
                      this.hasUserDefinedInitialValue())
                    )
                      if ("object" === n(this.targetValue)) {
                        for (var r in this.userDefinedInitialValues[
                          this.attributeKey
                        ])
                          t[r] = this.userDefinedInitialValues[
                            this.attributeKey
                          ][r];
                        this.initialValues[this.attributeKey] = t;
                      } else
                        this.initialValues[
                          this.attributeKey
                        ] = this.userDefinedInitialValues[this.attributeKey];
                    else this.initialValues[this.attributeKey] = t;
                  },
                },
                {
                  kind: "get",
                  key: "initialValue",
                  value: function () {
                    return this.initialValues[this.attributeKey];
                  },
                },
                {
                  kind: "method",
                  key: "getInitialValue",
                  value: function () {
                    return this.initialValues[this.attributeKey];
                  },
                },
                {
                  kind: "method",
                  key: "_onGetContextOnce",
                  value: function () {
                    try {
                      if (!0 === this.context.fragment) return;
                      this.gotContext ||
                        (this.onGetContext(), (this.gotContext = !0));
                    } catch (t) {
                      console.log(t), console.log(this.mcid);
                    }
                  },
                },
                {
                  kind: "method",
                  key: "onGetContext",
                  value: function () {
                    At.info(
                      'Overwritte the "onGetContext" method with the code you want to get executed',
                      "info"
                    );
                  },
                },
                { kind: "method", key: "lastWish", value: function () {} },
                {
                  kind: "method",
                  key: "onInitialise",
                  value: function () {
                    At.info(
                      'Overwritte the "onInialise" method with the code you want to get executed',
                      "info"
                    );
                  },
                },
                {
                  kind: "method",
                  key: "onProgress",
                  value: function (t, e) {},
                },
                {
                  kind: "method",
                  decorators: [zt],
                  key: "setBlock",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Ft],
                  key: "unblock",
                  value: function () {},
                },
              ],
            };
          }),
          ne = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t, i, o) {
              var a;
              return (
                r(this, n),
                ((a = e.call(this, t, i, o)).runTimeInfo = {
                  currentMillisecond: 0,
                }),
                a
              );
            }
            return (
              o(n, [
                {
                  key: "lastWish",
                  value: function () {
                    this.ownClip.ownContext.unmount();
                  },
                },
                {
                  key: "onGetContext",
                  value: function () {
                    var t = this.DescriptiveIncident.realClip.exportConstructionArguments(),
                      e = At.getElementByMCID(this.context, this.mcid),
                      n = u({}, t.props, { selector: void 0, host: e });
                    (this.ownClip = new this.DescriptiveIncident.constructor.Incident(
                      t.attrs,
                      n
                    )),
                      (this.ownClip.DescriptiveIncident = this.DescriptiveIncident),
                      (this.ownClip.contextLoaded = this.contextLoaded.bind(
                        this
                      )),
                      this.DescriptiveIncident.realClip.addContext(
                        { clipId: this.id, context: this.ownClip.ownContext },
                        !0
                      ),
                      (this.contextReady = !0);
                  },
                },
                {
                  key: "contextLoaded",
                  value: function () {
                    (this.contextReady = !0), this.unblock();
                  },
                },
                {
                  key: "onProgress",
                  value: function (t, e) {
                    var n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    if (!0 !== this.ownClip.ownContext.loading) {
                      for (var r in this.DescriptiveIncident.realClip
                        .instantiatedChannels) {
                        var i = this.DescriptiveIncident.realClip
                          .instantiatedChannels[r];
                        i.moveTo(
                          this.runTimeInfo.currentMillisecond,
                          e,
                          this.id,
                          n
                        );
                      }
                      (this.runTimeInfo.currentMillisecond = e),
                        this.ownClip.onAfterProgress(t, e);
                    } else this.setBlock();
                  },
                },
                {
                  key: "duration",
                  get: function () {
                    return this.DescriptiveIncident.realClip.duration;
                  },
                  set: function (t) {
                    this.DescriptiveIncident.realClip._resize(
                      t / this.realClip.duration
                    );
                  },
                },
              ]),
              n
            );
          })(ee);
        function re(t) {
          Object.prototype.hasOwnProperty.call(t, "dnaExtras") ||
            (t.dnaExtras = {});
          var e = new t.Incident(
            t.attrs,
            u({}, t.props, { id: t.id || Ot() }),
            u({}, t.dnaExtras, { context: t.context, mcid: t.mcid })
          );
          return (
            (e.mc_plugin_npm_name = t.plugin_npm_name),
            (e.plugin_channel_class = t.Channel),
            (e.DescriptiveIncident = t.DescriptiveIncident),
            e
          );
        }
        var ie = {
            linear: function (t) {
              return t;
            },
            easeInQuad: function (t) {
              return t * t;
            },
            easeOutQuad: function (t) {
              return t * (2 - t);
            },
            easeInOutQuad: function (t) {
              return t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1;
            },
            easeInCubic: function (t) {
              return t * t * t;
            },
            easeOutCubic: function (t) {
              return --t * t * t + 1;
            },
            easeInOutCubic: function (t) {
              return t < 0.5
                ? 4 * t * t * t
                : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            },
            easeInQuart: function (t) {
              return t * t * t * t;
            },
            easeOutQuart: function (t) {
              return 1 - --t * t * t * t;
            },
            easeInOutQuart: function (t) {
              return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
            },
            easeInQuint: function (t) {
              return t * t * t * t * t;
            },
            easeOutQuint: function (t) {
              return 1 + --t * t * t * t * t;
            },
            easeInOutQuint: function (t) {
              return t < 0.5
                ? 16 * t * t * t * t * t
                : 1 + 16 * --t * t * t * t * t;
            },
            easeInSine: function (t) {
              return -1 * Math.cos((t / 1) * (Math.PI / 2)) + 1;
            },
            easeOutSine: function (t) {
              return 1 * Math.sin((t / 1) * (Math.PI / 2));
            },
            easeInOutSine: function (t) {
              return -0.5 * (Math.cos((Math.PI * t) / 1) - 1);
            },
            easeInExpo: function (t) {
              return 0 == t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
            },
            easeOutExpo: function (t) {
              return 1 == t ? 1 : 1 * (1 - Math.pow(2, (-10 * t) / 1));
            },
            easeInOutExpo: function (t) {
              return 0 == t
                ? 0
                : 1 == t
                ? 1
                : (t /= 0.5) < 1
                ? 0.5 * Math.pow(2, 10 * (t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * --t));
            },
            easeInCirc: function (t) {
              return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
            },
            easeOutCirc: function (t) {
              return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
            },
            easeInOutCirc: function (t) {
              return (t /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            },
            easeInElastic: function (t) {
              var e = 1.70158,
                n = 0,
                r = 1;
              return 0 == t
                ? 0
                : 1 == (t /= 1)
                ? 1
                : (n || (n = 0.3),
                  r < Math.abs(1)
                    ? ((r = 1), (e = n / 4))
                    : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                  -r *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((1 * t - e) * (2 * Math.PI)) / n));
            },
            easeOutElastic: function (t) {
              var e = 1.70158,
                n = 0,
                r = 1;
              return 0 == t
                ? 0
                : 1 == (t /= 1)
                ? 1
                : (n || (n = 0.3),
                  r < Math.abs(1)
                    ? ((r = 1), (e = n / 4))
                    : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                  r *
                    Math.pow(2, -10 * t) *
                    Math.sin(((1 * t - e) * (2 * Math.PI)) / n) +
                    1);
            },
            easeInOutElastic: function (t) {
              var e = 1.70158,
                n = 0,
                r = 1;
              return 0 == t
                ? 0
                : 2 == (t /= 0.5)
                ? 1
                : (n || (n = 0.3 * 1.5 * 1),
                  r < Math.abs(1)
                    ? ((r = 1), (e = n / 4))
                    : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                  t < 1
                    ? r *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin(((1 * t - e) * (2 * Math.PI)) / n) *
                      -0.5
                    : r *
                        Math.pow(2, -10 * (t -= 1)) *
                        Math.sin(((1 * t - e) * (2 * Math.PI)) / n) *
                        0.5 +
                      1);
            },
            easeInBack: function (t) {
              var e = 1.70158;
              return 1 * (t /= 1) * t * ((e + 1) * t - e);
            },
            easeOutBack: function (t) {
              var e = 1.70158;
              return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1);
            },
            easeInOutBack: function (t) {
              var e = 1.70158;
              return (t /= 0.5) < 1
                ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            },
            easeInBounce: function (t) {
              return 1 - ie.easeOutBounce(1 - t);
            },
            easeOutBounce: function (t) {
              return (t /= 1) < 1 / 2.75
                ? 7.5625 * t * t * 1
                : t < 2 / 2.75
                ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                : t < 2.5 / 2.75
                ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            },
            easeInOutBounce: function (t) {
              return t < 0.5
                ? 0.5 * ie.easeInBounce(2 * t)
                : 0.5 * ie.easeOutBounce(2 * t - 1) + 0.5;
            },
          },
          oe = w(
            null,
            function (t, e) {
              return {
                F: (function (e) {
                  c(i, e);
                  var n = f(i);
                  function i(e, o, a, s) {
                    var u;
                    return (
                      r(this, i),
                      (u = n.call(this, {
                        id: "".concat(e.incidentId, "_").concat(a),
                      })),
                      t(d(u)),
                      (u.contexts = {}),
                      (u.constructionIngredients = e),
                      (u.mcid = a),
                      (u._duration = s.realClip.duration),
                      (u.DescriptiveIncident = s),
                      (u.mc_plugin_npm_name = e.plugin_npm_name),
                      (u.plugin_channel_class = e.Channel),
                      u.addContext(o),
                      s.realClip.subscribeToDurationChange(function (t) {
                        (u._duration = t),
                          u.putMessageOnPipe("recalcDuration", {}, "Groups", {
                            selfExecute: !0,
                            direction: Tt,
                          });
                      }),
                      (u.easing = ie.linear),
                      Object.prototype.hasOwnProperty.call(u.props, "easing") &&
                        (Array.isArray(u.props.easing)
                          ? (u.easing = Yt(
                              u.props.easing[0],
                              u.props.easing[1],
                              u.props.easing[2],
                              u.props.easing[3]
                            ))
                          : (u.easing = ie[u.props.easing])),
                      u
                    );
                  }
                  return i;
                })(e),
                d: [
                  {
                    kind: "get",
                    key: "originalContext",
                    value: function () {
                      return this.contexts[this.originalContextKey];
                    },
                  },
                  {
                    kind: "get",
                    key: "duration",
                    value: function () {
                      return this._duration;
                    },
                  },
                  {
                    kind: "method",
                    key: "onProgress",
                    value: function (t, e, n) {
                      var r =
                          arguments.length > 3 &&
                          void 0 !== arguments[3] &&
                          arguments[3],
                        i = this.easing(t) || 0,
                        o = i * this.duration;
                      this.contexts[n].onProgress(i, o, r);
                    },
                  },
                  {
                    kind: "method",
                    key: "addContext",
                    value: function (t) {
                      var e =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      0 === Object.keys(this.contexts).length &&
                        (this.originalContextKey = t.clipId);
                      var n = u({}, this.constructionIngredients, {
                        context: t.context,
                        mcid: this.mcid,
                        Incident: ne,
                        DescriptiveIncident: this.DescriptiveIncident,
                      });
                      (this.contexts[t.clipId] = re(n)),
                        e && this.contexts[t.clipId]._onGetContextOnce();
                    },
                  },
                  {
                    kind: "method",
                    key: "handleAddContext",
                    value: function (t, e) {
                      return this.addContext(e, !0), !0;
                    },
                  },
                  {
                    kind: "method",
                    decorators: [te],
                    key: "getIncidentsByChannel",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "gotContext",
                    value: function () {
                      for (var t in this.contexts)
                        this.contexts[t].gotContext();
                    },
                  },
                  {
                    kind: "method",
                    key: "_onGetContextOnce",
                    value: function () {
                      for (var t in this.contexts)
                        this.contexts[t]._onGetContextOnce();
                    },
                  },
                  {
                    kind: "method",
                    key: "lastWish",
                    value: function () {
                      for (var t in this.contexts) this.contexts[t].lastWish();
                    },
                  },
                  {
                    kind: "method",
                    key: "onGetContext",
                    value: function () {
                      for (var t in this.contexts)
                        this.contexts[t].onGetContext();
                    },
                  },
                ],
              };
            },
            Lt
          ),
          ae = w(
            null,
            function (t, e) {
              var i = (function (e) {
                c(o, e);
                var i = f(o);
                function o(e, a, s, c) {
                  var l;
                  return (
                    r(this, o),
                    (l = i.call(
                      this,
                      u({}, e.props, {
                        id:
                          null !== c
                            ? ""
                                .concat(e.incidentId, "_")
                                .concat(s, "_")
                                .concat(c)
                            : "".concat(e.incidentId, "_").concat(s),
                      })
                    )),
                    t(d(l)),
                    (l.contexts = {}),
                    (l.constructionIngredients = e),
                    (l.mcid = s),
                    (l.attribute = c),
                    (l.mc_plugin_npm_name = e.plugin_npm_name),
                    (l.plugin_channel_class = e.Channel),
                    (l.DescriptiveIncident = e.DescriptiveIncident),
                    l.addContext(a),
                    null !== c &&
                      ("object" ===
                      n(
                        l.constructionIngredients.attrs.animatedAttrs[
                          l.attribute
                        ]
                      )
                        ? (l.originalAnimatedAttributeValue = u(
                            {},
                            l.constructionIngredients.attrs.animatedAttrs[
                              l.attribute
                            ]
                          ))
                        : (l.originalAnimatedAttributeValue =
                            l.constructionIngredients.attrs.animatedAttrs[
                              l.attribute
                            ])),
                    (l.easing = ie.linear),
                    Object.prototype.hasOwnProperty.call(l.props, "easing") &&
                      (Array.isArray(l.props.easing)
                        ? (l.easing = Yt(
                            l.props.easing[0],
                            l.props.easing[1],
                            l.props.easing[2],
                            l.props.easing[3]
                          ))
                        : (l.easing = ie[l.props.easing])),
                    l
                  );
                }
                return o;
              })(e);
              return {
                F: i,
                d: [
                  {
                    kind: "get",
                    key: "originalContext",
                    value: function () {
                      return this.contexts[this.originalContextKey];
                    },
                  },
                  {
                    kind: "get",
                    key: "duration",
                    value: function () {
                      return y(l(i.prototype), "duration", this);
                    },
                  },
                  {
                    kind: "set",
                    key: "duration",
                    value: function (t) {
                      for (var e in ((function (t, e, n, r, i) {
                        if (!m(t, "duration", n, r || t))
                          throw new Error("failed to set property");
                      })(l(i.prototype), 0, t, this),
                      this.contexts))
                        this.contexts[e].duration = t;
                    },
                  },
                  {
                    kind: "method",
                    key: "addContext",
                    value: function (t) {
                      var e =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1],
                        n = !1;
                      0 === Object.keys(this.contexts).length &&
                        ((this.originalContextKey = t.clipId),
                        (this.originalClipContext = t.context),
                        (n = !0));
                      var r = u({}, this.constructionIngredients, {
                          context: t.context,
                          mcid: this.mcid,
                        }),
                        i = re(r);
                      (this.contexts[t.clipId] = i),
                        n ||
                          null === this.attribute ||
                          this.contexts[t.clipId].setInitialValue(
                            this.getInitialValue()
                          ),
                        e && this.contexts[t.clipId]._onGetContextOnce();
                    },
                  },
                  {
                    kind: "method",
                    key: "handleAddContext",
                    value: function (t, e) {
                      return this.addContext(e, !0), !0;
                    },
                  },
                  {
                    kind: "method",
                    decorators: [te],
                    key: "getIncidentsByChannel",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "onProgress",
                    value: function (t, e, n) {
                      var r =
                        e % (this.delay + this.props.duration + this.hiatus);
                      0 !== e &&
                        0 === r &&
                        (r = this.delay + this.props.duration);
                      var i = r - this.delay;
                      i < 0
                        ? (i = 0)
                        : i > this.props.duration && (i = this.props.duration);
                      var o = i / this.props.duration,
                        a = this.easing(o),
                        s = a * this.props.duration;
                      if (void 0 !== n) this.contexts[n].onProgress(a, s);
                      else
                        for (var u in this.contexts)
                          this.contexts[u].onProgress(a, s);
                    },
                  },
                  {
                    kind: "get",
                    key: "animatedAttributeValue",
                    value: function () {
                      return this.constructionIngredients.attrs.animatedAttrs[
                        this.attribute
                      ];
                    },
                  },
                  {
                    kind: "set",
                    key: "animatedAttributeValue",
                    value: function (t) {
                      this.constructionIngredients.attrs.animatedAttrs[
                        this.attribute
                      ] = t;
                    },
                  },
                  {
                    kind: "method",
                    key: "gotContext",
                    value: function () {
                      for (var t in this.contexts)
                        this.contexts[t].gotContext();
                    },
                  },
                  {
                    kind: "method",
                    key: "_onGetContextOnce",
                    value: function () {
                      for (var t in this.contexts)
                        this.contexts[t]._onGetContextOnce();
                    },
                  },
                  {
                    kind: "method",
                    key: "lastWish",
                    value: function () {
                      for (var t in this.contexts) this.contexts[t].lastWish();
                    },
                  },
                  {
                    kind: "method",
                    key: "onGetContext",
                    value: function () {
                      for (var t in this.contexts)
                        this.contexts[t].onGetContext();
                    },
                  },
                  {
                    kind: "method",
                    key: "getInitialValue",
                    value: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null;
                      return (
                        null === t && (t = this.attribute),
                        this.originalContext.getInitialValue()
                      );
                    },
                  },
                  {
                    kind: "get",
                    key: "initialValue",
                    value: function () {
                      return this.getInitialValue();
                    },
                  },
                  {
                    kind: "get",
                    key: "scratchValue",
                    value: function () {
                      return this.originalContext.scratchValue;
                    },
                  },
                  {
                    kind: "get",
                    key: "pureInitialValues",
                    value: function () {
                      return this.originalContext.pureInitialValues;
                    },
                  },
                  {
                    kind: "method",
                    key: "setInitialValue",
                    value: function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : null,
                        e =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1];
                      for (var n in (null === t && (t = this.getScratchValue()),
                      this.contexts))
                        this.contexts[n].setInitialValue(
                          JSON.parse(JSON.stringify(t)),
                          e
                        );
                    },
                  },
                  {
                    kind: "method",
                    key: "getScratchValue",
                    value: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null;
                      if (null === t) {
                        var e = Object.keys(this.contexts);
                        if (
                          Object.prototype.hasOwnProperty.call(
                            this.originalClipContext,
                            "nonFragmentedContext"
                          )
                        ) {
                          var n = u({}, this.constructionIngredients, {
                              context: this.originalClipContext
                                .nonFragmentedContext,
                              mcid: this.mcid,
                            }),
                            r = re(n);
                          return r.getScratchValue();
                        }
                        return 1 === e.length
                          ? this.originalContext.getScratchValue()
                          : this.contexts[e[1]].getScratchValue();
                      }
                      return this.contexts[t].getScratchValue();
                    },
                  },
                  {
                    kind: "method",
                    key: "setCompoAttrKeyValue",
                    value: function (t, e) {
                      for (var n in this.contexts)
                        (this.contexts[n].attrs.animatedAttrs[this.attribute][
                          t
                        ] = e),
                          this.contexts[n].lastWish(),
                          this.contexts[n].onGetContext();
                    },
                  },
                  {
                    kind: "method",
                    key: "play",
                    value: function (t, e, n) {
                      return this.contexts[n].play(e);
                    },
                  },
                  {
                    kind: "method",
                    key: "stop",
                    value: function (t) {
                      this.contexts[t].stop();
                    },
                  },
                ],
              };
            },
            Lt
          ),
          se = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t, i, o, a) {
              var s;
              return (
                r(this, n),
                ((s = e.call(
                  this,
                  {},
                  { id: "".concat(t.id, "_").concat(o) }
                )).mcid = o),
                (s.selector = a),
                s.setUp(t, i),
                s
              );
            }
            return (
              o(n, [
                {
                  key: "setUp",
                  value: function (t, e) {
                    for (var n in t.attrs.animatedAttrs) {
                      var r = {};
                      r[n] = t.attrs.animatedAttrs[n];
                      var i = u({}, t.attrs, { animatedAttrs: r }),
                        o = u({}, t.props, { selector: this.selector }),
                        a = {
                          incidentId: t.id,
                          attrs: i,
                          props: o,
                          Incident: t.constructor.Incident,
                          plugin_npm_name: t.constructor.plugin_npm_name,
                          Channel: t.constructor.Channel,
                          DescriptiveIncident: t,
                        },
                        s = new ae(a, e, this.mcid, n);
                      this.addChild(s, 0);
                    }
                  },
                },
              ]),
              n
            );
          })(qt),
          ue = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t, i) {
              var o;
              return (
                r(this, n),
                ((o = e.call(this, {}, { id: t.id })).contexts = {}),
                (o.contexts[i.clipId] = i.context),
                (o.originalContextKey = i.clipId),
                (o.instantiatedCopiesContexts = i.instantiatedCopiesContexts),
                o.setUp(t, i),
                o
              );
            }
            return (
              o(n, [
                {
                  key: "setUp",
                  value: function (t, e) {
                    for (
                      var n,
                        r,
                        i = this.originalContext.getElements(t.selector()),
                        o = i.length,
                        a = 0;
                      a < o;
                      a++
                    ) {
                      for (var s in ((n = i[a]),
                      (r = this._getElementMCID(n)),
                      this.instantiatedCopiesContexts))
                        this._setElementMCID(
                          this.instantiatedCopiesContexts[s],
                          this.instantiatedCopiesContexts[s].getElements(
                            t.selector()
                          )[a],
                          r
                        );
                      this._createElementIncident(n, t, e, a, o, r);
                    }
                  },
                },
                {
                  key: "_getElementMCID",
                  value: function (t) {
                    var e = this.originalContext.getMCID(t);
                    return (
                      e || ((e = Ot(!0)), this.originalContext.setMCID(t, e)), e
                    );
                  },
                },
                {
                  key: "_setElementMCID",
                  value: function (t, e, n) {
                    t.getMCID(e) || t.setMCID(e, n);
                  },
                },
                {
                  key: "_createElementIncident",
                  value: function (t, e, n, r, i, o) {
                    if (
                      Object.prototype.hasOwnProperty.call(
                        e.attrs,
                        "animatedAttrs"
                      )
                    ) {
                      var a = new se(
                        e,
                        n,
                        o,
                        n.context.getElementSelectorByMCID(o)
                      );
                      this.addChild(a, 0);
                    } else if (
                      Object.prototype.hasOwnProperty.call(e.attrs, "keyframes")
                    );
                    else {
                      var s = e.attrs,
                        c = u({}, e.props, { selector: this.selector }),
                        l = {
                          incidentId: e.id,
                          attrs: s,
                          props: c,
                          Incident: e.constructor.Incident,
                          plugin_npm_name: e.constructor.plugin_npm_name,
                          Channel: e.constructor.Channel,
                          DescriptiveIncident: e,
                        },
                        h = new ae(l, n, o, null);
                      this.addChild(h, 0);
                    }
                  },
                },
                {
                  key: "originalContext",
                  get: function () {
                    return this.contexts[this.originalContextKey];
                  },
                },
              ]),
              n
            );
          })(qt),
          ce = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t, i) {
              var o;
              return (
                r(this, n), ((o = e.call(this, t, i)).realClip = t.realClip), o
              );
            }
            return (
              o(n, [
                {
                  key: "_createElementIncident",
                  value: function (t, e, n, r, i, o) {
                    var a = e.realClip.exportConstructionArguments(),
                      s = {
                        incidentId: e.id,
                        attrs: a.attrs,
                        props: u({}, a.props, {
                          selector: n.context.getElementSelectorByMCID(o),
                          runTimeInfo: e.runTimeInfo,
                        }),
                        Incident: e.constructor.Incident,
                        plugin_npm_name: e.constructor.plugin_npm_name,
                        Channel: Ht,
                        DescriptiveIncident: e,
                      },
                      c = new oe(s, n, o, e);
                    this.addChild(c, 0);
                  },
                },
                {
                  key: "duration",
                  get: function () {
                    return y(l(n.prototype), "duration", this);
                  },
                  set: function (t) {
                    this.realClip._resize(t / this.realClip.duration),
                      (this._duration = t);
                  },
                },
              ]),
              n
            );
          })(ue);
        function le(t, e) {
          var n,
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if ((r && "off" === t.audio) || (!r && "only" === t.audio))
            return null;
          if (
            Object.prototype.hasOwnProperty.call(t.props, "selector") &&
            ((!r && "~" === t.props.selector.charAt(0)) ||
              (r &&
                "~" !== t.props.selector.charAt(0) &&
                !t.constructor.isClip))
          )
            return null;
          if (t.constructor.isClip) {
            if (!Object.prototype.hasOwnProperty.call(t.props, "selector") || r)
              return r ? t.audioClip : t.realClip;
            (n = new ce(t, e)).plugin_channel_class = Mt;
          } else if (t.constructor.isGroup)
            for (var i in ((n = re({
              id: t.id,
              attrs: t.attrs,
              props: t.props,
              Incident: t.constructor.Incident,
              plugin_npm_name: t.constructor.plugin_npm_name,
              Channel: t.constructor.Channel,
              DescriptiveIncident: t,
            })),
            t.children)) {
              var o = le(t.children[i].leaf, e);
              null !== o && n.addChild(o, t.children[i].position);
            }
          else n = new ue(t, e);
          return n;
        }
        var he = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t, i) {
              var o;
              return (
                r(this, n),
                ((o = e.call(this, t, i)).attrs = t),
                (o.props = i),
                (o.isTheClip = !0),
                (o.blockingWaitings = {}),
                (o.instantiatedChannels = {}),
                (o.isHostedClip = !0),
                (o.instantiatedCopiesContexts = {}),
                o.onClipInitialise(),
                (o.runTimeInfo = o.props.runTimeInfo),
                (o.durationSubs = []),
                (o.audioClip = !1),
                (o.contextReady = !0),
                o
              );
            }
            return (
              o(n, [
                { key: "onClipInitialise", value: function () {} },
                {
                  key: "contextLoading",
                  value: function () {
                    this.contextReady = !1;
                  },
                },
                {
                  key: "contextLoaded",
                  value: function () {
                    (this.contextReady = !0), this.unblock();
                  },
                },
                {
                  key: "getElements",
                  value: function (t) {
                    if (null !== this.props.host && void 0 !== this.props.host)
                      return this.context.getElements(t);
                    var e = [];
                    for (var n in this.instantiatedCopiesContexts)
                      for (
                        var r = this.instantiatedCopiesContexts[n].getElements(
                            t
                          ),
                          i = 0;
                        i < r.length;
                        i++
                      )
                        e.push(r[i]);
                    return e;
                  },
                },
                {
                  key: "addContext",
                  value: function (t) {
                    (this.instantiatedCopiesContexts[t.clipId] = t.context),
                      (t.instantiatedCopiesContexts = this.instantiatedCopiesContexts);
                    var e = this.putMessageOnPipe(
                      "addContext",
                      t,
                      {},
                      { selfExecute: !1, direction: Dt }
                    );
                    if (
                      1 === Object.keys(this.instantiatedCopiesContexts).length
                    ) {
                      for (var n in this.instantiatedChannels)
                        this.instantiatedChannels[n].recalcScratchValues(
                          t.clipId
                        );
                      this.context.nonFragmentedContext = t.context;
                    }
                    return e;
                  },
                },
                {
                  key: "exportConstructionArguments",
                  value: function () {
                    return { attrs: this.attrs, props: this.props };
                  },
                },
                {
                  key: "_resize",
                  value: function (t) {
                    for (var e in this.instantiatedChannels)
                      this.instantiatedChannels[e]._resize(t);
                    this.setNewDuration(this.duration * t);
                    for (var n = 0; n < this.durationSubs.length; n++)
                      this.durationSubs[n](this.duration);
                  },
                },
                {
                  key: "addIncident",
                  value: function (t) {
                    for (
                      var e = this,
                        n = this.putMessageOnPipe(
                          "addIncident",
                          {
                            incident: t.incident,
                            millisecond: t.millisecond,
                            parentGroupId: t.parentGroupId,
                            incidentFromDescription: le,
                            contextData: {
                              clipId: this.id,
                              context: this.context,
                              instantiatedCopiesContexts: this
                                .instantiatedCopiesContexts,
                            },
                            audio: this.audioClip,
                          },
                          t.parentGroupId,
                          { selfExecute: !0, direction: Dt }
                        ),
                        r = {},
                        i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i].response.getIncidentsByChannel(
                        n[i].positionDelta + t.millisecond
                      );
                      for (var a in o) {
                        var s;
                        Object.prototype.hasOwnProperty.call(r, a) ||
                          (r[a] = []),
                          (s = r[a]).push.apply(s, g(o[a]));
                      }
                    }
                    var u = this.checkAddition(r);
                    return u.result
                      ? {
                          result: !0,
                          execute: function () {
                            u.execute();
                            for (var r = 0; r < n.length; r++)
                              for (var i in (n[r].responder.addChild(
                                n[r].response,
                                t.millisecond
                              ),
                              n[r].responder.putMessageOnPipe(
                                "recalcDuration",
                                {},
                                "Groups",
                                { selfExecute: !0, direction: Tt }
                              ),
                              e.instantiatedCopiesContexts))
                                n[r].responder.putMessageOnPipe(
                                  "addContext",
                                  {
                                    clipId: i,
                                    context: e.instantiatedCopiesContexts[i],
                                  },
                                  "ContextAwareIncidents",
                                  { selfExecute: !1, direction: Dt }
                                );
                          },
                        }
                      : u;
                  },
                },
                {
                  key: "checkAddition",
                  value: function (t) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "all-or-nothing",
                      n = !0,
                      r = [],
                      i = [];
                    for (var o in t) {
                      Object.prototype.hasOwnProperty.call(
                        this.instantiatedChannels,
                        o
                      ) ||
                        (this.instantiatedChannels[o] = new t[
                          o
                        ][0].incident.plugin_channel_class({
                          runTimeInfo: this.runTimeInfo,
                          context: this.context,
                          subscribe: this.props.subscribe,
                        }));
                      var a = this.instantiatedChannels[o].addIncidents(
                        t[o],
                        e
                      );
                      (n = n && a.result),
                        a.result ? i.push(a.execute) : (r = r.concat(a.errors));
                    }
                    var s = function () {
                        for (var t = 0; t < i.length; t++) i[t]();
                      },
                      u = { result: n, errors: r, execute: s };
                    return u;
                  },
                },
                {
                  key: "moveIncident",
                  value: function (t) {
                    for (
                      var e = this.putMessageOnPipe(
                          "moveIncident",
                          {
                            incidentId: t.id,
                            millisecond: t.millisecond,
                            parentGroupId: t.parentGroupId,
                            contextData: {
                              clipId: this.id,
                              context: this.context,
                            },
                            audio: this.audioClip,
                          },
                          t.parentGroupId,
                          { selfExecute: !0, direction: Dt }
                        ),
                        n = {},
                        r = 0;
                      r < e.length;
                      r++
                    ) {
                      var i = e[r].response.getIncidentsByChannel(
                        e[r].positionDelta + t.millisecond
                      );
                      for (var o in i) {
                        var a;
                        Object.prototype.hasOwnProperty.call(n, o) ||
                          (n[o] = []),
                          (a = n[o]).push.apply(a, g(i[o]));
                      }
                    }
                    var s = this.checkMove(n, t.positionDelta);
                    return s.result
                      ? {
                          result: !0,
                          execute: function () {
                            s.execute();
                            for (var n = 0; n < e.length; n++)
                              e[n].responder.editPosition(
                                e[n].response.id,
                                t.millisecond
                              ),
                                e[
                                  n
                                ].responder.putMessageOnPipe(
                                  "recalcDuration",
                                  {},
                                  "Groups",
                                  { selfExecute: !0, direction: Tt }
                                );
                          },
                        }
                      : s;
                  },
                },
                {
                  key: "checkMove",
                  value: function (t, e) {
                    var n = !0,
                      r = [],
                      i = [];
                    for (var o in t) {
                      var a = this.instantiatedChannels[o].editIncidents(
                        t[o],
                        e
                      );
                      (n = n && a.result),
                        a.result ? i.push(a.execute) : (r = r.concat(a.errors));
                    }
                    return {
                      result: n,
                      errors: r,
                      execute: function () {
                        for (var t = 0; t < i.length; t++) i[t]();
                      },
                    };
                  },
                },
                {
                  key: "removeIncident",
                  value: function (t) {
                    for (
                      var e = this.putMessageOnPipe(
                          "removeIncident",
                          {
                            incidentId: t.id,
                            parentGroupId: t.parentGroupId,
                            contextData: {
                              clipId: this.id,
                              context: this.context,
                            },
                            audio: this.audioClip,
                          },
                          t.parentGroupId,
                          { selfExecute: !0, direction: Dt }
                        ),
                        n = {},
                        r = 0;
                      r < e.length;
                      r++
                    ) {
                      var i = e[r].response.getIncidentsByChannel();
                      for (var o in i) {
                        var a;
                        Object.prototype.hasOwnProperty.call(n, o) ||
                          (n[o] = []),
                          (a = n[o]).push.apply(a, g(i[o]));
                      }
                    }
                    var s = this.checkDelete(n);
                    return s.result
                      ? {
                          result: !0,
                          execute: function () {
                            s.execute();
                            for (var t = 0; t < e.length; t++)
                              e[t].responder.removeChild(e[t].response.id),
                                e[
                                  t
                                ].responder.putMessageOnPipe(
                                  "recalcDuration",
                                  {},
                                  "Groups",
                                  { selfExecute: !0, direction: Tt }
                                );
                          },
                        }
                      : s;
                  },
                },
                {
                  key: "checkDelete",
                  value: function (t) {
                    var e = !0,
                      n = [],
                      r = [];
                    for (var i in t) {
                      var o = this.instantiatedChannels[i].removeIncidents(
                        t[i]
                      );
                      (e = e && o.result),
                        o.result ? r.push(o.execute) : (n = n.concat(o.errors));
                    }
                    return {
                      result: e,
                      errors: n,
                      execute: function () {
                        for (var t = 0; t < r.length; t++) r[t]();
                      },
                    };
                  },
                },
                {
                  key: "resizeIncident",
                  value: function (t) {
                    for (
                      var e = this.putMessageOnPipe(
                          "resize",
                          {
                            incidentId: t.id,
                            newSize: t.newSize,
                            fraction: t.fraction,
                            contextData: {
                              clipId: this.id,
                              context: this.context,
                            },
                            audio: this.audioClip,
                          },
                          t.id,
                          { selfExecute: !1, direction: Dt }
                        ),
                        n = {},
                        r = 0;
                      r < e.length;
                      r++
                    ) {
                      var i = e[r].response.getIncidentsByChannel(
                        e[r].positionDelta
                      );
                      for (var o in i) {
                        var a;
                        Object.prototype.hasOwnProperty.call(n, o) ||
                          (n[o] = []),
                          (a = n[o]).push.apply(a, g(i[o]));
                      }
                    }
                    var s = 0;
                    e.length > 0 && (s = e[0].positionDelta);
                    var u = this.checkResize(t.fraction, n, s);
                    return u.result
                      ? {
                          result: !0,
                          execute: function () {
                            u.execute();
                            for (var n = 0; n < e.length; n++)
                              e[n].responder.setNewDuration(t.newSize);
                          },
                        }
                      : u;
                  },
                },
                {
                  key: "checkResize",
                  value: function (t, e) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      r = !0,
                      i = [],
                      o = [];
                    for (var a in e) {
                      var s = At.systoleDiastoleProjections(e[a], t, n),
                        u = this.instantiatedChannels[a].checkResizedIncidents(
                          s
                        );
                      (r = r && u.result),
                        u.result ? o.push(u.execute) : (i = i.concat(u.errors));
                    }
                    var c = function () {
                        for (var t = 0; t < o.length; t++) o[t]();
                      },
                      l = { result: r, errors: i, execute: c };
                    return l;
                  },
                },
                {
                  key: "getIncidentsByChannel",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      e = {};
                    return (
                      (e["@kissmybutton/self-contained-incidents"] = [
                        { millisecond: t, incident: this, id: this.id },
                      ]),
                      e
                    );
                  },
                },
                {
                  key: "setVolume",
                  value: function (t) {
                    this.volume = parseFloat(t);
                  },
                },
                { key: "_onGetContextOnce", value: function (t) {} },
                {
                  key: "handleRecalcDuration",
                  value: function (t, e) {
                    if (this._calculateDuration())
                      for (var n = 0; n < this.durationSubs.length; n++)
                        this.durationSubs[n](this.duration);
                    return !0;
                  },
                },
                {
                  key: "onProgress",
                  value: function (t, e, n) {
                    var r =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    if (this.contextReady) {
                      for (var i in (n || (n = this.id),
                      this.instantiatedChannels)) {
                        var o = this.instantiatedChannels[i];
                        o.moveTo(this.runTimeInfo.currentMillisecond, e, n, r);
                      }
                      this.onAfterProgress(t, e);
                    } else this.setBlock();
                  },
                },
                { key: "onAfterProgress", value: function (t, e) {} },
                {
                  key: "flash",
                  value: function () {
                    for (var t in this.instantiatedChannels)
                      this.instantiatedChannels[t].moveTo(
                        0,
                        this.runTimeInfo.currentMillisecond,
                        this.id,
                        !0
                      );
                  },
                },
                {
                  key: "subscribeToDurationChange",
                  value: function (t) {
                    this.durationSubs.push(t);
                  },
                },
                { key: "handleSetBlockingWaiting", value: function (t, e) {} },
                {
                  key: "handleRemoveBlockingWaiting",
                  value: function (t, e) {},
                },
                {
                  key: "context",
                  get: function () {
                    return this.ownContext;
                  },
                },
              ]),
              n
            );
          })(qt),
          de = (function () {
            function t() {
              r(this, t),
                (this.output = bt.createGain()),
                (this.gainNode = bt.createGain()),
                bt.createStereoPanner &&
                  (this.pannerNode = bt.createStereoPanner()),
                bt.createStereoPanner
                  ? (this.pannerNode.connect(this.gainNode),
                    this.gainNode.connect(this.output),
                    (this.input = this.pannerNode))
                  : (this.gainNode.connect(this.output),
                    (this.input = this.gainNode));
            }
            return (
              o(t, [
                {
                  key: "connect",
                  value: function (t) {
                    this.output.connect(t);
                  },
                },
                {
                  key: "disconnect",
                  value: function () {
                    this.output.disconnect();
                  },
                },
              ]),
              t
            );
          })();
        function pe(t) {
          for (
            var e = window.atob(t), n = e.length, r = new Uint8Array(n), i = 0;
            i < n;
            i++
          )
            r[i] = e.charCodeAt(i);
          return r.buffer;
        }
        var fe = /\[data(-mcid="+\w+")+\]/g,
          ve = (function () {
            function t() {
              r(this, t), (this.subscribers = []);
            }
            return (
              o(t, [
                {
                  key: "sub",
                  value: function (t, e) {
                    this.subscribers.push(e);
                  },
                },
                {
                  key: "pub",
                  value: function (t) {
                    for (var e = 0; e < this.subscribers.length; e++)
                      this.subscribers[e](t);
                  },
                },
              ]),
              t
            );
          })(),
          ye = (function () {
            function t() {
              var e = this,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                i = arguments.length > 1 ? arguments[1] : void 0;
              r(this, t),
                (this.totalSources = n.length),
                (this.audioSources = {}),
                (this.elementsByMCID = {});
              for (
                var o = function (t) {
                    var r = n[t],
                      o = {
                        mcid: r.mcid || Ot(),
                        id: r.id,
                        src: r.src,
                        classes: r.classes || [],
                        base64: r.base64 || !1,
                        pubSub: new ve(),
                        soundLoaded: !1,
                        startValues: r.startValues || {},
                      };
                    if (
                      ((e.audioSources[o.id] = o),
                      (e.elementsByMCID[o.mcid] = o),
                      r.base64)
                    )
                      bt.decodeAudioData(pe(r.src), function (t) {
                        e._setBuffer(o, t, i);
                      });
                    else {
                      var a = new XMLHttpRequest();
                      a.open("GET", o.src, !0),
                        (a.responseType = "arraybuffer"),
                        (e.soundLoaded = !1),
                        (a.onload = function () {
                          bt.decodeAudioData(
                            a.response,
                            function (t) {
                              e._setBuffer(o, t, i);
                            },
                            e.onError
                          );
                        }),
                        a.send();
                    }
                  },
                  a = 0;
                a < n.length;
                a++
              )
                o(a);
              this.context = {
                document: document,
                window: window,
                rootElement: document.body,
                unmount: function () {},
                masterNode: i,
                audioContext: bt,
                getElements: this.getElements.bind(this),
                getMCID: this.getMCID.bind(this),
                setMCID: this.setMCID.bind(this),
                getElementSelectorByMCID: this.getElementSelectorByMCID.bind(
                  this
                ),
                getElementByMCID: this.getElementByMCID.bind(this),
              };
            }
            return (
              o(t, [
                {
                  key: "_setBuffer",
                  value: function (t, e, n) {
                    (t.soundLoaded = !0),
                      (t.buffer = e),
                      (t.effectsAudioNode = new de()),
                      t.effectsAudioNode.connect(n.input),
                      t.pubSub.pub();
                  },
                },
                {
                  key: "getElementByMCID",
                  value: function (t) {
                    return Object.prototype.hasOwnProperty.call(
                      this.elementsByMCID,
                      t
                    )
                      ? this.elementsByMCID[t]
                      : null;
                  },
                },
                {
                  key: "getElements",
                  value: function (t) {
                    if ("~" !== t.charAt(0)) {
                      if (fe.exec(t)) {
                        var e = t.split('"')[1];
                        return this.elementsByMCID[e];
                      }
                      return [];
                    }
                    if ("#" === (t = t.substr(1)).charAt(0))
                      return Object.prototype.hasOwnProperty.call(
                        this.audioSources,
                        t.substr(1)
                      )
                        ? [this.audioSources[t.substr(1)]]
                        : [];
                    if ("." === t.charAt(0)) {
                      var n = t.substr(1),
                        r = [];
                      for (var i in this.audioSources)
                        i.classes.indexOf(n) >= 0 && r.push(i);
                      return r;
                    }
                  },
                },
                {
                  key: "getMCID",
                  value: function (t) {
                    return t.mcid;
                  },
                },
                {
                  key: "setMCID",
                  value: function (t, e) {
                    t.mcid = e;
                  },
                },
                {
                  key: "getElementSelectorByMCID",
                  value: function (t) {
                    return '[data-mcid="'.concat(t, '"]');
                  },
                },
              ]),
              t
            );
          })(),
          me = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t, i) {
              var o;
              r(this, n),
                ((o = e.call(this, t, i)).audioNode = new de()),
                o.audioNode.connect(bt.destination);
              var a = new ye(o.props.audioSources, o.audioNode);
              return (
                (o.ownContext = u({}, a.context, { isHostedClip: !0 })),
                (o.audioClip = !0),
                o
              );
            }
            return (
              o(n, [
                {
                  key: "onProgress",
                  value: function (t, e, r) {
                    var i =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    y(l(n.prototype), "onProgress", this).call(
                      this,
                      t,
                      e,
                      this.id,
                      i
                    );
                  },
                },
                {
                  key: "_onGetContextOnce",
                  value: function (t) {
                    this.audioNode.disconnect(),
                      (this.parentClipContext = t),
                      this.audioNode.connect(t.masterNode.input);
                  },
                },
                {
                  key: "lastWish",
                  value: function () {
                    this.audioNode.output.disconnect(),
                      this.audioNode.output.connect(bt.destination);
                  },
                },
                {
                  key: "setVolume",
                  value: function (t) {
                    this.audioNode.output.gain.value = t;
                  },
                },
              ]),
              n
            );
          })(he),
          ge = (function (t) {
            c(n, t);
            var e = f(n);
            function n() {
              return r(this, n), e.apply(this, arguments);
            }
            return (
              o(n, [
                {
                  key: "onProgress",
                  value: function (t) {
                    var e = this;
                    if (!this.element.soundLoaded)
                      return (
                        this.setBlock("loading sound"),
                        this.element.pubSub.sub(this.id, function () {
                          e.unblock();
                        }),
                        !1
                      );
                    if ("gain" === this.attributeKey) {
                      var n =
                        (this.targetValue - this.getInitialValue()) * t +
                        this.getInitialValue();
                      this.element.effectsAudioNode.gainNode.gain.value = n;
                    } else if ("pan" === this.attributeKey) {
                      var r =
                        (this.targetValue - this.getInitialValue()) * t +
                        this.getInitialValue();
                      this.element.effectsAudioNode.pannerNode.pan.value = r;
                    }
                  },
                },
                {
                  key: "getScratchValue",
                  value: function () {
                    return "pan" === this.attributeKey
                      ? Object.prototype.hasOwnProperty.call(
                          this.element.startValues,
                          "pan"
                        )
                        ? this.element.startValues.pan
                        : 0
                      : "gain" === this.attributeKey
                      ? Object.prototype.hasOwnProperty.call(
                          this.element.startValues,
                          "gain"
                        )
                        ? this.element.startValues.gain
                        : 1
                      : void 0;
                  },
                },
              ]),
              n
            );
          })(ee),
          be = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t) {
              var i;
              return (
                r(this, n),
                ((i = e.call(this, t)).playingIncidentsIds = []),
                (i.transitioned = !1),
                t.subscribe(Ot(), i._stateChange.bind(d(i)), 0, 1, !0),
                i
              );
            }
            return (
              o(n, [
                {
                  key: "_stateChange",
                  value: function (t, e) {
                    ("paused" !== e && "idle" !== e && "blocked" !== e) ||
                      (this._stopPlayingIncidents(), (this.transitioned = !0));
                  },
                },
                {
                  key: "_stopPlayingIncidents",
                  value: function () {
                    for (var t = 0; t < this.playingIncidentsIds.length; t++) {
                      var e = this.playingIncidentsIds[t].split("|||");
                      this._incidentById(e[0]).stop(e[1]);
                    }
                    this.playingIncidentsIds = [];
                  },
                },
                {
                  key: "moveTo",
                  value: function (t, e, n) {
                    var r =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    if ("transitional" === this.runTimeInfo.state || r) {
                      (this.transitioned = !0), this._stopPlayingIncidents();
                      for (var i = 0; i < this.incidents.length; i++) {
                        var o = this.incidents[i],
                          a = this._incidentById(o.id);
                        e < o.millisecond
                          ? a.onProgress(0, 0, n, !0)
                          : e > o.millisecond + a.duration
                          ? a.onProgress(1, a.duration, n, !0)
                          : a.onProgress(
                              (e - o.millisecond) / a.duration,
                              e - o.millisecond,
                              n,
                              !0
                            );
                      }
                    } else {
                      this.transitioned && ((t = 0), (this.transitioned = !1));
                      for (
                        var s = this,
                          u = Rt(this.incidents, function (n) {
                            return (
                              n.millisecond >= t &&
                              n.millisecond < e &&
                              n.millisecond + s._incidentById(n.id).duration > e
                            );
                          }),
                          c = Rt(this.incidents, function (n) {
                            return (
                              s._incidentById(n.id).duration + n.millisecond >
                                t &&
                              s._incidentById(n.id).duration + n.millisecond <=
                                e
                            );
                          }),
                          l = 0;
                        l < u.length;
                        l++
                      ) {
                        var h = u[l],
                          d = this._incidentById(h.id),
                          p = (e - h.millisecond) / d.duration >= 1,
                          f = p ? 1 : (e - h.millisecond) / d.duration,
                          v = p ? d.duration : e - h.millisecond,
                          y = d.play(f, v, n);
                        !0 === y &&
                          this.playingIncidentsIds.push(
                            "".concat(h.id).concat("|||").concat(n)
                          );
                      }
                      for (var m = 0; m < c.length; m++) {
                        var g = c[m],
                          b = this._incidentById(g.id);
                        b.stop(n);
                        var x = this.playingIncidentsIds.indexOf(
                          "".concat(g.id).concat("|||").concat(n)
                        );
                        x > -1 && this.playingIncidentsIds.splice(x, 1);
                      }
                      this.runTimeInfo.currentMillisecond = e;
                    }
                  },
                },
              ]),
              n
            );
          })(Ht),
          xe = w(null, function (t) {
            return {
              F: function e() {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  o = arguments.length > 2 ? arguments[2] : void 0;
                r(this, e),
                  t(this),
                  (this.attrs = n),
                  (this.props = i),
                  (this.dna = o),
                  (this.context = o.context),
                  (this.mcid = o.mcid),
                  (this.id = i.id || Ot()),
                  (this.modelId = i.modelId),
                  (this.gotContext = !1),
                  (this.plugin_channel_class = be),
                  (this.mc_plugin_npm_name = "motor-cortex-js-media-playback"),
                  Object.prototype.hasOwnProperty.call(
                    i,
                    "plugin_channel_class"
                  ) && (this.plugin_channel_class = i.plugin_channel_class),
                  Object.prototype.hasOwnProperty.call(
                    i,
                    "mc_plugin_npm_name"
                  ) && (this.mc_plugin_npm_name = i.mc_plugin_npm_name),
                  (this.hasIncidents = !1),
                  (this.autoGenerated = !1),
                  this.onInitialise(n, i);
              },
              d: [
                {
                  kind: "get",
                  key: "selector",
                  value: function () {
                    return this.props.selector;
                  },
                },
                {
                  kind: "get",
                  key: "element",
                  value: function () {
                    return this.context.getElementByMCID(this.mcid);
                  },
                },
                {
                  kind: "method",
                  decorators: [te],
                  key: "getIncidentsByChannel",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "_onGetContextOnce",
                  value: function () {
                    try {
                      if (!0 === this.context.fragment) return;
                      this.gotContext ||
                        (this.onGetContext(), (this.gotContext = !0));
                    } catch (t) {
                      console.log(t), console.log(this.mcid);
                    }
                  },
                },
                {
                  kind: "method",
                  key: "onGetContext",
                  value: function () {
                    At.info(
                      'Overwritte the "onGetContext" method with the code you want to get executed',
                      "info"
                    );
                  },
                },
                { kind: "method", key: "lastWish", value: function () {} },
                {
                  kind: "method",
                  key: "onInitialise",
                  value: function () {
                    At.info(
                      'Overwritte the "onInialise" method with the code you want to get executed',
                      "info"
                    );
                  },
                },
                {
                  kind: "method",
                  key: "onProgress",
                  value: function (t, e) {},
                },
                {
                  kind: "method",
                  key: "play",
                  value: function (t) {
                    return !0;
                  },
                },
                { kind: "method", key: "stop", value: function () {} },
                {
                  kind: "method",
                  decorators: [zt],
                  key: "setBlock",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Ft],
                  key: "unblock",
                  value: function () {},
                },
              ],
            };
          }),
          ke = {
            npm_name: "@kissmybutton/motorcortex-soundsystem",
            incidents: [
              {
                exportable: (function (t) {
                  c(n, t);
                  var e = f(n);
                  function n() {
                    return r(this, n), e.apply(this, arguments);
                  }
                  return (
                    o(n, [
                      {
                        key: "play",
                        value: function (t) {
                          var e = this;
                          if (!this.element.soundLoaded)
                            return (
                              this.setBlock("loading sound"),
                              this.element.pubSub.sub(this.id, function () {
                                e.unblock();
                              }),
                              !1
                            );
                          var n = 0;
                          return (
                            Object.prototype.hasOwnProperty.call(
                              this.props,
                              "startFrom"
                            ) && (n = this.props.startFrom),
                            (this.audioNode = bt.createBufferSource()),
                            (this.audioNode.buffer = this.element.buffer),
                            this.audioNode.connect(
                              this.element.effectsAudioNode.input
                            ),
                            this.audioNode.start(0, (t + n) / 1e3),
                            !0
                          );
                        },
                      },
                      {
                        key: "stop",
                        value: function () {
                          this.audioNode.stop();
                        },
                      },
                    ]),
                    n
                  );
                })(xe),
                name: "AudioPlayback",
              },
              { exportable: ge, name: "AudioEffect" },
            ],
            Clip: me,
            audio: "only",
          },
          _e = ct(function (t, e) {
            var n = "[object Arguments]",
              r = "[object Map]",
              i = "[object Object]",
              o = "[object Set]",
              a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              s = /^\w*$/,
              u = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              c = /^\s+|\s+$/g,
              l = /\\(\\)?/g,
              h = /^[-+]0x[0-9a-f]+$/i,
              d = /^0b[01]+$/i,
              p = /^\[object .+?Constructor\]$/,
              f = /^0o[0-7]+$/i,
              v = /^(?:0|[1-9]\d*)$/,
              y = {};
            (y["[object Float32Array]"] = y["[object Float64Array]"] = y[
              "[object Int8Array]"
            ] = y["[object Int16Array]"] = y["[object Int32Array]"] = y[
              "[object Uint8Array]"
            ] = y["[object Uint8ClampedArray]"] = y["[object Uint16Array]"] = y[
              "[object Uint32Array]"
            ] = !0),
              (y[n] = y["[object Array]"] = y["[object ArrayBuffer]"] = y[
                "[object Boolean]"
              ] = y["[object DataView]"] = y["[object Date]"] = y[
                "[object Error]"
              ] = y["[object Function]"] = y[r] = y["[object Number]"] = y[
                i
              ] = y["[object RegExp]"] = y[o] = y["[object String]"] = y[
                "[object WeakMap]"
              ] = !1);
            var m = parseInt,
              g = "object" == typeof st && st && st.Object === Object && st,
              b =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              x = g || b || Function("return this")(),
              k = e && !e.nodeType && e,
              _ = k && t && !t.nodeType && t,
              w = _ && _.exports === k,
              I = w && g.process,
              O = (function () {
                try {
                  return I && I.binding && I.binding("util");
                } catch (t) {}
              })(),
              C = O && O.isTypedArray;
            function j(t, e) {
              for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
                if (e(t[n], n, t)) return !0;
              return !1;
            }
            function P(t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t, r) {
                  n[++e] = [r, t];
                }),
                n
              );
            }
            function A(t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t) {
                  n[++e] = t;
                }),
                n
              );
            }
            var E,
              M,
              S,
              T = Array.prototype,
              D = Function.prototype,
              B = Object.prototype,
              L = x["__core-js_shared__"],
              V = D.toString,
              $ = B.hasOwnProperty,
              z = (E = /[^.]+$/.exec((L && L.keys && L.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + E
                : "",
              N = B.toString,
              F = RegExp(
                "^" +
                  V.call($)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              q = w ? x.Buffer : void 0,
              R = x.Symbol,
              G = x.Uint8Array,
              H = B.propertyIsEnumerable,
              K = T.splice,
              W = R ? R.toStringTag : void 0,
              U = Object.getOwnPropertySymbols,
              J = q ? q.isBuffer : void 0,
              Z =
                ((M = Object.keys),
                (S = Object),
                function (t) {
                  return M(S(t));
                }),
              Q = Math.max,
              X = At(x, "DataView"),
              Y = At(x, "Map"),
              tt = At(x, "Promise"),
              et = At(x, "Set"),
              nt = At(x, "WeakMap"),
              rt = At(Object, "create"),
              it = $t(X),
              ot = $t(Y),
              at = $t(tt),
              ut = $t(et),
              ct = $t(nt),
              lt = R ? R.prototype : void 0,
              ht = lt ? lt.valueOf : void 0,
              dt = lt ? lt.toString : void 0;
            function pt(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
              }
            }
            function ft(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
              }
            }
            function vt(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
              }
            }
            function yt(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.__data__ = new vt(); ++e < n; ) this.add(t[e]);
            }
            function mt(t) {
              var e = (this.__data__ = new ft(t));
              this.size = e.size;
            }
            function gt(t, e) {
              for (var n = t.length; n--; ) if (Nt(t[n][0], e)) return n;
              return -1;
            }
            function bt(t, e) {
              for (var n = 0, r = (e = Ot(e, t)).length; null != t && n < r; )
                t = t[Vt(e[n++])];
              return n && n == r ? t : void 0;
            }
            function xt(t) {
              return null == t
                ? void 0 === t
                  ? "[object Undefined]"
                  : "[object Null]"
                : W && W in Object(t)
                ? (function (t) {
                    var e = $.call(t, W),
                      n = t[W];
                    try {
                      t[W] = void 0;
                      var r = !0;
                    } catch (t) {}
                    var i = N.call(t);
                    return r && (e ? (t[W] = n) : delete t[W]), i;
                  })(t)
                : (function (t) {
                    return N.call(t);
                  })(t);
            }
            function kt(t, e) {
              return null != t && e in Object(t);
            }
            function _t(t) {
              return Wt(t) && xt(t) == n;
            }
            function wt(t, e, a, s, u) {
              return (
                t === e ||
                (null == t || null == e || (!Wt(t) && !Wt(e))
                  ? t != t && e != e
                  : (function (t, e, a, s, u, c) {
                      var l = qt(t),
                        h = qt(e),
                        d = l ? "[object Array]" : Mt(t),
                        p = h ? "[object Array]" : Mt(e),
                        f = (d = d == n ? i : d) == i,
                        v = (p = p == n ? i : p) == i,
                        y = d == p;
                      if (y && Rt(t)) {
                        if (!Rt(e)) return !1;
                        (l = !0), (f = !1);
                      }
                      if (y && !f)
                        return (
                          c || (c = new mt()),
                          l || Jt(t)
                            ? Ct(t, e, a, s, u, c)
                            : (function (t, e, n, i, a, s, u) {
                                switch (n) {
                                  case "[object DataView]":
                                    if (
                                      t.byteLength != e.byteLength ||
                                      t.byteOffset != e.byteOffset
                                    )
                                      return !1;
                                    (t = t.buffer), (e = e.buffer);
                                  case "[object ArrayBuffer]":
                                    return !(
                                      t.byteLength != e.byteLength ||
                                      !s(new G(t), new G(e))
                                    );
                                  case "[object Boolean]":
                                  case "[object Date]":
                                  case "[object Number]":
                                    return Nt(+t, +e);
                                  case "[object Error]":
                                    return (
                                      t.name == e.name && t.message == e.message
                                    );
                                  case "[object RegExp]":
                                  case "[object String]":
                                    return t == e + "";
                                  case r:
                                    var c = P;
                                  case o:
                                    var l = 1 & i;
                                    if ((c || (c = A), t.size != e.size && !l))
                                      return !1;
                                    var h = u.get(t);
                                    if (h) return h == e;
                                    (i |= 2), u.set(t, e);
                                    var d = Ct(c(t), c(e), i, a, s, u);
                                    return u.delete(t), d;
                                  case "[object Symbol]":
                                    if (ht) return ht.call(t) == ht.call(e);
                                }
                                return !1;
                              })(t, e, d, a, s, u, c)
                        );
                      if (!(1 & a)) {
                        var m = f && $.call(t, "__wrapped__"),
                          g = v && $.call(e, "__wrapped__");
                        if (m || g) {
                          var b = m ? t.value() : t,
                            x = g ? e.value() : e;
                          return c || (c = new mt()), u(b, x, a, s, c);
                        }
                      }
                      return (
                        !!y &&
                        (c || (c = new mt()),
                        (function (t, e, n, r, i, o) {
                          var a = 1 & n,
                            s = jt(t),
                            u = s.length;
                          if (u != jt(e).length && !a) return !1;
                          for (var c = u; c--; ) {
                            var l = s[c];
                            if (!(a ? l in e : $.call(e, l))) return !1;
                          }
                          var h = o.get(t);
                          if (h && o.get(e)) return h == e;
                          var d = !0;
                          o.set(t, e), o.set(e, t);
                          for (var p = a; ++c < u; ) {
                            var f = t[(l = s[c])],
                              v = e[l];
                            if (r)
                              var y = a
                                ? r(v, f, l, e, t, o)
                                : r(f, v, l, t, e, o);
                            if (
                              !(void 0 === y ? f === v || i(f, v, n, r, o) : y)
                            ) {
                              d = !1;
                              break;
                            }
                            p || (p = "constructor" == l);
                          }
                          if (d && !p) {
                            var m = t.constructor,
                              g = e.constructor;
                            m == g ||
                              !("constructor" in t) ||
                              !("constructor" in e) ||
                              ("function" == typeof m &&
                                m instanceof m &&
                                "function" == typeof g &&
                                g instanceof g) ||
                              (d = !1);
                          }
                          return o.delete(t), o.delete(e), d;
                        })(t, e, a, s, u, c))
                      );
                    })(t, e, a, s, wt, u))
              );
            }
            function It(t) {
              if ("string" == typeof t) return t;
              if (qt(t))
                return (
                  (function (t, e) {
                    for (
                      var n = -1, r = null == t ? 0 : t.length, i = Array(r);
                      ++n < r;

                    )
                      i[n] = e(t[n], n, t);
                    return i;
                  })(t, It) + ""
                );
              if (Ut(t)) return dt ? dt.call(t) : "";
              var e = t + "";
              return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
            }
            function Ot(t, e) {
              return qt(t)
                ? t
                : Tt(t, e)
                ? [t]
                : Lt(
                    (function (t) {
                      return null == t ? "" : It(t);
                    })(t)
                  );
            }
            function Ct(t, e, n, r, i, o) {
              var a = 1 & n,
                s = t.length,
                u = e.length;
              if (s != u && !(a && u > s)) return !1;
              var c = o.get(t);
              if (c && o.get(e)) return c == e;
              var l = -1,
                h = !0,
                d = 2 & n ? new yt() : void 0;
              for (o.set(t, e), o.set(e, t); ++l < s; ) {
                var p = t[l],
                  f = e[l];
                if (r) var v = a ? r(f, p, l, e, t, o) : r(p, f, l, t, e, o);
                if (void 0 !== v) {
                  if (v) continue;
                  h = !1;
                  break;
                }
                if (d) {
                  if (
                    !j(e, function (t, e) {
                      if (((a = e), !d.has(a) && (p === t || i(p, t, n, r, o))))
                        return d.push(e);
                      var a;
                    })
                  ) {
                    h = !1;
                    break;
                  }
                } else if (p !== f && !i(p, f, n, r, o)) {
                  h = !1;
                  break;
                }
              }
              return o.delete(t), o.delete(e), h;
            }
            function jt(t) {
              return (function (t, e, n) {
                var r = e(t);
                return qt(t)
                  ? r
                  : (function (t, e) {
                      for (var n = -1, r = e.length, i = t.length; ++n < r; )
                        t[i + n] = e[n];
                      return t;
                    })(r, n(t));
              })(t, Zt, Et);
            }
            function Pt(t, e) {
              var n,
                r,
                i = t.__data__;
              return (
                "string" == (r = typeof (n = e)) ||
                "number" == r ||
                "symbol" == r ||
                "boolean" == r
                  ? "__proto__" !== n
                  : null === n
              )
                ? i["string" == typeof e ? "string" : "hash"]
                : i.map;
            }
            function At(t, e) {
              var n = (function (t, e) {
                return null == t ? void 0 : t[e];
              })(t, e);
              return (function (t) {
                return (
                  !(
                    !Kt(t) ||
                    (function (t) {
                      return !!z && z in t;
                    })(t)
                  ) && (Gt(t) ? F : p).test($t(t))
                );
              })(n)
                ? n
                : void 0;
            }
            (pt.prototype.clear = function () {
              (this.__data__ = rt ? rt(null) : {}), (this.size = 0);
            }),
              (pt.prototype.delete = function (t) {
                var e = this.has(t) && delete this.__data__[t];
                return (this.size -= e ? 1 : 0), e;
              }),
              (pt.prototype.get = function (t) {
                var e = this.__data__;
                if (rt) {
                  var n = e[t];
                  return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return $.call(e, t) ? e[t] : void 0;
              }),
              (pt.prototype.has = function (t) {
                var e = this.__data__;
                return rt ? void 0 !== e[t] : $.call(e, t);
              }),
              (pt.prototype.set = function (t, e) {
                var n = this.__data__;
                return (
                  (this.size += this.has(t) ? 0 : 1),
                  (n[t] = rt && void 0 === e ? "__lodash_hash_undefined__" : e),
                  this
                );
              }),
              (ft.prototype.clear = function () {
                (this.__data__ = []), (this.size = 0);
              }),
              (ft.prototype.delete = function (t) {
                var e = this.__data__,
                  n = gt(e, t);
                return !(
                  n < 0 ||
                  (n == e.length - 1 ? e.pop() : K.call(e, n, 1),
                  --this.size,
                  0)
                );
              }),
              (ft.prototype.get = function (t) {
                var e = this.__data__,
                  n = gt(e, t);
                return n < 0 ? void 0 : e[n][1];
              }),
              (ft.prototype.has = function (t) {
                return gt(this.__data__, t) > -1;
              }),
              (ft.prototype.set = function (t, e) {
                var n = this.__data__,
                  r = gt(n, t);
                return (
                  r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
                );
              }),
              (vt.prototype.clear = function () {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new pt(),
                    map: new (Y || ft)(),
                    string: new pt(),
                  });
              }),
              (vt.prototype.delete = function (t) {
                var e = Pt(this, t).delete(t);
                return (this.size -= e ? 1 : 0), e;
              }),
              (vt.prototype.get = function (t) {
                return Pt(this, t).get(t);
              }),
              (vt.prototype.has = function (t) {
                return Pt(this, t).has(t);
              }),
              (vt.prototype.set = function (t, e) {
                var n = Pt(this, t),
                  r = n.size;
                return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
              }),
              (yt.prototype.add = yt.prototype.push = function (t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this;
              }),
              (yt.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (mt.prototype.clear = function () {
                (this.__data__ = new ft()), (this.size = 0);
              }),
              (mt.prototype.delete = function (t) {
                var e = this.__data__,
                  n = e.delete(t);
                return (this.size = e.size), n;
              }),
              (mt.prototype.get = function (t) {
                return this.__data__.get(t);
              }),
              (mt.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (mt.prototype.set = function (t, e) {
                var n = this.__data__;
                if (n instanceof ft) {
                  var r = n.__data__;
                  if (!Y || r.length < 199)
                    return r.push([t, e]), (this.size = ++n.size), this;
                  n = this.__data__ = new vt(r);
                }
                return n.set(t, e), (this.size = n.size), this;
              });
            var Et = U
                ? function (t) {
                    return null == t
                      ? []
                      : ((t = Object(t)),
                        (function (t, e) {
                          for (
                            var n = -1,
                              r = null == t ? 0 : t.length,
                              i = 0,
                              o = [];
                            ++n < r;

                          ) {
                            var a = t[n];
                            e(a) && (o[i++] = a);
                          }
                          return o;
                        })(U(t), function (e) {
                          return H.call(t, e);
                        }));
                  }
                : function () {
                    return [];
                  },
              Mt = xt;
            function St(t, e) {
              var n = typeof t;
              return (
                !!(e = null == e ? 9007199254740991 : e) &&
                ("number" == n || ("symbol" != n && v.test(t))) &&
                t > -1 &&
                t % 1 == 0 &&
                t < e
              );
            }
            function Tt(t, e) {
              if (qt(t)) return !1;
              var n = typeof t;
              return (
                !(
                  "number" != n &&
                  "symbol" != n &&
                  "boolean" != n &&
                  null != t &&
                  !Ut(t)
                ) ||
                s.test(t) ||
                !a.test(t) ||
                (null != e && t in Object(e))
              );
            }
            function Dt(t) {
              return t == t && !Kt(t);
            }
            function Bt(t, e) {
              return function (n) {
                return (
                  null != n && n[t] === e && (void 0 !== e || t in Object(n))
                );
              };
            }
            ((X && "[object DataView]" != Mt(new X(new ArrayBuffer(1)))) ||
              (Y && Mt(new Y()) != r) ||
              (tt && "[object Promise]" != Mt(tt.resolve())) ||
              (et && Mt(new et()) != o) ||
              (nt && "[object WeakMap]" != Mt(new nt()))) &&
              (Mt = function (t) {
                var e = xt(t),
                  n = e == i ? t.constructor : void 0,
                  a = n ? $t(n) : "";
                if (a)
                  switch (a) {
                    case it:
                      return "[object DataView]";
                    case ot:
                      return r;
                    case at:
                      return "[object Promise]";
                    case ut:
                      return o;
                    case ct:
                      return "[object WeakMap]";
                  }
                return e;
              });
            var Lt = (function (t) {
              var e = zt(
                  function (t) {
                    var e = [];
                    return (
                      46 === t.charCodeAt(0) && e.push(""),
                      t.replace(u, function (t, n, r, i) {
                        e.push(r ? i.replace(l, "$1") : n || t);
                      }),
                      e
                    );
                  },
                  function (t) {
                    return 500 === n.size && n.clear(), t;
                  }
                ),
                n = e.cache;
              return e;
            })();
            function Vt(t) {
              if ("string" == typeof t || Ut(t)) return t;
              var e = t + "";
              return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
            }
            function $t(t) {
              if (null != t) {
                try {
                  return V.call(t);
                } catch (t) {}
                try {
                  return t + "";
                } catch (t) {}
              }
              return "";
            }
            function zt(t, e) {
              if (
                "function" != typeof t ||
                (null != e && "function" != typeof e)
              )
                throw new TypeError("Expected a function");
              var n = function () {
                var r = arguments,
                  i = e ? e.apply(this, r) : r[0],
                  o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = t.apply(this, r);
                return (n.cache = o.set(i, a) || o), a;
              };
              return (n.cache = new (zt.Cache || vt)()), n;
            }
            function Nt(t, e) {
              return t === e || (t != t && e != e);
            }
            zt.Cache = vt;
            var Ft = _t(
                (function () {
                  return arguments;
                })()
              )
                ? _t
                : function (t) {
                    return Wt(t) && $.call(t, "callee") && !H.call(t, "callee");
                  },
              qt = Array.isArray,
              Rt =
                J ||
                function () {
                  return !1;
                };
            function Gt(t) {
              if (!Kt(t)) return !1;
              var e = xt(t);
              return (
                "[object Function]" == e ||
                "[object GeneratorFunction]" == e ||
                "[object AsyncFunction]" == e ||
                "[object Proxy]" == e
              );
            }
            function Ht(t) {
              return (
                "number" == typeof t &&
                t > -1 &&
                t % 1 == 0 &&
                t <= 9007199254740991
              );
            }
            function Kt(t) {
              var e = typeof t;
              return null != t && ("object" == e || "function" == e);
            }
            function Wt(t) {
              return null != t && "object" == typeof t;
            }
            function Ut(t) {
              return (
                "symbol" == typeof t || (Wt(t) && "[object Symbol]" == xt(t))
              );
            }
            var Jt = C
              ? (function (t) {
                  return function (e) {
                    return t(e);
                  };
                })(C)
              : function (t) {
                  return Wt(t) && Ht(t.length) && !!y[xt(t)];
                };
            function Zt(t) {
              return null != (e = t) && Ht(e.length) && !Gt(e)
                ? (function (t, e) {
                    var n = qt(t),
                      r = !n && Ft(t),
                      i = !n && !r && Rt(t),
                      o = !n && !r && !i && Jt(t),
                      a = n || r || i || o,
                      s = a
                        ? (function (t, e) {
                            for (var n = -1, r = Array(t); ++n < t; )
                              r[n] = e(n);
                            return r;
                          })(t.length, String)
                        : [],
                      u = s.length;
                    for (var c in t)
                      (!e && !$.call(t, c)) ||
                        (a &&
                          ("length" == c ||
                            (i && ("offset" == c || "parent" == c)) ||
                            (o &&
                              ("buffer" == c ||
                                "byteLength" == c ||
                                "byteOffset" == c)) ||
                            St(c, u))) ||
                        s.push(c);
                    return s;
                  })(t)
                : (function (t) {
                    if (
                      ((n = (e = t) && e.constructor),
                      e !== (("function" == typeof n && n.prototype) || B))
                    )
                      return Z(t);
                    var e,
                      n,
                      r = [];
                    for (var i in Object(t))
                      $.call(t, i) && "constructor" != i && r.push(i);
                    return r;
                  })(t);
              var e;
            }
            function Qt(t) {
              return t;
            }
            t.exports = function (t, e, n) {
              var r = null == t ? 0 : t.length;
              if (!r) return -1;
              var i,
                o,
                a =
                  null == n
                    ? 0
                    : ((o =
                        (i = (function (t) {
                          return t
                            ? (t = (function (t) {
                                if ("number" == typeof t) return t;
                                if (Ut(t)) return NaN;
                                if (Kt(t)) {
                                  var e =
                                    "function" == typeof t.valueOf
                                      ? t.valueOf()
                                      : t;
                                  t = Kt(e) ? e + "" : e;
                                }
                                if ("string" != typeof t)
                                  return 0 === t ? t : +t;
                                t = t.replace(c, "");
                                var n = d.test(t);
                                return n || f.test(t)
                                  ? m(t.slice(2), n ? 2 : 8)
                                  : h.test(t)
                                  ? NaN
                                  : +t;
                              })(t)) ===
                                1 / 0 || t === -1 / 0
                              ? 17976931348623157e292 * (t < 0 ? -1 : 1)
                              : t == t
                              ? t
                              : 0
                            : 0 === t
                            ? t
                            : 0;
                        })(n)) % 1),
                      i == i ? (o ? i - o : i) : 0);
              return (
                a < 0 && (a = Q(r + a, 0)),
                (function (t, e, n, r) {
                  for (var i = t.length, o = n + -1; ++o < i; )
                    if (e(t[o], o, t)) return o;
                  return -1;
                })(
                  t,
                  (function (t) {
                    return "function" == typeof t
                      ? t
                      : null == t
                      ? Qt
                      : "object" == typeof t
                      ? qt(t)
                        ? (function (t, e) {
                            return Tt(t) && Dt(e)
                              ? Bt(Vt(t), e)
                              : function (n) {
                                  var r = (function (t, e, n) {
                                    var r = null == t ? void 0 : bt(t, e);
                                    return void 0 === r ? void 0 : r;
                                  })(n, t);
                                  return void 0 === r && r === e
                                    ? (function (t, e) {
                                        return (
                                          null != t &&
                                          (function (t, e, n) {
                                            for (
                                              var r = -1,
                                                i = (e = Ot(e, t)).length,
                                                o = !1;
                                              ++r < i;

                                            ) {
                                              var a = Vt(e[r]);
                                              if (!(o = null != t && n(t, a)))
                                                break;
                                              t = t[a];
                                            }
                                            return o || ++r != i
                                              ? o
                                              : !!(i =
                                                  null == t ? 0 : t.length) &&
                                                  Ht(i) &&
                                                  St(a, i) &&
                                                  (qt(t) || Ft(t));
                                          })(t, e, kt)
                                        );
                                      })(n, t)
                                    : wt(e, r, 3);
                                };
                          })(t[0], t[1])
                        : (function (t) {
                            var e = (function (t) {
                              for (var e = Zt(t), n = e.length; n--; ) {
                                var r = e[n],
                                  i = t[r];
                                e[n] = [r, i, Dt(i)];
                              }
                              return e;
                            })(t);
                            return 1 == e.length && e[0][2]
                              ? Bt(e[0][0], e[0][1])
                              : function (n) {
                                  return (
                                    n === t ||
                                    (function (t, e, n, r) {
                                      var i = n.length,
                                        o = i;
                                      if (null == t) return !o;
                                      for (t = Object(t); i--; ) {
                                        var a = n[i];
                                        if (
                                          a[2] ? a[1] !== t[a[0]] : !(a[0] in t)
                                        )
                                          return !1;
                                      }
                                      for (; ++i < o; ) {
                                        var s = (a = n[i])[0],
                                          u = t[s],
                                          c = a[1];
                                        if (a[2]) {
                                          if (void 0 === u && !(s in t))
                                            return !1;
                                        } else {
                                          var l,
                                            h = new mt();
                                          if (
                                            !(void 0 === l
                                              ? wt(c, u, 3, r, h)
                                              : l)
                                          )
                                            return !1;
                                        }
                                      }
                                      return !0;
                                    })(n, 0, e)
                                  );
                                };
                          })(t)
                      : Tt((e = t))
                      ? ((n = Vt(e)),
                        function (t) {
                          return null == t ? void 0 : t[n];
                        })
                      : (function (t) {
                          return function (e) {
                            return bt(e, t);
                          };
                        })(e);
                    var e, n;
                  })(e),
                  a
                )
              );
            };
          }),
          we = (function () {
            function t() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              r(this, t),
                (this.realArray = []),
                null != e && (this.realArray = e);
            }
            return (
              o(t, [
                {
                  key: "_hasOwnProperty",
                  value: function (t) {
                    return Object.prototype.hasOwnProperty.call(
                      this.realArray,
                      t
                    );
                  },
                },
                {
                  key: "_get",
                  value: function (t) {
                    return this.realArray[t];
                  },
                },
                {
                  key: "_set",
                  value: function (t, e) {
                    this.realArray[t] = e;
                  },
                },
                {
                  key: "_keys",
                  value: function () {
                    return Object.keys(this.realArray);
                  },
                },
                {
                  key: "_delete",
                  value: function (t) {
                    return delete this.realArray[t];
                  },
                },
                {
                  key: "_export",
                  value: function () {
                    return this.realArray;
                  },
                },
              ]),
              t
            );
          })();
        function Ie(t, e, n, r) {
          var i = !1;
          for (var o in e)
            Object.prototype.hasOwnProperty.call(n, o) ||
              ((i = !0), (r[o] = e[o]));
          return (t.animatedAttributeValue = r), i;
        }
        function Oe(t, e, n, r) {
          var i =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = t[r],
            a = e._get(o.id);
          a.setInitialValue(n, i);
          var s = Ie(
            a,
            a.initialValue,
            a.originalAnimatedAttributeValue,
            JSON.parse(JSON.stringify(a.animatedAttributeValue))
          );
          s && (a.lastWish(), a.onGetContext()),
            s &&
              r < t.length - 1 &&
              Oe(t, e, a.animatedAttributeValue, r + 1, !1);
        }
        var Ce = (function () {
            function t(e) {
              r(this, t),
                (this.originalArray = e),
                (this.extraArray = {}),
                (this.addedKeys = []),
                (this.removedKeys = []);
            }
            return (
              o(t, [
                {
                  key: "_hasOwnProperty",
                  value: function (t) {
                    return (
                      Object.prototype.hasOwnProperty.call(
                        this.originalArray,
                        t
                      ) ||
                      Object.prototype.hasOwnProperty.call(this.extraArray, t)
                    );
                  },
                },
                {
                  key: "_get",
                  value: function (t) {
                    return Object.prototype.hasOwnProperty.call(
                      this.extraArray,
                      t
                    )
                      ? this.extraArray[t]
                      : Object.prototype.hasOwnProperty.call(
                          this.originalArray,
                          t
                        )
                      ? ((this.extraArray[t] = u({}, this.originalArray[t])),
                        this.extraArray[t])
                      : void 0;
                  },
                },
                {
                  key: "_set",
                  value: function (t, e) {
                    (this.extraArray[t] = e),
                      Object.prototype.hasOwnProperty.call(
                        this.originalArray,
                        t
                      ) || this.addedKeys.push(t);
                    var n = this.removedKeys.indexOf(t);
                    n > -1 && this.removedKeys.splice(n, 1);
                  },
                },
                {
                  key: "_keys",
                  value: function () {
                    for (
                      var t = Object.keys(this.originalArray).concat(
                          this.addedKeys
                        ),
                        e = 0;
                      e < this.removedKeys.length;
                      e++
                    ) {
                      var n = this.removedKeys.indexOf(this.removedKeys[e]);
                      t.splice(n, 1);
                    }
                    return t;
                  },
                },
                {
                  key: "_delete",
                  value: function (t) {
                    var e = this.addedKeys.indexOf(t);
                    return e > -1
                      ? (this.addedKeys.splice(e), delete this.extraArray[t])
                      : this.removedKeys.push(t);
                  },
                },
                {
                  key: "_export",
                  value: function () {
                    for (var t in this.extraArray)
                      this.originalArray[t] = this.extraArray[t];
                    for (var e = 0; e < this.removedKeys.length; e++)
                      delete this.originalArray[this.removedKeys[e]];
                    return this.originalArray;
                  },
                },
              ]),
              t
            );
          })(),
          je = (function (t) {
            c(n, t);
            var e = f(n);
            function n() {
              return r(this, n), e.apply(this, arguments);
            }
            return (
              o(n, [
                {
                  key: "_get",
                  value: function (t) {
                    return Object.prototype.hasOwnProperty.call(
                      this.extraArray,
                      t
                    )
                      ? this.extraArray[t]
                      : Object.prototype.hasOwnProperty.call(
                          this.originalArray,
                          t
                        )
                      ? this.originalArray[t]
                      : void 0;
                  },
                },
              ]),
              n
            );
          })(Ce),
          Pe = (function (t) {
            c(n, t);
            var e = f(n);
            function n() {
              return r(this, n), e.apply(this, arguments);
            }
            return (
              o(n, [
                {
                  key: "_get",
                  value: function (t) {
                    if (
                      Object.prototype.hasOwnProperty.call(this.extraArray, t)
                    )
                      return this.extraArray[t];
                    if (
                      Object.prototype.hasOwnProperty.call(
                        this.originalArray,
                        t
                      )
                    ) {
                      this.extraArray[t] = [];
                      for (var e = 0; e < this.originalArray[t].length; e++)
                        this.extraArray[t].push({
                          id: this.originalArray[t][e].id,
                          millisecond: 1 * this.originalArray[t][e].millisecond,
                        });
                      return this.extraArray[t];
                    }
                  },
                },
              ]),
              n
            );
          })(Ce),
          Ae = (function () {
            function t() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              r(this, t),
                (this.lanes = new we({})),
                e.lanes && (this.lanes = e.lanes),
                (this.comboAttributes = {}),
                null != e.comboAttributes &&
                  (this.comboAttributes = e.comboAttributes),
                (this.runTimeInfo = e.runTimeInfo),
                (this.belongingLaneKeysByAnimationId = new we({})),
                e.belongingLaneKeysByAnimationId &&
                  (this.belongingLaneKeysByAnimationId =
                    e.belongingLaneKeysByAnimationId),
                (this.incidentsById = new we({})),
                e.incidentsById && (this.incidentsById = e.incidentsById);
            }
            return (
              o(t, [
                {
                  key: "_resize",
                  value: function (t) {
                    for (var e = this.lanes._keys(), n = 0; n < e.length; n++)
                      for (
                        var r = e[n], i = this.lanes._get(r), o = 0;
                        o < i.length;
                        o++
                      )
                        i[o].millisecond = i[o].millisecond * t;
                  },
                },
                {
                  key: "createTestLanesSanbox",
                  value: function () {
                    var e = {
                      lanes: new Pe(this.lanes._export()),
                      belongingLaneKeysByAnimationId: new Ce(
                        this.belongingLaneKeysByAnimationId._export()
                      ),
                      incidentsById: new je(this.incidentsById._export()),
                    };
                    return (
                      this.comboAttributes &&
                        (e.comboAttributes = this.comboAttributes),
                      new t(e)
                    );
                  },
                },
                {
                  key: "getLanesCopy",
                  value: function (t) {
                    for (var e = [], n = 0; n < t.length; n++)
                      e.push({
                        id: t[n].id,
                        millisecond: 1 * t[n].millisecond,
                      });
                    return e;
                  },
                },
                {
                  key: "getLaneElementsClone",
                  value: function (t) {
                    return { id: t.id, millisecond: 1 * t.millisecond };
                  },
                },
                {
                  key: "applySandboxChanges",
                  value: function (t) {
                    (this.lanes = new we(t.lanes._export())),
                      (this.belongingLaneKeysByAnimationId = new we(
                        t.belongingLaneKeysByAnimationId._export()
                      )),
                      (this.incidentsById = new we(t.incidentsById._export()));
                  },
                },
                {
                  key: "getLane",
                  value: function (t, e) {
                    return this.lanes._get(jt(t, e));
                  },
                },
                {
                  key: "laneExists",
                  value: function (t, e) {
                    var n =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2],
                      r = jt(t, e);
                    return (
                      !!this.lanes._hasOwnProperty(r) ||
                      (n && this.lanes._set(r, []), !1)
                    );
                  },
                },
                {
                  key: "getOverlappingAnims",
                  value: function (t, e, n) {
                    var r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : [],
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : null,
                      o = this,
                      a = Rt(this.lanes._get(jt(e, n)), function (e) {
                        var n = t.incident.duration;
                        return (
                          null != i && (n = i),
                          e.id !== t.incident.id &&
                            r.indexOf(e.id) < 0 &&
                            ((e.millisecond >= t.millisecond &&
                              e.millisecond < n + t.millisecond) ||
                              (e.millisecond +
                                o.incidentsById._get(e.id).duration >
                                t.millisecond &&
                                e.millisecond +
                                  o.incidentsById._get(e.id).duration <=
                                  n + t.millisecond) ||
                              (e.millisecond < t.millisecond &&
                                e.millisecond +
                                  o.incidentsById._get(e.id).duration >
                                  n + t.millisecond))
                        );
                      });
                    return a;
                  },
                },
                {
                  key: "addElementToLane",
                  value: function (t, e, n, r) {
                    var i = jt(t, e);
                    this.incidentsById._set(r.id, r);
                    var o = { millisecond: n, id: r.id };
                    this.laneExists(t, e, !0);
                    var a = this.lanes._get(i);
                    a.push(o),
                      (a = Gt(a, ["millisecond"])),
                      this.lanes._set(i, a),
                      this.belongingLaneKeysByAnimationId._hasOwnProperty(
                        r.id
                      ) || this.belongingLaneKeysByAnimationId._set(r.id, []),
                      this.belongingLaneKeysByAnimationId._get(r.id).push(i);
                    var s = _e(a, function (t) {
                      return t.id === r.id;
                    });
                    if (
                      (0 === s
                        ? a.length > 1
                          ? r.setInitialValue(
                              this.incidentsById._get(a[1].id).pureInitialValues
                            )
                          : r.setInitialValue()
                        : r.setInitialValue(
                            this.incidentsById._get(a[s - 1].id)
                              .animatedAttributeValue
                          ),
                      Object.prototype.hasOwnProperty.call(
                        this.comboAttributes,
                        e
                      ))
                    ) {
                      var u = r.initialValue;
                      Oe(a, this.incidentsById, u, s);
                    }
                    s + 1 < a.length &&
                      (this.incidentsById
                        ._get(a[s + 1].id)
                        .setInitialValue(r.animatedAttributeValue),
                      this.incidentsById._get(a[s + 1].id).gotContext &&
                        (this.incidentsById._get(a[s + 1].id).lastWish(),
                        this.incidentsById._get(a[s + 1].id).onGetContext()));
                  },
                },
                {
                  key: "updateLane",
                  value: function (t, e) {
                    for (var n = this, r = {}, i = 0; i < t.length; i++)
                      for (
                        var o = this.belongingLaneKeysByAnimationId._get(t[i]),
                          a = 0;
                        a < o.length;
                        a++
                      ) {
                        var s = o[a];
                        Object.prototype.hasOwnProperty.call(r, s) ||
                          (r[s] = {
                            animations: [],
                            lane: this.lanes._get(s),
                            laneData: wt(o[a]),
                          }),
                          r[s].animations.push(t[i]);
                      }
                    for (var u in r) {
                      for (
                        var c = r[u],
                          l = c.lane,
                          h = c.laneData,
                          d = Gt(this.getLanesCopy(l), ["millisecond"]),
                          p = Object.prototype.hasOwnProperty.call(
                            this.comboAttributes,
                            h.attribute
                          ),
                          f = 0;
                        f < l.length;
                        f++
                      )
                        c.animations.indexOf(l[f].id) >= 0 &&
                          (l[f].millisecond += e);
                      var v = Gt(l, ["millisecond"]);
                      this.lanes._set(u, v), (l = v);
                      for (
                        var y = function (t) {
                            var e = c.animations[t],
                              r = _e(d, function (t) {
                                return t.id === e;
                              }),
                              i = _e(l, function (t) {
                                return t.id === e;
                              }),
                              o = n.incidentsById._get(l[i].id);
                            if (r !== i || i > 1) {
                              if (r + 1 < l.length)
                                if (0 === r)
                                  p
                                    ? Oe(
                                        l,
                                        n.incidentsById,
                                        o.pureInitialValues,
                                        0,
                                        !0
                                      )
                                    : (n.incidentsById
                                        ._get(d[1].id)
                                        .setInitialValue(o.pureInitialValues),
                                      n.incidentsById
                                        ._get(d[1].id)
                                        .onGetContext());
                                else if (p) {
                                  var a = i > r ? r : i;
                                  Oe(
                                    l,
                                    n.incidentsById,
                                    n.incidentsById._get(d[r - 1].id)
                                      .animatedAttributeValue,
                                    a,
                                    !0
                                  );
                                } else
                                  n.incidentsById
                                    ._get(d[r + 1].id)
                                    .setInitialValue(
                                      n.incidentsById._get(d[r - 1].id)
                                        .animatedAttributeValue
                                    ),
                                    n.incidentsById
                                      ._get(d[r + 1].id)
                                      .onGetContext();
                              0 === i
                                ? p
                                  ? Oe(
                                      l,
                                      n.incidentsById,
                                      n.incidentsById._get(d[0].id)
                                        .pureInitialValues,
                                      i,
                                      !0
                                    )
                                  : (o.setInitialValue(
                                      n.incidentsById._get(d[0].id)
                                        .pureInitialValues
                                    ),
                                    o.onGetContext())
                                : p
                                ? Oe(
                                    l,
                                    n.incidentsById,
                                    n.incidentsById._get(l[i - 1].id)
                                      .animatedAttributeValue,
                                    i,
                                    !0
                                  )
                                : (o.setInitialValue(
                                    n.incidentsById._get(l[i - 1].id)
                                      .animatedAttributeValue
                                  ),
                                  o.onGetContext()),
                                i + 1 < l.length &&
                                  (p
                                    ? Oe(
                                        l,
                                        n.incidentsById,
                                        o.animatedAttributeValue,
                                        i + 1,
                                        !0
                                      )
                                    : (n.incidentsById
                                        ._get(l[i + 1].id)
                                        .setInitialValue(
                                          o.animatedAttributeValue
                                        ),
                                      n.incidentsById
                                        ._get(l[i + 1].id)
                                        .onGetContext()));
                            }
                          },
                          m = 0;
                        m < c.animations.length;
                        m++
                      )
                        y(m);
                    }
                  },
                },
                {
                  key: "deleteAnimations",
                  value: function (t) {
                    for (var e = {}, n = 0; n < t.length; n++) {
                      for (
                        var r = t[n],
                          i = this.belongingLaneKeysByAnimationId._get(r),
                          o = 0;
                        o < i.length;
                        o++
                      ) {
                        for (
                          var a = this.lanes._get(i[o]), s = -1, c = 0;
                          c < a.length;
                          c++
                        )
                          if (a[c].id === r) {
                            s = c;
                            break;
                          }
                        for (
                          var l = u({}, a[s]),
                            h = this.incidentsById._get(l.id),
                            d = wt(i[o]),
                            p = [],
                            f = 0;
                          f < a.length;
                          f++
                        )
                          a[f].id !== r && p.push(a[f]);
                        this.lanes._set(i[o], p),
                          0 === (a = this.lanes._get(i[o])).length
                            ? (h.onProgress(0, 0),
                              this.lanes._delete(i[o]),
                              Object.prototype.hasOwnProperty.call(e, i[o]) &&
                                delete e[i[o]])
                            : ((e[i[o]] = wt(i[o])),
                              s < a.length &&
                                !1 !==
                                  this.incidentsById._get(l.id)
                                    .pureInitialValues &&
                                (Object.prototype.hasOwnProperty.call(
                                  this.comboAttributes,
                                  d.attribute
                                )
                                  ? Oe(
                                      a,
                                      this.incidentsById,
                                      this.incidentsById._get(l.id)
                                        .pureInitialValues,
                                      s,
                                      !0
                                    )
                                  : (this.incidentsById
                                      ._get(a[s].id)
                                      .setInitialValue(
                                        this.incidentsById._get(l.id)
                                          .pureInitialValues
                                      ),
                                    this.incidentsById
                                      ._get(a[s].id)
                                      .onGetContext())));
                      }
                      this.belongingLaneKeysByAnimationId._delete(t[n]);
                    }
                    return e;
                  },
                },
                {
                  key: "recalcScratchValues",
                  value: function (t) {
                    for (var e = this.lanes._keys(), n = 0; n < e.length; n++) {
                      var r = e[n],
                        i = this.lanes._get(r);
                      if (i.length > 0) {
                        var o = this.incidentsById._get(i[0].id),
                          a = o.getScratchValue(t),
                          s = wt(r);
                        Object.prototype.hasOwnProperty.call(
                          this.comboAttributes,
                          s.attribute
                        )
                          ? Oe(i, this.incidentsById, a, 0, !0)
                          : o.setInitialValue(a),
                          o.lastWish(),
                          o.onGetContext();
                      }
                    }
                  },
                },
              ]),
              t
            );
          })(),
          Ee = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t) {
              var i;
              return (
                r(this, n),
                ((i = e.call(this, t)).comboAttributes = {}),
                (i.fixedAttributeName = "_"),
                null != t.comboAttributes &&
                  (i.comboAttributes = t.comboAttributes),
                (i.LanesHandler = new Ae({
                  comboAttributes: i.comboAttributes,
                  runTimeInfo: i.runTimeInfo,
                })),
                i
              );
            }
            return (
              o(
                n,
                [
                  {
                    key: "setComboAttributes",
                    value: function (t) {
                      (this.comboAttributes = t),
                        (this.LanesHandler = new Ae({
                          comboAttributes: this.comboAttributes,
                        }));
                    },
                  },
                  {
                    key: "_resize",
                    value: function (t) {
                      this.LanesHandler._resize(t);
                    },
                  },
                  {
                    key: "checkAddition",
                    value: function (t) {
                      for (
                        var e = this,
                          n =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : "all-or-nothing",
                          r = this.LanesHandler.createTestLanesSanbox(),
                          i = [],
                          o = [],
                          a = function (n) {
                            var a = !1,
                              s = t[n],
                              u = s.incident,
                              c = u.mcid,
                              l = u.attribute || e.fixedAttributeName;
                            r.laneExists(c, l);
                            var h = r.getOverlappingAnims(s, c, l);
                            h.length > 0 &&
                              ((a = !0),
                              o.push({
                                type:
                                  "unauthorised, overlapping incidents on the same element",
                                meta: {
                                  element_mcid: c,
                                  attribute: l,
                                  incident: s,
                                  overlappingAnims: h,
                                },
                              })),
                              a ||
                                i.push(function () {
                                  r.addElementToLane(c, l, s.millisecond, u),
                                    u._onGetContextOnce();
                                });
                          },
                          s = 0;
                        s < t.length;
                        s++
                      )
                        a(s);
                      if (o.length > 0 && "all-or-nothing" === n)
                        return { result: !1, errors: o };
                      var u = this,
                        c = function () {
                          for (var t = 0; t < i.length; t++) i[t]();
                          u.LanesHandler.applySandboxChanges(r);
                        };
                      return { result: !0, errors: o, execute: c };
                    },
                  },
                  {
                    key: "checkEdit",
                    value: function (t, e) {
                      for (var n = [], r = 0; r < t.length; r++)
                        n.push(t[r].id);
                      for (
                        var i = this.LanesHandler.createTestLanesSanbox(),
                          o = [],
                          a = 0;
                        a < t.length;
                        a++
                      )
                        for (
                          var s = t[a].incident.id,
                            u = t[a].incident.mcid,
                            c =
                              t[a].incident.attribute ||
                              this.fixedAttributeName,
                            l = i.getLane(u, c),
                            h = 0;
                          h < l.length;
                          h++
                        )
                          if (l[h].id === s) {
                            var d = l[h],
                              p = i.getLaneElementsClone(d);
                            (p.millisecond += e),
                              (p.incident = i.incidentsById._get(p.id));
                            var f = i.getOverlappingAnims(p, u, c, n);
                            f.length > 0 &&
                              o.push({
                                type:
                                  "anauthorised, overlapping animations on the same element",
                                meta: {
                                  element_mcid: u,
                                  attribute: c,
                                  newAnimation: p,
                                  overlappingAnims: f,
                                },
                              });
                            break;
                          }
                      if (o.length > 0) return { result: !1, errors: o };
                      var v = this;
                      return {
                        result: !0,
                        execute: function () {
                          v.LanesHandler.updateLane(n, e);
                        },
                      };
                    },
                  },
                  {
                    key: "checkResizedIncidents",
                    value: function (t) {
                      for (
                        var e =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1],
                          n = [],
                          r = 0;
                        r < t.length;
                        r++
                      )
                        n.push(t[r].id);
                      for (
                        var i = this.LanesHandler.createTestLanesSanbox(),
                          o = [],
                          a = 0;
                        a < t.length;
                        a++
                      )
                        for (
                          var s = this.LanesHandler.incidentsById._get(t[a].id),
                            u = s.mcid,
                            c = s.attribute || this.fixedAttributeName,
                            l = i.getLane(u, c),
                            h = { mcid: u, attribute: c },
                            d = t[a].end - t[a].start,
                            p = 0;
                          p < l.length;
                          p++
                        )
                          if (l[p].id === t[a].id) {
                            if (!e) {
                              var f = l[p],
                                v = i.getLaneElementsClone(f);
                              (v.millisecond += t[a].startDelta),
                                (v.incident = i.incidentsById._get(v.id));
                              var y = i.getOverlappingAnims(
                                v,
                                h.mcid,
                                h.attribute,
                                n,
                                d
                              );
                              y.length > 0 &&
                                o.push({
                                  type:
                                    "anauthorised overlapping animations on the same element",
                                  meta: {
                                    element_mcid: h.mcid,
                                    attribute: h.attribute,
                                    newAnimation: v,
                                    overlappingAnims: y,
                                  },
                                });
                            }
                            break;
                          }
                      if (o.length > 0) return { result: !1, errors: o };
                      var m = this,
                        g = function () {
                          for (var e = 0; e < t.length; e++)
                            m.LanesHandler.updateLane(
                              [t[e].id],
                              t[e].startDelta
                            );
                        };
                      return { execute: g, result: !0 };
                    },
                  },
                  {
                    key: "checkDelete",
                    value: function (t) {
                      for (var e = [], n = 0; n < t.length; n++)
                        e.push(t[n].id);
                      var r = this;
                      return {
                        result: !0,
                        execute: function () {
                          r.LanesHandler.deleteAnimations(e);
                        },
                      };
                    },
                  },
                  {
                    key: "recalcScratchValues",
                    value: function (t) {
                      this.LanesHandler.recalcScratchValues(t);
                    },
                  },
                  {
                    key: "slipIntoLaneForwards",
                    value: function (t, e, n, r, i) {
                      var o =
                          arguments.length > 5 &&
                          void 0 !== arguments[5] &&
                          arguments[5],
                        a = this,
                        s = Rt(t, function (t) {
                          return (
                            (t.millisecond +
                              a.incidentsById._get(t.id).duration >=
                              n &&
                              t.millisecond +
                                a.incidentsById._get(t.id).duration <=
                                r) ||
                            (a.incidentsById._get(t.id).duration +
                              t.millisecond >=
                              r &&
                              t.millisecond <= r)
                          );
                        });
                      if (0 === s.length) {
                        if (o && 0 === n) {
                          var u = this.incidentsById._get(t[0].id);
                          u.onProgress(0, 0, i);
                        }
                        return !0;
                      }
                      var c =
                          (s = Gt(s, [
                            function (t) {
                              return t.millisecond;
                            },
                          ])).length - 1,
                        l = this.incidentsById._get(s[c].id),
                        h = s[c].millisecond;
                      if (l.duration + h <= r) l.onProgress(1, l.duration, i);
                      else {
                        var d = (r - h) / l.duration;
                        l.onProgress(d, r - h, i);
                      }
                    },
                  },
                  {
                    key: "slipToLaneBackwards",
                    value: function (t, e, n, r, i) {
                      var o = this,
                        a = Rt(t, function (t) {
                          var e =
                            o.incidentsById._get(t.id).duration + t.millisecond;
                          return (
                            (e <= r && e >= n) ||
                            (t.millisecond >= n && t.millisecond <= r) ||
                            (t.millisecond < n && e > r)
                          );
                        });
                      if (0 === a.length) return !0;
                      a = Gt(a, [
                        function (t) {
                          return t.millisecond;
                        },
                      ]);
                      var s = this.incidentsById._get(a[0].id),
                        u = a[0].millisecond;
                      if (u >= r) s.onProgress(0, 0, i);
                      else {
                        var c = (r - u) / s.duration;
                        s.onProgress(c, r - u, i);
                      }
                    },
                  },
                  {
                    key: "moveTo",
                    value: function (t, e, n) {
                      for (
                        var r =
                            arguments.length > 3 &&
                            void 0 !== arguments[3] &&
                            arguments[3],
                          i = this.lanes._keys(),
                          o = 0;
                        o < i.length;
                        o++
                      ) {
                        var a = i[o],
                          s = this.lanes._get(a),
                          u = wt(a);
                        t <= e
                          ? this.slipIntoLaneForwards(s, u, t, e, n, r)
                          : t > e && this.slipToLaneBackwards(s, u, t, e, n, r);
                      }
                    },
                  },
                  {
                    key: "lanes",
                    get: function () {
                      return this.LanesHandler.lanes;
                    },
                  },
                  {
                    key: "incidentsById",
                    get: function () {
                      return this.LanesHandler.incidentsById;
                    },
                  },
                ],
                [
                  {
                    key: "type",
                    get: function () {
                      return "attributes";
                    },
                  },
                ]
              ),
              n
            );
          })(Mt),
          Me = (function () {
            function t() {
              r(this, t), (this.customEntities = {});
            }
            return (
              o(t, [
                {
                  key: "getElementByMCID",
                  value: function (t) {
                    if (
                      Object.prototype.hasOwnProperty.call(
                        this.customEntities,
                        t
                      )
                    )
                      return this.customEntities[t];
                    if (
                      Object.prototype.hasOwnProperty.call(
                        this.elementsByMCID,
                        t
                      )
                    )
                      return this.elementsByMCID[t];
                    var e = this.context.rootElement.querySelector(
                      this.getElementSelectorByMCID(t)
                    );
                    return (this.elementsByMCID[t] = e), e;
                  },
                },
                {
                  key: "getElements",
                  value: function (t) {
                    if (null == t || "" === t) return [];
                    if ("!" === t.charAt(0)) {
                      if ("#" === (t = t.substr(1)).charAt(0))
                        return [this.customEntities[t.substr(1)]];
                      if ("." === t.charAt(0)) {
                        var e = [];
                        for (var n in this.customEntities) {
                          var r = this.customEntities[n];
                          r.classes.indexOf(t.substr(1)) > -1 && e.push(r);
                        }
                        return e;
                      }
                    }
                    return Array.from(
                      this.context.rootElement.querySelectorAll(t)
                    );
                  },
                },
                {
                  key: "getMCID",
                  value: function (t) {
                    return !0 === t.customEntity
                      ? t.id
                      : t.getAttribute("data-motorcortex2-id");
                  },
                },
                {
                  key: "setMCID",
                  value: function (t, e) {
                    t.setAttribute("data-motorcortex2-id", e);
                  },
                },
                {
                  key: "getElementSelectorByMCID",
                  value: function (t) {
                    return Object.prototype.hasOwnProperty.call(
                      this.customEntities,
                      t
                    )
                      ? "!#".concat(t)
                      : "["
                          .concat("data-motorcortex2-id", '="')
                          .concat(t, '"]');
                  },
                },
                {
                  key: "setCustomEntity",
                  value: function (t, e) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [];
                    return Object.prototype.hasOwnProperty.call(
                      this.customEntities,
                      t
                    )
                      ? (At.error(
                          "Clip "
                            .concat(
                              this.id,
                              " already has custom Entity with id: "
                            )
                            .concat(t)
                        ),
                        !1)
                      : ((this.customEntities[t] = {
                          id: t,
                          entity: e,
                          classes: n,
                          customEntity: !0,
                        }),
                        !0);
                  },
                },
              ]),
              t
            );
          })(),
          Se = (function (t) {
            c(i, t);
            var e = f(i);
            function i() {
              var t,
                o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              if ((r(this, i), (t = e.call(this)), !xt(o)))
                return (
                  At.error(
                    "ContextHandler expects an object on its constructor. ".concat(
                      n(o),
                      " passed"
                    )
                  ),
                  p(t, !1)
                );
              if (!Object.prototype.hasOwnProperty.call(o, "html"))
                return (
                  At.error(
                    "ContextHandler expects the html key on its constructor properties which is missing"
                  ),
                  p(t, !1)
                );
              if (!Object.prototype.hasOwnProperty.call(o, "css"))
                return (
                  At.error(
                    "ContextHandler expects the css key on its constructor properties which is missing"
                  ),
                  p(t, !1)
                );
              if (
                (Object.prototype.hasOwnProperty.call(o, "initParams") ||
                  At.info("ContextHandler got null initParams"),
                !Object.prototype.hasOwnProperty.call(o, "host"))
              )
                return (
                  At.error(
                    "ContextHandler expects the host key on its constructor properties which is missing"
                  ),
                  p(t, !1)
                );
              t.isDOM = !0;
              var a = o.host.ownerDocument;
              if (
                !a.getElementById(
                  "@kissmybutton/motorcortex/iframeContextHandler/css"
                )
              ) {
                var s =
                    "\n            iframe[seamless]{\n                background-color: transparent;\n                border: 0px none transparent;\n                padding: 0px;\n                overflow: hidden;\n            }\n            ",
                  u = a.createElement("style");
                (u.id = "@kissmybutton/motorcortex/iframeContextHandler/css"),
                  (u.type = "text/css");
                var c = a.head || a.getElementsByTagName("head")[0];
                u.styleSheet
                  ? (u.styleSheet.cssText = s)
                  : u.appendChild(a.createTextNode(s)),
                  c.appendChild(u);
              }
              var l = a.createElement("iframe");
              o.host.appendChild(l),
                l.setAttribute("seamless", "seamless"),
                Object.prototype.hasOwnProperty.call(o, "containerParams") &&
                  (Object.prototype.hasOwnProperty.call(
                    o.containerParams,
                    "width"
                  ) && l.setAttribute("width", o.containerParams.width),
                  Object.prototype.hasOwnProperty.call(
                    o.containerParams,
                    "height"
                  ) && l.setAttribute("height", o.containerParams.height)),
                (l.src = "");
              var h = l.contentWindow || l.contentDocument;
              h.document && (h = h.document),
                h.write(Ct(o.html, { params: o.initParams }));
              var f =
                  "\n        body{\n            padding:0;\n            margin:0;\n        }\n        ",
                v = h.createElement("style");
              (v.type = "text/css"),
                v.styleSheet
                  ? (v.styleSheet.cssText =
                      Ct(o.css, { params: o.initParams }) + f)
                  : v.appendChild(a.createTextNode(o.css + f));
              var y = h.head || h.getElementsByTagName("head")[0];
              if (
                (y.appendChild(v),
                Object.prototype.hasOwnProperty.call(o, "fonts"))
              )
                for (var m = 0; m < o.fonts.length; m++) {
                  var g = o.fonts[m];
                  if ("google-font" === g.type) {
                    var b = h.createElement("link");
                    b.setAttribute("rel", "stylesheet"),
                      b.setAttribute("href", g.src),
                      y.appendChild(b);
                  }
                }
              return (
                (t.rootElement = l),
                h.close(),
                (t.context = {
                  document: h,
                  window: l.contentWindow || l,
                  clipContainer: l,
                  rootElement: h.body,
                  unmount: function () {
                    o.host.removeChild(l);
                  },
                  getElements: t.getElements.bind(d(t)),
                  getMCID: t.getMCID.bind(d(t)),
                  setMCID: t.setMCID.bind(d(t)),
                  getElementSelectorByMCID: t.getElementSelectorByMCID.bind(
                    d(t)
                  ),
                  getElementByMCID: t.getElementByMCID.bind(d(t)),
                  setCustomEntity: t.setCustomEntity.bind(d(t)),
                }),
                (t.elementsByMCID = {}),
                t
              );
            }
            return i;
          })(Me),
          Te = (function (t) {
            c(i, t);
            var e = f(i);
            function i() {
              var t,
                o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              if ((r(this, i), (t = e.call(this)), !xt(o)))
                return (
                  At.error(
                    "ContextHandler expects an object on its constructor. ".concat(
                      n(o),
                      " passed"
                    )
                  ),
                  p(t, !1)
                );
              if (!Object.prototype.hasOwnProperty.call(o, "html"))
                return (
                  At.error(
                    "ContextHandler expects the html key on its constructor properties which is missing"
                  ),
                  p(t, !1)
                );
              if (!Object.prototype.hasOwnProperty.call(o, "css"))
                return (
                  At.error(
                    "ContextHandler expects the css key on its constructor properties which is missing"
                  ),
                  p(t, !1)
                );
              if (!Object.prototype.hasOwnProperty.call(o, "host"))
                return (
                  At.error(
                    "ContextHandler expects the host key on its constructor properties which is missing"
                  ),
                  p(t, !1)
                );
              t.isDOM = !0;
              var a = o.host.attachShadow({ mode: "closed" }),
                s = document.createElement("div");
              Object.prototype.hasOwnProperty.call(o, "containerParams") &&
                (Object.prototype.hasOwnProperty.call(
                  o.containerParams,
                  "width"
                ) && (s.style.width = o.containerParams.width),
                Object.prototype.hasOwnProperty.call(
                  o.containerParams,
                  "height"
                ) && (s.style.height = o.containerParams.height)),
                (s.innerHTML = Ct("".concat(o.html, "<slot></slot>"), {
                  params: o.initParams,
                })),
                a.appendChild(s);
              var u = document.createElement("style");
              if (
                ((u.type = "text/css"),
                u.styleSheet
                  ? (u.styleSheet.cssText = Ct(o.css, { params: o.initParams }))
                  : u.appendChild(document.createTextNode(o.css)),
                a.appendChild(u),
                (t.fontTags = []),
                Object.prototype.hasOwnProperty.call(o, "fonts"))
              )
                for (var c = 0; c < o.fonts.length; c++) {
                  var l = o.fonts[c];
                  if ("google-font" === l.type) {
                    var h = document.createElement("link");
                    h.setAttribute("rel", "stylesheet"),
                      h.setAttribute("href", l.src),
                      document.getElementsByTagName("head")[0].appendChild(h),
                      t.fontTags.push(h);
                  }
                }
              return (
                (s.style.overflow = "hidden"),
                (t.rootElement = s),
                (t.context = {
                  document: document,
                  window: window,
                  clipContainer: t.rootElement,
                  rootElement: s,
                  unmount: function () {
                    try {
                      o.host.removeChild(a);
                      for (var t = 0; t < this.fontTags.length; t++)
                        document
                          .getElementsByTagName("head")[0]
                          .removeChild(this.fontTags[t]);
                    } catch (t) {
                      At.warning(
                        "The element of the Clip to be removed seems not to exist any more"
                      );
                    }
                  },
                  getElements: t.getElements.bind(d(t)),
                  getMCID: t.getMCID.bind(d(t)),
                  setMCID: t.setMCID.bind(d(t)),
                  getElementSelectorByMCID: t.getElementSelectorByMCID.bind(
                    d(t)
                  ),
                  getElementByMCID: t.getElementByMCID.bind(d(t)),
                  setCustomEntity: t.setCustomEntity.bind(d(t)),
                }),
                (t.elementsByMCID = {}),
                t
              );
            }
            return i;
          })(Me),
          De = (function (t) {
            c(n, t);
            var e = f(n);
            function n() {
              var t,
                i,
                o,
                a =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                s =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              r(this, n),
                null === s ? ((i = {}), (o = a)) : ((i = a), (o = s)),
                (o = u({}, o, {
                  html: "" !== (t = e.call(this, i, o)).html ? t.html : o.html,
                  css: "" !== t.css ? t.css : o.css,
                  fonts: t.fonts.length > 0 ? t.fonts : o.fonts,
                }));
              var c = "closed";
              t.clipType = c;
              var l = new (document.head.createShadowRoot ||
              document.head.attachShadow
                ? Te
                : Se)(o);
              return (
                (t.ownContext = u({}, l.context, {
                  isHostedClip: t.isHostedClip,
                })),
                (t.iframe = l.iframeElement),
                (t.forceExportIncidents = !0),
                t.onAfterRender(),
                t
              );
            }
            return (
              o(n, [
                { key: "onAfterRender", value: function () {} },
                {
                  key: "exportConstructionArguments",
                  value: function () {
                    return {
                      attrs: this.attrs,
                      props: u({}, this.props, {
                        host: void 0,
                        html: this.ownContext.rootElement.innerHTML,
                      }),
                    };
                  },
                },
                {
                  key: "setCustomEntity",
                  value: function (t, e) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [];
                    return this.context.setCustomEntity(t, e, n);
                  },
                },
                {
                  key: "html",
                  get: function () {
                    return "";
                  },
                },
                {
                  key: "css",
                  get: function () {
                    return "";
                  },
                },
                {
                  key: "fonts",
                  get: function () {
                    return [];
                  },
                },
                {
                  key: "rootElement",
                  get: function () {
                    return this.ownContext.clipContainer;
                  },
                },
              ]),
              n
            );
          })(he),
          Be = (function (t) {
            c(i, t);
            var e = f(i);
            function i() {
              var t,
                o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              r(this, i), (t = e.call(this));
              var a = u({}, o);
              if (!xt(a))
                return (
                  At.error(
                    "HTMLFragmentContextHandler expects an object on its constructor. ".concat(
                      n(a),
                      " passed"
                    )
                  ),
                  p(t, !1)
                );
              Object.prototype.hasOwnProperty.call(a, "html") || (a.html = ""),
                (t.isDOM = !0);
              var s = document.createDocumentFragment(),
                c = document.createElement("div");
              return (
                Object.prototype.hasOwnProperty.call(a, "containerParams") &&
                  (Object.prototype.hasOwnProperty.call(a, "width") &&
                    (c.style.width = a.containerParams.width),
                  Object.prototype.hasOwnProperty.call(a, "height") &&
                    (c.style.height = a.containerParams.height)),
                (c.innerHTML = Ct(a.html, { params: a.initParams })),
                s.appendChild(c),
                (c.style.overflow = "hidden"),
                (t.rootElement = c),
                (t.context = {
                  document: document,
                  window: window,
                  clipContainer: t.rootElement,
                  rootElement: c,
                  unmount: function () {
                    a.host.removeChild(s);
                  },
                  getElements: t.getElements.bind(d(t)),
                  getMCID: t.getMCID.bind(d(t)),
                  setMCID: t.setMCID.bind(d(t)),
                  getElementSelectorByMCID: t.getElementSelectorByMCID.bind(
                    d(t)
                  ),
                  getElementByMCID: t.getElementByMCID.bind(d(t)),
                  setCustomEntity: t.setCustomEntity.bind(d(t)),
                  fragment: !0,
                }),
                (t.elementsByMCID = {}),
                t
              );
            }
            return i;
          })(Me),
          Le = (function (t) {
            c(n, t);
            var e = f(n);
            function n() {
              var t,
                i,
                o,
                a =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                s =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              r(this, n),
                null === s ? ((i = {}), (o = a)) : ((i = a), (o = s)),
                (t = e.call(this, i, o));
              var c = new Be(
                u({}, o, {
                  html: Object.prototype.hasOwnProperty.call(o, "html")
                    ? o.html
                    : t.html,
                  css: Object.prototype.hasOwnProperty.call(o, "css")
                    ? o.css
                    : t.css,
                  fonts: Object.prototype.hasOwnProperty.call(o, "fonts")
                    ? o.fonts
                    : t.fonts,
                })
              );
              return (
                (t.ownContext = u({}, c.context, { isHostedClip: !1 })),
                (t.iframe = c.iframeElement),
                (t.forceExportIncidents = !0),
                t.onDOMCLipInitialise(),
                t
              );
            }
            return (
              o(n, [
                {
                  key: "exportConstructionArguments",
                  value: function () {
                    return {
                      attrs: this.attrs,
                      props: u({}, this.props, {
                        html: this.ownContext.rootElement.innerHTML,
                      }),
                    };
                  },
                },
                { key: "onDOMCLipInitialise", value: function () {} },
                {
                  key: "rootElement",
                  get: function () {
                    return this.ownContext.clipContainer;
                  },
                },
              ]),
              n
            );
          })(he),
          Ve = (function () {
            function t() {
              r(this, t);
            }
            return (
              o(t, [
                {
                  key: "addIncident",
                  value: function () {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "moveIncident",
                  value: function () {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "removeIncident",
                  value: function () {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "resizeIncident",
                  value: function () {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "getIncidentsByChannel",
                  value: function () {
                    return {};
                  },
                },
                { key: "flash", value: function () {} },
                { key: "_resize", value: function () {} },
                { key: "onProgress", value: function () {} },
                {
                  key: "duration",
                  get: function () {
                    return 0;
                  },
                },
              ]),
              t
            );
          })(),
          $e = [
            "cm",
            "mm",
            "in",
            "px",
            "pt",
            "pc",
            "em",
            "ex",
            "ch",
            "rem",
            "vw",
            "vh",
            "vmin",
            "vmax",
            "%",
          ],
          ze = [
            {
              type: "string",
              optional: !0,
              default: "linear",
              enum: [
                "linear",
                "easeInQuad",
                "easeOutQuad",
                "easeInOutQuad",
                "easeInCubic",
                "easeOutCubic",
                "easeInOutCubic",
                "easeInQuart",
                "easeOutQuart",
                "easeInOutQuart",
                "easeInQuint",
                "easeOutQuint",
                "easeInOutQuint",
                "easeInSine",
                "easeOutSine",
                "easeInOutSine",
                "easeInExpo",
                "easeOutExpo",
                "easeInOutExpo",
                "easeInCirc",
                "easeOutCirc",
                "easeInOutCirc",
                "easeInElastic",
                "easeOutElastic",
                "easeInOutElastic",
                "easeInBack",
                "easeOutBack",
                "easeInOutBack",
                "easeInBounce",
                "easeOutBounce",
                "easeInOutBounce",
              ],
            },
            {
              type: "array",
              optional: !0,
              length: 4,
              items: { type: "number" },
            },
          ],
          Ne = { type: "string", empty: !1, trim: !0, optional: !0 },
          Fe = { type: "string", empty: !1, optional: !1 },
          qe = { type: "html", optional: !0 },
          Re = { type: "css", optional: !0 },
          Ge = {
            type: "array",
            optional: !0,
            items: { type: "object", props: { type: "string", src: "string" } },
          },
          He = {
            type: "array",
            items: {
              type: "object",
              strict: !0,
              props: {
                src: "string",
                id: "string",
                mcid: { type: "string", optional: !0 },
                classes: { type: "array", optional: !0, items: "string" },
                base64: { type: "boolean", optional: !0 },
              },
            },
            optional: !0,
          },
          Ke = {
            props: {
              type: "object",
              props: {
                id: Ne,
                selector: u({}, Fe, { optional: !0 }),
                easing: ze,
                duration: {
                  type: "number",
                  optional: !1,
                  integer: !0,
                  positive: !0,
                },
                startFrom: {
                  type: "number",
                  integer: !0,
                  min: 0,
                  optional: !0,
                },
                repeats: { type: "number", integer: !0, min: 1, optional: !0 },
                hiatus: { type: "number", integer: !0, min: 0, optional: !0 },
                delay: { type: "number", integer: !0, min: 0, optional: !0 },
              },
            },
          },
          We = {
            type: "object",
            optional: !0,
            props: {
              width: { type: "measurement", units: $e, optional: !0 },
              height: { type: "measurement", units: $e, optional: !0 },
            },
          },
          Ue = { type: "string", enum: ["on", "off"], optional: !0 },
          Je = {
            props: [
              {
                type: "object",
                strict: !0,
                props: {
                  id: Ne,
                  selector: u({}, Fe, { optional: !0 }),
                  easing: ze,
                  html: qe,
                  css: Re,
                  audioSources: He,
                  audio: Ue,
                  containerParams: We,
                  fonts: Ge,
                },
              },
              {
                type: "object",
                strict: !0,
                props: {
                  id: Ne,
                  host: { type: "any", optional: !1 },
                  html: qe,
                  css: Re,
                  audioSources: He,
                  audio: Ue,
                  containerParams: We,
                  fonts: Ge,
                },
              },
              {
                type: "object",
                strict: !0,
                props: {
                  root: { type: "boolean", optional: !0 },
                  id: Ne,
                  audioSources: He,
                  audio: u({}, Ue, { enum: ["on"] }),
                },
              },
            ],
          },
          Ze = { selector: u({}, Fe, { optional: !0, strict: !0 }) },
          Qe = "mc.descriptive.decisionAuthority",
          Xe = mt();
        function Ye(t) {
          t.descriptor.value = function (t) {
            if (this.attrsValidationRules) {
              var e = JSON.parse(JSON.stringify(this.attrsValidationRules));
              Object.prototype.hasOwnProperty.call(
                this.attrsValidationRules,
                "animatedAttrs"
              ) &&
                (e.initialValues = At.buildInitialValuesValidationRules(
                  e.animatedAttrs
                ));
              var n = Xe.validate(t, e);
              if (n.length > 0) return { result: !1, errors: n };
            }
            return !0 ===
              this.putMessageOnPipe("checkForClip", {}, Qe, {
                selfExecute: !0,
                direction: Tt,
              }).response
              ? this.manageEditAttrProps(t, "attrs")
              : ((this.attrs = t), { result: !0 });
          };
        }
        function tn(t) {
          t.descriptor.value = function (t) {
            var e = At.validateProps(
              { props: t },
              this.propsValidationRules,
              this.constructor
            );
            return e.result
              ? !0 ===
                this.putMessageOnPipe("checkForClip", {}, Qe, {
                  selfExecute: !0,
                  direction: Tt,
                }).response
                ? this.manageEditAttrProps(t, "props")
                : ((this.props = t), { result: !0 })
              : e;
          };
        }
        function en(t) {
          t.descriptor.value = function () {
            return null !== this.props.host && void 0 !== this.props.host
              ? [this.props.host]
              : this.hasParent &&
                this.putMessageOnPipe("checkForClip", {}, Qe, {
                  selfExecute: !0,
                  direction: Tt,
                }).response
              ? this.putMessageOnPipe(
                  "getElements",
                  { selector: this.selector() },
                  Qe,
                  { selfExecute: !1, direction: Tt }
                ).response
              : [];
          };
        }
        function nn(t) {
          t.descriptor.value = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { check: !0 };
            if (t === this.duration)
              return { result: !0, meta: { unprocessed: !0 } };
            if (t <= 0)
              return { result: !1, reason: "Size must always be > 0" };
            if (e.check && this.hasParent) {
              var n = this.putMessageOnPipe(
                "checkResize",
                { id: this.id, newSize: t, fraction: t / this.duration },
                Qe,
                { selfExecute: !1, direction: Tt }
              );
              if (!n.response.result) return n.response;
            }
            return this.setNewDuration(t), { result: !0 };
          };
        }
        function rn(t) {
          t.descriptor.value = function () {
            return null === this.inheritedSelector
              ? Object.prototype.hasOwnProperty.call(this.props, "selector")
                ? this.props.selector
                : null
              : Object.prototype.hasOwnProperty.call(this.props, "selector")
              ? "&" === this.props.selector.charAt(0)
                ? this.inheritedSelector + this.props.selector.substring(1)
                : ""
                    .concat(this.inheritedSelector, " ")
                    .concat(this.props.selector)
              : this.inheritedSelector;
          };
        }
        var on = w(
            null,
            function (t, e) {
              var i = (function (e) {
                c(i, e);
                var n = f(i);
                function i() {
                  var e,
                    o =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    a =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  r(this, i),
                    null === a
                      ? ((e = n.call(this, o)),
                        t(d(e)),
                        (e.attrs = {}),
                        (e.props = o))
                      : ((e = n.call(this, a)),
                        t(d(e)),
                        (e.attrs = o),
                        (e.props = a));
                  var s = At.validateProps(e.props, Ze, e.constructor);
                  return s.result
                    ? ((e.attrsValidationRules = {}),
                      (e.propsValidationRules = Ze),
                      (e._inheritedSelector = null),
                      (e.passiveAddition = !0),
                      e._buildTree(),
                      (e.passiveAddition = !1),
                      p(e))
                    : p(e, s);
                }
                return i;
              })(e);
              return {
                F: i,
                d: [
                  {
                    kind: "field",
                    static: !0,
                    key: "Incident",
                    value: function () {
                      return qt;
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "plugin_npm_name",
                    value: function () {
                      return "motor-cortex-js";
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "Channel",
                    value: function () {
                      return Mt;
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "ClassName",
                    value: function () {
                      return "Group";
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "isGroup",
                    value: function () {
                      return !0;
                    },
                  },
                  {
                    kind: "method",
                    decorators: [Ye],
                    key: "editAttributes",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [tn],
                    key: "editProperties",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [nn],
                    key: "resize",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [rn],
                    key: "selector",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [en],
                    key: "getElements",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "_buildTree",
                    value: function () {
                      this.buildTree();
                    },
                  },
                  {
                    kind: "method",
                    key: "_rebuildTree",
                    value: function () {
                      for (var t in this.children) {
                        var e = this.children[t];
                        !0 === e.leaf.passive && this.removeIncident(e.id);
                      }
                      (this.passiveAddition = !0),
                        this.buildTree(),
                        (this.passiveAddition = !1);
                    },
                  },
                  { kind: "method", key: "buildTree", value: function () {} },
                  {
                    kind: "method",
                    key: "manageEditAttrProps",
                    value: function (t, e) {
                      var n = this.parentNode,
                        r = n.getLeafPosition(this.id),
                        i = JSON.parse(JSON.stringify(this[e]));
                      (this[e] = t),
                        n.removeIncident(this.id),
                        this._rebuildTree();
                      var o = n.addIncident(this, r);
                      return (
                        o.result ||
                          ((this[e] = i),
                          this._rebuildTree(),
                          n.addIncident(this, r)),
                        o
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "detachFromParent",
                    value: function () {
                      y(l(i.prototype), "detachFromParent", this).call(this),
                        (this.inheritedSelector = null);
                    },
                  },
                  {
                    kind: "get",
                    key: "inheritedSelector",
                    value: function () {
                      return this._inheritedSelector;
                    },
                  },
                  {
                    kind: "set",
                    key: "inheritedSelector",
                    value: function (t) {
                      for (var e in ((this._inheritedSelector = t),
                      this.children))
                        this.children[
                          e
                        ].leaf.inheritedSelector = this.selector();
                    },
                  },
                  {
                    kind: "get",
                    key: "selectorToPassToChildren",
                    value: function () {
                      return this.selector();
                    },
                  },
                  {
                    kind: "method",
                    key: "exportDefinition",
                    value: function () {
                      var t = {
                        ClassName: this.constructor.ClassName,
                        plugin:
                          this.constructor.plugin ||
                          this.constructor.plugin_npm_name,
                        plugin_npm_name: this.constructor.plugin_npm_name,
                        attrs: this.attrs,
                        props: this.props,
                        incidents: {},
                        duration: this.duration,
                      };
                      for (var e in this.children) {
                        var n = this.children[e];
                        !0 !== n.leaf.passive &&
                          (t.incidents[e] = {
                            id: n.id,
                            position: n.position,
                            leaf: n.leaf.exportDefinition(),
                          });
                      }
                      return t;
                    },
                  },
                  {
                    kind: "method",
                    key: "exportLiveDefinition",
                    value: function () {
                      var t = {
                        Class: this.constructor,
                        attrs: JSON.parse(JSON.stringify(this.attrs)),
                        props: JSON.parse(JSON.stringify(this.props)),
                        incidents: {},
                      };
                      for (var e in this.children) {
                        var n = this.children[e];
                        !0 !== n.leaf.passive &&
                          (t.incidents[e] = {
                            id: n.id,
                            position: n.position,
                            leaf: n.leaf.exportLiveDefinition(),
                          });
                      }
                      return t;
                    },
                  },
                  {
                    kind: "method",
                    key: "addIncident",
                    value: function (t, e) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : { check: !0 };
                      if (
                        ((t.inheritedSelector = this.selectorToPassToChildren),
                        !0 === n.check)
                      ) {
                        var r = y(l(i.prototype), "checkAddition", this).call(
                          this,
                          t,
                          e
                        );
                        if (!r.result) return (t.inheritedSelector = null), r;
                        var o = this.putMessageOnPipe("checkForClip", {}, Qe, {
                          selfExecute: !0,
                          direction: Tt,
                        });
                        if (!0 === o.response) {
                          var a = t.putMessageOnPipe(
                            "checkForInvalidSelectors",
                            {},
                            null,
                            { selfExecute: !0, direction: Dt }
                          );
                          if (a.length > 0) {
                            for (var s = [], u = 0; u < a.length; u++)
                              s.push(a[u].response);
                            return { result: !1, errors: s };
                          }
                        }
                        var c = this.putMessageOnPipe(
                          "checkAddition",
                          {
                            incident: t,
                            millisecond: e,
                            parentGroupId: this.id,
                          },
                          Qe,
                          { selfExecute: !0, direction: Tt }
                        );
                        if (!c.response.result)
                          return (t.inheritedSelector = null), c.response;
                      }
                      !0 === this.passiveAddition && (t.passive = !0);
                      var h = this.addChild(t, e);
                      return h.result || (t.inheritedSelector = null), h;
                    },
                  },
                  {
                    kind: "method",
                    key: "moveIncident",
                    value: function (t, e) {
                      var r = t;
                      "object" === n(t) && (r = t.id);
                      var o = y(l(i.prototype), "checkEditPosition", this).call(
                        this,
                        r,
                        e
                      );
                      if (!o.result) return o;
                      var a = e - this.getLeafPosition(r);
                      if (0 === a) return { result: !0 };
                      var s = this.putMessageOnPipe(
                        "checkMove",
                        {
                          id: r,
                          millisecond: e,
                          positionDelta: a,
                          parentGroupId: this.id,
                        },
                        Qe,
                        { selfExecute: !0, direction: Tt }
                      );
                      return s.response.result
                        ? this.editPosition(r, e)
                        : s.response;
                    },
                  },
                  {
                    kind: "method",
                    key: "removeIncident",
                    value: function (t) {
                      var e = t;
                      "object" === n(t) && (e = t.id);
                      var r = y(l(i.prototype), "checkRemoveChild", this).call(
                        this,
                        e
                      );
                      if (!r.result) return r;
                      var o = this.putMessageOnPipe(
                        "checkDeletion",
                        { id: e, parentGroupId: this.id },
                        Qe,
                        { selfExecute: !0, direction: Tt }
                      );
                      return o.response.result
                        ? this.removeChild(e)
                        : o.response;
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckForClip",
                    value: function (t, e) {
                      return !!this.hasParent && this.bypass();
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckAddition",
                    value: function (t, e) {
                      return this.hasParent ? this.bypass() : { result: !0 };
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckMove",
                    value: function (t, e) {
                      return this.hasParent ? this.bypass() : { result: !0 };
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckDeletion",
                    value: function (t, e) {
                      return this.hasParent ? this.bypass() : { result: !0 };
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckResize",
                    value: function (t, e) {
                      return this.hasParent ? this.bypass() : { result: !0 };
                    },
                  },
                ],
              };
            },
            $t
          ),
          an = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t, i) {
              var o;
              return (
                r(this, n),
                ((o = e.call(this, t, i)).runTimeInfo = {
                  currentMillisecond: 0,
                  state: "idle",
                }),
                (o.listeners = {}),
                (o.previousTimeStamp = -1),
                (o.speed = 1),
                o
              );
            }
            return (
              o(n, [
                {
                  key: "_setState",
                  value: function (t) {
                    if (t !== this.runTimeInfo.state)
                      for (var e in ((this.runTimeInfo.state = t),
                      this.putMessageOnPipe("setState", t, "Clips", {
                        selfExecute: !1,
                        direction: Dt,
                      }),
                      this.listeners))
                        this.listeners[e].funct(
                          this.runTimeInfo.currentMillisecond,
                          t
                        );
                  },
                },
                {
                  key: "handleSetState",
                  value: function (t, e) {
                    this._setState(e);
                  },
                },
                {
                  key: "play",
                  value: function () {
                    var t = this,
                      e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                    if (
                      "idle" === this.runTimeInfo.state ||
                      "paused" === this.runTimeInfo.state ||
                      "armed" === this.runTimeInfo.state ||
                      "transitional" === this.runTimeInfo.state ||
                      "blocked" === this.runTimeInfo.state
                    ) {
                      if ("paused" === this.runTimeInfo.state) {
                        var n = new Date().getTime() - this.pauseMoment;
                        this.previousTimeStamp += n;
                      }
                      this._setState("playing"),
                        this.onPlay(),
                        e ||
                          window.requestAnimationFrame(function (e) {
                            t.step(e);
                          });
                    }
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    "playing" === this.runTimeInfo.state &&
                      (this._setState("paused"),
                      (this.pauseMoment = new Date().getTime()),
                      this.onWait());
                  },
                },
                {
                  key: "arm",
                  value: function () {
                    "transitional" === this.runTimeInfo.state &&
                      this._setState("armed");
                  },
                },
                {
                  key: "complete",
                  value: function () {
                    this._setState("idle"), (this.previousTimeStamp = -1);
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    this._setState("transitional"),
                      (this.previousTimeStamp = -1);
                  },
                },
                {
                  key: "block",
                  value: function () {
                    this._setState("blocked"), (this.previousTimeStamp = -1);
                  },
                },
                { key: "onPlay", value: function () {} },
                { key: "onWait", value: function () {} },
                {
                  key: "playableProgress",
                  value: function (t, e) {
                    if (this.isTheRootClip) {
                      for (var n in this.listeners) {
                        var r = this.listeners[n];
                        !0 !== r.onlyOnStateChange &&
                          (Math.abs(
                            e +
                              r.cavaDelta -
                              this.runTimeInfo.currentMillisecond
                          ) > r.threshold
                            ? (r.funct(
                                _t(e, r.roundTo),
                                this.runTimeInfo.state
                              ),
                              (r.cavaDelta = 0))
                            : (r.cavaDelta += Math.abs(
                                e - this.runTimeInfo.currentMillisecond
                              )));
                      }
                      return (
                        this.onProgress(t, e),
                        (this.runTimeInfo.currentMillisecond = e),
                        !0
                      );
                    }
                    return !1;
                  },
                },
                {
                  key: "step",
                  value: function (t) {
                    var e =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    if ("playing" === this.runTimeInfo.state) {
                      var n = this;
                      -1 === this.previousTimeStamp &&
                        (this.previousTimeStamp = t);
                      var r = {
                        milliseconds: Math.round(
                          this.runTimeInfo.currentMillisecond +
                            (t - this.previousTimeStamp) * this.speed
                        ),
                        fraction:
                          (this.runTimeInfo.currentMillisecond +
                            (t - this.previousTimeStamp) * this.speed) /
                          this.duration,
                      };
                      if (r.fraction >= 1)
                        return (
                          this.playableProgress(1, this.duration),
                          void this.complete()
                        );
                      if (r.fraction < 0)
                        return (
                          this.playableProgress(0, 0), void this.complete()
                        );
                      this.playableProgress(r.fraction, r.milliseconds),
                        (this.previousTimeStamp = t),
                        e || window.requestAnimationFrame(n.step.bind(n));
                    }
                  },
                },
                {
                  key: "subscribe",
                  value: function (t, e, n, r) {
                    var i =
                      arguments.length > 4 &&
                      void 0 !== arguments[4] &&
                      arguments[4];
                    n || (n = 0),
                      r || (r = 1),
                      (this.listeners[t] = {
                        funct: e,
                        threshold: n,
                        roundTo: r,
                        cavaDelta: 0,
                        onlyOnStateChange: i,
                      });
                  },
                },
                {
                  key: "unsubscribe",
                  value: function (t) {
                    Object.prototype.hasOwnProperty.call(this.listeners, t) &&
                      delete this.listeners[t];
                  },
                },
                {
                  key: "subscribeToDurationChange",
                  value: function (t) {
                    return (
                      !!this.isTheRootClip &&
                      (this.realClip.subscribeToDurationChange(t), !0)
                    );
                  },
                },
                {
                  key: "executionSpeed",
                  set: function (t) {
                    if (!this.isTheRootClip) return !1;
                    this.speed = parseFloat(t);
                  },
                },
              ]),
              n
            );
          })(on),
          sn = (function () {
            function t(e) {
              r(this, t),
                (this.runTimeInfo = {
                  currentMillisecond: 0,
                  state: "transitional",
                }),
                (this.id = Ot()),
                (this.realClip = e.descriptiveIncident.realClip);
              var n = e.descriptiveIncident.realClip.exportConstructionArguments(),
                i = u({}, n.props, {
                  selector: void 0,
                  host: e.host,
                  id: this.id,
                });
              (this.ownClip = new e.descriptiveIncident.constructor.Incident(
                n.attrs,
                i
              )),
                e.descriptiveIncident.realClip.addContext(
                  {
                    clipId: this.id,
                    context: this.ownClip.ownContext,
                    synchronize: e.synchronize,
                    runTimeInfo: this.runTimeInfo,
                  },
                  !0
                );
            }
            return (
              o(t, [
                {
                  key: "onProgress",
                  value: function (t, e) {
                    for (var n in this.realClip.instantiatedChannels)
                      this.realClip.instantiatedChannels[n].moveTo(
                        this.runTimeInfo.currentMillisecond,
                        e,
                        this.id,
                        !0
                      );
                    this.runTimeInfo.currentMillisecond = e;
                  },
                },
              ]),
              t
            );
          })(),
          un = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t) {
              var i,
                o,
                a,
                s =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              r(this, n), null === s ? ((o = {}), (a = t)) : ((o = t), (a = s));
              var c = (i = e.call(this, o, a))._validateProps();
              if (!c.result) return p(i, c);
              (i.attrsValidationRules = {}),
                (i.propsValidationRules = Je),
                (i.isTheRootClip = !1);
              var l = {
                id: i.id,
                attrs: o,
                props: u({}, a, {
                  html: Object.prototype.hasOwnProperty.call(a, "html")
                    ? a.html
                    : i.html,
                  css: Object.prototype.hasOwnProperty.call(a, "css")
                    ? a.css
                    : i.css,
                  fonts: Object.prototype.hasOwnProperty.call(a, "fonts")
                    ? a.fonts
                    : i.fonts,
                  runTimeInfo: i.runTimeInfo,
                  subscribe: i.subscribe.bind(d(i)),
                }),
                plugin_npm_name: i.constructor.plugin_npm_name,
                Channel: i.constructor.Channel,
                DescriptiveIncident: d(i),
              };
              if (
                ((i.audio = "on"),
                Object.prototype.hasOwnProperty.call(i.constructor, "audio") &&
                  (i.audio = i.constructor.audio),
                Object.prototype.hasOwnProperty.call(a, "audio") &&
                  (i.audio = a.audio),
                Object.prototype.hasOwnProperty.call(a, "selector") &&
                  void 0 !== a.selector &&
                  !0 !== i.constructor.customClip)
              )
                l.Incident = Le;
              else if (
                Object.prototype.hasOwnProperty.call(a, "selector") &&
                void 0 !== a.selector &&
                !0 === i.constructor.customClip
              ) {
                delete l.props.selector;
                var h = new Le({ html: '<div id="clip-container"></div>' });
                (l.props.host = h.rootElement),
                  (l.Incident = i.constructor.Incident);
              } else
                "only" === i.audio && !0 !== i.props.root
                  ? (i.isTheRootClip = !1)
                  : ((i.isTheRootClip = !0),
                    (i.blockingWaitings = {}),
                    (l.Incident = i.constructor.Incident));
              if (
                ("on" === i.audio || "off" === i.audio
                  ? (i.realClip = re(l))
                  : (i.realClip = new Ve()),
                "on" === i.audio || "only" === i.audio)
              ) {
                var f = {
                  id: i.id,
                  attrs: {},
                  props: {
                    audioSources: Object.prototype.hasOwnProperty.call(
                      a,
                      "audioSources"
                    )
                      ? a.audioSources
                      : i.audioSources,
                    runTimeInfo: i.runTimeInfo,
                    subscribe: i.subscribe.bind(d(i)),
                  },
                  plugin_npm_name: i.constructor.plugin_npm_name,
                  Channel: i.constructor.Channel,
                  Incident: me,
                  DescriptiveIncident: d(i),
                };
                i.audioClip = re(f);
              } else (i.audio = "off"), (i.audioClip = new Ve());
              return (
                (i.passiveAddition = !0),
                i._buildTree(),
                (i.passiveAddition = !1),
                i
              );
            }
            return (
              o(n, [
                {
                  key: "_validateProps",
                  value: function () {
                    return At.validateProps(
                      { props: this.props },
                      Je,
                      this.constructor
                    );
                  },
                },
                {
                  key: "_buildTree",
                  value: function () {
                    void 0 !== this.realClip && this.buildTree();
                  },
                },
                {
                  key: "resize",
                  value: function (t) {
                    return (
                      this.realClip._resize(t / this.duration),
                      this.audioClip._resize(t / this.duration),
                      (this.duration = t),
                      this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                        selfExecute: !1,
                        direction: Tt,
                      }),
                      this.putMessageOnPipe("flash", {}, "RootClip", {
                        selfExecute: !0,
                        direction: Tt,
                      }),
                      { result: !0 }
                    );
                  },
                },
                {
                  key: "handleCheckForClip",
                  value: function (t, e) {
                    return !0;
                  },
                },
                {
                  key: "handleGetElements",
                  value: function (t, e) {
                    return this.realClip.getElements(e.selector);
                  },
                },
                {
                  key: "handleCheckAddition",
                  value: function (t, e) {
                    var n = this.realClip.addIncident(e),
                      r = this.audioClip.addIncident(e);
                    return !0 === n.result && !0 === r.result
                      ? (n.execute(),
                        r.execute(),
                        this.putMessageOnPipe("flash", {}, "RootClip", {
                          selfExecute: !0,
                          direction: Tt,
                        }),
                        { result: !0 })
                      : n;
                  },
                },
                {
                  key: "handleCheckMove",
                  value: function (t, e) {
                    var n = this.realClip.moveIncident(e),
                      r = this.audioClip.moveIncident(e);
                    return !0 === n.result && !0 === r.result
                      ? (n.execute(),
                        r.execute(),
                        this.putMessageOnPipe("flash", {}, "RootClip", {
                          selfExecute: !0,
                          direction: Tt,
                        }),
                        { result: !0 })
                      : n;
                  },
                },
                {
                  key: "handleCheckDeletion",
                  value: function (t, e) {
                    var n = this.realClip.removeIncident(e),
                      r = this.audioClip.removeIncident(e);
                    return !0 === n.result && !0 === r.result
                      ? (n.execute(),
                        r.execute(),
                        this.putMessageOnPipe("flash", {}, "RootClip", {
                          selfExecute: !0,
                          direction: Tt,
                        }),
                        { result: !0 })
                      : n;
                  },
                },
                {
                  key: "handleCheckResize",
                  value: function (t, e) {
                    var n = this.realClip.resizeIncident(e),
                      r = this.audioClip.resizeIncident(e);
                    return !0 === n.result && !0 === r.result
                      ? (n.execute(),
                        r.execute(),
                        this.putMessageOnPipe("flash", {}, "RootClip", {
                          selfExecute: !0,
                          direction: Tt,
                        }),
                        { result: !0 })
                      : n;
                  },
                },
                {
                  key: "handleFlash",
                  value: function (t, e) {
                    if (!this.isTheRootClip) return this.bypass();
                    this.flash();
                  },
                },
                {
                  key: "handleSetBlock",
                  value: function (t, e) {
                    if (!this.isTheRootClip) return this.bypass();
                    "transitional" !== this.runTimeInfo.state &&
                      ("blocked" !== this.runTimeInfo.state &&
                        (this.statusBeforeBlock = this.runTimeInfo.state),
                      (this.blockingWaitings[e.id] = e),
                      this.block());
                  },
                },
                {
                  key: "handleUnBlock",
                  value: function (t, e) {
                    if (!this.isTheRootClip) return this.bypass();
                    Object.prototype.hasOwnProperty.call(
                      this.blockingWaitings,
                      e.id
                    ) &&
                      (delete this.blockingWaitings[e.id],
                      0 === Object.keys(this.blockingWaitings).length &&
                        ("playing" === this.statusBeforeBlock
                          ? ((this.previousTimeStamp = -1), this.play())
                          : this.arm()));
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    y(l(n.prototype), "stop", this).call(this),
                      (this.blockingWaitings = {});
                  },
                },
                {
                  key: "onProgress",
                  value: function (t, e) {
                    this.realClip.onProgress(t, e),
                      this.audioClip.onProgress(t, e);
                  },
                },
                {
                  key: "paste",
                  value: function (t) {
                    return this.isTheRootClip
                      ? new sn({ host: t, descriptiveIncident: this })
                      : null;
                  },
                },
                {
                  key: "flash",
                  value: function () {
                    this.realClip.flash();
                  },
                },
                {
                  key: "setVolume",
                  value: function (t) {
                    return t < 0 || t > 1
                      ? {
                          result: !1,
                          errors: [{ type: "invalid volume number" }],
                        }
                      : "off" === this.audio
                      ? {
                          result: !1,
                          errors: [
                            {
                              type: "can not set volume of Clip with audio off",
                            },
                          ],
                        }
                      : (this.audioClip.setVolume(t), { result: !0 });
                  },
                },
                {
                  key: "selectorToPassToChildren",
                  get: function () {
                    return null;
                  },
                },
                {
                  key: "inheritedSelector",
                  get: function () {
                    return this._inheritedSelector;
                  },
                  set: function (t) {
                    this._inheritedSelector = t;
                  },
                },
                {
                  key: "html",
                  get: function () {
                    return "";
                  },
                },
                {
                  key: "css",
                  get: function () {
                    return "";
                  },
                },
                {
                  key: "fonts",
                  get: function () {
                    return [];
                  },
                },
                {
                  key: "audioSources",
                  get: function () {
                    return [];
                  },
                },
              ]),
              n
            );
          })(an);
        a(un, "isClip", !0),
          a(un, "Incident", De),
          a(un, "plugin_npm_name", "@kissmybutton/self-contained-incidents"),
          a(un, "Channel", Ht),
          a(un, "ClassName", "Clip");
        var cn = (function (t) {
            c(n, t);
            var e = f(n);
            function n(t) {
              var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              r(this, n);
              var o = { audio: "only", audioSources: t };
              return null !== i && (o.id = i), e.call(this, o);
            }
            return n;
          })(un),
          ln = w(
            null,
            function (t, e) {
              var n = (function (e) {
                c(i, e);
                var n = f(i);
                function i(e, o) {
                  var a;
                  r(this, i),
                    void 0 === o && ((o = e), (e = {})),
                    (a = n.call(this, o)),
                    t(d(a));
                  var s = At.validateProps({ props: o }, Ke, a.constructor);
                  return s.result
                    ? ((a.inheritedSelector = null),
                      (a.attrs = e),
                      Object.prototype.hasOwnProperty.call(o, "duration") ||
                        (o.duration = 0),
                      (a.props = o),
                      (a.attrsValidationRules = {}),
                      (a.propsValidationRules = Ke),
                      (a.passive = !1),
                      a)
                    : p(a, s);
                }
                return i;
              })(e);
              return {
                F: n,
                d: [
                  {
                    kind: "field",
                    static: !0,
                    key: "Incident",
                    value: function () {
                      return ee;
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "plugin_npm_name",
                    value: function () {
                      return "motor-cortex-js-attribute";
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "Channel",
                    value: function () {
                      return Ee;
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "ClassName",
                    value: function () {
                      return "Incident";
                    },
                  },
                  {
                    kind: "method",
                    decorators: [Ye],
                    key: "editAttributes",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [tn],
                    key: "editProperties",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [nn],
                    key: "resize",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [rn],
                    key: "selector",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [en],
                    key: "getElements",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "manageEditAttrProps",
                    value: function (t, e) {
                      var n = this.parentNode,
                        r = n.getLeafPosition(this.id);
                      n.removeIncident(this.id);
                      var i = JSON.parse(JSON.stringify(this[e]));
                      this[e] = t;
                      var o = n.addIncident(this, r);
                      return (
                        o.result ||
                          (n.removeIncident(this.id),
                          (this[e] = i),
                          n.addIncident(this, r)),
                        o
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "detachFromParent",
                    value: function () {
                      y(l(n.prototype), "detachFromParent", this).call(this),
                        (this.inheritedSelector = null);
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckForInvalidSelectors",
                    value: function () {
                      var t = this.selector();
                      return null === t
                        ? {
                            id: this.id,
                            ClassName: this.constructor.ClassName,
                            plugin_npm_name: this.constructor.plugin_npm_name,
                            error: "null selector",
                          }
                        : "&" === t.charAt(0)
                        ? {
                            id: this.id,
                            ClassName: this.constructor.ClassName,
                            plugin_npm_name: this.constructor.plugin_npm_name,
                            error:
                              "relative selector with no inherited selector",
                            selector: t,
                          }
                        : this.bypass();
                    },
                  },
                  {
                    kind: "method",
                    key: "exportDefinition",
                    value: function () {
                      return {
                        ClassName: this.constructor.ClassName,
                        plugin:
                          this.constructor.plugin ||
                          this.constructor.plugin_npm_name,
                        plugin_npm_name: this.constructor.plugin_npm_name,
                        attrs: this.attrs,
                        props: this.props,
                      };
                    },
                  },
                  {
                    kind: "method",
                    key: "exportLiveDefinition",
                    value: function () {
                      return {
                        Class: this.constructor,
                        attrs: JSON.parse(JSON.stringify(this.attrs)),
                        props: JSON.parse(JSON.stringify(this.props)),
                      };
                    },
                  },
                ],
              };
            },
            Lt
          ),
          hn = (function () {
            function t(e) {
              if (
                (r(this, t),
                !Object.prototype.hasOwnProperty.call(e, "incident"))
              )
                return (
                  At.error(
                    'Journey constructor expects an Incident on its properties on the key "incident"'
                  ),
                  !1
                );
              (this.memory = e.calpuleMemory),
                (this.stations = []),
                (this.incident = e.incident),
                (this.startMillisecond =
                  1 * this.incident.runTimeInfo.currentMillisecond),
                (this.startState = "".concat(this.incident.runTimeInfo.state)),
                this.incident.stop();
            }
            return (
              o(t, [
                {
                  key: "station",
                  value: function (t) {
                    this.stations.length > 0 &&
                      this.stations[this.stations.length - 1],
                      this.stations.push(t),
                      this.incident.playableProgress(
                        t / this.incident.duration,
                        t
                      );
                  },
                },
                {
                  key: "destination",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    null != t
                      ? this.station(t)
                      : (t = this.stations[this.stations.length - 1]),
                      this.incident.playableProgress(
                        t / this.incident.duration,
                        t
                      ),
                      "playing" === this.startState ||
                      ("blocked" === this.startState &&
                        "playing" === this.incident.statusBeforeBlock)
                        ? this.incident.play()
                        : t >= this.incident.duration
                        ? this.incident.complete()
                        : this.incident.arm(),
                      this.memory.push(this.exportJourneyLog);
                  },
                },
                {
                  key: "exportJourneyLog",
                  value: function () {
                    return {
                      startMillisecond: this.startMillisecond,
                      startState: this.startState,
                      stations: this.stations,
                    };
                  },
                },
              ]),
              t
            );
          })(),
          dn = (function () {
            function t() {
              r(this, t), (this.memory = []);
            }
            return (
              o(t, [
                {
                  key: "startJourney",
                  value: function (t) {
                    return t
                      ? new hn({ incident: t, calpuleMemory: this.memory })
                      : (At.error(
                          "startJourney expects an Incident as an argument"
                        ),
                        !1);
                  },
                },
              ]),
              t
            );
          })(),
          pn = mt(),
          fn = new Pt({ logLevel: 0 });
        function vn(t) {
          if (
            (Object.prototype.hasOwnProperty.call(t, "default") &&
              (t = t.default),
            Object.prototype.hasOwnProperty.call(t, "npm_name") ||
              (t.npm_name = "plugin_".concat(new Date().getTime())),
            !(function (t) {
              Object.prototype.hasOwnProperty.call(t, "default") &&
                (t = t.default);
              var e = t.npm_name,
                r = !0;
              if (
                (Object.prototype.hasOwnProperty.call(t, "name") ||
                  fn.error(
                    "Warning on plugin ".concat(
                      e,
                      '. A plugin is always good to have its name on\n        its main.js file, under the key "name". It\'s missing from this plugin'
                    )
                  ),
                Object.prototype.hasOwnProperty.call(t, "incidents") ||
                  Object.prototype.hasOwnProperty.call(t, "Clip") ||
                  (fn.error(
                    "Error on plugin ".concat(
                      e,
                      '. A plugin must expose at least one Incident or a Clip.\n        Exposed plugin Incidents should be defined on the "incidents" key of the main.js file while Clips on the "Clip".'
                    )
                  ),
                  (r = !1)),
                Object.prototype.hasOwnProperty.call(t, "incidents") &&
                  !Array.isArray(t.incidents))
              )
                fn.error(
                  "Error on plugin ".concat(
                    e,
                    '. thePlugin exposed Incidents are defined on the "incidents" key of the main.js file in array format.\n        Please refer to the documentation'
                  )
                ),
                  (r = !1);
              else if (Object.prototype.hasOwnProperty.call(t, "incidents"))
                for (var i = 0; i < t.incidents.length; i++) {
                  var o = t.incidents[i];
                  "object" === n(o.exportable) &&
                    Object.prototype.hasOwnProperty.call(
                      o.exportable,
                      "default"
                    ) &&
                    (o.exportable = o.exportable.default),
                    o.exportable.prototype instanceof on ||
                      o.exportable.prototype instanceof un ||
                      o.exportable.prototype instanceof ee ||
                      o.exportable.prototype instanceof xe ||
                      (fn.error(
                        "Error on plugin "
                          .concat(
                            e,
                            ". Exportable Incidents by any plugin must extend one of the base classes provided by MotorCortex.\n                "
                          )
                          .concat(
                            o.exportable.constructor.name,
                            " doesn't.\n                Please refer to documentation"
                          )
                      ),
                      (r = !1)),
                    Object.prototype.hasOwnProperty.call(o, "name") ||
                      (fn.error(
                        "Error on plugin ".concat(
                          e,
                          '. Exportable Incidents by any plugin must have the "name" key which defines the name of the exported Incident.\n                Please refer to documentation'
                        )
                      ),
                      (r = !1)),
                    Object.prototype.hasOwnProperty.call(o, "propTypes") ||
                      fn.log(
                        "Warning on plugin "
                          .concat(
                            e,
                            ".\n                It's always good for plugins to define the supported propTypes of their exposed Incidents' supported properties.\n                "
                          )
                          .concat(
                            o.exportable.constructor.name,
                            " doesn't.\n                Please refer to documentation"
                          ),
                        "warning"
                      );
                }
              return r;
            })(t))
          )
            return !1;
          var e = {};
          if (Object.prototype.hasOwnProperty.call(t, "Clip")) {
            var i,
              o,
              s =
                ((o = i = (function (t) {
                  c(n, t);
                  var e = f(n);
                  function n() {
                    return r(this, n), e.apply(this, arguments);
                  }
                  return n;
                })(un)),
                a(i, "Incident", t.Clip),
                a(i, "audio", t.audio ? t.audio : "off"),
                a(i, "customClip", !0),
                o);
            e.Clip = s;
          }
          var u = Ee;
          if (
            (Object.prototype.hasOwnProperty.call(t, "compositeAttributes") &&
              (u = (function (e) {
                c(i, e);
                var n = f(i);
                function i(e) {
                  return (
                    r(this, i),
                    (e.comboAttributes = t.compositeAttributes),
                    n.call(this, e)
                  );
                }
                return i;
              })(Ee)),
            Object.prototype.hasOwnProperty.call(t, "incidents"))
          )
            for (
              var l = function (n) {
                  var i,
                    o,
                    s = t.incidents[n].exportable,
                    l = void 0;
                  if (s.prototype instanceof ee)
                    (o = i = (function (t) {
                      c(n, t);
                      var e = f(n);
                      function n() {
                        return r(this, n), e.apply(this, arguments);
                      }
                      return n;
                    })(ln)),
                      a(i, "Incident", s),
                      a(i, "plugin_npm_name", t.npm_name),
                      a(i, "plugin", t.npm_name),
                      a(i, "ClassName", t.incidents[n].name),
                      a(i, "Channel", u),
                      a(i, "audio", t.audio ? t.audio : "off"),
                      (l = o);
                  else if (s.prototype instanceof xe) {
                    var h, d;
                    (d = h = (function (t) {
                      c(n, t);
                      var e = f(n);
                      function n() {
                        return r(this, n), e.apply(this, arguments);
                      }
                      return n;
                    })(ln)),
                      a(h, "Incident", s),
                      a(h, "plugin_npm_name", "@kissmybutton/media-playback"),
                      a(h, "plugin", t.npm_name),
                      a(h, "ClassName", t.incidents[n].name),
                      a(h, "Channel", be),
                      a(h, "audio", t.audio ? t.audio : "off"),
                      (l = d);
                  } else if (s.prototype instanceof un) {
                    var p, v;
                    (v = p = (function (t) {
                      c(n, t);
                      var e = f(n);
                      function n() {
                        return r(this, n), e.apply(this, arguments);
                      }
                      return n;
                    })(s)),
                      a(p, "plugin", t.npm_name),
                      a(p, "ClassName", t.incidents[n].name),
                      a(p, "audio", t.audio ? t.audio : "on"),
                      (l = v);
                  } else if (s.prototype instanceof on) {
                    var y, m;
                    (m = y = (function (t) {
                      c(n, t);
                      var e = f(n);
                      function n() {
                        return r(this, n), e.apply(this, arguments);
                      }
                      return n;
                    })(s)),
                      a(y, "plugin", t.npm_name),
                      a(y, "ClassName", t.incidents[n].name),
                      (l = m);
                  }
                  Object.defineProperty(e, t.incidents[n].name, {
                    get: function () {
                      return function e(i, o) {
                        r(this, e);
                        var a = new l(i, o);
                        if (
                          Object.prototype.hasOwnProperty.call(
                            t.incidents[n],
                            "attributesValidationRules"
                          )
                        ) {
                          var s = JSON.parse(
                            JSON.stringify(
                              t.incidents[n].attributesValidationRules
                            )
                          );
                          Object.prototype.hasOwnProperty.call(
                            t.incidents[n].attributesValidationRules,
                            "animatedAttrs"
                          ) &&
                            (s.initialValues = fn.buildInitialValuesValidationRules(
                              s.animatedAttrs
                            ));
                          var u = pn.validate(i, s);
                          if (u.length > 0) {
                            for (
                              var c = "Error on plugin's \""
                                  .concat(t.npm_name, '" "')
                                  .concat(
                                    t.incidents[n].name,
                                    '" instantiation. Errors:'
                                  ),
                                h = 0;
                              h < u.length;
                              h++
                            )
                              c += "\n - "
                                .concat(u[h].message, ". ")
                                .concat(u[h].actual, " provided");
                            return console.error(c), { result: !1, errors: u };
                          }
                          a.attrsValidationRules =
                            t.incidents[n].attributesValidationRules;
                        } else
                          fn.warning(
                            "It's always good to provide attributesValidationRules to the exported incidents. "
                              .concat(t.npm_name, ".")
                              .concat(a.constructor.name, " doesn't provide it")
                          );
                        return a;
                      };
                    },
                  });
                },
                h = 0;
              h < t.incidents.length;
              h++
            )
              l(h);
          return e;
        }
        var yn = vn(ke),
          mn = un,
          gn = on,
          bn = yn.Clip,
          xn = yn.AudioPlayback,
          kn = {
            MonoIncident: ee,
            Group: gn,
            Clip: mn,
            AudioClip: cn,
            MediaPlayback: xe,
            ExtendableClip: he,
            DOMClip: De,
            easings: ie,
            clipFromDefinition: function t(e) {
              var n = new e.Class(e.attrs, e.props);
              if (Object.prototype.hasOwnProperty.call(e, "incidents"))
                for (var r in e.incidents) {
                  var i = e.incidents[r],
                    o = t(i.leaf);
                  n.addIncident(o, i.position);
                }
              return n;
            },
          },
          _n = {
            API: kn,
            Group: gn,
            Clip: mn,
            loadPlugin: vn,
            AudioClip: bn,
            AudioPlayback: xn,
            AudioEffect: yn.AudioEffect,
            TimeCapsule: dn,
          };
        (e.API = kn),
          (e.AudioClip = bn),
          (e.AudioPlayback = xn),
          (e.Clip = mn),
          (e.Group = gn),
          (e.TimeCapsule = dn),
          (e.default = _n),
          (e.loadPlugin = vn),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(e);
    }.call(this, n(2)));
  },
  function (t, e, n) {
    var r = n(5),
      i = n(0),
      o = i.loadPlugin(r),
      a = n(4),
      s = new i.Clip({
        id: "my-clip",
        host: document.getElementById("clip-container"),
        html:
          '<svg xmlns="http://www.w3.org/2000/svg" width="960" height="500">\n            <g transform="translate(240 10) scale(30 30)">\n                <path id="flubber" d="M1,0 L2,2 L0,2 Z"></path>\n            </g>\n        </svg>',
        css:
          "#flubber{\n        fill: #8b00ff;\n        display:block;\n    }\n    svg{\n        background: black; \n    }",
      }),
      u = new o.Flubber(
        {
          animatedAttrs: {
            d: [
              [0, 0],
              [2, 0],
              [2, 1],
              [1, 2],
              [0, 1],
            ],
          },
        },
        { selector: "#flubber", duration: 2e3 }
      ),
      c = new o.Flubber(
        {
          animatedAttrs: { d: "M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z" },
        },
        { selector: "#flubber", duration: 2e3 }
      );
    s.addIncident(u, 0),
      s.addIncident(c, 2e3),
      new a({
        clip: s,
        wheelSpeed: 5,
        mode: "chapters",
        chapters: [
          { millisecond: 2e3, name: "chapter 1" },
          { millisecond: 4e3, name: "chapter 2" },
        ],
        transitionSpeed: 2,
        swipeAxis: "horizontal",
        progressBar: { color: "pink", position: "bottom" },
      });
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    !(function (t) {
      "use strict";
      function e(t) {
        return (
          10 === t ||
          13 === t ||
          8232 === t ||
          8233 === t ||
          32 === t ||
          9 === t ||
          11 === t ||
          12 === t ||
          160 === t ||
          (t >= 5760 && It.indexOf(t) >= 0)
        );
      }
      function n(t) {
        return t >= 48 && t <= 57;
      }
      function r(t) {
        return (t >= 48 && t <= 57) || 43 === t || 45 === t || 46 === t;
      }
      function i(t) {
        (this.index = 0),
          (this.path = t),
          (this.max = t.length),
          (this.result = []),
          (this.param = 0),
          (this.err = ""),
          (this.segmentStart = 0),
          (this.data = []);
      }
      function o(t) {
        for (; t.index < t.max && e(t.path.charCodeAt(t.index)); ) t.index++;
      }
      function a(t) {
        var e,
          r = t.index,
          i = r,
          o = t.max,
          a = !1,
          s = !1,
          u = !1,
          c = !1;
        if (i >= o) t.err = "SvgPath: missed param (at pos " + i + ")";
        else if (
          ((43 !== (e = t.path.charCodeAt(i)) && 45 !== e) ||
            (e = ++i < o ? t.path.charCodeAt(i) : 0),
          n(e) || 46 === e)
        ) {
          if (46 !== e) {
            if (
              ((a = 48 === e),
              (e = ++i < o ? t.path.charCodeAt(i) : 0),
              a && i < o && e && n(e))
            )
              return void (t.err =
                "SvgPath: numbers started with `0` such as `09` are ilegal (at pos " +
                r +
                ")");
            for (; i < o && n(t.path.charCodeAt(i)); ) i++, (s = !0);
            e = i < o ? t.path.charCodeAt(i) : 0;
          }
          if (46 === e) {
            for (c = !0, i++; n(t.path.charCodeAt(i)); ) i++, (u = !0);
            e = i < o ? t.path.charCodeAt(i) : 0;
          }
          if (101 === e || 69 === e) {
            if (c && !s && !u)
              return void (t.err =
                "SvgPath: invalid float exponent (at pos " + i + ")");
            if (
              ((43 !== (e = ++i < o ? t.path.charCodeAt(i) : 0) && 45 !== e) ||
                i++,
              !(i < o && n(t.path.charCodeAt(i))))
            )
              return void (t.err =
                "SvgPath: invalid float exponent (at pos " + i + ")");
            for (; i < o && n(t.path.charCodeAt(i)); ) i++;
          }
          (t.index = i), (t.param = parseFloat(t.path.slice(r, i)) + 0);
        } else
          t.err =
            "SvgPath: param should start with 0..9 or `.` (at pos " + i + ")";
      }
      function s(t) {
        var e, n;
        n = (e = t.path[t.segmentStart]).toLowerCase();
        var r = t.data;
        if (
          ("m" === n &&
            r.length > 2 &&
            (t.result.push([e, r[0], r[1]]),
            (r = r.slice(2)),
            (n = "l"),
            (e = "m" === e ? "l" : "L")),
          "r" === n)
        )
          t.result.push([e].concat(r));
        else
          for (
            ;
            r.length >= wt[n] &&
            (t.result.push([e].concat(r.splice(0, wt[n]))), wt[n]);

          );
      }
      function u(t) {
        var e,
          n,
          i,
          u = t.max;
        if (
          ((t.segmentStart = t.index),
          (function (t) {
            switch (32 | t) {
              case 109:
              case 122:
              case 108:
              case 104:
              case 118:
              case 99:
              case 115:
              case 113:
              case 116:
              case 97:
              case 114:
                return !0;
            }
            return !1;
          })(t.path.charCodeAt(t.index)))
        )
          if (
            ((n = wt[t.path[t.index].toLowerCase()]),
            t.index++,
            o(t),
            (t.data = []),
            n)
          ) {
            for (e = !1; ; ) {
              for (i = n; i > 0; i--) {
                if ((a(t), t.err.length)) return;
                t.data.push(t.param),
                  o(t),
                  (e = !1),
                  t.index < u &&
                    44 === t.path.charCodeAt(t.index) &&
                    (t.index++, o(t), (e = !0));
              }
              if (!e) {
                if (t.index >= t.max) break;
                if (!r(t.path.charCodeAt(t.index))) break;
              }
            }
            s(t);
          } else s(t);
        else
          t.err =
            "SvgPath: bad command " +
            t.path[t.index] +
            " (at pos " +
            t.index +
            ")";
      }
      function c(t, e) {
        return [
          t[0] * e[0] + t[2] * e[1],
          t[1] * e[0] + t[3] * e[1],
          t[0] * e[2] + t[2] * e[3],
          t[1] * e[2] + t[3] * e[3],
          t[0] * e[4] + t[2] * e[5] + t[4],
          t[1] * e[4] + t[3] * e[5] + t[5],
        ];
      }
      function l() {
        if (!(this instanceof l)) return new l();
        (this.queue = []), (this.cache = null);
      }
      function h(t, e, n, r) {
        var i = t * r - e * n < 0 ? -1 : 1,
          o =
            (t * n + e * r) /
            (Math.sqrt(t * t + e * e) * Math.sqrt(t * t + e * e));
        return o > 1 && (o = 1), o < -1 && (o = -1), i * Math.acos(o);
      }
      function d(t, e, n, r, i, o, a, s, u, c) {
        var l = (c * (t - n)) / 2 + (u * (e - r)) / 2,
          d = (-u * (t - n)) / 2 + (c * (e - r)) / 2,
          p = a * a,
          f = s * s,
          v = l * l,
          y = d * d,
          m = p * f - p * y - f * v;
        m < 0 && (m = 0), (m /= p * y + f * v);
        var g = (((m = Math.sqrt(m) * (i === o ? -1 : 1)) * a) / s) * d,
          b = ((m * -s) / a) * l,
          x = c * g - u * b + (t + n) / 2,
          k = u * g + c * b + (e + r) / 2,
          _ = (l - g) / a,
          w = (d - b) / s,
          I = (-l - g) / a,
          O = (-d - b) / s,
          C = h(1, 0, _, w),
          j = h(_, w, I, O);
        return (
          0 === o && j > 0 && (j -= Et),
          1 === o && j < 0 && (j += Et),
          [x, k, C, j]
        );
      }
      function p(t, e) {
        var n = (4 / 3) * Math.tan(e / 4),
          r = Math.cos(t),
          i = Math.sin(t),
          o = Math.cos(t + e),
          a = Math.sin(t + e);
        return [r, i, r - i * n, i + r * n, o + a * n, a - o * n, o, a];
      }
      function f(t, e, n) {
        if (!(this instanceof f)) return new f(t, e, n);
        (this.rx = t), (this.ry = e), (this.ax = n);
      }
      function v(t) {
        if (!(this instanceof v)) return new v(t);
        var e = Ot(t);
        (this.segments = e.segments), (this.err = e.err), (this.__stack = []);
      }
      function y(t, e, n, r, i, o, a, s) {
        (this.a = { x: t, y: e }),
          (this.b = { x: n, y: r }),
          (this.c = { x: i, y: o }),
          (this.d = { x: a, y: s }),
          null != a && null != s
            ? ((this.getArcLength = C),
              (this.getPoint = k),
              (this.getDerivative = g))
            : ((this.getArcLength = _),
              (this.getPoint = x),
              (this.getDerivative = m)),
          this.init();
      }
      function m(t, e, n) {
        return {
          x: 2 * (1 - n) * (t[1] - t[0]) + 2 * n * (t[2] - t[1]),
          y: 2 * (1 - n) * (e[1] - e[0]) + 2 * n * (e[2] - e[1]),
        };
      }
      function g(t, e, n) {
        return x(
          [3 * (t[1] - t[0]), 3 * (t[2] - t[1]), 3 * (t[3] - t[2])],
          [3 * (e[1] - e[0]), 3 * (e[2] - e[1]), 3 * (e[3] - e[2])],
          n
        );
      }
      function b(t, e, n, r, i) {
        for (var o = 1, a = t / e, s = (t - n(r, i, a)) / e; o > 0.001; ) {
          var u = n(r, i, a + s),
            c = n(r, i, a - s),
            l = Math.abs(t - u) / e,
            h = Math.abs(t - c) / e;
          l < o ? ((o = l), (a += s)) : h < o ? ((o = h), (a -= s)) : (s /= 2);
        }
        return a;
      }
      function x(t, e, n) {
        return {
          x: (1 - n) * (1 - n) * t[0] + 2 * (1 - n) * n * t[1] + n * n * t[2],
          y: (1 - n) * (1 - n) * e[0] + 2 * (1 - n) * n * e[1] + n * n * e[2],
        };
      }
      function k(t, e, n) {
        return {
          x:
            (1 - n) * (1 - n) * (1 - n) * t[0] +
            3 * (1 - n) * (1 - n) * n * t[1] +
            3 * (1 - n) * n * n * t[2] +
            n * n * n * t[3],
          y:
            (1 - n) * (1 - n) * (1 - n) * e[0] +
            3 * (1 - n) * (1 - n) * n * e[1] +
            3 * (1 - n) * n * n * e[2] +
            n * n * n * e[3],
        };
      }
      function _(t, e, n) {
        void 0 === n && (n = 1);
        var r = t[0] - 2 * t[1] + t[2],
          i = e[0] - 2 * e[1] + e[2],
          o = 2 * t[1] - 2 * t[0],
          a = 2 * e[1] - 2 * e[0],
          s = 4 * (r * r + i * i),
          u = 4 * (r * o + i * a),
          c = o * o + a * a;
        if (0 === s)
          return (
            n * Math.sqrt(Math.pow(t[2] - t[0], 2) + Math.pow(e[2] - e[0], 2))
          );
        var l = u / (2 * s),
          h = n + l,
          d = c / s - l * l;
        return (
          (Math.sqrt(s) / 2) *
          (h * Math.sqrt(h * h + d) -
            l * Math.sqrt(l * l + d) +
            d *
              Math.log(
                Math.abs(
                  (h + Math.sqrt(h * h + d)) / (l + Math.sqrt(l * l + d))
                )
              ))
        );
      }
      function w(t, e) {
        return Ft[t][e];
      }
      function I(t, e, n) {
        var r,
          i,
          o,
          a = n.length - 1;
        if (0 === a) return 0;
        if (0 === t) {
          for (i = 0, o = 0; o <= a; o++)
            i += w(a, o) * Math.pow(1 - e, a - o) * Math.pow(e, o) * n[o];
          return i;
        }
        for (r = new Array(a), o = 0; o < a; o++) r[o] = a * (n[o + 1] - n[o]);
        return I(t - 1, e, r);
      }
      function O(t, e, n) {
        var r = I(1, n, t),
          i = I(1, n, e),
          o = r * r + i * i;
        return Math.sqrt(o);
      }
      function C(t, e, n) {
        var r, i, o, a;
        for (void 0 === n && (n = 1), r = n / 2, i = 0, o = 0; o < 20; o++)
          (a = r * zt[20][o] + r), (i += Nt[20][o] * O(t, e, a));
        return r * i;
      }
      function j(t, e, n, r) {
        var i = t * n + e * r;
        return (
          i > 1 && (i = 1),
          i < -1 && (i = -1),
          (t * r - e * n < 0 ? -1 : 1) * Math.acos(i)
        );
      }
      function P(t, e) {
        var n = (4 / 3) * Math.tan(e / 4),
          r = Math.cos(t),
          i = Math.sin(t),
          o = Math.cos(t + e),
          a = Math.sin(t + e);
        return [r, i, r - i * n, i + r * n, o + a * n, a - o * n, o, a];
      }
      function A(t, e, n, r, i, o, a, s, u) {
        var c = 0,
          l = [],
          h = [];
        Rt(t, e, n, r, i, o, a, s, u).forEach(function (t) {
          var e = new $t(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]),
            n = e.getTotalLength();
          (c += n), l.push(n), h.push(e);
        }),
          (this.length = c),
          (this.partialLengths = l),
          (this.curves = h);
      }
      function E(t, e, n, r) {
        (this.x0 = t), (this.x1 = e), (this.y0 = n), (this.y1 = r);
      }
      function M(t, e) {
        return Math.sqrt(
          (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
        );
      }
      function S(t, e, n) {
        return [t[0] + (e[0] - t[0]) * n, t[1] + (e[1] - t[1]) * n];
      }
      function T(t, e, n) {
        var r = t.map(function (t, n) {
          return (function (t, e) {
            return function (n) {
              return t.map(function (t, r) {
                return t + n * (e[r] - t);
              });
            };
          })(t, e[n]);
        });
        return function (t) {
          var e = r.map(function (e) {
            return e(t);
          });
          return n ? $(e) : e;
        };
      }
      function D(t) {
        return "number" == typeof t && isFinite(t);
      }
      function B(t) {
        return (function (t) {
          for (var e = 0; e < t.length - 2; e++) {
            var n = t[e],
              r = t[e + 1],
              i = t[e + 2];
            if (
              n[0] * (r[1] - i[1]) +
              r[0] * (i[1] - n[1]) +
              i[0] * (n[1] - r[1])
            )
              return !0;
          }
          return !1;
        })(t)
          ? kt(t)
          : [
              (t[0][0] + t[t.length - 1][0]) / 2,
              (t[0][1] + t[t.length - 1][1]) / 2,
            ];
      }
      function L(t) {
        return new Tt(t).abs();
      }
      function V(t) {
        return t
          .toString()
          .split("M")
          .map(function (t, e) {
            return (t = t.trim()), e && t ? "M" + t : t;
          })
          .filter(function (t) {
            return t;
          });
      }
      function $(t) {
        return "M" + t.join("L") + "Z";
      }
      function z(t, e) {
        var n = L(t);
        return (
          (function (t) {
            var e = t.segments || [],
              n = [];
            if (!e.length || "M" !== e[0][0]) return !1;
            for (var r = 0; r < e.length; r++) {
              var i = e[r],
                o = i[0],
                a = i[1],
                s = i[2];
              if (("M" === o && r) || "Z" === o) break;
              if ("M" === o || "L" === o) n.push([a, s]);
              else if ("H" === o) n.push([a, n[n.length - 1][1]]);
              else {
                if ("V" !== o) return !1;
                n.push([n[n.length - 1][0], a]);
              }
            }
            return !!n.length && { ring: n };
          })(n) ||
          (function (t, e) {
            var n,
              r,
              i = V(t)[0],
              o = [],
              a = 3;
            if (!i) throw new TypeError(Wt);
            (r = (function (t) {
              if ("undefined" != typeof window && window && window.document)
                try {
                  var e = window.document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                  );
                  return e.setAttributeNS(null, "d", t), e;
                } catch (t) {}
              return Kt(t);
            })(i)),
              (n = r.getTotalLength()),
              e && D(e) && e > 0 && (a = Math.max(a, Math.ceil(n / e)));
            for (var s = 0; s < a; s++) {
              var u = r.getPointAtLength((n * s) / a);
              o.push([u.x, u.y]);
            }
            return { ring: o, skipBisect: !0 };
          })(n, e)
        );
      }
      function N(t, e) {
        for (
          var n = t.length + e, r = _t(t) / e, i = 0, o = 0, a = r / 2;
          t.length < n;

        ) {
          var s = t[i],
            u = t[(i + 1) % t.length],
            c = M(s, u);
          a <= o + c
            ? (t.splice(i + 1, 0, c ? S(s, u, (a - o) / c) : s.slice(0)),
              (a += r))
            : ((o += c), i++);
        }
      }
      function F(t, e) {
        var n, r;
        if ("string" == typeof t) {
          var i = z(t, e);
          (t = i.ring), (r = i.skipBisect);
        } else if (!Array.isArray(t)) throw new TypeError(Wt);
        if (
          !(function (t) {
            return t.every(function (t) {
              return Array.isArray(t) && t.length >= 2 && D(t[0]) && D(t[1]);
            });
          })((n = t.slice(0)))
        )
          throw new TypeError(Wt);
        return (
          n.length > 1 &&
            (function (t, e) {
              return M(t, e) < 1e-9;
            })(n[0], n[n.length - 1]) &&
            n.pop(),
          xt(n) > 0 && n.reverse(),
          !r &&
            e &&
            D(e) &&
            e > 0 &&
            (function (t, e) {
              void 0 === e && (e = 1 / 0);
              for (var n = 0; n < t.length; n++)
                for (
                  var r = t[n], i = n === t.length - 1 ? t[0] : t[n + 1];
                  M(r, i) > e;

                )
                  (i = S(r, i, 0.5)), t.splice(n + 1, 0, i);
            })(n, e),
          n
        );
      }
      function q(t, e, n) {
        var r;
        return (
          N(t, (r = t.length - e.length) < 0 ? -1 * r : 0),
          N(e, r > 0 ? r : 0),
          Jt(t, e),
          T(t, e, n)
        );
      }
      function R(t, e, n) {
        n = n || 2;
        var r,
          i,
          o,
          a,
          s,
          u,
          c,
          l = e && e.length,
          h = l ? e[0] * n : t.length,
          d = G(t, 0, h, n, !0),
          p = [];
        if (!d) return p;
        if (
          (l &&
            (d = (function (t, e, n, r) {
              var i,
                o,
                a,
                s,
                u,
                c = [];
              for (i = 0, o = e.length; i < o; i++)
                (a = e[i] * r),
                  (s = i < o - 1 ? e[i + 1] * r : t.length),
                  (u = G(t, a, s, r, !1)) === u.next && (u.steiner = !0),
                  c.push(tt(u));
              for (c.sort(Q), i = 0; i < c.length; i++)
                X(c[i], n), (n = H(n, n.next));
              return n;
            })(t, e, d, n)),
          t.length > 80 * n)
        ) {
          (r = o = t[0]), (i = a = t[1]);
          for (var f = n; f < h; f += n)
            (s = t[f]) < r && (r = s),
              (u = t[f + 1]) < i && (i = u),
              s > o && (o = s),
              u > a && (a = u);
          c = Math.max(o - r, a - i);
        }
        return K(d, p, n, r, i, c), p;
      }
      function G(t, e, n, r, i) {
        var o, a;
        if (i === ht(t, e, n, r) > 0)
          for (o = e; o < n; o += r) a = ut(o, t[o], t[o + 1], a);
        else for (o = n - r; o >= e; o -= r) a = ut(o, t[o], t[o + 1], a);
        return a && it(a, a.next) && (ct(a), (a = a.next)), a;
      }
      function H(t, e) {
        if (!t) return t;
        e || (e = t);
        var n,
          r = t;
        do {
          if (
            ((n = !1),
            r.steiner || (!it(r, r.next) && 0 !== rt(r.prev, r, r.next)))
          )
            r = r.next;
          else {
            if ((ct(r), (r = e = r.prev) === r.next)) return null;
            n = !0;
          }
        } while (n || r !== e);
        return e;
      }
      function K(t, e, n, r, i, o, a) {
        if (t) {
          !a &&
            o &&
            (function (t, e, n, r) {
              var i = t;
              do {
                null === i.z && (i.z = Y(i.x, i.y, e, n, r)),
                  (i.prevZ = i.prev),
                  (i.nextZ = i.next),
                  (i = i.next);
              } while (i !== t);
              (i.prevZ.nextZ = null),
                (i.prevZ = null),
                (function (t) {
                  var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    c = 1;
                  do {
                    for (n = t, t = null, o = null, a = 0; n; ) {
                      for (
                        a++, r = n, s = 0, e = 0;
                        e < c && (s++, (r = r.nextZ));
                        e++
                      );
                      for (u = c; s > 0 || (u > 0 && r); )
                        0 === s
                          ? ((i = r), (r = r.nextZ), u--)
                          : 0 !== u && r
                          ? n.z <= r.z
                            ? ((i = n), (n = n.nextZ), s--)
                            : ((i = r), (r = r.nextZ), u--)
                          : ((i = n), (n = n.nextZ), s--),
                          o ? (o.nextZ = i) : (t = i),
                          (i.prevZ = o),
                          (o = i);
                      n = r;
                    }
                    (o.nextZ = null), (c *= 2);
                  } while (a > 1);
                })(i);
            })(t, r, i, o);
          for (var s, u, c = t; t.prev !== t.next; )
            if (((s = t.prev), (u = t.next), o ? U(t, r, i, o) : W(t)))
              e.push(s.i / n),
                e.push(t.i / n),
                e.push(u.i / n),
                ct(t),
                (t = u.next),
                (c = u.next);
            else if ((t = u) === c) {
              a
                ? 1 === a
                  ? K((t = J(t, e, n)), e, n, r, i, o, 2)
                  : 2 === a && Z(t, e, n, r, i, o)
                : K(H(t), e, n, r, i, o, 1);
              break;
            }
        }
      }
      function W(t) {
        var e = t.prev,
          n = t,
          r = t.next;
        if (rt(e, n, r) >= 0) return !1;
        for (var i = t.next.next; i !== t.prev; ) {
          if (
            et(e.x, e.y, n.x, n.y, r.x, r.y, i.x, i.y) &&
            rt(i.prev, i, i.next) >= 0
          )
            return !1;
          i = i.next;
        }
        return !0;
      }
      function U(t, e, n, r) {
        var i = t.prev,
          o = t,
          a = t.next;
        if (rt(i, o, a) >= 0) return !1;
        for (
          var s = i.x < o.x ? (i.x < a.x ? i.x : a.x) : o.x < a.x ? o.x : a.x,
            u = i.y < o.y ? (i.y < a.y ? i.y : a.y) : o.y < a.y ? o.y : a.y,
            c = i.x > o.x ? (i.x > a.x ? i.x : a.x) : o.x > a.x ? o.x : a.x,
            l = i.y > o.y ? (i.y > a.y ? i.y : a.y) : o.y > a.y ? o.y : a.y,
            h = Y(s, u, e, n, r),
            d = Y(c, l, e, n, r),
            p = t.nextZ;
          p && p.z <= d;

        ) {
          if (
            p !== t.prev &&
            p !== t.next &&
            et(i.x, i.y, o.x, o.y, a.x, a.y, p.x, p.y) &&
            rt(p.prev, p, p.next) >= 0
          )
            return !1;
          p = p.nextZ;
        }
        for (p = t.prevZ; p && p.z >= h; ) {
          if (
            p !== t.prev &&
            p !== t.next &&
            et(i.x, i.y, o.x, o.y, a.x, a.y, p.x, p.y) &&
            rt(p.prev, p, p.next) >= 0
          )
            return !1;
          p = p.prevZ;
        }
        return !0;
      }
      function J(t, e, n) {
        var r = t;
        do {
          var i = r.prev,
            o = r.next.next;
          !it(i, o) &&
            ot(i, r, r.next, o) &&
            at(i, o) &&
            at(o, i) &&
            (e.push(i.i / n),
            e.push(r.i / n),
            e.push(o.i / n),
            ct(r),
            ct(r.next),
            (r = t = o)),
            (r = r.next);
        } while (r !== t);
        return r;
      }
      function Z(t, e, n, r, i, o) {
        var a = t;
        do {
          for (var s = a.next.next; s !== a.prev; ) {
            if (a.i !== s.i && nt(a, s)) {
              var u = st(a, s);
              return (
                (a = H(a, a.next)),
                (u = H(u, u.next)),
                K(a, e, n, r, i, o),
                void K(u, e, n, r, i, o)
              );
            }
            s = s.next;
          }
          a = a.next;
        } while (a !== t);
      }
      function Q(t, e) {
        return t.x - e.x;
      }
      function X(t, e) {
        if (
          (e = (function (t, e) {
            var n,
              r = e,
              i = t.x,
              o = t.y,
              a = -1 / 0;
            do {
              if (o <= r.y && o >= r.next.y) {
                var s = r.x + ((o - r.y) * (r.next.x - r.x)) / (r.next.y - r.y);
                if (s <= i && s > a) {
                  if (((a = s), s === i)) {
                    if (o === r.y) return r;
                    if (o === r.next.y) return r.next;
                  }
                  n = r.x < r.next.x ? r : r.next;
                }
              }
              r = r.next;
            } while (r !== e);
            if (!n) return null;
            if (i === a) return n.prev;
            var u,
              c = n,
              l = n.x,
              h = n.y,
              d = 1 / 0;
            for (r = n.next; r !== c; )
              i >= r.x &&
                r.x >= l &&
                et(o < h ? i : a, o, l, h, o < h ? a : i, o, r.x, r.y) &&
                ((u = Math.abs(o - r.y) / (i - r.x)) < d ||
                  (u === d && r.x > n.x)) &&
                at(r, t) &&
                ((n = r), (d = u)),
                (r = r.next);
            return n;
          })(t, e))
        ) {
          var n = st(e, t);
          H(n, n.next);
        }
      }
      function Y(t, e, n, r, i) {
        return (
          (t =
            1431655765 &
            ((t =
              858993459 &
              ((t =
                252645135 &
                ((t = 16711935 & ((t = (32767 * (t - n)) / i) | (t << 8))) |
                  (t << 4))) |
                (t << 2))) |
              (t << 1))) |
          ((e =
            1431655765 &
            ((e =
              858993459 &
              ((e =
                252645135 &
                ((e = 16711935 & ((e = (32767 * (e - r)) / i) | (e << 8))) |
                  (e << 4))) |
                (e << 2))) |
              (e << 1))) <<
            1)
        );
      }
      function tt(t) {
        var e = t,
          n = t;
        do {
          e.x < n.x && (n = e), (e = e.next);
        } while (e !== t);
        return n;
      }
      function et(t, e, n, r, i, o, a, s) {
        return (
          (i - a) * (e - s) - (t - a) * (o - s) >= 0 &&
          (t - a) * (r - s) - (n - a) * (e - s) >= 0 &&
          (n - a) * (o - s) - (i - a) * (r - s) >= 0
        );
      }
      function nt(t, e) {
        return (
          t.next.i !== e.i &&
          t.prev.i !== e.i &&
          !(function (t, e) {
            var n = t;
            do {
              if (
                n.i !== t.i &&
                n.next.i !== t.i &&
                n.i !== e.i &&
                n.next.i !== e.i &&
                ot(n, n.next, t, e)
              )
                return !0;
              n = n.next;
            } while (n !== t);
            return !1;
          })(t, e) &&
          at(t, e) &&
          at(e, t) &&
          (function (t, e) {
            var n = t,
              r = !1,
              i = (t.x + e.x) / 2,
              o = (t.y + e.y) / 2;
            do {
              n.y > o != n.next.y > o &&
                i < ((n.next.x - n.x) * (o - n.y)) / (n.next.y - n.y) + n.x &&
                (r = !r),
                (n = n.next);
            } while (n !== t);
            return r;
          })(t, e)
        );
      }
      function rt(t, e, n) {
        return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
      }
      function it(t, e) {
        return t.x === e.x && t.y === e.y;
      }
      function ot(t, e, n, r) {
        return (
          !!((it(t, e) && it(n, r)) || (it(t, r) && it(n, e))) ||
          (rt(t, e, n) > 0 != rt(t, e, r) > 0 &&
            rt(n, r, t) > 0 != rt(n, r, e) > 0)
        );
      }
      function at(t, e) {
        return rt(t.prev, t, t.next) < 0
          ? rt(t, e, t.next) >= 0 && rt(t, t.prev, e) >= 0
          : rt(t, e, t.prev) < 0 || rt(t, t.next, e) < 0;
      }
      function st(t, e) {
        var n = new lt(t.i, t.x, t.y),
          r = new lt(e.i, e.x, e.y),
          i = t.next,
          o = e.prev;
        return (
          (t.next = e),
          (e.prev = t),
          (n.next = i),
          (i.prev = n),
          (r.next = n),
          (n.prev = r),
          (o.next = r),
          (r.prev = o),
          r
        );
      }
      function ut(t, e, n, r) {
        var i = new lt(t, e, n);
        return (
          r
            ? ((i.next = r.next), (i.prev = r), (r.next.prev = i), (r.next = i))
            : ((i.prev = i), (i.next = i)),
          i
        );
      }
      function ct(t) {
        (t.next.prev = t.prev),
          (t.prev.next = t.next),
          t.prevZ && (t.prevZ.nextZ = t.nextZ),
          t.nextZ && (t.nextZ.prevZ = t.prevZ);
      }
      function lt(t, e, n) {
        (this.i = t),
          (this.x = e),
          (this.y = n),
          (this.prev = null),
          (this.next = null),
          (this.z = null),
          (this.prevZ = null),
          (this.nextZ = null),
          (this.steiner = !1);
      }
      function ht(t, e, n, r) {
        for (var i = 0, o = e, a = n - r; o < n; o += r)
          (i += (t[a] - t[o]) * (t[o + 1] + t[a + 1])), (a = o);
        return i;
      }
      function dt(t, e) {
        var n = e.id,
          r = e.bbox,
          i = null == e.properties ? {} : e.properties,
          o = pt(t, e);
        return null == n && null == r
          ? { type: "Feature", properties: i, geometry: o }
          : null == r
          ? { type: "Feature", id: n, properties: i, geometry: o }
          : { type: "Feature", id: n, bbox: r, properties: i, geometry: o };
      }
      function pt(t, e) {
        function n(t, e) {
          e.length && e.pop();
          for (var n = u[t < 0 ? ~t : t], r = 0, i = n.length; r < i; ++r)
            e.push(s(n[r], r));
          t < 0 && Yt(e, i);
        }
        function r(t) {
          return s(t);
        }
        function i(t) {
          for (var e = [], r = 0, i = t.length; r < i; ++r) n(t[r], e);
          return e.length < 2 && e.push(e[0]), e;
        }
        function o(t) {
          for (var e = i(t); e.length < 4; ) e.push(e[0]);
          return e;
        }
        function a(t) {
          return t.map(o);
        }
        var s = Xt(t.transform),
          u = t.arcs;
        return (function t(e) {
          var n,
            o = e.type;
          switch (o) {
            case "GeometryCollection":
              return { type: o, geometries: e.geometries.map(t) };
            case "Point":
              n = r(e.coordinates);
              break;
            case "MultiPoint":
              n = e.coordinates.map(r);
              break;
            case "LineString":
              n = i(e.arcs);
              break;
            case "MultiLineString":
              n = e.arcs.map(i);
              break;
            case "Polygon":
              n = a(e.arcs);
              break;
            case "MultiPolygon":
              n = e.arcs.map(a);
              break;
            default:
              return null;
          }
          return { type: o, coordinates: n };
        })(e);
      }
      function ft(t, e) {
        function n(t) {
          t.forEach(function (e) {
            e.forEach(function (e) {
              (i[(e = e < 0 ? ~e : e)] || (i[e] = [])).push(t);
            });
          }),
            o.push(t);
        }
        function r(e) {
          return (function (t) {
            for (var e, n = -1, r = t.length, i = t[r - 1], o = 0; ++n < r; )
              (e = i), (i = t[n]), (o += e[0] * i[1] - e[1] * i[0]);
            return Math.abs(o);
          })(pt(t, { type: "Polygon", arcs: [e] }).coordinates[0]);
        }
        var i = {},
          o = [],
          a = [];
        return (
          e.forEach(function t(e) {
            switch (e.type) {
              case "GeometryCollection":
                e.geometries.forEach(t);
                break;
              case "Polygon":
                n(e.arcs);
                break;
              case "MultiPolygon":
                e.arcs.forEach(n);
            }
          }),
          o.forEach(function (t) {
            if (!t._) {
              var e = [],
                n = [t];
              for (t._ = 1, a.push(e); (t = n.pop()); )
                e.push(t),
                  t.forEach(function (t) {
                    t.forEach(function (t) {
                      i[t < 0 ? ~t : t].forEach(function (t) {
                        t._ || ((t._ = 1), n.push(t));
                      });
                    });
                  });
            }
          }),
          o.forEach(function (t) {
            delete t._;
          }),
          {
            type: "MultiPolygon",
            arcs: a.map(function (e) {
              var n,
                o = [];
              if (
                (e.forEach(function (t) {
                  t.forEach(function (t) {
                    t.forEach(function (t) {
                      i[t < 0 ? ~t : t].length < 2 && o.push(t);
                    });
                  });
                }),
                (n = (o = ee(t, o)).length) > 1)
              )
                for (var a, s, u = 1, c = r(o[0]); u < n; ++u)
                  (a = r(o[u])) > c &&
                    ((s = o[0]), (o[0] = o[u]), (o[u] = s), (c = a));
              return o;
            }),
          }
        );
      }
      function vt(t, e, n) {
        void 0 === n && (n = {});
        var r = n.maxSegmentLength;
        void 0 === r && (r = 10);
        var i = n.string;
        void 0 === i && (i = !0);
        var o = n.single;
        void 0 === o && (o = !1);
        var a = F(t, r);
        a.length < e.length + 2 && N(a, e.length + 2 - a.length);
        var s,
          u = ae(a, e.length),
          c = e.map(function (t) {
            return F(t, r);
          }),
          l = "string" == typeof t && t;
        return (
          (o &&
            !e.every(function (t) {
              return "string" == typeof t;
            })) ||
            (s = e.slice(0)),
          yt(u, c, { match: !0, string: i, single: o, t0: l, t1: s })
        );
      }
      function yt(t, e, n) {
        void 0 === n && (n = {});
        var r = n.string,
          i = n.single,
          o = n.t0,
          a = n.t1,
          s = n.match,
          u = s
            ? se(t, e)
            : t.map(function (t, e) {
                return e;
              }),
          c = u.map(function (n, i) {
            return q(t[n], e[i], r);
          });
        if (
          (s &&
            Array.isArray(o) &&
            (o = u.map(function (t) {
              return o[t];
            })),
          i &&
            r &&
            (Array.isArray(o) && (o = o.join(" ")),
            Array.isArray(a) && (a = a.join(" "))),
          i)
        ) {
          var l = r
            ? function (t) {
                return c
                  .map(function (e) {
                    return e(t);
                  })
                  .join(" ");
              }
            : function (t) {
                return c.map(function (e) {
                  return e(t);
                });
              };
          return r && (o || a)
            ? function (t) {
                return (t < 1e-4 && o) || (1 - t < 1e-4 && a) || l(t);
              }
            : l;
        }
        return r
          ? ((o = Array.isArray(o)
              ? o.map(function (t) {
                  return "string" == typeof t && t;
                })
              : []),
            (a = Array.isArray(a)
              ? a.map(function (t) {
                  return "string" == typeof t && t;
                })
              : []),
            c.map(function (t, e) {
              return o[e] || a[e]
                ? function (n) {
                    return (n < 1e-4 && o[e]) || (1 - n < 1e-4 && a[e]) || t(n);
                  }
                : t;
            }))
          : c;
      }
      function mt(t, e, n, r, i) {
        return bt(
          (function (t, e, n) {
            return function (r) {
              var i = B(r),
                o = _t(r.concat([r[0]])),
                a = Math.atan2(r[0][1] - i[1], r[0][0] - i[0]),
                s = 0;
              return r.map(function (i, u) {
                var c;
                return (
                  u && (s += M(i, r[u - 1])),
                  (c = a + 2 * Math.PI * (o ? s / o : u / r.length)),
                  [Math.cos(c) * n + t, Math.sin(c) * n + e]
                );
              });
            };
          })(t, e, n),
          r,
          (function (t, e, n) {
            var r = t - n + "," + e,
              i = "A" + n + "," + n + ",0,1,1,";
            return "M" + r + i + (t + n) + "," + e + i + r + "Z";
          })(t, e, n),
          2 * Math.PI * n,
          i
        );
      }
      function gt(t, e, n, r, i, o) {
        return bt(
          (function (t, e, n, r) {
            return function (i) {
              var o = B(i),
                a = _t(i.concat([i[0]])),
                s = Math.atan2(i[0][1] - o[1], i[0][0] - o[0]),
                u = 0;
              s < 0 && (s = 2 * Math.PI + s);
              var c = s / (2 * Math.PI);
              return i.map(function (o, s) {
                s && (u += M(o, i[s - 1]));
                var l = (function (t) {
                  return t <= 1 / 8
                    ? [1, 0.5 + 4 * t]
                    : t <= 3 / 8
                    ? [1.5 - 4 * t, 1]
                    : t <= 5 / 8
                    ? [0, 2.5 - 4 * t]
                    : t <= 7 / 8
                    ? [4 * t - 2.5, 0]
                    : [1, 4 * t - 3.5];
                })((c + (a ? u / a : s / i.length)) % 1);
                return [t + l[0] * n, e + l[1] * r];
              });
            };
          })(t, e, n, r),
          i,
          (function (t, e, n, r) {
            var i = t + n,
              o = e + r;
            return (
              "M" +
              t +
              "," +
              e +
              "L" +
              i +
              "," +
              e +
              "L" +
              i +
              "," +
              o +
              "L" +
              t +
              "," +
              o +
              "Z"
            );
          })(t, e, n, r),
          2 * n + 2 * r,
          o
        );
      }
      function bt(t, e, n, r, i) {
        void 0 === i && (i = {});
        var o = i.maxSegmentLength;
        void 0 === o && (o = 10);
        var a = i.string;
        void 0 === a && (a = !0);
        var s,
          u,
          c = F(e, o);
        return (
          D(r) && c.length < r / o && N(c, Math.ceil(r / o - c.length)),
          (s = t(c)),
          (u = T(s, c, a)),
          a
            ? function (t) {
                return t < 1e-4 ? n : u(t);
              }
            : u
        );
      }
      var xt = function (t) {
          for (var e, n = -1, r = t.length, i = t[r - 1], o = 0; ++n < r; )
            (e = i), (i = t[n]), (o += e[1] * i[0] - e[0] * i[1]);
          return o / 2;
        },
        kt = function (t) {
          for (
            var e, n, r = -1, i = t.length, o = 0, a = 0, s = t[i - 1], u = 0;
            ++r < i;

          )
            (e = s),
              (s = t[r]),
              (u += n = e[0] * s[1] - s[0] * e[1]),
              (o += (e[0] + s[0]) * n),
              (a += (e[1] + s[1]) * n);
          return [o / (u *= 3), a / u];
        },
        _t = function (t) {
          for (
            var e,
              n,
              r = -1,
              i = t.length,
              o = t[i - 1],
              a = o[0],
              s = o[1],
              u = 0;
            ++r < i;

          )
            (e = a),
              (n = s),
              (e -= a = (o = t[r])[0]),
              (n -= s = o[1]),
              (u += Math.sqrt(e * e + n * n));
          return u;
        },
        wt = {
          a: 7,
          c: 6,
          h: 1,
          l: 2,
          m: 2,
          r: 4,
          q: 4,
          s: 4,
          t: 2,
          v: 1,
          z: 0,
        },
        It = [
          5760,
          6158,
          8192,
          8193,
          8194,
          8195,
          8196,
          8197,
          8198,
          8199,
          8200,
          8201,
          8202,
          8239,
          8287,
          12288,
          65279,
        ],
        Ot = function (t) {
          var e = new i(t),
            n = e.max;
          for (o(e); e.index < n && !e.err.length; ) u(e);
          return (
            e.err.length
              ? (e.result = [])
              : e.result.length &&
                ("mM".indexOf(e.result[0][0]) < 0
                  ? ((e.err = "SvgPath: string should start with `M` or `m`"),
                    (e.result = []))
                  : (e.result[0][0] = "M")),
            { err: e.err, segments: e.result }
          );
        };
      (l.prototype.matrix = function (t) {
        return (
          (1 === t[0] &&
            0 === t[1] &&
            0 === t[2] &&
            1 === t[3] &&
            0 === t[4] &&
            0 === t[5]) ||
            ((this.cache = null), this.queue.push(t)),
          this
        );
      }),
        (l.prototype.translate = function (t, e) {
          return (
            (0 === t && 0 === e) ||
              ((this.cache = null), this.queue.push([1, 0, 0, 1, t, e])),
            this
          );
        }),
        (l.prototype.scale = function (t, e) {
          return (
            (1 === t && 1 === e) ||
              ((this.cache = null), this.queue.push([t, 0, 0, e, 0, 0])),
            this
          );
        }),
        (l.prototype.rotate = function (t, e, n) {
          var r, i, o;
          return (
            0 !== t &&
              (this.translate(e, n),
              (r = (t * Math.PI) / 180),
              (i = Math.cos(r)),
              (o = Math.sin(r)),
              this.queue.push([i, o, -o, i, 0, 0]),
              (this.cache = null),
              this.translate(-e, -n)),
            this
          );
        }),
        (l.prototype.skewX = function (t) {
          return (
            0 !== t &&
              ((this.cache = null),
              this.queue.push([1, 0, Math.tan((t * Math.PI) / 180), 1, 0, 0])),
            this
          );
        }),
        (l.prototype.skewY = function (t) {
          return (
            0 !== t &&
              ((this.cache = null),
              this.queue.push([1, Math.tan((t * Math.PI) / 180), 0, 1, 0, 0])),
            this
          );
        }),
        (l.prototype.toArray = function () {
          var t = this;
          if (this.cache) return this.cache;
          if (!this.queue.length)
            return (this.cache = [1, 0, 0, 1, 0, 0]), this.cache;
          if (((this.cache = this.queue[0]), 1 === this.queue.length))
            return this.cache;
          for (var e = 1; e < this.queue.length; e++)
            t.cache = c(t.cache, t.queue[e]);
          return this.cache;
        }),
        (l.prototype.calc = function (t, e, n) {
          var r;
          return this.queue.length
            ? (this.cache || (this.cache = this.toArray()),
              [
                t * (r = this.cache)[0] + e * r[2] + (n ? 0 : r[4]),
                t * r[1] + e * r[3] + (n ? 0 : r[5]),
              ])
            : [t, e];
        });
      var Ct = l,
        jt = {
          matrix: !0,
          scale: !0,
          rotate: !0,
          translate: !0,
          skewX: !0,
          skewY: !0,
        },
        Pt = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/,
        At = /[\s,]+/,
        Et = 2 * Math.PI,
        Mt = Math.PI / 180;
      (f.prototype.transform = function (t) {
        var e = Math.cos(this.ax * Mt),
          n = Math.sin(this.ax * Mt),
          r = [
            this.rx * (t[0] * e + t[2] * n),
            this.rx * (t[1] * e + t[3] * n),
            this.ry * (-t[0] * n + t[2] * e),
            this.ry * (-t[1] * n + t[3] * e),
          ],
          i = r[0] * r[0] + r[2] * r[2],
          o = r[1] * r[1] + r[3] * r[3],
          a =
            ((r[0] - r[3]) * (r[0] - r[3]) + (r[2] + r[1]) * (r[2] + r[1])) *
            ((r[0] + r[3]) * (r[0] + r[3]) + (r[2] - r[1]) * (r[2] - r[1])),
          s = (i + o) / 2;
        if (a < 1e-10 * s)
          return (this.rx = this.ry = Math.sqrt(s)), (this.ax = 0), this;
        var u = r[0] * r[1] + r[2] * r[3],
          c = s + (a = Math.sqrt(a)) / 2,
          l = s - a / 2;
        return (
          (this.ax =
            Math.abs(u) < 1e-10 && Math.abs(c - o) < 1e-10
              ? 90
              : (180 *
                  Math.atan(
                    Math.abs(u) > Math.abs(c - o) ? (c - i) / u : u / (c - o)
                  )) /
                Math.PI),
          this.ax >= 0
            ? ((this.rx = Math.sqrt(c)), (this.ry = Math.sqrt(l)))
            : ((this.ax += 90),
              (this.rx = Math.sqrt(l)),
              (this.ry = Math.sqrt(c))),
          this
        );
      }),
        (f.prototype.isDegenerate = function () {
          return this.rx < 1e-10 * this.ry || this.ry < 1e-10 * this.rx;
        });
      var St = f;
      (v.prototype.__matrix = function (t) {
        var e,
          n = this;
        t.queue.length &&
          this.iterate(function (r, i, o, a) {
            var s, u, c, l;
            switch (r[0]) {
              case "v":
                u =
                  0 === (s = t.calc(0, r[1], !0))[0]
                    ? ["v", s[1]]
                    : ["l", s[0], s[1]];
                break;
              case "V":
                u =
                  (s = t.calc(o, r[1], !1))[0] === t.calc(o, a, !1)[0]
                    ? ["V", s[1]]
                    : ["L", s[0], s[1]];
                break;
              case "h":
                u =
                  0 === (s = t.calc(r[1], 0, !0))[1]
                    ? ["h", s[0]]
                    : ["l", s[0], s[1]];
                break;
              case "H":
                u =
                  (s = t.calc(r[1], a, !1))[1] === t.calc(o, a, !1)[1]
                    ? ["H", s[0]]
                    : ["L", s[0], s[1]];
                break;
              case "a":
              case "A":
                var h = t.toArray(),
                  d = St(r[1], r[2], r[3]).transform(h);
                if (
                  (h[0] * h[3] - h[1] * h[2] < 0 && (r[5] = r[5] ? "0" : "1"),
                  (s = t.calc(r[6], r[7], "a" === r[0])),
                  ("A" === r[0] && r[6] === o && r[7] === a) ||
                    ("a" === r[0] && 0 === r[6] && 0 === r[7]))
                ) {
                  u = ["a" === r[0] ? "l" : "L", s[0], s[1]];
                  break;
                }
                u = d.isDegenerate()
                  ? ["a" === r[0] ? "l" : "L", s[0], s[1]]
                  : [r[0], d.rx, d.ry, d.ax, r[4], r[5], s[0], s[1]];
                break;
              case "m":
                (l = i > 0), (u = ["m", (s = t.calc(r[1], r[2], l))[0], s[1]]);
                break;
              default:
                for (
                  u = [(c = r[0])], l = c.toLowerCase() === c, e = 1;
                  e < r.length;
                  e += 2
                )
                  (s = t.calc(r[e], r[e + 1], l)), u.push(s[0], s[1]);
            }
            n.segments[i] = u;
          }, !0);
      }),
        (v.prototype.__evaluateStack = function () {
          var t, e;
          if (this.__stack.length) {
            if (1 === this.__stack.length)
              return this.__matrix(this.__stack[0]), void (this.__stack = []);
            for (t = Ct(), e = this.__stack.length; --e >= 0; )
              t.matrix(this.__stack[e].toArray());
            this.__matrix(t), (this.__stack = []);
          }
        }),
        (v.prototype.toString = function () {
          var t,
            e,
            n = this,
            r = [];
          this.__evaluateStack();
          for (var i = 0; i < this.segments.length; i++)
            (e = n.segments[i][0]),
              (t =
                i > 0 && "m" !== e && "M" !== e && e === n.segments[i - 1][0]),
              (r = r.concat(t ? n.segments[i].slice(1) : n.segments[i]));
          return r
            .join(" ")
            .replace(/ ?([achlmqrstvz]) ?/gi, "$1")
            .replace(/ \-/g, "-")
            .replace(/zm/g, "z m");
        }),
        (v.prototype.translate = function (t, e) {
          return this.__stack.push(Ct().translate(t, e || 0)), this;
        }),
        (v.prototype.scale = function (t, e) {
          return this.__stack.push(Ct().scale(t, e || 0 === e ? e : t)), this;
        }),
        (v.prototype.rotate = function (t, e, n) {
          return this.__stack.push(Ct().rotate(t, e || 0, n || 0)), this;
        }),
        (v.prototype.skewX = function (t) {
          return this.__stack.push(Ct().skewX(t)), this;
        }),
        (v.prototype.skewY = function (t) {
          return this.__stack.push(Ct().skewY(t)), this;
        }),
        (v.prototype.matrix = function (t) {
          return this.__stack.push(Ct().matrix(t)), this;
        }),
        (v.prototype.transform = function (t) {
          return t.trim()
            ? (this.__stack.push(
                (function (t) {
                  var e,
                    n,
                    r = new Ct();
                  return (
                    t.split(Pt).forEach(function (t) {
                      if (t.length) {
                        if (void 0 !== jt[t]) return void (e = t);
                        switch (
                          ((n = t.split(At).map(function (t) {
                            return +t || 0;
                          })),
                          e)
                        ) {
                          case "matrix":
                            return void (6 === n.length && r.matrix(n));
                          case "scale":
                            return void (1 === n.length
                              ? r.scale(n[0], n[0])
                              : 2 === n.length && r.scale(n[0], n[1]));
                          case "rotate":
                            return void (1 === n.length
                              ? r.rotate(n[0], 0, 0)
                              : 3 === n.length && r.rotate(n[0], n[1], n[2]));
                          case "translate":
                            return void (1 === n.length
                              ? r.translate(n[0], 0)
                              : 2 === n.length && r.translate(n[0], n[1]));
                          case "skewX":
                            return void (1 === n.length && r.skewX(n[0]));
                          case "skewY":
                            return void (1 === n.length && r.skewY(n[0]));
                        }
                      }
                    }),
                    r
                  );
                })(t)
              ),
              this)
            : this;
        }),
        (v.prototype.round = function (t) {
          var e,
            n = 0,
            r = 0,
            i = 0,
            o = 0;
          return (
            (t = t || 0),
            this.__evaluateStack(),
            this.segments.forEach(function (a) {
              var s = a[0].toLowerCase() === a[0];
              switch (a[0]) {
                case "H":
                case "h":
                  return (
                    s && (a[1] += i),
                    (i = a[1] - a[1].toFixed(t)),
                    void (a[1] = +a[1].toFixed(t))
                  );
                case "V":
                case "v":
                  return (
                    s && (a[1] += o),
                    (o = a[1] - a[1].toFixed(t)),
                    void (a[1] = +a[1].toFixed(t))
                  );
                case "Z":
                case "z":
                  return (i = n), void (o = r);
                case "M":
                case "m":
                  return (
                    s && ((a[1] += i), (a[2] += o)),
                    (i = a[1] - a[1].toFixed(t)),
                    (o = a[2] - a[2].toFixed(t)),
                    (n = i),
                    (r = o),
                    (a[1] = +a[1].toFixed(t)),
                    void (a[2] = +a[2].toFixed(t))
                  );
                case "A":
                case "a":
                  return (
                    s && ((a[6] += i), (a[7] += o)),
                    (i = a[6] - a[6].toFixed(t)),
                    (o = a[7] - a[7].toFixed(t)),
                    (a[1] = +a[1].toFixed(t)),
                    (a[2] = +a[2].toFixed(t)),
                    (a[3] = +a[3].toFixed(t + 2)),
                    (a[6] = +a[6].toFixed(t)),
                    void (a[7] = +a[7].toFixed(t))
                  );
                default:
                  return (
                    (e = a.length),
                    s && ((a[e - 2] += i), (a[e - 1] += o)),
                    (i = a[e - 2] - a[e - 2].toFixed(t)),
                    (o = a[e - 1] - a[e - 1].toFixed(t)),
                    void a.forEach(function (e, n) {
                      n && (a[n] = +a[n].toFixed(t));
                    })
                  );
              }
            }),
            this
          );
        }),
        (v.prototype.iterate = function (t, e) {
          var n,
            r,
            i,
            o = this.segments,
            a = {},
            s = !1,
            u = 0,
            c = 0,
            l = 0,
            h = 0;
          if (
            (e || this.__evaluateStack(),
            o.forEach(function (e, n) {
              var r = t(e, n, u, c);
              Array.isArray(r) && ((a[n] = r), (s = !0));
              var i = e[0] === e[0].toLowerCase();
              switch (e[0]) {
                case "m":
                case "M":
                  return (
                    (u = e[1] + (i ? u : 0)),
                    (c = e[2] + (i ? c : 0)),
                    (l = u),
                    void (h = c)
                  );
                case "h":
                case "H":
                  return void (u = e[1] + (i ? u : 0));
                case "v":
                case "V":
                  return void (c = e[1] + (i ? c : 0));
                case "z":
                case "Z":
                  return (u = l), void (c = h);
                default:
                  (u = e[e.length - 2] + (i ? u : 0)),
                    (c = e[e.length - 1] + (i ? c : 0));
              }
            }),
            !s)
          )
            return this;
          for (i = [], n = 0; n < o.length; n++)
            if (void 0 !== a[n])
              for (r = 0; r < a[n].length; r++) i.push(a[n][r]);
            else i.push(o[n]);
          return (this.segments = i), this;
        }),
        (v.prototype.abs = function () {
          return (
            this.iterate(function (t, e, n, r) {
              var i,
                o = t[0],
                a = o.toUpperCase();
              if (o !== a)
                switch (((t[0] = a), o)) {
                  case "v":
                    return void (t[1] += r);
                  case "a":
                    return (t[6] += n), void (t[7] += r);
                  default:
                    for (i = 1; i < t.length; i++) t[i] += i % 2 ? n : r;
                }
            }, !0),
            this
          );
        }),
        (v.prototype.rel = function () {
          return (
            this.iterate(function (t, e, n, r) {
              var i,
                o = t[0],
                a = o.toLowerCase();
              if (o !== a && (0 !== e || "M" !== o))
                switch (((t[0] = a), o)) {
                  case "V":
                    return void (t[1] -= r);
                  case "A":
                    return (t[6] -= n), void (t[7] -= r);
                  default:
                    for (i = 1; i < t.length; i++) t[i] -= i % 2 ? n : r;
                }
            }, !0),
            this
          );
        }),
        (v.prototype.unarc = function () {
          return (
            this.iterate(function (t, e, n, r) {
              var i,
                o,
                a,
                s = [],
                u = t[0];
              return "A" !== u && "a" !== u
                ? null
                : ("a" === u
                    ? ((o = n + t[6]), (a = r + t[7]))
                    : ((o = t[6]), (a = t[7])),
                  0 ===
                  (i = (function (t, e, n, r, i, o, a, s, u) {
                    var c = Math.sin((u * Et) / 360),
                      l = Math.cos((u * Et) / 360),
                      h = (l * (t - n)) / 2 + (c * (e - r)) / 2,
                      f = (-c * (t - n)) / 2 + (l * (e - r)) / 2;
                    if (0 === h && 0 === f) return [];
                    if (0 === a || 0 === s) return [];
                    (a = Math.abs(a)), (s = Math.abs(s));
                    var v = (h * h) / (a * a) + (f * f) / (s * s);
                    v > 1 && ((a *= Math.sqrt(v)), (s *= Math.sqrt(v)));
                    var y = d(t, e, n, r, i, o, a, s, c, l),
                      m = [],
                      g = y[2],
                      b = y[3],
                      x = Math.max(Math.ceil(Math.abs(b) / (Et / 4)), 1);
                    b /= x;
                    for (var k = 0; k < x; k++) m.push(p(g, b)), (g += b);
                    return m.map(function (t) {
                      for (var e = 0; e < t.length; e += 2) {
                        var n = t[e + 0],
                          r = t[e + 1],
                          i = l * (n *= a) - c * (r *= s),
                          o = c * n + l * r;
                        (t[e + 0] = i + y[0]), (t[e + 1] = o + y[1]);
                      }
                      return t;
                    });
                  })(n, r, o, a, t[4], t[5], t[1], t[2], t[3])).length
                    ? [["a" === t[0] ? "l" : "L", t[6], t[7]]]
                    : (i.forEach(function (t) {
                        s.push(["C", t[2], t[3], t[4], t[5], t[6], t[7]]);
                      }),
                      s));
            }),
            this
          );
        }),
        (v.prototype.unshort = function () {
          var t,
            e,
            n,
            r,
            i,
            o = this.segments;
          return (
            this.iterate(function (a, s, u, c) {
              var l,
                h = a[0],
                d = h.toUpperCase();
              s &&
                ("T" === d
                  ? ((l = "t" === h),
                    "Q" === (n = o[s - 1])[0]
                      ? ((t = n[1] - u), (e = n[2] - c))
                      : "q" === n[0]
                      ? ((t = n[1] - n[3]), (e = n[2] - n[4]))
                      : ((t = 0), (e = 0)),
                    (r = -t),
                    (i = -e),
                    l || ((r += u), (i += c)),
                    (o[s] = [l ? "q" : "Q", r, i, a[1], a[2]]))
                  : "S" === d &&
                    ((l = "s" === h),
                    "C" === (n = o[s - 1])[0]
                      ? ((t = n[3] - u), (e = n[4] - c))
                      : "c" === n[0]
                      ? ((t = n[3] - n[5]), (e = n[4] - n[6]))
                      : ((t = 0), (e = 0)),
                    (r = -t),
                    (i = -e),
                    l || ((r += u), (i += c)),
                    (o[s] = [l ? "c" : "C", r, i, a[1], a[2], a[3], a[4]])));
            }),
            this
          );
        });
      var Tt = v,
        Dt = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 },
        Bt = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
        Lt = function (t) {
          var e = [];
          return (
            t.replace(Bt, function (t, n, r) {
              var i = n.toLowerCase();
              for (
                r = (function (t) {
                  var e = t.match(Vt);
                  return e ? e.map(Number) : [];
                })(r),
                  "m" === i &&
                    r.length > 2 &&
                    (e.push([n].concat(r.splice(0, 2))),
                    (i = "l"),
                    (n = "m" === n ? "l" : "L"));
                r.length >= 0;

              ) {
                if (r.length === Dt[i]) return r.unshift(n), e.push(r);
                if (r.length < Dt[i]) throw new Error("malformed path data");
                e.push([n].concat(r.splice(0, Dt[i])));
              }
            }),
            e
          );
        },
        Vt = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi,
        $t = function (t, e, n, r, i, o, a, s) {
          return new y(t, e, n, r, i, o, a, s);
        };
      y.prototype = {
        constructor: y,
        init: function () {
          this.length = this.getArcLength(
            [this.a.x, this.b.x, this.c.x, this.d.x],
            [this.a.y, this.b.y, this.c.y, this.d.y]
          );
        },
        getTotalLength: function () {
          return this.length;
        },
        getPointAtLength: function (t) {
          var e = b(
            t,
            this.length,
            this.getArcLength,
            [this.a.x, this.b.x, this.c.x, this.d.x],
            [this.a.y, this.b.y, this.c.y, this.d.y]
          );
          return this.getPoint(
            [this.a.x, this.b.x, this.c.x, this.d.x],
            [this.a.y, this.b.y, this.c.y, this.d.y],
            e
          );
        },
        getTangentAtLength: function (t) {
          var e = b(
              t,
              this.length,
              this.getArcLength,
              [this.a.x, this.b.x, this.c.x, this.d.x],
              [this.a.y, this.b.y, this.c.y, this.d.y]
            ),
            n = this.getDerivative(
              [this.a.x, this.b.x, this.c.x, this.d.x],
              [this.a.y, this.b.y, this.c.y, this.d.y],
              e
            ),
            r = Math.sqrt(n.x * n.x + n.y * n.y);
          return r > 0 ? { x: n.x / r, y: n.y / r } : { x: 0, y: 0 };
        },
        getPropertiesAtLength: function (t) {
          var e,
            n = b(
              t,
              this.length,
              this.getArcLength,
              [this.a.x, this.b.x, this.c.x, this.d.x],
              [this.a.y, this.b.y, this.c.y, this.d.y]
            ),
            r = this.getDerivative(
              [this.a.x, this.b.x, this.c.x, this.d.x],
              [this.a.y, this.b.y, this.c.y, this.d.y],
              n
            ),
            i = Math.sqrt(r.x * r.x + r.y * r.y);
          e = i > 0 ? { x: r.x / i, y: r.y / i } : { x: 0, y: 0 };
          var o = this.getPoint(
            [this.a.x, this.b.x, this.c.x, this.d.x],
            [this.a.y, this.b.y, this.c.y, this.d.y],
            n
          );
          return { x: o.x, y: o.y, tangentX: e.x, tangentY: e.y };
        },
      };
      var zt = [
          [],
          [],
          [-0.5773502691896257, 0.5773502691896257],
          [0, -0.7745966692414834, 0.7745966692414834],
          [
            -0.33998104358485626,
            0.33998104358485626,
            -0.8611363115940526,
            0.8611363115940526,
          ],
          [
            0,
            -0.5384693101056831,
            0.5384693101056831,
            -0.906179845938664,
            0.906179845938664,
          ],
          [
            0.6612093864662645,
            -0.6612093864662645,
            -0.2386191860831969,
            0.2386191860831969,
            -0.932469514203152,
            0.932469514203152,
          ],
          [
            0,
            0.4058451513773972,
            -0.4058451513773972,
            -0.7415311855993945,
            0.7415311855993945,
            -0.9491079123427585,
            0.9491079123427585,
          ],
          [
            -0.1834346424956498,
            0.1834346424956498,
            -0.525532409916329,
            0.525532409916329,
            -0.7966664774136267,
            0.7966664774136267,
            -0.9602898564975363,
            0.9602898564975363,
          ],
          [
            0,
            -0.8360311073266358,
            0.8360311073266358,
            -0.9681602395076261,
            0.9681602395076261,
            -0.3242534234038089,
            0.3242534234038089,
            -0.6133714327005904,
            0.6133714327005904,
          ],
          [
            -0.14887433898163122,
            0.14887433898163122,
            -0.4333953941292472,
            0.4333953941292472,
            -0.6794095682990244,
            0.6794095682990244,
            -0.8650633666889845,
            0.8650633666889845,
            -0.9739065285171717,
            0.9739065285171717,
          ],
          [
            0,
            -0.26954315595234496,
            0.26954315595234496,
            -0.5190961292068118,
            0.5190961292068118,
            -0.7301520055740494,
            0.7301520055740494,
            -0.8870625997680953,
            0.8870625997680953,
            -0.978228658146057,
            0.978228658146057,
          ],
          [
            -0.1252334085114689,
            0.1252334085114689,
            -0.3678314989981802,
            0.3678314989981802,
            -0.5873179542866175,
            0.5873179542866175,
            -0.7699026741943047,
            0.7699026741943047,
            -0.9041172563704749,
            0.9041172563704749,
            -0.9815606342467192,
            0.9815606342467192,
          ],
          [
            0,
            -0.2304583159551348,
            0.2304583159551348,
            -0.44849275103644687,
            0.44849275103644687,
            -0.6423493394403402,
            0.6423493394403402,
            -0.8015780907333099,
            0.8015780907333099,
            -0.9175983992229779,
            0.9175983992229779,
            -0.9841830547185881,
            0.9841830547185881,
          ],
          [
            -0.10805494870734367,
            0.10805494870734367,
            -0.31911236892788974,
            0.31911236892788974,
            -0.5152486363581541,
            0.5152486363581541,
            -0.6872929048116855,
            0.6872929048116855,
            -0.827201315069765,
            0.827201315069765,
            -0.9284348836635735,
            0.9284348836635735,
            -0.9862838086968123,
            0.9862838086968123,
          ],
          [
            0,
            -0.20119409399743451,
            0.20119409399743451,
            -0.3941513470775634,
            0.3941513470775634,
            -0.5709721726085388,
            0.5709721726085388,
            -0.7244177313601701,
            0.7244177313601701,
            -0.8482065834104272,
            0.8482065834104272,
            -0.937273392400706,
            0.937273392400706,
            -0.9879925180204854,
            0.9879925180204854,
          ],
          [
            -0.09501250983763744,
            0.09501250983763744,
            -0.2816035507792589,
            0.2816035507792589,
            -0.45801677765722737,
            0.45801677765722737,
            -0.6178762444026438,
            0.6178762444026438,
            -0.755404408355003,
            0.755404408355003,
            -0.8656312023878318,
            0.8656312023878318,
            -0.9445750230732326,
            0.9445750230732326,
            -0.9894009349916499,
            0.9894009349916499,
          ],
          [
            0,
            -0.17848418149584785,
            0.17848418149584785,
            -0.3512317634538763,
            0.3512317634538763,
            -0.5126905370864769,
            0.5126905370864769,
            -0.6576711592166907,
            0.6576711592166907,
            -0.7815140038968014,
            0.7815140038968014,
            -0.8802391537269859,
            0.8802391537269859,
            -0.9506755217687678,
            0.9506755217687678,
            -0.9905754753144174,
            0.9905754753144174,
          ],
          [
            -0.0847750130417353,
            0.0847750130417353,
            -0.2518862256915055,
            0.2518862256915055,
            -0.41175116146284263,
            0.41175116146284263,
            -0.5597708310739475,
            0.5597708310739475,
            -0.6916870430603532,
            0.6916870430603532,
            -0.8037049589725231,
            0.8037049589725231,
            -0.8926024664975557,
            0.8926024664975557,
            -0.9558239495713977,
            0.9558239495713977,
            -0.9915651684209309,
            0.9915651684209309,
          ],
          [
            0,
            -0.16035864564022537,
            0.16035864564022537,
            -0.31656409996362983,
            0.31656409996362983,
            -0.46457074137596094,
            0.46457074137596094,
            -0.600545304661681,
            0.600545304661681,
            -0.7209661773352294,
            0.7209661773352294,
            -0.8227146565371428,
            0.8227146565371428,
            -0.9031559036148179,
            0.9031559036148179,
            -0.96020815213483,
            0.96020815213483,
            -0.9924068438435844,
            0.9924068438435844,
          ],
          [
            -0.07652652113349734,
            0.07652652113349734,
            -0.22778585114164507,
            0.22778585114164507,
            -0.37370608871541955,
            0.37370608871541955,
            -0.5108670019508271,
            0.5108670019508271,
            -0.636053680726515,
            0.636053680726515,
            -0.7463319064601508,
            0.7463319064601508,
            -0.8391169718222188,
            0.8391169718222188,
            -0.912234428251326,
            0.912234428251326,
            -0.9639719272779138,
            0.9639719272779138,
            -0.9931285991850949,
            0.9931285991850949,
          ],
          [
            0,
            -0.1455618541608951,
            0.1455618541608951,
            -0.2880213168024011,
            0.2880213168024011,
            -0.4243421202074388,
            0.4243421202074388,
            -0.5516188358872198,
            0.5516188358872198,
            -0.6671388041974123,
            0.6671388041974123,
            -0.7684399634756779,
            0.7684399634756779,
            -0.8533633645833173,
            0.8533633645833173,
            -0.9200993341504008,
            0.9200993341504008,
            -0.9672268385663063,
            0.9672268385663063,
            -0.9937521706203895,
            0.9937521706203895,
          ],
          [
            -0.06973927331972223,
            0.06973927331972223,
            -0.20786042668822127,
            0.20786042668822127,
            -0.34193582089208424,
            0.34193582089208424,
            -0.469355837986757,
            0.469355837986757,
            -0.5876404035069116,
            0.5876404035069116,
            -0.6944872631866827,
            0.6944872631866827,
            -0.7878168059792081,
            0.7878168059792081,
            -0.8658125777203002,
            0.8658125777203002,
            -0.926956772187174,
            0.926956772187174,
            -0.9700604978354287,
            0.9700604978354287,
            -0.9942945854823992,
            0.9942945854823992,
          ],
          [
            0,
            -0.1332568242984661,
            0.1332568242984661,
            -0.26413568097034495,
            0.26413568097034495,
            -0.3903010380302908,
            0.3903010380302908,
            -0.5095014778460075,
            0.5095014778460075,
            -0.6196098757636461,
            0.6196098757636461,
            -0.7186613631319502,
            0.7186613631319502,
            -0.8048884016188399,
            0.8048884016188399,
            -0.8767523582704416,
            0.8767523582704416,
            -0.9329710868260161,
            0.9329710868260161,
            -0.9725424712181152,
            0.9725424712181152,
            -0.9947693349975522,
            0.9947693349975522,
          ],
          [
            -0.06405689286260563,
            0.06405689286260563,
            -0.1911188674736163,
            0.1911188674736163,
            -0.3150426796961634,
            0.3150426796961634,
            -0.4337935076260451,
            0.4337935076260451,
            -0.5454214713888396,
            0.5454214713888396,
            -0.6480936519369755,
            0.6480936519369755,
            -0.7401241915785544,
            0.7401241915785544,
            -0.820001985973903,
            0.820001985973903,
            -0.8864155270044011,
            0.8864155270044011,
            -0.9382745520027328,
            0.9382745520027328,
            -0.9747285559713095,
            0.9747285559713095,
            -0.9951872199970213,
            0.9951872199970213,
          ],
        ],
        Nt = [
          [],
          [],
          [1, 1],
          [0.8888888888888888, 0.5555555555555556, 0.5555555555555556],
          [
            0.6521451548625461,
            0.6521451548625461,
            0.34785484513745385,
            0.34785484513745385,
          ],
          [
            0.5688888888888889,
            0.47862867049936647,
            0.47862867049936647,
            0.23692688505618908,
            0.23692688505618908,
          ],
          [
            0.3607615730481386,
            0.3607615730481386,
            0.46791393457269104,
            0.46791393457269104,
            0.17132449237917036,
            0.17132449237917036,
          ],
          [
            0.4179591836734694,
            0.3818300505051189,
            0.3818300505051189,
            0.27970539148927664,
            0.27970539148927664,
            0.1294849661688697,
            0.1294849661688697,
          ],
          [
            0.362683783378362,
            0.362683783378362,
            0.31370664587788727,
            0.31370664587788727,
            0.22238103445337448,
            0.22238103445337448,
            0.10122853629037626,
            0.10122853629037626,
          ],
          [
            0.3302393550012598,
            0.1806481606948574,
            0.1806481606948574,
            0.08127438836157441,
            0.08127438836157441,
            0.31234707704000286,
            0.31234707704000286,
            0.26061069640293544,
            0.26061069640293544,
          ],
          [
            0.29552422471475287,
            0.29552422471475287,
            0.26926671930999635,
            0.26926671930999635,
            0.21908636251598204,
            0.21908636251598204,
            0.1494513491505806,
            0.1494513491505806,
            0.06667134430868814,
            0.06667134430868814,
          ],
          [
            0.2729250867779006,
            0.26280454451024665,
            0.26280454451024665,
            0.23319376459199048,
            0.23319376459199048,
            0.18629021092773426,
            0.18629021092773426,
            0.1255803694649046,
            0.1255803694649046,
            0.05566856711617366,
            0.05566856711617366,
          ],
          [
            0.24914704581340277,
            0.24914704581340277,
            0.2334925365383548,
            0.2334925365383548,
            0.20316742672306592,
            0.20316742672306592,
            0.16007832854334622,
            0.16007832854334622,
            0.10693932599531843,
            0.10693932599531843,
            0.04717533638651183,
            0.04717533638651183,
          ],
          [
            0.2325515532308739,
            0.22628318026289723,
            0.22628318026289723,
            0.2078160475368885,
            0.2078160475368885,
            0.17814598076194574,
            0.17814598076194574,
            0.13887351021978725,
            0.13887351021978725,
            0.09212149983772845,
            0.09212149983772845,
            0.04048400476531588,
            0.04048400476531588,
          ],
          [
            0.2152638534631578,
            0.2152638534631578,
            0.2051984637212956,
            0.2051984637212956,
            0.18553839747793782,
            0.18553839747793782,
            0.15720316715819355,
            0.15720316715819355,
            0.12151857068790319,
            0.12151857068790319,
            0.08015808715976021,
            0.08015808715976021,
            0.03511946033175186,
            0.03511946033175186,
          ],
          [
            0.2025782419255613,
            0.19843148532711158,
            0.19843148532711158,
            0.1861610000155622,
            0.1861610000155622,
            0.16626920581699392,
            0.16626920581699392,
            0.13957067792615432,
            0.13957067792615432,
            0.10715922046717194,
            0.10715922046717194,
            0.07036604748810812,
            0.07036604748810812,
            0.03075324199611727,
            0.03075324199611727,
          ],
          [
            0.1894506104550685,
            0.1894506104550685,
            0.18260341504492358,
            0.18260341504492358,
            0.16915651939500254,
            0.16915651939500254,
            0.14959598881657674,
            0.14959598881657674,
            0.12462897125553388,
            0.12462897125553388,
            0.09515851168249279,
            0.09515851168249279,
            0.062253523938647894,
            0.062253523938647894,
            0.027152459411754096,
            0.027152459411754096,
          ],
          [
            0.17944647035620653,
            0.17656270536699264,
            0.17656270536699264,
            0.16800410215645004,
            0.16800410215645004,
            0.15404576107681028,
            0.15404576107681028,
            0.13513636846852548,
            0.13513636846852548,
            0.11188384719340397,
            0.11188384719340397,
            0.08503614831717918,
            0.08503614831717918,
            0.0554595293739872,
            0.0554595293739872,
            0.02414830286854793,
            0.02414830286854793,
          ],
          [
            0.1691423829631436,
            0.1691423829631436,
            0.16427648374583273,
            0.16427648374583273,
            0.15468467512626524,
            0.15468467512626524,
            0.14064291467065065,
            0.14064291467065065,
            0.12255520671147846,
            0.12255520671147846,
            0.10094204410628717,
            0.10094204410628717,
            0.07642573025488905,
            0.07642573025488905,
            0.0497145488949698,
            0.0497145488949698,
            0.02161601352648331,
            0.02161601352648331,
          ],
          [
            0.1610544498487837,
            0.15896884339395434,
            0.15896884339395434,
            0.15276604206585967,
            0.15276604206585967,
            0.1426067021736066,
            0.1426067021736066,
            0.12875396253933621,
            0.12875396253933621,
            0.11156664554733399,
            0.11156664554733399,
            0.09149002162245,
            0.09149002162245,
            0.06904454273764123,
            0.06904454273764123,
            0.0448142267656996,
            0.0448142267656996,
            0.019461788229726478,
            0.019461788229726478,
          ],
          [
            0.15275338713072584,
            0.15275338713072584,
            0.14917298647260374,
            0.14917298647260374,
            0.14209610931838204,
            0.14209610931838204,
            0.13168863844917664,
            0.13168863844917664,
            0.11819453196151841,
            0.11819453196151841,
            0.10193011981724044,
            0.10193011981724044,
            0.08327674157670475,
            0.08327674157670475,
            0.06267204833410907,
            0.06267204833410907,
            0.04060142980038694,
            0.04060142980038694,
            0.017614007139152118,
            0.017614007139152118,
          ],
          [
            0.14608113364969041,
            0.14452440398997005,
            0.14452440398997005,
            0.13988739479107315,
            0.13988739479107315,
            0.13226893863333747,
            0.13226893863333747,
            0.12183141605372853,
            0.12183141605372853,
            0.10879729916714838,
            0.10879729916714838,
            0.09344442345603386,
            0.09344442345603386,
            0.0761001136283793,
            0.0761001136283793,
            0.057134425426857205,
            0.057134425426857205,
            0.036953789770852494,
            0.036953789770852494,
            0.016017228257774335,
            0.016017228257774335,
          ],
          [
            0.13925187285563198,
            0.13925187285563198,
            0.13654149834601517,
            0.13654149834601517,
            0.13117350478706238,
            0.13117350478706238,
            0.12325237681051242,
            0.12325237681051242,
            0.11293229608053922,
            0.11293229608053922,
            0.10041414444288096,
            0.10041414444288096,
            0.08594160621706773,
            0.08594160621706773,
            0.06979646842452049,
            0.06979646842452049,
            0.052293335152683286,
            0.052293335152683286,
            0.03377490158481415,
            0.03377490158481415,
            0.0146279952982722,
            0.0146279952982722,
          ],
          [
            0.13365457218610619,
            0.1324620394046966,
            0.1324620394046966,
            0.12890572218808216,
            0.12890572218808216,
            0.12304908430672953,
            0.12304908430672953,
            0.11499664022241136,
            0.11499664022241136,
            0.10489209146454141,
            0.10489209146454141,
            0.09291576606003515,
            0.09291576606003515,
            0.07928141177671895,
            0.07928141177671895,
            0.06423242140852585,
            0.06423242140852585,
            0.04803767173108467,
            0.04803767173108467,
            0.030988005856979445,
            0.030988005856979445,
            0.013411859487141771,
            0.013411859487141771,
          ],
          [
            0.12793819534675216,
            0.12793819534675216,
            0.1258374563468283,
            0.1258374563468283,
            0.12167047292780339,
            0.12167047292780339,
            0.1155056680537256,
            0.1155056680537256,
            0.10744427011596563,
            0.10744427011596563,
            0.09761865210411388,
            0.09761865210411388,
            0.08619016153195327,
            0.08619016153195327,
            0.0733464814110803,
            0.0733464814110803,
            0.05929858491543678,
            0.05929858491543678,
            0.04427743881741981,
            0.04427743881741981,
            0.028531388628933663,
            0.028531388628933663,
            0.0123412297999872,
            0.0123412297999872,
          ],
        ],
        Ft = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]],
        qt = 2 * Math.PI,
        Rt = function (t, e, n, r, i, o, a, s, u) {
          var c = Math.sin((i * qt) / 360),
            l = Math.cos((i * qt) / 360),
            h = (l * (t - s)) / 2 + (c * (e - u)) / 2,
            d = (-c * (t - s)) / 2 + (l * (e - u)) / 2;
          if (0 === h && 0 === d) return [];
          if (0 === n || 0 === r) return [];
          (n = Math.abs(n)), (r = Math.abs(r));
          var p = (h * h) / (n * n) + (d * d) / (r * r);
          p > 1 && ((n *= Math.sqrt(p)), (r *= Math.sqrt(p)));
          var f = (function (t, e, n, r, i, o, a, s, u, c) {
              var l = (c * (t - n)) / 2 + (u * (e - r)) / 2,
                h = (-u * (t - n)) / 2 + (c * (e - r)) / 2,
                d = a * a,
                p = s * s,
                f = l * l,
                v = h * h,
                y = d * p - d * v - p * f;
              y < 0 && (y = 0), (y /= d * v + p * f);
              var m = (((y = Math.sqrt(y) * (i === o ? -1 : 1)) * a) / s) * h,
                g = ((y * -s) / a) * l,
                b = c * m - u * g + (t + n) / 2,
                x = u * m + c * g + (e + r) / 2,
                k = (l - m) / a,
                _ = (h - g) / s,
                w = (-l - m) / a,
                I = (-h - g) / s,
                O = j(1, 0, k, _),
                C = j(k, _, w, I);
              return (
                0 === o && C > 0 && (C -= qt),
                1 === o && C < 0 && (C += qt),
                [b, x, O, C]
              );
            })(t, e, s, u, o, a, n, r, c, l),
            v = [],
            y = f[2],
            m = f[3],
            g = Math.max(Math.ceil(Math.abs(m) / (qt / 4)), 1);
          m /= g;
          for (var b = 0; b < g; b++) v.push(P(y, m)), (y += m);
          return v.map(function (t) {
            for (var e = 0; e < t.length; e += 2) {
              var i = t[e + 0],
                o = t[e + 1],
                a = l * (i *= n) - c * (o *= r),
                s = c * i + l * o;
              (t[e + 0] = a + f[0]), (t[e + 1] = s + f[1]);
            }
            return t;
          });
        },
        Gt = function (t, e, n, r, i, o, a, s, u) {
          return new A(t, e, n, r, i, o, a, s, u);
        };
      A.prototype = {
        constructor: A,
        init: function () {},
        getTotalLength: function () {
          return this.length;
        },
        getPointAtLength: function (t) {
          t < 0 ? (t = 0) : t > this.length && (t = this.length);
          for (
            var e = this.partialLengths.length - 1;
            this.partialLengths[e] >= t && this.partialLengths[e] > 0;

          )
            e--;
          e < this.partialLengths.length - 1 && e++;
          for (var n = 0, r = 0; r < e; r++) n += this.partialLengths[r];
          return this.curves[e].getPointAtLength(t - n);
        },
        getTangentAtLength: function (t) {
          t < 0 ? (t = 0) : t > this.length && (t = this.length);
          for (
            var e = this.partialLengths.length - 1;
            this.partialLengths[e] >= t && this.partialLengths[e] > 0;

          )
            e--;
          e < this.partialLengths.length - 1 && e++;
          for (var n = 0, r = 0; r < e; r++) n += this.partialLengths[r];
          return this.curves[e].getTangentAtLength(t - n);
        },
        getPropertiesAtLength: function (t) {
          var e = this.getTangentAtLength(t),
            n = this.getPointAtLength(t);
          return { x: n.x, y: n.y, tangentX: e.x, tangentY: e.y };
        },
      };
      var Ht = function (t, e, n, r) {
        return new E(t, e, n, r);
      };
      (E.prototype.getTotalLength = function () {
        return Math.sqrt(
          Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2)
        );
      }),
        (E.prototype.getPointAtLength = function (t) {
          var e =
              t /
              Math.sqrt(
                Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2)
              ),
            n = (this.x1 - this.x0) * e,
            r = (this.y1 - this.y0) * e;
          return { x: this.x0 + n, y: this.y0 + r };
        }),
        (E.prototype.getTangentAtLength = function () {
          var t = Math.sqrt(
            (this.x1 - this.x0) * (this.x1 - this.x0) +
              (this.y1 - this.y0) * (this.y1 - this.y0)
          );
          return { x: (this.x1 - this.x0) / t, y: (this.y1 - this.y0) / t };
        }),
        (E.prototype.getPropertiesAtLength = function (t) {
          var e = this.getPointAtLength(t),
            n = this.getTangentAtLength();
          return { x: e.x, y: e.y, tangentX: n.x, tangentY: n.y };
        });
      var Kt = function (t) {
          function e(t) {
            if (!t) return null;
            for (
              var o, a = Lt(t), s = [0, 0], u = [0, 0], c = 0;
              c < a.length;
              c++
            )
              "M" === a[c][0]
                ? ((s = [a[c][1], a[c][2]]), i.push(null))
                : "m" === a[c][0]
                ? ((s = [a[c][1] + s[0], a[c][2] + s[1]]), i.push(null))
                : "L" === a[c][0]
                ? ((n += Math.sqrt(
                    Math.pow(s[0] - a[c][1], 2) + Math.pow(s[1] - a[c][2], 2)
                  )),
                  i.push(new Ht(s[0], a[c][1], s[1], a[c][2])),
                  (s = [a[c][1], a[c][2]]))
                : "l" === a[c][0]
                ? ((n += Math.sqrt(
                    Math.pow(a[c][1], 2) + Math.pow(a[c][2], 2)
                  )),
                  i.push(new Ht(s[0], a[c][1] + s[0], s[1], a[c][2] + s[1])),
                  (s = [a[c][1] + s[0], a[c][2] + s[1]]))
                : "H" === a[c][0]
                ? ((n += Math.abs(s[0] - a[c][1])),
                  i.push(new Ht(s[0], a[c][1], s[1], s[1])),
                  (s[0] = a[c][1]))
                : "h" === a[c][0]
                ? ((n += Math.abs(a[c][1])),
                  i.push(new Ht(s[0], s[0] + a[c][1], s[1], s[1])),
                  (s[0] = a[c][1] + s[0]))
                : "V" === a[c][0]
                ? ((n += Math.abs(s[1] - a[c][1])),
                  i.push(new Ht(s[0], s[0], s[1], a[c][1])),
                  (s[1] = a[c][1]))
                : "v" === a[c][0]
                ? ((n += Math.abs(a[c][1])),
                  i.push(new Ht(s[0], s[0], s[1], s[1] + a[c][1])),
                  (s[1] = a[c][1] + s[1]))
                : "z" === a[c][0] || "Z" === a[c][0]
                ? ((n += Math.sqrt(
                    Math.pow(a[0][1] - s[0], 2) + Math.pow(a[0][2] - s[1], 2)
                  )),
                  i.push(new Ht(s[0], a[0][1], s[1], a[0][2])),
                  (s = [a[0][1], a[0][2]]))
                : "C" === a[c][0]
                ? ((o = new $t(
                    s[0],
                    s[1],
                    a[c][1],
                    a[c][2],
                    a[c][3],
                    a[c][4],
                    a[c][5],
                    a[c][6]
                  )),
                  (n += o.getTotalLength()),
                  (s = [a[c][5], a[c][6]]),
                  i.push(o))
                : "c" === a[c][0]
                ? ((o = new $t(
                    s[0],
                    s[1],
                    s[0] + a[c][1],
                    s[1] + a[c][2],
                    s[0] + a[c][3],
                    s[1] + a[c][4],
                    s[0] + a[c][5],
                    s[1] + a[c][6]
                  )),
                  (n += o.getTotalLength()),
                  (s = [a[c][5] + s[0], a[c][6] + s[1]]),
                  i.push(o))
                : "S" === a[c][0]
                ? ((o =
                    c > 0 && ["C", "c", "S", "s"].indexOf(a[c - 1][0]) > -1
                      ? new $t(
                          s[0],
                          s[1],
                          2 * s[0] - a[c - 1][a[c - 1].length - 4],
                          2 * s[1] - a[c - 1][a[c - 1].length - 3],
                          a[c][1],
                          a[c][2],
                          a[c][3],
                          a[c][4]
                        )
                      : new $t(
                          s[0],
                          s[1],
                          s[0],
                          s[1],
                          a[c][1],
                          a[c][2],
                          a[c][3],
                          a[c][4]
                        )),
                  (n += o.getTotalLength()),
                  (s = [a[c][3], a[c][4]]),
                  i.push(o))
                : "s" === a[c][0]
                ? ((o =
                    c > 0 && ["C", "c", "S", "s"].indexOf(a[c - 1][0]) > -1
                      ? new $t(
                          s[0],
                          s[1],
                          s[0] + o.d.x - o.c.x,
                          s[1] + o.d.y - o.c.y,
                          s[0] + a[c][1],
                          s[1] + a[c][2],
                          s[0] + a[c][3],
                          s[1] + a[c][4]
                        )
                      : new $t(
                          s[0],
                          s[1],
                          s[0],
                          s[1],
                          s[0] + a[c][1],
                          s[1] + a[c][2],
                          s[0] + a[c][3],
                          s[1] + a[c][4]
                        )),
                  (n += o.getTotalLength()),
                  (s = [a[c][3] + s[0], a[c][4] + s[1]]),
                  i.push(o))
                : "Q" === a[c][0]
                ? ((o = new $t(s[0], s[1], a[c][1], a[c][2], a[c][3], a[c][4])),
                  (n += o.getTotalLength()),
                  i.push(o),
                  (s = [a[c][3], a[c][4]]),
                  (u = [a[c][1], a[c][2]]))
                : "q" === a[c][0]
                ? ((o = new $t(
                    s[0],
                    s[1],
                    s[0] + a[c][1],
                    s[1] + a[c][2],
                    s[0] + a[c][3],
                    s[1] + a[c][4]
                  )),
                  (n += o.getTotalLength()),
                  (u = [s[0] + a[c][1], s[1] + a[c][2]]),
                  (s = [a[c][3] + s[0], a[c][4] + s[1]]),
                  i.push(o))
                : "T" === a[c][0]
                ? ((o =
                    c > 0 && ["Q", "q", "T", "t"].indexOf(a[c - 1][0]) > -1
                      ? new $t(
                          s[0],
                          s[1],
                          2 * s[0] - u[0],
                          2 * s[1] - u[1],
                          a[c][1],
                          a[c][2]
                        )
                      : new Ht(s[0], a[c][1], s[1], a[c][2])),
                  i.push(o),
                  (n += o.getTotalLength()),
                  (u = [2 * s[0] - u[0], 2 * s[1] - u[1]]),
                  (s = [a[c][1], a[c][2]]))
                : "t" === a[c][0]
                ? ((o =
                    c > 0 && ["Q", "q", "T", "t"].indexOf(a[c - 1][0]) > -1
                      ? new $t(
                          s[0],
                          s[1],
                          2 * s[0] - u[0],
                          2 * s[1] - u[1],
                          s[0] + a[c][1],
                          s[1] + a[c][2]
                        )
                      : new Ht(s[0], s[0] + a[c][1], s[1], s[1] + a[c][2])),
                  (n += o.getTotalLength()),
                  (u = [2 * s[0] - u[0], 2 * s[1] - u[1]]),
                  (s = [a[c][1] + s[0], a[c][2] + s[0]]),
                  i.push(o))
                : "A" === a[c][0]
                ? ((o = new Gt(
                    s[0],
                    s[1],
                    a[c][1],
                    a[c][2],
                    a[c][3],
                    a[c][4],
                    a[c][5],
                    a[c][6],
                    a[c][7]
                  )),
                  (n += o.getTotalLength()),
                  (s = [a[c][6], a[c][7]]),
                  i.push(o))
                : "a" === a[c][0] &&
                  ((o = new Gt(
                    s[0],
                    s[1],
                    a[c][1],
                    a[c][2],
                    a[c][3],
                    a[c][4],
                    a[c][5],
                    s[0] + a[c][6],
                    s[1] + a[c][7]
                  )),
                  (n += o.getTotalLength()),
                  (s = [s[0] + a[c][6], s[1] + a[c][7]]),
                  i.push(o)),
                r.push(n);
            return e;
          }
          var n = 0,
            r = [],
            i = [];
          (e.getTotalLength = function () {
            return n;
          }),
            (e.getPointAtLength = function (t) {
              var e = o(t);
              return i[e.i].getPointAtLength(e.fraction);
            }),
            (e.getTangentAtLength = function (t) {
              var e = o(t);
              return i[e.i].getTangentAtLength(e.fraction);
            }),
            (e.getPropertiesAtLength = function (t) {
              var e = o(t);
              return i[e.i].getPropertiesAtLength(e.fraction);
            });
          var o = function (t) {
            t < 0 ? (t = 0) : t > n && (t = n);
            for (var e = r.length - 1; r[e] >= t && r[e] > 0; ) e--;
            return e++, { fraction: t - r[e - 1], i: e };
          };
          return e(t);
        },
        Wt =
          'All shapes must be supplied as arrays of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).\nExample valid ways of supplying a shape would be:\n[[0, 0], [10, 0], [10, 10]]\n"M0,0 L10,0 L10,10Z"\n',
        Ut =
          "flubber.all() expects two arrays of equal length as arguments. Each element in both arrays should be an array of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).",
        Jt = function (t, e) {
          for (var n, r, i, o = t.length, a = 1 / 0, s = 0; s < o; s++)
            !(function (i) {
              (r = 0),
                e.forEach(function (e, n) {
                  var a = M(t[(i + n) % o], e);
                  r += a * a;
                }),
                r < a && ((a = r), (n = i));
            })(s);
          n &&
            ((i = t.splice(0, n)), t.splice.apply(t, [t.length, 0].concat(i)));
        },
        Zt = R;
      (R.deviation = function (t, e, n, r) {
        var i = e && e.length,
          o = i ? e[0] * n : t.length,
          a = Math.abs(ht(t, 0, o, n));
        if (i)
          for (var s = 0, u = e.length; s < u; s++) {
            var c = e[s] * n,
              l = s < u - 1 ? e[s + 1] * n : t.length;
            a -= Math.abs(ht(t, c, l, n));
          }
        var h = 0;
        for (s = 0; s < r.length; s += 3) {
          var d = r[s] * n,
            p = r[s + 1] * n,
            f = r[s + 2] * n;
          h += Math.abs(
            (t[d] - t[f]) * (t[p + 1] - t[d + 1]) -
              (t[d] - t[p]) * (t[f + 1] - t[d + 1])
          );
        }
        return 0 === a && 0 === h ? 0 : Math.abs((h - a) / a);
      }),
        (R.flatten = function (t) {
          for (
            var e = t[0][0].length,
              n = { vertices: [], holes: [], dimensions: e },
              r = 0,
              i = 0;
            i < t.length;
            i++
          ) {
            for (var o = 0; o < t[i].length; o++)
              for (var a = 0; a < e; a++) n.vertices.push(t[i][o][a]);
            i > 0 && ((r += t[i - 1].length), n.holes.push(r));
          }
          return n;
        });
      var Qt = function (t) {
          return t;
        },
        Xt = function (t) {
          if (null == t) return Qt;
          var e,
            n,
            r = t.scale[0],
            i = t.scale[1],
            o = t.translate[0],
            a = t.translate[1];
          return function (t, s) {
            s || (e = n = 0);
            var u = 2,
              c = t.length,
              l = new Array(c);
            for (
              l[0] = (e += t[0]) * r + o, l[1] = (n += t[1]) * i + a;
              u < c;

            )
              (l[u] = t[u]), ++u;
            return l;
          };
        },
        Yt = function (t, e) {
          for (var n, r = t.length, i = r - e; i < --r; )
            (n = t[i]), (t[i++] = t[r]), (t[r] = n);
        },
        te = function (t, e) {
          return "GeometryCollection" === e.type
            ? {
                type: "FeatureCollection",
                features: e.geometries.map(function (e) {
                  return dt(t, e);
                }),
              }
            : dt(t, e);
        },
        ee = function (t, e) {
          function n(e) {
            var n,
              r = t.arcs[e < 0 ? ~e : e],
              i = r[0];
            return (
              t.transform
                ? ((n = [0, 0]),
                  r.forEach(function (t) {
                    (n[0] += t[0]), (n[1] += t[1]);
                  }))
                : (n = r[r.length - 1]),
              e < 0 ? [n, i] : [i, n]
            );
          }
          function r(t, e) {
            for (var n in t) {
              var r = t[n];
              delete e[r.start],
                delete r.start,
                delete r.end,
                r.forEach(function (t) {
                  i[t < 0 ? ~t : t] = 1;
                }),
                s.push(r);
            }
          }
          var i = {},
            o = {},
            a = {},
            s = [],
            u = -1;
          return (
            e.forEach(function (n, r) {
              var i,
                o = t.arcs[n < 0 ? ~n : n];
              o.length < 3 &&
                !o[1][0] &&
                !o[1][1] &&
                ((i = e[++u]), (e[u] = n), (e[r] = i));
            }),
            e.forEach(function (t) {
              var e,
                r,
                i = n(t),
                s = i[0],
                u = i[1];
              if ((e = a[s]))
                if ((delete a[e.end], e.push(t), (e.end = u), (r = o[u]))) {
                  delete o[r.start];
                  var c = r === e ? e : e.concat(r);
                  o[(c.start = e.start)] = a[(c.end = r.end)] = c;
                } else o[e.start] = a[e.end] = e;
              else if ((e = o[u]))
                if (
                  (delete o[e.start], e.unshift(t), (e.start = s), (r = a[s]))
                ) {
                  delete a[r.end];
                  var l = r === e ? e : r.concat(e);
                  o[(l.start = r.start)] = a[(l.end = e.end)] = l;
                } else o[e.start] = a[e.end] = e;
              else o[((e = [t]).start = s)] = a[(e.end = u)] = e;
            }),
            r(a, o),
            r(o, a),
            e.forEach(function (t) {
              i[t < 0 ? ~t : t] || s.push([t]);
            }),
            s
          );
        },
        ne = function (t, e) {
          for (var n = 0, r = t.length; n < r; ) {
            var i = (n + r) >>> 1;
            t[i] < e ? (n = i + 1) : (r = i);
          }
          return n;
        },
        re = function (t) {
          function e(t, e) {
            t.forEach(function (t) {
              t < 0 && (t = ~t);
              var n = r[t];
              n ? n.push(e) : (r[t] = [e]);
            });
          }
          function n(t, n) {
            t.forEach(function (t) {
              e(t, n);
            });
          }
          var r = {},
            i = t.map(function () {
              return [];
            }),
            o = {
              LineString: e,
              MultiLineString: n,
              Polygon: n,
              MultiPolygon: function (t, e) {
                t.forEach(function (t) {
                  n(t, e);
                });
              },
            };
          for (var a in (t.forEach(function t(e, n) {
            "GeometryCollection" === e.type
              ? e.geometries.forEach(function (e) {
                  t(e, n);
                })
              : e.type in o && o[e.type](e.arcs, n);
          }),
          r))
            for (var s = r[a], u = s.length, c = 0; c < u; ++c)
              for (var l = c + 1; l < u; ++l) {
                var h,
                  d = s[c],
                  p = s[l];
                (h = i[d])[(a = ne(h, p))] !== p && h.splice(a, 0, p),
                  (h = i[p])[(a = ne(h, d))] !== d && h.splice(a, 0, d);
              }
          return i;
        },
        ie = function (t, e) {
          return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
        },
        oe = function (t) {
          return (
            1 === t.length &&
              (t = (function (t) {
                return function (e, n) {
                  return ie(t(e), n);
                };
              })(t)),
            {
              left: function (e, n, r, i) {
                for (
                  null == r && (r = 0), null == i && (i = e.length);
                  r < i;

                ) {
                  var o = (r + i) >>> 1;
                  t(e[o], n) < 0 ? (r = o + 1) : (i = o);
                }
                return r;
              },
              right: function (e, n, r, i) {
                for (
                  null == r && (r = 0), null == i && (i = e.length);
                  r < i;

                ) {
                  var o = (r + i) >>> 1;
                  t(e[o], n) > 0 ? (i = o) : (r = o + 1);
                }
                return r;
              },
            }
          );
        },
        ae =
          (oe(ie).right,
          Math.sqrt(50),
          Math.sqrt(10),
          Math.sqrt(2),
          function (t, e) {
            return (function (t, e) {
              for (
                var n = t.objects.triangles.geometries,
                  r = oe(function (t) {
                    return t.area;
                  }).left;
                n.length > e;

              )
                !(function () {
                  var e = n[0],
                    i = re(n)[0][0],
                    o = n[i],
                    a = ft(t, [e, o]);
                  (a.area = e.area + o.area),
                    (a.type = "Polygon"),
                    (a.arcs = a.arcs[0]),
                    n.splice(i, 1),
                    n.shift(),
                    n.splice(r(n, a.area), 0, a);
                })();
              if (e > n.length)
                throw new RangeError(
                  "Can't collapse topology into " + e + " pieces."
                );
              return te(t, t.objects.triangles).features.map(function (t) {
                return (
                  t.geometry.coordinates[0].pop(), t.geometry.coordinates[0]
                );
              });
            })(
              (function (t, e) {
                var n = {},
                  r = {
                    type: "Topology",
                    objects: {
                      triangles: { type: "GeometryCollection", geometries: [] },
                    },
                    arcs: [],
                  };
                return (
                  t.forEach(function (t) {
                    var i = [];
                    t.forEach(function (t, o) {
                      var a = t[0] < t[1] ? t.join(",") : t[1] + "," + t[0],
                        s = t.map(function (t) {
                          return e[t];
                        });
                      a in n
                        ? i.push(~n[a])
                        : (i.push((n[a] = r.arcs.length)), r.arcs.push(s));
                    }),
                      r.objects.triangles.geometries.push({
                        type: "Polygon",
                        area: Math.abs(
                          xt(
                            t.map(function (t) {
                              return e[t[0]];
                            })
                          )
                        ),
                        arcs: [i],
                      });
                  }),
                  r.objects.triangles.geometries.sort(function (t, e) {
                    return t.area - e.area;
                  }),
                  r
                );
              })(
                (function (t) {
                  for (
                    var e = Zt(
                        t.reduce(function (t, e) {
                          return t.concat([e[0]], [e[1]]);
                        }, [])
                      ),
                      n = [],
                      r = 0,
                      i = e.length;
                    r < i;
                    r += 3
                  )
                    n.push([
                      [e[r], e[r + 1]],
                      [e[r + 1], e[r + 2]],
                      [e[r + 2], e[r]],
                    ]);
                  return n;
                })(t),
                t
              ),
              e
            );
          }),
        se = function (t, e) {
          if (t.length > 8)
            return t.map(function (t, e) {
              return e;
            });
          var n = t.map(function (t) {
            return e.map(function (e) {
              return (function (t, e) {
                var n = M(B(t), B(e));
                return n * n;
              })(t, e);
            });
          });
          return (function (t, e, n) {
            var r = 1 / 0,
              i = t.map(function (t, e) {
                return e;
              });
            return (
              (function t(e, o, a) {
                void 0 === o && (o = []), void 0 === a && (a = 0);
                for (var s = 0; s < e.length; s++) {
                  var u = e.splice(s, 1),
                    c = n[u[0]][o.length];
                  a + c < r &&
                    (e.length
                      ? t(e.slice(), o.concat(u), a + c)
                      : ((r = a + c), (i = o.concat(u)))),
                    e.length && e.splice(s, 0, u[0]);
                }
              })(i),
              i
            );
          })(t, 0, n);
        };
      (t.interpolate = function (t, e, n) {
        void 0 === n && (n = {});
        var r = n.maxSegmentLength;
        void 0 === r && (r = 10);
        var i = n.string;
        void 0 === i && (i = !0);
        var o = q(F(t, r), F(e, r), i);
        return !i || ("string" != typeof t && "string" != typeof e)
          ? o
          : function (n) {
              return n < 1e-4 && "string" == typeof t
                ? t
                : 1 - n < 1e-4 && "string" == typeof e
                ? e
                : o(n);
            };
      }),
        (t.separate = vt),
        (t.combine = function (t, e, n) {
          void 0 === n && (n = {});
          var r = n.maxSegmentLength;
          void 0 === r && (r = 10);
          var i = n.string;
          void 0 === i && (i = !0);
          var o = n.single;
          void 0 === o && (o = !1);
          var a = vt(e, t, { maxSegmentLength: r, string: i, single: o });
          return o
            ? function (t) {
                return a(1 - t);
              }
            : a.map(function (t) {
                return function (e) {
                  return t(1 - e);
                };
              });
        }),
        (t.interpolateAll = function (t, e, n) {
          void 0 === n && (n = {});
          var r = n.maxSegmentLength;
          void 0 === r && (r = 10);
          var i = n.string;
          void 0 === i && (i = !0);
          var o = n.single;
          if (
            (void 0 === o && (o = !1),
            !Array.isArray(t) ||
              !Array.isArray(e) ||
              t.length !== e.length ||
              !t.length)
          )
            throw new TypeError(Ut);
          var a,
            s,
            u = function (t) {
              return F(t, r);
            },
            c = t.map(u),
            l = e.map(u);
          return (
            o
              ? (t.every(function (t) {
                  return "string" == typeof t;
                }) && (a = t.slice(0)),
                e.every(function (t) {
                  return "string" == typeof t;
                }) && (s = e.slice(0)))
              : ((a = t.slice(0)), (s = e.slice(0))),
            yt(c, l, { string: i, single: o, t0: a, t1: s, match: !1 })
          );
        }),
        (t.splitPathString = function (t) {
          return V(L(t));
        }),
        (t.toPathString = $),
        (t.fromCircle = mt),
        (t.toCircle = function (t, e, n, r, i) {
          var o = mt(e, n, r, t, i);
          return function (t) {
            return o(1 - t);
          };
        }),
        (t.fromRect = gt),
        (t.toRect = function (t, e, n, r, i, o) {
          var a = gt(e, n, r, i, t, o);
          return function (t) {
            return a(1 - t);
          };
        }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    })(e);
  },
  function (t, e, n) {
    var r, i, o;
    function a(t) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    !(function (s, u) {
      "object" == a(e) && void 0 !== t
        ? (t.exports = u(n(0)))
        : ((i = [n(0)]),
          void 0 === (o = "function" == typeof (r = u) ? r.apply(e, i) : r) ||
            (t.exports = o));
    })(0, function (t) {
      "use strict";
      function e(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var r = new (t =
          t && Object.prototype.hasOwnProperty.call(t, "default")
            ? t.default
            : t).TimeCapsule(),
        i = "@kissmybutton/scrollbar_player";
      return (function () {
        function o() {
          var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e(this, o),
            (this.clip = n.clip),
            (this.host = this.clip.props.host),
            (this.swipeAxis =
              "vertical" === (n.swipeAxis || "vertical")
                ? "clientY"
                : "clientX");
          var i = n.mode || "free";
          "free" === i
            ? ((this.host.onwheel = this.handlePlainWheel.bind(this)),
              (this.journey = r.startJourney(this.clip)),
              this.host.addEventListener(
                "touchstart",
                this._touchstart.bind(this)
              ),
              this.host.addEventListener(
                "touchmove",
                this._touchmove.bind(this)
              ))
            : "chapters" === i &&
              ((this.transitionTimeout = null),
              (this.transitionSpeed = n.transitionSpeed || 1),
              (this.easing = t.API.easings[n.easing || "easeOutQuart"]),
              (this.transitionStart = null),
              n.chapters.sort(function (t, e) {
                return t.millisecond - e.millisecond;
              }),
              (this.chapters = n.chapters),
              (this.transitioning = !1),
              (this.host.onwheel = this.handleChapterWheel.bind(this)),
              this.host.addEventListener(
                "touchstart",
                this._touchstart.bind(this)
              ),
              this.host.addEventListener(
                "touchmove",
                this._touchmove.bind(this)
              ),
              this.host.addEventListener(
                "touchend",
                this._chapterTouchend.bind(this)
              ));
          var a = 5 / (n.wheelSpeed || 5);
          this.speed = 1 / a;
          var s = { display: !0, position: "right", color: "purple" };
          void 0 !== n.progressBar && Object.assign(s, n.progressBar),
            this._setupScrollbar(s);
        }
        var a, s;
        return (
          (a = o),
          (s = [
            {
              key: "_setupScrollbar",
              value: function (t) {
                var e = this;
                if (!1 !== t.display) {
                  var n,
                    r,
                    o = document.createElement("div");
                  switch (
                    (o.setAttribute("id", "".concat(i, "-scrollbarId")),
                    t.position)
                  ) {
                    case "left":
                      (n = "left:0px; top: 0px; width: 2px; height: 0%;"),
                        (r = "height");
                      break;
                    case "right":
                      (n = "right:0px; top: 0px; width: 2px; height: 0%;"),
                        (r = "height");
                      break;
                    case "top":
                      (n = "top:0px; left: 0px; height: 2px; width: 0%;"),
                        (r = "width");
                      break;
                    case "bottom":
                      (n = "bottom:0px; left: 0px; height: 2px; width: 0%;"),
                        (r = "width");
                  }
                  o.setAttribute(
                    "style",
                    ""
                      .concat(n, " position:absolute; background: ")
                      .concat(t.color, ";")
                  ),
                    this.host.appendChild(o),
                    this.clip.subscribe(
                      "".concat(i, "_").concat(new Date().getTime()),
                      function (t) {
                        o.style[r] = "".concat(
                          (100 * t) / e.clip.duration,
                          "%"
                        );
                      }
                    );
                }
              },
            },
            {
              key: "_touchstart",
              value: function (t) {
                t.preventDefault(),
                  1 === t.touches.length &&
                    ((this.previousTouch = t.touches[0][this.swipeAxis]),
                    (this.transitioning = !1));
              },
            },
            {
              key: "_touchmove",
              value: function (t) {
                t.preventDefault(),
                  (this.transitioning = !1),
                  null !== this.transitionTimeout &&
                    clearTimeout(this.transitionTimeout);
                var e = this.previousTouch - event.touches[0][this.swipeAxis];
                (this.direction = e > 0 ? "fw" : "bw"),
                  (this.previousTouch = event.touches[0][this.swipeAxis]);
                var n = 10 * e * this.speed,
                  i = r.startJourney(this.clip),
                  o = this.clip.runTimeInfo.currentMillisecond + n;
                o < 0
                  ? ((o = 0), (n = 0))
                  : o > this.clip.duration &&
                    ((o = this.clip.duration), (n = 0)),
                  i.destination(o);
              },
            },
            {
              key: "_chapterTouchend",
              value: function (t) {
                var e = this;
                if (
                  (t.preventDefault(),
                  "fw" === this.direction &&
                    this.clip.runTimeInfo.currentMillisecond !==
                      this.clip.duration)
                ) {
                  var n = this._getNextChapter(
                    this.clip.runTimeInfo.currentMillisecond
                  );
                  this.transitionTimeout = setTimeout(function () {
                    e.transitionToChapter(n, "fw");
                  }, this.latency);
                } else if (
                  "bw" === this.direction &&
                  0 !== this.clip.runTimeInfo.currentMillisecond
                ) {
                  var r = this._getPreviousChapter(
                    this.clip.runTimeInfo.currentMillisecond
                  );
                  this.transitionTimeout = setTimeout(function () {
                    e.transitionToChapter(r, "bw");
                  }, this.latency);
                }
              },
            },
            {
              key: "_getNextChapter",
              value: function (t) {
                for (var e = 0; e < this.chapters.length; e++) {
                  var n = this.chapters[e];
                  if (n.millisecond > t) return n.millisecond;
                }
                return this.clip.duration;
              },
            },
            {
              key: "_getPreviousChapter",
              value: function (t) {
                for (var e = this.chapters.length - 1; e >= 0; e--) {
                  var n = this.chapters[e];
                  if (n.millisecond < t) return n.millisecond;
                }
                return 0;
              },
            },
            {
              key: "handleChapterWheel",
              value: function (t) {
                var e = this;
                t.preventDefault(),
                  (this.transitioning = !1),
                  null !== this.transitionTimeout &&
                    clearTimeout(this.transitionTimeout);
                var n = t.deltaY * this.speed,
                  i = r.startJourney(this.clip),
                  o = this.clip.runTimeInfo.currentMillisecond + n;
                if (
                  (o < 0
                    ? ((o = 0), (n = 0))
                    : o > this.clip.duration &&
                      ((o = this.clip.duration), (n = 0)),
                  n > 0)
                ) {
                  var a = this._getNextChapter(o);
                  this.transitionTimeout = setTimeout(function () {
                    e.transitionToChapter(a, "fw");
                  }, this.latency);
                } else if (n < 0) {
                  var s = this._getPreviousChapter(o);
                  this.transitionTimeout = setTimeout(function () {
                    e.transitionToChapter(s, "bw");
                  }, this.latency);
                }
                i.destination(o);
              },
            },
            {
              key: "transitionToChapter",
              value: function (t) {
                (this.transitioning = !0),
                  (this.transitionStart = null),
                  (this.targetMillisecond = t),
                  (this.startMillisecond = this.clip.runTimeInfo.currentMillisecond),
                  (this.journey = r.startJourney(this.clip)),
                  (this.direction =
                    this.targetMillisecond >= this.startMillisecond
                      ? "fw"
                      : "bw"),
                  window.requestAnimationFrame(this._step.bind(this));
              },
            },
            {
              key: "_step",
              value: function (t) {
                null === this.transitionStart && (this.transitionStart = t);
                var e,
                  n = t - this.transitionStart,
                  r = !1;
                if (
                  ("fw" === this.direction
                    ? (e = this.startMillisecond + n * this.transitionSpeed) >
                        this.targetMillisecond &&
                      ((e = this.targetMillisecond), (r = !0))
                    : (e = this.startMillisecond - n * this.transitionSpeed) <
                        this.targetMillisecond &&
                      ((e = this.targetMillisecond), (r = !0)),
                  !1 !== this.transitioning)
                ) {
                  var i,
                    o =
                      Math.abs(e - this.startMillisecond) /
                      Math.abs(this.targetMillisecond - this.startMillisecond);
                  (i =
                    "fw" === this.direction
                      ? this.startMillisecond +
                        this.easing(o) *
                          (this.targetMillisecond - this.startMillisecond)
                      : this.startMillisecond -
                        this.easing(o) *
                          (this.startMillisecond - this.targetMillisecond)),
                    this.journey.station(i),
                    r
                      ? this.journey.destination()
                      : window.requestAnimationFrame(this._step.bind(this));
                }
              },
            },
            {
              key: "handlePlainWheel",
              value: function (t) {
                t.preventDefault();
                var e = t.deltaY * this.speed,
                  n = this.clip.runTimeInfo.currentMillisecond + e;
                n < 0
                  ? (n = 0)
                  : n > this.clip.duration && (n = this.clip.duration),
                  this.journey.station(n);
              },
            },
          ]) && n(a.prototype, s),
          o
        );
      })();
    });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(0),
      i = n.n(r);
    const o = n(3);
    class a extends i.a.API.MonoIncident {
      onGetContext() {
        this.interpolator = o.interpolate(
          this.getInitialValue("d"),
          this.animAttributes.d
        );
      }
      getScratchValue(t, e) {
        return this.element.getAttribute("d");
      }
      onProgress(t) {
        this.element.setAttribute("d", this.interpolator(t));
      }
    }
    var s = a;
    e.default = {
      npm_name: "@kissmybutton/motorcortex-flubber",
      incidents: [{ exportable: s, name: "Flubber" }],
    };
  },
]);
