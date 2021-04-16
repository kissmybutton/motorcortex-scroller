!(function (t) {
  var e = window.webpackHotUpdate;
  window.webpackHotUpdate = function (t, n) {
    !(function (t, e) {
      if (!k[t] || !x[t]) return;
      for (var n in ((x[t] = !1), e))
        Object.prototype.hasOwnProperty.call(e, n) && (f[n] = e[n]);
      0 == --g && 0 === y && I();
    })(t, n),
      e && e(t, n);
  };
  var n,
    i = !0,
    r = "39ffb40b254a82a4b77a",
    s = {},
    a = [],
    o = [];
  function u(t) {
    var e = M[t];
    if (!e) return _;
    var i = function (i) {
        return (
          e.hot.active
            ? (M[i]
                ? -1 === M[i].parents.indexOf(t) && M[i].parents.push(t)
                : ((a = [t]), (n = i)),
              -1 === e.children.indexOf(i) && e.children.push(i))
            : (console.warn(
                "[HMR] unexpected require(" + i + ") from disposed module " + t
              ),
              (a = [])),
          _(i)
        );
      },
      r = function (t) {
        return {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return _[t];
          },
          set: function (e) {
            _[t] = e;
          },
        };
      };
    for (var s in _)
      Object.prototype.hasOwnProperty.call(_, s) &&
        "e" !== s &&
        "t" !== s &&
        Object.defineProperty(i, s, r(s));
    return (
      (i.e = function (t) {
        return (
          "ready" === h && p("prepare"),
          y++,
          _.e(t).then(e, function (t) {
            throw (e(), t);
          })
        );
        function e() {
          y--, "prepare" === h && (b[t] || O(t), 0 === y && 0 === g && I());
        }
      }),
      (i.t = function (t, e) {
        return 1 & e && (t = i(t)), _.t(t, -2 & e);
      }),
      i
    );
  }
  function l(e) {
    var i = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _selfInvalidated: !1,
      _disposeHandlers: [],
      _main: n !== e,
      active: !0,
      accept: function (t, e) {
        if (void 0 === t) i._selfAccepted = !0;
        else if ("function" == typeof t) i._selfAccepted = t;
        else if ("object" == typeof t)
          for (var n = 0; n < t.length; n++)
            i._acceptedDependencies[t[n]] = e || function () {};
        else i._acceptedDependencies[t] = e || function () {};
      },
      decline: function (t) {
        if (void 0 === t) i._selfDeclined = !0;
        else if ("object" == typeof t)
          for (var e = 0; e < t.length; e++) i._declinedDependencies[t[e]] = !0;
        else i._declinedDependencies[t] = !0;
      },
      dispose: function (t) {
        i._disposeHandlers.push(t);
      },
      addDisposeHandler: function (t) {
        i._disposeHandlers.push(t);
      },
      removeDisposeHandler: function (t) {
        var e = i._disposeHandlers.indexOf(t);
        e >= 0 && i._disposeHandlers.splice(e, 1);
      },
      invalidate: function () {
        switch (((this._selfInvalidated = !0), h)) {
          case "idle":
            ((f = {})[e] = t[e]), p("ready");
            break;
          case "ready":
            A(e);
            break;
          case "prepare":
          case "check":
          case "dispose":
          case "apply":
            (v = v || []).push(e);
        }
      },
      check: C,
      apply: P,
      status: function (t) {
        if (!t) return h;
        c.push(t);
      },
      addStatusHandler: function (t) {
        c.push(t);
      },
      removeStatusHandler: function (t) {
        var e = c.indexOf(t);
        e >= 0 && c.splice(e, 1);
      },
      data: s[e],
    };
    return (n = void 0), i;
  }
  var c = [],
    h = "idle";
  function p(t) {
    h = t;
    for (var e = 0; e < c.length; e++) c[e].call(null, t);
  }
  var d,
    f,
    m,
    v,
    g = 0,
    y = 0,
    b = {},
    x = {},
    k = {};
  function w(t) {
    return +t + "" === t ? +t : t;
  }
  function C(t) {
    if ("idle" !== h) throw new Error("check() is only allowed in idle status");
    return (
      (i = t),
      p("check"),
      ((e = 1e4),
      (e = e || 1e4),
      new Promise(function (t, n) {
        if ("undefined" == typeof XMLHttpRequest)
          return n(new Error("No browser support"));
        try {
          var i = new XMLHttpRequest(),
            s = _.p + "" + r + ".hot-update.json";
          i.open("GET", s, !0), (i.timeout = e), i.send(null);
        } catch (t) {
          return n(t);
        }
        i.onreadystatechange = function () {
          if (4 === i.readyState)
            if (0 === i.status)
              n(new Error("Manifest request to " + s + " timed out."));
            else if (404 === i.status) t();
            else if (200 !== i.status && 304 !== i.status)
              n(new Error("Manifest request to " + s + " failed."));
            else {
              try {
                var e = JSON.parse(i.responseText);
              } catch (t) {
                return void n(t);
              }
              t(e);
            }
        };
      })).then(function (t) {
        if (!t) return p(E() ? "ready" : "idle"), null;
        (x = {}), (b = {}), (k = t.c), (m = t.h), p("prepare");
        var e = new Promise(function (t, e) {
          d = { resolve: t, reject: e };
        });
        f = {};
        return O(0), "prepare" === h && 0 === y && 0 === g && I(), e;
      })
    );
    var e;
  }
  function O(t) {
    k[t]
      ? ((x[t] = !0),
        g++,
        (function (t) {
          var e = document.createElement("script");
          (e.charset = "utf-8"),
            (e.src = _.p + "" + t + "." + r + ".hot-update.js"),
            document.head.appendChild(e);
        })(t))
      : (b[t] = !0);
  }
  function I() {
    p("ready");
    var t = d;
    if (((d = null), t))
      if (i)
        Promise.resolve()
          .then(function () {
            return P(i);
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
          Object.prototype.hasOwnProperty.call(f, n) && e.push(w(n));
        t.resolve(e);
      }
  }
  function P(e) {
    if ("ready" !== h)
      throw new Error("apply() is only allowed in ready status");
    return (function e(i) {
      var o, u, l, c, h;
      function d(t) {
        for (
          var e = [t],
            n = {},
            i = e.map(function (t) {
              return { chain: [t], id: t };
            });
          i.length > 0;

        ) {
          var r = i.pop(),
            s = r.id,
            a = r.chain;
          if ((c = M[s]) && (!c.hot._selfAccepted || c.hot._selfInvalidated)) {
            if (c.hot._selfDeclined)
              return { type: "self-declined", chain: a, moduleId: s };
            if (c.hot._main)
              return { type: "unaccepted", chain: a, moduleId: s };
            for (var o = 0; o < c.parents.length; o++) {
              var u = c.parents[o],
                l = M[u];
              if (l) {
                if (l.hot._declinedDependencies[s])
                  return {
                    type: "declined",
                    chain: a.concat([u]),
                    moduleId: s,
                    parentId: u,
                  };
                -1 === e.indexOf(u) &&
                  (l.hot._acceptedDependencies[s]
                    ? (n[u] || (n[u] = []), g(n[u], [s]))
                    : (delete n[u],
                      e.push(u),
                      i.push({ chain: a.concat([u]), id: u })));
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
      function g(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          -1 === t.indexOf(i) && t.push(i);
        }
      }
      E();
      var y = {},
        b = [],
        x = {},
        C = function () {
          console.warn(
            "[HMR] unexpected require(" + I.moduleId + ") to disposed module"
          );
        };
      for (var O in f)
        if (Object.prototype.hasOwnProperty.call(f, O)) {
          var I;
          (h = w(O)), (I = f[O] ? d(h) : { type: "disposed", moduleId: O });
          var P = !1,
            A = !1,
            T = !1,
            S = "";
          switch (
            (I.chain && (S = "\nUpdate propagation: " + I.chain.join(" -> ")),
            I.type)
          ) {
            case "self-declined":
              i.onDeclined && i.onDeclined(I),
                i.ignoreDeclined ||
                  (P = new Error(
                    "Aborted because of self decline: " + I.moduleId + S
                  ));
              break;
            case "declined":
              i.onDeclined && i.onDeclined(I),
                i.ignoreDeclined ||
                  (P = new Error(
                    "Aborted because of declined dependency: " +
                      I.moduleId +
                      " in " +
                      I.parentId +
                      S
                  ));
              break;
            case "unaccepted":
              i.onUnaccepted && i.onUnaccepted(I),
                i.ignoreUnaccepted ||
                  (P = new Error(
                    "Aborted because " + h + " is not accepted" + S
                  ));
              break;
            case "accepted":
              i.onAccepted && i.onAccepted(I), (A = !0);
              break;
            case "disposed":
              i.onDisposed && i.onDisposed(I), (T = !0);
              break;
            default:
              throw new Error("Unexception type " + I.type);
          }
          if (P) return p("abort"), Promise.reject(P);
          if (A)
            for (h in ((x[h] = f[h]),
            g(b, I.outdatedModules),
            I.outdatedDependencies))
              Object.prototype.hasOwnProperty.call(I.outdatedDependencies, h) &&
                (y[h] || (y[h] = []), g(y[h], I.outdatedDependencies[h]));
          T && (g(b, [I.moduleId]), (x[h] = C));
        }
      var D,
        j = [];
      for (u = 0; u < b.length; u++)
        (h = b[u]),
          M[h] &&
            M[h].hot._selfAccepted &&
            x[h] !== C &&
            !M[h].hot._selfInvalidated &&
            j.push({
              module: h,
              parents: M[h].parents.slice(),
              errorHandler: M[h].hot._selfAccepted,
            });
      p("dispose"),
        Object.keys(k).forEach(function (t) {
          !1 === k[t] &&
            (function (t) {
              delete installedChunks[t];
            })(t);
        });
      var V,
        L,
        N = b.slice();
      for (; N.length > 0; )
        if (((h = N.pop()), (c = M[h]))) {
          var $ = {},
            B = c.hot._disposeHandlers;
          for (l = 0; l < B.length; l++) (o = B[l])($);
          for (
            s[h] = $, c.hot.active = !1, delete M[h], delete y[h], l = 0;
            l < c.children.length;
            l++
          ) {
            var F = M[c.children[l]];
            F && (D = F.parents.indexOf(h)) >= 0 && F.parents.splice(D, 1);
          }
        }
      for (h in y)
        if (Object.prototype.hasOwnProperty.call(y, h) && (c = M[h]))
          for (L = y[h], l = 0; l < L.length; l++)
            (V = L[l]),
              (D = c.children.indexOf(V)) >= 0 && c.children.splice(D, 1);
      p("apply"), void 0 !== m && ((r = m), (m = void 0));
      for (h in ((f = void 0), x))
        Object.prototype.hasOwnProperty.call(x, h) && (t[h] = x[h]);
      var R = null;
      for (h in y)
        if (Object.prototype.hasOwnProperty.call(y, h) && (c = M[h])) {
          L = y[h];
          var q = [];
          for (u = 0; u < L.length; u++)
            if (((V = L[u]), (o = c.hot._acceptedDependencies[V]))) {
              if (-1 !== q.indexOf(o)) continue;
              q.push(o);
            }
          for (u = 0; u < q.length; u++) {
            o = q[u];
            try {
              o(L);
            } catch (t) {
              i.onErrored &&
                i.onErrored({
                  type: "accept-errored",
                  moduleId: h,
                  dependencyId: L[u],
                  error: t,
                }),
                i.ignoreErrored || R || (R = t);
            }
          }
        }
      for (u = 0; u < j.length; u++) {
        var z = j[u];
        (h = z.module), (a = z.parents), (n = h);
        try {
          _(h);
        } catch (t) {
          if ("function" == typeof z.errorHandler)
            try {
              z.errorHandler(t);
            } catch (e) {
              i.onErrored &&
                i.onErrored({
                  type: "self-accept-error-handler-errored",
                  moduleId: h,
                  error: e,
                  originalError: t,
                }),
                i.ignoreErrored || R || (R = e),
                R || (R = t);
            }
          else
            i.onErrored &&
              i.onErrored({
                type: "self-accept-errored",
                moduleId: h,
                error: t,
              }),
              i.ignoreErrored || R || (R = t);
        }
      }
      if (R) return p("fail"), Promise.reject(R);
      if (v)
        return e(i).then(function (t) {
          return (
            b.forEach(function (e) {
              t.indexOf(e) < 0 && t.push(e);
            }),
            t
          );
        });
      return (
        p("idle"),
        new Promise(function (t) {
          t(b);
        })
      );
    })((e = e || {}));
  }
  function E() {
    if (v) return f || (f = {}), v.forEach(A), (v = void 0), !0;
  }
  function A(e) {
    Object.prototype.hasOwnProperty.call(f, e) || (f[e] = t[e]);
  }
  var M = {};
  function _(e) {
    if (M[e]) return M[e].exports;
    var n = (M[e] = {
      i: e,
      l: !1,
      exports: {},
      hot: l(e),
      parents: ((o = a), (a = []), o),
      children: [],
    });
    return t[e].call(n.exports, n, n.exports, u(e)), (n.l = !0), n.exports;
  }
  (_.m = t),
    (_.c = M),
    (_.d = function (t, e, n) {
      _.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (_.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (_.t = function (t, e) {
      if ((1 & e && (t = _(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (_.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          _.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (_.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return _.d(e, "a", e), e;
    }),
    (_.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (_.p = ""),
    (_.h = function () {
      return r;
    }),
    u(3)((_.s = 3));
})([
  function (t, e, n) {
    !(function (t, e, n) {
      "use strict";
      function i(t) {
        return t && "object" == typeof t && "default" in t ? t : { default: t };
      }
      var r = i(e),
        s = i(n);
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
      function o(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function l(t, e, n) {
        return e && u(t.prototype, e), n && u(t, n), t;
      }
      function c(t, e, n) {
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
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(n), !0).forEach(function (e) {
                c(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function d(t, e) {
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
      function f(t) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function m(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function v(t, e) {
        return !e || ("object" != typeof e && "function" != typeof e)
          ? m(t)
          : e;
      }
      function g(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = f(t);
          if (e) {
            var r = f(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return v(this, n);
        };
      }
      function y(t, e) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t));

        );
        return t;
      }
      function b(t, e, n) {
        return (b =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var i = y(t, e);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, e);
                  return r.get ? r.get.call(n) : r.value;
                }
              })(t, e, n || t);
      }
      function x(t, e, n, i) {
        return (x =
          "undefined" != typeof Reflect && Reflect.set
            ? Reflect.set
            : function (t, e, n, i) {
                var r,
                  s = y(t, e);
                if (s) {
                  if ((r = Object.getOwnPropertyDescriptor(s, e)).set)
                    return r.set.call(i, n), !0;
                  if (!r.writable) return !1;
                }
                if ((r = Object.getOwnPropertyDescriptor(i, e))) {
                  if (!r.writable) return !1;
                  (r.value = n), Object.defineProperty(i, e, r);
                } else c(i, e, n);
                return !0;
              })(t, e, n, i);
      }
      function k(t, e, n, i, r) {
        if (!x(t, e, n, i || t) && r) throw new Error("failed to set property");
        return n;
      }
      function w(t, e) {
        return (
          O(t) ||
          (function (t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
              var n = [],
                i = !0,
                r = !1,
                s = void 0;
              try {
                for (
                  var a, o = t[Symbol.iterator]();
                  !(i = (a = o.next()).done) &&
                  (n.push(a.value), !e || n.length !== e);
                  i = !0
                );
              } catch (t) {
                (r = !0), (s = t);
              } finally {
                try {
                  i || null == o.return || o.return();
                } finally {
                  if (r) throw s;
                }
              }
              return n;
            }
          })(t, e) ||
          P(t, e) ||
          A()
        );
      }
      function C(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return E(t);
          })(t) ||
          I(t) ||
          P(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function O(t) {
        if (Array.isArray(t)) return t;
      }
      function I(t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      }
      function P(t, e) {
        if (t) {
          if ("string" == typeof t) return E(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? E(t, e)
              : void 0
          );
        }
      }
      function E(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      function A() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function M(t) {
        var e = (function (t, e) {
          if ("object" != typeof t || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e);
            if ("object" != typeof i) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t, "string");
        return "symbol" == typeof e ? e : String(e);
      }
      function _(t, e, n, i) {
        var r = (function () {
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
              ["method", "field"].forEach(function (i) {
                e.forEach(function (e) {
                  var r = e.placement;
                  if (e.kind === i && ("static" === r || "prototype" === r)) {
                    var s = "static" === r ? t : n;
                    this.defineClassElement(s, e);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (t, e) {
              var n = e.descriptor;
              if ("field" === e.kind) {
                var i = e.initializer;
                n = {
                  enumerable: n.enumerable,
                  writable: n.writable,
                  configurable: n.configurable,
                  value: void 0 === i ? void 0 : i.call(t),
                };
              }
              Object.defineProperty(t, e.key, n);
            },
            decorateClass: function (t, e) {
              var n = [],
                i = [],
                r = { static: [], prototype: [], own: [] };
              if (
                (t.forEach(function (t) {
                  this.addElementPlacement(t, r);
                }, this),
                t.forEach(function (t) {
                  if (!D(t)) return n.push(t);
                  var e = this.decorateElement(t, r);
                  n.push(e.element),
                    n.push.apply(n, e.extras),
                    i.push.apply(i, e.finishers);
                }, this),
                !e)
              )
                return { elements: n, finishers: i };
              var s = this.decorateConstructor(n, e);
              return i.push.apply(i, s.finishers), (s.finishers = i), s;
            },
            addElementPlacement: function (t, e, n) {
              var i = e[t.placement];
              if (!n && -1 !== i.indexOf(t.key))
                throw new TypeError("Duplicated element (" + t.key + ")");
              i.push(t.key);
            },
            decorateElement: function (t, e) {
              for (
                var n = [], i = [], r = t.decorators, s = r.length - 1;
                s >= 0;
                s--
              ) {
                var a = e[t.placement];
                a.splice(a.indexOf(t.key), 1);
                var o = this.fromElementDescriptor(t),
                  u = this.toElementFinisherExtras((0, r[s])(o) || o);
                (t = u.element),
                  this.addElementPlacement(t, e),
                  u.finisher && i.push(u.finisher);
                var l = u.extras;
                if (l) {
                  for (var c = 0; c < l.length; c++)
                    this.addElementPlacement(l[c], e);
                  n.push.apply(n, l);
                }
              }
              return { element: t, finishers: i, extras: n };
            },
            decorateConstructor: function (t, e) {
              for (var n = [], i = e.length - 1; i >= 0; i--) {
                var r = this.fromClassDescriptor(t),
                  s = this.toClassDescriptor((0, e[i])(r) || r);
                if (
                  (void 0 !== s.finisher && n.push(s.finisher),
                  void 0 !== s.elements)
                ) {
                  t = s.elements;
                  for (var a = 0; a < t.length - 1; a++)
                    for (var o = a + 1; o < t.length; o++)
                      if (
                        t[a].key === t[o].key &&
                        t[a].placement === t[o].placement
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
              var e;
              if (void 0 !== t)
                return ((e = t), O(e) || I(e) || P(e) || A()).map(function (t) {
                  var e = this.toElementDescriptor(t);
                  return (
                    this.disallowProperty(
                      t,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(t, "extras", "An element descriptor"),
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
              var n = M(t.key),
                i = String(t.placement);
              if ("static" !== i && "prototype" !== i && "own" !== i)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    i +
                    '"'
                );
              var r = t.descriptor;
              this.disallowProperty(t, "elements", "An element descriptor");
              var s = {
                kind: e,
                key: n,
                placement: i,
                descriptor: Object.assign({}, r),
              };
              return (
                "field" !== e
                  ? this.disallowProperty(
                      t,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      r,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      r,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      r,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (s.initializer = t.initializer)),
                s
              );
            },
            toElementFinisherExtras: function (t) {
              return {
                element: this.toElementDescriptor(t),
                finisher: V(t, "finisher"),
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
              var n = V(t, "finisher");
              return {
                elements: this.toElementDescriptors(t.elements),
                finisher: n,
              };
            },
            runClassFinishers: function (t, e) {
              for (var n = 0; n < e.length; n++) {
                var i = (0, e[n])(t);
                if (void 0 !== i) {
                  if ("function" != typeof i)
                    throw new TypeError("Finishers must return a constructor.");
                  t = i;
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
        if (i) for (var s = 0; s < i.length; s++) r = i[s](r);
        var a = e(function (t) {
            r.initializeInstanceElements(t, o.elements);
          }, n),
          o = r.decorateClass(
            (function (t) {
              for (
                var e = [],
                  n = function (t) {
                    return (
                      "method" === t.kind &&
                      t.key === s.key &&
                      t.placement === s.placement
                    );
                  },
                  i = 0;
                i < t.length;
                i++
              ) {
                var r,
                  s = t[i];
                if ("method" === s.kind && (r = e.find(n)))
                  if (j(s.descriptor) || j(r.descriptor)) {
                    if (D(s) || D(r))
                      throw new ReferenceError(
                        "Duplicated methods (" + s.key + ") can't be decorated."
                      );
                    r.descriptor = s.descriptor;
                  } else {
                    if (D(s)) {
                      if (D(r))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            s.key +
                            ")."
                        );
                      r.decorators = s.decorators;
                    }
                    S(s, r);
                  }
                else e.push(s);
              }
              return e;
            })(a.d.map(T)),
            t
          );
        return (
          r.initializeClassElements(a.F, o.elements),
          r.runClassFinishers(a.F, o.finishers)
        );
      }
      function T(t) {
        var e,
          n = M(t.key);
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
        var i = {
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
          t.decorators && (i.decorators = t.decorators),
          "field" === t.kind && (i.initializer = t.value),
          i
        );
      }
      function S(t, e) {
        void 0 !== t.descriptor.get
          ? (e.descriptor.get = t.descriptor.get)
          : (e.descriptor.set = t.descriptor.set);
      }
      function D(t) {
        return t.decorators && t.decorators.length;
      }
      function j(t) {
        return void 0 !== t && !(void 0 === t.value && void 0 === t.writable);
      }
      function V(t, e) {
        var n = t[e];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + e + "' to be a function");
        return n;
      }
      var L = [
          {
            key: "info",
            style: "color: #666;",
            level: 5,
            consoleMethod: "log",
          },
          {
            key: "notice",
            style: "background: rgba(0, 0, 0, 0.8); color:white; padding:8px;",
            level: 4,
            consoleMethod: "log",
          },
          {
            key: "warning",
            style: "color: black; background: orange;",
            level: 2,
            consoleMethod: "warn",
          },
          {
            key: "error",
            style: "color: black; background: red;",
            level: 1,
            consoleMethod: "error",
          },
        ],
        N = "data-motorcortex2-id",
        $ = "closed",
        B = "MotorCortex",
        F = {
          staggerPreface: "@stagger",
          mathExpPreface: "@expression",
          attibuteValue: "@attribute",
          patternValue: "@pattern",
          dynamicDuration: "dynamic",
          totalElements: "total",
          elementIndex: "index",
          initParams: "initParams",
        };
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      var R = new window.AudioContext();
      function q(t) {
        return "number" == typeof t && isFinite(t);
      }
      function z(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      }
      function G(t) {
        return "string" == typeof t || t instanceof String;
      }
      function H(t) {
        return "object" === a(t);
      }
      function J(t) {
        return t && "[object Function]" === {}.toString.call(t);
      }
      function K(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      var W = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi");
      function U(t) {
        if (null === t && void 0 === t)
          return { result: !0, analysis: { width: null, height: null } };
        if (!H(t))
          return {
            result: !1,
            errors: [
              'originalDims should be an object containing the "width" and "height" keys',
            ],
          };
        if (
          !Object.prototype.hasOwnProperty.call(t, "width") ||
          !Object.prototype.hasOwnProperty.call(t, "height")
        )
          return {
            result: !1,
            errors: [
              'originalDims should be an object containing both the "width" and "height" keys',
            ],
          };
        if (!G(t.width))
          return {
            result: !1,
            errors: ["originalDims.width should be defined either on px or %."],
          };
        if (!G(t.height))
          return {
            result: !1,
            errors: [
              "originalDims.height should be defined either on px or %.",
            ],
          };
        var e = t.width.match(W)[0],
          n = t.width.substring(e.length);
        if (!q(Number(e)) || ("%" !== n && "px" !== n))
          return {
            result: !1,
            errors: ["originalDims.width should be defined either on px or %."],
          };
        var i = t.height.match(W)[0],
          r = t.height.substring(i.length);
        return !q(Number(i)) || ("%" != r && "px" != r)
          ? {
              result: !1,
              errors: [
                "originalDims.heigth should be defined either on px or %.",
              ],
            }
          : { result: !0, analysis: X(t) };
      }
      function X(t) {
        var e = null,
          n = null;
        if (H(t) && null != t) {
          if (Object.prototype.hasOwnProperty.call(t, "width") && G(t.width)) {
            var i = t.width.match(W)[0],
              r = t.width.substring(i.length);
            !q(Number(i)) ||
              ("%" !== r && "px" !== r) ||
              (e = { number: Number(i), unit: r });
          }
          if (
            Object.prototype.hasOwnProperty.call(t, "height") &&
            G(t.height)
          ) {
            var s = t.height.match(W)[0],
              a = t.height.substring(s.length);
            !q(Number(s)) ||
              ("%" !== a && "px" !== a) ||
              (n = { number: Number(s), unit: a });
          }
        }
        return { width: e, height: n };
      }
      function Q(t) {
        var e = t.replace(/ /g, "");
        return /.*\((.*)\).*/.exec(e)[1].split(",");
      }
      function Z(t, e) {
        return Math.round(t / e) * e;
      }
      function Y(t) {
        var e = t.split("___");
        return { mcid: e[0], attribute: e[1] };
      }
      function tt() {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1);
      }
      function et() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = t ? "_" : "-";
        return ""
          .concat(tt())
          .concat(tt())
          .concat(e)
          .concat(tt())
          .concat(e)
          .concat(tt());
      }
      function nt(t, e) {
        return "".concat(t).concat("___").concat(e);
      }
      function it(t, e, n) {
        for (var i = e.split("."), r = t, s = 0; s < i.length - 1; s++) {
          if (!Object.prototype.hasOwnProperty.call(r, i[s])) return !1;
          r = r[i[s]];
        }
        return (
          !!Object.prototype.hasOwnProperty.call(r, i[i.length - 1]) &&
          ((r[i[i.length - 1]] = n), !0)
        );
      }
      var rt = new ((function () {
        function t(e) {
          o(this, t);
          var n = 2;
          e &&
            Object.prototype.hasOwnProperty.call(e, "logLevel") &&
            (n = e.logLevel);
          for (var i = 0; i < L.length; i++) {
            var r = L[i];
            n >= r.level
              ? (this[r.key] = window.console[r.consoleMethod].bind(
                  window.console,
                  "MotorCortex - ".concat(r.key, ": ")
                ))
              : (this[r.key] = function () {});
          }
          this.log =
            n >= 3
              ? window.console.log.bind(window.console, "MotorCortex - ")
              : function () {};
        }
        return (
          l(t, [
            {
              key: "validateProps",
              value: function (t, e, n) {
                var i = e(t);
                if (i.length > 0) {
                  for (
                    var r = "Error on plugin's \""
                        .concat(n.plugin_npm_name, '" "')
                        .concat(
                          n.ClassName,
                          '" instantiation. Errors (op props):'
                        ),
                      s = 0;
                    s < i.length;
                    s++
                  )
                    r += "\n - "
                      .concat(i[s].message, ". ")
                      .concat(i[s].actual, " provided");
                  return this.error(r), { result: !1, errors: i };
                }
                return { result: !0 };
              },
            },
            {
              key: "getElementByMCID",
              value: function (t, e) {
                return t.rootElement.querySelectorAll(
                  "[".concat(N, '="').concat(e, '"]')
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
                for (var i = [], r = 0; r < t.length; r++) {
                  var s = t[r],
                    a = s.parentMillisecond - n;
                  (a = a * e + n),
                    1 !== e &&
                      i.push({
                        id: s.incident.id,
                        start: a,
                        end: a + s.incident.duration * e,
                        startDelta: a - s.millisecond,
                      });
                }
                return i;
              },
            },
          ]),
          t
        );
      })())();
      function st(t) {
        return t.result
          ? { result: !0, execute: t.execute }
          : { result: !1, errors: t.errors };
      }
      var at = (function () {
          function t(e) {
            o(this, t),
              (this.runTimeInfo = e.runTimeInfo),
              (this.context = e.context),
              this.onInitialise(),
              (this.getIncidentById = e.getIncidentById);
          }
          return (
            l(
              t,
              [
                { key: "onInitialise", value: function () {} },
                {
                  key: "_resize",
                  value: function () {
                    rt.log("Please overwite the _resize method of the Channel");
                  },
                },
                {
                  key: "addIncidents",
                  value: function (t) {
                    return st(this.checkAddition(t));
                  },
                },
                {
                  key: "editIncidents",
                  value: function (t, e) {
                    return st(this.checkEdit(t, e));
                  },
                },
                {
                  key: "removeIncidents",
                  value: function (t) {
                    var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return st(this.checkDelete(t, e));
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
        })(),
        ot = "up",
        ut = "down",
        lt = "native.tree.bypass",
        ct = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            o(this, t),
              (this.parentNode = null),
              (this.isNode = !1),
              Object.prototype.hasOwnProperty.call(e, "id")
                ? (this.id = e.id)
                : (this.id = et()),
              (this.props = e);
          }
          return (
            l(t, [
              {
                key: "name",
                get: function () {
                  return Object.prototype.hasOwnProperty.call(
                    this.props,
                    "name"
                  )
                    ? this.props.name
                    : null;
                },
                set: function (t) {
                  this.props.name = t;
                },
              },
              {
                key: "delay",
                get: function () {
                  return Object.prototype.hasOwnProperty.call(
                    this.props,
                    "delay"
                  )
                    ? this.props.delay
                    : 0;
                },
                set: function (t) {
                  0 !== t && (this.props.delay = t);
                },
              },
              {
                key: "hiatus",
                get: function () {
                  return Object.prototype.hasOwnProperty.call(
                    this.props,
                    "hiatus"
                  )
                    ? this.props.hiatus
                    : 0;
                },
                set: function (t) {
                  0 !== t && (this.props.hiatus = t);
                },
              },
              {
                key: "repeats",
                get: function () {
                  return Object.prototype.hasOwnProperty.call(
                    this.props,
                    "repeats"
                  )
                    ? this.props.repeats
                    : 1;
                },
                set: function (t) {
                  this.props.repeats = t;
                },
              },
              {
                key: "duration",
                get: function () {
                  return (
                    this.repeats *
                    (this.delay + this.props.duration + this.hiatus)
                  );
                },
                set: function (t) {
                  var e = t / this.duration;
                  (this.props.duration *= e),
                    (this.hiatus *= e),
                    (this.delay *= e);
                },
              },
              {
                key: "setNewDuration",
                value: function (t) {
                  (this.duration = t),
                    this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                      selfExecute: !1,
                      direction: ot,
                    });
                },
              },
              {
                key: "systoleDiastole",
                value: function (t) {
                  this.duration *= t;
                },
              },
              {
                key: "hasParent",
                get: function () {
                  return null !== this.parentNode;
                },
              },
              {
                key: "attachToNode",
                value: function (t) {
                  this.parentNode = t;
                },
              },
              {
                key: "detachFromParent",
                value: function () {
                  this.parentNode = null;
                },
              },
              {
                key: "putMessageOnPipe",
                value: function (t, e, n) {
                  var i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                  if (
                    (Object.prototype.hasOwnProperty.call(i, "direction") ||
                      (i.direction = ut),
                    i.direction !== ut ||
                      Object.prototype.hasOwnProperty.call(
                        i,
                        "positionDelta"
                      ) ||
                      (i.positionDelta = 0),
                    i.selfExecute)
                  ) {
                    var r = "handle".concat(K(t)),
                      s = "function" == typeof this[r];
                    if (s) {
                      var a = this[r](n, e);
                      if (a !== lt) {
                        var o = { response: a, responder: this };
                        return i.direction === ot
                          ? o
                          : [
                              p(
                                p({}, o),
                                {},
                                { positionDelta: i.positionDelta }
                              ),
                            ];
                      }
                    }
                  }
                  return i.direction === ot
                    ? this.hasParent
                      ? this.parentNode.putMessageOnPipe(t, e, n, {
                          selfExecute: !0,
                          direction: ot,
                        })
                      : { response: !1, responder: null }
                    : [];
                },
              },
              {
                key: "bypass",
                value: function () {
                  return lt;
                },
              },
              {
                key: "positionOnPyramidion",
                get: function () {
                  return this.getPositionOnPyramidion();
                },
              },
              {
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
                      { selfExecute: !1, direction: ot }
                    );
                    return e.response;
                  }
                  return t;
                },
              },
            ]),
            t
          );
        })(),
        ht = "Leaf has already been attached to another Node",
        pt = "Negative positioning of childs on nodes is not allowed",
        dt = "The Leaf with the requested id couldn't be found on the Tree",
        ft = (function (t) {
          d(n, t);
          var e = g(n);
          function n() {
            var t,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            return (
              o(this, n),
              ((t = e.call(this, i)).isNode = !0),
              (t.children = {}),
              (t.calculatedDuration = 0),
              t
            );
          }
          return (
            l(n, [
              {
                key: "duration",
                get: function () {
                  return (
                    this.repeats *
                    (this.delay + this.calculatedDuration + this.hiatus)
                  );
                },
                set: function (t) {
                  if (0 !== this.duration) {
                    var e = t / this.duration;
                    for (var n in ((this.calculatedDuration *= e),
                    (this.hiatus *= e),
                    (this.delay *= e),
                    this.children)) {
                      var i = this.children[n];
                      this.editPosition(i.id, i.position * e, !0),
                        i.leaf.systoleDiastole(e);
                    }
                  }
                },
              },
              {
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
                    ((this.calculatedDuration = t), !0)
                  );
                },
              },
              {
                key: "handleRecalcDuration",
                value: function (t, e) {
                  return (
                    !this._calculateDuration() ||
                    this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                      selfExecute: !1,
                      direction: ot,
                    })
                  );
                },
              },
              {
                key: "getLeafById",
                value: function (t) {
                  var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  if (Object.prototype.hasOwnProperty.call(this.children, t))
                    return this.children[t].leaf;
                  if (e) return null;
                  for (var n in this.children) {
                    var i = this.children[n].leaf;
                    if (i.isNode) {
                      var r = i.getLeafById(t);
                      if (null != r) return r;
                    }
                  }
                  return null;
                },
              },
              {
                key: "getLeafPosition",
                value: function (t) {
                  if (Object.prototype.hasOwnProperty.call(this.children, t))
                    return this.children[t].position;
                  var e = this.putMessageOnPipe(
                    "getLeafPosition",
                    { id: t },
                    "Groups",
                    { selfExecute: !1, direction: ut }
                  );
                  return e.length > 0
                    ? e[0].positionDelta + e[0].response
                    : void 0;
                },
              },
              {
                key: "handleGetLeafPosition",
                value: function (t, e) {
                  return this.getLeafPosition(e.id);
                },
              },
              {
                key: "checkAddition",
                value: function (t, e) {
                  return t.hasParent
                    ? { result: !1, reason: ht }
                    : e < 0
                    ? { result: !1, reason: pt }
                    : { result: !0 };
                },
              },
              {
                key: "addChild",
                value: function (t, e) {
                  return t.hasParent
                    ? { result: !1, reason: ht }
                    : ((this.children[t.id] = {
                        id: t.id,
                        leaf: t,
                        position: e,
                      }),
                      t.attachToNode(this),
                      this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                        selfExecute: !0,
                        direction: ot,
                      }),
                      { result: !0 });
                },
              },
              {
                key: "checkRemoveChild",
                value: function (t) {
                  return Object.prototype.hasOwnProperty.call(this.children, t)
                    ? { result: !0 }
                    : { result: !1, reason: dt };
                },
              },
              {
                key: "removeChild",
                value: function (t) {
                  return (
                    this.children[t].leaf.detachFromParent(),
                    delete this.children[t],
                    this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                      selfExecute: !0,
                      direction: ot,
                    }),
                    { result: !0 }
                  );
                },
              },
              {
                key: "checkEditPosition",
                value: function (t, e) {
                  return e < 0
                    ? { result: !1, reason: pt }
                    : Object.prototype.hasOwnProperty.call(this.children, t)
                    ? { result: !0 }
                    : { result: !1, reason: dt };
                },
              },
              {
                key: "editPosition",
                value: function (t, e) {
                  var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                  if (Object.prototype.hasOwnProperty.call(this.children, t))
                    return (
                      (this.children[t].position = e),
                      n ||
                        this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                          selfExecute: !0,
                          direction: ot,
                        }),
                      { result: !0 }
                    );
                },
              },
              {
                key: "putMessageOnPipe",
                value: function (t, e, i) {
                  var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                  if (
                    (Object.prototype.hasOwnProperty.call(r, "direction") ||
                      (r.direction = ut),
                    r.direction !== ut ||
                      Object.prototype.hasOwnProperty.call(
                        r,
                        "positionDelta"
                      ) ||
                      (r.positionDelta = 0),
                    r.direction === ot)
                  )
                    return b(f(n.prototype), "putMessageOnPipe", this).call(
                      this,
                      t,
                      e,
                      i,
                      r
                    );
                  var s = b(f(n.prototype), "putMessageOnPipe", this).call(
                    this,
                    t,
                    e,
                    i,
                    r
                  );
                  if (s.length > 0) return s;
                  for (var a in this.children) {
                    var o = this.children[a].leaf,
                      u = p(
                        p({}, r),
                        {},
                        {
                          selfExecute: !0,
                          positionDelta:
                            r.positionDelta + this.children[a].position,
                        }
                      );
                    s.push.apply(s, C(o.putMessageOnPipe(t, e, i, u)));
                  }
                  return s;
                },
              },
              {
                key: "handleGetPositionOnPyramidion",
                value: function (t, e) {
                  var n = e.delta + this.getLeafPosition(e.id);
                  return this.getPositionOnPyramidion(n);
                },
              },
            ]),
            n
          );
        })(ct);
      function mt(t) {
        t.descriptor.value = function (t) {
          void 0 === this.blockID && (this.blockID = et()),
            this.DescriptiveIncident.putMessageOnPipe(
              "setBlock",
              {
                id: this.blockID,
                description: t,
                incidentId: this.DescriptiveIncident.id,
                realIncidentId: this.id,
              },
              "rootClip",
              { selfExecute: !0, direction: ot }
            );
        };
      }
      function vt(t) {
        t.descriptor.value = function () {
          this.DescriptiveIncident.putMessageOnPipe(
            "unBlock",
            { id: this.blockID },
            "rootClip",
            { selfExecute: !0, direction: ot }
          );
        };
      }
      var gt = _(
          null,
          function (t, e) {
            var n = (function (e) {
              d(i, e);
              var n = g(i);
              function i(e, r) {
                var s;
                return (
                  o(this, i),
                  (s = n.call(this, r)),
                  t(m(s)),
                  (s.mc_plugin_npm_name = "motor-cortex-js"),
                  (s.plugin_channel_class = at),
                  (s.hasIncidents = !0),
                  s.onGroupInitialise(),
                  (s.calculatedDuration = 0),
                  s
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
                  key: "handleResize",
                  value: function (t) {
                    return this.id === t ? this : this.bypass();
                  },
                },
                {
                  kind: "method",
                  key: "removeChild",
                  value: function (t) {
                    this.children[t].leaf.lastWish(),
                      b(f(n.prototype), "removeChild", this).call(this, t);
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
                    for (var i in ((n["motor-cortex-js"] = [
                      {
                        millisecond: t,
                        parentMillisecond: e,
                        incident: this,
                        id: this.id,
                      },
                    ]),
                    this.children)) {
                      var r = this.children[i],
                        s = r.leaf.getIncidentsByChannel(t + r.position, t);
                      for (var a in s)
                        Object.prototype.hasOwnProperty.call(n, a)
                          ? (n[a] = n[a].concat(s[a]))
                          : (n[a] = s[a]);
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
                  decorators: [mt],
                  key: "setBlock",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [vt],
                  key: "unblock",
                  value: function () {},
                },
              ],
            };
          },
          ft
        ),
        yt = (function (t) {
          d(n, t);
          var e = g(n);
          function n() {
            return o(this, n), e.apply(this, arguments);
          }
          return (
            l(n, [
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
                    this.incidents[e].millisecond *= t;
                },
              },
              {
                key: "checkAddition",
                value: function (t) {
                  for (var e = [], n = {}, i = [], r = 0; r < t.length; r++)
                    (n[t[r].id] = t[r].incident),
                      i.push({ id: t[r].id, millisecond: t[r].millisecond }),
                      Object.prototype.hasOwnProperty.call(
                        this.incidentsById,
                        t[r].id
                      ) &&
                        (rt.error(
                          "Incident with the id ".concat(
                            t[r].id,
                            " already exists. Addition is rejected."
                          )
                        ),
                        e.push({
                          type: "Already existing id",
                          meta: { id: t[r].id },
                        }));
                  if (e.length > 0) return { result: !1, errors: e };
                  var s = this;
                  return {
                    result: !0,
                    execute: function () {
                      var e;
                      (s.incidentsById = Object.assign(s.incidentsById, n)),
                        (e = s.incidents).push.apply(e, i),
                        s.incidents.sort(function (t, e) {
                          return t.millisecond - e.millisecond;
                        });
                      for (var r = 0; r < t.length; r++)
                        s._incidentById(t[r].id)._onGetContextOnce(s.context);
                    },
                  };
                },
              },
              {
                key: "checkEdit",
                value: function (t, e) {
                  var n = this.incidents;
                  return {
                    result: !0,
                    execute: function () {
                      for (var i, r = 0; r < t.length; r++) {
                        i = t[r].id;
                        for (var s = 0; s < n.length; s++)
                          if (n[s].id === i) {
                            n[s].millisecond += e;
                            break;
                          }
                      }
                      n.sort(function (t, e) {
                        return t.millisecond - e.millisecond;
                      });
                    },
                  };
                },
              },
              {
                key: "checkDelete",
                value: function (t) {
                  for (var e = this, n = [], i = 0; i < t.length; i++)
                    n.push(t[i].id);
                  return {
                    result: !0,
                    execute: function () {
                      var t = e.incidents.filter(function (t) {
                        return !n.includes(t.id);
                      });
                      e.incidents = t;
                      for (var i = 0; i < n.length; i++)
                        delete e.incidentsById[n[i]];
                    },
                  };
                },
              },
              {
                key: "checkResizedIncidents",
                value: function (t) {
                  var e = this.incidents;
                  return {
                    result: !0,
                    execute: function () {
                      for (var n, i = 0; i < t.length; i++) {
                        n = t[i].id;
                        for (var r = 0; r < e.length; r++)
                          if (e[r].id === n) {
                            e[r].millisecond += t[i].startDelta;
                            break;
                          }
                      }
                      e.sort(function (t, e) {
                        return t.millisecond - e.millisecond;
                      });
                    },
                  };
                },
              },
              {
                key: "moveTo",
                value: function (t, e, n) {
                  var i =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  if (i)
                    for (var r = 0; r < this.incidents.length; r++) {
                      var s = this.incidents[r],
                        a = this._incidentById(s.id);
                      e < s.millisecond
                        ? a.onProgress(0, 0, n, !0)
                        : e > s.millisecond + a.duration
                        ? a.onProgress(1, a.duration, n, !0)
                        : a.onProgress(
                            (e - s.millisecond) / a.duration,
                            e - s.millisecond,
                            n,
                            !0
                          );
                    }
                  else {
                    var o,
                      u = this;
                    o =
                      e > t
                        ? this.incidents.filter(function (n) {
                            return (
                              (n.millisecond + u._incidentById(n.id).duration >=
                                t &&
                                n.millisecond +
                                  u._incidentById(n.id).duration <=
                                  e) ||
                              (u._incidentById(n.id).duration + n.millisecond >=
                                e &&
                                n.millisecond <= e)
                            );
                          })
                        : this.incidents.filter(function (n) {
                            return (
                              (n.millisecond + u._incidentById(n.id).duration >=
                                e &&
                                n.millisecond +
                                  u._incidentById(n.id).duration <=
                                  t) ||
                              (u._incidentById(n.id).duration + n.millisecond >=
                                t &&
                                n.millisecond <= t)
                            );
                          });
                    for (var l = 0; l < o.length; l++) {
                      var c = o[l],
                        h = this._incidentById(c.id),
                        p = (e - c.millisecond) / h.duration >= 1,
                        d = p ? 1 : (e - c.millisecond) / h.duration,
                        f = p ? h.duration : e - c.millisecond;
                      h.onProgress(d, f, n, !1);
                    }
                  }
                },
              },
            ]),
            n
          );
        })(at),
        bt = "function" == typeof Float32Array;
      function xt(t, e) {
        return 1 - 3 * e + 3 * t;
      }
      function kt(t, e) {
        return 3 * e - 6 * t;
      }
      function wt(t) {
        return 3 * t;
      }
      function Ct(t, e, n) {
        return ((xt(e, n) * t + kt(e, n)) * t + wt(e)) * t;
      }
      function Ot(t, e, n) {
        return 3 * xt(e, n) * t * t + 2 * kt(e, n) * t + wt(e);
      }
      function It(t) {
        return t;
      }
      var Pt = function (t, e, n, i) {
        if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
          throw new Error("bezier x values must be in [0, 1] range");
        if (t === e && n === i) return It;
        for (
          var r = bt ? new Float32Array(11) : new Array(11), s = 0;
          s < 11;
          ++s
        )
          r[s] = Ct(0.1 * s, t, n);
        function a(e) {
          for (var i = 0, s = 1; 10 !== s && r[s] <= e; ++s) i += 0.1;
          --s;
          var a = i + ((e - r[s]) / (r[s + 1] - r[s])) * 0.1,
            o = Ot(a, t, n);
          return o >= 0.001
            ? (function (t, e, n, i) {
                for (var r = 0; r < 4; ++r) {
                  var s = Ot(e, n, i);
                  if (0 === s) return e;
                  e -= (Ct(e, n, i) - t) / s;
                }
                return e;
              })(e, a, t, n)
            : 0 === o
            ? a
            : (function (t, e, n, i, r) {
                var s,
                  a,
                  o = 0;
                do {
                  (s = Ct((a = e + (n - e) / 2), i, r) - t) > 0
                    ? (n = a)
                    : (e = a);
                } while (Math.abs(s) > 1e-7 && ++o < 10);
                return a;
              })(e, i, i + 0.1, t, n);
        }
        return function (t) {
          return 0 === t ? 0 : 1 === t ? 1 : Ct(a(t), e, i);
        };
      };
      function Et(t) {
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
      var At = _(null, function (t) {
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
                r = arguments.length > 2 ? arguments[2] : void 0;
              o(this, e),
                t(this),
                (this.attrs = n),
                (this.props = i),
                (this.dna = r),
                (this.context = r.context),
                (this.mcid = r.mcid),
                (this.id = i.id || et()),
                (this.modelId = i.modelId),
                (this.gotContext = !1),
                (this.plugin_channel_class = at),
                (this.mc_plugin_npm_name = "motor-cortex-js"),
                Object.prototype.hasOwnProperty.call(
                  i,
                  "plugin_channel_class"
                ) && (this.plugin_channel_class = i.plugin_channel_class),
                Object.prototype.hasOwnProperty.call(i, "mc_plugin_npm_name") &&
                  (this.mc_plugin_npm_name = i.mc_plugin_npm_name),
                (this.hasIncidents = !1),
                (this.initialValues = {}),
                (this.userDefinedInitialValues = n.initialValues || {}),
                (this.pureInitialValues = null),
                (this.autoGenerated = !1),
                this.onInitialise();
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
                  return null === this.context
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
                decorators: [Et],
                key: "getIncidentsByChannel",
                value: function () {},
              },
              {
                kind: "method",
                key: "hasUserDefinedInitialValue",
                value: function () {
                  return Object.prototype.hasOwnProperty.call(
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
                      (this.pureInitialValues = JSON.parse(JSON.stringify(t))),
                    this.hasUserDefinedInitialValue())
                  )
                    if (H(this.targetValue)) {
                      for (var n in this.userDefinedInitialValues[
                        this.attributeKey
                      ])
                        t[n] = this.userDefinedInitialValues[this.attributeKey][
                          n
                        ];
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
                key: "_onGetContextOnce",
                value: function () {
                  try {
                    if (!0 === this.context.fragment) return;
                    this.gotContext ||
                      (this.onGetContext(), (this.gotContext = !0));
                  } catch (t) {
                    rt.error(t), rt.error(this.mcid);
                  }
                },
              },
              {
                kind: "method",
                key: "onGetContext",
                value: function () {
                  rt.info(
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
                  rt.info(
                    'Overwritte the "onInialise" method with the code you want to get executed',
                    "info"
                  );
                },
              },
              { kind: "method", key: "onProgress", value: function (t, e) {} },
              {
                kind: "method",
                decorators: [mt],
                key: "setBlock",
                value: function () {},
              },
              {
                kind: "method",
                decorators: [vt],
                key: "unblock",
                value: function () {},
              },
            ],
          };
        }),
        Mt = (function (t) {
          d(n, t);
          var e = g(n);
          function n(t, i, r) {
            var s;
            return (
              o(this, n),
              ((s = e.call(this, t, i, r)).runTimeInfo = {
                currentMillisecond: 0,
              }),
              s
            );
          }
          return (
            l(n, [
              {
                key: "duration",
                get: function () {
                  return this.DescriptiveIncident.realClip.duration;
                },
              },
              {
                key: "lastWish",
                value: function () {
                  this.ownClip && this.ownClip.context.unmount();
                },
              },
              {
                key: "onGetContext",
                value: function () {
                  var t = this,
                    e = this.DescriptiveIncident.realClip.exportConstructionArguments(),
                    n = rt.getElementByMCID(this.context, this.mcid),
                    i = p(
                      p({}, e.props),
                      {},
                      {
                        selector: void 0,
                        host: n,
                        containerParams:
                          this.DescriptiveIncident.props.containerParams || {},
                        originalDims:
                          this.DescriptiveIncident.constructor.originalDims ||
                          {},
                      }
                    );
                  (this.ownClip = new this.DescriptiveIncident.constructor.Incident(
                    e.attrs,
                    i
                  )),
                    (this.ownClip.DescriptiveIncident = this.DescriptiveIncident),
                    this.DescriptiveIncident.realClip.addContext(
                      {
                        clipId: this.id,
                        context: this.ownClip.context,
                        unblock: function () {
                          return t.unblock();
                        },
                      },
                      !0
                    );
                },
              },
              {
                key: "onProgress",
                value: function (t, e) {
                  var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                  if (
                    !1 !==
                    this.DescriptiveIncident.realClip.context.contextLoaded
                  ) {
                    for (var i in this.DescriptiveIncident.realClip
                      .instantiatedChannels) {
                      var r = this.DescriptiveIncident.realClip
                        .instantiatedChannels[i];
                      r.moveTo(
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
            ]),
            n
          );
        })(At);
      function _t(t) {
        var e = new t.Incident(
          t.attrs,
          p(p({}, t.props), {}, { id: t.id || et() }),
          { context: t.context, mcid: t.mcid }
        );
        return (
          (e.mc_plugin_npm_name = t.plugin_npm_name),
          (e.plugin_channel_class = t.Channel),
          (e.DescriptiveIncident = t.DescriptiveIncident),
          e
        );
      }
      var Tt = {
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
            return -1 * Math.cos(t * (Math.PI / 2)) + 1;
          },
          easeOutSine: function (t) {
            return Math.sin(t * (Math.PI / 2));
          },
          easeInOutSine: function (t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
          },
          easeInExpo: function (t) {
            return 0 == t ? 1 : 1 * Math.pow(2, 10 * (t - 1));
          },
          easeOutExpo: function (t) {
            return 1 == t ? 1 : 1 * (1 - Math.pow(2, -10 * t));
          },
          easeInOutExpo: function (t) {
            return 0 == t || 1 == t
              ? t
              : (t /= 0.5) < 1
              ? 0.5 * Math.pow(2, 10 * (t - 1))
              : 0.5 * (2 - Math.pow(2, -10 * --t));
          },
          easeInCirc: function (t) {
            return t >= 1 ? t : -(Math.sqrt(1 - (t /= 1) * t) - 1);
          },
          easeOutCirc: function (t) {
            return Math.sqrt(1 - (t = t / 1 - 1) * t);
          },
          easeInOutCirc: function (t) {
            return (t /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          },
          easeInElastic: function (t) {
            if (0 == t || 1 == t) return t;
            var e = (0.3 / (2 * Math.PI)) * Math.asin(1);
            return (
              -Math.pow(2, 10 * (t -= 1)) *
              Math.sin(((1 * t - e) * (2 * Math.PI)) / 0.3)
            );
          },
          easeOutElastic: function (t) {
            if (0 == t || 1 == t) return t;
            var e = (0.3 / (2 * Math.PI)) * Math.asin(1);
            return (
              Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / 0.3) +
              1
            );
          },
          easeInOutElastic: function (t) {
            if (0 == t || 1 == t) return t;
            var e = 0.3 * 1.5,
              n = (e / (2 * Math.PI)) * Math.asin(1);
            return t < 1
              ? Math.pow(2, 10 * (t -= 1)) *
                  Math.sin(((t - n) * (2 * Math.PI)) / e) *
                  -0.5
              : Math.pow(2, -10 * (t -= 1)) *
                  Math.sin(((t - n) * (2 * Math.PI)) / e) *
                  0.5 +
                  1;
          },
          easeInBack: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          easeOutBack: function (t) {
            var e = 1.70158;
            return (t -= -1) * t * ((e + 1) * t + e) + 1;
          },
          easeInOutBack: function (t) {
            var e = 1.70158;
            return (t /= 0.5) < 1
              ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
              : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
          },
          easeInBounce: function (t) {
            return 1 - Tt.easeOutBounce(1 - t);
          },
          easeOutBounce: function (t) {
            return t < 1 / 2.75
              ? 7.5625 * t * t * 1
              : t < 2 / 2.75
              ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
              : t < 2.5 / 2.75
              ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
              : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
          },
          easeInOutBounce: function (t) {
            return t < 0.5
              ? 0.5 * Tt.easeInBounce(2 * t)
              : 0.5 * (Tt.easeOutBounce(2 * t - 1) + 1);
          },
        },
        St = _(
          null,
          function (t, e) {
            return {
              F: (function (e) {
                d(i, e);
                var n = g(i);
                function i(e, r, s, a) {
                  var u;
                  return (
                    o(this, i),
                    (u = n.call(
                      this,
                      p(
                        p({}, e.props),
                        {},
                        { id: "".concat(e.incidentId, "_").concat(s) }
                      )
                    )),
                    t(m(u)),
                    (u.contexts = {}),
                    (u.constructionIngredients = e),
                    (u.mcid = s),
                    (u.DescriptiveIncident = a),
                    (u.mc_plugin_npm_name = e.plugin_npm_name),
                    (u.plugin_channel_class = e.Channel),
                    u.addContext(r),
                    (u.timeScale = 1),
                    a.realClip.duration > 0 &&
                      (u.timeScale = u.props.duration / a.realClip.duration),
                    a.realClip.subscribeToDurationChange(function (t) {
                      (u.props.duration = u.timeScale * t),
                        u.putMessageOnPipe("recalcDuration", {}, "Groups", {
                          selfExecute: !1,
                          direction: ot,
                        });
                    }),
                    (u.easing = Tt.linear),
                    Object.prototype.hasOwnProperty.call(u.props, "easing") &&
                      (Array.isArray(u.props.easing)
                        ? (u.easing = Pt(
                            u.props.easing[0],
                            u.props.easing[1],
                            u.props.easing[2],
                            u.props.easing[3]
                          ))
                        : (u.easing = Tt[u.props.easing])),
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
                  kind: "method",
                  key: "onProgress",
                  value: function (t, e, n) {
                    var i =
                        arguments.length > 3 &&
                        void 0 !== arguments[3] &&
                        arguments[3],
                      r = this.delay + this.props.duration + this.hiatus,
                      s = e % r;
                    0 !== e &&
                      0 === s &&
                      (s = this.delay + this.props.duration);
                    var a = s - this.delay;
                    a < 0
                      ? (a = 0)
                      : a > this.props.duration && (a = this.props.duration);
                    var o =
                        0 === this.props.duration ? 0 : a / this.props.duration,
                      u = this.easing(o),
                      l = u * this.props.duration * (1 / this.timeScale);
                    !1 !== this.originalContext.context.contextLoaded &&
                      this.contexts[n].onProgress(u, l, i);
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
                    var n = p(
                      p({}, this.constructionIngredients),
                      {},
                      {
                        context: t.context,
                        mcid: this.mcid,
                        Incident: Mt,
                        DescriptiveIncident: this.DescriptiveIncident,
                      }
                    );
                    (this.contexts[t.clipId] = _t(n)),
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
                  key: "handleContextLoaded",
                  value: function (t, e) {
                    this._onGetContextOnce();
                  },
                },
                {
                  kind: "method",
                  decorators: [Et],
                  key: "getIncidentsByChannel",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "gotContext",
                  value: function () {
                    for (var t in this.contexts) this.contexts[t].gotContext();
                  },
                },
                {
                  kind: "method",
                  key: "_onGetContextOnce",
                  value: function () {
                    if (!1 !== this.originalContext.contextLoaded)
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
                    if (!1 !== this.originalContext.contextLoaded)
                      for (var t in this.contexts)
                        this.contexts[t].onGetContext();
                  },
                },
              ],
            };
          },
          ct
        ),
        Dt = _(
          null,
          function (t, e) {
            var n = (function (e) {
              d(i, e);
              var n = g(i);
              function i(e, r, s, a) {
                var u;
                if (
                  (o(this, i),
                  (u = n.call(
                    this,
                    p(
                      p({}, e.props),
                      {},
                      {
                        id:
                          null !== a
                            ? ""
                                .concat(e.incidentId, "_")
                                .concat(s, "_")
                                .concat(a)
                            : "".concat(e.incidentId, "_").concat(s),
                      }
                    )
                  )),
                  t(m(u)),
                  (u.contexts = {}),
                  (u.constructionIngredients = e),
                  (u.mcid = s),
                  (u.attribute = a),
                  (u.mc_plugin_npm_name = e.plugin_npm_name),
                  (u.plugin_channel_class = e.Channel),
                  (u.DescriptiveIncident = e.DescriptiveIncident),
                  u.addContext(r),
                  null !== a)
                ) {
                  var l =
                    u.constructionIngredients.attrs.animatedAttrs[u.attribute];
                  Array.isArray(l)
                    ? (u.originalAnimatedAttributeValue = C(l))
                    : H(l)
                    ? (u.originalAnimatedAttributeValue = p({}, l))
                    : (u.originalAnimatedAttributeValue = l);
                }
                return (
                  (u.easing = Tt.linear),
                  Object.prototype.hasOwnProperty.call(u.props, "easing") &&
                    (Array.isArray(u.props.easing)
                      ? (u.easing = Pt(
                          u.props.easing[0],
                          u.props.easing[1],
                          u.props.easing[2],
                          u.props.easing[3]
                        ))
                      : (u.easing = Tt[u.props.easing])),
                  u
                );
              }
              return i;
            })(e);
            return {
              F: n,
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
                    return b(f(n.prototype), "duration", this);
                  },
                },
                {
                  kind: "set",
                  key: "duration",
                  value: function (t) {
                    for (var e in (k(f(n.prototype), "duration", t, this, !0),
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
                    var i = p(
                        p({}, this.constructionIngredients),
                        {},
                        { context: t.context, mcid: this.mcid }
                      ),
                      r = _t(i);
                    (this.contexts[t.clipId] = r),
                      n ||
                        null == this.attribute ||
                        this.contexts[t.clipId].setInitialValue(
                          this.initialValue
                        ),
                      e &&
                        this.contexts[t.clipId].context.contextLoaded &&
                        this.contexts[t.clipId]._onGetContextOnce();
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
                  key: "handleContextLoaded",
                  value: function (t, e) {
                    return this._onGetContextOnce(), !0;
                  },
                },
                {
                  kind: "method",
                  decorators: [Et],
                  key: "getIncidentsByChannel",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "onProgress",
                  value: function (t, e, n) {
                    var i =
                      e % (this.delay + this.props.duration + this.hiatus);
                    0 !== e &&
                      0 === i &&
                      (i = this.delay + this.props.duration);
                    var r = i - this.delay;
                    r < 0
                      ? (r = 0)
                      : r > this.props.duration && (r = this.props.duration);
                    var s = r / this.props.duration,
                      a = this.easing(s),
                      o = a * this.props.duration;
                    if (null != n)
                      !1 !== this.originalContext.context.contextLoaded &&
                        this.contexts[n].onProgress(a, o);
                    else
                      for (var u in this.contexts)
                        (this.originalContextKey === u &&
                          !0 === this.originalContext.fragment) ||
                          this.contexts[u].onProgress(a, o);
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
                    for (var t in this.contexts) this.contexts[t].gotContext();
                  },
                },
                {
                  kind: "method",
                  key: "_onGetContextOnce",
                  value: function () {
                    if (!1 !== this.originalContext.context.contextLoaded)
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
                    if (!1 !== this.originalContext.contextLoaded)
                      for (var t in this.contexts)
                        this.contexts[t].context.contextLoaded &&
                          this.contexts[t].onGetContext();
                  },
                },
                {
                  kind: "get",
                  key: "initialValue",
                  value: function () {
                    return this.originalContext.initialValue;
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
                    if (!this.originalContext.context.contextLoaded) return 0;
                    if (null != t) return this.contexts[t].getScratchValue();
                    var e = Object.keys(this.contexts);
                    if (
                      Object.prototype.hasOwnProperty.call(
                        this.originalClipContext,
                        "nonFragmentedContext"
                      )
                    ) {
                      var n = p(
                          p({}, this.constructionIngredients),
                          {},
                          {
                            context: this.originalClipContext
                              .nonFragmentedContext,
                            mcid: this.mcid,
                          }
                        ),
                        i = _t(n);
                      return i.getScratchValue();
                    }
                    return 1 === e.length
                      ? this.originalContext.getScratchValue()
                      : this.contexts[e[1]].getScratchValue();
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
          ct
        ),
        jt = (function (t) {
          d(n, t);
          var e = g(n);
          function n(t, i, r, s, a) {
            var u;
            return (
              o(this, n),
              ((u = e.call(
                this,
                {},
                { id: "".concat(t.id, "_").concat(r) }
              )).mcid = r),
              (u.selector = s),
              (u.data = a),
              u.setUp(t, i),
              u
            );
          }
          return (
            l(n, [
              {
                key: "setUp",
                value: function (t, e) {
                  for (var n in this.data.attrs.animatedAttrs) {
                    var i = {};
                    i[n] = this.data.attrs.animatedAttrs[n];
                    var r = p(p({}, this.data.attrs), {}, { animatedAttrs: i }),
                      s = p(
                        p({}, this.data.props),
                        {},
                        { selector: this.selector }
                      ),
                      a = {
                        incidentId: t.id,
                        attrs: r,
                        props: s,
                        Incident: t.constructor.Incident,
                        plugin_npm_name: t.constructor.plugin_npm_name,
                        Channel: t.constructor.Channel,
                        DescriptiveIncident: t,
                      },
                      o = new Dt(a, e, this.mcid, n);
                    this.addChild(o, 0);
                  }
                },
              },
            ]),
            n
          );
        })(gt),
        Vt = (function (t) {
          d(n, t);
          var e = g(n);
          function n(t, i) {
            var r;
            return (
              o(this, n),
              ((r = e.call(this, {}, { id: t.id })).contexts = {}),
              (r.contexts[i.clipId] = i.context),
              (r.originalContextKey = i.clipId),
              (r.initParams = i.context.initParams),
              (r.instantiatedCopiesContexts = i.instantiatedCopiesContexts),
              (r.descriptiveIncident = t),
              (r.staggerAttrs = []),
              (r.staggerProps = []),
              r.setUp(t, i),
              r
            );
          }
          return (
            l(n, [
              {
                key: "originalContext",
                get: function () {
                  return this.contexts[this.originalContextKey];
                },
              },
              {
                key: "parsePropsDynamicValues",
                value: function (t, e) {
                  for (var n = 0; n < t.propsStaggers.length; n++)
                    this.staggerProps.push({
                      path: t.propsStaggers[n].path,
                      values: t.propsStaggers[n].stagger.calculateValues(
                        e,
                        this.initParams
                      ),
                    });
                },
              },
              {
                key: "parseAttrsDynamicValues",
                value: function (t, e) {
                  for (var n = 0; n < t.attributesStaggers.length; n++)
                    this.staggerAttrs.push({
                      path: t.attributesStaggers[n].path,
                      values: t.attributesStaggers[n].stagger.calculateValues(
                        e,
                        this.initParams
                      ),
                    });
                },
              },
              {
                key: "setUp",
                value: function (t, e) {
                  var n,
                    i,
                    r = this.originalContext.getElements(t.selector());
                  this.parsePropsDynamicValues(t, r),
                    this.parseAttrsDynamicValues(t, r);
                  for (var s = 0; s < r.length; s++) {
                    for (var a in ((n = r[s]),
                    (i = this._getElementMCID(n)),
                    this.instantiatedCopiesContexts))
                      this._setElementMCID(
                        this.instantiatedCopiesContexts[a],
                        this.instantiatedCopiesContexts[a].getElements(
                          t.selector()
                        )[s],
                        i
                      );
                    this._createElementIncident(n, t, e, s, r.length, i);
                  }
                },
              },
              {
                key: "handleRecalcDuration",
                value: function (t, e) {
                  var i = b(f(n.prototype), "handleRecalcDuration", this).call(
                    this,
                    t,
                    e
                  );
                  return (
                    this.descriptiveIncident.propsStaggers.length > 0 &&
                      (this.descriptiveIncident.dynamicDurationValue =
                        1 * this.duration),
                    i
                  );
                },
              },
              {
                key: "lastWish",
                value: function () {
                  this.descriptiveIncident.propsStaggers.length > 0 &&
                    ((this.descriptiveIncident.dynamicDurationValue = null),
                    this.descriptiveIncident.putMessageOnPipe(
                      "setDurationDynamic",
                      {},
                      "Groups",
                      { selfExecute: !1, direction: ot }
                    )),
                    b(f(n.prototype), "lastWish", this).call(this);
                },
              },
              {
                key: "_getElementMCID",
                value: function (t) {
                  var e = this.originalContext.getMCID(t);
                  return (
                    e || ((e = et(!0)), this.originalContext.setMCID(t, e)), e
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
                key: "_prepareAttrsPropsForElement",
                value: function (t, e) {
                  var n = (function (t, e) {
                      for (var n = [], i = 0; i < t.length; i++)
                        n.push({ path: t[i].path, value: t[i].values[e] });
                      return n;
                    })(this.staggerAttrs, e),
                    i = (function (t, e) {
                      for (var n = [], i = 0; i < t.length; i++)
                        n.push({ path: t[i].path, value: t[i].values[e] });
                      return n;
                    })(this.staggerProps, e),
                    r = t.attrs,
                    s = t.props;
                  if (n.length > 0) {
                    r = JSON.parse(JSON.stringify(t.attrs));
                    for (var a = 0; a < n.length; a++)
                      it(r, n[a].path, n[a].value);
                  }
                  if (i.length > 0) {
                    s = JSON.parse(JSON.stringify(t.props));
                    for (var o = 0; o < i.length; o++)
                      it(s, i[o].path, i[o].value);
                  }
                  return { attrs: r, props: s };
                },
              },
              {
                key: "_createElementIncident",
                value: function (t, e, n, i, r, s) {
                  var a = this._prepareAttrsPropsForElement(e, i);
                  if (
                    Object.prototype.hasOwnProperty.call(
                      e.attrs,
                      "animatedAttrs"
                    )
                  ) {
                    var o = new jt(
                      e,
                      n,
                      s,
                      n.context.getElementSelectorByMCID(s),
                      a
                    );
                    this.addChild(o, 0);
                  } else {
                    var u = a.attrs,
                      l = a.props,
                      c = {
                        incidentId: e.id,
                        attrs: u,
                        props: l,
                        Incident: e.constructor.Incident,
                        plugin_npm_name: e.constructor.plugin_npm_name,
                        Channel: e.constructor.Channel,
                        DescriptiveIncident: e,
                      },
                      h = new Dt(c, n, s, null);
                    this.addChild(h, 0);
                  }
                },
              },
            ]),
            n
          );
        })(gt),
        Lt = (function (t) {
          d(n, t);
          var e = g(n);
          function n(t, i) {
            var r;
            return (
              o(this, n), ((r = e.call(this, t, i)).realClip = t.realClip), r
            );
          }
          return (
            l(n, [
              {
                key: "_createElementIncident",
                value: function (t, e, n, i, r, s) {
                  var a = e.realClip.exportConstructionArguments(),
                    o = this._prepareAttrsPropsForElement(e, i),
                    u = p(
                      p(
                        p(
                          p({}, e.props),
                          {},
                          { duration: e.realClip.duration },
                          a.props
                        ),
                        o.props
                      ),
                      {},
                      {
                        selector: n.context.getElementSelectorByMCID(s),
                        runTimeInfo: e.runTimeInfo,
                      }
                    ),
                    l = {
                      incidentId: e.id,
                      attrs: a.attrs,
                      props: u,
                      Incident: e.constructor.Incident,
                      plugin_npm_name: e.constructor.plugin_npm_name,
                      Channel: yt,
                      DescriptiveIncident: e,
                    },
                    c = new St(l, n, s, e);
                  this.addChild(c, 0);
                },
              },
            ]),
            n
          );
        })(Vt),
        Nt = function (t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : B,
            r =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : window;
          Object.prototype.hasOwnProperty.call(r, i) || (r[i] = {});
          for (var s = r[i], a = t.split("."), o = 0; o < a.length - 1; o++)
            Object.prototype.hasOwnProperty.call(s, a[o]) || (s[a[o]] = {}),
              (s = s[a[o]]);
          return !(
            (Object.prototype.hasOwnProperty.call(s, a[a.length - 1]) &&
              !1 === n) ||
            ((s[a[a.length - 1]] = e), 0)
          );
        };
      function $t(t) {
        var e = {},
          n = [],
          i = Array.isArray(t),
          r = i ? t.length : 0,
          s = null;
        return new Proxy(t, {
          keywords: [
            "setValue",
            "_getFromProxy",
            "__createPathProxies",
            "hasOwnProperty",
            "pushValue",
            "removePathKey",
            "removeKey",
            "restoreKey",
            "getKeys",
            "exportFlattened",
            "isArray",
            "push",
            "sortBy",
            "findIndex",
          ],
          get: function (a, o) {
            return "length" === o && i
              ? r
              : this.keywords.indexOf(o) >= 0
              ? this[o]
              : n.indexOf(o) >= 0
              ? void 0
              : (i && null !== s && (o = s[o]),
                Object.prototype.hasOwnProperty.call(e, o) ? e[o] : t[o]);
          },
          isArray: function () {
            return i;
          },
          _getFromProxy: function (t) {
            return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
          },
          set: function () {
            return !1;
          },
          sortBy: function (t) {
            if (((s = null), !i)) return !1;
            s = (function (t, e) {
              for (var n = [], i = 0; i < t.length; i++) n.push([t[i], i]);
              n.sort(function (t, n) {
                return t[0][e] < n[0][e] ? -1 : 1;
              });
              var r = [];
              for (var s in n) r.push(n[s][1]);
              return r;
            })(this, t);
          },
          __createPathProxies: function (n) {
            for (var r = e, a = t, o = 0; o < n.length - 1; o++) {
              var u = i && null !== s ? s[n[o]] : n[o];
              if (0 === o ? void 0 === r[u] : void 0 === r._getFromProxy(u)) {
                var l = $t((void 0 !== a && a[u]) || {});
                0 === o ? (r[u] = l) : r.setValue(u, l);
              }
              (r = r[u]), (a = void 0 !== a ? a[u] : {});
            }
            return { currentObject: r, currentRealObect: a };
          },
          findIndex: function (t) {
            if (!i) return null;
            for (var e = 0; e < r; e++) if (t(this[e])) return e;
            return null;
          },
          setValue: function (t, e) {
            var i = t.split("."),
              r = this.__createPathProxies(i).currentObject,
              s = e;
            if (("object" === a(e) && (s = $t(e)), 1 === i.length)) {
              r[i[i.length - 1]] = s;
              var o = n.indexOf(i[i.length - 1]);
              o > -1 && n.splice(o, 1);
            } else
              r.setValue(i[i.length - 1], s), r.restoreKey(i[i.length - 1]);
            return !0;
          },
          pushValue: function (e, n) {
            var i = e.split("."),
              r = this.__createPathProxies(i),
              s = r.currentObject;
            if (void 0 === r.currentRealObect) return !1;
            var a = i[i.length - 1],
              o = s[a],
              u = t[a];
            if (("" === e && ((o = this), (u = t)), 1 !== i.length))
              return s.pushValue(a, n);
            var l = !1;
            if (void 0 !== o) {
              if (((l = !0), !o.isArray())) return !1;
            } else if (!Array.isArray(u)) return !1;
            if (!l) {
              var c = $t(u);
              (s[a] = c), (o = s[a]);
            }
            return o.push(n), !0;
          },
          push: function (t) {
            return (
              !!this.isArray() &&
              ("object" === a(t) ? (e[r] = $t(t)) : (e[r] = t), (r += 1), !0)
            );
          },
          removePathKey: function (t) {
            var e = t.split(".");
            return (
              this.__createPathProxies(e).currentObject.removeKey(
                e[e.length - 1]
              ),
              !0
            );
          },
          removeKey: function (t) {
            n.push(t);
          },
          restoreKey: function (t) {
            var e = n.indexOf(t);
            e > -1 && n.splice(e, 1);
          },
          hasOwnProperty: function (t) {
            return !(n.indexOf(t) > -1) && void 0 !== this[t];
          },
          getKeys: function () {
            if (i) return [];
            for (
              var r = [],
                s = Object.keys(t),
                a = Object.keys(e),
                o = [].concat(C(s), C(a)),
                u = o.filter(function (t, e) {
                  return o.indexOf(t) === e;
                }),
                l = 0;
              l < u.length;
              l++
            )
              n.indexOf(u[l]) < 0 && r.push(u[l]);
            return r;
          },
          exportFlattened: function () {
            var n;
            if (i)
              if (((n = []), null !== s))
                for (var r = 0; r < s.length; r++) {
                  var o = s[r];
                  if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var u = e[o];
                    if ("object" === a(u))
                      try {
                        n[r] = e[o].exportFlattened();
                      } catch (t) {
                        n[r] = u;
                      }
                    else n[r] = u;
                  } else n[r] = t[o];
                }
              else {
                n = C(t);
                for (var l = 0, c = Object.entries(e); l < c.length; l++) {
                  var h = w(c[l], 2),
                    p = h[0],
                    d = h[1];
                  if ("object" === a(d))
                    try {
                      n[p] = e[p].exportFlattened();
                    } catch (t) {
                      n[p] = d;
                    }
                  else n[p] = d;
                }
              }
            else {
              n = {};
              for (var f = this.getKeys(), m = 0; m < f.length; m++) {
                var v = f[m];
                void 0 !== e[v]
                  ? "object" === a(e[v])
                    ? (n[v] = e[v].exportFlattened())
                    : (n[v] = e[v])
                  : (n[v] = t[v]);
              }
            }
            return n;
          },
        });
      }
      var Bt = "6.4.1",
        Ft = function t(e, n, i = {}) {
          for (let s in n)
            if (
              "object" == typeof (r = n[s]) &&
              !Array.isArray(r) &&
              null != r &&
              Object.keys(r).length > 0
            )
              (e[s] = e[s] || {}), t(e[s], n[s], i);
            else {
              if (!0 === i.skipIfExist && void 0 !== e[s]) continue;
              e[s] = n[s];
            }
          var r;
          return e;
        },
        Rt = {
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
          stringAlphanum: "The '{field}' field must be an alphanumeric string.",
          stringAlphadash: "The '{field}' field must be an alphadash string.",
          stringHex: "The '{field}' field must be a hex string.",
          stringSingleLine: "The '{field}' field must be a single line string.",
          stringBase64: "The '{field}' field must be a base64 string.",
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
          tuple: "The '{field}' field must be an array.",
          tupleEmpty: "The '{field}' field must not be an empty array.",
          tupleLength: "The '{field}' field must contain {expected} items.",
          boolean: "The '{field}' field must be a boolean.",
          currency: "The '{field}' must be a valid currency format",
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
          emailEmpty: "The '{field}' field must not be empty.",
          emailMin:
            "The '{field}' field length must be greater than or equal to {expected} characters long.",
          emailMax:
            "The '{field}' field length must be less than or equal to {expected} characters long.",
          luhn: "The '{field}' field must be a valid checksum luhn.",
          mac: "The '{field}' field must be a valid MAC address.",
          object: "The '{field}' must be an Object.",
          objectStrict:
            "The object '{field}' contains forbidden keys: '{actual}'.",
          objectMinProps:
            "The object '{field}' must contain at least {expected} properties.",
          objectMaxProps:
            "The object '{field}' must contain {expected} properties at most.",
          url: "The '{field}' field must be a valid URL.",
          urlEmpty: "The '{field}' field must not be empty.",
          uuid: "The '{field}' field must be a valid UUID.",
          uuidVersion:
            "The '{field}' field must be a valid UUID version provided.",
          classInstanceOf:
            "The '{field}' field must be an instance of the '{expected}' class.",
          objectID: "The '{field}' field must be an valid ObjectID",
        },
        qt = function () {
          const t = [];
          return t.push("\n\t\treturn value;\n\t"), { source: t.join("\n") };
        },
        zt = function ({ schema: t, messages: e }, n, i) {
          const r = [];
          if (
            (r.push(
              `\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({
                type: "array",
                actual: "value",
                messages: e,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`
            ),
            !1 === t.empty &&
              r.push(
                `\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({
                  type: "arrayEmpty",
                  actual: "value",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.min &&
              r.push(
                `\n\t\t\tif (len < ${t.min}) {\n\t\t\t\t${this.makeError({
                  type: "arrayMin",
                  expected: t.min,
                  actual: "len",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.max &&
              r.push(
                `\n\t\t\tif (len > ${t.max}) {\n\t\t\t\t${this.makeError({
                  type: "arrayMax",
                  expected: t.max,
                  actual: "len",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.length &&
              r.push(
                `\n\t\t\tif (len !== ${t.length}) {\n\t\t\t\t${this.makeError({
                  type: "arrayLength",
                  expected: t.length,
                  actual: "len",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.contains &&
              r.push(
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
              r.push(
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
            r.push(
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
            r.push(
              "\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t\tfor (var i = 0; i < arr.length; i++) {\n\t\t"
            );
            const e = n + "[]",
              s = this.getRuleFromSchema(t.items),
              a =
                'arr[i] = context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context)';
            r.push(this.compileRule(s, i, e, a, "arr[i]")),
              r.push("\n\t\t\t}\n\t\t");
          }
          return r.push("\n\t\treturn value;\n\t"), { source: r.join("\n") };
        },
        Gt = function ({ schema: t, messages: e }, n, i) {
          const r = [];
          let s = !1;
          return (
            r.push("\n\t\tvar origValue = value;\n\t"),
            !0 === t.convert &&
              ((s = !0),
              r.push(
                '\n\t\t\tif (typeof value !== "boolean") {\n\t\t\t\tif (\n\t\t\t\tvalue === 1\n\t\t\t\t|| value === "true"\n\t\t\t\t|| value === "1"\n\t\t\t\t|| value === "on"\n\t\t\t\t) {\n\t\t\t\t\tvalue = true;\n\t\t\t\t} else if (\n\t\t\t\tvalue === 0\n\t\t\t\t|| value === "false"\n\t\t\t\t|| value === "0"\n\t\t\t\t|| value === "off"\n\t\t\t\t) {\n\t\t\t\t\tvalue = false;\n\t\t\t\t}\n\t\t\t}\n\t\t'
              )),
            r.push(
              `\n\t\tif (typeof value !== "boolean") {\n\t\t\t${this.makeError({
                type: "boolean",
                actual: "origValue",
                messages: e,
              })}\n\t\t}\n\t\t\n\t\treturn value;\n\t`
            ),
            { sanitized: s, source: r.join("\n") }
          );
        },
        Ht = function ({ schema: t, messages: e, index: n }, i, r) {
          const s = [],
            a = t.instanceOf.name ? t.instanceOf.name : "<UnknowClass>";
          return (
            r.customs[n]
              ? (r.customs[n].schema = t)
              : (r.customs[n] = { schema: t }),
            s.push(
              `\n\t\tif (!(value instanceof context.customs[${n}].schema.instanceOf))\n\t\t\t${this.makeError(
                {
                  type: "classInstanceOf",
                  actual: "value",
                  expected: "'" + a + "'",
                  messages: e,
                }
              )}\n\t`
            ),
            s.push("\n\t\treturn value;\n\t"),
            { source: s.join("\n") }
          );
        },
        Jt = function ({ schema: t, messages: e, index: n }, i, r) {
          const s = [];
          return (
            s.push(
              `\n\t\t${this.makeCustomValidator({
                fnName: "check",
                path: i,
                schema: t,
                messages: e,
                context: r,
                ruleIndex: n,
              })}\n\t\treturn value;\n\t`
            ),
            { source: s.join("\n") }
          );
        },
        Kt = function ({ schema: t, messages: e }, n, i) {
          const r = t.currencySymbol || null,
            s = t.thousandSeparator || ",",
            a = t.decimalSeparator || ".",
            o = t.customRegex;
          let u = !t.symbolOptional,
            l = "(?=.*\\d)^(-?~1|~1-?)(([0-9]\\d{0,2}(~2\\d{3})*)|0)?(\\~3\\d{1,2})?$"
              .replace(/~1/g, r ? `\\${r}${u ? "" : "?"}` : "")
              .replace("~2", s)
              .replace("~3", a);
          const c = [];
          return (
            c.push(
              `\n\t\tif (!value.match(${
                o || new RegExp(l)
              })) {\n\t\t\t${this.makeError({
                type: "currency",
                actual: "value",
                messages: e,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\treturn value;\n\t`
            ),
            { source: c.join("\n") }
          );
        },
        Wt = function ({ schema: t, messages: e }, n, i) {
          const r = [];
          let s = !1;
          return (
            r.push("\n\t\tvar origValue = value;\n\t"),
            !0 === t.convert &&
              ((s = !0),
              r.push(
                "\n\t\t\tif (!(value instanceof Date)) {\n\t\t\t\tvalue = new Date(value);\n\t\t\t}\n\t\t"
              )),
            r.push(
              `\n\t\tif (!(value instanceof Date) || isNaN(value.getTime()))\n\t\t\t${this.makeError(
                { type: "date", actual: "origValue", messages: e }
              )}\n\n\t\treturn value;\n\t`
            ),
            { sanitized: s, source: r.join("\n") }
          );
        };
      const Ut = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        Xt = /^\S+@\S+\.\S+$/;
      var Qt = function ({ schema: t, messages: e }, n, i) {
          const r = [],
            s = "precise" == t.mode ? Ut : Xt;
          let a = !1;
          return (
            r.push(
              `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
                type: "string",
                actual: "value",
                messages: e,
              })}\n\t\t\treturn value;\n\t\t}\n\t`
            ),
            t.empty
              ? r.push("\n\t\t\tif (value.length === 0) return value;\n\t\t")
              : r.push(
                  `\n\t\t\tif (value.length === 0) {\n\t\t\t\t${this.makeError({
                    type: "emailEmpty",
                    actual: "value",
                    messages: e,
                  })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
                ),
            t.normalize &&
              ((a = !0),
              r.push("\n\t\t\tvalue = value.trim().toLowerCase();\n\t\t")),
            null != t.min &&
              r.push(
                `\n\t\t\tif (value.length < ${
                  t.min
                }) {\n\t\t\t\t${this.makeError({
                  type: "emailMin",
                  expected: t.min,
                  actual: "value.length",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.max &&
              r.push(
                `\n\t\t\tif (value.length > ${
                  t.max
                }) {\n\t\t\t\t${this.makeError({
                  type: "emailMax",
                  expected: t.max,
                  actual: "value.length",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            r.push(
              `\n\t\tif (!${s.toString()}.test(value)) {\n\t\t\t${this.makeError(
                { type: "email", actual: "value", messages: e }
              )}\n\t\t}\n\n\t\treturn value;\n\t`
            ),
            { sanitized: a, source: r.join("\n") }
          );
        },
        Zt = function ({ schema: t, messages: e }, n, i) {
          return {
            source: `\n\t\t\tif (${JSON.stringify(
              t.values || []
            )}.indexOf(value) === -1)\n\t\t\t\t${this.makeError({
              type: "enumValue",
              expected: '"' + t.values.join(", ") + '"',
              actual: "value",
              messages: e,
            })}\n\t\t\t\n\t\t\treturn value;\n\t\t`,
          };
        },
        Yt = function ({ schema: t, messages: e }, n, i) {
          const r = [];
          return (
            t.field
              ? (t.strict
                  ? r.push(
                      `\n\t\t\t\tif (value !== parent["${t.field}"])\n\t\t\t`
                    )
                  : r.push(
                      `\n\t\t\t\tif (value != parent["${t.field}"])\n\t\t\t`
                    ),
                r.push(
                  `\n\t\t\t\t${this.makeError({
                    type: "equalField",
                    actual: "value",
                    expected: JSON.stringify(t.field),
                    messages: e,
                  })}\n\t\t`
                ))
              : (t.strict
                  ? r.push(
                      `\n\t\t\t\tif (value !== ${JSON.stringify(
                        t.value
                      )})\n\t\t\t`
                    )
                  : r.push(
                      `\n\t\t\t\tif (value != ${JSON.stringify(
                        t.value
                      )})\n\t\t\t`
                    ),
                r.push(
                  `\n\t\t\t\t${this.makeError({
                    type: "equalValue",
                    actual: "value",
                    expected: JSON.stringify(t.value),
                    messages: e,
                  })}\n\t\t`
                )),
            r.push("\n\t\treturn value;\n\t"),
            { source: r.join("\n") }
          );
        },
        te = function ({ schema: t, messages: e }, n, i) {
          const r = [];
          return (
            r.push("\n\t\tif (value !== null && value !== undefined) {\n\t"),
            t.remove
              ? r.push("\n\t\t\treturn undefined;\n\t\t")
              : r.push(
                  `\n\t\t\t${this.makeError({
                    type: "forbidden",
                    actual: "value",
                    messages: e,
                  })}\n\t\t`
                ),
            r.push("\n\t\t}\n\n\t\treturn value;\n\t"),
            { source: r.join("\n") }
          );
        },
        ee = function ({ schema: t, messages: e }, n, i) {
          return {
            source: `\n\t\t\tif (typeof value !== "function")\n\t\t\t\t${this.makeError(
              { type: "function", actual: "value", messages: e }
            )}\n\n\t\t\treturn value;\n\t\t`,
          };
        },
        ne = function ({ schema: t, messages: e }, n, i) {
          const r = [];
          r.push(
            "\n\t\tvar prevErrLen = errors.length;\n\t\tvar errBefore;\n\t\tvar hasValid = false;\n\t\tvar newVal = value;\n\t"
          );
          for (let e = 0; e < t.rules.length; e++) {
            r.push(
              "\n\t\t\tif (!hasValid) {\n\t\t\t\terrBefore = errors.length;\n\t\t"
            );
            const s = this.getRuleFromSchema(t.rules[e]);
            r.push(
              this.compileRule(
                s,
                i,
                n,
                "var tmpVal = context.fn[%%INDEX%%](value, field, parent, errors, context);",
                "tmpVal"
              )
            ),
              r.push(
                "\n\t\t\t\tif (errors.length == errBefore) {\n\t\t\t\t\thasValid = true;\n\t\t\t\t\tnewVal = tmpVal;\n\t\t\t\t}\n\t\t\t}\n\t\t"
              );
          }
          return (
            r.push(
              "\n\t\tif (hasValid) {\n\t\t\terrors.length = prevErrLen;\n\t\t}\n\t\t\n\t\treturn newVal;\n\t"
            ),
            { source: r.join("\n") }
          );
        },
        ie = function ({ schema: t, messages: e }, n, i) {
          const r = [];
          r.push("\n\t\tvar origValue = value;\n\t");
          let s = !1;
          return (
            !0 === t.convert &&
              ((s = !0),
              r.push(
                '\n\t\t\tif (typeof value !== "number") {\n\t\t\t\tvalue = Number(value);\n\t\t\t}\n\t\t'
              )),
            r.push(
              `\n\t\tif (typeof value !== "number" || isNaN(value) || !isFinite(value)) {\n\t\t\t${this.makeError(
                { type: "number", actual: "origValue", messages: e }
              )}\n\t\t\treturn value;\n\t\t}\n\t`
            ),
            null != t.min &&
              r.push(
                `\n\t\t\tif (value < ${t.min}) {\n\t\t\t\t${this.makeError({
                  type: "numberMin",
                  expected: t.min,
                  actual: "origValue",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.max &&
              r.push(
                `\n\t\t\tif (value > ${t.max}) {\n\t\t\t\t${this.makeError({
                  type: "numberMax",
                  expected: t.max,
                  actual: "origValue",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.equal &&
              r.push(
                `\n\t\t\tif (value !== ${t.equal}) {\n\t\t\t\t${this.makeError({
                  type: "numberEqual",
                  expected: t.equal,
                  actual: "origValue",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.notEqual &&
              r.push(
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
              r.push(
                `\n\t\t\tif (value % 1 !== 0) {\n\t\t\t\t${this.makeError({
                  type: "numberInteger",
                  actual: "origValue",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            !0 === t.positive &&
              r.push(
                `\n\t\t\tif (value <= 0) {\n\t\t\t\t${this.makeError({
                  type: "numberPositive",
                  actual: "origValue",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            !0 === t.negative &&
              r.push(
                `\n\t\t\tif (value >= 0) {\n\t\t\t\t${this.makeError({
                  type: "numberNegative",
                  actual: "origValue",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            r.push("\n\t\treturn value;\n\t"),
            { sanitized: s, source: r.join("\n") }
          );
        };
      const re = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/,
        se = /["'\\\n\r\u2028\u2029]/g;
      function ae(t) {
        return t.replace(se, function (t) {
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
      var oe = function ({ schema: t, messages: e }, n, i) {
          const r = [];
          r.push(
            `\n\t\tif (typeof value !== "object" || value === null || Array.isArray(value)) {\n\t\t\t${this.makeError(
              { type: "object", actual: "value", messages: e }
            )}\n\t\t\treturn value;\n\t\t}\n\t`
          );
          const s = t.properties || t.props;
          if (s) {
            r.push("var parentObj = value;"),
              r.push("var parentField = field;");
            const a = Object.keys(s);
            for (let t = 0; t < a.length; t++) {
              const e = a[t],
                o = ae(e),
                u = re.test(o) ? "." + o : `['${o}']`,
                l = "parentObj" + u,
                c = (n ? n + "." : "") + e;
              r.push("\n// Field: " + ae(c)),
                r.push(`field = parentField ? parentField + "${u}" : "${o}";`),
                r.push(`value = ${l};`);
              const h = this.getRuleFromSchema(s[e]),
                p = `\n\t\t\t\t${l} = context.fn[%%INDEX%%](value, field, parentObj, errors, context);\n\t\t\t`;
              r.push(this.compileRule(h, i, c, p, l));
            }
            if (t.strict) {
              const n = Object.keys(s);
              r.push(
                `\n\t\t\t\tfield = parentField;\n\t\t\t\tvar invalidProps = [];\n\t\t\t\tvar props = Object.keys(parentObj);\n\n\t\t\t\tfor (let i = 0; i < props.length; i++) {\n\t\t\t\t\tif (${JSON.stringify(
                  n
                )}.indexOf(props[i]) === -1) {\n\t\t\t\t\t\tinvalidProps.push(props[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (invalidProps.length) {\n\t\t\t`
              ),
                "remove" == t.strict
                  ? r.push(
                      "\n\t\t\t\t\tinvalidProps.forEach(function(field) {\n\t\t\t\t\t\tdelete parentObj[field];\n\t\t\t\t\t});\n\t\t\t\t"
                    )
                  : r.push(
                      `\n\t\t\t\t\t${this.makeError({
                        type: "objectStrict",
                        expected: '"' + n.join(", ") + '"',
                        actual: "invalidProps.join(', ')",
                        messages: e,
                      })}\n\t\t\t\t`
                    ),
                r.push("\n\t\t\t\t}\n\t\t\t");
            }
          }
          return (
            (null == t.minProps && null == t.maxProps) ||
              (t.strict
                ? r.push(
                    `\n\t\t\t\tprops = Object.keys(${
                      s ? "parentObj" : "value"
                    });\n\t\t\t`
                  )
                : r.push(
                    `\n\t\t\t\tvar props = Object.keys(${
                      s ? "parentObj" : "value"
                    });\n\t\t\t\t${s ? "field = parentField;" : ""}\n\t\t\t`
                  )),
            null != t.minProps &&
              r.push(
                `\n\t\t\tif (props.length < ${
                  t.minProps
                }) {\n\t\t\t\t${this.makeError({
                  type: "objectMinProps",
                  expected: t.minProps,
                  actual: "props.length",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.maxProps &&
              r.push(
                `\n\t\t\tif (props.length > ${
                  t.maxProps
                }) {\n\t\t\t\t${this.makeError({
                  type: "objectMaxProps",
                  expected: t.maxProps,
                  actual: "props.length",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            s
              ? r.push("\n\t\t\treturn parentObj;\n\t\t")
              : r.push("\n\t\t\treturn value;\n\t\t"),
            { source: r.join("\n") }
          );
        },
        ue = function ({ schema: t, messages: e, index: n }, i, r) {
          const s = [];
          return (
            r.customs[n]
              ? (r.customs[n].schema = t)
              : (r.customs[n] = { schema: t }),
            s.push(
              `\n\t\tconst ObjectID = context.customs[${n}].schema.ObjectID;\n\t\tif (!ObjectID.isValid(value)) {\n\t\t\t${this.makeError(
                { type: "objectID", actual: "value", messages: e }
              )}\n\t\t\treturn;\n\t\t}\n\t`
            ),
            !0 === t.convert
              ? s.push("return new ObjectID(value)")
              : "hexString" === t.convert
              ? s.push("return value.toString()")
              : s.push("return value"),
            { source: s.join("\n") }
          );
        };
      const le = /^-?[0-9]\d*(\.\d+)?$/,
        ce = /^[a-zA-Z]+$/,
        he = /^[a-zA-Z0-9]+$/,
        pe = /^[a-zA-Z0-9_-]+$/,
        de = /^[0-9a-fA-F]+$/,
        fe = /^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
      var me = function ({ schema: t, messages: e }, n, i) {
          const r = [];
          let s = !1;
          if (
            (!0 === t.convert &&
              ((s = !0),
              r.push(
                '\n\t\t\tif (typeof value !== "string") {\n\t\t\t\tvalue = String(value);\n\t\t\t}\n\t\t'
              )),
            r.push(
              `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
                type: "string",
                actual: "value",
                messages: e,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar origValue = value;\n\t`
            ),
            t.trim && ((s = !0), r.push("\n\t\t\tvalue = value.trim();\n\t\t")),
            t.trimLeft &&
              ((s = !0), r.push("\n\t\t\tvalue = value.trimLeft();\n\t\t")),
            t.trimRight &&
              ((s = !0), r.push("\n\t\t\tvalue = value.trimRight();\n\t\t")),
            t.padStart)
          ) {
            s = !0;
            const e = null != t.padChar ? t.padChar : " ";
            r.push(
              `\n\t\t\tvalue = value.padStart(${t.padStart}, ${JSON.stringify(
                e
              )});\n\t\t`
            );
          }
          if (t.padEnd) {
            s = !0;
            const e = null != t.padChar ? t.padChar : " ";
            r.push(
              `\n\t\t\tvalue = value.padEnd(${t.padEnd}, ${JSON.stringify(
                e
              )});\n\t\t`
            );
          }
          if (
            (t.lowercase &&
              ((s = !0), r.push("\n\t\t\tvalue = value.toLowerCase();\n\t\t")),
            t.uppercase &&
              ((s = !0), r.push("\n\t\t\tvalue = value.toUpperCase();\n\t\t")),
            t.localeLowercase &&
              ((s = !0),
              r.push("\n\t\t\tvalue = value.toLocaleLowerCase();\n\t\t")),
            t.localeUppercase &&
              ((s = !0),
              r.push("\n\t\t\tvalue = value.toLocaleUpperCase();\n\t\t")),
            r.push("\n\t\t\tvar len = value.length;\n\t"),
            !1 === t.empty &&
              r.push(
                `\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({
                  type: "stringEmpty",
                  actual: "value",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.min &&
              r.push(
                `\n\t\t\tif (len < ${t.min}) {\n\t\t\t\t${this.makeError({
                  type: "stringMin",
                  expected: t.min,
                  actual: "len",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.max &&
              r.push(
                `\n\t\t\tif (len > ${t.max}) {\n\t\t\t\t${this.makeError({
                  type: "stringMax",
                  expected: t.max,
                  actual: "len",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            null != t.length &&
              r.push(
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
              (n = new RegExp(t.pattern, t.patternFlags));
            const i = `\n\t\t\tif (!${n.toString()}.test(value))\n\t\t\t\t${this.makeError(
              {
                type: "stringPattern",
                expected: `"${n.toString().replace(/"/g, "\\$&")}"`,
                actual: "origValue",
                messages: e,
              }
            )}\n\t\t`;
            r.push(
              `\n\t\t\tif (${t.empty} === true && len === 0) {\n\t\t\t\t// Do nothing\n\t\t\t} else {\n\t\t\t\t${i}\n\t\t\t}\n\t\t`
            );
          }
          if (
            (null != t.contains &&
              r.push(
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
            r.push(
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
              r.push(
                `\n\t\t\tif (!${le.toString()}.test(value) ) {\n\t\t\t\t${this.makeError(
                  { type: "stringNumeric", actual: "origValue", messages: e }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === t.alpha &&
              r.push(
                `\n\t\t\tif(!${ce.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlpha", actual: "origValue", messages: e }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === t.alphanum &&
              r.push(
                `\n\t\t\tif(!${he.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlphanum", actual: "origValue", messages: e }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === t.alphadash &&
              r.push(
                `\n\t\t\tif(!${pe.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlphadash", actual: "origValue", messages: e }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === t.hex &&
              r.push(
                `\n\t\t\tif(value.length % 2 !== 0 || !${de.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringHex", actual: "origValue", messages: e }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === t.singleLine &&
              r.push(
                `\n\t\t\tif(value.includes("\\n")) {\n\t\t\t\t${this.makeError({
                  type: "stringSingleLine",
                  messages: e,
                })}\n\t\t\t}\n\t\t`
              ),
            !0 === t.base64 &&
              r.push(
                `\n\t\t\tif(!${fe.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringBase64", actual: "origValue", messages: e }
                )}\n\t\t\t}\n\t\t`
              ),
            r.push("\n\t\treturn value;\n\t"),
            { sanitized: s, source: r.join("\n") }
          );
        },
        ve = function ({ schema: t, messages: e }, n, i) {
          const r = [];
          if (null != t.items) {
            if (!Array.isArray(t.items))
              throw new Error(
                `Invalid '${t.type}' schema. The 'items' field must be an array.`
              );
            if (0 === t.items.length)
              throw new Error(
                `Invalid '${t.type}' schema. The 'items' field must not be an empty array.`
              );
          }
          if (
            (r.push(
              `\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({
                type: "tuple",
                actual: "value",
                messages: e,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`
            ),
            !1 === t.empty &&
              r.push(
                `\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({
                  type: "tupleEmpty",
                  actual: "value",
                  messages: e,
                })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
              ),
            null != t.items)
          ) {
            r.push(
              `\n\t\t\tif (${
                t.empty
              } !== false && len === 0) {\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (len !== ${
                t.items.length
              }) {\n\t\t\t\t${this.makeError({
                type: "tupleLength",
                expected: t.items.length,
                actual: "len",
                messages: e,
              })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
            ),
              r.push(
                "\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t"
              );
            for (let e = 0; e < t.items.length; e++) {
              const s = `${n}[${e}]`,
                a = this.getRuleFromSchema(t.items[e]),
                o = `\n\t\t\tarr[${e}] = context.fn[%%INDEX%%](arr[${e}], (parentField ? parentField : "") + "[" + ${e} + "]", parent, errors, context);\n\t\t`;
              r.push(this.compileRule(a, i, s, o, `arr[${e}]`));
            }
          }
          return r.push("\n\t\treturn value;\n\t"), { source: r.join("\n") };
        };
      const ge = /^https?:\/\/\S+/;
      var ye = function ({ schema: t, messages: e }, n, i) {
        const r = [];
        return (
          r.push(
            `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
              type: "string",
              actual: "value",
              messages: e,
            })}\n\t\t\treturn value;\n\t\t}\n\t`
          ),
          t.empty
            ? r.push("\n\t\t\tif (value.length === 0) return value;\n\t\t")
            : r.push(
                `\n\t\t\tif (value.length === 0) {\n\t\t\t\t${this.makeError({
                  type: "urlEmpty",
                  actual: "value",
                  messages: e,
                })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
              ),
          r.push(
            `\n\t\tif (!${ge.toString()}.test(value)) {\n\t\t\t${this.makeError(
              { type: "url", actual: "value", messages: e }
            )}\n\t\t}\n\n\t\treturn value;\n\t`
          ),
          { source: r.join("\n") }
        );
      };
      const be = /^([0-9a-f]{8}-[0-9a-f]{4}-[1-6][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}|[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12})$/i;
      var xe = function ({ schema: t, messages: e }, n) {
        const i = [];
        return (
          i.push(
            `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
              type: "string",
              actual: "value",
              messages: e,
            })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar val = value.toLowerCase();\n\t\tif (!${be.toString()}.test(val)) {\n\t\t\t${this.makeError(
              { type: "uuid", actual: "value", messages: e }
            )}\n\t\t\treturn value;\n\t\t}\n\n\t\tconst version = val.charAt(14) | 0;\n\t`
          ),
          parseInt(t.version) < 7 &&
            i.push(
              `\n\t\t\tif (${
                t.version
              } !== version) {\n\t\t\t\t${this.makeError({
                type: "uuidVersion",
                expected: t.version,
                actual: "version",
                messages: e,
              })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
            ),
          i.push(
            `\n\t\tswitch (version) {\n\t\tcase 0:\n\t\tcase 1:\n\t\tcase 2:\n\t\tcase 6:\n\t\t\tbreak;\n\t\tcase 3:\n\t\tcase 4:\n\t\tcase 5:\n\t\t\tif (["8", "9", "a", "b"].indexOf(val.charAt(19)) === -1) {\n\t\t\t\t${this.makeError(
              { type: "uuid", actual: "value", messages: e }
            )}\n\t\t\t}\n\t\t}\n\n\t\treturn value;\n\t`
          ),
          { source: i.join("\n") }
        );
      };
      const ke = /^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;
      var we = function ({ schema: t, messages: e }, n, i) {
          return {
            source: `\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError(
              { type: "string", actual: "value", messages: e }
            )}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tvar v = value.toLowerCase();\n\t\t\tif (!${ke.toString()}.test(v)) {\n\t\t\t\t${this.makeError(
              { type: "mac", actual: "value", messages: e }
            )}\n\t\t\t}\n\t\t\t\n\t\t\treturn value;\n\t\t`,
          };
        },
        Ce = function ({ schema: t, messages: e }, n, i) {
          return {
            source: `\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError(
              { type: "string", actual: "value", messages: e }
            )}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (typeof value !== "string")\n\t\t\t\tvalue = String(value);\n\n\t\t\tval = value.replace(/\\D+/g, "");\n\n\t\t\tvar array = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];\n\t\t\tvar len = val ? val.length : 0,\n\t\t\t\tbit = 1,\n\t\t\t\tsum = 0;\n\t\t\twhile (len--) {\n\t\t\t\tsum += !(bit ^= 1) ? parseInt(val[len], 10) : array[val[len]];\n\t\t\t}\n\n\t\t\tif (!(sum % 10 === 0 && sum > 0)) {\n\t\t\t\t${this.makeError(
              { type: "luhn", actual: "value", messages: e }
            )}\n\t\t\t}\n\n\t\t\treturn value;\n\t\t`,
          };
        };
      function Oe(t) {
        var e = { exports: {} };
        return t(e, e.exports), e.exports;
      }
      function Ie(t) {
        throw new Error(
          'Could not dynamically require "' +
            t +
            '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
        );
      }
      let Pe, Ee, Ae, Me;
      var _e = function (t) {
          Pe ||
            ((Pe = Ie("prettier")),
            (Ee = {
              parser: "babel",
              useTabs: !1,
              printWidth: 120,
              trailingComma: "none",
              tabWidth: 4,
              singleQuote: !1,
              semi: !0,
              bracketSpacing: !0,
            }),
            (Ae = Ie("cli-highlight")),
            (Me = {
              language: "js",
              theme: Ae.fromJson({
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
          const e = Pe.format(t, Ee);
          return Ae.highlight(e, Me);
        },
        Te = "INUMBER",
        Se = "IOP1",
        De = "IOP2",
        je = "IOP3",
        Ve = "IVAR",
        Le = "IVARNAME",
        Ne = "IFUNCALL",
        $e = "IFUNDEF",
        Be = "IEXPR",
        Fe = "IEXPREVAL",
        Re = "IMEMBER",
        qe = "IENDSTATEMENT",
        ze = "IARRAY";
      function Ge(t, e) {
        (this.type = t), (this.value = null != e ? e : 0);
      }
      function He(t) {
        return new Ge(Se, t);
      }
      function Je(t) {
        return new Ge(De, t);
      }
      function Ke(t) {
        return new Ge(je, t);
      }
      function We(t, e, n) {
        var i,
          r,
          s,
          a,
          o,
          u,
          l = [];
        if (Xe(t)) return Qe(t, n);
        for (var c = t.length, h = 0; h < c; h++) {
          var p = t[h],
            d = p.type;
          if (d === Te || d === Le) l.push(p.value);
          else if (d === De)
            (r = l.pop()),
              (i = l.pop()),
              "and" === p.value
                ? l.push(!!i && !!We(r, e, n))
                : "or" === p.value
                ? l.push(!!i || !!We(r, e, n))
                : "=" === p.value
                ? ((a = e.binaryOps[p.value]), l.push(a(i, We(r, e, n), n)))
                : ((a = e.binaryOps[p.value]), l.push(a(Qe(i, n), Qe(r, n))));
          else if (d === je)
            (s = l.pop()),
              (r = l.pop()),
              (i = l.pop()),
              "?" === p.value
                ? l.push(We(i ? r : s, e, n))
                : ((a = e.ternaryOps[p.value]),
                  l.push(a(Qe(i, n), Qe(r, n), Qe(s, n))));
          else if (d === Ve)
            if (p.value in e.functions) l.push(e.functions[p.value]);
            else if (
              p.value in e.unaryOps &&
              e.parser.isOperatorEnabled(p.value)
            )
              l.push(e.unaryOps[p.value]);
            else {
              var f = n[p.value];
              if (void 0 === f)
                throw new Error("undefined variable: " + p.value);
              l.push(f);
            }
          else if (d === Se)
            (i = l.pop()), (a = e.unaryOps[p.value]), l.push(a(Qe(i, n)));
          else if (d === Ne) {
            for (u = p.value, o = []; u-- > 0; ) o.unshift(Qe(l.pop(), n));
            if (!(a = l.pop()).apply || !a.call)
              throw new Error(a + " is not a function");
            l.push(a.apply(void 0, o));
          } else if (d === $e)
            l.push(
              (function () {
                for (var t = l.pop(), i = [], r = p.value; r-- > 0; )
                  i.unshift(l.pop());
                var s = l.pop(),
                  a = function () {
                    for (
                      var r = Object.assign({}, n), s = 0, a = i.length;
                      s < a;
                      s++
                    )
                      r[i[s]] = arguments[s];
                    return We(t, e, r);
                  };
                return (
                  Object.defineProperty(a, "name", { value: s, writable: !1 }),
                  (n[s] = a),
                  a
                );
              })()
            );
          else if (d === Be) l.push(Ue(p, e));
          else if (d === Fe) l.push(p);
          else if (d === Re) (i = l.pop()), l.push(i[p.value]);
          else if (d === qe) l.pop();
          else {
            if (d !== ze) throw new Error("invalid Expression");
            for (u = p.value, o = []; u-- > 0; ) o.unshift(l.pop());
            l.push(o);
          }
        }
        if (l.length > 1) throw new Error("invalid Expression (parity)");
        return 0 === l[0] ? 0 : Qe(l[0], n);
      }
      function Ue(t, e, n) {
        return Xe(t)
          ? t
          : {
              type: Fe,
              value: function (n) {
                return We(t.value, e, n);
              },
            };
      }
      function Xe(t) {
        return t && t.type === Fe;
      }
      function Qe(t, e) {
        return Xe(t) ? t.value(e) : t;
      }
      function Ze(t, e) {
        for (var n, i, r, s, a, o, u = [], l = 0; l < t.length; l++) {
          var c = t[l],
            h = c.type;
          if (h === Te)
            "number" == typeof c.value && c.value < 0
              ? u.push("(" + c.value + ")")
              : Array.isArray(c.value)
              ? u.push("[" + c.value.map(Ye).join(", ") + "]")
              : u.push(Ye(c.value));
          else if (h === De)
            (i = u.pop()),
              (n = u.pop()),
              (s = c.value),
              e
                ? "^" === s
                  ? u.push("Math.pow(" + n + ", " + i + ")")
                  : "and" === s
                  ? u.push("(!!" + n + " && !!" + i + ")")
                  : "or" === s
                  ? u.push("(!!" + n + " || !!" + i + ")")
                  : "||" === s
                  ? u.push(
                      "(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }((" +
                        n +
                        "),(" +
                        i +
                        ")))"
                    )
                  : "==" === s
                  ? u.push("(" + n + " === " + i + ")")
                  : "!=" === s
                  ? u.push("(" + n + " !== " + i + ")")
                  : "[" === s
                  ? u.push(n + "[(" + i + ") | 0]")
                  : u.push("(" + n + " " + s + " " + i + ")")
                : "[" === s
                ? u.push(n + "[" + i + "]")
                : u.push("(" + n + " " + s + " " + i + ")");
          else if (h === je) {
            if (
              ((r = u.pop()),
              (i = u.pop()),
              (n = u.pop()),
              "?" !== (s = c.value))
            )
              throw new Error("invalid Expression");
            u.push("(" + n + " ? " + i + " : " + r + ")");
          } else if (h === Ve || h === Le) u.push(c.value);
          else if (h === Se)
            (n = u.pop()),
              "-" === (s = c.value) || "+" === s
                ? u.push("(" + s + n + ")")
                : e
                ? "not" === s
                  ? u.push("(!" + n + ")")
                  : "!" === s
                  ? u.push("fac(" + n + ")")
                  : u.push(s + "(" + n + ")")
                : "!" === s
                ? u.push("(" + n + "!)")
                : u.push("(" + s + " " + n + ")");
          else if (h === Ne) {
            for (o = c.value, a = []; o-- > 0; ) a.unshift(u.pop());
            (s = u.pop()), u.push(s + "(" + a.join(", ") + ")");
          } else if (h === $e) {
            for (i = u.pop(), o = c.value, a = []; o-- > 0; )
              a.unshift(u.pop());
            (n = u.pop()),
              e
                ? u.push(
                    "(" +
                      n +
                      " = function(" +
                      a.join(", ") +
                      ") { return " +
                      i +
                      " })"
                  )
                : u.push("(" + n + "(" + a.join(", ") + ") = " + i + ")");
          } else if (h === Re) (n = u.pop()), u.push(n + "." + c.value);
          else if (h === ze) {
            for (o = c.value, a = []; o-- > 0; ) a.unshift(u.pop());
            u.push("[" + a.join(", ") + "]");
          } else if (h === Be) u.push("(" + Ze(c.value, e) + ")");
          else if (h !== qe) throw new Error("invalid Expression");
        }
        return (
          u.length > 1 && (u = e ? [u.join(",")] : [u.join(";")]), String(u[0])
        );
      }
      function Ye(t) {
        return "string" == typeof t
          ? JSON.stringify(t)
              .replace(/\u2028/g, "\\u2028")
              .replace(/\u2029/g, "\\u2029")
          : t;
      }
      function tn(t, e) {
        for (var n = 0; n < t.length; n++) if (t[n] === e) return !0;
        return !1;
      }
      function en(t, e, n) {
        for (
          var i = !!(n = n || {}).withMembers, r = null, s = 0;
          s < t.length;
          s++
        ) {
          var a = t[s];
          a.type === Ve || a.type === Le
            ? i || tn(e, a.value)
              ? null !== r
                ? (tn(e, r) || e.push(r), (r = a.value))
                : (r = a.value)
              : e.push(a.value)
            : a.type === Re && i && null !== r
            ? (r += "." + a.value)
            : a.type === Be
            ? en(a.value, e, n)
            : null !== r && (tn(e, r) || e.push(r), (r = null));
        }
        null === r || tn(e, r) || e.push(r);
      }
      function nn(t, e) {
        (this.tokens = t),
          (this.parser = e),
          (this.unaryOps = e.unaryOps),
          (this.binaryOps = e.binaryOps),
          (this.ternaryOps = e.ternaryOps),
          (this.functions = e.functions);
      }
      (Ge.prototype.toString = function () {
        switch (this.type) {
          case Te:
          case Se:
          case De:
          case je:
          case Ve:
          case Le:
          case qe:
            return this.value;
          case Ne:
            return "CALL " + this.value;
          case $e:
            return "DEF " + this.value;
          case ze:
            return "ARRAY " + this.value;
          case Re:
            return "." + this.value;
          default:
            return "Invalid Instruction";
        }
      }),
        (nn.prototype.simplify = function (t) {
          return (
            (t = t || {}),
            new nn(
              (function t(e, n, i, r, s) {
                for (var a, o, u, l, c = [], h = [], p = 0; p < e.length; p++) {
                  var d = e[p],
                    f = d.type;
                  if (f === Te || f === Le)
                    Array.isArray(d.value)
                      ? c.push.apply(
                          c,
                          t(
                            d.value
                              .map(function (t) {
                                return new Ge(Te, t);
                              })
                              .concat(new Ge(ze, d.value.length)),
                            n,
                            i,
                            r,
                            s
                          )
                        )
                      : c.push(d);
                  else if (f === Ve && s.hasOwnProperty(d.value))
                    (d = new Ge(Te, s[d.value])), c.push(d);
                  else if (f === De && c.length > 1)
                    (o = c.pop()),
                      (a = c.pop()),
                      (l = i[d.value]),
                      (d = new Ge(Te, l(a.value, o.value))),
                      c.push(d);
                  else if (f === je && c.length > 2)
                    (u = c.pop()),
                      (o = c.pop()),
                      (a = c.pop()),
                      "?" === d.value
                        ? c.push(a.value ? o.value : u.value)
                        : ((l = r[d.value]),
                          (d = new Ge(Te, l(a.value, o.value, u.value))),
                          c.push(d));
                  else if (f === Se && c.length > 0)
                    (a = c.pop()),
                      (l = n[d.value]),
                      (d = new Ge(Te, l(a.value))),
                      c.push(d);
                  else if (f === Be) {
                    for (; c.length > 0; ) h.push(c.shift());
                    h.push(new Ge(Be, t(d.value, n, i, r, s)));
                  } else if (f === Re && c.length > 0)
                    (a = c.pop()), c.push(new Ge(Te, a.value[d.value]));
                  else {
                    for (; c.length > 0; ) h.push(c.shift());
                    h.push(d);
                  }
                }
                for (; c.length > 0; ) h.push(c.shift());
                return h;
              })(
                this.tokens,
                this.unaryOps,
                this.binaryOps,
                this.ternaryOps,
                t
              ),
              this.parser
            )
          );
        }),
        (nn.prototype.substitute = function (t, e) {
          return (
            e instanceof nn || (e = this.parser.parse(String(e))),
            new nn(
              (function t(e, n, i) {
                for (var r = [], s = 0; s < e.length; s++) {
                  var a = e[s],
                    o = a.type;
                  if (o === Ve && a.value === n)
                    for (var u = 0; u < i.tokens.length; u++) {
                      var l,
                        c = i.tokens[u];
                      (l =
                        c.type === Se
                          ? He(c.value)
                          : c.type === De
                          ? Je(c.value)
                          : c.type === je
                          ? Ke(c.value)
                          : new Ge(c.type, c.value)),
                        r.push(l);
                    }
                  else
                    o === Be ? r.push(new Ge(Be, t(a.value, n, i))) : r.push(a);
                }
                return r;
              })(this.tokens, t, e),
              this.parser
            )
          );
        }),
        (nn.prototype.evaluate = function (t) {
          return (t = t || {}), We(this.tokens, this, t);
        }),
        (nn.prototype.toString = function () {
          return Ze(this.tokens, !1);
        }),
        (nn.prototype.symbols = function (t) {
          t = t || {};
          var e = [];
          return en(this.tokens, e, t), e;
        }),
        (nn.prototype.variables = function (t) {
          t = t || {};
          var e = [];
          en(this.tokens, e, t);
          var n = this.functions;
          return e.filter(function (t) {
            return !(t in n);
          });
        }),
        (nn.prototype.toJSFunction = function (t, e) {
          var n = this,
            i = new Function(
              t,
              "with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return " +
                Ze(this.simplify(e).tokens, !0) +
                "; }"
            );
          return function () {
            return i.apply(n, arguments);
          };
        });
      var rn = "TEOF",
        sn = "TOP",
        an = "TNUMBER",
        on = "TSTRING",
        un = "TPAREN",
        ln = "TBRACKET",
        cn = "TCOMMA",
        hn = "TNAME",
        pn = "TSEMICOLON";
      function dn(t, e, n) {
        (this.type = t), (this.value = e), (this.index = n);
      }
      function fn(t, e) {
        (this.pos = 0),
          (this.current = null),
          (this.unaryOps = t.unaryOps),
          (this.binaryOps = t.binaryOps),
          (this.ternaryOps = t.ternaryOps),
          (this.consts = t.consts),
          (this.expression = e),
          (this.savedPosition = 0),
          (this.savedCurrent = null),
          (this.options = t.options),
          (this.parser = t);
      }
      (dn.prototype.toString = function () {
        return this.type + ": " + this.value;
      }),
        (fn.prototype.newToken = function (t, e, n) {
          return new dn(t, e, null != n ? n : this.pos);
        }),
        (fn.prototype.save = function () {
          (this.savedPosition = this.pos), (this.savedCurrent = this.current);
        }),
        (fn.prototype.restore = function () {
          (this.pos = this.savedPosition), (this.current = this.savedCurrent);
        }),
        (fn.prototype.next = function () {
          return this.pos >= this.expression.length
            ? this.newToken(rn, "EOF")
            : this.isWhitespace() || this.isComment()
            ? this.next()
            : this.isRadixInteger() ||
              this.isNumber() ||
              this.isOperator() ||
              this.isString() ||
              this.isParen() ||
              this.isBracket() ||
              this.isComma() ||
              this.isSemicolon() ||
              this.isNamedOp() ||
              this.isConst() ||
              this.isName()
            ? this.current
            : void this.parseError(
                'Unknown character "' + this.expression.charAt(this.pos) + '"'
              );
        }),
        (fn.prototype.isString = function () {
          var t = !1,
            e = this.pos,
            n = this.expression.charAt(e);
          if ("'" === n || '"' === n)
            for (
              var i = this.expression.indexOf(n, e + 1);
              i >= 0 && this.pos < this.expression.length;

            ) {
              if (
                ((this.pos = i + 1), "\\" !== this.expression.charAt(i - 1))
              ) {
                var r = this.expression.substring(e + 1, i);
                (this.current = this.newToken(on, this.unescape(r), e)),
                  (t = !0);
                break;
              }
              i = this.expression.indexOf(n, i + 1);
            }
          return t;
        }),
        (fn.prototype.isParen = function () {
          var t = this.expression.charAt(this.pos);
          return (
            ("(" === t || ")" === t) &&
            ((this.current = this.newToken(un, t)), this.pos++, !0)
          );
        }),
        (fn.prototype.isBracket = function () {
          var t = this.expression.charAt(this.pos);
          return !(
            ("[" !== t && "]" !== t) ||
            !this.isOperatorEnabled("[") ||
            ((this.current = this.newToken(ln, t)), this.pos++, 0)
          );
        }),
        (fn.prototype.isComma = function () {
          return (
            "," === this.expression.charAt(this.pos) &&
            ((this.current = this.newToken(cn, ",")), this.pos++, !0)
          );
        }),
        (fn.prototype.isSemicolon = function () {
          return (
            ";" === this.expression.charAt(this.pos) &&
            ((this.current = this.newToken(pn, ";")), this.pos++, !0)
          );
        }),
        (fn.prototype.isConst = function () {
          for (var t = this.pos, e = t; e < this.expression.length; e++) {
            var n = this.expression.charAt(e);
            if (
              n.toUpperCase() === n.toLowerCase() &&
              (e === this.pos ||
                ("_" !== n && "." !== n && (n < "0" || n > "9")))
            )
              break;
          }
          if (e > t) {
            var i = this.expression.substring(t, e);
            if (i in this.consts)
              return (
                (this.current = this.newToken(an, this.consts[i])),
                (this.pos += i.length),
                !0
              );
          }
          return !1;
        }),
        (fn.prototype.isNamedOp = function () {
          for (var t = this.pos, e = t; e < this.expression.length; e++) {
            var n = this.expression.charAt(e);
            if (
              n.toUpperCase() === n.toLowerCase() &&
              (e === this.pos || ("_" !== n && (n < "0" || n > "9")))
            )
              break;
          }
          if (e > t) {
            var i = this.expression.substring(t, e);
            if (
              this.isOperatorEnabled(i) &&
              (i in this.binaryOps ||
                i in this.unaryOps ||
                i in this.ternaryOps)
            )
              return (
                (this.current = this.newToken(sn, i)),
                (this.pos += i.length),
                !0
              );
          }
          return !1;
        }),
        (fn.prototype.isName = function () {
          for (
            var t = this.pos, e = t, n = !1;
            e < this.expression.length;
            e++
          ) {
            var i = this.expression.charAt(e);
            if (i.toUpperCase() === i.toLowerCase()) {
              if (e === this.pos && ("$" === i || "_" === i)) {
                "_" === i && (n = !0);
                continue;
              }
              if (e === this.pos || !n || ("_" !== i && (i < "0" || i > "9")))
                break;
            } else n = !0;
          }
          if (n) {
            var r = this.expression.substring(t, e);
            return (
              (this.current = this.newToken(hn, r)), (this.pos += r.length), !0
            );
          }
          return !1;
        }),
        (fn.prototype.isWhitespace = function () {
          for (
            var t = !1, e = this.expression.charAt(this.pos);
            !(
              (" " !== e && "\t" !== e && "\n" !== e && "\r" !== e) ||
              ((t = !0), this.pos++, this.pos >= this.expression.length)
            );

          )
            e = this.expression.charAt(this.pos);
          return t;
        });
      var mn = /^[0-9a-f]{4}$/i;
      function vn(t, e, n) {
        (this.parser = t),
          (this.tokens = e),
          (this.current = null),
          (this.nextToken = null),
          this.next(),
          (this.savedCurrent = null),
          (this.savedNextToken = null),
          (this.allowMemberAccess = !1 !== n.allowMemberAccess);
      }
      (fn.prototype.unescape = function (t) {
        var e = t.indexOf("\\");
        if (e < 0) return t;
        for (var n = t.substring(0, e); e >= 0; ) {
          var i = t.charAt(++e);
          switch (i) {
            case "'":
              n += "'";
              break;
            case '"':
              n += '"';
              break;
            case "\\":
              n += "\\";
              break;
            case "/":
              n += "/";
              break;
            case "b":
              n += "\b";
              break;
            case "f":
              n += "\f";
              break;
            case "n":
              n += "\n";
              break;
            case "r":
              n += "\r";
              break;
            case "t":
              n += "\t";
              break;
            case "u":
              var r = t.substring(e + 1, e + 5);
              mn.test(r) || this.parseError("Illegal escape sequence: \\u" + r),
                (n += String.fromCharCode(parseInt(r, 16))),
                (e += 4);
              break;
            default:
              throw this.parseError('Illegal escape sequence: "\\' + i + '"');
          }
          ++e;
          var s = t.indexOf("\\", e);
          (n += t.substring(e, s < 0 ? t.length : s)), (e = s);
        }
        return n;
      }),
        (fn.prototype.isComment = function () {
          return (
            "/" === this.expression.charAt(this.pos) &&
            "*" === this.expression.charAt(this.pos + 1) &&
            ((this.pos = this.expression.indexOf("*/", this.pos) + 2),
            1 === this.pos && (this.pos = this.expression.length),
            !0)
          );
        }),
        (fn.prototype.isRadixInteger = function () {
          var t,
            e,
            n = this.pos;
          if (
            n >= this.expression.length - 2 ||
            "0" !== this.expression.charAt(n)
          )
            return !1;
          if ((++n, "x" === this.expression.charAt(n)))
            (t = 16), (e = /^[0-9a-f]$/i), ++n;
          else {
            if ("b" !== this.expression.charAt(n)) return !1;
            (t = 2), (e = /^[01]$/i), ++n;
          }
          for (var i = !1, r = n; n < this.expression.length; ) {
            var s = this.expression.charAt(n);
            if (!e.test(s)) break;
            n++, (i = !0);
          }
          return (
            i &&
              ((this.current = this.newToken(
                an,
                parseInt(this.expression.substring(r, n), t)
              )),
              (this.pos = n)),
            i
          );
        }),
        (fn.prototype.isNumber = function () {
          for (
            var t, e = !1, n = this.pos, i = n, r = n, s = !1, a = !1;
            n < this.expression.length &&
            (((t = this.expression.charAt(n)) >= "0" && t <= "9") ||
              (!s && "." === t));

          )
            "." === t ? (s = !0) : (a = !0), n++, (e = a);
          if ((e && (r = n), "e" === t || "E" === t)) {
            n++;
            for (var o = !0, u = !1; n < this.expression.length; ) {
              if (
                ((t = this.expression.charAt(n)),
                !o || ("+" !== t && "-" !== t))
              ) {
                if (!(t >= "0" && t <= "9")) break;
                (u = !0), (o = !1);
              } else o = !1;
              n++;
            }
            u || (n = r);
          }
          return (
            e
              ? ((this.current = this.newToken(
                  an,
                  parseFloat(this.expression.substring(i, n))
                )),
                (this.pos = n))
              : (this.pos = r),
            e
          );
        }),
        (fn.prototype.isOperator = function () {
          var t = this.pos,
            e = this.expression.charAt(this.pos);
          if (
            "+" === e ||
            "-" === e ||
            "*" === e ||
            "/" === e ||
            "%" === e ||
            "^" === e ||
            "?" === e ||
            ":" === e ||
            "." === e
          )
            this.current = this.newToken(sn, e);
          else if ("∙" === e || "•" === e)
            this.current = this.newToken(sn, "*");
          else if (">" === e)
            "=" === this.expression.charAt(this.pos + 1)
              ? ((this.current = this.newToken(sn, ">=")), this.pos++)
              : (this.current = this.newToken(sn, ">"));
          else if ("<" === e)
            "=" === this.expression.charAt(this.pos + 1)
              ? ((this.current = this.newToken(sn, "<=")), this.pos++)
              : (this.current = this.newToken(sn, "<"));
          else if ("|" === e) {
            if ("|" !== this.expression.charAt(this.pos + 1)) return !1;
            (this.current = this.newToken(sn, "||")), this.pos++;
          } else if ("=" === e)
            "=" === this.expression.charAt(this.pos + 1)
              ? ((this.current = this.newToken(sn, "==")), this.pos++)
              : (this.current = this.newToken(sn, e));
          else {
            if ("!" !== e) return !1;
            "=" === this.expression.charAt(this.pos + 1)
              ? ((this.current = this.newToken(sn, "!=")), this.pos++)
              : (this.current = this.newToken(sn, e));
          }
          return (
            this.pos++,
            !!this.isOperatorEnabled(this.current.value) || ((this.pos = t), !1)
          );
        }),
        (fn.prototype.isOperatorEnabled = function (t) {
          return this.parser.isOperatorEnabled(t);
        }),
        (fn.prototype.getCoordinates = function () {
          var t,
            e = 0,
            n = -1;
          do {
            e++, (t = this.pos - n), (n = this.expression.indexOf("\n", n + 1));
          } while (n >= 0 && n < this.pos);
          return { line: e, column: t };
        }),
        (fn.prototype.parseError = function (t) {
          var e = this.getCoordinates();
          throw new Error(
            "parse error [" + e.line + ":" + e.column + "]: " + t
          );
        }),
        (vn.prototype.next = function () {
          return (
            (this.current = this.nextToken),
            (this.nextToken = this.tokens.next())
          );
        }),
        (vn.prototype.tokenMatches = function (t, e) {
          return (
            void 0 === e ||
            (Array.isArray(e)
              ? tn(e, t.value)
              : "function" == typeof e
              ? e(t)
              : t.value === e)
          );
        }),
        (vn.prototype.save = function () {
          (this.savedCurrent = this.current),
            (this.savedNextToken = this.nextToken),
            this.tokens.save();
        }),
        (vn.prototype.restore = function () {
          this.tokens.restore(),
            (this.current = this.savedCurrent),
            (this.nextToken = this.savedNextToken);
        }),
        (vn.prototype.accept = function (t, e) {
          return !(
            this.nextToken.type !== t ||
            !this.tokenMatches(this.nextToken, e) ||
            (this.next(), 0)
          );
        }),
        (vn.prototype.expect = function (t, e) {
          if (!this.accept(t, e)) {
            var n = this.tokens.getCoordinates();
            throw new Error(
              "parse error [" +
                n.line +
                ":" +
                n.column +
                "]: Expected " +
                (e || t)
            );
          }
        }),
        (vn.prototype.parseAtom = function (t) {
          var e = this.tokens.unaryOps;
          if (
            this.accept(hn) ||
            this.accept(sn, function (t) {
              return t.value in e;
            })
          )
            t.push(new Ge(Ve, this.current.value));
          else if (this.accept(an)) t.push(new Ge(Te, this.current.value));
          else if (this.accept(on)) t.push(new Ge(Te, this.current.value));
          else if (this.accept(un, "("))
            this.parseExpression(t), this.expect(un, ")");
          else {
            if (!this.accept(ln, "["))
              throw new Error("unexpected " + this.nextToken);
            if (this.accept(ln, "]")) t.push(new Ge(ze, 0));
            else {
              var n = this.parseArrayList(t);
              t.push(new Ge(ze, n));
            }
          }
        }),
        (vn.prototype.parseExpression = function (t) {
          var e = [];
          this.parseUntilEndStatement(t, e) ||
            (this.parseVariableAssignmentExpression(e),
            this.parseUntilEndStatement(t, e) || this.pushExpression(t, e));
        }),
        (vn.prototype.pushExpression = function (t, e) {
          for (var n = 0, i = e.length; n < i; n++) t.push(e[n]);
        }),
        (vn.prototype.parseUntilEndStatement = function (t, e) {
          return (
            !!this.accept(pn) &&
            (!this.nextToken ||
              this.nextToken.type === rn ||
              (this.nextToken.type === un && ")" === this.nextToken.value) ||
              e.push(new Ge(qe)),
            this.nextToken.type !== rn && this.parseExpression(e),
            t.push(new Ge(Be, e)),
            !0)
          );
        }),
        (vn.prototype.parseArrayList = function (t) {
          for (var e = 0; !this.accept(ln, "]"); )
            for (this.parseExpression(t), ++e; this.accept(cn); )
              this.parseExpression(t), ++e;
          return e;
        }),
        (vn.prototype.parseVariableAssignmentExpression = function (t) {
          for (this.parseConditionalExpression(t); this.accept(sn, "="); ) {
            var e = t.pop(),
              n = [],
              i = t.length - 1;
            if (e.type !== Ne) {
              if (e.type !== Ve && e.type !== Re)
                throw new Error("expected variable for assignment");
              this.parseVariableAssignmentExpression(n),
                t.push(new Ge(Le, e.value)),
                t.push(new Ge(Be, n)),
                t.push(Je("="));
            } else {
              if (!this.tokens.isOperatorEnabled("()="))
                throw new Error("function definition is not permitted");
              for (var r = 0, s = e.value + 1; r < s; r++) {
                var a = i - r;
                t[a].type === Ve && (t[a] = new Ge(Le, t[a].value));
              }
              this.parseVariableAssignmentExpression(n),
                t.push(new Ge(Be, n)),
                t.push(new Ge($e, e.value));
            }
          }
        }),
        (vn.prototype.parseConditionalExpression = function (t) {
          for (this.parseOrExpression(t); this.accept(sn, "?"); ) {
            var e = [],
              n = [];
            this.parseConditionalExpression(e),
              this.expect(sn, ":"),
              this.parseConditionalExpression(n),
              t.push(new Ge(Be, e)),
              t.push(new Ge(Be, n)),
              t.push(Ke("?"));
          }
        }),
        (vn.prototype.parseOrExpression = function (t) {
          for (this.parseAndExpression(t); this.accept(sn, "or"); ) {
            var e = [];
            this.parseAndExpression(e), t.push(new Ge(Be, e)), t.push(Je("or"));
          }
        }),
        (vn.prototype.parseAndExpression = function (t) {
          for (this.parseComparison(t); this.accept(sn, "and"); ) {
            var e = [];
            this.parseComparison(e), t.push(new Ge(Be, e)), t.push(Je("and"));
          }
        });
      var gn = ["==", "!=", "<", "<=", ">=", ">", "in"];
      vn.prototype.parseComparison = function (t) {
        for (this.parseAddSub(t); this.accept(sn, gn); ) {
          var e = this.current;
          this.parseAddSub(t), t.push(Je(e.value));
        }
      };
      var yn = ["+", "-", "||"];
      vn.prototype.parseAddSub = function (t) {
        for (this.parseTerm(t); this.accept(sn, yn); ) {
          var e = this.current;
          this.parseTerm(t), t.push(Je(e.value));
        }
      };
      var bn = ["*", "/", "%"];
      function xn(t, e) {
        return Number(t) + Number(e);
      }
      function kn(t, e) {
        return t - e;
      }
      function wn(t, e) {
        return t * e;
      }
      function Cn(t, e) {
        return t / e;
      }
      function On(t, e) {
        return t % e;
      }
      function In(t, e) {
        return Array.isArray(t) && Array.isArray(e) ? t.concat(e) : "" + t + e;
      }
      function Pn(t, e) {
        return t === e;
      }
      function En(t, e) {
        return t !== e;
      }
      function An(t, e) {
        return t > e;
      }
      function Mn(t, e) {
        return t < e;
      }
      function _n(t, e) {
        return t >= e;
      }
      function Tn(t, e) {
        return t <= e;
      }
      function Sn(t, e) {
        return Boolean(t && e);
      }
      function Dn(t, e) {
        return Boolean(t || e);
      }
      function jn(t, e) {
        return tn(e, t);
      }
      function Vn(t) {
        return (Math.exp(t) - Math.exp(-t)) / 2;
      }
      function Ln(t) {
        return (Math.exp(t) + Math.exp(-t)) / 2;
      }
      function Nn(t) {
        return t === 1 / 0
          ? 1
          : t === -1 / 0
          ? -1
          : (Math.exp(t) - Math.exp(-t)) / (Math.exp(t) + Math.exp(-t));
      }
      function $n(t) {
        return t === -1 / 0 ? t : Math.log(t + Math.sqrt(t * t + 1));
      }
      function Bn(t) {
        return Math.log(t + Math.sqrt(t * t - 1));
      }
      function Fn(t) {
        return Math.log((1 + t) / (1 - t)) / 2;
      }
      function Rn(t) {
        return Math.log(t) * Math.LOG10E;
      }
      function qn(t) {
        return -t;
      }
      function zn(t) {
        return !t;
      }
      function Gn(t) {
        return t < 0 ? Math.ceil(t) : Math.floor(t);
      }
      function Hn(t) {
        return Math.random() * (t || 1);
      }
      function Jn(t) {
        return Wn(t + 1);
      }
      (vn.prototype.parseTerm = function (t) {
        for (this.parseFactor(t); this.accept(sn, bn); ) {
          var e = this.current;
          this.parseFactor(t), t.push(Je(e.value));
        }
      }),
        (vn.prototype.parseFactor = function (t) {
          var e = this.tokens.unaryOps;
          if (
            (this.save(),
            this.accept(sn, function (t) {
              return t.value in e;
            }))
          ) {
            if ("-" !== this.current.value && "+" !== this.current.value) {
              if (this.nextToken.type === un && "(" === this.nextToken.value)
                return this.restore(), void this.parseExponential(t);
              if (
                this.nextToken.type === pn ||
                this.nextToken.type === cn ||
                this.nextToken.type === rn ||
                (this.nextToken.type === un && ")" === this.nextToken.value)
              )
                return this.restore(), void this.parseAtom(t);
            }
            var n = this.current;
            this.parseFactor(t), t.push(He(n.value));
          } else this.parseExponential(t);
        }),
        (vn.prototype.parseExponential = function (t) {
          for (this.parsePostfixExpression(t); this.accept(sn, "^"); )
            this.parseFactor(t), t.push(Je("^"));
        }),
        (vn.prototype.parsePostfixExpression = function (t) {
          for (this.parseFunctionCall(t); this.accept(sn, "!"); )
            t.push(He("!"));
        }),
        (vn.prototype.parseFunctionCall = function (t) {
          var e = this.tokens.unaryOps;
          if (
            this.accept(sn, function (t) {
              return t.value in e;
            })
          ) {
            var n = this.current;
            this.parseAtom(t), t.push(He(n.value));
          } else
            for (this.parseMemberExpression(t); this.accept(un, "("); )
              if (this.accept(un, ")")) t.push(new Ge(Ne, 0));
              else {
                var i = this.parseArgumentList(t);
                t.push(new Ge(Ne, i));
              }
        }),
        (vn.prototype.parseArgumentList = function (t) {
          for (var e = 0; !this.accept(un, ")"); )
            for (this.parseExpression(t), ++e; this.accept(cn); )
              this.parseExpression(t), ++e;
          return e;
        }),
        (vn.prototype.parseMemberExpression = function (t) {
          for (
            this.parseAtom(t);
            this.accept(sn, ".") || this.accept(ln, "[");

          ) {
            var e = this.current;
            if ("." === e.value) {
              if (!this.allowMemberAccess)
                throw new Error(
                  'unexpected ".", member access is not permitted'
                );
              this.expect(hn), t.push(new Ge(Re, this.current.value));
            } else {
              if ("[" !== e.value)
                throw new Error("unexpected symbol: " + e.value);
              if (!this.tokens.isOperatorEnabled("["))
                throw new Error('unexpected "[]", arrays are disabled');
              this.parseExpression(t), this.expect(ln, "]"), t.push(Je("["));
            }
          }
        });
      var Kn = [
        0.9999999999999971,
        57.15623566586292,
        -59.59796035547549,
        14.136097974741746,
        -0.4919138160976202,
        3399464998481189e-20,
        4652362892704858e-20,
        -9837447530487956e-20,
        0.0001580887032249125,
        -0.00021026444172410488,
        0.00021743961811521265,
        -0.0001643181065367639,
        8441822398385275e-20,
        -26190838401581408e-21,
        36899182659531625e-22,
      ];
      function Wn(t) {
        var e, n;
        if (
          (function (t) {
            return isFinite(t) && t === Math.round(t);
          })(t)
        ) {
          if (t <= 0) return isFinite(t) ? 1 / 0 : NaN;
          if (t > 171) return 1 / 0;
          for (var i = t - 2, r = t - 1; i > 1; ) (r *= i), i--;
          return 0 === r && (r = 1), r;
        }
        if (t < 0.5) return Math.PI / (Math.sin(Math.PI * t) * Wn(1 - t));
        if (t >= 171.35) return 1 / 0;
        if (t > 85) {
          var s = t * t,
            a = s * t,
            o = a * t,
            u = o * t;
          return (
            Math.sqrt((2 * Math.PI) / t) *
            Math.pow(t / Math.E, t) *
            (1 +
              1 / (12 * t) +
              1 / (288 * s) -
              139 / (51840 * a) -
              571 / (2488320 * o) +
              163879 / (209018880 * u) +
              5246819 / (75246796800 * u * t))
          );
        }
        --t, (n = Kn[0]);
        for (var l = 1; l < Kn.length; ++l) n += Kn[l] / (t + l);
        return (
          (e = t + 4.7421875 + 0.5),
          Math.sqrt(2 * Math.PI) * Math.pow(e, t + 0.5) * Math.exp(-e) * n
        );
      }
      function Un(t) {
        return Array.isArray(t) ? t.length : String(t).length;
      }
      function Xn() {
        for (var t = 0, e = 0, n = 0; n < arguments.length; n++) {
          var i,
            r = Math.abs(arguments[n]);
          e < r
            ? ((t = t * (i = e / r) * i + 1), (e = r))
            : (t += r > 0 ? (i = r / e) * i : r);
        }
        return e === 1 / 0 ? 1 / 0 : e * Math.sqrt(t);
      }
      function Qn(t, e, n) {
        return t ? e : n;
      }
      function Zn(t, e) {
        return void 0 === e || 0 == +e
          ? Math.round(t)
          : ((t = +t),
            (e = -+e),
            isNaN(t) || "number" != typeof e || e % 1 != 0
              ? NaN
              : ((t = t.toString().split("e")),
                +(
                  (t = (t = Math.round(+(t[0] + "e" + (t[1] ? +t[1] - e : -e))))
                    .toString()
                    .split("e"))[0] +
                  "e" +
                  (t[1] ? +t[1] + e : e)
                )));
      }
      function Yn(t, e, n) {
        return n && (n[t] = e), e;
      }
      function ti(t, e) {
        return t[0 | e];
      }
      function ei(t) {
        return 1 === arguments.length && Array.isArray(t)
          ? Math.max.apply(Math, t)
          : Math.max.apply(Math, arguments);
      }
      function ni(t) {
        return 1 === arguments.length && Array.isArray(t)
          ? Math.min.apply(Math, t)
          : Math.min.apply(Math, arguments);
      }
      function ii(t, e) {
        if ("function" != typeof t)
          throw new Error("First argument to map is not a function");
        if (!Array.isArray(e))
          throw new Error("Second argument to map is not an array");
        return e.map(function (e, n) {
          return t(e, n);
        });
      }
      function ri(t, e, n) {
        if ("function" != typeof t)
          throw new Error("First argument to fold is not a function");
        if (!Array.isArray(n))
          throw new Error("Second argument to fold is not an array");
        return n.reduce(function (e, n, i) {
          return t(e, n, i);
        }, e);
      }
      function si(t, e) {
        if ("function" != typeof t)
          throw new Error("First argument to filter is not a function");
        if (!Array.isArray(e))
          throw new Error("Second argument to filter is not an array");
        return e.filter(function (e, n) {
          return t(e, n);
        });
      }
      function ai(t, e) {
        if (!Array.isArray(e) && "string" != typeof e)
          throw new Error(
            "Second argument to indexOf is not a string or array"
          );
        return e.indexOf(t);
      }
      function oi(t, e) {
        if (!Array.isArray(e))
          throw new Error("Second argument to join is not an array");
        return e.join(t);
      }
      function ui(t) {
        return (t > 0) - (t < 0) || +t;
      }
      function li(t) {
        return t < 0 ? -Math.pow(-t, 1 / 3) : Math.pow(t, 1 / 3);
      }
      function ci(t) {
        return Math.exp(t) - 1;
      }
      function hi(t) {
        return Math.log(1 + t);
      }
      function pi(t) {
        return Math.log(t) / Math.LN2;
      }
      function di(t) {
        (this.options = t || {}),
          (this.unaryOps = {
            sin: Math.sin,
            cos: Math.cos,
            tan: Math.tan,
            asin: Math.asin,
            acos: Math.acos,
            atan: Math.atan,
            sinh: Math.sinh || Vn,
            cosh: Math.cosh || Ln,
            tanh: Math.tanh || Nn,
            asinh: Math.asinh || $n,
            acosh: Math.acosh || Bn,
            atanh: Math.atanh || Fn,
            sqrt: Math.sqrt,
            cbrt: Math.cbrt || li,
            log: Math.log,
            log2: Math.log2 || pi,
            ln: Math.log,
            lg: Math.log10 || Rn,
            log10: Math.log10 || Rn,
            expm1: Math.expm1 || ci,
            log1p: Math.log1p || hi,
            abs: Math.abs,
            ceil: Math.ceil,
            floor: Math.floor,
            round: Math.round,
            trunc: Math.trunc || Gn,
            "-": qn,
            "+": Number,
            exp: Math.exp,
            not: zn,
            length: Un,
            "!": Jn,
            sign: Math.sign || ui,
          }),
          (this.binaryOps = {
            "+": xn,
            "-": kn,
            "*": wn,
            "/": Cn,
            "%": On,
            "^": Math.pow,
            "||": In,
            "==": Pn,
            "!=": En,
            ">": An,
            "<": Mn,
            ">=": _n,
            "<=": Tn,
            and: Sn,
            or: Dn,
            in: jn,
            "=": Yn,
            "[": ti,
          }),
          (this.ternaryOps = { "?": Qn }),
          (this.functions = {
            random: Hn,
            fac: Jn,
            min: ni,
            max: ei,
            hypot: Math.hypot || Xn,
            pyt: Math.hypot || Xn,
            pow: Math.pow,
            atan2: Math.atan2,
            if: Qn,
            gamma: Wn,
            roundTo: Zn,
            map: ii,
            fold: ri,
            filter: si,
            indexOf: ai,
            join: oi,
          }),
          (this.consts = { E: Math.E, PI: Math.PI, true: !0, false: !1 });
      }
      (di.prototype.parse = function (t) {
        var e = [],
          n = new vn(this, new fn(this, t), {
            allowMemberAccess: this.options.allowMemberAccess,
          });
        return n.parseExpression(e), n.expect(rn, "EOF"), new nn(e, this);
      }),
        (di.prototype.evaluate = function (t, e) {
          return this.parse(t).evaluate(e);
        });
      var fi = new di();
      (di.parse = function (t) {
        return fi.parse(t);
      }),
        (di.evaluate = function (t, e) {
          return fi.parse(t).evaluate(e);
        });
      var mi = {
        "+": "add",
        "-": "subtract",
        "*": "multiply",
        "/": "divide",
        "%": "remainder",
        "^": "power",
        "!": "factorial",
        "<": "comparison",
        ">": "comparison",
        "<=": "comparison",
        ">=": "comparison",
        "==": "comparison",
        "!=": "comparison",
        "||": "concatenate",
        and: "logical",
        or: "logical",
        not: "logical",
        "?": "conditional",
        ":": "conditional",
        "=": "assignment",
        "[": "array",
        "()=": "fndef",
      };
      di.prototype.isOperatorEnabled = function (t) {
        var e = (function (t) {
            return mi.hasOwnProperty(t) ? mi[t] : t;
          })(t),
          n = this.options.operators || {};
        return !(e in n) || !!n[e];
      };
      var vi = function (t) {
          t = t.replace(/ /g, "");
          var e = /\(([^\(\)]|\(([^\(\)]|\(([^\(\)]|\(([^\(\)])*\))*\))*\))*\)/.exec(
            t
          );
          if (void 0 === e) return { result: !1 };
          var n = t.split(")");
          return { result: !0, unit: n[n.length - 1], expression: e[0] };
        },
        gi = (function () {
          function t(e) {
            o(this, t), (this.expressionProps = e);
          }
          return (
            l(t, [
              {
                key: "resize",
                value: function (t) {
                  var e = vi(this.expressionProps.expression),
                    n = "(".concat(e.expression, "*").concat(t, ")");
                  return ""
                    .concat(F.mathExpPreface, "(")
                    .concat(n, ")")
                    .concat(this.expressionProps.unit);
                },
              },
              {
                key: "calculateValues",
                value: function (t, e) {
                  for (
                    var n,
                      i = t.length,
                      r = new di().parse(this.expressionProps.expression),
                      s = [],
                      a =
                        (c((n = {}), F.totalElements, i),
                        c(n, F.initParams, e),
                        n),
                      o = 0;
                    o < i;
                    o++
                  ) {
                    a[F.elementIndex] = o;
                    try {
                      var u = r.evaluate(a);
                      if (null == u) {
                        rt.error(
                          "".concat(
                            this.expressionProps.expression,
                            " is not a valid mathematical expression. Returning 0"
                          )
                        ),
                          s.push(0);
                        continue;
                      }
                      var l = "".concat(u).concat(this.expressionProps.unit);
                      "amount" === this.expressionProps.type &&
                        (l = parseFloat(l)),
                        s.push(l);
                    } catch (t) {
                      rt.error(
                        "".concat(
                          this.expressionProps.expression,
                          " is not a valid mathematical expression. Returning 0"
                        )
                      ),
                        s.push(0);
                    }
                  }
                  return s;
                },
              },
            ]),
            t
          );
        })();
      function yi(t) {
        return (
          (t = t.replace(/ /g, "")),
          /^@stagger\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+))\)$/.test(
            t
          )
        );
      }
      var bi = function (t) {
          var e =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (((t = t.replace(/ /g, "")), e && !yi(t))) return !1;
          var n = /.*\((.*)\).*/,
            i = n.exec(t)[1],
            r = i.split(",");
          return {
            start: r[0],
            end: r[1],
            startFraction: 1 * r[2] || 0,
            easing: r[3] || "linear",
            mode: r[4] || "linear",
            reverse: "true" === r[5],
          };
        },
        xi = (function () {
          function t(e) {
            o(this, t), (this.staggerProps = e);
          }
          return (
            l(t, [
              {
                key: "resize",
                value: function (t) {
                  return (
                    (this.staggerProps.from *= t),
                    (this.staggerProps.to *= t),
                    !0 === this.staggerProps.integer &&
                      ((this.staggerProps.from = Math.round(
                        this.staggerProps.from
                      )),
                      (this.staggerProps.to = Math.round(
                        this.staggerProps.to
                      ))),
                    "@stagger("
                      .concat(this.staggerProps.from)
                      .concat(this.staggerProps.unit, ", ")
                      .concat(this.staggerProps.to)
                      .concat(this.staggerProps.unit, ", ")
                      .concat(this.staggerProps.fraction || 0, ", ")
                      .concat(this.staggerProps.easing || "linear", ", ")
                      .concat(this.staggerProps.mode || "linear", ", ")
                      .concat(this.staggerProps.reverse || !1, ")")
                  );
                },
              },
              {
                key: "calculateValues",
                value: function (t) {
                  for (
                    var e,
                      n,
                      i,
                      r,
                      s = (function (t) {
                        var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0,
                          n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : "linear",
                          i =
                            arguments.length > 3 &&
                            void 0 !== arguments[3] &&
                            arguments[3],
                          r = [];
                        if ("linear" === n)
                          for (var s = 0; s < t; s++) {
                            var a = s / (t - 1),
                              o = a < e ? a + 1 - e + 1 / (t - 1) : a - e;
                            i && (o = 1 - o), r.push(o);
                          }
                        else if ("omni" === n)
                          for (var u = 1 - e, l = 0; l < t; l++) {
                            var c = Math.abs(l / (t - 1) - e) / u;
                            i && (c = 1 - c), r.push(c);
                          }
                        return r;
                      })(
                        t.length,
                        this.staggerProps.fraction,
                        this.staggerProps.mode,
                        this.staggerProps.reverse
                      ),
                      a = [],
                      o = 0;
                    o < s.length;
                    o++
                  ) {
                    var u =
                      ((e = this.staggerProps.from),
                      (n = this.staggerProps.to),
                      (i = s[o]),
                      (r = this.staggerProps.easing) || (r = "linear"),
                      Tt[r](i) * (n - e) + e);
                    !0 === this.staggerProps.integer && (u = Math.round(u)),
                      "measurement" === this.staggerProps.type &&
                        (u += this.staggerProps.unit),
                      a.push(u);
                  }
                  return a;
                },
              },
            ]),
            t
          );
        })(),
        ki = yi,
        wi = new RegExp(
          /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/,
          "gi"
        ),
        Ci = new RegExp(/^[-+]?\d+$/),
        Oi = new (class {
          constructor(t) {
            if (
              ((this.opts = {}),
              (this.defaults = {}),
              (this.messages = Object.assign({}, Rt)),
              (this.rules = {
                any: qt,
                array: zt,
                boolean: Gt,
                class: Ht,
                custom: Jt,
                currency: Kt,
                date: Wt,
                email: Qt,
                enum: Zt,
                equal: Yt,
                forbidden: te,
                function: ee,
                multi: ne,
                number: ie,
                object: oe,
                objectID: ue,
                string: me,
                tuple: ve,
                url: ye,
                uuid: xe,
                mac: we,
                luhn: Ce,
              }),
              (this.aliases = {}),
              (this.cache = new Map()),
              t)
            ) {
              if (
                (Ft(this.opts, t),
                t.defaults && Ft(this.defaults, t.defaults),
                t.messages)
              )
                for (const e in t.messages) this.addMessage(e, t.messages[e]);
              if (t.aliases)
                for (const e in t.aliases) this.alias(e, t.aliases[e]);
              if (t.customRules)
                for (const e in t.customRules) this.add(e, t.customRules[e]);
              if (t.plugins) {
                const e = t.plugins;
                if (!Array.isArray(e))
                  throw new Error("Plugins type must be array");
                e.forEach(this.plugin.bind(this));
              }
            }
          }
          validate(t, e) {
            return this.compile(e)(t);
          }
          wrapRequiredCheckSourceCode(t, e, n, i) {
            const r = [];
            let s,
              a = !0 === t.schema.optional || "forbidden" === t.schema.type,
              o =
                !0 === t.schema.optional ||
                !0 === t.schema.nullable ||
                "forbidden" === t.schema.type;
            if (null != t.schema.default) {
              let e;
              (a = !1),
                !0 !== t.schema.nullable && (o = !1),
                "function" == typeof t.schema.default
                  ? (n.customs[t.index] || (n.customs[t.index] = {}),
                    (n.customs[t.index].defaultFn = t.schema.default),
                    (e = `context.customs[${t.index}].defaultFn()`))
                  : (e = JSON.stringify(t.schema.default)),
                (s = `\n\t\t\t\tvalue = ${e};\n\t\t\t\t${i} = value;\n\t\t\t`);
            } else
              s = this.makeError({
                type: "required",
                actual: "value",
                messages: t.messages,
              });
            return (
              r.push(
                `\n\t\t\tif (value === undefined) { ${
                  a ? "\n// allow undefined\n" : s
                } }\n\t\t\telse if (value === null) { ${
                  o ? "\n// allow null\n" : s
                } }\n\t\t\t${e ? `else { ${e} }` : ""}\n\t\t`
              ),
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
            const i = ["var errors = [];", "var field;", "var parent = null;"],
              r = this.getRuleFromSchema(t);
            i.push(
              this.compileRule(
                r,
                n,
                null,
                "context.fn[%%INDEX%%](value, field, null, errors, context);",
                "value"
              )
            ),
              i.push("if (errors.length) {"),
              i.push(
                '\n\t\t\treturn errors.map(err => {\n\t\t\t\tif (err.message)\n\t\t\t\t\terr.message = err.message\n\t\t\t\t\t\t.replace(/\\{field\\}/g, err.field || "")\n\t\t\t\t\t\t.replace(/\\{expected\\}/g, err.expected != null ? err.expected : "")\n\t\t\t\t\t\t.replace(/\\{actual\\}/g, err.actual != null ? err.actual : "");\n\n\t\t\t\treturn err;\n\t\t\t});\n\t\t'
              ),
              i.push("}"),
              i.push("return true;");
            const s = i.join("\n"),
              a = new Function("value", "context", s);
            if (this.opts.debug) {
              let t = function (t) {
                return t;
              };
              "undefined" == typeof window && (t = _e),
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
          compileRule(t, e, n, i, r) {
            const s = [],
              a = this.cache.get(t.schema);
            if (a)
              ((t = a).cycle = !0),
                (t.cycleStack = []),
                s.push(
                  this.wrapRequiredCheckSourceCode(
                    t,
                    `\n\t\t\t\tvar rule = context.rules[${
                      t.index
                    }];\n\t\t\t\tif (rule.cycleStack.indexOf(value) === -1) {\n\t\t\t\t\trule.cycleStack.push(value);\n\t\t\t\t\t${i.replace(
                      /%%INDEX%%/g,
                      t.index
                    )}\n\t\t\t\t\trule.cycleStack.pop(value);\n\t\t\t\t}\n\t\t\t`,
                    e,
                    r
                  )
                );
            else {
              this.cache.set(t.schema, t),
                (t.index = e.index),
                (e.rules[e.index] = t);
              const a = null != n ? n : "$$root";
              e.index++;
              const o = t.ruleFunction.call(this, t, n, e);
              o.source = o.source.replace(/%%INDEX%%/g, t.index);
              const u = new Function(
                "value",
                "field",
                "parent",
                "errors",
                "context",
                o.source
              );
              (e.fn[t.index] = u),
                s.push(
                  this.wrapRequiredCheckSourceCode(
                    t,
                    i.replace(/%%INDEX%%/g, t.index),
                    e,
                    r
                  )
                ),
                s.push(
                  this.makeCustomValidator({
                    vName: r,
                    path: a,
                    schema: t.schema,
                    context: e,
                    messages: t.messages,
                    ruleIndex: t.index,
                  })
                );
            }
            return s.join("\n");
          }
          getRuleFromSchema(t) {
            if ("string" == typeof t) t = this.parseShortHand(t);
            else if (Array.isArray(t)) {
              if (0 == t.length) throw new Error("Invalid schema.");
              (t = { type: "multi", rules: t }).rules
                .map((t) => this.getRuleFromSchema(t))
                .every((t) => 1 == t.schema.optional) && (t.optional = !0);
            }
            if (t.$$type) {
              const e = t.$$type,
                n = this.getRuleFromSchema(e).schema;
              delete t.$$type;
              const i = Object.assign({}, t);
              for (const e in t) delete t[e];
              Ft(t, n, { skipIfExist: !0 }), (t.props = i);
            }
            const e = this.aliases[t.type];
            e && (delete t.type, (t = Ft(t, e, { skipIfExist: !0 })));
            const n = this.rules[t.type];
            if (!n)
              throw new Error(
                "Invalid '" + t.type + "' type in validator schema."
              );
            return {
              messages: Object.assign({}, this.messages, t.messages),
              schema: Ft(t, this.defaults[t.type], { skipIfExist: !0 }),
              ruleFunction: n,
            };
          }
          parseShortHand(t) {
            const e = t.split("|").map((t) => t.trim());
            let n,
              i = e[0];
            return (
              (n = i.endsWith("[]")
                ? this.getRuleFromSchema({
                    type: "array",
                    items: i.slice(0, -2),
                  }).schema
                : { type: e[0] }),
              e.slice(1).map((t) => {
                const e = t.indexOf(":");
                if (-1 !== e) {
                  const i = t.substr(0, e).trim();
                  let r = t.substr(e + 1).trim();
                  "true" === r || "false" === r
                    ? (r = "true" === r)
                    : Number.isNaN(Number(r)) || (r = Number(r)),
                    (n[i] = r);
                } else t.startsWith("no-") ? (n[t.slice(3)] = !1) : (n[t] = !0);
              }),
              n
            );
          }
          makeError({
            type: t,
            field: e,
            expected: n,
            actual: i,
            messages: r,
          }) {
            const s = { type: `"${t}"`, message: `"${r[t]}"` };
            return (
              (s.field = e ? `"${e}"` : "field"),
              null != n && (s.expected = n),
              null != i && (s.actual = i),
              `errors.push({ ${Object.keys(s)
                .map((t) => `${t}: ${s[t]}`)
                .join(", ")} });`
            );
          }
          makeCustomValidator({
            vName: t = "value",
            fnName: e = "custom",
            ruleIndex: n,
            path: i,
            schema: r,
            context: s,
            messages: a,
          }) {
            const o = "rule" + n,
              u = "fnCustomErrors" + n;
            if ("function" == typeof r[e]) {
              if (
                (s.customs[n]
                  ? ((s.customs[n].messages = a), (s.customs[n].schema = r))
                  : (s.customs[n] = { messages: a, schema: r }),
                this.opts.useNewCustomCheckerFunction)
              )
                return `\n               const ${o} = context.customs[${n}];\n\t\t\t\t\tconst ${u} = [];\n\t\t\t\t\t${t} = ${o}.schema.${e}.call(this, ${t}, ${u} , ${o}.schema, "${i}", parent, context);\n\t\t\t\t\tif (Array.isArray(${u} )) {\n                  ${u} .forEach(err => errors.push(Object.assign({ message: ${o}.messages[err.type], field }, err)));\n\t\t\t\t\t}\n\t\t\t\t`;
              const l = "res_" + o;
              return `\n\t\t\t\tconst ${o} = context.customs[${n}];\n\t\t\t\tconst ${l} = ${o}.schema.${e}.call(this, ${t}, ${o}.schema, "${i}", parent, context);\n\t\t\t\tif (Array.isArray(${l})) {\n\t\t\t\t\t${l}.forEach(err => errors.push(Object.assign({ message: ${o}.messages[err.type], field }, err)));\n\t\t\t\t}\n\t\t`;
            }
            return "";
          }
          add(t, e) {
            this.rules[t] = e;
          }
          addMessage(t, e) {
            this.messages[t] = e;
          }
          alias(t, e) {
            if (this.rules[t])
              throw new Error("Alias name must not be a rule name");
            this.aliases[t] = e;
          }
          plugin(t) {
            if ("function" != typeof t)
              throw new Error("Plugin fn type must be function");
            return t(this);
          }
        })({
          messages: {
            color:
              "The '{field}' field must be an a valid color! Actual: {actual}",
            measurement:
              "The '{field}' must be a measurement with specs that are not met. You've either provided wrong value/units or an invalid @ expression. Actual: {actual}",
          },
        });
      Oi.add("amount", function (t, e, n) {
        var i = t.schema;
        return (
          t.messages,
          {
            source: "\n      let startUnits, endUnits, startNumberPart, endNumberPart;\n      const staggerValidation = "
              .concat(ki, ";\n      const staggerAnalyser = ")
              .concat(bi, ';\n      const easingKeys = "')
              .concat(
                Object.keys(Tt).join(","),
                "\".split(','); // todo check for simpler expression\n      const validateExpression = "
              )
              .concat(vi, ";\n      const attributeRegexp = /^")
              .concat(
                F.attibuteValue,
                "\\([_A-z0-9-]*\\)$/;\n      const patternRegexp = /^"
              )
              .concat(
                F.patternValue,
                "\\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)*?)\\)$/;\n      const extractParenthesisAttrsAsArray = "
              )
              .concat(
                Q,
                ";\n\n      function isNumeric(n) {\n        return !isNaN(parseFloat(n)) && isFinite(n);\n      }\n\n      if(typeof value === 'string' || value instanceof String){\n        if(value.trim().startsWith('"
              )
              .concat(
                F.staggerPreface,
                "')){\n          const staggerValid = staggerValidation(value);\n          if(staggerValid === false){\n            "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount:
                      "The " + F.staggerPreface + " expression is invalid",
                  },
                }),
                ";\n            return;\n          } else {\n            const analysis = staggerAnalyser(value, false);\n            if(!isNumeric(analysis.start)){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.start",
                  messages: {
                    amount:
                      "The provided start " +
                      F.staggerPreface +
                      " value is invalid",
                  },
                }),
                ";\n              return;\n            } else {\n              startNumberPart = analysis.start*1;\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n                if("
              )
              .concat(i.min, " > analysis.start){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.start",
                  messages: {
                    amount:
                      "The provided start " +
                      F.staggerPreface +
                      " value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n                if("
              )
              .concat(i.max, " < analysis.start){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.start",
                  messages: {
                    amount:
                      "The provided start " +
                      F.staggerPreface +
                      " value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n               if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n                if(!analysis.start.match("
              )
              .concat(Ci, ")){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.start",
                  messages: {
                    amount:
                      "The provided start " +
                      F.staggerPreface +
                      " value is not an integer",
                  },
                }),
                ";\n                  return;\n                }\n              }\n            }\n\n            if(!isNumeric(analysis.end)){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.end",
                  messages: {
                    amount:
                      "The provided end " +
                      F.staggerPreface +
                      " value is invalid",
                  },
                }),
                ";\n              return;\n            } else {\n              endNumberPart = analysis.end*1;\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n                if("
              )
              .concat(i.min, " > analysis.end){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.end",
                  messages: {
                    amount:
                      "The provided end " +
                      F.staggerPreface +
                      " value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n                if("
              )
              .concat(i.max, " < analysis.end){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.end",
                  messages: {
                    amount:
                      "The provided end " +
                      F.staggerPreface +
                      " value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n               if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n                if(!analysis.end.match("
              )
              .concat(Ci, ")){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.end",
                  messages: {
                    amount:
                      "The provided end " +
                      F.staggerPreface +
                      " value is not an integer",
                  },
                }),
                ";\n                  return;\n                }\n              }\n            }\n\n            if(analysis.startFraction < 0 || analysis.startFraction > 1){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.startFraction",
                  messages: {
                    amount:
                      "The " +
                      F.staggerPreface +
                      " fraction must be a number >=0 and <=1",
                  },
                }),
                ";\n              return;\n            }\n\n            if(easingKeys.indexOf(analysis.easing) < 0){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.startFraction",
                  messages: {
                    amount:
                      "The provided " +
                      F.staggerPreface +
                      " easing is not recognised by the system",
                  },
                }),
                ";\n              return;\n            }\n\n            if(analysis.mode !== 'linear' && analysis.mode !== 'omni'){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.mode",
                  messages: {
                    amount:
                      F.staggerPreface +
                      " mode can only be either linear or omni",
                  },
                }),
                ";\n              return;\n            }\n\n            if(analysis.reverse !== true && analysis.reverse !== false){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.reverse",
                  messages: {
                    amount:
                      F.staggerPreface +
                      " reverse needs to be either true or false",
                  },
                }),
                ";\n              return;\n            }\n\n            return value;\n          }\n        } else if(value.trim().startsWith('"
              )
              .concat(
                F.patternValue,
                "')){\n          if(!patternRegexp.test(value.replace(/ /g, ''))){\n            "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount: "The " + F.patternValue + " expression is invalid",
                  },
                }),
                ";\n            return;\n          }\n          const patternValues = extractParenthesisAttrsAsArray(value);\n          for(let i=0; i<patternValues.length; i++){\n            const valToCheck = patternValues[i];\n            if(!isNumeric(valToCheck)){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "valToCheck",
                  messages: { amount: "The provided value is not a number" },
                }),
                ";\n              return;\n            } else {\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n                if("
              )
              .concat(i.min, " > valToCheck){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "valToCheck",
                  messages: {
                    amount:
                      "The provided value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n                if("
              )
              .concat(i.max, " < valToCheck){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "valToCheck",
                  messages: {
                    amount:
                      "The provided start value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n               if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n                if(!valToCheck.match("
              )
              .concat(Ci, ")){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "valToCheck",
                  messages: { amount: "The provided value is not an integer" },
                }),
                ";\n                  return;\n                }\n              }\n          }\n        }\n        return value;\n      }  else if(value.trim().startsWith('"
              )
              .concat(
                F.attibuteValue,
                "')){\n          if(!attributeRegexp.test(value)){\n            "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount: "The " + F.attibuteValue + " expression is invalid",
                  },
                }),
                ";\n            return;\n          }\n\n          return value;\n        } else if(value.trim().startsWith('"
              )
              .concat(
                F.mathExpPreface,
                "')){\n          const validity = validateExpression(value);\n          if(validity.result === false){\n            "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount:
                      "The " + F.expressionPreface + " expression is invalid",
                  },
                }),
                ';\n            return;\n          } else {\n            if(validity.unit !== ""){\n              '
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount:
                      "The " +
                      F.expressionPreface +
                      " expression includes units",
                  },
                }),
                ";\n              return;\n            }\n\n            return value;\n          }\n        }\n      }\n\n\n      if(typeof value !== 'number'){\n        "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: { amount: "The provided value is not a number" },
                }),
                ";\n        return;\n      }\n      if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n        if("
              )
              .concat(i.max, " < value){\n          ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount:
                      "The provided amount is bigger than the maximum accepted value",
                  },
                }),
                ";\n          return;\n        }\n      }\n      if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n        if("
              )
              .concat(i.min, " > value){\n          ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount:
                      "The provided amount is lower than the minimum accepted value",
                  },
                }),
                ";\n          return;\n        }\n      }\n      if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n        if(value !== parseInt(value, 10)){\n          "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: { amount: "The provided amount is not an integer" },
                }),
                ";\n          return;\n        }\n      }\n      return value;\n\n    "
              ),
          }
        );
      }),
        Oi.add("measurement", function (t, e, n) {
          var i = t.schema,
            r = t.messages,
            s = new RegExp(
              "^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)(" +
                i.units.join("|") +
                ")$",
              "gi"
            ),
            a = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi");
          return {
            source: "\n      let startUnits, endUnits, startNumberPart, endNumberPart;\n      const staggerValidation = "
              .concat(ki, ";\n      const staggerAnalyser = ")
              .concat(bi, ';\n      const easingKeys = "')
              .concat(
                Object.keys(Tt).join(","),
                "\".split(',');\n      const validateExpression = "
              )
              .concat(vi, ";\n      const validUnits = ['")
              .concat(
                i.units.join("','"),
                "'];\n      const attributeRegexp = /^"
              )
              .concat(
                F.attibuteValue,
                "\\([_A-z0-9-]*\\)$/;\n      const patternRegexp = /^"
              )
              .concat(
                F.patternValue,
                "\\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)*?)\\)$/;\n      const extractParenthesisAttrsAsArray = "
              )
              .concat(
                Q,
                ";\n\n      if(typeof value !== 'string' && !(value instanceof String)){\n        "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: r,
                }),
                "\n        return ;\n      }\n\n      if(value.trim().startsWith('"
              )
              .concat(
                F.attibuteValue,
                "')){\n        if(!attributeRegexp.test(value)){\n          "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount: "The " + F.attibuteValue + " expression is invalid",
                  },
                }),
                ";\n          return;\n        }\n\n        return value;\n      } else if(value.trim().startsWith('"
              )
              .concat(
                F.staggerPreface,
                "')){\n        const staggerValid = staggerValidation(value);\n        if(staggerValid === false){\n          "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: {
                    measurement:
                      "The " + F.staggerPreface + " expression is invalid",
                  },
                }),
                ";\n          return;\n        } else {\n          const analysis = staggerAnalyser(value, false);\n          if(!analysis.start.match("
              )
              .concat(s, ")){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.start",
                  messages: {
                    measurement:
                      "The provided start " +
                      F.staggerPreface +
                      " value is invalid",
                  },
                }),
                ";\n            return;\n          } else {\n            var numberPart = analysis.start.match("
              )
              .concat(
                a,
                ")[0];\n            startNumberPart = numberPart;\n            startUnits = analysis.start.toString().substring(numberPart.length);\n            if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n              if("
              )
              .concat(i.min, " > numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.start",
                  messages: {
                    measurement:
                      "The provided start " +
                      F.staggerPreface +
                      " value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n            if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n              if("
              )
              .concat(i.max, " < numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.start",
                  messages: {
                    measurement:
                      "The provided start " +
                      F.staggerPreface +
                      " value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n             if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n              if(!numberPart.match("
              )
              .concat(Ci, ")){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.start",
                  messages: {
                    measurement:
                      "The provided start " +
                      F.staggerPreface +
                      " value is not an integer",
                  },
                }),
                ";\n                return;\n              }\n            }\n          }\n\n          if(!analysis.end.match("
              )
              .concat(s, ")){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.end",
                  messages: {
                    measurement:
                      "The provided end " +
                      F.staggerPreface +
                      " value is invalid",
                  },
                }),
                ";\n            return;\n          } else {\n            var numberPart = analysis.end.match("
              )
              .concat(
                a,
                ")[0];\n            endNumberPart = numberPart;\n            endUnits = analysis.end.toString().substring(numberPart.length);\n            if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n              if("
              )
              .concat(i.min, " > numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.end",
                  messages: {
                    measurement:
                      "The provided end " +
                      F.staggerPreface +
                      " value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n            if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n              if("
              )
              .concat(i.max, " < numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.end",
                  messages: {
                    measurement:
                      "The provided end " +
                      F.staggerPreface +
                      " value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n             if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n              if(!numberPart.match("
              )
              .concat(Ci, ")){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.end",
                  messages: {
                    measurement:
                      "The provided end " +
                      F.staggerPreface +
                      " value is not an integer",
                  },
                }),
                ";\n                return;\n              }\n            }\n          }\n\n          if(startUnits !== endUnits){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.startFraction",
                  messages: {
                    measurement:
                      "The " +
                      F.staggerPreface +
                      " start and end must always have the same units",
                  },
                }),
                ";\n            return;\n          }\n\n          if(analysis.startFraction < 0 || analysis.startFraction > 1){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.startFraction",
                  messages: {
                    measurement:
                      "The " +
                      F.staggerPreface +
                      " fraction must be a number >=0 and <=1",
                  },
                }),
                ";\n            return;\n          }\n\n          if(easingKeys.indexOf(analysis.easing) < 0){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.startFraction",
                  messages: {
                    measurement:
                      "The provided " +
                      F.staggerPreface +
                      " easing is not recognised by the system",
                  },
                }),
                ";\n            return;\n          }\n\n          if(analysis.mode !== 'linear' && analysis.mode !== 'omni'){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.mode",
                  messages: {
                    measurement:
                      F.staggerPreface +
                      " mode can only be either linear or omni",
                  },
                }),
                ";\n            return;\n          }\n\n          if(analysis.reverse !== true && analysis.reverse !== false){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.reverse",
                  messages: {
                    measurement:
                      F.staggerPreface +
                      " reverse needs to be either true or false",
                  },
                }),
                ";\n            return;\n          }\n\n          return value;\n        }\n      } else if(value.trim().startsWith('"
              )
              .concat(
                F.patternValue,
                "')){\n        if(!patternRegexp.test(value.replace(/ /g, ''))){\n          "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount: "The " + F.patternValue + " expression is invalid",
                  },
                }),
                ";\n          return;\n        }\n        const patternValues = extractParenthesisAttrsAsArray(value);\n        for(let i=0; i<patternValues.length; i++){\n          const valToCheck = patternValues[i];\n          if(!valToCheck.match("
              )
              .concat(s, ")){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "valToCheck",
                  messages: { measurement: "The provided value is invalid" },
                }),
                ";\n            return;\n          } else {\n            var numberPart = valToCheck.match("
              )
              .concat(a, ")[0];\n            if(")
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n              if("
              )
              .concat(i.min, " > numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "valToCheck",
                  messages: {
                    measurement:
                      "The provided value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n            if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n              if("
              )
              .concat(i.max, " < numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "valToCheck",
                  messages: {
                    measurement:
                      "The provided value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n             if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n              if(!numberPart.match("
              )
              .concat(Ci, ")){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "valToCheck",
                  messages: {
                    measurement: "The provided value is not an integer",
                  },
                }),
                ";\n                return;\n              }\n            }\n          }\n        }\n        return value;\n      } else if(value.trim().startsWith('"
              )
              .concat(
                F.mathExpPreface,
                "')){\n          const validity = validateExpression(value);\n          if(validity.result === false){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: {
                    measurement:
                      "The " + F.expressionPreface + " expression is invalid",
                  },
                }),
                ";\n            return;\n          } else {\n            if(validUnits.indexOf(validity.unit) < 0){\n              "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: {
                    measurement:
                      "The " +
                      F.expressionPreface +
                      " expression has non-supported units",
                  },
                }),
                ";\n              return;\n            }\n\n            return value;\n          }\n        }\n\n\n      if(!value.match("
              )
              .concat(s, ")){\n        ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: r,
                }),
                "\n      } else {\n        var numberPart = value.match("
              )
              .concat(a, ")[0];\n        if(")
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n          if("
              )
              .concat(i.min, " > numberPart){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: r,
                }),
                "\n          }\n        }\n        if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n          if("
              )
              .concat(i.max, " < numberPart){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: r,
                }),
                "\n          }\n        }\n         if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n          if(!numberPart.match("
              )
              .concat(Ci, ")){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: r,
                }),
                "\n          }\n        }\n      }\n      return value;\n    "
              ),
          };
        }),
        Oi.add("html", function (t, e, n) {
          t.schema;
          var i = t.messages;
          return {
            source: "\n      if(value === null){\n        ".concat(
              this.makeError({ type: "html", actual: "value", messages: i }),
              "\n      } else {\n        return value;\n      }\n    "
            ),
          };
        }),
        Oi.add("css", function (t, e, n) {
          t.schema;
          var i = t.messages;
          return {
            source: "\n      if(value === null){\n        ".concat(
              this.makeError({ type: "css", actual: "value", messages: i }),
              "\n      } else {\n        return value;\n      }\n    "
            ),
          };
        }),
        Oi.add("color", function (t, e, n) {
          t.schema;
          var i = t.messages;
          return {
            source: "\n      if(typeof value !== 'string' && !(value instanceof String)){\n        "
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: i,
                }),
                "\n        return ;\n      }\n      if(!value.match("
              )
              .concat(
                wi,
                ') && [\n          "aliceblue",\n          "antiquewhite",\n          "aqua",\n          "aquamarine",\n          "azure",\n          "beige",\n          "bisque",\n          "black",\n          "blanchedalmond",\n          "blue",\n          "blueviolet",\n          "brown",\n          "burlywood",\n          "cadetblue",\n          "chartreuse",\n          "chocolate",\n          "coral",\n          "cornflowerblue",\n          "cornsilk",\n          "crimson",\n          "cyan",\n          "darkblue",\n          "darkcyan",\n          "darkgoldenrod",\n          "darkgray",\n          "darkgrey",\n          "darkgreen",\n          "darkkhaki",\n          "darkmagenta",\n          "darkolivegreen",\n          "darkorange",\n          "darkorchid",\n          "darkred",\n          "darksalmon",\n          "darkseagreen",\n          "darkslateblue",\n          "darkslategray",\n          "darkslategrey",\n          "darkturquoise",\n          "darkviolet",\n          "deeppink",\n          "deepskyblue",\n          "dimgray",\n          "dimgrey",\n          "dodgerblue",\n          "firebrick",\n          "floralwhite",\n          "forestgreen",\n          "fuchsia",\n          "gainsboro",\n          "ghostwhite",\n          "gold",\n          "goldenrod",\n          "gray",\n          "grey",\n          "green",\n          "greenyellow",\n          "honeydew",\n          "hotpink",\n          "indianred",\n          "indigo",\n          "ivory",\n          "khaki",\n          "lavender",\n          "lavenderblush",\n          "lawngreen",\n          "lemonchiffon",\n          "lightblue",\n          "lightcoral",\n          "lightcyan",\n          "lightgoldenrodyellow",\n          "lightgray",\n          "lightgrey",\n          "lightgreen",\n          "lightpink",\n          "lightsalmon",\n          "lightseagreen",\n          "lightskyblue",\n          "lightslategray",\n          "lightslategrey",\n          "lightsteelblue",\n          "lightyellow",\n          "lime",\n          "limegreen",\n          "linen",\n          "magenta",\n          "maroon",\n          "mediumaquamarine",\n          "mediumblue",\n          "mediumorchid",\n          "mediumpurple",\n          "mediumseagreen",\n          "mediumslateblue",\n          "mediumspringgreen",\n          "mediumturquoise",\n          "mediumvioletred",\n          "midnightblue",\n          "mintcream",\n          "mistyrose",\n          "moccasin",\n          "navajowhite",\n          "navy",\n          "oldlace",\n          "olive",\n          "olivedrab",\n          "orange",\n          "orangered",\n          "orchid",\n          "palegoldenrod",\n          "palegreen",\n          "paleturquoise",\n          "palevioletred",\n          "papayawhip",\n          "peachpuff",\n          "peru",\n          "pink",\n          "plum",\n          "powderblue",\n          "purple",\n          "rebeccapurple",\n          "red",\n          "rosybrown",\n          "royalblue",\n          "saddlebrown",\n          "salmon",\n          "sandybrown",\n          "seagreen",\n          "seashell",\n          "sienna",\n          "silver",\n          "skyblue",\n          "slateblue",\n          "slategray",\n          "slategrey",\n          "snow",\n          "springgreen",\n          "steelblue",\n          "tan",\n          "teal",\n          "thistle",\n          "tomato",\n          "turquoise",\n          "violet",\n          "wheat",\n          "white",\n          "whitesmoke",\n          "yellow",\n          "yellowgreen",\n        ].indexOf(value.toLowerCase()) < 0){\n        '
              )
              .concat(
                this.makeError({ type: "color", actual: "value", messages: i }),
                "\n      }\n      return value;\n    "
              ),
          };
        });
      var Ii = [
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
        Pi = [
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
          { type: "array", optional: !0, length: 4, items: { type: "number" } },
        ],
        Ei = { type: "string", empty: !1, trim: !0, optional: !0 },
        Ai = { type: "string", empty: !1, trim: !0, optional: !0 },
        Mi = { type: "string", empty: !1, optional: !1 },
        _i = { type: "amount", optional: !1, integer: !0, min: 0 },
        Ti = { type: "amount", optional: !0, integer: !0, min: 0 },
        Si = { type: "amount", integer: !0, min: 1, optional: !0 },
        Di = { type: "amount", integer: !0, min: 0, optional: !0 },
        ji = { type: "amount", integer: !0, min: 0, optional: !0 },
        Vi = { type: "html", optional: !0 },
        Li = { type: "css", optional: !0 },
        Ni = {
          type: "array",
          optional: !0,
          items: { type: "object", props: { type: "string", src: "string" } },
        },
        $i = {
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
              startValues: {
                optional: !0,
                type: "object",
                props: {
                  gain: { optional: !0, type: "number" },
                  pan: { optional: !0, type: "number" },
                },
              },
            },
          },
          optional: !0,
        },
        Bi = Oi.compile({
          id: Ei,
          name: Ai,
          selector: p(p({}, Mi), {}, { optional: !0 }),
          easing: Pi,
          duration: _i,
          startFrom: { type: "amount", integer: !0, min: 0, optional: !0 },
          repeats: Si,
          hiatus: Di,
          delay: ji,
        }),
        Fi = {
          type: "object",
          optional: !0,
          props: {
            width: { type: "measurement", units: Ii, optional: !0 },
            height: { type: "measurement", units: Ii, optional: !0 },
          },
        },
        Ri = { type: "string", enum: ["on", "off", "only"], optional: !0 },
        qi = Oi.compile({
          props: [
            {
              type: "object",
              strict: !0,
              props: {
                id: Ei,
                name: Ai,
                selector: p(p({}, Mi), {}, { optional: !0 }),
                repeats: Si,
                hiatus: Di,
                delay: ji,
                easing: Pi,
                duration: Ti,
                html: Vi,
                css: Li,
                audioSources: $i,
                audio: Ri,
                containerParams: Fi,
                fonts: Ni,
                initParams: { type: "object", optional: !0 },
              },
            },
            {
              type: "object",
              strict: !0,
              props: {
                id: Ei,
                name: Ai,
                host: { type: "any", optional: !1 },
                duration: Ti,
                html: Vi,
                css: Li,
                audioSources: $i,
                audio: Ri,
                containerParams: Fi,
                fonts: Ni,
                initParams: { type: "object", optional: !0 },
              },
            },
            {
              type: "object",
              strict: !0,
              props: {
                root: { type: "boolean", optional: !0 },
                name: Ai,
                id: Ei,
                audioSources: $i,
                audio: p(p({}, Ri), {}, { enum: ["on"] }),
              },
            },
          ],
        }),
        zi = Oi.compile({
          selector: p(p({}, Mi), {}, { optional: !0, strict: !0 }),
          name: Ai,
        }),
        Gi = Oi.compile({
          selector: p(p({}, Mi), {}, { strict: !0, optional: !0 }),
          name: Ai,
          repeats: { type: "amount", integer: !0, min: 1, optional: !0 },
          hiatus: { type: "amount", integer: !0, min: 0, optional: !0 },
          delay: { type: "amount", integer: !0, min: 0, optional: !0 },
        });
      function Hi(t) {
        var e = new t.Class(t.attrs, t.props);
        if (!1 === e.result) return e;
        if (Object.prototype.hasOwnProperty.call(t, "incidents"))
          for (var n in t.incidents) {
            var i = t.incidents[n],
              r = Hi(i.leaf);
            if (!1 === r.result) return r;
            var s = e.addIncident(r, i.position);
            if (!1 === s.result) return s;
          }
        return e;
      }
      function Ji(t) {
        t.descriptor.value = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = this.exportLiveDefinition();
          for (var i in t) Nt(i, t[i], !0, "attrs", n);
          for (var r in e) Nt(r, e[r], !0, "props", n);
          return Hi(n);
        };
      }
      Oi.compile({ selector: Mi, duration: _i });
      var Ki = "mc.descriptive.decisionAuthority";
      function Wi(t) {
        t.descriptor.value = function (t) {
          if (null !== this.constructor.attrsValidationRules) {
            var e = this.constructor.attrsValidationMethod(t);
            if (e.length > 0) return { result: !1, errors: e };
          }
          return !0 ===
            this.putMessageOnPipe("checkForClip", {}, Ki, {
              selfExecute: !0,
              direction: ot,
            }).response
            ? this.manageEditAttrProps(t, "attrs")
            : ((this.attrs = t), { result: !0 });
        };
      }
      function Ui(t) {
        t.descriptor.value = function (t) {
          var e = rt.validateProps(
            t,
            this.constructor.propsValidationRules,
            this.constructor
          );
          return e.result
            ? !0 ===
              this.putMessageOnPipe("checkForClip", {}, Ki, {
                selfExecute: !0,
                direction: ot,
              }).response
              ? this.manageEditAttrProps(t, "props")
              : ((this.props = t), { result: !0 })
            : e;
        };
      }
      function Xi(t) {
        t.descriptor.value = function () {
          return null !== this.props.host && void 0 !== this.props.host
            ? [this.props.host]
            : this.hasParent &&
              this.putMessageOnPipe("checkForClip", {}, Ki, {
                selfExecute: !0,
                direction: ot,
              }).response
            ? this.putMessageOnPipe(
                "getElements",
                { selector: this.selector() },
                Ki,
                { selfExecute: !1, direction: ot }
              ).response
            : [];
        };
      }
      function Qi(t) {
        t.descriptor.value = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { check: !0 };
          if ("dynamic" === this.duration)
            return {
              result: !1,
              reason:
                "Incidents with dynamic duration can't be resized. Once the Incident enters a Clip it'll become resizable",
            };
          if (t === this.duration)
            return { result: !0, meta: { unprocessed: !0 } };
          if (t <= 0) return { result: !1, reason: "Size must always be > 0" };
          if (e.check && this.hasParent) {
            var n = this.putMessageOnPipe(
              "checkResize",
              { id: this.id, newSize: t, fraction: t / this.duration },
              Ki,
              { selfExecute: !1, direction: ot }
            );
            if (!n.response.result) return n.response;
          }
          return this.setNewDuration(t), { result: !0 };
        };
      }
      function Zi(t) {
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
      var Yi = (function () {
          function t(e) {
            o(this, t), (this.expressionProps = e);
          }
          return (
            l(t, [
              {
                key: "calculateValues",
                value: function (t) {
                  for (var e = [], n = 0; n < t.length; n++) {
                    var i = t[n].getAttribute(this.expressionProps.attribute);
                    z(i) && (i = parseFloat(i)), e.push(i);
                  }
                  return e;
                },
              },
            ]),
            t
          );
        })(),
        tr = (function () {
          function t(e) {
            o(this, t), (this.patternProps = e);
          }
          return (
            l(t, [
              {
                key: "calculateValues",
                value: function (t) {
                  for (
                    var e = this.patternProps.pattern.length, n = [], i = 0;
                    i < t.length;
                    i++
                  )
                    n.push(this.patternProps.pattern[i % e]);
                  return n;
                },
              },
              {
                key: "resize",
                value: function (t) {
                  if ("amount" !== this.patternProps.type)
                    return ""
                      .concat(F.patternValue, "(")
                      .concat(this.patternProps.pattern.join(), ")");
                  for (
                    var e = [], n = 0;
                    n < this.patternProps.pattern.length;
                    n++
                  )
                    e.push(t * this.patternProps.pattern[n]);
                  return "".concat(F.patternValue, "(").concat(e.join(), ")");
                },
              },
            ]),
            t
          );
        })(),
        er = function t(e) {
          return (
            o(this, t),
            "expression" === e.dynamicType
              ? new gi(e)
              : "stagger" === e.dynamicType
              ? new xi(e)
              : "attribute" === e.dynamicType
              ? new Yi(e)
              : "pattern" === e.dynamicType
              ? new tr(e)
              : (rt.error(
                  'dynamicType must be either "stgger" or "expression". '.concat(
                    e.dynamicType,
                    " provided"
                  )
                ),
                !1)
          );
        },
        nr = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi"),
        ir = function (t) {
          var e = [];
          return (
            (function t(n) {
              var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
              if (!n) return [];
              for (var r = 0, s = Object.entries(n); r < s.length; r++) {
                var a = w(s[r], 2),
                  o = a[0],
                  u = a[1];
                if (!(u instanceof Element))
                  if (H(u))
                    t(
                      u,
                      ""
                        .concat(i)
                        .concat("" === i ? "" : ".")
                        .concat(o)
                    );
                  else if (G(u)) {
                    var l = u.trim();
                    if (l.startsWith(F.staggerPreface)) {
                      var c = bi(l, !1),
                        h = c.start.match(nr)[0],
                        p = c.end.match(nr)[0],
                        d = c.start.toString().substring(h.length),
                        f = {
                          dynamicType: "stagger",
                          path: ""
                            .concat(i)
                            .concat("" === i ? "" : ".")
                            .concat(o),
                          from: 1 * h,
                          to: 1 * p,
                          mode: c.mode,
                          unit: d,
                          fraction: c.startFraction,
                          easing: c.easing,
                          reverse: c.reverse,
                          type: "" === d ? "amount" : "measurement",
                        };
                      e.push(f);
                    } else if (l.startsWith(F.attibuteValue)) {
                      var m = {
                        dynamicType: "attribute",
                        path: ""
                          .concat(i)
                          .concat("" === i ? "" : ".")
                          .concat(o),
                        unit: "",
                        type: "measurement",
                        attribute: /\(([^\)]+)\)/.exec(l)[1],
                      };
                      e.push(m);
                    } else if (l.startsWith(F.mathExpPreface)) {
                      var v = vi(l),
                        g = {
                          dynamicType: "expression",
                          path: ""
                            .concat(i)
                            .concat("" === i ? "" : ".")
                            .concat(o),
                          unit: v.unit,
                          type: "" === v.unit ? "amount" : "measurement",
                          expression: v.expression,
                        };
                      e.push(g);
                    } else if (l.startsWith(F.patternValue)) {
                      for (
                        var y = Q(l), b = !0, x = [], k = 0;
                        k < y.length;
                        k++
                      ) {
                        if (!z(y[k])) {
                          b = !1;
                          break;
                        }
                        x.push(parseFloat(y[k]));
                      }
                      b && (y = x);
                      var C = {
                        dynamicType: "pattern",
                        path: ""
                          .concat(i)
                          .concat("" === i ? "" : ".")
                          .concat(o),
                        unit: "",
                        type: b ? "amount" : "measurement",
                        pattern: y,
                      };
                      e.push(C);
                    }
                  }
              }
            })(t),
            e
          );
        };
      function rr(t) {
        t.descriptor.value = function () {
          for (var t = ir(this.props), e = 0; e < t.length; e++)
            this.propsStaggers.push({ path: t[e].path, stagger: new er(t[e]) });
          for (var n = ir(this.attrs), i = 0; i < n.length; i++)
            this.attributesStaggers.push({
              path: n[i].path,
              stagger: new er(n[i]),
            });
        };
      }
      var sr = _(
          null,
          function (t, e) {
            var n = (function (e) {
              d(i, e);
              var n = g(i);
              function i() {
                var e,
                  r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  s =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                o(this, i),
                  null === s
                    ? ((e = n.call(this, r)),
                      t(m(e)),
                      (e.attrs = {}),
                      (e.props = r))
                    : ((e = n.call(this, s)),
                      t(m(e)),
                      (e.attrs = r),
                      (e.props = s));
                var a = rt.validateProps(e.props, zi, e.constructor);
                return a.result
                  ? ((e._inheritedSelector = null),
                    (e.attributesStaggers = []),
                    (e.propsStaggers = []),
                    e.setupDynamicValues(),
                    (e.passiveAddition = !0),
                    e._buildTree(),
                    (e.passiveAddition = !1),
                    v(e))
                  : v(e, a);
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
                    return gt;
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
                  key: "version",
                  value: function () {
                    return Bt;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "Channel",
                  value: function () {
                    return at;
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
                  kind: "field",
                  static: !0,
                  key: "attrsValidationRules",
                  value: function () {
                    return null;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "propsValidationRules",
                  value: function () {
                    return zi;
                  },
                },
                {
                  kind: "method",
                  decorators: [Wi],
                  key: "editAttributes",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Ui],
                  key: "editProperties",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Qi],
                  key: "resize",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Ji],
                  key: "clone",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Zi],
                  key: "selector",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Xi],
                  key: "getElements",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [rr],
                  key: "setupDynamicValues",
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
                  key: "_calculateDuration",
                  value: function () {
                    var t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                      e = 0;
                    for (var n in this.children) {
                      var i = this.children[n];
                      if (
                        (!0 === t &&
                          !0 === i.leaf.constructor.isGroup &&
                          i.leaf._calculateDuration(!0),
                        "dynamic" === i.leaf.duration)
                      ) {
                        e = "dynamic";
                        break;
                      }
                      i.position + i.leaf.duration > e &&
                        (e = i.position + i.leaf.duration);
                    }
                    return (
                      e !== this.calculatedDuration &&
                      ((this.calculatedDuration = e), !0)
                    );
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
                  kind: "get",
                  key: "duration",
                  value: function () {
                    return "dynamic" === this.calculatedDuration
                      ? this.calculatedDuration
                      : b(f(n.prototype), "duration", this);
                  },
                },
                {
                  kind: "set",
                  key: "duration",
                  value: function (t) {
                    k(f(n.prototype), "duration", t, this, !0);
                  },
                },
                {
                  kind: "method",
                  key: "manageEditAttrProps",
                  value: function (t, e) {
                    var n = this.parentNode,
                      i = n.getLeafPosition(this.id),
                      r = JSON.parse(JSON.stringify(this[e]));
                    (this[e] = t),
                      n.removeIncident(this.id),
                      this._rebuildTree();
                    var s = n.addIncident(this, i);
                    return (
                      s.result ||
                        ((this[e] = r),
                        this._rebuildTree(),
                        n.addIncident(this, i)),
                      s
                    );
                  },
                },
                {
                  kind: "method",
                  key: "detachFromParent",
                  value: function () {
                    b(f(n.prototype), "detachFromParent", this).call(this),
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
                      this.children[e].leaf.inheritedSelector = this.selector();
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
                      version: this.constructor.version,
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
                    var t =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0],
                      e = JSON.parse(JSON.stringify(this.props));
                    !1 === t && delete e.id;
                    var n = {
                      Class: this.constructor,
                      attrs: JSON.parse(JSON.stringify(this.attrs)),
                      props: e,
                      incidents: {},
                    };
                    for (var i in this.children) {
                      var r = this.children[i];
                      !0 !== r.leaf.passive &&
                        (n.incidents[i] = {
                          position: r.position,
                          leaf: r.leaf.exportLiveDefinition(t),
                        });
                    }
                    return n;
                  },
                },
                {
                  kind: "method",
                  key: "addIncident",
                  value: function (t, e) {
                    var i,
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : { check: !0 };
                    if (
                      ((t.inheritedSelector = this.selectorToPassToChildren),
                      !0 === r.check)
                    ) {
                      var s = b(f(n.prototype), "checkAddition", this).call(
                        this,
                        t,
                        e
                      );
                      if (!s.result) return (t.inheritedSelector = null), s;
                      if (
                        !0 ===
                        (i = this.putMessageOnPipe("checkForClip", {}, Ki, {
                          selfExecute: !0,
                          direction: ot,
                        })).response
                      ) {
                        var a = t.putMessageOnPipe(
                          "checkForInvalidSelectors",
                          {},
                          null,
                          { selfExecute: !0, direction: ut }
                        );
                        if (a.length > 0) {
                          for (var o = [], u = 0; u < a.length; u++)
                            o.push(a[u].response);
                          return { result: !1, errors: o };
                        }
                      }
                      var l = this.putMessageOnPipe(
                        "checkAddition",
                        { incident: t, millisecond: e, parentGroupId: this.id },
                        Ki,
                        { selfExecute: !0, direction: ot }
                      );
                      if (!l.response.result)
                        return (t.inheritedSelector = null), l.response;
                    }
                    !0 === this.passiveAddition && (t.passive = !0);
                    var c = this.addChild(t, e);
                    return (
                      c.result || (t.inheritedSelector = null),
                      "dynamic" === t.duration &&
                        i &&
                        this._calculateDuration(!0),
                      c
                    );
                  },
                },
                {
                  kind: "method",
                  key: "moveIncident",
                  value: function (t, e) {
                    var i = t;
                    "object" === a(t) && (i = t.id);
                    var r = b(f(n.prototype), "checkEditPosition", this).call(
                      this,
                      i,
                      e
                    );
                    if (!r.result) return r;
                    var s = e - this.getLeafPosition(i);
                    if (0 === s) return { result: !0 };
                    var o = this.putMessageOnPipe(
                      "checkMove",
                      {
                        id: i,
                        millisecond: e,
                        positionDelta: s,
                        parentGroupId: this.id,
                      },
                      Ki,
                      { selfExecute: !0, direction: ot }
                    );
                    return o.response.result
                      ? this.editPosition(i, e)
                      : o.response;
                  },
                },
                {
                  kind: "method",
                  key: "removeIncident",
                  value: function (t) {
                    var e = t;
                    "object" === a(t) && (e = t.id);
                    var i = b(f(n.prototype), "checkRemoveChild", this).call(
                      this,
                      e
                    );
                    if (!i.result) return i;
                    var r = this.putMessageOnPipe(
                      "checkDeletion",
                      { id: e, parentGroupId: this.id },
                      Ki,
                      { selfExecute: !0, direction: ot }
                    );
                    return r.response.result ? this.removeChild(e) : r.response;
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
                {
                  kind: "method",
                  key: "handleSetDurationDynamic",
                  value: function (t, e) {
                    (this.calculatedDuration = "dynamic"),
                      this.putMessageOnPipe(
                        "setDurationDynamic",
                        {},
                        "Groups",
                        { selfExecute: !1, direction: ot }
                      );
                  },
                },
              ],
            };
          },
          ft
        ),
        ar = {
          isCombo: function (t) {
            return t.incidentClass.isCombo;
          },
          getItem: function (t, e) {
            return (function (t) {
              for (
                var e,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : window,
                  i = (t =
                    (arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : B) +
                    "." +
                    t).split("."),
                  r = 0;
                r < i.length;
                r++
              ) {
                if (!Object.prototype.hasOwnProperty.call(n, i[r])) return;
                (e = n[i[r]]), (n = n[i[r]]);
              }
              return e;
            })(e.join("."), "attrs", t);
          },
          getRepeatPosition: function (t, e, n, i) {
            return i * (e || 0) + (i + 1) * (t || 0) + i * n;
          },
          refersToOwnSelector: function (t, e) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              i = e;
            !1 === Array.isArray(e) && (i = e.split("."));
            var r = this.getItem(t, i.slice(0, 2 + n));
            return (
              ("" === r.props.selector ||
                void 0 === r.props.selector ||
                null === r.props.selector) &&
              ("props" === i[2] ||
                !this.isCombo(r) ||
                this.refersToOwnSelector(t, i, n + 3))
            );
          },
          cascadeSelectors: function (t, e) {
            for (
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "",
                i = [],
                r = 0;
              r < e.length;
              r++
            ) {
              var s = e[r],
                a = void 0;
              if (
                ((a = Object.prototype.hasOwnProperty.call(s.props, "selector")
                  ? "".concat(t, " ").concat(s.props.selector)
                  : t),
                i.push({
                  path: ""
                    .concat(n)
                    .concat("" === n ? "" : ".")
                    .concat(r, ".props.selector"),
                  value: a,
                }),
                this.isCombo(s))
              ) {
                var o = this.cascadeSelectors(
                  a,
                  s.attrs.incidents,
                  ""
                    .concat(n)
                    .concat("" === n ? "" : ".")
                    .concat(r, ".attrs.incidents")
                );
                i = i.concat(o);
              }
            }
            return i;
          },
          createDescriptiveIncidentLikeObject: function (t, e, n, i, r) {
            return {
              constructor: {
                Incident: t.incidentClass.targetClass.Incident,
                plugin_npm_name: t.incidentClass.targetClass.plugin_npm_name,
                Channel: t.incidentClass.targetClass.Channel,
                isClip: !1,
              },
              attrs: i || t.attrs,
              props: r || t.props,
              selector: function () {
                return t.props.selector;
              },
              id: t.props.id,
              audioClip: null,
              audio: "no",
              dynamicDurationValue: null,
              putMessageOnPipe: function () {},
              attributesStaggers: e,
              propsStaggers: n,
            };
          },
          parseElementsDynamics: function (t, e, n, i, r) {
            for (
              var s = "incidents.".concat(r, ".attrs"),
                a = "incidents.".concat(r, ".props"),
                o = $t(e),
                u = $t(n),
                l = 0;
              l < t.length;
              l++
            )
              if (0 === t[l].path.indexOf(s)) {
                var c = t[l].path.substring(s.length + 1);
                o.setValue(c, t[l].values[i]);
              } else if (0 === t[l].path.indexOf(a)) {
                var h = t[l].path.substring(a.length + 1);
                u.setValue(h, t[l].values[i]);
              }
            return {
              incidentAttrs: o.exportFlattened(),
              incidentProps: u.exportFlattened(),
            };
          },
          getStaggersForChild: function (t, e, n) {
            for (var i = [], r = [], s = 0; s < t.length; s++)
              "position" === n &&
              0 === t[s].path.indexOf("incidents.".concat(e, ".").concat(n))
                ? r.push({ path: "position", stagger: t[s].stagger })
                : 0 === t[s].path.indexOf("incidents.".concat(e, ".").concat(n))
                ? r.push({
                    path: t[s].path.substring(
                      "incidents.".concat(e, ".").concat(n).length + 1
                    ),
                    stagger: t[s].stagger,
                  })
                : i.push(t[s]);
            return { identifiedDynamics: r, remainingDynamics: i };
          },
          createElementProxy: function (t, e, n, i, r) {
            for (
              var s = $t(t),
                a = this.cascadeSelectors(
                  e,
                  t.attrs.incidents,
                  "attrs.incidents"
                ),
                o = 0;
              o < i.length;
              o++
            )
              s.setValue("attrs.".concat(i[o].path), i[o].values[n]);
            for (var u = 0; u < r.length; u++)
              s.setValue("props.".concat(r[u].path), r[u].values[n]);
            for (var l = 0; l < a.length; l++)
              s.setValue(a[l].path, a[l].value);
            return s;
          },
        },
        or = (function (t) {
          d(n, t);
          var e = g(n);
          function n() {
            return o(this, n), e.apply(this, arguments);
          }
          return (
            l(n, [
              {
                key: "parseAttrsDynamicValues",
                value: function (t, e) {
                  this.childrenStaggers = [];
                  for (var n = 0; n < t.attributesStaggers.length; n++)
                    ar.refersToOwnSelector(t, t.attributesStaggers[n].path)
                      ? this.staggerAttrs.push({
                          path: t.attributesStaggers[n].path,
                          values: t.attributesStaggers[
                            n
                          ].stagger.calculateValues(e, this.initParams),
                        })
                      : this.childrenStaggers.push(t.attributesStaggers[n]);
                },
              },
              {
                key: "handleRecalcDuration",
                value: function (t, e) {
                  var i = b(f(n.prototype), "handleRecalcDuration", this).call(
                    this,
                    t,
                    e
                  );
                  return (
                    (this.descriptiveIncident.dynamicDurationValue =
                      1 * this.duration),
                    i
                  );
                },
              },
              {
                key: "lastWish",
                value: function () {
                  (this.descriptiveIncident.dynamicDurationValue = null),
                    this.descriptiveIncident.putMessageOnPipe(
                      "setDurationDynamic",
                      {},
                      "Groups",
                      { selfExecute: !1, direction: ot }
                    ),
                    b(f(n.prototype), "lastWish", this).call(this);
                },
              },
              {
                key: "_createElementIncident",
                value: function (t, e, n, i, r, s) {
                  for (
                    var a = this,
                      o = ar.createElementProxy(
                        e,
                        n.context.getElementSelectorByMCID(s),
                        i,
                        this.staggerAttrs,
                        this.staggerProps
                      ),
                      u = 0;
                    u < this.staggerAttrs.length;
                    u++
                  )
                    o.setValue(
                      "attrs.".concat(this.staggerAttrs[u].path),
                      this.staggerAttrs[u].values[i]
                    );
                  for (
                    var l = _t({
                        id: ""
                          .concat(this.id, "_element")
                          .concat("-")
                          .concat(i),
                        attrs: {},
                        props: {},
                        Incident: sr.Incident,
                        plugin_npm_name: sr.plugin_npm_name,
                        Channel: sr.Channel,
                        DescriptiveIncident: new sr(),
                      }),
                      c = function (t) {
                        var e = _t({
                            id: ""
                              .concat(a.id, "_element")
                              .concat("-")
                              .concat(i, "_repeat")
                              .concat("-")
                              .concat(t),
                            attrs: {},
                            props: {},
                            Incident: sr.Incident,
                            plugin_npm_name: sr.plugin_npm_name,
                            Channel: sr.Channel,
                            DescriptiveIncident: new sr(),
                          }),
                          s = a.childrenStaggers;
                        o.attrs.incidents.forEach(function (u, l) {
                          var c = ar.parseElementsDynamics(
                              a.staggerAttrs,
                              u.attrs,
                              u.props,
                              i,
                              l
                            ),
                            h = c.incidentAttrs,
                            p = c.incidentProps,
                            d = ar.getStaggersForChild(s, l, "attrs"),
                            f = ar.getStaggersForChild(
                              d.remainingDynamics,
                              l,
                              "props"
                            ),
                            m = ar.getStaggersForChild(
                              d.remainingDynamics,
                              l,
                              "position"
                            );
                          (s = f.remainingDynamics),
                            o.setValue(
                              "attrs.incidents.".concat(l, ".props.id"),
                              ""
                                .concat(a.id, "_element")
                                .concat("-")
                                .concat(i, "_repeat")
                                .concat("-")
                                .concat(t, "_incident")
                                .concat("-")
                                .concat(l)
                            );
                          var v = ur(
                              ar.createDescriptiveIncidentLikeObject(
                                u,
                                d.identifiedDynamics,
                                f.identifiedDynamics,
                                h,
                                p
                              ),
                              n
                            ),
                            g = u.position;
                          1 === m.identifiedDynamics.length &&
                            (g = m.identifiedDynamics[0].stagger.calculateValues(
                              new Array(r),
                              a.initParams
                            )[i]),
                            e.addChild(v, g);
                        }),
                          l.addChild(
                            e,
                            ar.getRepeatPosition(
                              o.props.delay,
                              o.props.hiatus,
                              e.duration,
                              t
                            )
                          );
                      },
                      h = 0;
                    h < (o.props.repeats || 1);
                    h++
                  )
                    c(h);
                  this.addChild(l, 0);
                },
              },
            ]),
            n
          );
        })(Vt);
      function ur(t, e) {
        var n,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if ((i && "off" === t.audio) || (!i && "only" === t.audio)) return null;
        if (
          Object.prototype.hasOwnProperty.call(t.props, "selector") &&
          ((!i && "~" === t.props.selector.charAt(0)) ||
            (i && "~" !== t.props.selector.charAt(0) && !t.constructor.isClip))
        )
          return null;
        if (t.constructor.isClip) {
          if (!Object.prototype.hasOwnProperty.call(t.props, "selector") || i)
            return i ? t.audioClip : t.realClip;
          (n = new Lt(t, e)).plugin_channel_class = at;
        } else if (t.constructor.isCombo) n = new or(t, e);
        else if (t.constructor.isGroup)
          for (var r in ((n = _t({
            id: t.id,
            attrs: t.attrs,
            props: t.props,
            Incident: t.constructor.Incident,
            plugin_npm_name: t.constructor.plugin_npm_name,
            Channel: t.constructor.Channel,
            DescriptiveIncident: t,
          })),
          t.children)) {
            var s = ur(t.children[r].leaf, e);
            null !== s && n.addChild(s, t.children[r].position);
          }
        else n = new Vt(t, e);
        return n;
      }
      var lr = "@kissmybutton/self-contained-incidents",
        cr = (function (t) {
          d(n, t);
          var e = g(n);
          function n(t, i) {
            var r;
            return (
              o(this, n),
              ((r = e.call(this, t, i)).attrs = t),
              (r.props = i),
              (r.isTheClip = !0),
              (r.blockingWaitings = {}),
              (r.instantiatedChannels = {}),
              (r.isHostedClip = !0),
              (r.instantiatedCopiesContexts = {}),
              (r.instantiatedCopiesUnblockingMethods = []),
              r.onClipInitialise(),
              (r.runTimeInfo = r.props.runTimeInfo),
              (r.durationSubs = []),
              (r.audioClip = !1),
              r
            );
          }
          return (
            l(n, [
              {
                key: "contextReady",
                get: function () {
                  return this.context.contextLoaded;
                },
              },
              { key: "onClipInitialise", value: function () {} },
              {
                key: "contextLoading",
                value: function () {
                  this.context.contextLoaded = !1;
                },
              },
              {
                key: "contextLoaded",
                value: function () {
                  for (var t in ((this.context.contextLoaded = !0),
                  this.putMessageOnPipe(
                    "contextLoaded",
                    {},
                    {},
                    { selfExecute: !1, direction: ut }
                  ),
                  this.instantiatedChannels))
                    this.instantiatedChannels[t].recalcScratchValues();
                  for (
                    var e = 0;
                    e < this.instantiatedCopiesUnblockingMethods.length;
                    e++
                  )
                    this.instantiatedCopiesUnblockingMethods[e]();
                  this.unblock();
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
                      var i = this.instantiatedCopiesContexts[n].getElements(t),
                        r = 0;
                      r < i.length;
                      r++
                    )
                      e.push(i[r]);
                  return e;
                },
              },
              {
                key: "addContext",
                value: function (t) {
                  (this.instantiatedCopiesContexts[t.clipId] = t.context),
                    (t.instantiatedCopiesContexts = this.instantiatedCopiesContexts),
                    this.instantiatedCopiesUnblockingMethods.push(t.unblock);
                  var e = this.putMessageOnPipe(
                    "addContext",
                    t,
                    {},
                    { selfExecute: !1, direction: ut }
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
                          incidentFromDescription: ur,
                          contextData: {
                            clipId: this.id,
                            context: this.context,
                            instantiatedCopiesContexts: this
                              .instantiatedCopiesContexts,
                          },
                          audio: this.audioClip,
                        },
                        t.parentGroupId,
                        { selfExecute: !0, direction: ut }
                      ),
                      i = {},
                      r = 0;
                    r < n.length;
                    r++
                  ) {
                    var s = n[r].response.getIncidentsByChannel(
                      n[r].positionDelta + t.millisecond
                    );
                    for (var a in s) {
                      var o;
                      Object.prototype.hasOwnProperty.call(i, a) || (i[a] = []),
                        (o = i[a]).push.apply(o, C(s[a]));
                    }
                  }
                  var u = this.checkAddition(i);
                  return u.result
                    ? {
                        result: !0,
                        execute: function () {
                          u.execute();
                          for (var i = 0; i < n.length; i++)
                            for (var r in (n[i].responder.addChild(
                              n[i].response,
                              t.millisecond
                            ),
                            n[i].responder.putMessageOnPipe(
                              "recalcDuration",
                              {},
                              "Groups",
                              { selfExecute: !0, direction: ot }
                            ),
                            e.instantiatedCopiesContexts))
                              n[i].responder.putMessageOnPipe(
                                "addContext",
                                {
                                  clipId: r,
                                  context: e.instantiatedCopiesContexts[r],
                                },
                                "ContextAwareIncidents",
                                { selfExecute: !1, direction: ut }
                              );
                          e._calculateDuration();
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
                    i = [],
                    r = [];
                  for (var s in t) {
                    Object.prototype.hasOwnProperty.call(
                      this.instantiatedChannels,
                      s
                    ) ||
                      (this.instantiatedChannels[s] = new t[
                        s
                      ][0].incident.plugin_channel_class({
                        runTimeInfo: this.runTimeInfo,
                        context: this.context,
                        subscribe: this.props.subscribe,
                      }));
                    var a = this.instantiatedChannels[s].addIncidents(t[s], e);
                    (n = n && a.result),
                      a.result ? r.push(a.execute) : (i = i.concat(a.errors));
                  }
                  var o = function () {
                    for (var t = 0; t < r.length; t++) r[t]();
                  };
                  return { result: n, errors: i, execute: o };
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
                        { selfExecute: !0, direction: ut }
                      ),
                      n = {},
                      i = 0;
                    i < e.length;
                    i++
                  ) {
                    var r = e[i].response.getIncidentsByChannel(
                      e[i].positionDelta + t.millisecond
                    );
                    for (var s in r) {
                      var a;
                      Object.prototype.hasOwnProperty.call(n, s) || (n[s] = []),
                        (a = n[s]).push.apply(a, C(r[s]));
                    }
                  }
                  var o = this.checkMove(n, t.positionDelta);
                  return o.result
                    ? {
                        result: !0,
                        execute: function () {
                          o.execute();
                          for (var n = 0; n < e.length; n++)
                            e[n].responder.editPosition(
                              e[n].response.id,
                              t.millisecond
                            ),
                              e[n].responder.putMessageOnPipe(
                                "recalcDuration",
                                {},
                                "Groups",
                                { selfExecute: !0, direction: ot }
                              );
                        },
                      }
                    : o;
                },
              },
              {
                key: "checkMove",
                value: function (t, e) {
                  var n = !0,
                    i = [],
                    r = [];
                  for (var s in t) {
                    var a = this.instantiatedChannels[s].editIncidents(t[s], e);
                    (n = n && a.result),
                      a.result ? r.push(a.execute) : (i = i.concat(a.errors));
                  }
                  return {
                    result: n,
                    errors: i,
                    execute: function () {
                      for (var t = 0; t < r.length; t++) r[t]();
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
                        { selfExecute: !0, direction: ut }
                      ),
                      n = {},
                      i = 0;
                    i < e.length;
                    i++
                  ) {
                    var r = e[i].response.getIncidentsByChannel();
                    for (var s in r) {
                      var a;
                      Object.prototype.hasOwnProperty.call(n, s) || (n[s] = []),
                        (a = n[s]).push.apply(a, C(r[s]));
                    }
                  }
                  var o = this.checkDelete(n);
                  return o.result
                    ? {
                        result: !0,
                        execute: function () {
                          o.execute();
                          for (var t = 0; t < e.length; t++)
                            e[t].responder.removeChild(e[t].response.id),
                              e[t].responder.putMessageOnPipe(
                                "recalcDuration",
                                {},
                                "Groups",
                                { selfExecute: !0, direction: ot }
                              );
                        },
                      }
                    : o;
                },
              },
              {
                key: "checkDelete",
                value: function (t) {
                  var e = !0,
                    n = [],
                    i = [];
                  for (var r in t) {
                    var s = this.instantiatedChannels[r].removeIncidents(t[r]);
                    (e = e && s.result),
                      s.result ? i.push(s.execute) : (n = n.concat(s.errors));
                  }
                  return {
                    result: e,
                    errors: n,
                    execute: function () {
                      for (var t = 0; t < i.length; t++) i[t]();
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
                        { selfExecute: !1, direction: ut }
                      ),
                      n = {},
                      i = 0;
                    i < e.length;
                    i++
                  ) {
                    var r = e[i].response.getIncidentsByChannel(
                      e[i].positionDelta
                    );
                    for (var s in r) {
                      var a;
                      Object.prototype.hasOwnProperty.call(n, s) || (n[s] = []),
                        (a = n[s]).push.apply(a, C(r[s]));
                    }
                  }
                  var o = 0;
                  e.length > 0 && (o = e[0].positionDelta);
                  var u = this.checkResize(t.fraction, n, o);
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
                    i = !0,
                    r = [],
                    s = [];
                  for (var a in e) {
                    var o = rt.systoleDiastoleProjections(e[a], t, n),
                      u = this.instantiatedChannels[a].checkResizedIncidents(o);
                    (i = i && u.result),
                      u.result ? s.push(u.execute) : (r = r.concat(u.errors));
                  }
                  var l = function () {
                    for (var t = 0; t < s.length; t++) s[t]();
                  };
                  return { result: i, errors: r, execute: l };
                },
              },
              {
                key: "context",
                get: function () {
                  var t, e;
                  return (
                    (null !== (e = (t = this.ownContext).contextLoaded) &&
                      void 0 !== e) ||
                      (t.contextLoaded = !0),
                    this.ownContext
                  );
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
                    (e[lr] = [{ millisecond: t, incident: this, id: this.id }]),
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
                  var i =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  if (!1 !== this.contextReady) {
                    for (var r in (n || (n = this.id),
                    this.instantiatedChannels)) {
                      var s = this.instantiatedChannels[r];
                      s.moveTo(this.runTimeInfo.currentMillisecond, e, n, i);
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
              { key: "handleRemoveBlockingWaiting", value: function (t, e) {} },
            ]),
            n
          );
        })(gt),
        hr = (function () {
          function t() {
            o(this, t),
              (this.output = R.createGain()),
              (this.gainNode = R.createGain()),
              R.createStereoPanner &&
                (this.pannerNode = R.createStereoPanner()),
              R.createStereoPanner
                ? (this.pannerNode.connect(this.gainNode),
                  this.gainNode.connect(this.output),
                  (this.input = this.pannerNode))
                : (this.gainNode.connect(this.output),
                  (this.input = this.gainNode));
          }
          return (
            l(t, [
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
      function pr(t) {
        for (
          var e = window.atob(t), n = e.length, i = new Uint8Array(n), r = 0;
          r < n;
          r++
        )
          i[r] = e.charCodeAt(r);
        return i.buffer;
      }
      var dr = /\[data(-mcid="+\w+")+\]/g,
        fr = (function () {
          function t() {
            o(this, t), (this.subscribers = []);
          }
          return (
            l(t, [
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
        mr = (function () {
          function t() {
            var e = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              i = arguments.length > 1 ? arguments[1] : void 0;
            o(this, t),
              (this.totalSources = n.length),
              (this.audioSources = {}),
              (this.elementsByMCID = {});
            for (
              var r = function (t) {
                  var r = n[t],
                    s = {
                      mcid: r.mcid || et(),
                      id: r.id,
                      src: r.src,
                      classes: r.classes || [],
                      base64: r.base64 || !1,
                      pubSub: new fr(),
                      soundLoaded: !1,
                      startValues: r.startValues || {},
                    };
                  if (
                    ((e.audioSources[s.id] = s),
                    (e.elementsByMCID[s.mcid] = s),
                    r.base64)
                  )
                    R.decodeAudioData(pr(r.src), function (t) {
                      e._setBuffer(s, t, i);
                    });
                  else {
                    var a = new XMLHttpRequest();
                    a.open("GET", s.src, !0),
                      (a.responseType = "arraybuffer"),
                      (e.soundLoaded = !1),
                      (a.onload = function () {
                        R.decodeAudioData(
                          a.response,
                          function (t) {
                            e._setBuffer(s, t, i);
                          },
                          e.onError
                        );
                      }),
                      a.send();
                  }
                },
                s = 0;
              s < n.length;
              s++
            )
              r(s);
            this.context = {
              document: document,
              window: window,
              rootElement: document.body,
              unmount: function () {},
              masterNode: i,
              audioContext: R,
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
            l(t, [
              {
                key: "_setBuffer",
                value: function (t, e, n) {
                  (t.soundLoaded = !0),
                    (t.buffer = e),
                    (t.effectsAudioNode = new hr()),
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
                    if (dr.exec(t)) {
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
                      i = [];
                    for (var r in this.audioSources)
                      r.classes.indexOf(n) >= 0 && i.push(r);
                    return i;
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
        vr = (function (t) {
          d(n, t);
          var e = g(n);
          function n(t, i) {
            var r;
            o(this, n),
              ((r = e.call(this, t, i)).audioNode = new hr()),
              r.audioNode.connect(R.destination);
            var s = new mr(r.props.audioSources, r.audioNode);
            return (
              (r.ownContext = p(p({}, s.context), {}, { isHostedClip: !0 })),
              (r.audioClip = !0),
              r
            );
          }
          return (
            l(n, [
              {
                key: "onProgress",
                value: function (t, e, i) {
                  var r =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  b(f(n.prototype), "onProgress", this).call(
                    this,
                    t,
                    e,
                    this.id,
                    r
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
                    this.audioNode.output.connect(R.destination);
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
        })(cr),
        gr = (function (t) {
          d(n, t);
          var e = g(n);
          function n() {
            return o(this, n), e.apply(this, arguments);
          }
          return (
            l(n, [
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
                      (this.targetValue - this.initialValues) * t +
                      this.initialValues;
                    this.element.effectsAudioNode.gainNode.gain.value = n;
                  } else if ("pan" === this.attributeKey) {
                    var i =
                      (this.targetValue - this.initialValues) * t +
                      this.initialValues;
                    this.element.effectsAudioNode.pannerNode.pan.value = i;
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
        })(At),
        yr = (function (t) {
          d(n, t);
          var e = g(n);
          function n(t) {
            var i;
            return (
              o(this, n),
              ((i = e.call(this, t)).playingIncidentsIds = []),
              (i.transitioned = !1),
              t.subscribe(et(), i._stateChange.bind(m(i)), 0, 1, !0),
              i
            );
          }
          return (
            l(n, [
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
                  var i =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  if ("transitional" === this.runTimeInfo.state || i) {
                    (this.transitioned = !0), this._stopPlayingIncidents();
                    for (var r = 0; r < this.incidents.length; r++) {
                      var s = this.incidents[r],
                        a = s.id,
                        o = s.millisecond,
                        u = this._incidentById(a),
                        l = void 0,
                        c = void 0;
                      e < o
                        ? ((l = 0), (c = 0))
                        : e > o + u.duration
                        ? ((l = 1), (c = u.duration))
                        : (l = (c = e - o) / u.duration),
                        u.onProgress(l, c, n, !0);
                    }
                  } else {
                    this.transitioned && ((t = 0), (this.transitioned = !1));
                    for (var h = this.incidents, p = 0; p < h.length; p++) {
                      var d = h[p],
                        f = d.millisecond,
                        m = this._incidentById(d.id),
                        v = m.duration,
                        g = f + v,
                        y = "".concat(d.id).concat("|||").concat(n);
                      if (f >= t && f < e && g > e) {
                        var b = (e - f) / v >= 1,
                          x = b ? 1 : (e - f) / v,
                          k = b ? v : e - f,
                          w = m.play(x, k, n);
                        w && this.playingIncidentsIds.push(y);
                      } else if (g > t && g <= e) {
                        m.stop(n);
                        var C = this.playingIncidentsIds.indexOf(y);
                        C > -1 && this.playingIncidentsIds.splice(C, 1);
                      }
                    }
                    this.runTimeInfo.currentMillisecond = e;
                  }
                },
              },
            ]),
            n
          );
        })(yt),
        br = _(null, function (t) {
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
                r = arguments.length > 2 ? arguments[2] : void 0;
              o(this, e),
                t(this),
                (this.attrs = n),
                (this.props = i),
                (this.dna = r),
                (this.context = r.context),
                (this.mcid = r.mcid),
                (this.id = i.id || et()),
                (this.modelId = i.modelId),
                (this.gotContext = !1),
                (this.plugin_channel_class = yr),
                (this.mc_plugin_npm_name = "motor-cortex-js-media-playback"),
                Object.prototype.hasOwnProperty.call(
                  i,
                  "plugin_channel_class"
                ) && (this.plugin_channel_class = i.plugin_channel_class),
                Object.prototype.hasOwnProperty.call(i, "mc_plugin_npm_name") &&
                  (this.mc_plugin_npm_name = i.mc_plugin_npm_name),
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
                decorators: [Et],
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
                    rt.error(t), rt.error(this.mcid);
                  }
                },
              },
              {
                kind: "method",
                key: "onGetContext",
                value: function () {
                  rt.info(
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
                  rt.info(
                    'Overwritte the "onInialise" method with the code you want to get executed',
                    "info"
                  );
                },
              },
              { kind: "method", key: "onProgress", value: function (t, e) {} },
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
                decorators: [mt],
                key: "setBlock",
                value: function () {},
              },
              {
                kind: "method",
                decorators: [vt],
                key: "unblock",
                value: function () {},
              },
            ],
          };
        }),
        xr = {
          npm_name: "@kissmybutton/motorcortex-soundsystem",
          name: "Internal MotorCortex Soundsystem",
          incidents: [
            {
              exportable: (function (t) {
                d(n, t);
                var e = g(n);
                function n() {
                  return o(this, n), e.apply(this, arguments);
                }
                return (
                  l(n, [
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
                          (this.audioNode = R.createBufferSource()),
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
              })(br),
              name: "AudioPlayback",
            },
            { exportable: gr, name: "AudioEffect" },
          ],
          Clip: { exportable: vr },
          audio: "only",
        },
        kr = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null;
            o(this, t),
              (this.realArray = []),
              null != e && (this.realArray = e);
          }
          return (
            l(t, [
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
        })(),
        wr = (function () {
          function t(e) {
            o(this, t),
              (this.originalArray = e),
              (this.extraArray = {}),
              (this.addedKeys = []),
              (this.removedKeys = []);
          }
          return (
            l(t, [
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
                    ? this.originalArray[t]
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
        })();
      function Cr(t, e, n, i) {
        var r = !1;
        for (var s in e)
          Object.prototype.hasOwnProperty.call(n, s) ||
            ((r = !0), (i[s] = e[s]));
        return (t.animatedAttributeValue = i), r;
      }
      function Or(t, e, n, i) {
        var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          s = t[i],
          a = e._get(s.id);
        a.setInitialValue(n, r);
        var o = Cr(
          a,
          a.initialValue,
          a.originalAnimatedAttributeValue,
          JSON.parse(JSON.stringify(a.animatedAttributeValue))
        );
        o && (a.lastWish(), a.onGetContext()),
          o &&
            i < t.length - 1 &&
            Or(t, e, a.animatedAttributeValue, i + 1, !1);
      }
      var Ir = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            o(this, t),
              (this.lanes = {}),
              e.lanes && (this.lanes = e.lanes),
              (this.comboAttributes = {}),
              null != e.comboAttributes &&
                (this.comboAttributes = e.comboAttributes),
              (this.belongingLaneKeysByAnimationId = {}),
              e.belongingLaneKeysByAnimationId &&
                (this.belongingLaneKeysByAnimationId =
                  e.belongingLaneKeysByAnimationId),
              (this.incidentsById = new kr({})),
              e.incidentsById && (this.incidentsById = e.incidentsById);
          }
          return (
            l(t, [
              {
                key: "_resize",
                value: function (t) {
                  for (
                    var e = Object.keys(this.lanes), n = 0;
                    n < e.length;
                    n++
                  )
                    for (
                      var i = e[n], r = this.lanes[i], s = 0;
                      s < r.length;
                      s++
                    )
                      r[s].millisecond = r[s].millisecond * t;
                },
              },
              {
                key: "createTestLanesSanbox",
                value: function () {
                  var e = {
                    lanes: $t(this.lanes),
                    belongingLaneKeysByAnimationId: $t(
                      this.belongingLaneKeysByAnimationId
                    ),
                    incidentsById: new wr(this.incidentsById._export()),
                  };
                  return (
                    this.comboAttributes &&
                      (e.comboAttributes = this.comboAttributes),
                    new t(e)
                  );
                },
              },
              {
                key: "getLane",
                value: function (t, e) {
                  return this.lanes[nt(t, e)];
                },
              },
              {
                key: "applySandboxChanges",
                value: function (t) {
                  (this.lanes = t.lanes.exportFlattened()),
                    (this.belongingLaneKeysByAnimationId = t.belongingLaneKeysByAnimationId.exportFlattened()),
                    (this.incidentsById = new kr(t.incidentsById._export()));
                },
              },
              {
                key: "laneExists",
                value: function (t, e) {
                  var n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    i = nt(t, e);
                  return (
                    !!this.lanes.hasOwnProperty(i) ||
                    (n && this.lanes.setValue(i, []), !1)
                  );
                },
              },
              {
                key: "getOverlappingAnims",
                value: function (t, e, n) {
                  var i = this,
                    r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : [],
                    s =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : null;
                  return Array.from(this.lanes[nt(e, n)] || []).filter(
                    function (e) {
                      var n = t.incident.duration;
                      null != s && (n = s);
                      var a = i.incidentsById._get(e.id).duration;
                      return (
                        e.id !== t.incident.id &&
                        !r.includes(e.id) &&
                        ((e.millisecond >= t.millisecond &&
                          e.millisecond < n + t.millisecond) ||
                          (e.millisecond + a > t.millisecond &&
                            e.millisecond + a <= n + t.millisecond) ||
                          (e.millisecond < t.millisecond &&
                            e.millisecond + a > n + t.millisecond))
                      );
                    }
                  );
                },
              },
              {
                key: "addElementToLane",
                value: function (t, e, n, i) {
                  var r = this,
                    s = [],
                    a = nt(t, e);
                  this.incidentsById._set(i.id, i);
                  var o = { millisecond: n, id: i.id };
                  this.laneExists(t, e, !0),
                    this.lanes.pushValue(a, o),
                    this.lanes[a].sortBy("millisecond");
                  var u = this.lanes[a],
                    l = this.lanes[a].findIndex(function (t) {
                      return t.id === i.id;
                    });
                  return (
                    Object.prototype.hasOwnProperty.call(i.id) ||
                      this.belongingLaneKeysByAnimationId.setValue(i.id, []),
                    this.belongingLaneKeysByAnimationId.pushValue(i.id, a),
                    0 === l
                      ? this.lanes[a].length > 1
                        ? s.push(function () {
                            i.setInitialValue(
                              r.incidentsById._get(u[1].id).pureInitialValues
                            );
                          })
                        : s.push(function () {
                            i.setInitialValue();
                          })
                      : s.push(function () {
                          i.setInitialValue(
                            r.incidentsById._get(u[l - 1].id)
                              .animatedAttributeValue
                          );
                        }),
                    Object.prototype.hasOwnProperty.call(
                      this.comboAttributes,
                      e
                    ) &&
                      s.push(function () {
                        return Or(u, r.incidentsById, i.initialValue, l);
                      }),
                    l + 1 < u.length &&
                      s.push(function () {
                        r.incidentsById
                          ._get(u[l + 1].id)
                          .setInitialValue(i.animatedAttributeValue),
                          r.incidentsById._get(u[l + 1].id).gotContext &&
                            (r.incidentsById._get(u[l + 1].id).lastWish(),
                            r.incidentsById._get(u[l + 1].id).onGetContext());
                      }),
                    s
                  );
                },
              },
              {
                key: "updateLane",
                value: function (t, e) {
                  for (var n = this, i = {}, r = 0; r < t.length; r++)
                    for (
                      var s = this.belongingLaneKeysByAnimationId[t[r]], a = 0;
                      a < s.length;
                      a++
                    ) {
                      var o = s[a];
                      Object.prototype.hasOwnProperty.call(i, o) ||
                        (i[o] = {
                          animations: [],
                          lane: this.lanes[o],
                          laneData: Y(s[a]),
                        }),
                        i[o].animations.push(t[r]);
                    }
                  for (var u in i) {
                    var l = i[u],
                      c = l.laneData,
                      h = l.lane,
                      p = l.animations,
                      d = C(h);
                    d.sort(function (t, e) {
                      return t.millisecond - e.millisecond;
                    });
                    for (
                      var f = Object.prototype.hasOwnProperty.call(
                          this.comboAttributes,
                          c.attribute
                        ),
                        m = 0;
                      m < h.length;
                      m++
                    )
                      p.includes(h[m].id) && (h[m].millisecond += e);
                    h.sort(function (t, e) {
                      return t.millisecond - e.millisecond;
                    }),
                      (this.lanes[u] = h);
                    for (
                      var v = function (t) {
                          var e = p[t],
                            i = d.findIndex(function (t) {
                              return t.id === e;
                            }),
                            r = h.findIndex(function (t) {
                              return t.id === e;
                            });
                          if (i === r && r <= 1) return "continue";
                          var s = n.incidentsById._get(h[r].id);
                          if (i + 1 < h.length)
                            if (0 === i)
                              if (f)
                                Or(
                                  h,
                                  n.incidentsById,
                                  s.pureInitialValues,
                                  0,
                                  !0
                                );
                              else {
                                var a = n.incidentsById._get(d[1].id);
                                a.setInitialValue(s.pureInitialValues),
                                  a.onGetContext();
                              }
                            else if (f) {
                              var o = r > i ? i : r;
                              Or(
                                h,
                                n.incidentsById,
                                n.incidentsById._get(d[i - 1].id)
                                  .animatedAttributeValue,
                                o,
                                !0
                              );
                            } else
                              n.incidentsById
                                ._get(d[i + 1].id)
                                .setInitialValue(
                                  n.incidentsById._get(d[i - 1].id)
                                    .animatedAttributeValue
                                ),
                                n.incidentsById
                                  ._get(d[i + 1].id)
                                  .onGetContext();
                          if (
                            (0 === r
                              ? f
                                ? Or(
                                    h,
                                    n.incidentsById,
                                    n.incidentsById._get(d[0].id)
                                      .pureInitialValues,
                                    r,
                                    !0
                                  )
                                : (s.setInitialValue(
                                    n.incidentsById._get(d[0].id)
                                      .pureInitialValues
                                  ),
                                  s.onGetContext())
                              : f
                              ? Or(
                                  h,
                                  n.incidentsById,
                                  n.incidentsById._get(h[r - 1].id)
                                    .animatedAttributeValue,
                                  r,
                                  !0
                                )
                              : (s.setInitialValue(
                                  n.incidentsById._get(h[r - 1].id)
                                    .animatedAttributeValue
                                ),
                                s.onGetContext()),
                            r + 1 >= h.length)
                          )
                            return "continue";
                          if (f)
                            return (
                              Or(
                                h,
                                n.incidentsById,
                                s.animatedAttributeValue,
                                r + 1,
                                !0
                              ),
                              "continue"
                            );
                          var u = n.incidentsById._get(h[r + 1].id);
                          u.setInitialValue(s.animatedAttributeValue),
                            u.onGetContext();
                        },
                        g = 0;
                      g < p.length;
                      g++
                    )
                      v(g);
                  }
                },
              },
              {
                key: "deleteAnimations",
                value: function (t) {
                  for (var e = {}, n = 0; n < t.length; n++) {
                    for (
                      var i = t[n],
                        r = this.belongingLaneKeysByAnimationId[i],
                        s = 0;
                      s < r.length;
                      s++
                    ) {
                      for (
                        var a = this.lanes[r[s]], o = -1, u = 0;
                        u < a.length;
                        u++
                      )
                        if (a[u].id === i) {
                          o = u;
                          break;
                        }
                      for (
                        var l = p({}, a[o]),
                          c = this.incidentsById._get(l.id),
                          h = Y(r[s]),
                          d = [],
                          f = 0;
                        f < a.length;
                        f++
                      )
                        a[f].id !== i && d.push(a[f]);
                      if (
                        ((this.lanes[r[s]] = d),
                        0 !== (a = this.lanes[r[s]]).length)
                      ) {
                        e[r[s]] = Y(r[s]);
                        var m = this.incidentsById._get(l.id).pureInitialValues;
                        if (!(o >= a.length || !1 === m))
                          if (
                            Object.prototype.hasOwnProperty.call(
                              this.comboAttributes,
                              h.attribute
                            )
                          )
                            Or(a, this.incidentsById, m, o, !0);
                          else {
                            var v = this.incidentsById._get(a[o].id);
                            v.setInitialValue(m), v.onGetContext();
                          }
                      } else
                        c.onProgress(0, 0),
                          delete this.lanes[r[s]],
                          Object.prototype.hasOwnProperty.call(e, r[s]) &&
                            delete e[r[s]];
                    }
                    delete this.belongingLaneKeysByAnimationId[t[n]];
                  }
                  return e;
                },
              },
              {
                key: "recalcScratchValues",
                value: function (t) {
                  for (
                    var e = Object.keys(this.lanes), n = 0;
                    n < e.length;
                    n++
                  ) {
                    var i = e[n],
                      r = this.lanes[i];
                    if (r.length > 0) {
                      var s = this.incidentsById._get(r[0].id),
                        a = s.getScratchValue(t),
                        o = Y(i);
                      Object.prototype.hasOwnProperty.call(
                        this.comboAttributes,
                        o.attribute
                      )
                        ? Or(r, this.incidentsById, a, 0, !0)
                        : s.setInitialValue(a),
                        s.lastWish(),
                        s.onGetContext();
                    }
                  }
                },
              },
            ]),
            t
          );
        })(),
        Pr = (function (t) {
          d(n, t);
          var e = g(n);
          function n(t) {
            var i;
            return (
              o(this, n),
              ((i = e.call(this, t)).comboAttributes = {}),
              (i.fixedAttributeName = "_"),
              null != t.comboAttributes &&
                (i.comboAttributes = t.comboAttributes),
              (i.LanesHandler = new Ir({ comboAttributes: i.comboAttributes })),
              i
            );
          }
          return (
            l(n, [
              {
                key: "setComboAttributes",
                value: function (t) {
                  (this.comboAttributes = t),
                    (this.LanesHandler = new Ir({
                      comboAttributes: this.comboAttributes,
                    }));
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
                      i = this.LanesHandler.createTestLanesSanbox(),
                      r = [],
                      s = [],
                      a = [],
                      o = function (n) {
                        var o = !1,
                          u = t[n],
                          l = u.incident,
                          c = l.mcid,
                          h = l.attribute || e.fixedAttributeName;
                        i.laneExists(c, h), r.push({ mcid: c, attribute: h });
                        var p = i.getOverlappingAnims(u, c, h);
                        if (
                          (p.length > 0 &&
                            ((o = !0),
                            a.push({
                              type:
                                "unauthorised, overlapping incidents on the same element",
                              meta: {
                                element_mcid: c,
                                attribute: h,
                                incident: u,
                                overlappingAnims: p,
                              },
                            })),
                          !o)
                        ) {
                          var d = i.addElementToLane(c, h, u.millisecond, l);
                          s.push(function () {
                            for (var t = 0; t < d.length; t++) d[t]();
                            l._onGetContextOnce();
                          });
                        }
                      },
                      u = 0;
                    u < t.length;
                    u++
                  )
                    o(u);
                  if (a.length > 0 && "all-or-nothing" === n)
                    return { result: !1, errors: a };
                  var l = this.LanesHandler,
                    c = function () {
                      for (var t = 0; t < r.length; t++) {
                        var e = nt(r[t].mcid, r[t].attribute),
                          n = i.lanes[e].exportFlattened();
                        n.sort(function (t, e) {
                          return t.millisecond - e.millisecond;
                        }),
                          i.lanes.setValue(e, n);
                      }
                      for (var a = 0; a < s.length; a++) s[a]();
                      l.applySandboxChanges(i);
                    };
                  return { result: !0, errors: a, execute: c };
                },
              },
              {
                key: "checkEdit",
                value: function (t, e) {
                  for (var n = [], i = 0; i < t.length; i++) n.push(t[i].id);
                  for (
                    var r = this.LanesHandler.createTestLanesSanbox(),
                      s = [],
                      a = 0;
                    a < t.length;
                    a++
                  )
                    for (
                      var o = t[a].incident.id,
                        u = t[a].incident.mcid,
                        l = t[a].incident.attribute || this.fixedAttributeName,
                        c = r.getLane(u, l),
                        h = 0;
                      h < c.length;
                      h++
                    )
                      if (c[h].id === o) {
                        var d = p({}, c[h]);
                        (d.millisecond += e),
                          (d.incident = r.incidentsById._get(d.id));
                        var f = r.getOverlappingAnims(d, u, l, n);
                        f.length > 0 &&
                          s.push({
                            type:
                              "anauthorised, overlapping animations on the same element",
                            meta: {
                              element_mcid: u,
                              attribute: l,
                              newAnimation: d,
                              overlappingAnims: f,
                            },
                          });
                        break;
                      }
                  if (s.length > 0) return { result: !1, errors: s };
                  var m = this;
                  return {
                    result: !0,
                    execute: function () {
                      m.LanesHandler.updateLane(n, e);
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
                      i = 0;
                    i < t.length;
                    i++
                  )
                    n.push(t[i].id);
                  for (
                    var r = this.LanesHandler.createTestLanesSanbox(),
                      s = [],
                      a = 0;
                    a < t.length;
                    a++
                  )
                    for (
                      var o = this.LanesHandler.incidentsById._get(t[a].id),
                        u = o.mcid,
                        l = o.attribute || this.fixedAttributeName,
                        c = r.getLane(u, l),
                        h = { mcid: u, attribute: l },
                        d = t[a].end - t[a].start,
                        f = 0;
                      f < c.length;
                      f++
                    )
                      if (c[f].id === t[a].id) {
                        if (!e) {
                          var m = c[f],
                            v = p({}, m);
                          (v.millisecond += t[a].startDelta),
                            (v.incident = r.incidentsById._get(v.id));
                          var g = r.getOverlappingAnims(
                            v,
                            h.mcid,
                            h.attribute,
                            n,
                            d
                          );
                          g.length > 0 &&
                            s.push({
                              type:
                                "anauthorised overlapping animations on the same element",
                              meta: {
                                element_mcid: h.mcid,
                                attribute: h.attribute,
                                newAnimation: v,
                                overlappingAnims: g,
                              },
                            });
                        }
                        break;
                      }
                  if (s.length > 0) return { result: !1, errors: s };
                  var y = this,
                    b = function () {
                      for (var e = 0; e < t.length; e++)
                        y.LanesHandler.updateLane([t[e].id], t[e].startDelta);
                    };
                  return { execute: b, result: !0 };
                },
              },
              {
                key: "checkDelete",
                value: function (t) {
                  for (var e = [], n = 0; n < t.length; n++) e.push(t[n].id);
                  var i = this;
                  return {
                    result: !0,
                    execute: function () {
                      i.LanesHandler.deleteAnimations(e);
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
                value: function (t, e, n, i) {
                  var r = this,
                    s =
                      arguments.length > 4 &&
                      void 0 !== arguments[4] &&
                      arguments[4],
                    a = t.filter(function (t) {
                      var i =
                        r.incidentsById._get(t.id).duration + t.millisecond;
                      return (
                        (i >= e && i <= n) || (i >= n && t.millisecond <= n)
                      );
                    });
                  if (0 === a.length) {
                    if (s && 0 === e) {
                      var o = this.incidentsById._get(t[0].id);
                      o.onProgress(0, 0, i);
                    }
                    return !0;
                  }
                  var u = a.length - 1,
                    l = this.incidentsById._get(a[u].id),
                    c = a[u].millisecond,
                    h = 1,
                    p = l.duration;
                  l.duration + c > n && (h = (p = n - c) / l.duration),
                    l.onProgress(h, p, i);
                },
              },
              {
                key: "slipToLaneBackwards",
                value: function (t, e, n, i) {
                  var r = this,
                    s = t.filter(function (t) {
                      var i =
                        r.incidentsById._get(t.id).duration + t.millisecond;
                      return (
                        (i <= n && i >= e) ||
                        (t.millisecond >= e && t.millisecond <= n) ||
                        (t.millisecond < e && i > n)
                      );
                    });
                  if (0 === s.length) return !0;
                  var a = this.incidentsById._get(s[0].id),
                    o = s[0].millisecond,
                    u = 0,
                    l = 0;
                  o < n && ((u = (n - o) / a.duration), (l = n - o)),
                    a.onProgress(u, l, i);
                },
              },
              {
                key: "moveTo",
                value: function (t, e, n) {
                  for (
                    var i =
                        arguments.length > 3 &&
                        void 0 !== arguments[3] &&
                        arguments[3],
                      r = Object.keys(this.lanes),
                      s = 0;
                    s < r.length;
                    s++
                  ) {
                    var a = this.lanes[r[s]];
                    t <= e
                      ? this.slipIntoLaneForwards(a, t, e, n, i)
                      : this.slipToLaneBackwards(a, t, e, n, i);
                  }
                },
              },
            ]),
            n
          );
        })(at);
      c(Pr, "type", "attributes");
      var Er = (function () {
          function t() {
            o(this, t), (this.customEntities = {});
          }
          return (
            l(t, [
              {
                key: "calcClipDims",
                value: function (t) {
                  var e = { use: !1, width: null, height: null };
                  return Object.prototype.hasOwnProperty.call(
                    t,
                    "originalDims"
                  ) &&
                    null !== t.originalDims.width &&
                    void 0 !== t.originalDims.width &&
                    null !== t.originalDims.height &&
                    void 0 !== t.originalDims.height
                    ? {
                        use: !0,
                        width:
                          t.originalDims.width.number +
                          t.originalDims.width.unit,
                        height:
                          t.originalDims.height.number +
                          t.originalDims.height.unit,
                      }
                    : (Object.prototype.hasOwnProperty.call(
                        t,
                        "containerParams"
                      ) &&
                        (Object.prototype.hasOwnProperty.call(
                          t.containerParams,
                          "width"
                        ) &&
                          ((e.use = !0), (e.width = t.containerParams.width)),
                        Object.prototype.hasOwnProperty.call(
                          t.containerParams,
                          "height"
                        ) &&
                          ((e.use = !0),
                          (e.height = t.containerParams.height))),
                      e);
                },
              },
              {
                key: "scalingCalculator",
                value: function (t) {
                  if (
                    !Object.prototype.hasOwnProperty.call(
                      t,
                      "containerParams"
                    ) ||
                    !Object.prototype.hasOwnProperty.call(t, "originalDims")
                  )
                    return { width: 1, height: 1 };
                  if (
                    !(
                      (null !== t.originalDims.width &&
                        void 0 !== t.originalDims.width) ||
                      (null !== t.originalDims.height &&
                        void 0 !== t.originalDims.height)
                    )
                  )
                    return { width: 1, height: 1 };
                  var e = X(t.containerParams),
                    n = null,
                    i = null;
                  return (
                    null !== e.width &&
                      null !== t.originalDims.width &&
                      (e.width.unit === t.originalDims.width.unit
                        ? (n = e.width.number / t.originalDims.width.number)
                        : rt.warning(
                            "containerParams and originalDims width of Incident have different dimensions.\n          containerParams.width will be ignored"
                          )),
                    null !== e.height &&
                      null !== t.originalDims.height &&
                      (e.height.unit === t.originalDims.height.unit
                        ? (i = e.height.number / t.originalDims.height.number)
                        : rt.warning(
                            "containerParams and originalDims height of Incident have different dimensions.\n          containerParams.width will be ignored"
                          )),
                    null === n && null === i
                      ? { width: 1, height: 1 }
                      : ((null !== n) & (null === i)
                          ? (i = n)
                          : (null !== i) & (null === n) && (n = i),
                        { width: n, height: i })
                  );
                },
              },
              {
                key: "getElementByMCID",
                value: function (t) {
                  if (
                    Object.prototype.hasOwnProperty.call(this.customEntities, t)
                  )
                    return this.customEntities[t];
                  if (
                    Object.prototype.hasOwnProperty.call(this.elementsByMCID, t)
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
                        var i = this.customEntities[n];
                        i.classes.indexOf(t.substr(1)) > -1 && e.push(i);
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
                  return !0 === t.customEntity ? t.id : t.getAttribute(N);
                },
              },
              {
                key: "setMCID",
                value: function (t, e) {
                  t.setAttribute(N, e);
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
                    : "[".concat(N, '="').concat(t, '"]');
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
                    ? (rt.error(
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
        Ar = Oe(function (t, e) {
          var n = /[|\\{}()[\]^$+*?.]/g;
          e.escapeRegExpChars = function (t) {
            return t ? String(t).replace(n, "\\$&") : "";
          };
          var i = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&#34;",
              "'": "&#39;",
            },
            r = /[&<>'"]/g;
          function s(t) {
            return i[t] || t;
          }
          (e.escapeXML = function (t) {
            return null == t ? "" : String(t).replace(r, s);
          }),
            (e.escapeXML.toString = function () {
              return (
                Function.prototype.toString.call(this) +
                ';\nvar _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n'
              );
            }),
            (e.shallowCopy = function (t, e) {
              for (var n in (e = e || {})) t[n] = e[n];
              return t;
            }),
            (e.shallowCopyFromList = function (t, e, n) {
              for (var i = 0; i < n.length; i++) {
                var r = n[i];
                void 0 !== e[r] && (t[r] = e[r]);
              }
              return t;
            }),
            (e.cache = {
              _data: {},
              set: function (t, e) {
                this._data[t] = e;
              },
              get: function (t) {
                return this._data[t];
              },
              remove: function (t) {
                delete this._data[t];
              },
              reset: function () {
                this._data = {};
              },
            }),
            (e.hyphenToCamel = function (t) {
              return t.replace(/-[a-z]/g, function (t) {
                return t[1].toUpperCase();
              });
            });
        }),
        Mr = Oe(function (t, e) {
          /**
           * @file Embedded JavaScript templating engine. {@link http://ejs.co}
           * @author Matthew Eernisse <mde@fleegix.org>
           * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
           * @project EJS
           * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
           */
          var n = s.default,
            i = !1,
            a = "locals",
            o = [
              "delimiter",
              "scope",
              "context",
              "debug",
              "compileDebug",
              "client",
              "_with",
              "rmWhitespace",
              "strict",
              "filename",
              "async",
            ],
            u = o.concat("cache"),
            l = /^\uFEFF/;
          function c(t, n) {
            var i;
            if (
              n.some(function (n) {
                return (
                  (i = e.resolveInclude(t, n, !0)), r.default.existsSync(i)
                );
              })
            )
              return i;
          }
          function h(t, n) {
            var i,
              r = t.filename,
              s = arguments.length > 1;
            if (t.cache) {
              if (!r) throw new Error("cache option requires a filename");
              if ((i = e.cache.get(r))) return i;
              s || (n = d(r).toString().replace(l, ""));
            } else if (!s) {
              if (!r)
                throw new Error(
                  "Internal EJS error: no file name or template provided"
                );
              n = d(r).toString().replace(l, "");
            }
            return (i = e.compile(n, t)), t.cache && e.cache.set(r, i), i;
          }
          function p(t, n, i) {
            var r;
            if (!i) {
              if ("function" == typeof e.promiseImpl)
                return new e.promiseImpl(function (e, i) {
                  try {
                    e((r = h(t)(n)));
                  } catch (t) {
                    i(t);
                  }
                });
              throw new Error("Please provide a callback function");
            }
            try {
              r = h(t)(n);
            } catch (t) {
              return i(t);
            }
            i(null, r);
          }
          function d(t) {
            return e.fileLoader(t);
          }
          function f(t, n) {
            var i = Ar.shallowCopy({}, n);
            if (
              ((i.filename = (function (t, n) {
                var i,
                  s,
                  a = n.views,
                  o = /^[A-Za-z]+:\\|^\//.exec(t);
                if (o && o.length)
                  (t = t.replace(/^\/*/, "")),
                    (i = Array.isArray(n.root)
                      ? c(t, n.root)
                      : e.resolveInclude(t, n.root || "/", !0));
                else if (
                  (n.filename &&
                    ((s = e.resolveInclude(t, n.filename)),
                    r.default.existsSync(s) && (i = s)),
                  !i && Array.isArray(a) && (i = c(t, a)),
                  !i && "function" != typeof n.includer)
                )
                  throw new Error(
                    'Could not find the include file "' +
                      n.escapeFunction(t) +
                      '"'
                  );
                return i;
              })(t, i)),
              "function" == typeof n.includer)
            ) {
              var s = n.includer(t, i.filename);
              if (s && (s.filename && (i.filename = s.filename), s.template))
                return h(i, s.template);
            }
            return h(i);
          }
          function m(t, e, n, i, r) {
            var s = e.split("\n"),
              a = Math.max(i - 3, 0),
              o = Math.min(s.length, i + 3),
              u = r(n),
              l = s
                .slice(a, o)
                .map(function (t, e) {
                  var n = e + a + 1;
                  return (n == i ? " >> " : "    ") + n + "| " + t;
                })
                .join("\n");
            throw (
              ((t.path = u),
              (t.message =
                (u || "ejs") + ":" + i + "\n" + l + "\n\n" + t.message),
              t)
            );
          }
          function v(t) {
            return t.replace(/;(\s*$)/, "$1");
          }
          function g(t, n) {
            n = n || {};
            var i = {};
            (this.templateText = t),
              (this.mode = null),
              (this.truncate = !1),
              (this.currentLine = 1),
              (this.source = ""),
              (i.client = n.client || !1),
              (i.escapeFunction = n.escape || n.escapeFunction || Ar.escapeXML),
              (i.compileDebug = !1 !== n.compileDebug),
              (i.debug = !!n.debug),
              (i.filename = n.filename),
              (i.openDelimiter = n.openDelimiter || e.openDelimiter || "<"),
              (i.closeDelimiter = n.closeDelimiter || e.closeDelimiter || ">"),
              (i.delimiter = n.delimiter || e.delimiter || "%"),
              (i.strict = n.strict || !1),
              (i.context = n.context),
              (i.cache = n.cache || !1),
              (i.rmWhitespace = n.rmWhitespace),
              (i.root = n.root),
              (i.includer = n.includer),
              (i.outputFunctionName = n.outputFunctionName),
              (i.localsName = n.localsName || e.localsName || a),
              (i.views = n.views),
              (i.async = n.async),
              (i.destructuredLocals = n.destructuredLocals),
              (i.legacyInclude =
                void 0 === n.legacyInclude || !!n.legacyInclude),
              i.strict
                ? (i._with = !1)
                : (i._with = void 0 === n._with || n._with),
              (this.opts = i),
              (this.regex = this.createRegex());
          }
          (e.cache = Ar.cache),
            (e.fileLoader = r.default.readFileSync),
            (e.localsName = a),
            (e.promiseImpl = new Function("return this;")().Promise),
            (e.resolveInclude = function (t, e, i) {
              var r = n.dirname,
                s = n.extname,
                a = (0, n.resolve)(i ? e : r(e), t);
              return s(t) || (a += ".ejs"), a;
            }),
            (e.compile = function (t, e) {
              return (
                e &&
                  e.scope &&
                  (i ||
                    (console.warn(
                      "`scope` option is deprecated and will be removed in EJS 3"
                    ),
                    (i = !0)),
                  e.context || (e.context = e.scope),
                  delete e.scope),
                new g(t, e).compile()
              );
            }),
            (e.render = function (t, e, n) {
              var i = e || {},
                r = n || {};
              return (
                2 == arguments.length && Ar.shallowCopyFromList(r, i, o),
                h(r, t)(i)
              );
            }),
            (e.renderFile = function () {
              var t,
                e,
                n,
                i = Array.prototype.slice.call(arguments),
                r = i.shift(),
                s = { filename: r };
              return (
                "function" == typeof arguments[arguments.length - 1] &&
                  (t = i.pop()),
                i.length
                  ? ((e = i.shift()),
                    i.length
                      ? Ar.shallowCopy(s, i.pop())
                      : (e.settings &&
                          (e.settings.views && (s.views = e.settings.views),
                          e.settings["view cache"] && (s.cache = !0),
                          (n = e.settings["view options"]) &&
                            Ar.shallowCopy(s, n)),
                        Ar.shallowCopyFromList(s, e, u)),
                    (s.filename = r))
                  : (e = {}),
                p(s, e, t)
              );
            }),
            (e.Template = g),
            (e.clearCache = function () {
              e.cache.reset();
            }),
            (g.modes = {
              EVAL: "eval",
              ESCAPED: "escaped",
              RAW: "raw",
              COMMENT: "comment",
              LITERAL: "literal",
            }),
            (g.prototype = {
              createRegex: function () {
                var t = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",
                  e = Ar.escapeRegExpChars(this.opts.delimiter),
                  n = Ar.escapeRegExpChars(this.opts.openDelimiter),
                  i = Ar.escapeRegExpChars(this.opts.closeDelimiter);
                return (
                  (t = t.replace(/%/g, e).replace(/</g, n).replace(/>/g, i)),
                  new RegExp(t)
                );
              },
              compile: function () {
                var t,
                  e,
                  i,
                  r = this.opts,
                  s = "",
                  a = "",
                  o = r.escapeFunction,
                  u = r.filename ? JSON.stringify(r.filename) : "undefined";
                if (!this.source) {
                  if (
                    (this.generateSource(),
                    (s +=
                      '  var __output = "";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n'),
                    r.outputFunctionName &&
                      (s += "  var " + r.outputFunctionName + " = __append;\n"),
                    r.destructuredLocals && r.destructuredLocals.length)
                  ) {
                    for (
                      var l =
                          "  var __locals = (" + r.localsName + " || {}),\n",
                        c = 0;
                      c < r.destructuredLocals.length;
                      c++
                    ) {
                      var h = r.destructuredLocals[c];
                      c > 0 && (l += ",\n  "), (l += h + " = __locals." + h);
                    }
                    s += l + ";\n";
                  }
                  !1 !== r._with &&
                    ((s += "  with (" + r.localsName + " || {}) {\n"),
                    (a += "  }\n")),
                    (a += "  return __output;\n"),
                    (this.source = s + this.source + a);
                }
                (t = r.compileDebug
                  ? "var __line = 1\n  , __lines = " +
                    JSON.stringify(this.templateText) +
                    "\n  , __filename = " +
                    u +
                    ";\ntry {\n" +
                    this.source +
                    "} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n"
                  : this.source),
                  r.client &&
                    ((t = "escapeFn = escapeFn || " + o.toString() + ";\n" + t),
                    r.compileDebug &&
                      (t = "rethrow = rethrow || " + m.toString() + ";\n" + t)),
                  r.strict && (t = '"use strict";\n' + t),
                  r.debug && console.log(t),
                  r.compileDebug &&
                    r.filename &&
                    (t = t + "\n//# sourceURL=" + u + "\n");
                try {
                  if (r.async)
                    try {
                      i = new Function(
                        "return (async function(){}).constructor;"
                      )();
                    } catch (t) {
                      throw t instanceof SyntaxError
                        ? new Error(
                            "This environment does not support async/await"
                          )
                        : t;
                    }
                  else i = Function;
                  e = new i(r.localsName + ", escapeFn, include, rethrow", t);
                } catch (t) {
                  throw (
                    (t instanceof SyntaxError &&
                      (r.filename && (t.message += " in " + r.filename),
                      (t.message += " while compiling ejs\n\n"),
                      (t.message +=
                        "If the above error is not helpful, you may want to try EJS-Lint:\n"),
                      (t.message += "https://github.com/RyanZim/EJS-Lint"),
                      r.async ||
                        ((t.message += "\n"),
                        (t.message +=
                          "Or, if you meant to create an async function, pass `async: true` as an option."))),
                    t)
                  );
                }
                var p = r.client
                  ? e
                  : function (t) {
                      return e.apply(r.context, [
                        t || {},
                        o,
                        function (e, n) {
                          var i = Ar.shallowCopy({}, t);
                          return n && (i = Ar.shallowCopy(i, n)), f(e, r)(i);
                        },
                        m,
                      ]);
                    };
                if (r.filename && "function" == typeof Object.defineProperty) {
                  var d = r.filename,
                    v = n.basename(d, n.extname(d));
                  try {
                    Object.defineProperty(p, "name", {
                      value: v,
                      writable: !1,
                      enumerable: !1,
                      configurable: !0,
                    });
                  } catch (t) {}
                }
                return p;
              },
              generateSource: function () {
                this.opts.rmWhitespace &&
                  (this.templateText = this.templateText
                    .replace(/[\r\n]+/g, "\n")
                    .replace(/^\s+|\s+$/gm, "")),
                  (this.templateText = this.templateText
                    .replace(/[ \t]*<%_/gm, "<%_")
                    .replace(/_%>[ \t]*/gm, "_%>"));
                var t = this,
                  e = this.parseTemplateText(),
                  n = this.opts.delimiter,
                  i = this.opts.openDelimiter,
                  r = this.opts.closeDelimiter;
                e &&
                  e.length &&
                  e.forEach(function (s, a) {
                    var o;
                    if (
                      0 === s.indexOf(i + n) &&
                      0 !== s.indexOf(i + n + n) &&
                      (o = e[a + 2]) != n + r &&
                      o != "-" + n + r &&
                      o != "_" + n + r
                    )
                      throw new Error(
                        'Could not find matching close tag for "' + s + '".'
                      );
                    t.scanLine(s);
                  });
              },
              parseTemplateText: function () {
                for (
                  var t,
                    e = this.templateText,
                    n = this.regex,
                    i = n.exec(e),
                    r = [];
                  i;

                )
                  0 !== (t = i.index) &&
                    (r.push(e.substring(0, t)), (e = e.slice(t))),
                    r.push(i[0]),
                    (e = e.slice(i[0].length)),
                    (i = n.exec(e));
                return e && r.push(e), r;
              },
              _addOutput: function (t) {
                if (
                  (this.truncate &&
                    ((t = t.replace(/^(?:\r\n|\r|\n)/, "")),
                    (this.truncate = !1)),
                  !t)
                )
                  return t;
                (t = (t = (t = (t = t.replace(/\\/g, "\\\\")).replace(
                  /\n/g,
                  "\\n"
                )).replace(/\r/g, "\\r")).replace(/"/g, '\\"')),
                  (this.source += '    ; __append("' + t + '")\n');
              },
              scanLine: function (t) {
                var e,
                  n = this.opts.delimiter,
                  i = this.opts.openDelimiter,
                  r = this.opts.closeDelimiter;
                switch (((e = t.split("\n").length - 1), t)) {
                  case i + n:
                  case i + n + "_":
                    this.mode = g.modes.EVAL;
                    break;
                  case i + n + "=":
                    this.mode = g.modes.ESCAPED;
                    break;
                  case i + n + "-":
                    this.mode = g.modes.RAW;
                    break;
                  case i + n + "#":
                    this.mode = g.modes.COMMENT;
                    break;
                  case i + n + n:
                    (this.mode = g.modes.LITERAL),
                      (this.source +=
                        '    ; __append("' +
                        t.replace(i + n + n, i + n) +
                        '")\n');
                    break;
                  case n + n + r:
                    (this.mode = g.modes.LITERAL),
                      (this.source +=
                        '    ; __append("' +
                        t.replace(n + n + r, n + r) +
                        '")\n');
                    break;
                  case n + r:
                  case "-" + n + r:
                  case "_" + n + r:
                    this.mode == g.modes.LITERAL && this._addOutput(t),
                      (this.mode = null),
                      (this.truncate =
                        0 === t.indexOf("-") || 0 === t.indexOf("_"));
                    break;
                  default:
                    if (this.mode) {
                      switch (this.mode) {
                        case g.modes.EVAL:
                        case g.modes.ESCAPED:
                        case g.modes.RAW:
                          t.lastIndexOf("//") > t.lastIndexOf("\n") &&
                            (t += "\n");
                      }
                      switch (this.mode) {
                        case g.modes.EVAL:
                          this.source += "    ; " + t + "\n";
                          break;
                        case g.modes.ESCAPED:
                          this.source +=
                            "    ; __append(escapeFn(" + v(t) + "))\n";
                          break;
                        case g.modes.RAW:
                          this.source += "    ; __append(" + v(t) + ")\n";
                          break;
                        case g.modes.COMMENT:
                          break;
                        case g.modes.LITERAL:
                          this._addOutput(t);
                      }
                    } else this._addOutput(t);
                }
                this.opts.compileDebug &&
                  e &&
                  ((this.currentLine += e),
                  (this.source += "    ; __line = " + this.currentLine + "\n"));
              },
            }),
            (e.escapeXML = Ar.escapeXML),
            (e.__express = e.renderFile),
            (e.VERSION = "3.1.6"),
            (e.name = "ejs"),
            "undefined" != typeof window && (window.ejs = e);
        });
      function _r(t, e) {
        return J(t) ? t(e) : Mr.render(t, { initParams: e });
      }
      var Tr = (function (t) {
          d(n, t);
          var e = g(n);
          function n() {
            var t,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            if ((o(this, n), (t = e.call(this)), !H(i)))
              return (
                rt.error(
                  "ContextHandler expects an object on its constructor. ".concat(
                    a(i),
                    " passed"
                  )
                ),
                v(t, !1)
              );
            if (!Object.prototype.hasOwnProperty.call(i, "html"))
              return (
                rt.error(
                  "ContextHandler expects the html key on its constructor properties which is missing"
                ),
                v(t, !1)
              );
            if (!Object.prototype.hasOwnProperty.call(i, "css"))
              return (
                rt.error(
                  "ContextHandler expects the css key on its constructor properties which is missing"
                ),
                v(t, !1)
              );
            if (
              (Object.prototype.hasOwnProperty.call(i, "initParams") ||
                rt.info("ContextHandler got null initParams"),
              !Object.prototype.hasOwnProperty.call(i, "host"))
            )
              return (
                rt.error(
                  "ContextHandler expects the host key on its constructor properties which is missing"
                ),
                v(t, !1)
              );
            t.isDOM = !0;
            var r = i.host.ownerDocument;
            if (
              !r.getElementById(
                "@kissmybutton/motorcortex/iframeContextHandler/css"
              )
            ) {
              var s =
                  "\n            iframe[seamless]{\n                background-color: transparent;\n                border: 0px none transparent;\n                padding: 0px;\n                overflow: hidden;\n            }\n            ",
                u = r.createElement("style");
              (u.id = "@kissmybutton/motorcortex/iframeContextHandler/css"),
                (u.type = "text/css");
              var l = r.head || r.getElementsByTagName("head")[0];
              u.styleSheet
                ? (u.styleSheet.cssText = s)
                : u.appendChild(r.createTextNode(s)),
                l.appendChild(u);
            }
            var c = r.createElement("iframe");
            i.host.appendChild(c);
            var h = t.scalingCalculator(i),
              p = t.calcClipDims(i);
            c.setAttribute("seamless", "seamless"),
              !0 === p.use &&
                (null !== p.width && c.setAttribute("width", p.width),
                null !== p.height && c.setAttribute("height", p.height)),
              (c.style.transform = "scale("
                .concat(h.width, ", ")
                .concat(h.height, ")")),
              (c.style.transformOrigin = "top left"),
              (c.style.position = "absolute"),
              (c.src = "");
            var d = c.contentWindow || c.contentDocument;
            d.document && (d = d.document), d.write(_r(i.html, i.initParams));
            var f =
                "\n        body{\n            padding:0;\n            margin:0;\n        }\n        ",
              g = d.createElement("style");
            (g.type = "text/css"),
              g.styleSheet
                ? (g.styleSheet.cssText = _r(i.css, i.initParams) + f)
                : g.appendChild(r.createTextNode(_r(i.css, i.initParams) + f));
            var y = d.head || d.getElementsByTagName("head")[0];
            if (
              (y.appendChild(g),
              Object.prototype.hasOwnProperty.call(i, "fonts"))
            )
              for (var b = 0; b < i.fonts.length; b++) {
                var x = i.fonts[b];
                if ("google-font" === x.type) {
                  var k = d.createElement("link");
                  k.setAttribute("rel", "stylesheet"),
                    k.setAttribute("href", x.src),
                    y.appendChild(k);
                }
              }
            return (
              (t.rootElement = c),
              d.close(),
              (t.context = {
                document: d,
                window: c.contentWindow || c,
                clipContainer: c,
                rootElement: d.body,
                unmount: function () {
                  i.host.removeChild(c);
                },
                getElements: t.getElements.bind(m(t)),
                getMCID: t.getMCID.bind(m(t)),
                setMCID: t.setMCID.bind(m(t)),
                getElementSelectorByMCID: t.getElementSelectorByMCID.bind(m(t)),
                getElementByMCID: t.getElementByMCID.bind(m(t)),
                setCustomEntity: t.setCustomEntity.bind(m(t)),
              }),
              (t.elementsByMCID = {}),
              t
            );
          }
          return n;
        })(Er),
        Sr = (function (t) {
          d(n, t);
          var e = g(n);
          function n() {
            var t,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            if ((o(this, n), (t = e.call(this)), !H(i)))
              return (
                rt.error(
                  "ContextHandler expects an object on its constructor. ".concat(
                    a(i),
                    " passed"
                  )
                ),
                v(t, !1)
              );
            if (!Object.prototype.hasOwnProperty.call(i, "html"))
              return (
                rt.error(
                  "ContextHandler expects the html key on its constructor properties which is missing"
                ),
                v(t, !1)
              );
            if (!Object.prototype.hasOwnProperty.call(i, "css"))
              return (
                rt.error(
                  "ContextHandler expects the css key on its constructor properties which is missing"
                ),
                v(t, !1)
              );
            if (!Object.prototype.hasOwnProperty.call(i, "host"))
              return (
                rt.error(
                  "ContextHandler expects the host key on its constructor properties which is missing"
                ),
                v(t, !1)
              );
            t.isDOM = !0;
            var r = i.host.shadowRoot;
            r || (r = i.host.attachShadow({ mode: "open" }));
            var s = document.createElement("div"),
              u = t.scalingCalculator(i),
              l = t.calcClipDims(i);
            s.setAttribute("data-motorocortex-container", "true"),
              !0 === l.use &&
                (null !== l.width && (s.style.width = l.width),
                null !== l.height && (s.style.height = l.height)),
              (s.style.transform = "scale("
                .concat(u.width, ", ")
                .concat(u.height, ")")),
              (s.style.transformOrigin = "top left"),
              (s.style.position = "absolute"),
              (s.style.overflow = "hidden"),
              (s.innerHTML = _r(i.html, i.initParams)),
              r.appendChild(s);
            var c = document.createElement("slot");
            r.appendChild(c);
            var h = document.createElement("style");
            if (
              ((h.type = "text/css"),
              h.styleSheet
                ? (h.styleSheet.cssText = _r(i.css, i.initParams))
                : h.appendChild(
                    document.createTextNode(
                      "[data-motorocortex-container] { all: initial; }" +
                        _r(i.css, i.initParams)
                    )
                  ),
              r.appendChild(h),
              (t.fontTags = []),
              Object.prototype.hasOwnProperty.call(i, "fonts"))
            )
              for (var p = 0; p < i.fonts.length; p++) {
                var d = i.fonts[p];
                if ("google-font" === d.type) {
                  var f = document.createElement("link");
                  f.setAttribute("rel", "stylesheet"),
                    f.setAttribute("href", d.src),
                    document.getElementsByTagName("head")[0].appendChild(f),
                    t.fontTags.push(f);
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
                    r.innerHTML = "";
                    for (var t = 0; t < this.fontTags.length; t++)
                      document
                        .getElementsByTagName("head")[0]
                        .removeChild(this.fontTags[t]);
                  } catch (t) {
                    rt.warning(
                      "The element of the Clip to be removed seems not to exist any more"
                    );
                  }
                },
                getElements: t.getElements.bind(m(t)),
                getMCID: t.getMCID.bind(m(t)),
                setMCID: t.setMCID.bind(m(t)),
                getElementSelectorByMCID: t.getElementSelectorByMCID.bind(m(t)),
                getElementByMCID: t.getElementByMCID.bind(m(t)),
                setCustomEntity: t.setCustomEntity.bind(m(t)),
              }),
              (t.elementsByMCID = {}),
              t
            );
          }
          return n;
        })(Er),
        Dr = (function (t) {
          d(n, t);
          var e = g(n);
          function n() {
            var t,
              i,
              r,
              s =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            o(this, n),
              null === a ? ((i = {}), (r = s)) : ((i = s), (r = a)),
              (t = e.call(this, i, r)),
              (r = p(
                p({}, r),
                {},
                {
                  html: "" !== t.html ? t.html : r.html,
                  css: "" !== t.css ? t.css : r.css,
                  fonts: t.fonts.length > 0 ? t.fonts : r.fonts,
                }
              ));
            var u = $;
            t.clipType = u;
            var l = new (document.head.createShadowRoot ||
            document.head.attachShadow
              ? Sr
              : Tr)(r);
            return (
              (t.ownContext = p(
                p({}, l.context),
                {},
                { isHostedClip: t.isHostedClip, initParams: r.initParams }
              )),
              (t.iframe = l.iframeElement),
              (t.forceExportIncidents = !0),
              t.onAfterRender(),
              t
            );
          }
          return (
            l(n, [
              { key: "onAfterRender", value: function () {} },
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
                  return this.context.clipContainer;
                },
              },
              {
                key: "exportConstructionArguments",
                value: function () {
                  return {
                    attrs: this.attrs,
                    props: p(
                      p({}, this.props),
                      {},
                      {
                        host: void 0,
                        html:
                          !0 === this.DescriptiveIncident.constructor.customClip
                            ? ""
                            : this.context.rootElement.innerHTML,
                      }
                    ),
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
            ]),
            n
          );
        })(cr),
        jr = (function (t) {
          d(n, t);
          var e = g(n);
          function n() {
            var t,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            o(this, n), (t = e.call(this));
            var r = p({}, i);
            if (!H(r))
              return (
                rt.error(
                  "HTMLFragmentContextHandler expects an object on its constructor. ".concat(
                    a(r),
                    " passed"
                  )
                ),
                v(t, !1)
              );
            Object.prototype.hasOwnProperty.call(r, "html") || (r.html = ""),
              (t.isDOM = !0);
            var s = document.createDocumentFragment(),
              u = document.createElement("div");
            return (
              Object.prototype.hasOwnProperty.call(r, "containerParams") &&
                (Object.prototype.hasOwnProperty.call(r, "width") &&
                  (u.style.width = r.containerParams.width),
                Object.prototype.hasOwnProperty.call(r, "height") &&
                  (u.style.height = r.containerParams.height)),
              (u.innerHTML = _r(r.html, r.initParams)),
              s.appendChild(u),
              (u.style.overflow = "hidden"),
              (t.rootElement = u),
              (t.context = {
                document: document,
                window: window,
                clipContainer: t.rootElement,
                rootElement: u,
                unmount: function () {
                  r.host.removeChild(s);
                },
                getElements: t.getElements.bind(m(t)),
                getMCID: t.getMCID.bind(m(t)),
                setMCID: t.setMCID.bind(m(t)),
                getElementSelectorByMCID: t.getElementSelectorByMCID.bind(m(t)),
                getElementByMCID: t.getElementByMCID.bind(m(t)),
                setCustomEntity: t.setCustomEntity.bind(m(t)),
                fragment: !0,
              }),
              (t.elementsByMCID = {}),
              t
            );
          }
          return n;
        })(Er),
        Vr = (function (t) {
          d(n, t);
          var e = g(n);
          function n() {
            var t,
              i,
              r,
              s =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            o(this, n),
              null === a ? ((i = {}), (r = s)) : ((i = s), (r = a)),
              (t = e.call(this, i, r));
            var u = new jr(
              p(
                p({}, r),
                {},
                {
                  html: Object.prototype.hasOwnProperty.call(r, "html")
                    ? r.html
                    : t.html,
                  css: Object.prototype.hasOwnProperty.call(r, "css")
                    ? r.css
                    : t.css,
                  fonts: Object.prototype.hasOwnProperty.call(r, "fonts")
                    ? r.fonts
                    : t.fonts,
                }
              )
            );
            return (
              (t.ownContext = p(p({}, u.context), {}, { isHostedClip: !1 })),
              (t.iframe = u.iframeElement),
              (t.forceExportIncidents = !0),
              t.onDOMCLipInitialise(),
              t
            );
          }
          return (
            l(n, [
              {
                key: "exportConstructionArguments",
                value: function () {
                  return {
                    attrs: this.attrs,
                    props: p(
                      p({}, this.props),
                      {},
                      { html: this.context.rootElement.innerHTML }
                    ),
                  };
                },
              },
              { key: "onDOMCLipInitialise", value: function () {} },
              {
                key: "rootElement",
                get: function () {
                  return this.context.clipContainer;
                },
              },
            ]),
            n
          );
        })(cr),
        Lr = (function () {
          function t() {
            o(this, t);
          }
          return (
            l(t, [
              {
                key: "duration",
                get: function () {
                  return 0;
                },
              },
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
            ]),
            t
          );
        })(),
        Nr = (function () {
          function t(e) {
            o(this, t),
              (this.runTimeInfo = {
                currentMillisecond: 0,
                state: "transitional",
              }),
              (this.id = et()),
              (this.realClip = e.descriptiveIncident.realClip);
            var n = e.descriptiveIncident.realClip.exportConstructionArguments(),
              i = p(
                p({}, n.props),
                {},
                { selector: void 0, host: e.host, id: this.id }
              );
            (this.ownClip = new e.descriptiveIncident.constructor.Incident(
              n.attrs,
              i
            )),
              e.descriptiveIncident.realClip.addContext(
                {
                  clipId: this.id,
                  context: this.ownClip.context,
                  synchronize: e.synchronize,
                  runTimeInfo: this.runTimeInfo,
                },
                !0
              );
          }
          return (
            l(t, [
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
        $r = _(
          null,
          function (t, e) {
            var n = (function (e) {
              d(i, e);
              var n = g(i);
              function i(e) {
                var r,
                  s,
                  a,
                  u =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                o(this, i),
                  null === u ? ((s = {}), (a = e)) : ((s = e), (a = u)),
                  (r = n.call(this, s, a)),
                  t(m(r)),
                  (r.initParams = a.initParams || {});
                var l = r._validateProps();
                if (!l.result) return v(r, l);
                (r.isTheRootClip = !1),
                  (r.isExportableToJSONFormat = !0),
                  Object.prototype.hasOwnProperty.call(a, "html") &&
                    J(a.html) &&
                    (r.isExportableToJSONFormat = !1);
                var c = {
                  id: r.id,
                  attrs: s,
                  props: p(
                    p({}, a),
                    {},
                    {
                      html: Object.prototype.hasOwnProperty.call(a, "html")
                        ? a.html
                        : r.html,
                      css: Object.prototype.hasOwnProperty.call(a, "css")
                        ? a.css
                        : r.css,
                      fonts: Object.prototype.hasOwnProperty.call(a, "fonts")
                        ? a.fonts
                        : r.fonts,
                      runTimeInfo: r.runTimeInfo,
                      subscribe: r.subscribe.bind(m(r)),
                      repeats: 1,
                      delay: 0,
                      hiatus: 0,
                    }
                  ),
                  plugin_npm_name: r.constructor.plugin_npm_name,
                  Channel: r.constructor.Channel,
                  DescriptiveIncident: m(r),
                };
                if (
                  ((r.audio = "on"),
                  Object.prototype.hasOwnProperty.call(
                    r.constructor,
                    "audio"
                  ) && (r.audio = r.constructor.audio),
                  Object.prototype.hasOwnProperty.call(a, "audio") &&
                    (r.audio = a.audio),
                  Object.prototype.hasOwnProperty.call(a, "selector") &&
                    void 0 !== a.selector &&
                    !0 !== r.constructor.customClip)
                )
                  c.Incident = Vr;
                else if (
                  Object.prototype.hasOwnProperty.call(a, "selector") &&
                  void 0 !== a.selector &&
                  !0 === r.constructor.customClip
                ) {
                  delete c.props.selector;
                  var h = new Vr({ html: '<div id="clip-container"></div>' });
                  (c.props.host = h.rootElement),
                    (c.Incident = r.constructor.Incident);
                } else
                  "only" === r.audio && !0 !== r.props.root
                    ? (r.isTheRootClip = !1)
                    : ((r.isTheRootClip = !0),
                      (r.blockingWaitings = {}),
                      (c.Incident = r.constructor.Incident));
                if (
                  ("on" === r.audio || "off" === r.audio
                    ? (r.realClip = _t(c))
                    : (r.realClip = new Lr()),
                  "on" === r.audio || "only" === r.audio)
                ) {
                  var d = {
                    id: r.id,
                    attrs: {},
                    props: {
                      audioSources: Object.prototype.hasOwnProperty.call(
                        a,
                        "audioSources"
                      )
                        ? a.audioSources
                        : r.audioSources,
                      runTimeInfo: r.runTimeInfo,
                      subscribe: r.subscribe.bind(m(r)),
                    },
                    plugin_npm_name: r.constructor.plugin_npm_name,
                    Channel: r.constructor.Channel,
                    Incident: vr,
                    DescriptiveIncident: m(r),
                  };
                  r.audioClip = _t(d);
                } else (r.audio = "off"), (r.audioClip = new Lr());
                return (
                  (r.attributesStaggers = []),
                  (r.propsStaggers = []),
                  r.setupDynamicValues(),
                  (r.dynamicDurationValue = null),
                  (r.passiveAddition = !0),
                  r._buildTree(),
                  (r.passiveAddition = !1),
                  r.constructor.isAnimation &&
                    Object.prototype.hasOwnProperty.call(r.props, "duration") &&
                    r.resize(r.duration),
                  r
                );
              }
              return i;
            })(e);
            return {
              F: n,
              d: [
                {
                  kind: "field",
                  static: !0,
                  key: "isClip",
                  value: function () {
                    return !0;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "Incident",
                  value: function () {
                    return Dr;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "plugin_npm_name",
                  value: function () {
                    return "@kissmybutton/self-contained-incidents";
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "version",
                  value: function () {
                    return Bt;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "Channel",
                  value: function () {
                    return yt;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "ClassName",
                  value: function () {
                    return "HTMLClip";
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "propsValidationRules",
                  value: function () {
                    return qi;
                  },
                },
                {
                  kind: "method",
                  key: "_validateProps",
                  value: function () {
                    return rt.validateProps(
                      { props: this.props },
                      qi,
                      this.constructor,
                      this.id
                    );
                  },
                },
                {
                  kind: "get",
                  key: "selectorToPassToChildren",
                  value: function () {
                    return null;
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
                    this._inheritedSelector = t;
                  },
                },
                {
                  kind: "get",
                  key: "html",
                  value: function () {
                    return "";
                  },
                },
                {
                  kind: "get",
                  key: "css",
                  value: function () {
                    return "";
                  },
                },
                {
                  kind: "get",
                  key: "fonts",
                  value: function () {
                    return [];
                  },
                },
                {
                  kind: "get",
                  key: "audioSources",
                  value: function () {
                    return [];
                  },
                },
                {
                  kind: "method",
                  decorators: [rr],
                  key: "setupDynamicValues",
                  value: function () {},
                },
                {
                  kind: "get",
                  key: "duration",
                  value: function () {
                    return null !== this.dynamicDurationValue
                      ? this.dynamicDurationValue
                      : this.propsStaggers.length > 0
                      ? "dynamic"
                      : Object.prototype.hasOwnProperty.call(
                          this.props,
                          "duration"
                        )
                      ? this.repeats *
                        (this.delay + this.props.duration + this.hiatus)
                      : b(f(n.prototype), "duration", this);
                  },
                },
                {
                  kind: "set",
                  key: "duration",
                  value: function (t) {
                    if (0 != this.propsStaggers.length) {
                      for (var e = 0; e < this.propsStaggers.length; e++)
                        if ("repeats" !== this.propsStaggers[e].path) {
                          var i = this.propsStaggers[e].stagger.resize(
                            t / this.duration
                          );
                          it(this.props, this.propsStaggers[e].path, i);
                        }
                      this.dynamicDurationValue = t;
                    } else k(f(n.prototype), "duration", t, this, !0);
                  },
                },
                {
                  kind: "method",
                  key: "systoleDiastole",
                  value: function (t) {
                    this.constructor.isAnimation &&
                      (this.props.duration
                        ? (this.props.duration *= t)
                        : (this.props.duration = t * this.calculatedDuration)),
                      this.realClip._resize(t),
                      b(f(n.prototype), "systoleDiastole", this).call(this, t);
                  },
                },
                {
                  kind: "method",
                  key: "exportLiveDefinition",
                  value: function () {
                    var t =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0],
                      e = b(f(n.prototype), "exportLiveDefinition", this).call(
                        this,
                        t
                      );
                    return (
                      this.constructor.isAnimation &&
                        (e.props.duration = this.props.duration
                          ? this.props.duration
                          : this.calculatedDuration),
                      J(this.props.html) && (e.props.html = this.props.html),
                      J(this.props.css) && (e.props.css = this.props.css),
                      e
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_buildTree",
                  value: function () {
                    void 0 !== this.realClip && this.buildTree();
                  },
                },
                {
                  kind: "method",
                  key: "resize",
                  value: function (t) {
                    if ("dynamic" === this.duration)
                      return {
                        result: !1,
                        reason:
                          "Incidents with dynamic duration can't be resized. Once the Incident enters a Clip it'll become resizable",
                      };
                    var e = t / this.duration;
                    return (
                      this.realClip._resize(e),
                      this.audioClip._resize(e),
                      (this.duration = t),
                      this.constructor.isAnimation &&
                        (this.props.duration
                          ? (this.props.duration *= e)
                          : (this.props.duration = this.calculatedDuration)),
                      this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                        selfExecute: !1,
                        direction: ot,
                      }),
                      this.putMessageOnPipe("flash", {}, "RootClip", {
                        selfExecute: !0,
                        direction: ot,
                      }),
                      { result: !0 }
                    );
                  },
                },
                {
                  kind: "method",
                  key: "manageEditAttrProps",
                  value: function (t, e) {
                    return {
                      result: !1,
                      errors: [
                        "Clips attributes and properties can not be edited",
                      ],
                    };
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckForClip",
                  value: function (t, e) {
                    return !0;
                  },
                },
                {
                  kind: "method",
                  key: "handleGetElements",
                  value: function (t, e) {
                    return this.realClip.getElements(e.selector);
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckAddition",
                  value: function (t, e) {
                    var n = this.realClip.addIncident(e),
                      i = this.audioClip.addIncident(e);
                    return !0 === n.result && !0 === i.result
                      ? (n.execute(),
                        i.execute(),
                        this.putMessageOnPipe("flash", {}, "RootClip", {
                          selfExecute: !0,
                          direction: ot,
                        }),
                        { result: !0 })
                      : n;
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckMove",
                  value: function (t, e) {
                    var n = this.realClip.moveIncident(e),
                      i = this.audioClip.moveIncident(e);
                    return !0 === n.result && !0 === i.result
                      ? (n.execute(),
                        i.execute(),
                        this.putMessageOnPipe("flash", {}, "RootClip", {
                          selfExecute: !0,
                          direction: ot,
                        }),
                        { result: !0 })
                      : n;
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckDeletion",
                  value: function (t, e) {
                    var n = this.realClip.removeIncident(e),
                      i = this.audioClip.removeIncident(e);
                    return !0 === n.result && !0 === i.result
                      ? (n.execute(),
                        i.execute(),
                        this.putMessageOnPipe("flash", {}, "RootClip", {
                          selfExecute: !0,
                          direction: ot,
                        }),
                        { result: !0 })
                      : n;
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckResize",
                  value: function (t, e) {
                    var n = this.realClip.resizeIncident(e),
                      i = this.audioClip.resizeIncident(e);
                    return !0 === n.result && !0 === i.result
                      ? (n.execute(),
                        i.execute(),
                        this.putMessageOnPipe("flash", {}, "RootClip", {
                          selfExecute: !0,
                          direction: ot,
                        }),
                        { result: !0 })
                      : n;
                  },
                },
                {
                  kind: "method",
                  key: "handleFlash",
                  value: function (t, e) {
                    if (!this.isTheRootClip) return this.bypass();
                    this.flash();
                  },
                },
                {
                  kind: "method",
                  key: "exportDefinition",
                  value: function () {
                    var t = b(f(n.prototype), "exportDefinition", this).call(
                      this
                    );
                    return (
                      this.constructor.isAnimation &&
                        (t.props.duration = this.props.duration
                          ? this.props.duration
                          : this.calculatedDuration),
                      t
                    );
                  },
                },
                {
                  kind: "method",
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
                  kind: "method",
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
                  kind: "method",
                  key: "stop",
                  value: function () {
                    b(f(n.prototype), "stop", this).call(this),
                      (this.blockingWaitings = {});
                  },
                },
                {
                  kind: "method",
                  key: "onProgress",
                  value: function (t, e) {
                    this.realClip.onProgress(t, e),
                      this.audioClip.onProgress(t, e);
                  },
                },
                {
                  kind: "method",
                  key: "paste",
                  value: function (t) {
                    return this.isTheRootClip
                      ? new Nr({ host: t, descriptiveIncident: this })
                      : null;
                  },
                },
                {
                  kind: "method",
                  key: "flash",
                  value: function () {
                    this.realClip.flash();
                  },
                },
                {
                  kind: "method",
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
              ],
            };
          },
          (function (t) {
            d(n, t);
            var e = g(n);
            function n(t, i) {
              var r;
              return (
                o(this, n),
                ((r = e.call(this, t, i)).runTimeInfo = {
                  currentMillisecond: 0,
                  state: "idle",
                }),
                (r.listeners = {}),
                (r.previousTimeStamp = -1),
                (r.speed = 1),
                r
              );
            }
            return (
              l(n, [
                {
                  key: "_setState",
                  value: function (t) {
                    if (t !== this.runTimeInfo.state)
                      for (var e in ((this.runTimeInfo.state = t),
                      this.putMessageOnPipe("setState", t, "Clips", {
                        selfExecute: !1,
                        direction: ut,
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
                    ("transitional" !== this.runTimeInfo.state &&
                      "blocked" !== this.runTimeInfo.state) ||
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
                        var i = this.listeners[n];
                        !0 !== i.onlyOnStateChange &&
                          (Math.abs(
                            e +
                              i.cavaDelta -
                              this.runTimeInfo.currentMillisecond
                          ) > i.threshold
                            ? (i.funct(Z(e, i.roundTo), this.runTimeInfo.state),
                              (i.cavaDelta = 0))
                            : (i.cavaDelta += Math.abs(
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
                  key: "executionSpeed",
                  set: function (t) {
                    if (!this.isTheRootClip) return !1;
                    this.speed = parseFloat(t);
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
                      var i = {
                        milliseconds: Math.round(
                          this.runTimeInfo.currentMillisecond +
                            (t - this.previousTimeStamp) * this.speed
                        ),
                        fraction:
                          (this.runTimeInfo.currentMillisecond +
                            (t - this.previousTimeStamp) * this.speed) /
                          this.duration,
                      };
                      if (i.fraction >= 1)
                        return (
                          this.playableProgress(1, this.duration),
                          void this.complete()
                        );
                      if (i.fraction < 0)
                        return (
                          this.playableProgress(0, 0), void this.complete()
                        );
                      this.playableProgress(i.fraction, i.milliseconds),
                        (this.previousTimeStamp = t),
                        e || window.requestAnimationFrame(n.step.bind(n));
                    }
                  },
                },
                {
                  key: "subscribe",
                  value: function (t, e, n, i) {
                    var r =
                      arguments.length > 4 &&
                      void 0 !== arguments[4] &&
                      arguments[4];
                    n || (n = 0),
                      i || (i = 1),
                      (this.listeners[t] = {
                        funct: e,
                        threshold: n,
                        roundTo: i,
                        cavaDelta: 0,
                        onlyOnStateChange: r,
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
              ]),
              n
            );
          })(sr)
        ),
        Br = Oi.compile({
          incidents: {
            type: "array",
            items: {
              type: "object",
              props: {
                position: { type: "amount", integer: !0, min: 0, optional: !1 },
                attrs: { type: "object", optional: !1 },
                props: { type: "object", optional: !1 },
                incidentClass: { type: "any", optional: !1 },
              },
            },
          },
        }),
        Fr = (function (t) {
          d(n, t);
          var e = g(n);
          function n(t, i) {
            var r;
            o(this, n),
              null !== (r = e.call(this, t, i)).incidents &&
                ((r.attrs.incidents = r.incidents),
                (r.attributesStaggers = []),
                (r.propsStaggers = []),
                r.setupDynamicValues());
            var s = rt.validateProps(r.props, Gi, r.constructor);
            if (!s.result) return v(r, s);
            var a = Br(r.attrs);
            if (a.length > 0)
              return (
                rt.error(
                  "The provided attributes for Combo Incident are invalid"
                ),
                v(r, { result: !1, errors: a })
              );
            for (var u = [], l = 0; l < r.attrs.length; l++) {
              var c = r.attrs[l];
              if (null !== c.incidentClass.attrsValidationRules) {
                var h = c.incidentClass.attrsValidationMethod(c.attrs);
                h.length > 0 && u.concat(h.errors);
              }
              var p = rt.validateProps(
                c.props,
                c.incidentClass.propsValidationRules,
                c.incidentClass
              );
              !1 === p.result && u.concat(p.errors);
            }
            return u.length > 0
              ? v(r, { result: !1, errors: u })
              : ((r.dynamicDurationValue = null), r);
          }
          return (
            l(n, [
              {
                key: "incidents",
                get: function () {
                  return null;
                },
              },
              {
                key: "duration",
                get: function () {
                  return null !== this.dynamicDurationValue
                    ? this.dynamicDurationValue
                    : "dynamic";
                },
              },
              {
                key: "addIncident",
                value: function () {
                  var t =
                    "Combos don't accept any Incidents to be added on their timeline externally";
                  return rt.error(t), { result: !1, errors: [t] };
                },
              },
              {
                key: "moveIncident",
                value: function () {
                  var t =
                    "Combo Incidents don't allow external manipulation of their Incidents";
                  return rt.error(t), { result: !1, errors: [t] };
                },
              },
              {
                key: "removeIncident",
                value: function () {
                  var t =
                    "Combo Incidents don't allow external manipulation of their Incidents";
                  return rt.error(t), { result: !1, errors: [t] };
                },
              },
              {
                key: "handleCheckAddition",
                value: function (t, e) {
                  return !1;
                },
              },
              {
                key: "handleCheckMove",
                value: function (t, e) {
                  return !1;
                },
              },
              {
                key: "handleCheckDeletion",
                value: function (t, e) {
                  return !1;
                },
              },
              {
                key: "handleCheckResize",
                value: function (t, e) {
                  return !1;
                },
              },
              {
                key: "exportDefinition",
                value: function () {
                  var t = p(
                    p({}, this.attrs),
                    {},
                    {
                      incidents: (function t(e) {
                        for (var n = [], i = 0; i < e.length; i++) {
                          var r = e[i],
                            s = r.attrs;
                          "Combo" === r.incidentClass.ClassName &&
                            (s = p(
                              p({}, s),
                              {},
                              { incidents: t(s.incidents) }
                            )),
                            n.push({
                              ClassName:
                                r.incidentClass.ClassName ||
                                r.incidentClass.targetClass.ClassName,
                              plugin_npm_name:
                                r.incidentClass.plugin_npm_name ||
                                r.incidentClass.targetClass.plugin_npm_name,
                              version:
                                r.incidentClass.version ||
                                r.incidentClass.targetClass.version,
                              attrs: s,
                              props: JSON.parse(JSON.stringify(r.props)),
                              position: r.position,
                            });
                        }
                        return n;
                      })(this.attrs.incidents),
                    }
                  );
                  return {
                    ClassName: this.constructor.ClassName,
                    version: this.constructor.version,
                    plugin:
                      this.constructor.plugin ||
                      this.constructor.plugin_npm_name,
                    plugin_npm_name: this.constructor.plugin_npm_name,
                    attrs: t,
                    props: JSON.parse(JSON.stringify(this.props)),
                    incidents: {},
                    duration: this.duration,
                  };
                },
              },
              {
                key: "exportLiveDefinition",
                value: function () {
                  var t =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    e = this.attrs;
                  null !== this.incidents &&
                    (e = p(p({}, this.attrs), {}, { incidents: void 0 }));
                  var n = JSON.parse(JSON.stringify(this.props));
                  !1 === t && delete n.id;
                  var i = {
                    Class: this.constructor,
                    attrs: e,
                    props: n,
                    incidents: {},
                  };
                  return i;
                },
              },
            ]),
            n
          );
        })(sr);
      c(Fr, "isCombo", !0),
        c(Fr, "ClassName", "Combo"),
        c(Fr, "attrsValidationRules", null),
        c(Fr, "propsValidationRules", Gi);
      var Rr = _(
          null,
          function (t, e) {
            var n = (function (e) {
              d(i, e);
              var n = g(i);
              function i(e, r) {
                var s;
                o(this, i),
                  void 0 === r && ((r = e), (e = {})),
                  (s = n.call(this, r)),
                  t(m(s));
                var a = rt.validateProps(r, Bi, s.constructor, s.id);
                return a.result
                  ? ((s.inheritedSelector = null),
                    (s.attrs = e),
                    Object.prototype.hasOwnProperty.call(r, "duration") ||
                      (r.duration = 0),
                    (s.props = r),
                    (s.attributesStaggers = []),
                    (s.propsStaggers = []),
                    s.setupDynamicValues(),
                    (s.dynamicDurationValue = null),
                    (s.passive = !1),
                    s)
                  : v(s, a);
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
                    return At;
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
                  key: "version",
                  value: function () {
                    return Bt;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "Channel",
                  value: function () {
                    return Pr;
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
                  kind: "field",
                  static: !0,
                  key: "attrsValidationRules",
                  value: function () {
                    return null;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "propsValidationRules",
                  value: function () {
                    return Bi;
                  },
                },
                {
                  kind: "method",
                  decorators: [Wi],
                  key: "editAttributes",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Ui],
                  key: "editProperties",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Qi],
                  key: "resize",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Ji],
                  key: "clone",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Zi],
                  key: "selector",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Xi],
                  key: "getElements",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [rr],
                  key: "setupDynamicValues",
                  value: function () {},
                },
                {
                  kind: "get",
                  key: "duration",
                  value: function () {
                    return null !== this.dynamicDurationValue
                      ? this.dynamicDurationValue
                      : this.propsStaggers.length > 0
                      ? "dynamic"
                      : b(f(n.prototype), "duration", this);
                  },
                },
                {
                  kind: "set",
                  key: "duration",
                  value: function (t) {
                    if (this.propsStaggers.length > 0) {
                      for (var e = 0; e < this.propsStaggers.length; e++)
                        if ("repeats" !== this.propsStaggers[e].path) {
                          var i = this.propsStaggers[e].stagger.resize(
                            t / this.duration
                          );
                          it(this.props, this.propsStaggers[e].path, i);
                        }
                      this.dynamicDurationValue = t;
                    } else k(f(n.prototype), "duration", t, this, !0);
                  },
                },
                {
                  kind: "method",
                  key: "manageEditAttrProps",
                  value: function (t, e) {
                    var n = this.parentNode,
                      i = n.getLeafPosition(this.id);
                    n.removeIncident(this.id);
                    var r = JSON.parse(JSON.stringify(this[e]));
                    this[e] = t;
                    var s = n.addIncident(this, i);
                    return (
                      s.result ||
                        (n.removeIncident(this.id),
                        (this[e] = r),
                        n.addIncident(this, i)),
                      s
                    );
                  },
                },
                {
                  kind: "method",
                  key: "detachFromParent",
                  value: function () {
                    b(f(n.prototype), "detachFromParent", this).call(this),
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
                          error: "relative selector with no inherited selector",
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
                      version: this.constructor.version,
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
                    var t =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0],
                      e = JSON.parse(JSON.stringify(this.props));
                    return (
                      !1 === t && delete e.id,
                      {
                        Class: this.constructor,
                        attrs: JSON.parse(JSON.stringify(this.attrs)),
                        props: e,
                      }
                    );
                  },
                },
              ],
            };
          },
          ct
        ),
        qr = (function () {
          var t = function (t, e) {
              return t.startsWith("on") && "function" == typeof e;
            },
            e = function (t) {
              return t.substr(2).toLowerCase();
            },
            n = function (t) {
              return "function" == typeof t;
            };
          function i(t) {
            var e = document.createElement("div");
            return (e.innerHTML = t.trim()), e.firstChild;
          }
          function r(n, i) {
            if (!i) return n;
            for (var r = 0, s = Object.entries(i); r < s.length; r++) {
              var a = w(s[r], 2),
                o = a[0],
                u = a[1];
              if (t(o)) n.addEventListener(e(o), u);
              else if ("class" === o) {
                var l,
                  c = Array.isArray(u) ? u : u.split(" ");
                (l = n.classList).add.apply(l, C(c));
              } else n.setAttribute(o, u);
            }
            return n;
          }
          return function (t, e) {
            for (
              var s = arguments.length, o = new Array(s > 2 ? s - 2 : 0), u = 2;
              u < s;
              u++
            )
              o[u - 2] = arguments[u];
            if (n(t)) return t(p(p({}, e), {}, { children: o }));
            var l = r(document.createElement(t), e);
            return (
              o.flat().forEach(function (t) {
                if (!1 !== t) {
                  var e = "object" === a(t) ? t : i(t.toString());
                  null !== e && l.appendChild(e);
                }
              }),
              l.outerHTML
            );
          };
        })(),
        zr = (function () {
          function t(e) {
            if (
              (o(this, t), !Object.prototype.hasOwnProperty.call(e, "incident"))
            )
              return (
                rt.error(
                  'Journey constructor expects an Incident on its properties on the key "incident"'
                ),
                !1
              );
            (this.memory = e.capsuleMemory),
              (this.stations = []),
              (this.incident = e.incident),
              (this.startMillisecond =
                1 * this.incident.runTimeInfo.currentMillisecond),
              (this.startState = "".concat(this.incident.runTimeInfo.state)),
              this.incident.stop();
          }
          return (
            l(t, [
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
        Gr = (function () {
          function t() {
            o(this, t), (this.memory = []);
          }
          return (
            l(t, [
              {
                key: "startJourney",
                value: function (t) {
                  return t
                    ? new zr({ incident: t, capsuleMemory: this.memory })
                    : (rt.error(
                        "startJourney expects an Incident as an argument"
                      ),
                      !1);
                },
              },
            ]),
            t
          );
        })(),
        Hr = (function (t) {
          d(n, t);
          var e = g(n);
          function n(t) {
            var i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            o(this, n);
            var r = { audio: "only", audioSources: t };
            return null !== i && (r.id = i), e.call(this, r);
          }
          return n;
        })($r);
      function Jr(t) {
        if (
          (Object.prototype.hasOwnProperty.call(t, "default") &&
            (t = t.default),
          Object.prototype.hasOwnProperty.call(t, "npm_name") ||
            (t.npm_name = "plugin_".concat(new Date().getTime())),
          !(function (t) {
            Object.prototype.hasOwnProperty.call(t, "default") &&
              (t = t.default);
            var e = t.npm_name,
              n = !0;
            if (
              (Object.prototype.hasOwnProperty.call(t, "name") ||
                rt.notice(
                  "Notice on plugin ".concat(
                    e,
                    '. A plugin is always good to have its name on\n        its main.js file, under the key "name". It\'s missing from this plugin'
                  )
                ),
              Object.prototype.hasOwnProperty.call(t, "version") ||
                rt.notice(
                  "Notice on ".concat(
                    e,
                    ". Plugin should always expose its version number on main.js file.\n      Plugin version is missing"
                  )
                ),
              Object.prototype.hasOwnProperty.call(t, "incidents") ||
                Object.prototype.hasOwnProperty.call(t, "Clip") ||
                (rt.error(
                  "Error on plugin ".concat(
                    e,
                    '. A plugin must expose at least one Incident or a Clip.\n        Exposed plugin Incidents should be defined on the "incidents" key of the main.js file while Clips on the "Clip".'
                  )
                ),
                (n = !1)),
              Object.prototype.hasOwnProperty.call(t, "incidents") &&
                !Array.isArray(t.incidents))
            )
              rt.error(
                "Error on plugin ".concat(
                  e,
                  '. thePlugin exposed Incidents are defined on the "incidents" key of the main.js file in array format.\n        Please refer to the documentation'
                )
              ),
                (n = !1);
            else if (Object.prototype.hasOwnProperty.call(t, "incidents"))
              for (var i = 0; i < t.incidents.length; i++) {
                var r = t.incidents[i];
                "object" === a(r.exportable) &&
                  Object.prototype.hasOwnProperty.call(
                    r.exportable,
                    "default"
                  ) &&
                  (r.exportable = r.exportable.default);
                var s = r.exportable.prototype;
                s instanceof sr ||
                  s instanceof $r ||
                  s instanceof At ||
                  s instanceof br ||
                  (rt.error(
                    "Error on plugin "
                      .concat(
                        e,
                        ". Exportable Incidents by any plugin must extend one of the base classes provided by MotorCortex.\n                "
                      )
                      .concat(
                        r.exportable.constructor.name,
                        " doesn't.\n                Please refer to documentation"
                      )
                  ),
                  (n = !1)),
                  s instanceof $r &&
                    (Object.prototype.hasOwnProperty.call(r, "originalDims")
                      ? !1 === U(r.originalDims).result &&
                        (rt.error(
                          "Error on plugin "
                            .concat(
                              e,
                              ". Invalid originalDims value passed on "
                            )
                            .concat(r.name)
                        ),
                        (n = !1))
                      : rt.log(
                          "Warning on plugin ".concat(
                            e,
                            '. It\'s always good to provide originalDims\n            when exposing Incidents extending DOMClip. By defining their original dims the users\n            of your plugin will be able to define the desired dimensions of your Incident by\n            the "containerParams object"'
                          )
                        )),
                  Object.prototype.hasOwnProperty.call(r, "name") ||
                    (rt.error(
                      "Error on plugin ".concat(
                        e,
                        '. Exportable Incidents by any plugin must have the "name" key which defines the name of the exported Incident.\n                Please refer to documentation'
                      )
                    ),
                    (n = !1));
              }
            return n;
          })(t))
        )
          return !1;
        var e = {};
        if (Object.prototype.hasOwnProperty.call(t, "Clip"))
          if (Object.prototype.hasOwnProperty.call(t.Clip, "exportable")) {
            var n,
              i,
              r,
              s =
                ((i = n = (function (t) {
                  d(n, t);
                  var e = g(n);
                  function n() {
                    return o(this, n), e.apply(this, arguments);
                  }
                  return n;
                })($r)),
                c(n, "Incident", t.Clip.exportable),
                c(n, "plugin", t.npm_name),
                c(n, "version", t.version || "*"),
                c(n, "audio", t.audio || "off"),
                c(n, "customClip", !0),
                i);
            Object.prototype.hasOwnProperty.call(
              t.Clip,
              "attributesValidationRules"
            ) && (r = Oi.compile(t.Clip.attributesValidationRules)),
              (e.Clip = function e(n, i) {
                o(this, e);
                var a,
                  u = n,
                  l = i;
                if (
                  (void 0 === i && ((u = {}), (l = n)),
                  Object.prototype.hasOwnProperty.call(
                    t.Clip,
                    "attributesValidationRules"
                  ))
                ) {
                  var c = r(u);
                  if (c.length > 0) {
                    for (
                      var h = "Error on plugin's \"".concat(
                          t.npm_name,
                          '" Clip instantiation. Errors:'
                        ),
                        p = 0;
                      p < c.length;
                      p++
                    )
                      h += "\n - "
                        .concat(c[p].message, ". ")
                        .concat(c[p].actual, " provided");
                    return (
                      rt.error(h), rt.log("breaking"), { result: !1, errors: c }
                    );
                  }
                  rt.log("instantiating"),
                    ((a = new s(u, l)).attrsValidationRules =
                      t.Clip.attributesValidationRules),
                    (a.attrsValidationMethod = r);
                } else
                  rt.log("instantiating"),
                    ((a = new s(u, l)).attrsValidationRules = null),
                    rt.warning(
                      "It's always good to provide attributesValidationRules to the exported incidents. "
                        .concat(t.npm_name, ".")
                        .concat(a.constructor.name, " doesn't provide it")
                    );
                return a;
              });
          } else {
            var u,
              l,
              h =
                ((l = u = (function (t) {
                  d(n, t);
                  var e = g(n);
                  function n() {
                    return o(this, n), e.apply(this, arguments);
                  }
                  return n;
                })($r)),
                c(u, "Incident", t.Clip),
                c(u, "plugin", t.npm_name),
                c(u, "version", t.version || "*"),
                c(u, "audio", t.audio || "off"),
                c(u, "customClip", !0),
                l);
            rt.warning(
              "It's always good to provide attributesValidationRules to the exported incidents. ".concat(
                t.npm_name,
                ".Clip doesn't provide it"
              )
            ),
              (e.Clip = h);
          }
        var p = Pr;
        if (
          (Object.prototype.hasOwnProperty.call(t, "compositeAttributes") &&
            (p = (function (e) {
              d(i, e);
              var n = g(i);
              function i(e) {
                return (
                  o(this, i),
                  (e.comboAttributes = t.compositeAttributes),
                  n.call(this, e)
                );
              }
              return i;
            })(Pr)),
          Object.prototype.hasOwnProperty.call(t, "incidents"))
        )
          for (
            var f = function (n) {
                var i = t.incidents[n].exportable,
                  r = null,
                  s = null,
                  a = !1;
                if (
                  Object.prototype.hasOwnProperty.call(
                    t.incidents[n],
                    "attributesValidationRules"
                  )
                ) {
                  a = !0;
                  var u = JSON.parse(
                    JSON.stringify(t.incidents[n].attributesValidationRules)
                  );
                  Object.prototype.hasOwnProperty.call(
                    t.incidents[n].attributesValidationRules,
                    "animatedAttrs"
                  ) &&
                    (u.initialValues = rt.buildInitialValuesValidationRules(
                      u.animatedAttrs
                    )),
                    (s = u),
                    (r = Oi.compile(u));
                }
                var l,
                  h,
                  f = void 0;
                if (i.prototype instanceof At)
                  (h = l = (function (t) {
                    d(n, t);
                    var e = g(n);
                    function n() {
                      return o(this, n), e.apply(this, arguments);
                    }
                    return n;
                  })(Rr)),
                    c(l, "Incident", i),
                    c(l, "plugin_npm_name", t.npm_name),
                    c(l, "plugin", t.npm_name),
                    c(l, "version", t.version || "*"),
                    c(l, "ClassName", t.incidents[n].name),
                    c(l, "Channel", p),
                    c(l, "audio", t.audio ? t.audio : "off"),
                    c(l, "attrsValidationRules", s),
                    c(l, "attrsValidationMethod", r),
                    (f = h);
                else if (i.prototype instanceof br) {
                  var m, v;
                  (v = m = (function (t) {
                    d(n, t);
                    var e = g(n);
                    function n() {
                      return o(this, n), e.apply(this, arguments);
                    }
                    return n;
                  })(Rr)),
                    c(m, "Incident", i),
                    c(m, "plugin_npm_name", "@kissmybutton/media-playback"),
                    c(m, "plugin", t.npm_name),
                    c(m, "version", t.version || "*"),
                    c(m, "ClassName", t.incidents[n].name),
                    c(m, "Channel", yr),
                    c(m, "audio", t.audio ? t.audio : "off"),
                    c(m, "attrsValidationRules", s),
                    c(m, "attrsValidationMethod", r),
                    (f = v);
                } else if (i.prototype instanceof $r) {
                  var y, b;
                  (b = y = (function (t) {
                    d(n, t);
                    var e = g(n);
                    function n() {
                      return o(this, n), e.apply(this, arguments);
                    }
                    return n;
                  })(i)),
                    c(y, "plugin", t.npm_name),
                    c(y, "version", t.version || "*"),
                    c(y, "ClassName", t.incidents[n].name),
                    c(y, "audio", t.audio ? t.audio : "on"),
                    c(
                      y,
                      "originalDims",
                      U(t.incidents[n].originalDims).analysis
                    ),
                    c(y, "attrsValidationRules", s),
                    c(y, "attrsValidationMethod", r),
                    c(y, "isAnimation", !0),
                    (f = b);
                } else if (i.prototype instanceof sr) {
                  var x, k;
                  (k = x = (function (t) {
                    d(n, t);
                    var e = g(n);
                    function n() {
                      return o(this, n), e.apply(this, arguments);
                    }
                    return n;
                  })(i)),
                    c(x, "plugin", t.npm_name),
                    c(x, "version", t.version || "*"),
                    c(x, "ClassName", t.incidents[n].name),
                    c(x, "attrsValidationRules", s),
                    c(x, "attrsValidationMethod", r),
                    (f = k);
                }
                Object.defineProperty(e, t.incidents[n].name, {
                  enumerable: !0,
                  get: function () {
                    var e = function e(i, s) {
                      var u;
                      if ((o(this, e), a)) {
                        var l = r(i);
                        if (l.length > 0) {
                          for (
                            var c = "Error on plugin's \""
                                .concat(t.npm_name, '" "')
                                .concat(
                                  t.incidents[n].name,
                                  '" instantiation. Errors:'
                                ),
                              h = 0;
                            h < l.length;
                            h++
                          )
                            c += "\n - "
                              .concat(l[h].message, ". ")
                              .concat(l[h].actual, " provided");
                          return rt.error(c), { result: !1, errors: l };
                        }
                      }
                      return (
                        (u = new f(i, s)).result &&
                          !a &&
                          rt.warning(
                            "It's always good to provide attributesValidationRules to the exported incidents. ".concat(
                              t.npm_name,
                              " doesn't provide it"
                            )
                          ),
                        u
                      );
                    };
                    return c(e, "targetClass", f), e;
                  },
                });
              },
              m = 0;
            m < t.incidents.length;
            m++
          )
            f(m);
        return e;
      }
      window.fs = {};
      var Kr = { createDOMElement: qr, easings: Tt, clipFromDefinition: Hi },
        Wr = Jr(xr),
        Ur = Wr.Clip,
        Xr = Wr.AudioEffect,
        Qr = Wr.AudioPlayback,
        Zr = Hr,
        Yr = {
          version: Bt,
          Effect: At,
          utils: Kr,
          HTMLClip: $r,
          Group: sr,
          Combo: Fr,
          BrowserClip: Dr,
          loadPlugin: Jr,
          AudioClip: Zr,
          CoreAudioClip: Ur,
          AudioPlayback: Qr,
          AudioEffect: Xr,
          MediaPlayback: br,
          TimeCapsule: Gr,
        };
      (t.AudioClip = Zr),
        (t.AudioEffect = Xr),
        (t.AudioPlayback = Qr),
        (t.BrowserClip = Dr),
        (t.Combo = Fr),
        (t.CoreAudioClip = Ur),
        (t.Effect = At),
        (t.Group = sr),
        (t.HTMLClip = $r),
        (t.MediaPlayback = br),
        (t.TimeCapsule = Gr),
        (t.default = Yr),
        (t.loadPlugin = Jr),
        (t.utils = Kr),
        Object.defineProperty(t, "__esModule", { value: !0 });
    })(e, n(4), n(5));
  },
  function (t, e, n) {
    (function (e) {
      t.exports = (function (t) {
        "use strict";
        var n = (function (t) {
            return t && "object" == typeof t && "default" in t
              ? t
              : { default: t };
          })(t),
          i = {
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
          r = [
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
          ];
        function s(t) {
          return t >= 48 && t <= 57;
        }
        function a(t) {
          return (t >= 48 && t <= 57) || 43 === t || 45 === t || 46 === t;
        }
        function o(t) {
          (this.index = 0),
            (this.path = t),
            (this.max = t.length),
            (this.result = []),
            (this.param = 0),
            (this.err = ""),
            (this.segmentStart = 0),
            (this.data = []);
        }
        function u(t) {
          for (
            ;
            t.index < t.max &&
            (10 === (e = t.path.charCodeAt(t.index)) ||
              13 === e ||
              8232 === e ||
              8233 === e ||
              32 === e ||
              9 === e ||
              11 === e ||
              12 === e ||
              160 === e ||
              (e >= 5760 && r.indexOf(e) >= 0));

          )
            t.index++;
          var e;
        }
        function l(t) {
          var e = t.path.charCodeAt(t.index);
          return 48 === e
            ? ((t.param = 0), void t.index++)
            : 49 === e
            ? ((t.param = 1), void t.index++)
            : void (t.err =
                "SvgPath: arc flag can be 0 or 1 only (at pos " +
                t.index +
                ")");
        }
        function c(t) {
          var e,
            n = t.index,
            i = n,
            r = t.max,
            a = !1,
            o = !1,
            u = !1,
            l = !1;
          if (i >= r) t.err = "SvgPath: missed param (at pos " + i + ")";
          else if (
            ((43 !== (e = t.path.charCodeAt(i)) && 45 !== e) ||
              (e = ++i < r ? t.path.charCodeAt(i) : 0),
            s(e) || 46 === e)
          ) {
            if (46 !== e) {
              if (
                ((a = 48 === e),
                (e = ++i < r ? t.path.charCodeAt(i) : 0),
                a && i < r && e && s(e))
              )
                return void (t.err =
                  "SvgPath: numbers started with `0` such as `09` are illegal (at pos " +
                  n +
                  ")");
              for (; i < r && s(t.path.charCodeAt(i)); ) i++, (o = !0);
              e = i < r ? t.path.charCodeAt(i) : 0;
            }
            if (46 === e) {
              for (l = !0, i++; s(t.path.charCodeAt(i)); ) i++, (u = !0);
              e = i < r ? t.path.charCodeAt(i) : 0;
            }
            if (101 === e || 69 === e) {
              if (l && !o && !u)
                return void (t.err =
                  "SvgPath: invalid float exponent (at pos " + i + ")");
              if (
                ((43 !== (e = ++i < r ? t.path.charCodeAt(i) : 0) &&
                  45 !== e) ||
                  i++,
                !(i < r && s(t.path.charCodeAt(i))))
              )
                return void (t.err =
                  "SvgPath: invalid float exponent (at pos " + i + ")");
              for (; i < r && s(t.path.charCodeAt(i)); ) i++;
            }
            (t.index = i), (t.param = parseFloat(t.path.slice(n, i)) + 0);
          } else
            t.err =
              "SvgPath: param should start with 0..9 or `.` (at pos " + i + ")";
        }
        function h(t) {
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
              r.length >= i[n] &&
              (t.result.push([e].concat(r.splice(0, i[n]))), i[n]);

            );
        }
        function p(t) {
          var e,
            n,
            r,
            s,
            o,
            p = t.max;
          if (
            ((t.segmentStart = t.index),
            (n = 97 == (32 | (e = t.path.charCodeAt(t.index)))),
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
            })(e))
          )
            if (
              ((s = i[t.path[t.index].toLowerCase()]),
              t.index++,
              u(t),
              (t.data = []),
              s)
            ) {
              for (r = !1; ; ) {
                for (o = s; o > 0; o--) {
                  if ((!n || (3 !== o && 4 !== o) ? c(t) : l(t), t.err.length))
                    return;
                  t.data.push(t.param),
                    u(t),
                    (r = !1),
                    t.index < p &&
                      44 === t.path.charCodeAt(t.index) &&
                      (t.index++, u(t), (r = !0));
                }
                if (!r) {
                  if (t.index >= t.max) break;
                  if (!a(t.path.charCodeAt(t.index))) break;
                }
              }
              h(t);
            } else h(t);
          else
            t.err =
              "SvgPath: bad command " +
              t.path[t.index] +
              " (at pos " +
              t.index +
              ")";
        }
        function d() {
          if (!(this instanceof d)) return new d();
          (this.queue = []), (this.cache = null);
        }
        (d.prototype.matrix = function (t) {
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
          (d.prototype.translate = function (t, e) {
            return (
              (0 === t && 0 === e) ||
                ((this.cache = null), this.queue.push([1, 0, 0, 1, t, e])),
              this
            );
          }),
          (d.prototype.scale = function (t, e) {
            return (
              (1 === t && 1 === e) ||
                ((this.cache = null), this.queue.push([t, 0, 0, e, 0, 0])),
              this
            );
          }),
          (d.prototype.rotate = function (t, e, n) {
            var i, r, s;
            return (
              0 !== t &&
                (this.translate(e, n),
                (i = (t * Math.PI) / 180),
                (r = Math.cos(i)),
                (s = Math.sin(i)),
                this.queue.push([r, s, -s, r, 0, 0]),
                (this.cache = null),
                this.translate(-e, -n)),
              this
            );
          }),
          (d.prototype.skewX = function (t) {
            return (
              0 !== t &&
                ((this.cache = null),
                this.queue.push([
                  1,
                  0,
                  Math.tan((t * Math.PI) / 180),
                  1,
                  0,
                  0,
                ])),
              this
            );
          }),
          (d.prototype.skewY = function (t) {
            return (
              0 !== t &&
                ((this.cache = null),
                this.queue.push([
                  1,
                  Math.tan((t * Math.PI) / 180),
                  0,
                  1,
                  0,
                  0,
                ])),
              this
            );
          }),
          (d.prototype.toArray = function () {
            if (this.cache) return this.cache;
            if (!this.queue.length)
              return (this.cache = [1, 0, 0, 1, 0, 0]), this.cache;
            if (((this.cache = this.queue[0]), 1 === this.queue.length))
              return this.cache;
            for (var t = 1; t < this.queue.length; t++)
              this.cache =
                ((e = this.cache),
                (n = this.queue[t]),
                [
                  e[0] * n[0] + e[2] * n[1],
                  e[1] * n[0] + e[3] * n[1],
                  e[0] * n[2] + e[2] * n[3],
                  e[1] * n[2] + e[3] * n[3],
                  e[0] * n[4] + e[2] * n[5] + e[4],
                  e[1] * n[4] + e[3] * n[5] + e[5],
                ]);
            var e, n;
            return this.cache;
          }),
          (d.prototype.calc = function (t, e, n) {
            var i;
            return this.queue.length
              ? (this.cache || (this.cache = this.toArray()),
                [
                  t * (i = this.cache)[0] + e * i[2] + (n ? 0 : i[4]),
                  t * i[1] + e * i[3] + (n ? 0 : i[5]),
                ])
              : [t, e];
          });
        var f = d,
          m = {
            matrix: !0,
            scale: !0,
            rotate: !0,
            translate: !0,
            skewX: !0,
            skewY: !0,
          },
          v = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/,
          g = /[\s,]+/,
          y = 2 * Math.PI;
        function b(t, e, n, i) {
          var r = t * n + e * i;
          return (
            r > 1 && (r = 1),
            r < -1 && (r = -1),
            (t * i - e * n < 0 ? -1 : 1) * Math.acos(r)
          );
        }
        function x(t, e) {
          var n = (4 / 3) * Math.tan(e / 4),
            i = Math.cos(t),
            r = Math.sin(t),
            s = Math.cos(t + e),
            a = Math.sin(t + e);
          return [i, r, i - r * n, r + i * n, s + a * n, a - s * n, s, a];
        }
        var k = 1e-10,
          w = Math.PI / 180;
        function C(t, e, n) {
          if (!(this instanceof C)) return new C(t, e, n);
          (this.rx = t), (this.ry = e), (this.ax = n);
        }
        (C.prototype.transform = function (t) {
          var e = Math.cos(this.ax * w),
            n = Math.sin(this.ax * w),
            i = [
              this.rx * (t[0] * e + t[2] * n),
              this.rx * (t[1] * e + t[3] * n),
              this.ry * (-t[0] * n + t[2] * e),
              this.ry * (-t[1] * n + t[3] * e),
            ],
            r = i[0] * i[0] + i[2] * i[2],
            s = i[1] * i[1] + i[3] * i[3],
            a =
              ((i[0] - i[3]) * (i[0] - i[3]) + (i[2] + i[1]) * (i[2] + i[1])) *
              ((i[0] + i[3]) * (i[0] + i[3]) + (i[2] - i[1]) * (i[2] - i[1])),
            o = (r + s) / 2;
          if (a < k * o)
            return (this.rx = this.ry = Math.sqrt(o)), (this.ax = 0), this;
          var u = i[0] * i[1] + i[2] * i[3],
            l = o + (a = Math.sqrt(a)) / 2,
            c = o - a / 2;
          return (
            (this.ax =
              Math.abs(u) < k && Math.abs(l - s) < k
                ? 90
                : (180 *
                    Math.atan(
                      Math.abs(u) > Math.abs(l - s) ? (l - r) / u : u / (l - s)
                    )) /
                  Math.PI),
            this.ax >= 0
              ? ((this.rx = Math.sqrt(l)), (this.ry = Math.sqrt(c)))
              : ((this.ax += 90),
                (this.rx = Math.sqrt(c)),
                (this.ry = Math.sqrt(l))),
            this
          );
        }),
          (C.prototype.isDegenerate = function () {
            return this.rx < k * this.ry || this.ry < k * this.rx;
          });
        var O = C;
        function I(t) {
          if (!(this instanceof I)) return new I(t);
          var e = (function (t) {
            var e = new o(t),
              n = e.max;
            for (u(e); e.index < n && !e.err.length; ) p(e);
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
          })(t);
          (this.segments = e.segments), (this.err = e.err), (this.__stack = []);
        }
        (I.from = function (t) {
          if ("string" == typeof t) return new I(t);
          if (t instanceof I) {
            var e = new I("");
            return (
              (e.err = t.err),
              (e.segments = t.segments.map(function (t) {
                return t.slice();
              })),
              (e.__stack = t.__stack.map(function (t) {
                return f().matrix(t.toArray());
              })),
              e
            );
          }
          throw new Error("SvgPath.from: invalid param type " + t);
        }),
          (I.prototype.__matrix = function (t) {
            var e,
              n = this;
            t.queue.length &&
              this.iterate(function (i, r, s, a) {
                var o, u, l, c;
                switch (i[0]) {
                  case "v":
                    u =
                      0 === (o = t.calc(0, i[1], !0))[0]
                        ? ["v", o[1]]
                        : ["l", o[0], o[1]];
                    break;
                  case "V":
                    u =
                      (o = t.calc(s, i[1], !1))[0] === t.calc(s, a, !1)[0]
                        ? ["V", o[1]]
                        : ["L", o[0], o[1]];
                    break;
                  case "h":
                    u =
                      0 === (o = t.calc(i[1], 0, !0))[1]
                        ? ["h", o[0]]
                        : ["l", o[0], o[1]];
                    break;
                  case "H":
                    u =
                      (o = t.calc(i[1], a, !1))[1] === t.calc(s, a, !1)[1]
                        ? ["H", o[0]]
                        : ["L", o[0], o[1]];
                    break;
                  case "a":
                  case "A":
                    var h = t.toArray(),
                      p = O(i[1], i[2], i[3]).transform(h);
                    if (
                      (h[0] * h[3] - h[1] * h[2] < 0 &&
                        (i[5] = i[5] ? "0" : "1"),
                      (o = t.calc(i[6], i[7], "a" === i[0])),
                      ("A" === i[0] && i[6] === s && i[7] === a) ||
                        ("a" === i[0] && 0 === i[6] && 0 === i[7]))
                    ) {
                      u = ["a" === i[0] ? "l" : "L", o[0], o[1]];
                      break;
                    }
                    u = p.isDegenerate()
                      ? ["a" === i[0] ? "l" : "L", o[0], o[1]]
                      : [i[0], p.rx, p.ry, p.ax, i[4], i[5], o[0], o[1]];
                    break;
                  case "m":
                    (c = r > 0),
                      (u = ["m", (o = t.calc(i[1], i[2], c))[0], o[1]]);
                    break;
                  default:
                    for (
                      u = [(l = i[0])], c = l.toLowerCase() === l, e = 1;
                      e < i.length;
                      e += 2
                    )
                      (o = t.calc(i[e], i[e + 1], c)), u.push(o[0], o[1]);
                }
                n.segments[r] = u;
              }, !0);
          }),
          (I.prototype.__evaluateStack = function () {
            var t, e;
            if (this.__stack.length) {
              if (1 === this.__stack.length)
                return this.__matrix(this.__stack[0]), void (this.__stack = []);
              for (t = f(), e = this.__stack.length; --e >= 0; )
                t.matrix(this.__stack[e].toArray());
              this.__matrix(t), (this.__stack = []);
            }
          }),
          (I.prototype.toString = function () {
            var t,
              e,
              n = [];
            this.__evaluateStack();
            for (var i = 0; i < this.segments.length; i++)
              (e = this.segments[i][0]),
                (t =
                  i > 0 &&
                  "m" !== e &&
                  "M" !== e &&
                  e === this.segments[i - 1][0]),
                (n = n.concat(
                  t ? this.segments[i].slice(1) : this.segments[i]
                ));
            return n
              .join(" ")
              .replace(/ ?([achlmqrstvz]) ?/gi, "$1")
              .replace(/ \-/g, "-")
              .replace(/zm/g, "z m");
          }),
          (I.prototype.translate = function (t, e) {
            return this.__stack.push(f().translate(t, e || 0)), this;
          }),
          (I.prototype.scale = function (t, e) {
            return this.__stack.push(f().scale(t, e || 0 === e ? e : t)), this;
          }),
          (I.prototype.rotate = function (t, e, n) {
            return this.__stack.push(f().rotate(t, e || 0, n || 0)), this;
          }),
          (I.prototype.skewX = function (t) {
            return this.__stack.push(f().skewX(t)), this;
          }),
          (I.prototype.skewY = function (t) {
            return this.__stack.push(f().skewY(t)), this;
          }),
          (I.prototype.matrix = function (t) {
            return this.__stack.push(f().matrix(t)), this;
          }),
          (I.prototype.transform = function (t) {
            return t.trim()
              ? (this.__stack.push(
                  (function (t) {
                    var e,
                      n,
                      i = new f();
                    return (
                      t.split(v).forEach(function (t) {
                        if (t.length)
                          if (void 0 === m[t])
                            switch (
                              ((n = t.split(g).map(function (t) {
                                return +t || 0;
                              })),
                              e)
                            ) {
                              case "matrix":
                                return void (6 === n.length && i.matrix(n));
                              case "scale":
                                return void (1 === n.length
                                  ? i.scale(n[0], n[0])
                                  : 2 === n.length && i.scale(n[0], n[1]));
                              case "rotate":
                                return void (1 === n.length
                                  ? i.rotate(n[0], 0, 0)
                                  : 3 === n.length &&
                                    i.rotate(n[0], n[1], n[2]));
                              case "translate":
                                return void (1 === n.length
                                  ? i.translate(n[0], 0)
                                  : 2 === n.length && i.translate(n[0], n[1]));
                              case "skewX":
                                return void (1 === n.length && i.skewX(n[0]));
                              case "skewY":
                                return void (1 === n.length && i.skewY(n[0]));
                            }
                          else e = t;
                      }),
                      i
                    );
                  })(t)
                ),
                this)
              : this;
          }),
          (I.prototype.round = function (t) {
            var e,
              n = 0,
              i = 0,
              r = 0,
              s = 0;
            return (
              (t = t || 0),
              this.__evaluateStack(),
              this.segments.forEach(function (a) {
                var o = a[0].toLowerCase() === a[0];
                switch (a[0]) {
                  case "H":
                  case "h":
                    return (
                      o && (a[1] += r),
                      (r = a[1] - a[1].toFixed(t)),
                      void (a[1] = +a[1].toFixed(t))
                    );
                  case "V":
                  case "v":
                    return (
                      o && (a[1] += s),
                      (s = a[1] - a[1].toFixed(t)),
                      void (a[1] = +a[1].toFixed(t))
                    );
                  case "Z":
                  case "z":
                    return (r = n), void (s = i);
                  case "M":
                  case "m":
                    return (
                      o && ((a[1] += r), (a[2] += s)),
                      (r = a[1] - a[1].toFixed(t)),
                      (s = a[2] - a[2].toFixed(t)),
                      (n = r),
                      (i = s),
                      (a[1] = +a[1].toFixed(t)),
                      void (a[2] = +a[2].toFixed(t))
                    );
                  case "A":
                  case "a":
                    return (
                      o && ((a[6] += r), (a[7] += s)),
                      (r = a[6] - a[6].toFixed(t)),
                      (s = a[7] - a[7].toFixed(t)),
                      (a[1] = +a[1].toFixed(t)),
                      (a[2] = +a[2].toFixed(t)),
                      (a[3] = +a[3].toFixed(t + 2)),
                      (a[6] = +a[6].toFixed(t)),
                      void (a[7] = +a[7].toFixed(t))
                    );
                  default:
                    return (
                      (e = a.length),
                      o && ((a[e - 2] += r), (a[e - 1] += s)),
                      (r = a[e - 2] - a[e - 2].toFixed(t)),
                      (s = a[e - 1] - a[e - 1].toFixed(t)),
                      void a.forEach(function (e, n) {
                        n && (a[n] = +a[n].toFixed(t));
                      })
                    );
                }
              }),
              this
            );
          }),
          (I.prototype.iterate = function (t, e) {
            var n,
              i,
              r,
              s = this.segments,
              a = {},
              o = !1,
              u = 0,
              l = 0,
              c = 0,
              h = 0;
            if (
              (e || this.__evaluateStack(),
              s.forEach(function (e, n) {
                var i = t(e, n, u, l);
                Array.isArray(i) && ((a[n] = i), (o = !0));
                var r = e[0] === e[0].toLowerCase();
                switch (e[0]) {
                  case "m":
                  case "M":
                    return (
                      (u = e[1] + (r ? u : 0)),
                      (l = e[2] + (r ? l : 0)),
                      (c = u),
                      void (h = l)
                    );
                  case "h":
                  case "H":
                    return void (u = e[1] + (r ? u : 0));
                  case "v":
                  case "V":
                    return void (l = e[1] + (r ? l : 0));
                  case "z":
                  case "Z":
                    return (u = c), void (l = h);
                  default:
                    (u = e[e.length - 2] + (r ? u : 0)),
                      (l = e[e.length - 1] + (r ? l : 0));
                }
              }),
              !o)
            )
              return this;
            for (r = [], n = 0; n < s.length; n++)
              if (void 0 !== a[n])
                for (i = 0; i < a[n].length; i++) r.push(a[n][i]);
              else r.push(s[n]);
            return (this.segments = r), this;
          }),
          (I.prototype.abs = function () {
            return (
              this.iterate(function (t, e, n, i) {
                var r,
                  s = t[0],
                  a = s.toUpperCase();
                if (s !== a)
                  switch (((t[0] = a), s)) {
                    case "v":
                      return void (t[1] += i);
                    case "a":
                      return (t[6] += n), void (t[7] += i);
                    default:
                      for (r = 1; r < t.length; r++) t[r] += r % 2 ? n : i;
                  }
              }, !0),
              this
            );
          }),
          (I.prototype.rel = function () {
            return (
              this.iterate(function (t, e, n, i) {
                var r,
                  s = t[0],
                  a = s.toLowerCase();
                if (s !== a && (0 !== e || "M" !== s))
                  switch (((t[0] = a), s)) {
                    case "V":
                      return void (t[1] -= i);
                    case "A":
                      return (t[6] -= n), void (t[7] -= i);
                    default:
                      for (r = 1; r < t.length; r++) t[r] -= r % 2 ? n : i;
                  }
              }, !0),
              this
            );
          }),
          (I.prototype.unarc = function () {
            return (
              this.iterate(function (t, e, n, i) {
                var r,
                  s,
                  a,
                  o = [],
                  u = t[0];
                return "A" !== u && "a" !== u
                  ? null
                  : ("a" === u
                      ? ((s = n + t[6]), (a = i + t[7]))
                      : ((s = t[6]), (a = t[7])),
                    0 ===
                    (r = (function (t, e, n, i, r, s, a, o, u) {
                      var l = Math.sin((u * y) / 360),
                        c = Math.cos((u * y) / 360),
                        h = (c * (t - n)) / 2 + (l * (e - i)) / 2,
                        p = (-l * (t - n)) / 2 + (c * (e - i)) / 2;
                      if (0 === h && 0 === p) return [];
                      if (0 === a || 0 === o) return [];
                      (a = Math.abs(a)), (o = Math.abs(o));
                      var d = (h * h) / (a * a) + (p * p) / (o * o);
                      d > 1 && ((a *= Math.sqrt(d)), (o *= Math.sqrt(d)));
                      var f = (function (t, e, n, i, r, s, a, o, u, l) {
                          var c = (l * (t - n)) / 2 + (u * (e - i)) / 2,
                            h = (-u * (t - n)) / 2 + (l * (e - i)) / 2,
                            p = a * a,
                            d = o * o,
                            f = c * c,
                            m = h * h,
                            v = p * d - p * m - d * f;
                          v < 0 && (v = 0), (v /= p * m + d * f);
                          var g =
                              (((v = Math.sqrt(v) * (r === s ? -1 : 1)) * a) /
                                o) *
                              h,
                            x = ((v * -o) / a) * c,
                            k = l * g - u * x + (t + n) / 2,
                            w = u * g + l * x + (e + i) / 2,
                            C = (c - g) / a,
                            O = (h - x) / o,
                            I = (-c - g) / a,
                            P = (-h - x) / o,
                            E = b(1, 0, C, O),
                            A = b(C, O, I, P);
                          return (
                            0 === s && A > 0 && (A -= y),
                            1 === s && A < 0 && (A += y),
                            [k, w, E, A]
                          );
                        })(t, e, n, i, r, s, a, o, l, c),
                        m = [],
                        v = f[2],
                        g = f[3],
                        k = Math.max(Math.ceil(Math.abs(g) / (y / 4)), 1);
                      g /= k;
                      for (var w = 0; w < k; w++) m.push(x(v, g)), (v += g);
                      return m.map(function (t) {
                        for (var e = 0; e < t.length; e += 2) {
                          var n = t[e + 0],
                            i = t[e + 1],
                            r = c * (n *= a) - l * (i *= o),
                            s = l * n + c * i;
                          (t[e + 0] = r + f[0]), (t[e + 1] = s + f[1]);
                        }
                        return t;
                      });
                    })(n, i, s, a, t[4], t[5], t[1], t[2], t[3])).length
                      ? [["a" === t[0] ? "l" : "L", t[6], t[7]]]
                      : (r.forEach(function (t) {
                          o.push(["C", t[2], t[3], t[4], t[5], t[6], t[7]]);
                        }),
                        o));
              }),
              this
            );
          }),
          (I.prototype.unshort = function () {
            var t,
              e,
              n,
              i,
              r,
              s = this.segments;
            return (
              this.iterate(function (a, o, u, l) {
                var c,
                  h = a[0],
                  p = h.toUpperCase();
                o &&
                  ("T" === p
                    ? ((c = "t" === h),
                      "Q" === (n = s[o - 1])[0]
                        ? ((t = n[1] - u), (e = n[2] - l))
                        : "q" === n[0]
                        ? ((t = n[1] - n[3]), (e = n[2] - n[4]))
                        : ((t = 0), (e = 0)),
                      (i = -t),
                      (r = -e),
                      c || ((i += u), (r += l)),
                      (s[o] = [c ? "q" : "Q", i, r, a[1], a[2]]))
                    : "S" === p &&
                      ((c = "s" === h),
                      "C" === (n = s[o - 1])[0]
                        ? ((t = n[3] - u), (e = n[4] - l))
                        : "c" === n[0]
                        ? ((t = n[3] - n[5]), (e = n[4] - n[6]))
                        : ((t = 0), (e = 0)),
                      (i = -t),
                      (r = -e),
                      c || ((i += u), (r += l)),
                      (s[o] = [c ? "c" : "C", i, r, a[1], a[2], a[3], a[4]])));
              }),
              this
            );
          });
        var P = I;
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : void 0 !== e || ("undefined" != typeof self && self);
        var E,
          A = (function (t, e) {
            return (
              (function (t, e) {
                !(function (t) {
                  var e = {
                      a: 7,
                      c: 6,
                      h: 1,
                      l: 2,
                      m: 2,
                      q: 4,
                      s: 4,
                      t: 2,
                      v: 1,
                      z: 0,
                    },
                    n = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
                    i = function (t) {
                      var i = [];
                      return (
                        t.replace(n, function (t, n, r) {
                          var a = n.toLowerCase();
                          for (
                            r = s(r),
                              "m" === a &&
                                r.length > 2 &&
                                (i.push([n].concat(r.splice(0, 2))),
                                (a = "l"),
                                (n = "m" === n ? "l" : "L"));
                            r.length >= 0;

                          ) {
                            if (r.length === e[a])
                              return r.unshift(n), i.push(r);
                            if (r.length < e[a])
                              throw new Error("malformed path data");
                            i.push([n].concat(r.splice(0, e[a])));
                          }
                        }),
                        i
                      );
                    },
                    r = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
                  function s(t) {
                    var e = t.match(r);
                    return e ? e.map(Number) : [];
                  }
                  var a = function (t, e, n, i, r, s, a, u) {
                    return new o(t, e, n, i, r, s, a, u);
                  };
                  function o(t, e, n, i, r, s, a, o) {
                    (this.a = { x: t, y: e }),
                      (this.b = { x: n, y: i }),
                      (this.c = { x: r, y: s }),
                      (this.d = { x: a, y: o }),
                      null != a && null != o
                        ? ((this.getArcLength = x),
                          (this.getPoint = p),
                          (this.getDerivative = l))
                        : ((this.getArcLength = d),
                          (this.getPoint = h),
                          (this.getDerivative = u)),
                      this.init();
                  }
                  function u(t, e, n) {
                    return {
                      x: 2 * (1 - n) * (t[1] - t[0]) + 2 * n * (t[2] - t[1]),
                      y: 2 * (1 - n) * (e[1] - e[0]) + 2 * n * (e[2] - e[1]),
                    };
                  }
                  function l(t, e, n) {
                    return h(
                      [3 * (t[1] - t[0]), 3 * (t[2] - t[1]), 3 * (t[3] - t[2])],
                      [3 * (e[1] - e[0]), 3 * (e[2] - e[1]), 3 * (e[3] - e[2])],
                      n
                    );
                  }
                  function c(t, e, n, i, r) {
                    for (
                      var s = 1, a = t / e, o = (t - n(i, r, a)) / e;
                      s > 0.001;

                    ) {
                      var u = n(i, r, a + o),
                        l = n(i, r, a - o),
                        c = Math.abs(t - u) / e,
                        h = Math.abs(t - l) / e;
                      c < s
                        ? ((s = c), (a += o))
                        : h < s
                        ? ((s = h), (a -= o))
                        : (o /= 2);
                    }
                    return a;
                  }
                  function h(t, e, n) {
                    return {
                      x:
                        (1 - n) * (1 - n) * t[0] +
                        2 * (1 - n) * n * t[1] +
                        n * n * t[2],
                      y:
                        (1 - n) * (1 - n) * e[0] +
                        2 * (1 - n) * n * e[1] +
                        n * n * e[2],
                    };
                  }
                  function p(t, e, n) {
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
                  function d(t, e, n) {
                    void 0 === n && (n = 1);
                    var i = t[0] - 2 * t[1] + t[2],
                      r = e[0] - 2 * e[1] + e[2],
                      s = 2 * t[1] - 2 * t[0],
                      a = 2 * e[1] - 2 * e[0],
                      o = 4 * (i * i + r * r),
                      u = 4 * (i * s + r * a),
                      l = s * s + a * a;
                    if (0 === o)
                      return (
                        n *
                        Math.sqrt(
                          Math.pow(t[2] - t[0], 2) + Math.pow(e[2] - e[0], 2)
                        )
                      );
                    var c = u / (2 * o),
                      h = n + c,
                      p = l / o - c * c;
                    return (
                      (Math.sqrt(o) / 2) *
                      (h * Math.sqrt(h * h + p) -
                        c * Math.sqrt(c * c + p) +
                        p *
                          Math.log(
                            Math.abs(
                              (h + Math.sqrt(h * h + p)) /
                                (c + Math.sqrt(c * c + p))
                            )
                          ))
                    );
                  }
                  o.prototype = {
                    constructor: o,
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
                      var e = c(
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
                      var e = c(
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
                        i = Math.sqrt(n.x * n.x + n.y * n.y);
                      return i > 0
                        ? { x: n.x / i, y: n.y / i }
                        : { x: 0, y: 0 };
                    },
                    getPropertiesAtLength: function (t) {
                      var e,
                        n = c(
                          t,
                          this.length,
                          this.getArcLength,
                          [this.a.x, this.b.x, this.c.x, this.d.x],
                          [this.a.y, this.b.y, this.c.y, this.d.y]
                        ),
                        i = this.getDerivative(
                          [this.a.x, this.b.x, this.c.x, this.d.x],
                          [this.a.y, this.b.y, this.c.y, this.d.y],
                          n
                        ),
                        r = Math.sqrt(i.x * i.x + i.y * i.y);
                      e = r > 0 ? { x: i.x / r, y: i.y / r } : { x: 0, y: 0 };
                      var s = this.getPoint(
                        [this.a.x, this.b.x, this.c.x, this.d.x],
                        [this.a.y, this.b.y, this.c.y, this.d.y],
                        n
                      );
                      return { x: s.x, y: s.y, tangentX: e.x, tangentY: e.y };
                    },
                  };
                  var f = [
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
                    m = [
                      [],
                      [],
                      [1, 1],
                      [
                        0.8888888888888888,
                        0.5555555555555556,
                        0.5555555555555556,
                      ],
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
                    v = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
                  function g(t, e) {
                    return v[t][e];
                  }
                  function y(t, e, n) {
                    var i,
                      r,
                      s,
                      a = n.length - 1;
                    if (0 === a) return 0;
                    if (0 === t) {
                      for (r = 0, s = 0; s <= a; s++)
                        r +=
                          g(a, s) *
                          Math.pow(1 - e, a - s) *
                          Math.pow(e, s) *
                          n[s];
                      return r;
                    }
                    for (i = new Array(a), s = 0; s < a; s++)
                      i[s] = a * (n[s + 1] - n[s]);
                    return y(t - 1, e, i);
                  }
                  function b(t, e, n) {
                    var i = y(1, n, t),
                      r = y(1, n, e),
                      s = i * i + r * r;
                    return Math.sqrt(s);
                  }
                  function x(t, e, n) {
                    var i, r, s, a;
                    for (
                      void 0 === n && (n = 1), i = n / 2, r = 0, s = 0;
                      s < 20;
                      s++
                    )
                      (a = i * f[20][s] + i), (r += m[20][s] * b(t, e, a));
                    return i * r;
                  }
                  var k = 2 * Math.PI;
                  function w(t, e, n, i) {
                    var r = t * n + e * i;
                    return (
                      r > 1 && (r = 1),
                      r < -1 && (r = -1),
                      (t * i - e * n < 0 ? -1 : 1) * Math.acos(r)
                    );
                  }
                  function C(t, e) {
                    var n = (4 / 3) * Math.tan(e / 4),
                      i = Math.cos(t),
                      r = Math.sin(t),
                      s = Math.cos(t + e),
                      a = Math.sin(t + e);
                    return [
                      i,
                      r,
                      i - r * n,
                      r + i * n,
                      s + a * n,
                      a - s * n,
                      s,
                      a,
                    ];
                  }
                  var O = function (t, e, n, i, r, s, a, o, u) {
                      var l = Math.sin((r * k) / 360),
                        c = Math.cos((r * k) / 360),
                        h = (c * (t - o)) / 2 + (l * (e - u)) / 2,
                        p = (-l * (t - o)) / 2 + (c * (e - u)) / 2;
                      if (0 === h && 0 === p) return [];
                      if (0 === n || 0 === i) return [];
                      (n = Math.abs(n)), (i = Math.abs(i));
                      var d = (h * h) / (n * n) + (p * p) / (i * i);
                      d > 1 && ((n *= Math.sqrt(d)), (i *= Math.sqrt(d)));
                      var f = (function (t, e, n, i, r, s, a, o, u, l) {
                          var c = (l * (t - n)) / 2 + (u * (e - i)) / 2,
                            h = (-u * (t - n)) / 2 + (l * (e - i)) / 2,
                            p = a * a,
                            d = o * o,
                            f = c * c,
                            m = h * h,
                            v = p * d - p * m - d * f;
                          v < 0 && (v = 0), (v /= p * m + d * f);
                          var g =
                              (((v = Math.sqrt(v) * (r === s ? -1 : 1)) * a) /
                                o) *
                              h,
                            y = ((v * -o) / a) * c,
                            b = l * g - u * y + (t + n) / 2,
                            x = u * g + l * y + (e + i) / 2,
                            C = (c - g) / a,
                            O = (h - y) / o,
                            I = (-c - g) / a,
                            P = (-h - y) / o,
                            E = w(1, 0, C, O),
                            A = w(C, O, I, P);
                          return (
                            0 === s && A > 0 && (A -= k),
                            1 === s && A < 0 && (A += k),
                            [b, x, E, A]
                          );
                        })(t, e, o, u, s, a, n, i, l, c),
                        m = [],
                        v = f[2],
                        g = f[3],
                        y = Math.max(Math.ceil(Math.abs(g) / (k / 4)), 1);
                      g /= y;
                      for (var b = 0; b < y; b++) m.push(C(v, g)), (v += g);
                      return m.map(function (t) {
                        for (var e = 0; e < t.length; e += 2) {
                          var r = t[e + 0],
                            s = t[e + 1],
                            a = c * (r *= n) - l * (s *= i),
                            o = l * r + c * s;
                          (t[e + 0] = a + f[0]), (t[e + 1] = o + f[1]);
                        }
                        return t;
                      });
                    },
                    I = function (t, e, n, i, r, s, a, o, u) {
                      return new P(t, e, n, i, r, s, a, o, u);
                    };
                  function P(t, e, n, i, r, s, o, u, l) {
                    var c = 0,
                      h = [],
                      p = [];
                    O(t, e, n, i, r, s, o, u, l).forEach(function (t) {
                      var e = new a(
                          t[0],
                          t[1],
                          t[2],
                          t[3],
                          t[4],
                          t[5],
                          t[6],
                          t[7]
                        ),
                        n = e.getTotalLength();
                      (c += n), h.push(n), p.push(e);
                    }),
                      (this.length = c),
                      (this.partialLengths = h),
                      (this.curves = p);
                  }
                  P.prototype = {
                    constructor: P,
                    init: function () {},
                    getTotalLength: function () {
                      return this.length;
                    },
                    getPointAtLength: function (t) {
                      t < 0 ? (t = 0) : t > this.length && (t = this.length);
                      for (
                        var e = this.partialLengths.length - 1;
                        this.partialLengths[e] >= t &&
                        this.partialLengths[e] > 0;

                      )
                        e--;
                      e < this.partialLengths.length - 1 && e++;
                      for (var n = 0, i = 0; i < e; i++)
                        n += this.partialLengths[i];
                      return this.curves[e].getPointAtLength(t - n);
                    },
                    getTangentAtLength: function (t) {
                      t < 0 ? (t = 0) : t > this.length && (t = this.length);
                      for (
                        var e = this.partialLengths.length - 1;
                        this.partialLengths[e] >= t &&
                        this.partialLengths[e] > 0;

                      )
                        e--;
                      e < this.partialLengths.length - 1 && e++;
                      for (var n = 0, i = 0; i < e; i++)
                        n += this.partialLengths[i];
                      return this.curves[e].getTangentAtLength(t - n);
                    },
                    getPropertiesAtLength: function (t) {
                      var e = this.getTangentAtLength(t),
                        n = this.getPointAtLength(t);
                      return { x: n.x, y: n.y, tangentX: e.x, tangentY: e.y };
                    },
                  };
                  var E = function (t, e, n, i) {
                    return new A(t, e, n, i);
                  };
                  function A(t, e, n, i) {
                    (this.x0 = t), (this.x1 = e), (this.y0 = n), (this.y1 = i);
                  }
                  (A.prototype.getTotalLength = function () {
                    return Math.sqrt(
                      Math.pow(this.x0 - this.x1, 2) +
                        Math.pow(this.y0 - this.y1, 2)
                    );
                  }),
                    (A.prototype.getPointAtLength = function (t) {
                      var e =
                          t /
                          Math.sqrt(
                            Math.pow(this.x0 - this.x1, 2) +
                              Math.pow(this.y0 - this.y1, 2)
                          ),
                        n = (this.x1 - this.x0) * e,
                        i = (this.y1 - this.y0) * e;
                      return { x: this.x0 + n, y: this.y0 + i };
                    }),
                    (A.prototype.getTangentAtLength = function () {
                      var t = Math.sqrt(
                        (this.x1 - this.x0) * (this.x1 - this.x0) +
                          (this.y1 - this.y0) * (this.y1 - this.y0)
                      );
                      return {
                        x: (this.x1 - this.x0) / t,
                        y: (this.y1 - this.y0) / t,
                      };
                    }),
                    (A.prototype.getPropertiesAtLength = function (t) {
                      var e = this.getPointAtLength(t),
                        n = this.getTangentAtLength();
                      return { x: e.x, y: e.y, tangentX: n.x, tangentY: n.y };
                    }),
                    (t.svgPathProperties = function (t) {
                      var e = 0,
                        n = [],
                        r = [];
                      function s(t) {
                        if (!t) return null;
                        for (
                          var o, u, l = i(t), c = [0, 0], h = [0, 0], p = 0;
                          p < l.length;
                          p++
                        )
                          "M" === l[p][0]
                            ? ((u = [(c = [l[p][1], l[p][2]])[0], c[1]]),
                              r.push(null))
                            : "m" === l[p][0]
                            ? ((u = [
                                (c = [l[p][1] + c[0], l[p][2] + c[1]])[0],
                                c[1],
                              ]),
                              r.push(null))
                            : "L" === l[p][0]
                            ? ((e += Math.sqrt(
                                Math.pow(c[0] - l[p][1], 2) +
                                  Math.pow(c[1] - l[p][2], 2)
                              )),
                              r.push(new E(c[0], l[p][1], c[1], l[p][2])),
                              (c = [l[p][1], l[p][2]]))
                            : "l" === l[p][0]
                            ? ((e += Math.sqrt(
                                Math.pow(l[p][1], 2) + Math.pow(l[p][2], 2)
                              )),
                              r.push(
                                new E(
                                  c[0],
                                  l[p][1] + c[0],
                                  c[1],
                                  l[p][2] + c[1]
                                )
                              ),
                              (c = [l[p][1] + c[0], l[p][2] + c[1]]))
                            : "H" === l[p][0]
                            ? ((e += Math.abs(c[0] - l[p][1])),
                              r.push(new E(c[0], l[p][1], c[1], c[1])),
                              (c[0] = l[p][1]))
                            : "h" === l[p][0]
                            ? ((e += Math.abs(l[p][1])),
                              r.push(new E(c[0], c[0] + l[p][1], c[1], c[1])),
                              (c[0] = l[p][1] + c[0]))
                            : "V" === l[p][0]
                            ? ((e += Math.abs(c[1] - l[p][1])),
                              r.push(new E(c[0], c[0], c[1], l[p][1])),
                              (c[1] = l[p][1]))
                            : "v" === l[p][0]
                            ? ((e += Math.abs(l[p][1])),
                              r.push(new E(c[0], c[0], c[1], c[1] + l[p][1])),
                              (c[1] = l[p][1] + c[1]))
                            : "z" === l[p][0] || "Z" === l[p][0]
                            ? ((e += Math.sqrt(
                                Math.pow(u[0] - c[0], 2) +
                                  Math.pow(u[1] - c[1], 2)
                              )),
                              r.push(new E(c[0], u[0], c[1], u[1])),
                              (c = [u[0], u[1]]))
                            : "C" === l[p][0]
                            ? ((o = new a(
                                c[0],
                                c[1],
                                l[p][1],
                                l[p][2],
                                l[p][3],
                                l[p][4],
                                l[p][5],
                                l[p][6]
                              )),
                              (e += o.getTotalLength()),
                              (c = [l[p][5], l[p][6]]),
                              r.push(o))
                            : "c" === l[p][0]
                            ? ((o = new a(
                                c[0],
                                c[1],
                                c[0] + l[p][1],
                                c[1] + l[p][2],
                                c[0] + l[p][3],
                                c[1] + l[p][4],
                                c[0] + l[p][5],
                                c[1] + l[p][6]
                              )),
                              (e += o.getTotalLength()),
                              (c = [l[p][5] + c[0], l[p][6] + c[1]]),
                              r.push(o))
                            : "S" === l[p][0]
                            ? ((o =
                                p > 0 &&
                                ["C", "c", "S", "s"].indexOf(l[p - 1][0]) > -1
                                  ? new a(
                                      c[0],
                                      c[1],
                                      2 * c[0] - l[p - 1][l[p - 1].length - 4],
                                      2 * c[1] - l[p - 1][l[p - 1].length - 3],
                                      l[p][1],
                                      l[p][2],
                                      l[p][3],
                                      l[p][4]
                                    )
                                  : new a(
                                      c[0],
                                      c[1],
                                      c[0],
                                      c[1],
                                      l[p][1],
                                      l[p][2],
                                      l[p][3],
                                      l[p][4]
                                    )),
                              (e += o.getTotalLength()),
                              (c = [l[p][3], l[p][4]]),
                              r.push(o))
                            : "s" === l[p][0]
                            ? ((o =
                                p > 0 &&
                                ["C", "c", "S", "s"].indexOf(l[p - 1][0]) > -1
                                  ? new a(
                                      c[0],
                                      c[1],
                                      c[0] + o.d.x - o.c.x,
                                      c[1] + o.d.y - o.c.y,
                                      c[0] + l[p][1],
                                      c[1] + l[p][2],
                                      c[0] + l[p][3],
                                      c[1] + l[p][4]
                                    )
                                  : new a(
                                      c[0],
                                      c[1],
                                      c[0],
                                      c[1],
                                      c[0] + l[p][1],
                                      c[1] + l[p][2],
                                      c[0] + l[p][3],
                                      c[1] + l[p][4]
                                    )),
                              (e += o.getTotalLength()),
                              (c = [l[p][3] + c[0], l[p][4] + c[1]]),
                              r.push(o))
                            : "Q" === l[p][0]
                            ? ((o =
                                c[0] != l[p][1] && c[1] != l[p][2]
                                  ? new a(
                                      c[0],
                                      c[1],
                                      l[p][1],
                                      l[p][2],
                                      l[p][3],
                                      l[p][4]
                                    )
                                  : new E(l[p][1], l[p][3], l[p][2], l[p][4])),
                              (e += o.getTotalLength()),
                              r.push(o),
                              (c = [l[p][3], l[p][4]]),
                              (h = [l[p][1], l[p][2]]))
                            : "q" === l[p][0]
                            ? ((o =
                                0 != l[p][1] || 0 != l[p][2]
                                  ? new a(
                                      c[0],
                                      c[1],
                                      c[0] + l[p][1],
                                      c[1] + l[p][2],
                                      c[0] + l[p][3],
                                      c[1] + l[p][4]
                                    )
                                  : new E(
                                      c[0] + l[p][1],
                                      c[0] + l[p][3],
                                      c[1] + l[p][2],
                                      c[1] + l[p][4]
                                    )),
                              (e += o.getTotalLength()),
                              (h = [c[0] + l[p][1], c[1] + l[p][2]]),
                              (c = [l[p][3] + c[0], l[p][4] + c[1]]),
                              r.push(o))
                            : "T" === l[p][0]
                            ? ((o =
                                p > 0 &&
                                ["Q", "q", "T", "t"].indexOf(l[p - 1][0]) > -1
                                  ? new a(
                                      c[0],
                                      c[1],
                                      2 * c[0] - h[0],
                                      2 * c[1] - h[1],
                                      l[p][1],
                                      l[p][2]
                                    )
                                  : new E(c[0], l[p][1], c[1], l[p][2])),
                              r.push(o),
                              (e += o.getTotalLength()),
                              (h = [2 * c[0] - h[0], 2 * c[1] - h[1]]),
                              (c = [l[p][1], l[p][2]]))
                            : "t" === l[p][0]
                            ? ((o =
                                p > 0 &&
                                ["Q", "q", "T", "t"].indexOf(l[p - 1][0]) > -1
                                  ? new a(
                                      c[0],
                                      c[1],
                                      2 * c[0] - h[0],
                                      2 * c[1] - h[1],
                                      c[0] + l[p][1],
                                      c[1] + l[p][2]
                                    )
                                  : new E(
                                      c[0],
                                      c[0] + l[p][1],
                                      c[1],
                                      c[1] + l[p][2]
                                    )),
                              (e += o.getTotalLength()),
                              (h = [2 * c[0] - h[0], 2 * c[1] - h[1]]),
                              (c = [l[p][1] + c[0], l[p][2] + c[0]]),
                              r.push(o))
                            : "A" === l[p][0]
                            ? ((o = new I(
                                c[0],
                                c[1],
                                l[p][1],
                                l[p][2],
                                l[p][3],
                                l[p][4],
                                l[p][5],
                                l[p][6],
                                l[p][7]
                              )),
                              (e += o.getTotalLength()),
                              (c = [l[p][6], l[p][7]]),
                              r.push(o))
                            : "a" === l[p][0] &&
                              ((o = new I(
                                c[0],
                                c[1],
                                l[p][1],
                                l[p][2],
                                l[p][3],
                                l[p][4],
                                l[p][5],
                                c[0] + l[p][6],
                                c[1] + l[p][7]
                              )),
                              (e += o.getTotalLength()),
                              (c = [c[0] + l[p][6], c[1] + l[p][7]]),
                              r.push(o)),
                            n.push(e);
                        return s;
                      }
                      (s.getTotalLength = function () {
                        return e;
                      }),
                        (s.getPointAtLength = function (t) {
                          var e = o(t);
                          return r[e.i].getPointAtLength(e.fraction);
                        }),
                        (s.getTangentAtLength = function (t) {
                          var e = o(t);
                          return r[e.i].getTangentAtLength(e.fraction);
                        }),
                        (s.getPropertiesAtLength = function (t) {
                          var e = o(t);
                          return r[e.i].getPropertiesAtLength(e.fraction);
                        });
                      var o = function (t) {
                        t < 0 ? (t = 0) : t > e && (t = e);
                        for (var i = n.length - 1; n[i] >= t && n[i] > 0; ) i--;
                        return i++, { fraction: t - n[i - 1], i: i };
                      };
                      return s(t);
                    }),
                    (t.parse = i),
                    (t.Bezier = a),
                    Object.defineProperty(t, "__esModule", { value: !0 });
                })(e);
              })((e = { exports: {} }), e.exports),
              e.exports
            );
          })(),
          M =
            (E = A) &&
            E.__esModule &&
            Object.prototype.hasOwnProperty.call(E, "default")
              ? E.default
              : E;
        function _(t, e) {
          return Math.sqrt(
            (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
          );
        }
        function T(t, e, n) {
          return [t[0] + (e[0] - t[0]) * n, t[1] + (e[1] - t[1]) * n];
        }
        function S(t) {
          return "number" == typeof t && isFinite(t);
        }
        const D =
          'All shapes must be supplied as arrays of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).\nExample valid ways of supplying a shape would be:\n[[0, 0], [10, 0], [10, 10]]\n"M0,0 L10,0 L10,10Z"\n';
        function j(t, e) {
          const n = t.length + e,
            i =
              (function (t) {
                for (
                  var e,
                    n,
                    i = -1,
                    r = t.length,
                    s = t[r - 1],
                    a = s[0],
                    o = s[1],
                    u = 0;
                  ++i < r;

                )
                  (e = a),
                    (n = o),
                    (e -= a = (s = t[i])[0]),
                    (n -= o = s[1]),
                    (u += Math.sqrt(e * e + n * n));
                return u;
              })(t) / e;
          let r = 0,
            s = 0,
            a = i / 2;
          for (; t.length < n; ) {
            let e = t[r],
              n = t[(r + 1) % t.length],
              o = _(e, n);
            a <= s + o
              ? (t.splice(r + 1, 0, o ? T(e, n, (a - s) / o) : e.slice(0)),
                (a += i))
              : ((s += o), r++);
          }
        }
        function V(t, e) {
          let n, i, r;
          if ("string" == typeof t) {
            let n = (function (t, e) {
              let n = (function (t) {
                return new P(t).abs();
              })(t);
              return (
                (function (t) {
                  let e = t.segments || [],
                    n = [];
                  if (!e.length || "M" !== e[0][0]) return !1;
                  for (let t = 0; t < e.length; t++) {
                    let [i, r, s] = e[t];
                    if (("M" === i && t) || "Z" === i) break;
                    if ("M" === i || "L" === i) n.push([r, s]);
                    else if ("H" === i) n.push([r, n[n.length - 1][1]]);
                    else {
                      if ("V" !== i) return !1;
                      n.push([n[n.length - 1][0], r]);
                    }
                  }
                  return !!n.length && { ring: n };
                })(n) ||
                (function (t, e) {
                  let n,
                    i,
                    r = (function (t) {
                      return t
                        .toString()
                        .split("M")
                        .map((t, e) => ((t = t.trim()), e && t ? "M" + t : t))
                        .filter((t) => t);
                    })(t)[0],
                    s = [],
                    a = 3;
                  if (!r) throw new TypeError(D);
                  (i = (function (t) {
                    if (
                      "undefined" != typeof window &&
                      window &&
                      window.document
                    )
                      try {
                        let e = window.document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        );
                        return e.setAttributeNS(null, "d", t), e;
                      } catch (t) {}
                    return M(t);
                  })(r)),
                    (n = i.getTotalLength()),
                    e && S(e) && e > 0 && (a = Math.max(a, Math.ceil(n / e)));
                  for (let t = 0; t < a; t++) {
                    let e = i.getPointAtLength((n * t) / a);
                    s.push([e.x, e.y]);
                  }
                  return { ring: s, skipBisect: !0 };
                })(n, e)
              );
            })(t, e);
            (t = n.ring), (r = n.skipBisect);
          } else if (!Array.isArray(t)) throw new TypeError(D);
          if (
            ((n = t.slice(0)),
            !(function (t) {
              return t.every(function (t) {
                return Array.isArray(t) && t.length >= 2 && S(t[0]) && S(t[1]);
              });
            })(n))
          )
            throw new TypeError(D);
          return (
            n.length > 1 && _(n[0], n[n.length - 1]) < 1e-9 && n.pop(),
            (i = (function (t) {
              for (var e, n = -1, i = t.length, r = t[i - 1], s = 0; ++n < i; )
                (e = r), (r = t[n]), (s += e[1] * r[0] - e[0] * r[1]);
              return s / 2;
            })(n)),
            i > 0 && n.reverse(),
            !r &&
              e &&
              S(e) &&
              e > 0 &&
              (function (t, e = 1 / 0) {
                for (let n = 0; n < t.length; n++) {
                  let i = t[n],
                    r = n === t.length - 1 ? t[0] : t[n + 1];
                  for (; _(i, r) > e; )
                    (r = T(i, r, 0.5)), t.splice(n + 1, 0, r);
                }
              })(n, e),
            n
          );
        }
        function L(t, e) {
          return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
        }
        var N, $;
        1 === (N = L).length &&
          (($ = N),
          (N = function (t, e) {
            return L($(t), e);
          }));
        class B extends n.default.Effect {
          onGetContext() {
            this.interpolator = (function (
              t,
              e,
              { maxSegmentLength: n = 10, string: i = !0 } = {}
            ) {
              let r = (function (t, e, n) {
                let i;
                return (
                  (i = t.length - e.length),
                  j(t, i < 0 ? -1 * i : 0),
                  j(e, i > 0 ? i : 0),
                  (function (t, e) {
                    let n,
                      i,
                      r,
                      s = t.length,
                      a = 1 / 0;
                    for (let r = 0; r < s; r++)
                      (i = 0),
                        e.forEach(function (e, n) {
                          let a = _(t[(r + n) % s], e);
                          i += a * a;
                        }),
                        i < a && ((a = i), (n = r));
                    n && ((r = t.splice(0, n)), t.splice(t.length, 0, ...r));
                  })(t, e),
                  (function (t, e, n) {
                    let i = t.map((t, n) =>
                      (function (t, e) {
                        return function (n) {
                          return t.map((t, i) => t + n * (e[i] - t));
                        };
                      })(t, e[n])
                    );
                    return function (t) {
                      let e = i.map((e) => e(t));
                      return n ? "M" + e.join("L") + "Z" : e;
                    };
                  })(t, e, n)
                );
              })(V(t, n), V(e, n), i);
              return !i || ("string" != typeof t && "string" != typeof e)
                ? r
                : (n) =>
                    n < 1e-4 && "string" == typeof t
                      ? t
                      : 1 - n < 1e-4 && "string" == typeof e
                      ? e
                      : r(n);
            })(this.initialValue, this.animAttributes.d);
          }
          getScratchValue() {
            return this.element.getAttribute("d");
          }
          onProgress(t) {
            this.element.setAttribute("d", this.interpolator(t));
          }
        }
        return {
          npm_name: "@kissmybutton/motorcortex-flubber",
          version: "1.1.7",
          incidents: [
            {
              exportable: B,
              name: "Flubber",
              attributesValidationRules: {
                animatedAttrs: {
                  type: "object",
                  props: { d: { type: "any" } },
                },
              },
            },
          ],
        };
      })(n(0));
    }.call(this, n(7)));
  },
  function (t, e, n) {
    var i, r, s;
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
    !(function (o, u) {
      "object" == a(e) && void 0 !== t
        ? (t.exports = u(n(0)))
        : ((r = [n(0)]),
          void 0 === (s = "function" == typeof (i = u) ? i.apply(e, r) : i) ||
            (t.exports = s));
    })(0, function (t) {
      "use strict";
      var e = (function (t) {
        return t && "object" == a(t) && "default" in t ? t : { default: t };
      })(t);
      function n(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var r = new e.default.TimeCapsule(),
        s = "@kissmybutton/scrollbar_player";
      return (function () {
        function t() {
          var i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          n(this, t),
            (this.clip = i.clip),
            (this.host = this.clip.props.host),
            (this.swipeAxis =
              "vertical" === (i.swipeAxis || "vertical")
                ? "clientY"
                : "clientX");
          var s = i.mode || "free";
          "free" === s
            ? ((this.host.onwheel = this.handlePlainWheel.bind(this)),
              (this.journey = r.startJourney(this.clip)),
              this.host.addEventListener(
                "touchstart",
                this.touchstart.bind(this)
              ),
              this.host.addEventListener(
                "touchmove",
                this.touchmove.bind(this)
              ))
            : "chapters" === s &&
              ((this.transitionTimeout = null),
              (this.transitionSpeed = i.transitionSpeed || 1),
              (this.easing =
                e.default.utils.easings[i.easing || "easeOutQuart"]),
              (this.transitionStart = null),
              i.chapters.sort(function (t, e) {
                return t.millisecond - e.millisecond;
              }),
              (this.chapters = i.chapters),
              (this.transitioning = !1),
              (this.host.onwheel = this.handleChapterWheel.bind(this)),
              this.host.addEventListener(
                "touchstart",
                this.touchstart.bind(this)
              ),
              this.host.addEventListener(
                "touchmove",
                this.touchmove.bind(this)
              ),
              this.host.addEventListener(
                "touchend",
                this.chapterTouchend.bind(this)
              ));
          var a = 5 / (i.wheelSpeed || 5);
          this.speed = 1 / a;
          var o = { display: !0, position: "right", color: "purple" };
          void 0 !== i.progressBar && Object.assign(o, i.progressBar),
            this.setupScrollbar(o);
        }
        var a, o;
        return (
          (a = t),
          (o = [
            {
              key: "setupScrollbar",
              value: function (t) {
                var e = this;
                if (!1 !== t.display) {
                  var n,
                    i,
                    r = document.createElement("div");
                  switch (
                    (r.setAttribute("id", "".concat(s, "-scrollbarId")),
                    t.position)
                  ) {
                    case "left":
                      (n = "left:0px; top: 0px; width: 2px; height: 0%;"),
                        (i = "height");
                      break;
                    case "right":
                      (n = "right:0px; top: 0px; width: 2px; height: 0%;"),
                        (i = "height");
                      break;
                    case "top":
                      (n = "top:0px; left: 0px; height: 2px; width: 0%;"),
                        (i = "width");
                      break;
                    case "bottom":
                      (n = "bottom:0px; left: 0px; height: 2px; width: 0%;"),
                        (i = "width");
                  }
                  r.setAttribute(
                    "style",
                    ""
                      .concat(n, " position:absolute; background: ")
                      .concat(t.color, ";")
                  ),
                    this.host.appendChild(r),
                    this.clip.subscribe(
                      "".concat(s, "_").concat(new Date().getTime()),
                      function (t) {
                        r.style[i] = "".concat(
                          (100 * t) / e.clip.duration,
                          "%"
                        );
                      }
                    );
                }
              },
            },
            {
              key: "touchstart",
              value: function (t) {
                t.preventDefault(),
                  1 === t.touches.length &&
                    ((this.previousTouch = t.touches[0][this.swipeAxis]),
                    (this.transitioning = !1));
              },
            },
            {
              key: "touchmove",
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
                  s = this.clip.runTimeInfo.currentMillisecond + n;
                s < 0
                  ? ((s = 0), (n = 0))
                  : s > this.clip.duration &&
                    ((s = this.clip.duration), (n = 0)),
                  i.destination(s);
              },
            },
            {
              key: "chapterTouchend",
              value: function (t) {
                var e = this;
                if (
                  (t.preventDefault(),
                  "fw" === this.direction &&
                    this.clip.runTimeInfo.currentMillisecond !==
                      this.clip.duration)
                ) {
                  var n = this.getNextChapter(
                    this.clip.runTimeInfo.currentMillisecond
                  );
                  this.transitionTimeout = setTimeout(function () {
                    e.transitionToChapter(n, "fw");
                  }, this.latency);
                } else if (
                  "bw" === this.direction &&
                  0 !== this.clip.runTimeInfo.currentMillisecond
                ) {
                  var i = this.getPreviousChapter(
                    this.clip.runTimeInfo.currentMillisecond
                  );
                  this.transitionTimeout = setTimeout(function () {
                    e.transitionToChapter(i, "bw");
                  }, this.latency);
                }
              },
            },
            {
              key: "getNextChapter",
              value: function (t) {
                for (var e = 0; e < this.chapters.length; e++) {
                  var n = this.chapters[e];
                  if (n.millisecond > t) return n.millisecond;
                }
                return this.clip.duration;
              },
            },
            {
              key: "getPreviousChapter",
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
                  s = this.clip.runTimeInfo.currentMillisecond + n;
                if (
                  (s < 0
                    ? ((s = 0), (n = 0))
                    : s > this.clip.duration &&
                      ((s = this.clip.duration), (n = 0)),
                  n > 0)
                ) {
                  var a = this.getNextChapter(s);
                  this.transitionTimeout = setTimeout(function () {
                    e.transitionToChapter(a, "fw");
                  }, this.latency);
                } else if (n < 0) {
                  var o = this.getPreviousChapter(s);
                  this.transitionTimeout = setTimeout(function () {
                    e.transitionToChapter(o, "bw");
                  }, this.latency);
                }
                i.destination(s);
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
                  window.requestAnimationFrame(this.step.bind(this));
              },
            },
            {
              key: "step",
              value: function (t) {
                null === this.transitionStart && (this.transitionStart = t);
                var e,
                  n = t - this.transitionStart,
                  i = !1;
                if (
                  ("fw" === this.direction
                    ? (e = this.startMillisecond + n * this.transitionSpeed) >
                        this.targetMillisecond &&
                      ((e = this.targetMillisecond), (i = !0))
                    : (e = this.startMillisecond - n * this.transitionSpeed) <
                        this.targetMillisecond &&
                      ((e = this.targetMillisecond), (i = !0)),
                  !1 !== this.transitioning)
                ) {
                  var r,
                    s =
                      Math.abs(e - this.startMillisecond) /
                      Math.abs(this.targetMillisecond - this.startMillisecond);
                  (r =
                    "fw" === this.direction
                      ? this.startMillisecond +
                        this.easing(s) *
                          (this.targetMillisecond - this.startMillisecond)
                      : this.startMillisecond -
                        this.easing(s) *
                          (this.startMillisecond - this.targetMillisecond)),
                    this.journey.station(r),
                    i
                      ? this.journey.destination()
                      : window.requestAnimationFrame(this.step.bind(this));
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
          ]) && i(a.prototype, o),
          t
        );
      })();
    });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(0),
      r = n(1),
      s = n.n(r),
      a = n(2),
      o = n.n(a),
      u = Object(i.loadPlugin)(s.a),
      l = new i.HTMLClip({
        id: "my-clip",
        host: document.getElementById("clip-container"),
        html:
          '\n    <div class="wrapper">\n      <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px">\n        <g transform="scale(30)">\n          <path id="flubber" d="M1,0 L2,2 L0,2 Z"></path>\n        </g>\n      </svg>\n    </div>',
        css:
          "\n    .wrapper{\n      background:white;\n      display:flex;\n      align-items:center;\n      justify-content:center;\n      width:100%;\n      height:100%;\n    }\n    #flubber{\n      fill: #8b00ff;\n      display:block;\n    }\n  ",
        containerParams: { width: "100%", height: "90%" },
      }),
      c = new u.Flubber(
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
      h = new u.Flubber(
        {
          animatedAttrs: { d: "M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z" },
        },
        { selector: "#flubber", duration: 2e3 }
      );
    l.addIncident(c, 0),
      l.addIncident(h, 2e3),
      new o.a({
        clip: l,
        wheelSpeed: 5,
        mode: "free",
        chapters: [
          { millisecond: 2e3, name: "chapter 1" },
          { millisecond: 4e3, name: "chapter 2" },
        ],
        transitionSpeed: 2,
        swipeAxis: "horizontal",
        progressBar: { color: "pink", position: "bottom" },
      });
  },
  function (t, e) {},
  function (t, e, n) {
    (function (t) {
      function n(t, e) {
        for (var n = 0, i = t.length - 1; i >= 0; i--) {
          var r = t[i];
          "." === r
            ? t.splice(i, 1)
            : ".." === r
            ? (t.splice(i, 1), n++)
            : n && (t.splice(i, 1), n--);
        }
        if (e) for (; n--; n) t.unshift("..");
        return t;
      }
      function i(t, e) {
        if (t.filter) return t.filter(e);
        for (var n = [], i = 0; i < t.length; i++)
          e(t[i], i, t) && n.push(t[i]);
        return n;
      }
      (e.resolve = function () {
        for (var e = "", r = !1, s = arguments.length - 1; s >= -1 && !r; s--) {
          var a = s >= 0 ? arguments[s] : t.cwd();
          if ("string" != typeof a)
            throw new TypeError("Arguments to path.resolve must be strings");
          a && ((e = a + "/" + e), (r = "/" === a.charAt(0)));
        }
        return (
          (r ? "/" : "") +
            (e = n(
              i(e.split("/"), function (t) {
                return !!t;
              }),
              !r
            ).join("/")) || "."
        );
      }),
        (e.normalize = function (t) {
          var s = e.isAbsolute(t),
            a = "/" === r(t, -1);
          return (
            (t = n(
              i(t.split("/"), function (t) {
                return !!t;
              }),
              !s
            ).join("/")) ||
              s ||
              (t = "."),
            t && a && (t += "/"),
            (s ? "/" : "") + t
          );
        }),
        (e.isAbsolute = function (t) {
          return "/" === t.charAt(0);
        }),
        (e.join = function () {
          var t = Array.prototype.slice.call(arguments, 0);
          return e.normalize(
            i(t, function (t, e) {
              if ("string" != typeof t)
                throw new TypeError("Arguments to path.join must be strings");
              return t;
            }).join("/")
          );
        }),
        (e.relative = function (t, n) {
          function i(t) {
            for (var e = 0; e < t.length && "" === t[e]; e++);
            for (var n = t.length - 1; n >= 0 && "" === t[n]; n--);
            return e > n ? [] : t.slice(e, n - e + 1);
          }
          (t = e.resolve(t).substr(1)), (n = e.resolve(n).substr(1));
          for (
            var r = i(t.split("/")),
              s = i(n.split("/")),
              a = Math.min(r.length, s.length),
              o = a,
              u = 0;
            u < a;
            u++
          )
            if (r[u] !== s[u]) {
              o = u;
              break;
            }
          var l = [];
          for (u = o; u < r.length; u++) l.push("..");
          return (l = l.concat(s.slice(o))).join("/");
        }),
        (e.sep = "/"),
        (e.delimiter = ":"),
        (e.dirname = function (t) {
          if (("string" != typeof t && (t += ""), 0 === t.length)) return ".";
          for (
            var e = t.charCodeAt(0),
              n = 47 === e,
              i = -1,
              r = !0,
              s = t.length - 1;
            s >= 1;
            --s
          )
            if (47 === (e = t.charCodeAt(s))) {
              if (!r) {
                i = s;
                break;
              }
            } else r = !1;
          return -1 === i
            ? n
              ? "/"
              : "."
            : n && 1 === i
            ? "/"
            : t.slice(0, i);
        }),
        (e.basename = function (t, e) {
          var n = (function (t) {
            "string" != typeof t && (t += "");
            var e,
              n = 0,
              i = -1,
              r = !0;
            for (e = t.length - 1; e >= 0; --e)
              if (47 === t.charCodeAt(e)) {
                if (!r) {
                  n = e + 1;
                  break;
                }
              } else -1 === i && ((r = !1), (i = e + 1));
            return -1 === i ? "" : t.slice(n, i);
          })(t);
          return (
            e &&
              n.substr(-1 * e.length) === e &&
              (n = n.substr(0, n.length - e.length)),
            n
          );
        }),
        (e.extname = function (t) {
          "string" != typeof t && (t += "");
          for (
            var e = -1, n = 0, i = -1, r = !0, s = 0, a = t.length - 1;
            a >= 0;
            --a
          ) {
            var o = t.charCodeAt(a);
            if (47 !== o)
              -1 === i && ((r = !1), (i = a + 1)),
                46 === o
                  ? -1 === e
                    ? (e = a)
                    : 1 !== s && (s = 1)
                  : -1 !== e && (s = -1);
            else if (!r) {
              n = a + 1;
              break;
            }
          }
          return -1 === e ||
            -1 === i ||
            0 === s ||
            (1 === s && e === i - 1 && e === n + 1)
            ? ""
            : t.slice(e, i);
        });
      var r =
        "b" === "ab".substr(-1)
          ? function (t, e, n) {
              return t.substr(e, n);
            }
          : function (t, e, n) {
              return e < 0 && (e = t.length + e), t.substr(e, n);
            };
    }.call(this, n(6)));
  },
  function (t, e) {
    var n,
      i,
      r = (t.exports = {});
    function s() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function o(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === s || !n) && setTimeout)
        return (n = setTimeout), setTimeout(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : s;
      } catch (t) {
        n = s;
      }
      try {
        i = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (t) {
        i = a;
      }
    })();
    var u,
      l = [],
      c = !1,
      h = -1;
    function p() {
      c &&
        u &&
        ((c = !1), u.length ? (l = u.concat(l)) : (h = -1), l.length && d());
    }
    function d() {
      if (!c) {
        var t = o(p);
        c = !0;
        for (var e = l.length; e; ) {
          for (u = l, l = []; ++h < e; ) u && u[h].run();
          (h = -1), (e = l.length);
        }
        (u = null),
          (c = !1),
          (function (t) {
            if (i === clearTimeout) return clearTimeout(t);
            if ((i === a || !i) && clearTimeout)
              return (i = clearTimeout), clearTimeout(t);
            try {
              i(t);
            } catch (e) {
              try {
                return i.call(null, t);
              } catch (e) {
                return i.call(this, t);
              }
            }
          })(t);
      }
    }
    function f(t, e) {
      (this.fun = t), (this.array = e);
    }
    function m() {}
    (r.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      l.push(new f(t, e)), 1 !== l.length || c || o(d);
    }),
      (f.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (r.title = "browser"),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ""),
      (r.versions = {}),
      (r.on = m),
      (r.addListener = m),
      (r.once = m),
      (r.off = m),
      (r.removeListener = m),
      (r.removeAllListeners = m),
      (r.emit = m),
      (r.prependListener = m),
      (r.prependOnceListener = m),
      (r.listeners = function (t) {
        return [];
      }),
      (r.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (r.cwd = function () {
        return "/";
      }),
      (r.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (r.umask = function () {
        return 0;
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
]);
