parcelRequire = (function (t, e, i, n) {
  var r,
    s = "function" == typeof parcelRequire && parcelRequire,
    o = "function" == typeof require && require;
  function a(i, n) {
    if (!e[i]) {
      if (!t[i]) {
        var r = "function" == typeof parcelRequire && parcelRequire;
        if (!n && r) return r(i, !0);
        if (s) return s(i, !0);
        if (o && "string" == typeof i) return o(i);
        var l = new Error("Cannot find module '" + i + "'");
        throw ((l.code = "MODULE_NOT_FOUND"), l);
      }
      (h.resolve = function (e) {
        return t[i][1][e] || e;
      }),
        (h.cache = {});
      var c = (e[i] = new a.Module(i));
      t[i][0].call(c.exports, h, c, c.exports, this);
    }
    return e[i].exports;
    function h(t) {
      return a(h.resolve(t));
    }
  }
  (a.isParcelRequire = !0),
    (a.Module = function (t) {
      (this.id = t), (this.bundle = a), (this.exports = {});
    }),
    (a.modules = t),
    (a.cache = e),
    (a.parent = s),
    (a.register = function (e, i) {
      t[e] = [
        function (t, e) {
          e.exports = i;
        },
        {},
      ];
    });
  for (var l = 0; l < i.length; l++)
    try {
      a(i[l]);
    } catch (t) {
      r || (r = t);
    }
  if (i.length) {
    var c = a(i[i.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = c)
      : "function" == typeof define &&
        define.amd &&
        define(function () {
          return c;
        });
  }
  if (((parcelRequire = a), r)) throw r;
  return a;
})(
  {
    BQvw: [
      function (t, e, i) {
        var n;
        !(function (t, i) {
          "function" == typeof n && n.amd
            ? n(i)
            : "object" == typeof e && e.exports
            ? (e.exports = i())
            : (t.EvEmitter = i());
        })("undefined" != typeof window ? window : this, function () {
          "use strict";
          function t() {}
          var e = t.prototype;
          return (
            (e.on = function (t, e) {
              if (t && e) {
                var i = (this._events = this._events || {}),
                  n = (i[t] = i[t] || []);
                return -1 == n.indexOf(e) && n.push(e), this;
              }
            }),
            (e.once = function (t, e) {
              if (t && e) {
                this.on(t, e);
                var i = (this._onceEvents = this._onceEvents || {});
                return ((i[t] = i[t] || {})[e] = !0), this;
              }
            }),
            (e.off = function (t, e) {
              var i = this._events && this._events[t];
              if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this;
              }
            }),
            (e.emitEvent = function (t, e) {
              var i = this._events && this._events[t];
              if (i && i.length) {
                (i = i.slice(0)), (e = e || []);
                for (
                  var n = this._onceEvents && this._onceEvents[t], r = 0;
                  r < i.length;
                  r++
                ) {
                  var s = i[r];
                  n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e);
                }
                return this;
              }
            }),
            (e.allOff = function () {
              delete this._events, delete this._onceEvents;
            }),
            t
          );
        });
      },
      {},
    ],
    lc7f: [
      function (t, e, i) {
        /*!
         * imagesLoaded v4.1.4
         * JavaScript is all like "You images are done yet or what?"
         * MIT License
         */
        !(function (i, n) {
          "use strict";
          "object" == typeof e && e.exports
            ? (e.exports = n(i, t("ev-emitter")))
            : (i.imagesLoaded = n(i, i.EvEmitter));
        })("undefined" != typeof window ? window : this, function (t, e) {
          "use strict";
          var i = t.jQuery,
            n = t.console;
          function r(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
          }
          var s = Array.prototype.slice;
          function o(t, e, a) {
            if (!(this instanceof o)) return new o(t, e, a);
            var l,
              c = t;
            ("string" == typeof t && (c = document.querySelectorAll(t)), c)
              ? ((this.elements =
                  ((l = c),
                  Array.isArray(l)
                    ? l
                    : "object" == typeof l && "number" == typeof l.length
                    ? s.call(l)
                    : [l])),
                (this.options = r({}, this.options)),
                "function" == typeof e ? (a = e) : r(this.options, e),
                a && this.on("always", a),
                this.getImages(),
                i && (this.jqDeferred = new i.Deferred()),
                setTimeout(this.check.bind(this)))
              : n.error("Bad element for imagesLoaded " + (c || t));
          }
          (o.prototype = Object.create(e.prototype)),
            (o.prototype.options = {}),
            (o.prototype.getImages = function () {
              (this.images = []),
                this.elements.forEach(this.addElementImages, this);
            }),
            (o.prototype.addElementImages = function (t) {
              "IMG" == t.nodeName && this.addImage(t),
                !0 === this.options.background &&
                  this.addElementBackgroundImages(t);
              var e = t.nodeType;
              if (e && a[e]) {
                for (
                  var i = t.querySelectorAll("img"), n = 0;
                  n < i.length;
                  n++
                ) {
                  var r = i[n];
                  this.addImage(r);
                }
                if ("string" == typeof this.options.background) {
                  var s = t.querySelectorAll(this.options.background);
                  for (n = 0; n < s.length; n++) {
                    var o = s[n];
                    this.addElementBackgroundImages(o);
                  }
                }
              }
            });
          var a = { 1: !0, 9: !0, 11: !0 };
          function l(t) {
            this.img = t;
          }
          function c(t, e) {
            (this.url = t), (this.element = e), (this.img = new Image());
          }
          return (
            (o.prototype.addElementBackgroundImages = function (t) {
              var e = getComputedStyle(t);
              if (e)
                for (
                  var i = /url\((['"])?(.*?)\1\)/gi,
                    n = i.exec(e.backgroundImage);
                  null !== n;

                ) {
                  var r = n && n[2];
                  r && this.addBackground(r, t),
                    (n = i.exec(e.backgroundImage));
                }
            }),
            (o.prototype.addImage = function (t) {
              var e = new l(t);
              this.images.push(e);
            }),
            (o.prototype.addBackground = function (t, e) {
              var i = new c(t, e);
              this.images.push(i);
            }),
            (o.prototype.check = function () {
              var t = this;
              function e(e, i, n) {
                setTimeout(function () {
                  t.progress(e, i, n);
                });
              }
              (this.progressedCount = 0),
                (this.hasAnyBroken = !1),
                this.images.length
                  ? this.images.forEach(function (t) {
                      t.once("progress", e), t.check();
                    })
                  : this.complete();
            }),
            (o.prototype.progress = function (t, e, i) {
              this.progressedCount++,
                (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
                this.emitEvent("progress", [this, t, e]),
                this.jqDeferred &&
                  this.jqDeferred.notify &&
                  this.jqDeferred.notify(this, t),
                this.progressedCount == this.images.length && this.complete(),
                this.options.debug && n && n.log("progress: " + i, t, e);
            }),
            (o.prototype.complete = function () {
              var t = this.hasAnyBroken ? "fail" : "done";
              if (
                ((this.isComplete = !0),
                this.emitEvent(t, [this]),
                this.emitEvent("always", [this]),
                this.jqDeferred)
              ) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this);
              }
            }),
            (l.prototype = Object.create(e.prototype)),
            (l.prototype.check = function () {
              this.getIsImageComplete()
                ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                : ((this.proxyImage = new Image()),
                  this.proxyImage.addEventListener("load", this),
                  this.proxyImage.addEventListener("error", this),
                  this.img.addEventListener("load", this),
                  this.img.addEventListener("error", this),
                  (this.proxyImage.src = this.img.src));
            }),
            (l.prototype.getIsImageComplete = function () {
              return this.img.complete && this.img.naturalWidth;
            }),
            (l.prototype.confirm = function (t, e) {
              (this.isLoaded = t),
                this.emitEvent("progress", [this, this.img, e]);
            }),
            (l.prototype.handleEvent = function (t) {
              var e = "on" + t.type;
              this[e] && this[e](t);
            }),
            (l.prototype.onload = function () {
              this.confirm(!0, "onload"), this.unbindEvents();
            }),
            (l.prototype.onerror = function () {
              this.confirm(!1, "onerror"), this.unbindEvents();
            }),
            (l.prototype.unbindEvents = function () {
              this.proxyImage.removeEventListener("load", this),
                this.proxyImage.removeEventListener("error", this),
                this.img.removeEventListener("load", this),
                this.img.removeEventListener("error", this);
            }),
            (c.prototype = Object.create(l.prototype)),
            (c.prototype.check = function () {
              this.img.addEventListener("load", this),
                this.img.addEventListener("error", this),
                (this.img.src = this.url),
                this.getIsImageComplete() &&
                  (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
                  this.unbindEvents());
            }),
            (c.prototype.unbindEvents = function () {
              this.img.removeEventListener("load", this),
                this.img.removeEventListener("error", this);
            }),
            (c.prototype.confirm = function (t, e) {
              (this.isLoaded = t),
                this.emitEvent("progress", [this, this.element, e]);
            }),
            (o.makeJQueryPlugin = function (e) {
              (e = e || t.jQuery) &&
                ((i = e).fn.imagesLoaded = function (t, e) {
                  return new o(this, t, e).jqDeferred.promise(i(this));
                });
            }),
            o.makeJQueryPlugin(),
            o
          );
        });
      },
      { "ev-emitter": "BQvw" },
    ],
    MgTz: [
      function (t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.preloadFonts =
            i.preloadImages =
            i.getMousePos =
            i.randomNumber =
            i.clamp =
            i.lerp =
            i.map =
              void 0);
        var n = t("imagesloaded");
        i.map = function (t, e, i, n, r) {
          return ((t - e) * (r - n)) / (i - e) + n;
        };
        i.lerp = function (t, e, i) {
          return (1 - i) * t + i * e;
        };
        i.clamp = function (t, e, i) {
          return t <= e ? e : t >= i ? i : t;
        };
        i.randomNumber = function (t, e) {
          return Math.floor(Math.random() * (e - t + 1) + t);
        };
        i.getMousePos = function (t) {
          return { x: t.clientX, y: t.clientY };
        };
        i.preloadImages = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "img";
          return new Promise(function (e) {
            n(document.querySelectorAll(t), { background: !0 }, e);
          });
        };
        i.preloadFonts = function (t) {
          return new Promise(function (e) {
            WebFont.load({ typekit: { id: t }, active: e });
          });
        };
      },
      { imagesloaded: "lc7f" },
    ],
    TNS6: [
      function (t, e, i) {
        "use strict";
        function n(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function r(t, e) {
          (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e);
        }
        /*!
         * GSAP 3.5.1
         * https://greensock.com
         *
         * @license Copyright 2008-2020, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ Object.defineProperty(i, "__esModule", { value: !0 }),
          (i._getCache =
            i._getSetter =
            i._missingPlugin =
            i._round =
            i._roundModifier =
            i._config =
            i._ticker =
            i._plugins =
            i._checkPlugin =
            i._replaceRandom =
            i._colorStringFilter =
            i._sortPropTweensByPriority =
            i._forEachName =
            i._removeLinkedListItem =
            i._setDefaults =
            i._relExp =
            i._renderComplexString =
            i._isUndefined =
            i._isString =
            i._numWithUnitExp =
            i._numExp =
            i._getProperty =
            i.shuffle =
            i.interpolate =
            i.unitize =
            i.pipe =
            i.mapRange =
            i.toArray =
            i.splitColor =
            i.clamp =
            i.getUnit =
            i.normalize =
            i.snap =
            i.random =
            i.distribute =
            i.wrapYoyo =
            i.wrap =
            i.Circ =
            i.Expo =
            i.Sine =
            i.Bounce =
            i.SteppedEase =
            i.Back =
            i.Elastic =
            i.Strong =
            i.Quint =
            i.Quart =
            i.Cubic =
            i.Quad =
            i.Linear =
            i.Power4 =
            i.Power3 =
            i.Power2 =
            i.Power1 =
            i.Power0 =
            i.default =
            i.gsap =
            i.PropTween =
            i.TweenLite =
            i.TweenMax =
            i.Tween =
            i.TimelineLite =
            i.TimelineMax =
            i.Timeline =
            i.Animation =
            i.GSCache =
              void 0);
        var s,
          o,
          a,
          l,
          c,
          h,
          u,
          d,
          f,
          p,
          m,
          g,
          v,
          y,
          _,
          b,
          w,
          x,
          T,
          S,
          k,
          E,
          O,
          A,
          M,
          P,
          C,
          D = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: { lineHeight: "" },
          },
          L = { duration: 0.5, overwrite: !1, delay: 0 },
          B = 1e8,
          j = 1e-8,
          R = 2 * Math.PI,
          I = R / 4,
          z = 0,
          F = Math.sqrt,
          W = Math.cos,
          Y = Math.sin,
          H = function (t) {
            return "string" == typeof t;
          },
          q = function (t) {
            return "function" == typeof t;
          },
          X = function (t) {
            return "number" == typeof t;
          },
          N = function (t) {
            return void 0 === t;
          },
          U = function (t) {
            return "object" == typeof t;
          },
          V = function (t) {
            return !1 !== t;
          },
          Q = function () {
            return "undefined" != typeof window;
          },
          G = function (t) {
            return q(t) || H(t);
          },
          K =
            ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
            function () {},
          $ = Array.isArray,
          Z = /(?:-?\.?\d|\.)+/gi,
          J = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
          tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
          et = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
          it = /[+-]=-?[\.\d]+/,
          nt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
          rt = {},
          st = {},
          ot = function (t) {
            return (st = Dt(t, rt)) && Ti;
          },
          at = function (t, e) {
            return console.warn(
              "Invalid property",
              t,
              "set to",
              e,
              "Missing plugin? gsap.registerPlugin()"
            );
          },
          lt = function (t, e) {
            return !e && console.warn(t);
          },
          ct = function (t, e) {
            return (t && (rt[t] = e) && st && (st[t] = e)) || rt;
          },
          ht = function () {
            return 0;
          },
          ut = {},
          dt = [],
          ft = {},
          pt = {},
          mt = {},
          gt = 30,
          vt = [],
          yt = "",
          _t = function (t) {
            var e,
              i,
              n = t[0];
            if ((U(n) || q(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
              for (i = vt.length; i-- && !vt[i].targetTest(n); );
              e = vt[i];
            }
            for (i = t.length; i--; )
              (t[i] && (t[i]._gsap || (t[i]._gsap = new Qe(t[i], e)))) ||
                t.splice(i, 1);
            return t;
          },
          bt = function (t) {
            return t._gsap || _t(ae(t))[0]._gsap;
          },
          wt = function (t, e, i) {
            return (i = t[e]) && q(i)
              ? t[e]()
              : (N(i) && t.getAttribute && t.getAttribute(e)) || i;
          },
          xt = function (t, e) {
            return (t = t.split(",")).forEach(e) || t;
          },
          Tt = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          St = function (t, e) {
            for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; );
            return n < i;
          },
          kt = function (t, e, i) {
            var n,
              r = X(t[1]),
              s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
              o = t[s];
            if ((r && (o.duration = t[1]), (o.parent = i), e)) {
              for (n = o; i && !("immediateRender" in n); )
                (n = i.vars.defaults || {}),
                  (i = V(i.vars.inherit) && i.parent);
              (o.immediateRender = V(n.immediateRender)),
                e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
            }
            return o;
          },
          Et = function () {
            var t,
              e,
              i = dt.length,
              n = dt.slice(0);
            for (ft = {}, dt.length = 0, t = 0; t < i; t++)
              (e = n[t]) &&
                e._lazy &&
                (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
          },
          Ot = function (t, e, i, n) {
            dt.length && Et(), t.render(e, i, n), dt.length && Et();
          },
          At = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(nt).length < 2
              ? e
              : H(t)
              ? t.trim()
              : t;
          },
          Mt = function (t) {
            return t;
          },
          Pt = function (t, e) {
            for (var i in e) i in t || (t[i] = e[i]);
            return t;
          },
          Ct = function (t, e) {
            for (var i in e)
              i in t || "duration" === i || "ease" === i || (t[i] = e[i]);
          },
          Dt = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
          },
          Lt = function t(e, i) {
            for (var n in i)
              e[n] = U(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n];
            return e;
          },
          Bt = function (t, e) {
            var i,
              n = {};
            for (i in t) i in e || (n[i] = t[i]);
            return n;
          },
          jt = function (t) {
            var e = t.parent || s,
              i = t.keyframes ? Ct : Pt;
            if (V(t.inherit))
              for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
            return t;
          },
          Rt = function (t, e, i, n) {
            void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
            var r = e._prev,
              s = e._next;
            r ? (r._next = s) : t[i] === e && (t[i] = s),
              s ? (s._prev = r) : t[n] === e && (t[n] = r),
              (e._next = e._prev = e.parent = null);
          },
          It = function (t, e) {
            t.parent &&
              (!e || t.parent.autoRemoveChildren) &&
              t.parent.remove(t),
              (t._act = 0);
          },
          zt = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
              for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
            return t;
          },
          Ft = function (t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          },
          Wt = function t(e) {
            return !e || (e._ts && t(e.parent));
          },
          Yt = function (t) {
            return t._repeat
              ? Ht(t._tTime, (t = t.duration() + t._rDelay)) * t
              : 0;
          },
          Ht = function (t, e) {
            return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
          },
          qt = function (t, e) {
            return (
              (t - e._start) * e._ts +
              (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            );
          },
          Xt = function (t) {
            return (t._end = Tt(
              t._start + (t._tDur / Math.abs(t._ts || t._rts || j) || 0)
            ));
          },
          Nt = function (t, e) {
            var i = t._dp;
            return (
              i &&
                i.smoothChildTiming &&
                t._ts &&
                ((t._start = Tt(
                  t._dp._time -
                    (t._ts > 0
                      ? e / t._ts
                      : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
                )),
                Xt(t),
                i._dirty || zt(i, t)),
              t
            );
          },
          Ut = function (t, e) {
            var i;
            if (
              ((e._time || (e._initted && !e._dur)) &&
                ((i = qt(t.rawTime(), e)),
                (!e._dur || ee(0, e.totalDuration(), i) - e._tTime > j) &&
                  e.render(i, !0)),
              zt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
            ) {
              if (t._dur < t.duration())
                for (i = t; i._dp; )
                  i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
              t._zTime = -1e-8;
            }
          },
          Vt = function (t, e, i, n) {
            return (
              e.parent && It(e),
              (e._start = Tt(i + e._delay)),
              (e._end = Tt(
                e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
              )),
              (function (t, e, i, n, r) {
                void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
                var s,
                  o = t[n];
                if (r) for (s = e[r]; o && o[r] > s; ) o = o._prev;
                o
                  ? ((e._next = o._next), (o._next = e))
                  : ((e._next = t[i]), (t[i] = e)),
                  e._next ? (e._next._prev = e) : (t[n] = e),
                  (e._prev = o),
                  (e.parent = e._dp = t);
              })(t, e, "_first", "_last", t._sort ? "_start" : 0),
              (t._recent = e),
              n || Ut(t, e),
              t
            );
          },
          Qt = function (t, e) {
            return (
              (rt.ScrollTrigger || at("scrollTrigger", e)) &&
              rt.ScrollTrigger.create(e, t)
            );
          },
          Gt = function (t, e, i, n) {
            return (
              ei(t, e),
              t._initted
                ? !i &&
                  t._pt &&
                  ((t._dur && !1 !== t.vars.lazy) ||
                    (!t._dur && t.vars.lazy)) &&
                  h !== je.frame
                  ? (dt.push(t), (t._lazy = [e, n]), 1)
                  : void 0
                : 1
            );
          },
          Kt = function (t, e, i, n) {
            var r = t._repeat,
              s = Tt(e) || 0,
              o = t._tTime / t._tDur;
            return (
              o && !n && (t._time *= s / t._dur),
              (t._dur = s),
              (t._tDur = r
                ? r < 0
                  ? 1e10
                  : Tt(s * (r + 1) + t._rDelay * r)
                : s),
              o && !n ? Nt(t, (t._tTime = t._tDur * o)) : t.parent && Xt(t),
              i || zt(t.parent, t),
              t
            );
          },
          $t = function (t) {
            return t instanceof Ke ? zt(t) : Kt(t, t._dur);
          },
          Zt = { _start: 0, endTime: ht },
          Jt = function t(e, i) {
            var n,
              r,
              s = e.labels,
              o = e._recent || Zt,
              a = e.duration() >= B ? o.endTime(!1) : e._dur;
            return H(i) && (isNaN(i) || i in s)
              ? "<" === (n = i.charAt(0)) || ">" === n
                ? ("<" === n ? o._start : o.endTime(o._repeat >= 0)) +
                  (parseFloat(i.substr(1)) || 0)
                : (n = i.indexOf("=")) < 0
                ? (i in s || (s[i] = a), s[i])
                : ((r = +(i.charAt(n - 1) + i.substr(n + 1))),
                  n > 1 ? t(e, i.substr(0, n - 1)) + r : a + r)
              : null == i
              ? a
              : +i;
          },
          te = function (t, e) {
            return t || 0 === t ? e(t) : e;
          },
          ee = function (t, e, i) {
            return i < t ? t : i > e ? e : i;
          },
          ie = function (t) {
            return (t = (t + "").substr((parseFloat(t) + "").length)) &&
              isNaN(t)
              ? t
              : "";
          },
          ne = function (t, e, i) {
            return te(i, function (i) {
              return ee(t, e, i);
            });
          },
          re = [].slice,
          se = function (t, e) {
            return (
              t &&
              U(t) &&
              "length" in t &&
              ((!e && !t.length) || (t.length - 1 in t && U(t[0]))) &&
              !t.nodeType &&
              t !== o
            );
          },
          oe = function (t, e, i) {
            return (
              void 0 === i && (i = []),
              t.forEach(function (t) {
                var n;
                return (H(t) && !e) || se(t, 1)
                  ? (n = i).push.apply(n, ae(t))
                  : i.push(t);
              }) || i
            );
          },
          ae = function (t, e) {
            return !H(t) || e || (!a && Re())
              ? $(t)
                ? oe(t, e)
                : se(t)
                ? re.call(t, 0)
                : t
                ? [t]
                : []
              : re.call(l.querySelectorAll(t), 0);
          },
          le = function (t) {
            return t.sort(function () {
              return 0.5 - Math.random();
            });
          },
          ce = function (t) {
            if (q(t)) return t;
            var e = U(t) ? t : { each: t },
              i = qe(e.ease),
              n = e.from || 0,
              r = parseFloat(e.base) || 0,
              s = {},
              o = n > 0 && n < 1,
              a = isNaN(n) || o,
              l = e.axis,
              c = n,
              h = n;
            return (
              H(n)
                ? (c = h = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
                : !o && a && ((c = n[0]), (h = n[1])),
              function (t, o, u) {
                var d,
                  f,
                  p,
                  m,
                  g,
                  v,
                  y,
                  _,
                  b,
                  w = (u || e).length,
                  x = s[w];
                if (!x) {
                  if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, B])[1])) {
                    for (
                      y = -B;
                      y < (y = u[b++].getBoundingClientRect().left) && b < w;

                    );
                    b--;
                  }
                  for (
                    x = s[w] = [],
                      d = a ? Math.min(b, w) * c - 0.5 : n % b,
                      f = a ? (w * h) / b - 0.5 : (n / b) | 0,
                      y = 0,
                      _ = B,
                      v = 0;
                    v < w;
                    v++
                  )
                    (p = (v % b) - d),
                      (m = f - ((v / b) | 0)),
                      (x[v] = g =
                        l ? Math.abs("y" === l ? m : p) : F(p * p + m * m)),
                      g > y && (y = g),
                      g < _ && (_ = g);
                  "random" === n && le(x),
                    (x.max = y - _),
                    (x.min = _),
                    (x.v = w =
                      (parseFloat(e.amount) ||
                        parseFloat(e.each) *
                          (b > w
                            ? w - 1
                            : l
                            ? "y" === l
                              ? w / b
                              : b
                            : Math.max(b, w / b)) ||
                        0) * ("edges" === n ? -1 : 1)),
                    (x.b = w < 0 ? r - w : r),
                    (x.u = ie(e.amount || e.each) || 0),
                    (i = i && w < 0 ? Ye(i) : i);
                }
                return (
                  (w = (x[t] - x.min) / x.max || 0),
                  Tt(x.b + (i ? i(w) : w) * x.v) + x.u
                );
              }
            );
          },
          he = function (t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function (i) {
              return (
                Math.floor(Math.round(parseFloat(i) / t) * t * e) / e +
                (X(i) ? 0 : ie(i))
              );
            };
          },
          ue = function (t, e) {
            var i,
              n,
              r = $(t);
            return (
              !r &&
                U(t) &&
                ((i = r = t.radius || B),
                t.values
                  ? ((t = ae(t.values)), (n = !X(t[0])) && (i *= i))
                  : (t = he(t.increment))),
              te(
                e,
                r
                  ? q(t)
                    ? function (e) {
                        return (n = t(e)), Math.abs(n - e) <= i ? n : e;
                      }
                    : function (e) {
                        for (
                          var r,
                            s,
                            o = parseFloat(n ? e.x : e),
                            a = parseFloat(n ? e.y : 0),
                            l = B,
                            c = 0,
                            h = t.length;
                          h--;

                        )
                          (r = n
                            ? (r = t[h].x - o) * r + (s = t[h].y - a) * s
                            : Math.abs(t[h] - o)) < l && ((l = r), (c = h));
                        return (
                          (c = !i || l <= i ? t[c] : e),
                          n || c === e || X(e) ? c : c + ie(e)
                        );
                      }
                  : he(t)
              )
            );
          },
          de = function (t, e, i, n) {
            return te($(t) ? !e : !0 === i ? !!(i = 0) : !n, function () {
              return $(t)
                ? t[~~(Math.random() * t.length)]
                : (i = i || 1e-5) &&
                    (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
                    Math.floor(
                      Math.round((t + Math.random() * (e - t)) / i) * i * n
                    ) / n;
            });
          },
          fe = function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          pe = function (t, e) {
            return function (i) {
              return t(parseFloat(i)) + (e || ie(i));
            };
          },
          me = function (t, e, i) {
            return be(t, e, 0, 1, i);
          },
          ge = function (t, e, i) {
            return te(i, function (i) {
              return t[~~e(i)];
            });
          },
          ve = function t(e, i, n) {
            var r = i - e;
            return $(e)
              ? ge(e, t(0, e.length), i)
              : te(n, function (t) {
                  return ((r + ((t - e) % r)) % r) + e;
                });
          },
          ye = function t(e, i, n) {
            var r = i - e,
              s = 2 * r;
            return $(e)
              ? ge(e, t(0, e.length - 1), i)
              : te(n, function (t) {
                  return (
                    e + ((t = (s + ((t - e) % s)) % s || 0) > r ? s - t : t)
                  );
                });
          },
          _e = function (t) {
            for (
              var e, i, n, r, s = 0, o = "";
              ~(e = t.indexOf("random(", s));

            )
              (n = t.indexOf(")", e)),
                (r = "[" === t.charAt(e + 7)),
                (i = t.substr(e + 7, n - e - 7).match(r ? nt : Z)),
                (o +=
                  t.substr(s, e - s) +
                  de(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5)),
                (s = n + 1);
            return o + t.substr(s, t.length - s);
          },
          be = function (t, e, i, n, r) {
            var s = e - t,
              o = n - i;
            return te(r, function (e) {
              return i + (((e - t) / s) * o || 0);
            });
          },
          we = function t(e, i, n, r) {
            var s = isNaN(e + i)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * i;
                };
            if (!s) {
              var o,
                a,
                l,
                c,
                h,
                u = H(e),
                d = {};
              if ((!0 === n && (r = 1) && (n = null), u))
                (e = { p: e }), (i = { p: i });
              else if ($(e) && !$(i)) {
                for (l = [], c = e.length, h = c - 2, a = 1; a < c; a++)
                  l.push(t(e[a - 1], e[a]));
                c--,
                  (s = function (t) {
                    t *= c;
                    var e = Math.min(h, ~~t);
                    return l[e](t - e);
                  }),
                  (n = i);
              } else r || (e = Dt($(e) ? [] : {}, e));
              if (!l) {
                for (o in i) Je.call(d, e, o, "get", i[o]);
                s = function (t) {
                  return pi(t, d) || (u ? e.p : e);
                };
              }
            }
            return te(n, s);
          },
          xe = function (t, e, i) {
            var n,
              r,
              s,
              o = t.labels,
              a = B;
            for (n in o)
              (r = o[n] - e) < 0 == !!i &&
                r &&
                a > (r = Math.abs(r)) &&
                ((s = n), (a = r));
            return s;
          },
          Te = function (t, e, i) {
            var n,
              r,
              s = t.vars,
              o = s[e];
            if (o)
              return (
                (n = s[e + "Params"]),
                (r = s.callbackScope || t),
                i && dt.length && Et(),
                n ? o.apply(r, n) : o.call(r)
              );
          },
          Se = function (t) {
            return It(t), t.progress() < 1 && Te(t, "onInterrupt"), t;
          },
          ke = function (t) {
            var e = (t = (!t.name && t.default) || t).name,
              i = q(t),
              n =
                e && !i && t.init
                  ? function () {
                      this._props = [];
                    }
                  : t,
              r = {
                init: ht,
                render: pi,
                add: Je,
                kill: gi,
                modifier: mi,
                rawVars: 0,
              },
              s = {
                targetTest: 0,
                get: 0,
                getSetter: hi,
                aliases: {},
                register: 0,
              };
            if ((Re(), t !== n)) {
              if (pt[e]) return;
              Pt(n, Pt(Bt(t, r), s)),
                Dt(n.prototype, Dt(r, Bt(t, s))),
                (pt[(n.prop = e)] = n),
                t.targetTest && (vt.push(n), (ut[e] = 1)),
                (e =
                  ("css" === e
                    ? "CSS"
                    : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
            }
            ct(e, n), t.register && t.register(Ti, n, _i);
          },
          Ee = 255,
          Oe = {
            aqua: [0, Ee, Ee],
            lime: [0, Ee, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Ee],
            navy: [0, 0, 128],
            white: [Ee, Ee, Ee],
            olive: [128, 128, 0],
            yellow: [Ee, Ee, 0],
            orange: [Ee, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Ee, 0, 0],
            pink: [Ee, 192, 203],
            cyan: [0, Ee, Ee],
            transparent: [Ee, Ee, Ee, 0],
          },
          Ae = function (t, e, i) {
            return (
              ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
                ? e + (i - e) * t * 6
                : t < 0.5
                ? i
                : 3 * t < 2
                ? e + (i - e) * (2 / 3 - t) * 6
                : e) *
                Ee +
                0.5) |
              0
            );
          },
          Me = function (t, e, i) {
            var n,
              r,
              s,
              o,
              a,
              l,
              c,
              h,
              u,
              d,
              f = t ? (X(t) ? [t >> 16, (t >> 8) & Ee, t & Ee] : 0) : Oe.black;
            if (!f) {
              if (
                ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Oe[t])
              )
                f = Oe[t];
              else if ("#" === t.charAt(0))
                4 === t.length &&
                  ((n = t.charAt(1)),
                  (r = t.charAt(2)),
                  (s = t.charAt(3)),
                  (t = "#" + n + n + r + r + s + s)),
                  (f = [
                    (t = parseInt(t.substr(1), 16)) >> 16,
                    (t >> 8) & Ee,
                    t & Ee,
                  ]);
              else if ("hsl" === t.substr(0, 3))
                if (((f = d = t.match(Z)), e)) {
                  if (~t.indexOf("="))
                    return (f = t.match(J)), i && f.length < 4 && (f[3] = 1), f;
                } else
                  (o = (+f[0] % 360) / 360),
                    (a = +f[1] / 100),
                    (n =
                      2 * (l = +f[2] / 100) -
                      (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                    f.length > 3 && (f[3] *= 1),
                    (f[0] = Ae(o + 1 / 3, n, r)),
                    (f[1] = Ae(o, n, r)),
                    (f[2] = Ae(o - 1 / 3, n, r));
              else f = t.match(Z) || Oe.transparent;
              f = f.map(Number);
            }
            return (
              e &&
                !d &&
                ((n = f[0] / Ee),
                (r = f[1] / Ee),
                (s = f[2] / Ee),
                (l = ((c = Math.max(n, r, s)) + (h = Math.min(n, r, s))) / 2),
                c === h
                  ? (o = a = 0)
                  : ((u = c - h),
                    (a = l > 0.5 ? u / (2 - c - h) : u / (c + h)),
                    (o =
                      c === n
                        ? (r - s) / u + (r < s ? 6 : 0)
                        : c === r
                        ? (s - n) / u + 2
                        : (n - r) / u + 4),
                    (o *= 60)),
                (f[0] = ~~(o + 0.5)),
                (f[1] = ~~(100 * a + 0.5)),
                (f[2] = ~~(100 * l + 0.5))),
              i && f.length < 4 && (f[3] = 1),
              f
            );
          },
          Pe = function (t) {
            var e = [],
              i = [],
              n = -1;
            return (
              t.split(De).forEach(function (t) {
                var r = t.match(tt) || [];
                e.push.apply(e, r), i.push((n += r.length + 1));
              }),
              (e.c = i),
              e
            );
          },
          Ce = function (t, e, i) {
            var n,
              r,
              s,
              o,
              a = "",
              l = (t + a).match(De),
              c = e ? "hsla(" : "rgba(",
              h = 0;
            if (!l) return t;
            if (
              ((l = l.map(function (t) {
                return (
                  (t = Me(t, e, 1)) &&
                  c +
                    (e
                      ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                      : t.join(",")) +
                    ")"
                );
              })),
              i && ((s = Pe(t)), (n = i.c).join(a) !== s.c.join(a)))
            )
              for (
                o = (r = t.replace(De, "1").split(tt)).length - 1;
                h < o;
                h++
              )
                a +=
                  r[h] +
                  (~n.indexOf(h)
                    ? l.shift() || c + "0,0,0,0)"
                    : (s.length ? s : l.length ? l : i).shift());
            if (!r)
              for (o = (r = t.split(De)).length - 1; h < o; h++)
                a += r[h] + l[h];
            return a + r[o];
          },
          De = (function () {
            var t,
              e =
                "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in Oe) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi");
          })(),
          Le = /hsl[a]?\(/,
          Be = function (t) {
            var e,
              i = t.join(" ");
            if (((De.lastIndex = 0), De.test(i)))
              return (
                (e = Le.test(i)),
                (t[1] = Ce(t[1], e)),
                (t[0] = Ce(t[0], e, Pe(t[1]))),
                !0
              );
          },
          je =
            ((_ = Date.now),
            (b = 500),
            (w = 33),
            (x = _()),
            (T = x),
            (k = S = 1e3 / 240),
            (O = function t(e) {
              var i,
                n,
                r,
                s,
                o = _() - T,
                a = !0 === e;
              if (
                (o > b && (x += o - w),
                ((i = (r = (T += o) - x) - k) > 0 || a) &&
                  ((s = ++g.frame),
                  (v = r - 1e3 * g.time),
                  (g.time = r /= 1e3),
                  (k += i + (i >= S ? 4 : S - i)),
                  (n = 1)),
                a || (f = p(t)),
                n)
              )
                for (y = 0; y < E.length; y++) E[y](r, v, s, e);
            }),
            (g = {
              time: 0,
              frame: 0,
              tick: function () {
                O(!0);
              },
              deltaRatio: function (t) {
                return v / (1e3 / (t || 60));
              },
              wake: function () {
                c &&
                  (!a &&
                    Q() &&
                    ((o = a = window),
                    (l = o.document || {}),
                    (rt.gsap = Ti),
                    (o.gsapVersions || (o.gsapVersions = [])).push(Ti.version),
                    ot(st || o.GreenSockGlobals || (!o.gsap && o) || {}),
                    (m = o.requestAnimationFrame)),
                  f && g.sleep(),
                  (p =
                    m ||
                    function (t) {
                      return setTimeout(t, (k - 1e3 * g.time + 1) | 0);
                    }),
                  (d = 1),
                  O(2));
              },
              sleep: function () {
                (m ? o.cancelAnimationFrame : clearTimeout)(f),
                  (d = 0),
                  (p = ht);
              },
              lagSmoothing: function (t, e) {
                (b = t || 1e8), (w = Math.min(e, b, 0));
              },
              fps: function (t) {
                (S = 1e3 / (t || 240)), (k = 1e3 * g.time + S);
              },
              add: function (t) {
                E.indexOf(t) < 0 && E.push(t), Re();
              },
              remove: function (t) {
                var e;
                ~(e = E.indexOf(t)) && E.splice(e, 1) && y >= e && y--;
              },
              _listeners: (E = []),
            })),
          Re = function () {
            return !d && je.wake();
          },
          Ie = {},
          ze = /^[\d.\-M][\d.\-,\s]/,
          Fe = /["']/g,
          We = function (t) {
            for (
              var e,
                i,
                n,
                r = {},
                s = t.substr(1, t.length - 3).split(":"),
                o = s[0],
                a = 1,
                l = s.length;
              a < l;
              a++
            )
              (i = s[a]),
                (e = a !== l - 1 ? i.lastIndexOf(",") : i.length),
                (n = i.substr(0, e)),
                (r[o] = isNaN(n) ? n.replace(Fe, "").trim() : +n),
                (o = i.substr(e + 1).trim());
            return r;
          },
          Ye = function (t) {
            return function (e) {
              return 1 - t(1 - e);
            };
          },
          He = function t(e, i) {
            for (var n, r = e._first; r; )
              r instanceof Ke
                ? t(r, i)
                : !r.vars.yoyoEase ||
                  (r._yoyo && r._repeat) ||
                  r._yoyo === i ||
                  (r.timeline
                    ? t(r.timeline, i)
                    : ((n = r._ease),
                      (r._ease = r._yEase),
                      (r._yEase = n),
                      (r._yoyo = i))),
                (r = r._next);
          },
          qe = function (t, e) {
            return (
              (t &&
                (q(t)
                  ? t
                  : Ie[t] ||
                    (function (t) {
                      var e,
                        i,
                        n,
                        r,
                        s = (t + "").split("("),
                        o = Ie[s[0]];
                      return o && s.length > 1 && o.config
                        ? o.config.apply(
                            null,
                            ~t.indexOf("{")
                              ? [We(s[1])]
                              : ((e = t),
                                (i = e.indexOf("(") + 1),
                                (n = e.indexOf(")")),
                                (r = e.indexOf("(", i)),
                                e.substring(
                                  i,
                                  ~r && r < n ? e.indexOf(")", n + 1) : n
                                ))
                                  .split(",")
                                  .map(At)
                          )
                        : Ie._CE && ze.test(t)
                        ? Ie._CE("", t)
                        : o;
                    })(t))) ||
              e
            );
          },
          Xe = function (t, e, i, n) {
            void 0 === i &&
              (i = function (t) {
                return 1 - e(1 - t);
              }),
              void 0 === n &&
                (n = function (t) {
                  return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                });
            var r,
              s = { easeIn: e, easeOut: i, easeInOut: n };
            return (
              xt(t, function (t) {
                for (var e in ((Ie[t] = rt[t] = s),
                (Ie[(r = t.toLowerCase())] = i),
                s))
                  Ie[
                    r +
                      ("easeIn" === e
                        ? ".in"
                        : "easeOut" === e
                        ? ".out"
                        : ".inOut")
                  ] = Ie[t + "." + e] = s[e];
              }),
              s
            );
          },
          Ne = function (t) {
            return function (e) {
              return e < 0.5
                ? (1 - t(1 - 2 * e)) / 2
                : 0.5 + t(2 * (e - 0.5)) / 2;
            };
          },
          Ue = function t(e, i, n) {
            var r = i >= 1 ? i : 1,
              s = (n || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
              o = (s / R) * (Math.asin(1 / r) || 0),
              a = function (t) {
                return 1 === t
                  ? 1
                  : r * Math.pow(2, -10 * t) * Y((t - o) * s) + 1;
              },
              l =
                "out" === e
                  ? a
                  : "in" === e
                  ? function (t) {
                      return 1 - a(1 - t);
                    }
                  : Ne(a);
            return (
              (s = R / s),
              (l.config = function (i, n) {
                return t(e, i, n);
              }),
              l
            );
          },
          Ve = function t(e, i) {
            void 0 === i && (i = 1.70158);
            var n = function (t) {
                return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
              },
              r =
                "out" === e
                  ? n
                  : "in" === e
                  ? function (t) {
                      return 1 - n(1 - t);
                    }
                  : Ne(n);
            return (
              (r.config = function (i) {
                return t(e, i);
              }),
              r
            );
          };
        (i._ticker = je),
          (i._colorStringFilter = Be),
          (i.splitColor = Me),
          (i.interpolate = we),
          (i.mapRange = be),
          (i._replaceRandom = _e),
          (i.wrapYoyo = ye),
          (i.wrap = ve),
          (i.normalize = me),
          (i.unitize = pe),
          (i.pipe = fe),
          (i.random = de),
          (i.snap = ue),
          (i._roundModifier = he),
          (i.distribute = ce),
          (i.shuffle = le),
          (i.toArray = ae),
          (i.clamp = ne),
          (i.getUnit = ie),
          (i._removeLinkedListItem = Rt),
          (i._setDefaults = Pt),
          (i._round = Tt),
          (i._forEachName = xt),
          (i._getProperty = wt),
          (i._getCache = bt),
          (i._plugins = pt),
          (i._missingPlugin = at),
          (i._relExp = it),
          (i._numWithUnitExp = tt),
          (i._numExp = J),
          (i._isUndefined = N),
          (i._isString = H),
          (i._config = D),
          xt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
            var i = e < 5 ? e + 1 : e;
            Xe(
              t + ",Power" + (i - 1),
              e
                ? function (t) {
                    return Math.pow(t, i);
                  }
                : function (t) {
                    return t;
                  },
              function (t) {
                return 1 - Math.pow(1 - t, i);
              },
              function (t) {
                return t < 0.5
                  ? Math.pow(2 * t, i) / 2
                  : 1 - Math.pow(2 * (1 - t), i) / 2;
              }
            );
          }),
          (Ie.Linear.easeNone = Ie.none = Ie.Linear.easeIn),
          Xe("Elastic", Ue("in"), Ue("out"), Ue()),
          (A = 7.5625),
          (P = 1 / (M = 2.75)),
          Xe(
            "Bounce",
            function (t) {
              return 1 - C(1 - t);
            },
            (C = function (t) {
              return t < P
                ? A * t * t
                : t < 0.7272727272727273
                ? A * Math.pow(t - 1.5 / M, 2) + 0.75
                : t < 0.9090909090909092
                ? A * (t -= 2.25 / M) * t + 0.9375
                : A * Math.pow(t - 2.625 / M, 2) + 0.984375;
            })
          ),
          Xe("Expo", function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0;
          }),
          Xe("Circ", function (t) {
            return -(F(1 - t * t) - 1);
          }),
          Xe("Sine", function (t) {
            return 1 === t ? 1 : 1 - W(t * I);
          }),
          Xe("Back", Ve("in"), Ve("out"), Ve()),
          (Ie.SteppedEase =
            Ie.steps =
            rt.SteppedEase =
              {
                config: function (t, e) {
                  void 0 === t && (t = 1);
                  var i = 1 / t,
                    n = t + (e ? 0 : 1),
                    r = e ? 1 : 0;
                  return function (t) {
                    return (((n * ee(0, 0.99999999, t)) | 0) + r) * i;
                  };
                },
              }),
          (L.ease = Ie["quad.out"]),
          xt(
            "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
            function (t) {
              return (yt += t + "," + t + "Params,");
            }
          );
        var Qe = function (t, e) {
          (this.id = z++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : wt),
            (this.set = e ? e.getSetter : hi);
        };
        i.GSCache = Qe;
        var Ge = (function () {
          function t(t, e) {
            var i = t.parent || s;
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Kt(this, +t.duration, 1, 1),
              (this.data = t.data),
              d || je.wake(),
              i && Vt(i, this, e || 0 === e ? e : i._time, 1),
              t.reversed && this.reverse(),
              t.paused && this.paused(!0);
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Kt(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((Re(), !arguments.length)) return this._tTime;
              var i = this._dp;
              if (i && i.smoothChildTiming && this._ts) {
                for (Nt(this, t); i.parent; )
                  i.parent._time !==
                    i._start +
                      (i._ts >= 0
                        ? i._tTime / i._ts
                        : (i.totalDuration() - i._tTime) / -i._ts) &&
                    i.totalTime(i._tTime, !0),
                    (i = i.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  Vt(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === j) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), Ot(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + Yt(this)) % this._dur ||
                      (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      Yt(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (e.iteration = function (t, e) {
              var i = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * i, e)
                : this._repeat
                ? Ht(this._tTime, i) + 1
                : 1;
            }),
            (e.timeScale = function (t) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var e =
                this.parent && this._ts
                  ? qt(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                Ft(this.totalTime(ee(-this._delay, this._tDur, e), !0))
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (Re(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            (this._tTime -= j) &&
                            Math.abs(this._zTime) !== j
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    Vt(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (V(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? qt(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.globalTime = function (t) {
              for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
                (i = e._start + i / (e._ts || 1)), (e = e._dp);
              return i;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t), $t(this))
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              return arguments.length
                ? ((this._rDelay = t), $t(this))
                : this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(Jt(this, t), V(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, V(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (this._initted = 0), (this._zTime = -1e-8), this;
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                i = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= i &&
                  t < this.endTime(!0) - j
                )
              );
            }),
            (e.eventCallback = function (t, e, i) {
              var n = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((n[t] = e),
                      i && (n[t + "Params"] = i),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete n[t],
                  this)
                : n[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (i) {
                var n = q(t) ? t : Mt,
                  r = function () {
                    var t = e.then;
                    (e.then = null),
                      q(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                      i(n),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? r()
                  : (e._prom = r);
              });
            }),
            (e.kill = function () {
              Se(this);
            }),
            t
          );
        })();
        (i.Animation = Ge),
          Pt(Ge.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -1e-8,
            _prom: 0,
            _ps: !1,
            _rts: 1,
          });
        var Ke = (function (t) {
          function e(e, i) {
            var r;
            return (
              void 0 === e && (e = {}),
              ((r = t.call(this, e, i) || this).labels = {}),
              (r.smoothChildTiming = !!e.smoothChildTiming),
              (r.autoRemoveChildren = !!e.autoRemoveChildren),
              (r._sort = V(e.sortChildren)),
              r.parent && Ut(r.parent, n(r)),
              e.scrollTrigger && Qt(n(r), e.scrollTrigger),
              r
            );
          }
          r(e, t);
          var i = e.prototype;
          return (
            (i.to = function (t, e, i) {
              return (
                new si(
                  t,
                  kt(arguments, 0, this),
                  Jt(this, X(e) ? arguments[3] : i)
                ),
                this
              );
            }),
            (i.from = function (t, e, i) {
              return (
                new si(
                  t,
                  kt(arguments, 1, this),
                  Jt(this, X(e) ? arguments[3] : i)
                ),
                this
              );
            }),
            (i.fromTo = function (t, e, i, n) {
              return (
                new si(
                  t,
                  kt(arguments, 2, this),
                  Jt(this, X(e) ? arguments[4] : n)
                ),
                this
              );
            }),
            (i.set = function (t, e, i) {
              return (
                (e.duration = 0),
                (e.parent = this),
                jt(e).repeatDelay || (e.repeat = 0),
                (e.immediateRender = !!e.immediateRender),
                new si(t, e, Jt(this, i), 1),
                this
              );
            }),
            (i.call = function (t, e, i) {
              return Vt(this, si.delayedCall(0, t, e), Jt(this, i));
            }),
            (i.staggerTo = function (t, e, i, n, r, s, o) {
              return (
                (i.duration = e),
                (i.stagger = i.stagger || n),
                (i.onComplete = s),
                (i.onCompleteParams = o),
                (i.parent = this),
                new si(t, i, Jt(this, r)),
                this
              );
            }),
            (i.staggerFrom = function (t, e, i, n, r, s, o) {
              return (
                (i.runBackwards = 1),
                (jt(i).immediateRender = V(i.immediateRender)),
                this.staggerTo(t, e, i, n, r, s, o)
              );
            }),
            (i.staggerFromTo = function (t, e, i, n, r, s, o, a) {
              return (
                (n.startAt = i),
                (jt(n).immediateRender = V(n.immediateRender)),
                this.staggerTo(t, e, n, r, s, o, a)
              );
            }),
            (i.render = function (t, e, i) {
              var n,
                r,
                o,
                a,
                l,
                c,
                h,
                u,
                d,
                f,
                p,
                m,
                g = this._time,
                v = this._dirty ? this.totalDuration() : this._tDur,
                y = this._dur,
                _ = this !== s && t > v - j && t >= 0 ? v : t < j ? 0 : t,
                b = this._zTime < 0 != t < 0 && (this._initted || !y);
              if (_ !== this._tTime || i || b) {
                if (
                  (g !== this._time &&
                    y &&
                    ((_ += this._time - g), (t += this._time - g)),
                  (n = _),
                  (d = this._start),
                  (c = !(u = this._ts)),
                  b && (y || (g = this._zTime), (t || !e) && (this._zTime = t)),
                  this._repeat &&
                    ((p = this._yoyo),
                    (l = y + this._rDelay),
                    (n = Tt(_ % l)),
                    _ === v
                      ? ((a = this._repeat), (n = y))
                      : ((a = ~~(_ / l)) && a === _ / l && ((n = y), a--),
                        n > y && (n = y)),
                    (f = Ht(this._tTime, l)),
                    !g && this._tTime && f !== a && (f = a),
                    p && 1 & a && ((n = y - n), (m = 1)),
                    a !== f && !this._lock))
                ) {
                  var w = p && 1 & f,
                    x = w === (p && 1 & a);
                  if (
                    (a < f && (w = !w),
                    (g = w ? 0 : y),
                    (this._lock = 1),
                    (this.render(g || (m ? 0 : Tt(a * l)), e, !y)._lock = 0),
                    !e && this.parent && Te(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !m &&
                      (this.invalidate()._lock = 1),
                    g !== this._time || c !== !this._ts)
                  )
                    return this;
                  if (
                    ((y = this._dur),
                    (v = this._tDur),
                    x &&
                      ((this._lock = 2),
                      (g = w ? y : -1e-4),
                      this.render(g, !0),
                      this.vars.repeatRefresh && !m && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !c)
                  )
                    return this;
                  He(this, m);
                }
                if (
                  (this._hasPause &&
                    !this._forcing &&
                    this._lock < 2 &&
                    ((h = (function (t, e, i) {
                      var n;
                      if (i > e)
                        for (n = t._first; n && n._start <= i; ) {
                          if (!n._dur && "isPause" === n.data && n._start > e)
                            return n;
                          n = n._next;
                        }
                      else
                        for (n = t._last; n && n._start >= i; ) {
                          if (!n._dur && "isPause" === n.data && n._start < e)
                            return n;
                          n = n._prev;
                        }
                    })(this, Tt(g), Tt(n))),
                    h && (_ -= n - (n = h._start))),
                  (this._tTime = _),
                  (this._time = n),
                  (this._act = !u),
                  this._initted ||
                    ((this._onUpdate = this.vars.onUpdate),
                    (this._initted = 1),
                    (this._zTime = t)),
                  !g && n && !e && Te(this, "onStart"),
                  n >= g && t >= 0)
                )
                  for (r = this._first; r; ) {
                    if (
                      ((o = r._next),
                      (r._act || n >= r._start) && r._ts && h !== r)
                    ) {
                      if (r.parent !== this) return this.render(t, e, i);
                      if (
                        (r.render(
                          r._ts > 0
                            ? (n - r._start) * r._ts
                            : (r._dirty ? r.totalDuration() : r._tDur) +
                                (n - r._start) * r._ts,
                          e,
                          i
                        ),
                        n !== this._time || (!this._ts && !c))
                      ) {
                        (h = 0), o && (_ += this._zTime = -1e-8);
                        break;
                      }
                    }
                    r = o;
                  }
                else {
                  r = this._last;
                  for (var T = t < 0 ? t : n; r; ) {
                    if (
                      ((o = r._prev),
                      (r._act || T <= r._end) && r._ts && h !== r)
                    ) {
                      if (r.parent !== this) return this.render(t, e, i);
                      if (
                        (r.render(
                          r._ts > 0
                            ? (T - r._start) * r._ts
                            : (r._dirty ? r.totalDuration() : r._tDur) +
                                (T - r._start) * r._ts,
                          e,
                          i
                        ),
                        n !== this._time || (!this._ts && !c))
                      ) {
                        (h = 0), o && (_ += this._zTime = T ? -1e-8 : j);
                        break;
                      }
                    }
                    r = o;
                  }
                }
                if (
                  h &&
                  !e &&
                  (this.pause(),
                  (h.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1),
                  this._ts)
                )
                  return (this._start = d), Xt(this), this.render(t, e, i);
                this._onUpdate && !e && Te(this, "onUpdate", !0),
                  ((_ === v && v >= this.totalDuration()) || (!_ && g)) &&
                    ((d !== this._start &&
                      Math.abs(u) === Math.abs(this._ts)) ||
                      this._lock ||
                      ((t || !y) &&
                        ((_ === v && this._ts > 0) || (!_ && this._ts < 0)) &&
                        It(this, 1),
                      e ||
                        (t < 0 && !g) ||
                        (!_ && !g) ||
                        (Te(
                          this,
                          _ === v ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(_ < v && this.timeScale() > 0) &&
                          this._prom())));
              }
              return this;
            }),
            (i.add = function (t, e) {
              var i = this;
              if ((X(e) || (e = Jt(this, e)), !(t instanceof Ge))) {
                if ($(t))
                  return (
                    t.forEach(function (t) {
                      return i.add(t, e);
                    }),
                    this
                  );
                if (H(t)) return this.addLabel(t, e);
                if (!q(t)) return this;
                t = si.delayedCall(0, t);
              }
              return this !== t ? Vt(this, t, e) : this;
            }),
            (i.getChildren = function (t, e, i, n) {
              void 0 === t && (t = !0),
                void 0 === e && (e = !0),
                void 0 === i && (i = !0),
                void 0 === n && (n = -B);
              for (var r = [], s = this._first; s; )
                s._start >= n &&
                  (s instanceof si
                    ? e && r.push(s)
                    : (i && r.push(s),
                      t && r.push.apply(r, s.getChildren(!0, e, i)))),
                  (s = s._next);
              return r;
            }),
            (i.getById = function (t) {
              for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
                if (e[i].vars.id === t) return e[i];
            }),
            (i.remove = function (t) {
              return H(t)
                ? this.removeLabel(t)
                : q(t)
                ? this.killTweensOf(t)
                : (Rt(this, t),
                  t === this._recent && (this._recent = this._last),
                  zt(this));
            }),
            (i.totalTime = function (e, i) {
              return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                    this._ts &&
                    (this._start = Tt(
                      je.time -
                        (this._ts > 0
                          ? e / this._ts
                          : (this.totalDuration() - e) / -this._ts)
                    )),
                  t.prototype.totalTime.call(this, e, i),
                  (this._forcing = 0),
                  this)
                : this._tTime;
            }),
            (i.addLabel = function (t, e) {
              return (this.labels[t] = Jt(this, e)), this;
            }),
            (i.removeLabel = function (t) {
              return delete this.labels[t], this;
            }),
            (i.addPause = function (t, e, i) {
              var n = si.delayedCall(0, e || ht, i);
              return (
                (n.data = "isPause"),
                (this._hasPause = 1),
                Vt(this, n, Jt(this, t))
              );
            }),
            (i.removePause = function (t) {
              var e = this._first;
              for (t = Jt(this, t); e; )
                e._start === t && "isPause" === e.data && It(e), (e = e._next);
            }),
            (i.killTweensOf = function (t, e, i) {
              for (var n = this.getTweensOf(t, i), r = n.length; r--; )
                $e !== n[r] && n[r].kill(t, e);
              return this;
            }),
            (i.getTweensOf = function (t, e) {
              for (var i, n = [], r = ae(t), s = this._first, o = X(e); s; )
                s instanceof si
                  ? St(s._targets, r) &&
                    (o
                      ? (!$e || (s._initted && s._ts)) &&
                        s.globalTime(0) <= e &&
                        s.globalTime(s.totalDuration()) > e
                      : !e || s.isActive()) &&
                    n.push(s)
                  : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i),
                  (s = s._next);
              return n;
            }),
            (i.tweenTo = function (t, e) {
              e = e || {};
              var i = this,
                n = Jt(i, t),
                r = e,
                s = r.startAt,
                o = r.onStart,
                a = r.onStartParams,
                l = si.to(
                  i,
                  Pt(e, {
                    ease: "none",
                    lazy: !1,
                    time: n,
                    overwrite: "auto",
                    duration:
                      e.duration ||
                      Math.abs(
                        (n - (s && "time" in s ? s.time : i._time)) /
                          i.timeScale()
                      ) ||
                      j,
                    onStart: function () {
                      i.pause();
                      var t =
                        e.duration || Math.abs((n - i._time) / i.timeScale());
                      l._dur !== t && Kt(l, t, 0, 1).render(l._time, !0, !0),
                        o && o.apply(l, a || []);
                    },
                  })
                );
              return l;
            }),
            (i.tweenFromTo = function (t, e, i) {
              return this.tweenTo(e, Pt({ startAt: { time: Jt(this, t) } }, i));
            }),
            (i.recent = function () {
              return this._recent;
            }),
            (i.nextLabel = function (t) {
              return void 0 === t && (t = this._time), xe(this, Jt(this, t));
            }),
            (i.previousLabel = function (t) {
              return void 0 === t && (t = this._time), xe(this, Jt(this, t), 1);
            }),
            (i.currentLabel = function (t) {
              return arguments.length
                ? this.seek(t, !0)
                : this.previousLabel(this._time + j);
            }),
            (i.shiftChildren = function (t, e, i) {
              void 0 === i && (i = 0);
              for (var n, r = this._first, s = this.labels; r; )
                r._start >= i && ((r._start += t), (r._end += t)),
                  (r = r._next);
              if (e) for (n in s) s[n] >= i && (s[n] += t);
              return zt(this);
            }),
            (i.invalidate = function () {
              var e = this._first;
              for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
              return t.prototype.invalidate.call(this);
            }),
            (i.clear = function (t) {
              void 0 === t && (t = !0);
              for (var e, i = this._first; i; )
                (e = i._next), this.remove(i), (i = e);
              return (
                (this._time = this._tTime = this._pTime = 0),
                t && (this.labels = {}),
                zt(this)
              );
            }),
            (i.totalDuration = function (t) {
              var e,
                i,
                n,
                r = 0,
                o = this,
                a = o._last,
                l = B;
              if (arguments.length)
                return o.timeScale(
                  (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                    (o.reversed() ? -t : t)
                );
              if (o._dirty) {
                for (n = o.parent; a; )
                  (e = a._prev),
                    a._dirty && a.totalDuration(),
                    (i = a._start) > l && o._sort && a._ts && !o._lock
                      ? ((o._lock = 1), (Vt(o, a, i - a._delay, 1)._lock = 0))
                      : (l = i),
                    i < 0 &&
                      a._ts &&
                      ((r -= i),
                      ((!n && !o._dp) || (n && n.smoothChildTiming)) &&
                        ((o._start += i / o._ts),
                        (o._time -= i),
                        (o._tTime -= i)),
                      o.shiftChildren(-i, !1, -Infinity),
                      (l = 0)),
                    a._end > r && a._ts && (r = a._end),
                    (a = e);
                Kt(o, o === s && o._time > r ? o._time : r, 1, 1),
                  (o._dirty = 0);
              }
              return o._tDur;
            }),
            (e.updateRoot = function (t) {
              if (
                (s._ts && (Ot(s, qt(t, s)), (h = je.frame)), je.frame >= gt)
              ) {
                gt += D.autoSleep || 120;
                var e = s._first;
                if ((!e || !e._ts) && D.autoSleep && je._listeners.length < 2) {
                  for (; e && !e._ts; ) e = e._next;
                  e || je.sleep();
                }
              }
            }),
            e
          );
        })(Ge);
        (i.TimelineLite = i.TimelineMax = i.Timeline = Ke),
          Pt(Ke.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var $e,
          Ze = function (t, e, i, n, r, s, o) {
            var a,
              l,
              c,
              h,
              u,
              d,
              f,
              p,
              m = new _i(this._pt, t, e, 0, 1, fi, null, r),
              g = 0,
              v = 0;
            for (
              m.b = i,
                m.e = n,
                i += "",
                (f = ~(n += "").indexOf("random(")) && (n = _e(n)),
                s && (s((p = [i, n]), t, e), (i = p[0]), (n = p[1])),
                l = i.match(et) || [];
              (a = et.exec(n));

            )
              (h = a[0]),
                (u = n.substring(g, a.index)),
                c ? (c = (c + 1) % 5) : "rgba(" === u.substr(-5) && (c = 1),
                h !== l[v++] &&
                  ((d = parseFloat(l[v - 1]) || 0),
                  (m._pt = {
                    _next: m._pt,
                    p: u || 1 === v ? u : ",",
                    s: d,
                    c:
                      "=" === h.charAt(1)
                        ? parseFloat(h.substr(2)) *
                          ("-" === h.charAt(0) ? -1 : 1)
                        : parseFloat(h) - d,
                    m: c && c < 4 ? Math.round : 0,
                  }),
                  (g = et.lastIndex));
            return (
              (m.c = g < n.length ? n.substring(g, n.length) : ""),
              (m.fp = o),
              (it.test(n) || f) && (m.e = 0),
              (this._pt = m),
              m
            );
          },
          Je = function (t, e, i, n, r, s, o, a, l) {
            q(n) && (n = n(r || 0, t, s));
            var c,
              h = t[e],
              u =
                "get" !== i
                  ? i
                  : q(h)
                  ? l
                    ? t[
                        e.indexOf("set") || !q(t["get" + e.substr(3)])
                          ? e
                          : "get" + e.substr(3)
                      ](l)
                    : t[e]()
                  : h,
              d = q(h) ? (l ? li : ai) : oi;
            if (
              (H(n) &&
                (~n.indexOf("random(") && (n = _e(n)),
                "=" === n.charAt(1) &&
                  (n =
                    parseFloat(u) +
                    parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) +
                    (ie(u) || 0))),
              u !== n)
            )
              return isNaN(u * n)
                ? (!h && !(e in t) && at(e, n),
                  Ze.call(this, t, e, u, n, d, a || D.stringFilter, l))
                : ((c = new _i(
                    this._pt,
                    t,
                    e,
                    +u || 0,
                    n - (u || 0),
                    "boolean" == typeof h ? di : ui,
                    0,
                    d
                  )),
                  l && (c.fp = l),
                  o && c.modifier(o, this, t),
                  (this._pt = c));
          },
          ti = function (t, e, i, n, r, s) {
            var o, a, l, c;
            if (
              pt[t] &&
              !1 !==
                (o = new pt[t]()).init(
                  r,
                  o.rawVars
                    ? e[t]
                    : (function (t, e, i, n, r) {
                        if (
                          (q(t) && (t = ii(t, r, e, i, n)),
                          !U(t) || (t.style && t.nodeType) || $(t) || K(t))
                        )
                          return H(t) ? ii(t, r, e, i, n) : t;
                        var s,
                          o = {};
                        for (s in t) o[s] = ii(t[s], r, e, i, n);
                        return o;
                      })(e[t], n, r, s, i),
                  i,
                  n,
                  s
                ) &&
              ((i._pt = a =
                new _i(i._pt, r, t, 0, 1, o.render, o, 0, o.priority)),
              i !== u)
            )
              for (
                l = i._ptLookup[i._targets.indexOf(r)], c = o._props.length;
                c--;

              )
                l[o._props[c]] = a;
            return o;
          },
          ei = function t(e, i) {
            var n,
              r,
              o,
              a,
              l,
              c,
              h,
              u,
              d,
              f,
              p,
              m,
              g,
              v = e.vars,
              y = v.ease,
              _ = v.startAt,
              b = v.immediateRender,
              w = v.lazy,
              x = v.onUpdate,
              T = v.onUpdateParams,
              S = v.callbackScope,
              k = v.runBackwards,
              E = v.yoyoEase,
              O = v.keyframes,
              A = v.autoRevert,
              M = e._dur,
              P = e._startAt,
              C = e._targets,
              D = e.parent,
              B = D && "nested" === D.data ? D.parent._targets : C,
              R = "auto" === e._overwrite,
              I = e.timeline;
            if (
              (I && (!O || !y) && (y = "none"),
              (e._ease = qe(y, L.ease)),
              (e._yEase = E ? Ye(qe(!0 === E ? y : E, L.ease)) : 0),
              E &&
                e._yoyo &&
                !e._repeat &&
                ((E = e._yEase), (e._yEase = e._ease), (e._ease = E)),
              !I)
            ) {
              if (
                ((m = (u = C[0] ? bt(C[0]).harness : 0) && v[u.prop]),
                (n = Bt(v, ut)),
                P && P.render(-1, !0).kill(),
                _)
              ) {
                if (
                  (It(
                    (e._startAt = si.set(
                      C,
                      Pt(
                        {
                          data: "isStart",
                          overwrite: !1,
                          parent: D,
                          immediateRender: !0,
                          lazy: V(w),
                          startAt: null,
                          delay: 0,
                          onUpdate: x,
                          onUpdateParams: T,
                          callbackScope: S,
                          stagger: 0,
                        },
                        _
                      )
                    ))
                  ),
                  b)
                )
                  if (i > 0) A || (e._startAt = 0);
                  else if (M && !(i < 0 && P))
                    return void (i && (e._zTime = i));
              } else if (k && M)
                if (P) !A && (e._startAt = 0);
                else if (
                  (i && (b = !1),
                  (o = Pt(
                    {
                      overwrite: !1,
                      data: "isFromStart",
                      lazy: b && V(w),
                      immediateRender: b,
                      stagger: 0,
                      parent: D,
                    },
                    n
                  )),
                  m && (o[u.prop] = m),
                  It((e._startAt = si.set(C, o))),
                  b)
                ) {
                  if (!i) return;
                } else t(e._startAt, j);
              for (
                e._pt = 0, w = (M && V(w)) || (w && !M), r = 0;
                r < C.length;
                r++
              ) {
                if (
                  ((h = (l = C[r])._gsap || _t(C)[r]._gsap),
                  (e._ptLookup[r] = f = {}),
                  ft[h.id] && dt.length && Et(),
                  (p = B === C ? r : B.indexOf(l)),
                  u &&
                    !1 !== (d = new u()).init(l, m || n, e, p, B) &&
                    ((e._pt = a =
                      new _i(
                        e._pt,
                        l,
                        d.name,
                        0,
                        1,
                        d.render,
                        d,
                        0,
                        d.priority
                      )),
                    d._props.forEach(function (t) {
                      f[t] = a;
                    }),
                    d.priority && (c = 1)),
                  !u || m)
                )
                  for (o in n)
                    pt[o] && (d = ti(o, n, e, p, l, B))
                      ? d.priority && (c = 1)
                      : (f[o] = a =
                          Je.call(
                            e,
                            l,
                            o,
                            "get",
                            n[o],
                            p,
                            B,
                            0,
                            v.stringFilter
                          ));
                e._op && e._op[r] && e.kill(l, e._op[r]),
                  R &&
                    e._pt &&
                    (($e = e),
                    s.killTweensOf(l, f, e.globalTime(0)),
                    (g = !e.parent),
                    ($e = 0)),
                  e._pt && w && (ft[h.id] = 1);
              }
              c && yi(e), e._onInit && e._onInit(e);
            }
            (e._from = !I && !!v.runBackwards),
              (e._onUpdate = x),
              (e._initted = (!e._op || e._pt) && !g);
          },
          ii = function (t, e, i, n, r) {
            return q(t)
              ? t.call(e, i, n, r)
              : H(t) && ~t.indexOf("random(")
              ? _e(t)
              : t;
          },
          ni = yt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
          ri = (ni + ",id,stagger,delay,duration,paused,scrollTrigger").split(
            ","
          );
        i._checkPlugin = ti;
        var si = (function (t) {
          function e(e, i, r, o) {
            var a;
            "number" == typeof i && ((r.duration = i), (i = r), (r = null));
            var l,
              c,
              h,
              u,
              d,
              f,
              p,
              m,
              g = (a = t.call(this, o ? i : jt(i), r) || this).vars,
              v = g.duration,
              y = g.delay,
              _ = g.immediateRender,
              b = g.stagger,
              w = g.overwrite,
              x = g.keyframes,
              T = g.defaults,
              S = g.scrollTrigger,
              k = g.yoyoEase,
              E = a.parent,
              O = ($(e) || K(e) ? X(e[0]) : "length" in i) ? [e] : ae(e);
            if (
              ((a._targets = O.length
                ? _t(O)
                : lt(
                    "GSAP target " + e + " not found. https://greensock.com",
                    !D.nullTargetWarn
                  ) || []),
              (a._ptLookup = []),
              (a._overwrite = w),
              x || b || G(v) || G(y))
            ) {
              if (
                ((i = a.vars),
                (l = a.timeline =
                  new Ke({ data: "nested", defaults: T || {} })).kill(),
                (l.parent = n(a)),
                x)
              )
                Pt(l.vars.defaults, { ease: "none" }),
                  x.forEach(function (t) {
                    return l.to(O, t, ">");
                  });
              else {
                if (((u = O.length), (p = b ? ce(b) : ht), U(b)))
                  for (d in b) ~ni.indexOf(d) && (m || (m = {}), (m[d] = b[d]));
                for (c = 0; c < u; c++) {
                  for (d in ((h = {}), i)) ri.indexOf(d) < 0 && (h[d] = i[d]);
                  (h.stagger = 0),
                    k && (h.yoyoEase = k),
                    m && Dt(h, m),
                    (f = O[c]),
                    (h.duration = +ii(v, n(a), c, f, O)),
                    (h.delay = (+ii(y, n(a), c, f, O) || 0) - a._delay),
                    !b &&
                      1 === u &&
                      h.delay &&
                      ((a._delay = y = h.delay),
                      (a._start += y),
                      (h.delay = 0)),
                    l.to(f, h, p(c, f, O));
                }
                l.duration() ? (v = y = 0) : (a.timeline = 0);
              }
              v || a.duration((v = l.duration()));
            } else a.timeline = 0;
            return (
              !0 === w && (($e = n(a)), s.killTweensOf(O), ($e = 0)),
              E && Ut(E, n(a)),
              (_ ||
                (!v &&
                  !x &&
                  a._start === Tt(E._time) &&
                  V(_) &&
                  Wt(n(a)) &&
                  "nested" !== E.data)) &&
                ((a._tTime = -1e-8), a.render(Math.max(0, -y))),
              S && Qt(n(a), S),
              a
            );
          }
          r(e, t);
          var i = e.prototype;
          return (
            (i.render = function (t, e, i) {
              var n,
                r,
                s,
                o,
                a,
                l,
                c,
                h,
                u,
                d = this._time,
                f = this._tDur,
                p = this._dur,
                m = t > f - j && t >= 0 ? f : t < j ? 0 : t;
              if (p) {
                if (
                  m !== this._tTime ||
                  !t ||
                  i ||
                  (this._startAt && this._zTime < 0 != t < 0)
                ) {
                  if (((n = m), (h = this.timeline), this._repeat)) {
                    if (
                      ((o = p + this._rDelay),
                      (n = Tt(m % o)),
                      m === f
                        ? ((s = this._repeat), (n = p))
                        : ((s = ~~(m / o)) && s === m / o && ((n = p), s--),
                          n > p && (n = p)),
                      (l = this._yoyo && 1 & s) &&
                        ((u = this._yEase), (n = p - n)),
                      (a = Ht(this._tTime, o)),
                      n === d && !i && this._initted)
                    )
                      return this;
                    s !== a &&
                      (h && this._yEase && He(h, l),
                      !this.vars.repeatRefresh ||
                        l ||
                        this._lock ||
                        ((this._lock = i = 1),
                        (this.render(Tt(o * s), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (Gt(this, t < 0 ? t : n, i, e))
                      return (this._tTime = 0), this;
                    if (p !== this._dur) return this.render(t, e, i);
                  }
                  for (
                    this._tTime = m,
                      this._time = n,
                      !this._act &&
                        this._ts &&
                        ((this._act = 1), (this._lazy = 0)),
                      this.ratio = c = (u || this._ease)(n / p),
                      this._from && (this.ratio = c = 1 - c),
                      n && !d && !e && Te(this, "onStart"),
                      r = this._pt;
                    r;

                  )
                    r.r(c, r.d), (r = r._next);
                  (h &&
                    h.render(t < 0 ? t : !n && l ? -1e-8 : h._dur * c, e, i)) ||
                    (this._startAt && (this._zTime = t)),
                    this._onUpdate &&
                      !e &&
                      (t < 0 && this._startAt && this._startAt.render(t, !0, i),
                      Te(this, "onUpdate")),
                    this._repeat &&
                      s !== a &&
                      this.vars.onRepeat &&
                      !e &&
                      this.parent &&
                      Te(this, "onRepeat"),
                    (m !== this._tDur && m) ||
                      this._tTime !== m ||
                      (t < 0 &&
                        this._startAt &&
                        !this._onUpdate &&
                        this._startAt.render(t, !0, !0),
                      (t || !p) &&
                        ((m === this._tDur && this._ts > 0) ||
                          (!m && this._ts < 0)) &&
                        It(this, 1),
                      e ||
                        (t < 0 && !d) ||
                        (!m && !d) ||
                        (Te(
                          this,
                          m === f ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(m < f && this.timeScale() > 0) &&
                          this._prom()));
                }
              } else
                !(function (t, e, i, n) {
                  var r,
                    s,
                    o = t.ratio,
                    a =
                      e < 0 ||
                      (!e && o && !t._start && t._zTime > j && !t._dp._lock) ||
                      ((t._ts < 0 || t._dp._ts < 0) &&
                        "isFromStart" !== t.data &&
                        "isStart" !== t.data)
                        ? 0
                        : 1,
                    l = t._rDelay,
                    c = 0;
                  if (
                    (l &&
                      t._repeat &&
                      ((c = ee(0, t._tDur, e)),
                      Ht(c, l) !== (s = Ht(t._tTime, l)) &&
                        ((o = 1 - a),
                        t.vars.repeatRefresh && t._initted && t.invalidate())),
                    a !== o || n || t._zTime === j || (!e && t._zTime))
                  ) {
                    if (!t._initted && Gt(t, e, n, i)) return;
                    for (
                      s = t._zTime,
                        t._zTime = e || (i ? j : 0),
                        i || (i = e && !s),
                        t.ratio = a,
                        t._from && (a = 1 - a),
                        t._time = 0,
                        t._tTime = c,
                        i || Te(t, "onStart"),
                        r = t._pt;
                      r;

                    )
                      r.r(a, r.d), (r = r._next);
                    t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                      t._onUpdate && !i && Te(t, "onUpdate"),
                      c && t._repeat && !i && t.parent && Te(t, "onRepeat"),
                      (e >= t._tDur || e < 0) &&
                        t.ratio === a &&
                        (a && It(t, 1),
                        i ||
                          (Te(t, a ? "onComplete" : "onReverseComplete", !0),
                          t._prom && t._prom()));
                  } else t._zTime || (t._zTime = e);
                })(this, t, e, i);
              return this;
            }),
            (i.targets = function () {
              return this._targets;
            }),
            (i.invalidate = function () {
              return (
                (this._pt =
                  this._op =
                  this._startAt =
                  this._onUpdate =
                  this._act =
                  this._lazy =
                    0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(),
                t.prototype.invalidate.call(this)
              );
            }),
            (i.kill = function (t, e) {
              if (
                (void 0 === e && (e = "all"),
                !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
              )
                return Se(this);
              if (this.timeline) {
                var i = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(
                    t,
                    e,
                    $e && !0 !== $e.vars.overwrite
                  )._first || Se(this),
                  this.parent &&
                    i !== this.timeline.totalDuration() &&
                    Kt(this, (this._dur * this.timeline._tDur) / i, 0, 1),
                  this
                );
              }
              var n,
                r,
                s,
                o,
                a,
                l,
                c,
                h = this._targets,
                u = t ? ae(t) : h,
                d = this._ptLookup,
                f = this._pt;
              if (
                (!e || "all" === e) &&
                (function (t, e) {
                  for (
                    var i = t.length, n = i === e.length;
                    n && i-- && t[i] === e[i];

                  );
                  return i < 0;
                })(h, u)
              )
                return "all" === e && (this._pt = 0), Se(this);
              for (
                n = this._op = this._op || [],
                  "all" !== e &&
                    (H(e) &&
                      ((a = {}),
                      xt(e, function (t) {
                        return (a[t] = 1);
                      }),
                      (e = a)),
                    (e = (function (t, e) {
                      var i,
                        n,
                        r,
                        s,
                        o = t[0] ? bt(t[0]).harness : 0,
                        a = o && o.aliases;
                      if (!a) return e;
                      for (n in ((i = Dt({}, e)), a))
                        if ((n in i))
                          for (r = (s = a[n].split(",")).length; r--; )
                            i[s[r]] = i[n];
                      return i;
                    })(h, e))),
                  c = h.length;
                c--;

              )
                if (~u.indexOf(h[c]))
                  for (a in ((r = d[c]),
                  "all" === e
                    ? ((n[c] = e), (o = r), (s = {}))
                    : ((s = n[c] = n[c] || {}), (o = e)),
                  o))
                    (l = r && r[a]) &&
                      (("kill" in l.d && !0 !== l.d.kill(a)) ||
                        Rt(this, l, "_pt"),
                      delete r[a]),
                      "all" !== s && (s[a] = 1);
              return this._initted && !this._pt && f && Se(this), this;
            }),
            (e.to = function (t, i) {
              return new e(t, i, arguments[2]);
            }),
            (e.from = function (t, i) {
              return new e(t, kt(arguments, 1));
            }),
            (e.delayedCall = function (t, i, n, r) {
              return new e(i, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: i,
                onReverseComplete: i,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: r,
              });
            }),
            (e.fromTo = function (t, i, n) {
              return new e(t, kt(arguments, 2));
            }),
            (e.set = function (t, i) {
              return (
                (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(t, i)
              );
            }),
            (e.killTweensOf = function (t, e, i) {
              return s.killTweensOf(t, e, i);
            }),
            e
          );
        })(Ge);
        (i.TweenLite = i.TweenMax = i.Tween = si),
          Pt(si.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0,
          }),
          xt("staggerTo,staggerFrom,staggerFromTo", function (t) {
            si[t] = function () {
              var e = new Ke(),
                i = re.call(arguments, 0);
              return (
                i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
              );
            };
          });
        var oi = function (t, e, i) {
            return (t[e] = i);
          },
          ai = function (t, e, i) {
            return t[e](i);
          },
          li = function (t, e, i, n) {
            return t[e](n.fp, i);
          },
          ci = function (t, e, i) {
            return t.setAttribute(e, i);
          },
          hi = function (t, e) {
            return q(t[e]) ? ai : N(t[e]) && t.setAttribute ? ci : oi;
          },
          ui = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
          },
          di = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
          },
          fi = function (t, e) {
            var i = e._pt,
              n = "";
            if (!t && e.b) n = e.b;
            else if (1 === t && e.e) n = e.e;
            else {
              for (; i; )
                (n =
                  i.p +
                  (i.m
                    ? i.m(i.s + i.c * t)
                    : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
                  n),
                  (i = i._next);
              n += e.c;
            }
            e.set(e.t, e.p, n, e);
          },
          pi = function (t, e) {
            for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
          },
          mi = function (t, e, i, n) {
            for (var r, s = this._pt; s; )
              (r = s._next), s.p === n && s.modifier(t, e, i), (s = r);
          },
          gi = function (t) {
            for (var e, i, n = this._pt; n; )
              (i = n._next),
                (n.p === t && !n.op) || n.op === t
                  ? Rt(this, n, "_pt")
                  : n.dep || (e = 1),
                (n = i);
            return !e;
          },
          vi = function (t, e, i, n) {
            n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
          },
          yi = function (t) {
            for (var e, i, n, r, s = t._pt; s; ) {
              for (e = s._next, i = n; i && i.pr > s.pr; ) i = i._next;
              (s._prev = i ? i._prev : r) ? (s._prev._next = s) : (n = s),
                (s._next = i) ? (i._prev = s) : (r = s),
                (s = e);
            }
            t._pt = n;
          };
        (i._sortPropTweensByPriority = yi),
          (i._renderComplexString = fi),
          (i._getSetter = hi);
        var _i = (function () {
          function t(t, e, i, n, r, s, o, a, l) {
            (this.t = e),
              (this.s = n),
              (this.c = r),
              (this.p = i),
              (this.r = s || ui),
              (this.d = o || this),
              (this.set = a || oi),
              (this.pr = l || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, i) {
              (this.mSet = this.mSet || this.set),
                (this.set = vi),
                (this.m = t),
                (this.mt = i),
                (this.tween = e);
            }),
            t
          );
        })();
        (i.PropTween = _i),
          xt(
            yt +
              "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
            function (t) {
              return (ut[t] = 1);
            }
          ),
          (rt.TweenMax = rt.TweenLite = si),
          (rt.TimelineLite = rt.TimelineMax = Ke),
          (s = new Ke({
            sortChildren: !1,
            defaults: L,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0,
          })),
          (D.stringFilter = Be);
        var bi = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            e.forEach(function (t) {
              return ke(t);
            });
          },
          timeline: function (t) {
            return new Ke(t);
          },
          getTweensOf: function (t, e) {
            return s.getTweensOf(t, e);
          },
          getProperty: function (t, e, i, n) {
            H(t) && (t = ae(t)[0]);
            var r = bt(t || {}).get,
              s = i ? Mt : At;
            return (
              "native" === i && (i = ""),
              t
                ? e
                  ? s(((pt[e] && pt[e].get) || r)(t, e, i, n))
                  : function (e, i, n) {
                      return s(((pt[e] && pt[e].get) || r)(t, e, i, n));
                    }
                : t
            );
          },
          quickSetter: function (t, e, i) {
            if ((t = ae(t)).length > 1) {
              var n = t.map(function (t) {
                  return Ti.quickSetter(t, e, i);
                }),
                r = n.length;
              return function (t) {
                for (var e = r; e--; ) n[e](t);
              };
            }
            t = t[0] || {};
            var s = pt[e],
              o = bt(t),
              a = (o.harness && (o.harness.aliases || {})[e]) || e,
              l = s
                ? function (e) {
                    var n = new s();
                    (u._pt = 0),
                      n.init(t, i ? e + i : e, u, 0, [t]),
                      n.render(1, n),
                      u._pt && pi(1, u);
                  }
                : o.set(t, a);
            return s
              ? l
              : function (e) {
                  return l(t, a, i ? e + i : e, o, 1);
                };
          },
          isTweening: function (t) {
            return s.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = qe(t.ease, L.ease)), Lt(L, t || {});
          },
          config: function (t) {
            return Lt(D, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              i = t.effect,
              n = t.plugins,
              r = t.defaults,
              s = t.extendTimeline;
            (n || "").split(",").forEach(function (t) {
              return (
                t &&
                !pt[t] &&
                !rt[t] &&
                lt(e + " effect requires " + t + " plugin.")
              );
            }),
              (mt[e] = function (t, e, n) {
                return i(ae(t), Pt(e || {}, r), n);
              }),
              s &&
                (Ke.prototype[e] = function (t, i, n) {
                  return this.add(mt[e](t, U(i) ? i : (n = i) && {}, this), n);
                });
          },
          registerEase: function (t, e) {
            Ie[t] = qe(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? qe(t, e) : Ie;
          },
          getById: function (t) {
            return s.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var i,
              n,
              r = new Ke(t);
            for (
              r.smoothChildTiming = V(t.smoothChildTiming),
                s.remove(r),
                r._dp = 0,
                r._time = r._tTime = s._time,
                i = s._first;
              i;

            )
              (n = i._next),
                (!e &&
                  !i._dur &&
                  i instanceof si &&
                  i.vars.onComplete === i._targets[0]) ||
                  Vt(r, i, i._start - i._delay),
                (i = n);
            return Vt(s, r, 0), r;
          },
          utils: {
            wrap: ve,
            wrapYoyo: ye,
            distribute: ce,
            random: de,
            snap: ue,
            normalize: me,
            getUnit: ie,
            clamp: ne,
            splitColor: Me,
            toArray: ae,
            mapRange: be,
            pipe: fe,
            unitize: pe,
            interpolate: we,
            shuffle: le,
          },
          install: ot,
          effects: mt,
          ticker: je,
          updateRoot: Ke.updateRoot,
          plugins: pt,
          globalTimeline: s,
          core: {
            PropTween: _i,
            globals: ct,
            Tween: si,
            Timeline: Ke,
            Animation: Ge,
            getCache: bt,
            _removeLinkedListItem: Rt,
          },
        };
        xt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
          return (bi[t] = si[t]);
        }),
          je.add(Ke.updateRoot),
          (u = bi.to({}, { duration: 0 }));
        var wi = function (t, e) {
            for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
              i = i._next;
            return i;
          },
          xi = function (t, e) {
            return {
              name: t,
              rawVars: 1,
              init: function (t, i, n) {
                n._onInit = function (t) {
                  var n, r;
                  if (
                    (H(i) &&
                      ((n = {}),
                      xt(i, function (t) {
                        return (n[t] = 1);
                      }),
                      (i = n)),
                    e)
                  ) {
                    for (r in ((n = {}), i)) n[r] = e(i[r]);
                    i = n;
                  }
                  !(function (t, e) {
                    var i,
                      n,
                      r,
                      s = t._targets;
                    for (i in e)
                      for (n = s.length; n--; )
                        (r = t._ptLookup[n][i]) &&
                          (r = r.d) &&
                          (r._pt && (r = wi(r, i)),
                          r && r.modifier && r.modifier(e[i], t, s[n], i));
                  })(t, i);
                };
              },
            };
          },
          Ti =
            bi.registerPlugin(
              {
                name: "attr",
                init: function (t, e, i, n, r) {
                  var s, o;
                  for (s in e)
                    (o = this.add(
                      t,
                      "setAttribute",
                      (t.getAttribute(s) || 0) + "",
                      e[s],
                      n,
                      r,
                      0,
                      0,
                      s
                    )) && (o.op = s),
                      this._props.push(s);
                },
              },
              {
                name: "endArray",
                init: function (t, e) {
                  for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i]);
                },
              },
              xi("roundProps", he),
              xi("modifiers"),
              xi("snap", ue)
            ) || bi;
        (i.default = i.gsap = Ti),
          (si.version = Ke.version = Ti.version = "3.5.1"),
          (c = 1),
          Q() && Re();
        var Si = Ie.Power0,
          ki = Ie.Power1,
          Ei = Ie.Power2,
          Oi = Ie.Power3,
          Ai = Ie.Power4,
          Mi = Ie.Linear,
          Pi = Ie.Quad,
          Ci = Ie.Cubic,
          Di = Ie.Quart,
          Li = Ie.Quint,
          Bi = Ie.Strong,
          ji = Ie.Elastic,
          Ri = Ie.Back,
          Ii = Ie.SteppedEase,
          zi = Ie.Bounce,
          Fi = Ie.Sine,
          Wi = Ie.Expo,
          Yi = Ie.Circ;
        (i.Circ = Yi),
          (i.Expo = Wi),
          (i.Sine = Fi),
          (i.Bounce = zi),
          (i.SteppedEase = Ii),
          (i.Back = Ri),
          (i.Elastic = ji),
          (i.Strong = Bi),
          (i.Quint = Li),
          (i.Quart = Di),
          (i.Cubic = Ci),
          (i.Quad = Pi),
          (i.Linear = Mi),
          (i.Power4 = Ai),
          (i.Power3 = Oi),
          (i.Power2 = Ei),
          (i.Power1 = ki),
          (i.Power0 = Si);
      },
      {},
    ],
    bp4Z: [
      function (t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.checkPrefix =
            i._createElement =
            i._getBBox =
            i.default =
            i.CSSPlugin =
              void 0);
        var n,
          r,
          s,
          o,
          a,
          l,
          c,
          h,
          u = t("./gsap-core.js"),
          d = {},
          f = 180 / Math.PI,
          p = Math.PI / 180,
          m = Math.atan2,
          g = /([A-Z])/g,
          v = /(?:left|right|width|margin|padding|x)/i,
          y = /[\s,\(]\S/,
          _ = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity",
          },
          b = function (t, e) {
            return e.set(
              e.t,
              e.p,
              Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
              e
            );
          },
          w = function (t, e) {
            return e.set(
              e.t,
              e.p,
              1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
              e
            );
          },
          x = function (t, e) {
            return e.set(
              e.t,
              e.p,
              t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
              e
            );
          },
          T = function (t, e) {
            var i = e.s + e.c * t;
            e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
          },
          S = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e);
          },
          k = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
          },
          E = function (t, e, i) {
            return (t.style[e] = i);
          },
          O = function (t, e, i) {
            return t.style.setProperty(e, i);
          },
          A = function (t, e, i) {
            return (t._gsap[e] = i);
          },
          M = function (t, e, i) {
            return (t._gsap.scaleX = t._gsap.scaleY = i);
          },
          P = function (t, e, i, n, r) {
            var s = t._gsap;
            (s.scaleX = s.scaleY = i), s.renderTransform(r, s);
          },
          C = function (t, e, i, n, r) {
            var s = t._gsap;
            (s[e] = i), s.renderTransform(r, s);
          },
          D = "transform",
          L = D + "Origin",
          B = function (t, e) {
            var i = r.createElementNS
              ? r.createElementNS(
                  (e || "http://www.w3.org/1999/xhtml").replace(
                    /^https/,
                    "http"
                  ),
                  t
                )
              : r.createElement(t);
            return i.style ? i : r.createElement(t);
          },
          j = function t(e, i, n) {
            var r = getComputedStyle(e);
            return (
              r[i] ||
              r.getPropertyValue(i.replace(g, "-$1").toLowerCase()) ||
              r.getPropertyValue(i) ||
              (!n && t(e, I(i) || i, 1)) ||
              ""
            );
          },
          R = "O,Moz,ms,Ms,Webkit".split(","),
          I = function (t, e, i) {
            var n = (e || a).style,
              r = 5;
            if (t in n && !i) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1);
              r-- && !(R[r] + t in n);

            );
            return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? R[r] : "") + t;
          },
          z = function () {
            "undefined" != typeof window &&
              window.document &&
              ((n = window),
              (r = n.document),
              (s = r.documentElement),
              (a = B("div") || { style: {} }),
              (l = B("div")),
              (D = I(D)),
              (L = D + "Origin"),
              (a.style.cssText =
                "border-width:0;line-height:0;position:absolute;padding:0"),
              (h = !!I("perspective")),
              (o = 1));
          },
          F = function t(e) {
            var i,
              n = B(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              r = this.parentNode,
              o = this.nextSibling,
              a = this.style.cssText;
            if (
              (s.appendChild(n),
              n.appendChild(this),
              (this.style.display = "block"),
              e)
            )
              try {
                (i = this.getBBox()),
                  (this._gsapBBox = this.getBBox),
                  (this.getBBox = t);
              } catch (t) {}
            else this._gsapBBox && (i = this._gsapBBox());
            return (
              r && (o ? r.insertBefore(this, o) : r.appendChild(this)),
              s.removeChild(n),
              (this.style.cssText = a),
              i
            );
          },
          W = function (t, e) {
            for (var i = e.length; i--; )
              if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
          },
          Y = function (t) {
            var e;
            try {
              e = t.getBBox();
            } catch (i) {
              e = F.call(t, !0);
            }
            return (
              (e && (e.width || e.height)) ||
                t.getBBox === F ||
                (e = F.call(t, !0)),
              !e || e.width || e.x || e.y
                ? e
                : {
                    x: +W(t, ["x", "cx", "x1"]) || 0,
                    y: +W(t, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0,
                  }
            );
          },
          H = function (t) {
            return !(
              !t.getCTM ||
              (t.parentNode && !t.ownerSVGElement) ||
              !Y(t)
            );
          },
          q = function (t, e) {
            if (e) {
              var i = t.style;
              e in d && e !== L && (e = D),
                i.removeProperty
                  ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                      (e = "-" + e),
                    i.removeProperty(e.replace(g, "-$1").toLowerCase()))
                  : i.removeAttribute(e);
            }
          },
          X = function (t, e, i, n, r, s) {
            var o = new u.PropTween(t._pt, e, i, 0, 1, s ? k : S);
            return (t._pt = o), (o.b = n), (o.e = r), t._props.push(i), o;
          },
          N = { deg: 1, rad: 1, turn: 1 },
          U = function t(e, i, n, s) {
            var o,
              l,
              c,
              h,
              f = parseFloat(n) || 0,
              p = (n + "").trim().substr((f + "").length) || "px",
              m = a.style,
              g = v.test(i),
              y = "svg" === e.tagName.toLowerCase(),
              _ = (y ? "client" : "offset") + (g ? "Width" : "Height"),
              b = 100,
              w = "px" === s,
              x = "%" === s;
            return s === p || !f || N[s] || N[p]
              ? f
              : ("px" !== p && !w && (f = t(e, i, n, "px")),
                (h = e.getCTM && H(e)),
                x && (d[i] || ~i.indexOf("adius"))
                  ? (0, u._round)(
                      (f / (h ? e.getBBox()[g ? "width" : "height"] : e[_])) * b
                    )
                  : ((m[g ? "width" : "height"] = b + (w ? p : s)),
                    (l =
                      ~i.indexOf("adius") || ("em" === s && e.appendChild && !y)
                        ? e
                        : e.parentNode),
                    h && (l = (e.ownerSVGElement || {}).parentNode),
                    (l && l !== r && l.appendChild) || (l = r.body),
                    (c = l._gsap) &&
                    x &&
                    c.width &&
                    g &&
                    c.time === u._ticker.time
                      ? (0, u._round)((f / c.width) * b)
                      : ((x || "%" === p) && (m.position = j(e, "position")),
                        l === e && (m.position = "static"),
                        l.appendChild(a),
                        (o = a[_]),
                        l.removeChild(a),
                        (m.position = "absolute"),
                        g &&
                          x &&
                          (((c = (0, u._getCache)(l)).time = u._ticker.time),
                          (c.width = l[_])),
                        (0, u._round)(
                          w ? (o * f) / b : o && f ? (b / o) * f : 0
                        ))));
          },
          V = function (t, e, i, n) {
            var r;
            return (
              o || z(),
              e in _ &&
                "transform" !== e &&
                ~(e = _[e]).indexOf(",") &&
                (e = e.split(",")[0]),
              d[e] && "transform" !== e
                ? ((r = rt(t, n)),
                  (r =
                    "transformOrigin" !== e
                      ? r[e]
                      : st(j(t, L)) + " " + r.zOrigin + "px"))
                : (!(r = t.style[e]) ||
                    "auto" === r ||
                    n ||
                    ~(r + "").indexOf("calc(")) &&
                  (r =
                    ($[e] && $[e](t, e, i)) ||
                    j(t, e) ||
                    (0, u._getProperty)(t, e) ||
                    ("opacity" === e ? 1 : 0)),
              i && !~(r + "").indexOf(" ") ? U(t, e, r, i) + i : r
            );
          },
          Q = function (t, e, i, n) {
            if (!i || "none" === i) {
              var r = I(e, t, 1),
                s = r && j(t, r, 1);
              s && s !== i
                ? ((e = r), (i = s))
                : "borderColor" === e && (i = j(t, "borderTopColor"));
            }
            var o,
              a,
              l,
              c,
              h,
              d,
              f,
              p,
              m,
              g,
              v,
              y,
              _ = new u.PropTween(
                this._pt,
                t.style,
                e,
                0,
                1,
                u._renderComplexString
              ),
              b = 0,
              w = 0;
            if (
              ((_.b = i),
              (_.e = n),
              (i += ""),
              "auto" === (n += "") &&
                ((t.style[e] = n), (n = j(t, e) || n), (t.style[e] = i)),
              (o = [i, n]),
              (0, u._colorStringFilter)(o),
              (n = o[1]),
              (l = (i = o[0]).match(u._numWithUnitExp) || []),
              (n.match(u._numWithUnitExp) || []).length)
            ) {
              for (; (a = u._numWithUnitExp.exec(n)); )
                (f = a[0]),
                  (m = n.substring(b, a.index)),
                  h
                    ? (h = (h + 1) % 5)
                    : ("rgba(" !== m.substr(-5) && "hsla(" !== m.substr(-5)) ||
                      (h = 1),
                  f !== (d = l[w++] || "") &&
                    ((c = parseFloat(d) || 0),
                    (v = d.substr((c + "").length)),
                    (y = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) &&
                      (f = f.substr(2)),
                    (p = parseFloat(f)),
                    (g = f.substr((p + "").length)),
                    (b = u._numWithUnitExp.lastIndex - g.length),
                    g ||
                      ((g = g || u._config.units[e] || v),
                      b === n.length && ((n += g), (_.e += g))),
                    v !== g && (c = U(t, e, d, g) || 0),
                    (_._pt = {
                      _next: _._pt,
                      p: m || 1 === w ? m : ",",
                      s: c,
                      c: y ? y * p : p - c,
                      m: h && h < 4 ? Math.round : 0,
                    }));
              _.c = b < n.length ? n.substring(b, n.length) : "";
            } else _.r = "display" === e && "none" === n ? k : S;
            return u._relExp.test(n) && (_.e = 0), (this._pt = _), _;
          },
          G = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%",
          },
          K = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
              var i,
                n,
                r,
                s = e.t,
                o = s.style,
                a = e.u,
                l = s._gsap;
              if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
              else
                for (r = (a = a.split(",")).length; --r > -1; )
                  (i = a[r]),
                    d[i] && ((n = 1), (i = "transformOrigin" === i ? L : D)),
                    q(s, i);
              n &&
                (q(s, D),
                l &&
                  (l.svg && s.removeAttribute("transform"),
                  rt(s, 1),
                  (l.uncache = 1)));
            }
          },
          $ = {
            clearProps: function (t, e, i, n, r) {
              if ("isFromStart" !== r.data) {
                var s = (t._pt = new u.PropTween(t._pt, e, i, 0, 0, K));
                return (
                  (s.u = n), (s.pr = -10), (s.tween = r), t._props.push(i), 1
                );
              }
            },
          },
          Z = [1, 0, 0, 1, 0, 0],
          J = {},
          tt = function (t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
          },
          et = function (t) {
            var e = j(t, D);
            return tt(e) ? Z : e.substr(7).match(u._numExp).map(u._round);
          },
          it = function (t, e) {
            var i,
              n,
              r,
              o,
              a = t._gsap || (0, u._getCache)(t),
              l = t.style,
              c = et(t);
            return a.svg && t.getAttribute("transform")
              ? "1,0,0,1,0,0" ===
                (c = [
                  (r = t.transform.baseVal.consolidate().matrix).a,
                  r.b,
                  r.c,
                  r.d,
                  r.e,
                  r.f,
                ]).join(",")
                ? Z
                : c
              : (c !== Z ||
                  t.offsetParent ||
                  t === s ||
                  a.svg ||
                  ((r = l.display),
                  (l.display = "block"),
                  ((i = t.parentNode) && t.offsetParent) ||
                    ((o = 1), (n = t.nextSibling), s.appendChild(t)),
                  (c = et(t)),
                  r ? (l.display = r) : q(t, "display"),
                  o &&
                    (n
                      ? i.insertBefore(t, n)
                      : i
                      ? i.appendChild(t)
                      : s.removeChild(t))),
                e && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
          },
          nt = function (t, e, i, n, r, s) {
            var o,
              a,
              l,
              c = t._gsap,
              h = r || it(t, !0),
              u = c.xOrigin || 0,
              d = c.yOrigin || 0,
              f = c.xOffset || 0,
              p = c.yOffset || 0,
              m = h[0],
              g = h[1],
              v = h[2],
              y = h[3],
              _ = h[4],
              b = h[5],
              w = e.split(" "),
              x = parseFloat(w[0]) || 0,
              T = parseFloat(w[1]) || 0;
            i
              ? h !== Z &&
                (a = m * y - g * v) &&
                ((l = x * (-g / a) + T * (m / a) - (m * b - g * _) / a),
                (x = x * (y / a) + T * (-v / a) + (v * b - y * _) / a),
                (T = l))
              : ((x =
                  (o = Y(t)).x +
                  (~w[0].indexOf("%") ? (x / 100) * o.width : x)),
                (T =
                  o.y +
                  (~(w[1] || w[0]).indexOf("%") ? (T / 100) * o.height : T))),
              n || (!1 !== n && c.smooth)
                ? ((_ = x - u),
                  (b = T - d),
                  (c.xOffset = f + (_ * m + b * v) - _),
                  (c.yOffset = p + (_ * g + b * y) - b))
                : (c.xOffset = c.yOffset = 0),
              (c.xOrigin = x),
              (c.yOrigin = T),
              (c.smooth = !!n),
              (c.origin = e),
              (c.originIsAbsolute = !!i),
              (t.style[L] = "0px 0px"),
              s &&
                (X(s, c, "xOrigin", u, x),
                X(s, c, "yOrigin", d, T),
                X(s, c, "xOffset", f, c.xOffset),
                X(s, c, "yOffset", p, c.yOffset)),
              t.setAttribute("data-svg-origin", x + " " + T);
          },
          rt = function (t, e) {
            var i = t._gsap || new u.GSCache(t);
            if ("x" in i && !e && !i.uncache) return i;
            var n,
              r,
              s,
              o,
              a,
              l,
              c,
              d,
              g,
              v,
              y,
              _,
              b,
              w,
              x,
              T,
              S,
              k,
              E,
              O,
              A,
              M,
              P,
              C,
              B,
              R,
              I,
              z,
              F,
              W,
              Y,
              q,
              X = t.style,
              N = i.scaleX < 0,
              U = "px",
              V = "deg",
              Q = j(t, L) || "0";
            return (
              (n = r = s = l = c = d = g = v = y = 0),
              (o = a = 1),
              (i.svg = !(!t.getCTM || !H(t))),
              (w = it(t, i.svg)),
              i.svg &&
                ((C = !i.uncache && t.getAttribute("data-svg-origin")),
                nt(t, C || Q, !!C || i.originIsAbsolute, !1 !== i.smooth, w)),
              (_ = i.xOrigin || 0),
              (b = i.yOrigin || 0),
              w !== Z &&
                ((k = w[0]),
                (E = w[1]),
                (O = w[2]),
                (A = w[3]),
                (n = M = w[4]),
                (r = P = w[5]),
                6 === w.length
                  ? ((o = Math.sqrt(k * k + E * E)),
                    (a = Math.sqrt(A * A + O * O)),
                    (l = k || E ? m(E, k) * f : 0),
                    (g = O || A ? m(O, A) * f + l : 0) &&
                      (a *= Math.cos(g * p)),
                    i.svg &&
                      ((n -= _ - (_ * k + b * O)), (r -= b - (_ * E + b * A))))
                  : ((q = w[6]),
                    (W = w[7]),
                    (I = w[8]),
                    (z = w[9]),
                    (F = w[10]),
                    (Y = w[11]),
                    (n = w[12]),
                    (r = w[13]),
                    (s = w[14]),
                    (c = (x = m(q, F)) * f),
                    x &&
                      ((C = M * (T = Math.cos(-x)) + I * (S = Math.sin(-x))),
                      (B = P * T + z * S),
                      (R = q * T + F * S),
                      (I = M * -S + I * T),
                      (z = P * -S + z * T),
                      (F = q * -S + F * T),
                      (Y = W * -S + Y * T),
                      (M = C),
                      (P = B),
                      (q = R)),
                    (d = (x = m(-O, F)) * f),
                    x &&
                      ((T = Math.cos(-x)),
                      (Y = A * (S = Math.sin(-x)) + Y * T),
                      (k = C = k * T - I * S),
                      (E = B = E * T - z * S),
                      (O = R = O * T - F * S)),
                    (l = (x = m(E, k)) * f),
                    x &&
                      ((C = k * (T = Math.cos(x)) + E * (S = Math.sin(x))),
                      (B = M * T + P * S),
                      (E = E * T - k * S),
                      (P = P * T - M * S),
                      (k = C),
                      (M = B)),
                    c &&
                      Math.abs(c) + Math.abs(l) > 359.9 &&
                      ((c = l = 0), (d = 180 - d)),
                    (o = (0, u._round)(Math.sqrt(k * k + E * E + O * O))),
                    (a = (0, u._round)(Math.sqrt(P * P + q * q))),
                    (x = m(M, P)),
                    (g = Math.abs(x) > 2e-4 ? x * f : 0),
                    (y = Y ? 1 / (Y < 0 ? -Y : Y) : 0)),
                i.svg &&
                  ((C = t.getAttribute("transform")),
                  (i.forceCSS =
                    t.setAttribute("transform", "") || !tt(j(t, D))),
                  C && t.setAttribute("transform", C))),
              Math.abs(g) > 90 &&
                Math.abs(g) < 270 &&
                (N
                  ? ((o *= -1),
                    (g += l <= 0 ? 180 : -180),
                    (l += l <= 0 ? 180 : -180))
                  : ((a *= -1), (g += g <= 0 ? 180 : -180))),
              (i.x =
                ((i.xPercent =
                  n && Math.round(t.offsetWidth / 2) === Math.round(-n)
                    ? -50
                    : 0)
                  ? 0
                  : n) + U),
              (i.y =
                ((i.yPercent =
                  r && Math.round(t.offsetHeight / 2) === Math.round(-r)
                    ? -50
                    : 0)
                  ? 0
                  : r) + U),
              (i.z = s + U),
              (i.scaleX = (0, u._round)(o)),
              (i.scaleY = (0, u._round)(a)),
              (i.rotation = (0, u._round)(l) + V),
              (i.rotationX = (0, u._round)(c) + V),
              (i.rotationY = (0, u._round)(d) + V),
              (i.skewX = g + V),
              (i.skewY = v + V),
              (i.transformPerspective = y + U),
              (i.zOrigin = parseFloat(Q.split(" ")[2]) || 0) && (X[L] = st(Q)),
              (i.xOffset = i.yOffset = 0),
              (i.force3D = u._config.force3D),
              (i.renderTransform = i.svg ? dt : h ? ut : at),
              (i.uncache = 0),
              i
            );
          },
          st = function (t) {
            return (t = t.split(" "))[0] + " " + t[1];
          },
          ot = function (t, e, i) {
            var n = (0, u.getUnit)(e);
            return (
              (0, u._round)(
                parseFloat(e) + parseFloat(U(t, "x", i + "px", n))
              ) + n
            );
          },
          at = function (t, e) {
            (e.z = "0px"),
              (e.rotationY = e.rotationX = "0deg"),
              (e.force3D = 0),
              ut(t, e);
          },
          lt = "0deg",
          ct = "0px",
          ht = ") ",
          ut = function (t, e) {
            var i = e || this,
              n = i.xPercent,
              r = i.yPercent,
              s = i.x,
              o = i.y,
              a = i.z,
              l = i.rotation,
              c = i.rotationY,
              h = i.rotationX,
              u = i.skewX,
              d = i.skewY,
              f = i.scaleX,
              m = i.scaleY,
              g = i.transformPerspective,
              v = i.force3D,
              y = i.target,
              _ = i.zOrigin,
              b = "",
              w = ("auto" === v && t && 1 !== t) || !0 === v;
            if (_ && (h !== lt || c !== lt)) {
              var x,
                T = parseFloat(c) * p,
                S = Math.sin(T),
                k = Math.cos(T);
              (T = parseFloat(h) * p),
                (x = Math.cos(T)),
                (s = ot(y, s, S * x * -_)),
                (o = ot(y, o, -Math.sin(T) * -_)),
                (a = ot(y, a, k * x * -_ + _));
            }
            g !== ct && (b += "perspective(" + g + ht),
              (n || r) && (b += "translate(" + n + "%, " + r + "%) "),
              (w || s !== ct || o !== ct || a !== ct) &&
                (b +=
                  a !== ct || w
                    ? "translate3d(" + s + ", " + o + ", " + a + ") "
                    : "translate(" + s + ", " + o + ht),
              l !== lt && (b += "rotate(" + l + ht),
              c !== lt && (b += "rotateY(" + c + ht),
              h !== lt && (b += "rotateX(" + h + ht),
              (u === lt && d === lt) || (b += "skew(" + u + ", " + d + ht),
              (1 === f && 1 === m) || (b += "scale(" + f + ", " + m + ht),
              (y.style[D] = b || "translate(0, 0)");
          },
          dt = function (t, e) {
            var i,
              n,
              r,
              s,
              o,
              a = e || this,
              l = a.xPercent,
              c = a.yPercent,
              h = a.x,
              d = a.y,
              f = a.rotation,
              m = a.skewX,
              g = a.skewY,
              v = a.scaleX,
              y = a.scaleY,
              _ = a.target,
              b = a.xOrigin,
              w = a.yOrigin,
              x = a.xOffset,
              T = a.yOffset,
              S = a.forceCSS,
              k = parseFloat(h),
              E = parseFloat(d);
            (f = parseFloat(f)),
              (m = parseFloat(m)),
              (g = parseFloat(g)) && ((m += g = parseFloat(g)), (f += g)),
              f || m
                ? ((f *= p),
                  (m *= p),
                  (i = Math.cos(f) * v),
                  (n = Math.sin(f) * v),
                  (r = Math.sin(f - m) * -y),
                  (s = Math.cos(f - m) * y),
                  m &&
                    ((g *= p),
                    (o = Math.tan(m - g)),
                    (r *= o = Math.sqrt(1 + o * o)),
                    (s *= o),
                    g &&
                      ((o = Math.tan(g)),
                      (i *= o = Math.sqrt(1 + o * o)),
                      (n *= o))),
                  (i = (0, u._round)(i)),
                  (n = (0, u._round)(n)),
                  (r = (0, u._round)(r)),
                  (s = (0, u._round)(s)))
                : ((i = v), (s = y), (n = r = 0)),
              ((k && !~(h + "").indexOf("px")) ||
                (E && !~(d + "").indexOf("px"))) &&
                ((k = U(_, "x", h, "px")), (E = U(_, "y", d, "px"))),
              (b || w || x || T) &&
                ((k = (0, u._round)(k + b - (b * i + w * r) + x)),
                (E = (0, u._round)(E + w - (b * n + w * s) + T))),
              (l || c) &&
                ((o = _.getBBox()),
                (k = (0, u._round)(k + (l / 100) * o.width)),
                (E = (0, u._round)(E + (c / 100) * o.height))),
              (o =
                "matrix(" +
                i +
                "," +
                n +
                "," +
                r +
                "," +
                s +
                "," +
                k +
                "," +
                E +
                ")"),
              _.setAttribute("transform", o),
              S && (_.style[D] = o);
          },
          ft = function (t, e, i, n, r, s) {
            var o,
              a,
              l = 360,
              c = (0, u._isString)(r),
              h = parseFloat(r) * (c && ~r.indexOf("rad") ? f : 1),
              d = s ? h * s : h - n,
              p = n + d + "deg";
            return (
              c &&
                ("short" === (o = r.split("_")[1]) &&
                  (d %= l) !== d % 180 &&
                  (d += d < 0 ? l : -360),
                "cw" === o && d < 0
                  ? (d = ((d + 36e9) % l) - ~~(d / l) * l)
                  : "ccw" === o &&
                    d > 0 &&
                    (d = ((d - 36e9) % l) - ~~(d / l) * l)),
              (t._pt = a = new u.PropTween(t._pt, e, i, n, d, w)),
              (a.e = p),
              (a.u = "deg"),
              t._props.push(i),
              a
            );
          },
          pt = function (t, e, i) {
            var n,
              s,
              o,
              a,
              c,
              h,
              f,
              p = l.style,
              m = i._gsap;
            for (s in ((p.cssText =
              getComputedStyle(i).cssText +
              ";position:absolute;display:block;"),
            (p[D] = e),
            r.body.appendChild(l),
            (n = rt(l, 1)),
            d))
              (o = m[s]) !== (a = n[s]) &&
                "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) <
                  0 &&
                ((c =
                  (0, u.getUnit)(o) !== (f = (0, u.getUnit)(a))
                    ? U(i, s, o, f)
                    : parseFloat(o)),
                (h = parseFloat(a)),
                (t._pt = new u.PropTween(t._pt, m, s, c, h - c, b)),
                (t._pt.u = f || 0),
                t._props.push(s));
            r.body.removeChild(l);
          };
        /*!
         * CSSPlugin 3.5.1
         * https://greensock.com
         *
         * Copyright 2008-2020, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ (i._getBBox = Y),
          (i.checkPrefix = I),
          (i._createElement = B),
          (0, u._forEachName)("padding,margin,Width,Radius", function (t, e) {
            var i = "Top",
              n = "Right",
              r = "Bottom",
              s = "Left",
              o = (e < 3 ? [i, n, r, s] : [i + s, i + n, r + n, r + s]).map(
                function (i) {
                  return e < 2 ? t + i : "border" + i + t;
                }
              );
            $[e > 1 ? "border" + t : t] = function (t, e, i, n, r) {
              var s, a;
              if (arguments.length < 4)
                return (
                  (s = o.map(function (e) {
                    return V(t, e, i);
                  })),
                  5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
                );
              (s = (n + "").split(" ")),
                (a = {}),
                o.forEach(function (t, e) {
                  return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
                }),
                t.init(e, a, r);
            };
          });
        var mt,
          gt,
          vt,
          yt = {
            name: "css",
            register: z,
            targetTest: function (t) {
              return t.style && t.nodeType;
            },
            init: function (t, e, i, n, r) {
              var s,
                a,
                l,
                c,
                h,
                f,
                p,
                m,
                g,
                v,
                w,
                S,
                k,
                E,
                O,
                A,
                M,
                P,
                C,
                L = this._props,
                B = t.style;
              for (p in (o || z(), e))
                if (
                  "autoRound" !== p &&
                  ((a = e[p]),
                  !u._plugins[p] || !(0, u._checkPlugin)(p, e, i, n, t, r))
                )
                  if (
                    ((h = typeof a),
                    (f = $[p]),
                    "function" === h && (h = typeof (a = a.call(i, n, t, r))),
                    "string" === h &&
                      ~a.indexOf("random(") &&
                      (a = (0, u._replaceRandom)(a)),
                    f)
                  )
                    f(this, t, p, a, i) && (O = 1);
                  else if ("--" === p.substr(0, 2))
                    this.add(
                      B,
                      "setProperty",
                      getComputedStyle(t).getPropertyValue(p) + "",
                      a + "",
                      n,
                      r,
                      0,
                      0,
                      p
                    );
                  else if ("undefined" !== h) {
                    if (
                      ((s = V(t, p)),
                      (c = parseFloat(s)),
                      (v =
                        "string" === h && "=" === a.charAt(1)
                          ? +(a.charAt(0) + "1")
                          : 0) && (a = a.substr(2)),
                      (l = parseFloat(a)),
                      p in _ &&
                        ("autoAlpha" === p &&
                          (1 === c &&
                            "hidden" === V(t, "visibility") &&
                            l &&
                            (c = 0),
                          X(
                            this,
                            B,
                            "visibility",
                            c ? "inherit" : "hidden",
                            l ? "inherit" : "hidden",
                            !l
                          )),
                        "scale" !== p &&
                          "transform" !== p &&
                          ~(p = _[p]).indexOf(",") &&
                          (p = p.split(",")[0])),
                      (w = p in d))
                    )
                      if (
                        (S ||
                          ((k = t._gsap).renderTransform || rt(t),
                          (E = !1 !== e.smoothOrigin && k.smooth),
                          ((S = this._pt =
                            new u.PropTween(
                              this._pt,
                              B,
                              D,
                              0,
                              1,
                              k.renderTransform,
                              k,
                              0,
                              -1
                            )).dep = 1)),
                        "scale" === p)
                      )
                        (this._pt = new u.PropTween(
                          this._pt,
                          k,
                          "scaleY",
                          k.scaleY,
                          v ? v * l : l - k.scaleY
                        )),
                          L.push("scaleY", p),
                          (p += "X");
                      else {
                        if ("transformOrigin" === p) {
                          (M = void 0),
                            (P = void 0),
                            (C = void 0),
                            (M = (A = a).split(" ")),
                            (P = M[0]),
                            (C = M[1] || "50%"),
                            ("top" !== P &&
                              "bottom" !== P &&
                              "left" !== C &&
                              "right" !== C) ||
                              ((A = P), (P = C), (C = A)),
                            (M[0] = G[P] || P),
                            (M[1] = G[C] || C),
                            (a = M.join(" ")),
                            k.svg
                              ? nt(t, a, 0, E, 0, this)
                              : ((g = parseFloat(a.split(" ")[2]) || 0) !==
                                  k.zOrigin &&
                                  X(this, k, "zOrigin", k.zOrigin, g),
                                X(this, B, p, st(s), st(a)));
                          continue;
                        }
                        if ("svgOrigin" === p) {
                          nt(t, a, 1, E, 0, this);
                          continue;
                        }
                        if (p in J) {
                          ft(this, k, p, c, a, v);
                          continue;
                        }
                        if ("smoothOrigin" === p) {
                          X(this, k, "smooth", k.smooth, a);
                          continue;
                        }
                        if ("force3D" === p) {
                          k[p] = a;
                          continue;
                        }
                        if ("transform" === p) {
                          pt(this, a, t);
                          continue;
                        }
                      }
                    else p in B || (p = I(p) || p);
                    if (
                      w ||
                      ((l || 0 === l) && (c || 0 === c) && !y.test(a) && p in B)
                    )
                      l || (l = 0),
                        (m = (s + "").substr((c + "").length)) !==
                          (g =
                            (0, u.getUnit)(a) ||
                            (p in u._config.units ? u._config.units[p] : m)) &&
                          (c = U(t, p, s, g)),
                        (this._pt = new u.PropTween(
                          this._pt,
                          w ? k : B,
                          p,
                          c,
                          v ? v * l : l - c,
                          "px" !== g || !1 === e.autoRound || w ? b : T
                        )),
                        (this._pt.u = g || 0),
                        m !== g && ((this._pt.b = s), (this._pt.r = x));
                    else if (p in B) Q.call(this, t, p, s, a);
                    else {
                      if (!(p in t)) {
                        (0, u._missingPlugin)(p, a);
                        continue;
                      }
                      this.add(t, p, t[p], a, n, r);
                    }
                    L.push(p);
                  }
              O && (0, u._sortPropTweensByPriority)(this);
            },
            get: V,
            aliases: _,
            getSetter: function (t, e, i) {
              var n = _[e];
              return (
                n && n.indexOf(",") < 0 && (e = n),
                e in d && e !== L && (t._gsap.x || V(t, "x"))
                  ? i && c === i
                    ? "scale" === e
                      ? M
                      : A
                    : (c = i || {}) && ("scale" === e ? P : C)
                  : t.style && !(0, u._isUndefined)(t.style[e])
                  ? E
                  : ~e.indexOf("-")
                  ? O
                  : (0, u._getSetter)(t, e)
              );
            },
            core: { _removeProperty: q, _getMatrix: it },
          };
        (i.default = i.CSSPlugin = yt),
          (u.gsap.utils.checkPrefix = I),
          (mt = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent"),
          (gt = "rotation,rotationX,rotationY,skewX,skewY"),
          (vt = (0, u._forEachName)(
            mt +
              "," +
              gt +
              ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
            function (t) {
              d[t] = 1;
            }
          )),
          (0, u._forEachName)(gt, function (t) {
            (u._config.units[t] = "deg"), (J[t] = 1);
          }),
          (_[vt[13]] = mt + "," + gt),
          (0, u._forEachName)(
            "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
            function (t) {
              var e = t.split(":");
              _[e[1]] = vt[e[0]];
            }
          ),
          (0, u._forEachName)(
            "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
            function (t) {
              u._config.units[t] = "px";
            }
          ),
          u.gsap.registerPlugin(yt);
      },
      { "./gsap-core.js": "TNS6" },
    ],
    TpQl: [
      function (t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 }),
          Object.defineProperty(i, "Power0", {
            enumerable: !0,
            get: function () {
              return n.Power0;
            },
          }),
          Object.defineProperty(i, "Power1", {
            enumerable: !0,
            get: function () {
              return n.Power1;
            },
          }),
          Object.defineProperty(i, "Power2", {
            enumerable: !0,
            get: function () {
              return n.Power2;
            },
          }),
          Object.defineProperty(i, "Power3", {
            enumerable: !0,
            get: function () {
              return n.Power3;
            },
          }),
          Object.defineProperty(i, "Power4", {
            enumerable: !0,
            get: function () {
              return n.Power4;
            },
          }),
          Object.defineProperty(i, "Linear", {
            enumerable: !0,
            get: function () {
              return n.Linear;
            },
          }),
          Object.defineProperty(i, "Quad", {
            enumerable: !0,
            get: function () {
              return n.Quad;
            },
          }),
          Object.defineProperty(i, "Cubic", {
            enumerable: !0,
            get: function () {
              return n.Cubic;
            },
          }),
          Object.defineProperty(i, "Quart", {
            enumerable: !0,
            get: function () {
              return n.Quart;
            },
          }),
          Object.defineProperty(i, "Quint", {
            enumerable: !0,
            get: function () {
              return n.Quint;
            },
          }),
          Object.defineProperty(i, "Strong", {
            enumerable: !0,
            get: function () {
              return n.Strong;
            },
          }),
          Object.defineProperty(i, "Elastic", {
            enumerable: !0,
            get: function () {
              return n.Elastic;
            },
          }),
          Object.defineProperty(i, "Back", {
            enumerable: !0,
            get: function () {
              return n.Back;
            },
          }),
          Object.defineProperty(i, "SteppedEase", {
            enumerable: !0,
            get: function () {
              return n.SteppedEase;
            },
          }),
          Object.defineProperty(i, "Bounce", {
            enumerable: !0,
            get: function () {
              return n.Bounce;
            },
          }),
          Object.defineProperty(i, "Sine", {
            enumerable: !0,
            get: function () {
              return n.Sine;
            },
          }),
          Object.defineProperty(i, "Expo", {
            enumerable: !0,
            get: function () {
              return n.Expo;
            },
          }),
          Object.defineProperty(i, "Circ", {
            enumerable: !0,
            get: function () {
              return n.Circ;
            },
          }),
          Object.defineProperty(i, "TweenLite", {
            enumerable: !0,
            get: function () {
              return n.TweenLite;
            },
          }),
          Object.defineProperty(i, "TimelineLite", {
            enumerable: !0,
            get: function () {
              return n.TimelineLite;
            },
          }),
          Object.defineProperty(i, "TimelineMax", {
            enumerable: !0,
            get: function () {
              return n.TimelineMax;
            },
          }),
          Object.defineProperty(i, "CSSPlugin", {
            enumerable: !0,
            get: function () {
              return r.CSSPlugin;
            },
          }),
          (i.TweenMax = i.default = i.gsap = void 0);
        var n = t("./gsap-core.js"),
          r = t("./CSSPlugin.js"),
          s = n.gsap.registerPlugin(r.CSSPlugin) || n.gsap,
          o = s.core.Tween;
        (i.TweenMax = o), (i.default = i.gsap = s);
      },
      { "./gsap-core.js": "TNS6", "./CSSPlugin.js": "bp4Z" },
    ],
    LMRJ: [
      function (t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.default = void 0);
        var n = t("gsap"),
          r = t("./utils");
        function s(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        var o = { x: 0, y: 0 };
        window.addEventListener("mousemove", function (t) {
          return (o = (0, r.getMousePos)(t));
        });
        var a = (function () {
          function t(e) {
            var i = this;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.DOM = { el: e }),
              (this.DOM.el.style.opacity = 0),
              (this.bounds = this.DOM.el.getBoundingClientRect()),
              (this.renderedStyles = {
                tx: { previous: 0, current: 0, amt: 0.2 },
                ty: { previous: 0, current: 0, amt: 0.2 },
                scale: { previous: 1, current: 1, amt: 0.15 },
              }),
              (this.onMouseMoveEv = function () {
                (i.renderedStyles.tx.previous = i.renderedStyles.tx.current =
                  o.x - i.bounds.width / 2),
                  (i.renderedStyles.ty.previous = i.renderedStyles.ty.previous =
                    o.y - i.bounds.height / 2),
                  n.gsap.to(i.DOM.el, {
                    duration: 0.9,
                    ease: "Power3.easeOut",
                    opacity: 1,
                  }),
                  requestAnimationFrame(function () {
                    return i.render();
                  }),
                  window.removeEventListener("mousemove", i.onMouseMoveEv);
              }),
              window.addEventListener("mousemove", this.onMouseMoveEv);
          }
          var e, i, a;
          return (
            (e = t),
            (i = [
              {
                key: "enter",
                value: function () {
                  this.renderedStyles.scale.current = 2.5;
                },
              },
              {
                key: "leave",
                value: function () {
                  this.renderedStyles.scale.current = 1;
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this;
                  for (var e in ((this.renderedStyles.tx.current =
                    o.x - this.bounds.width / 2),
                  (this.renderedStyles.ty.current =
                    o.y - this.bounds.height / 2),
                  this.renderedStyles))
                    this.renderedStyles[e].previous = (0, r.lerp)(
                      this.renderedStyles[e].previous,
                      this.renderedStyles[e].current,
                      this.renderedStyles[e].amt
                    );
                  (this.DOM.el.style.transform = "translateX("
                    .concat(this.renderedStyles.tx.previous, "px) translateY(")
                    .concat(this.renderedStyles.ty.previous, "px) scale(")
                    .concat(this.renderedStyles.scale.previous, ")")),
                    requestAnimationFrame(function () {
                      return t.render();
                    });
                },
              },
            ]) && s(e.prototype, i),
            a && s(e, a),
            t
          );
        })();
        i.default = a;
      },
      { gsap: "TpQl", "./utils": "MgTz" },
    ],
    ez7q: [
      function (t, e, i) {
        var n = arguments[3];
        function r(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function s(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        function o(t, e, i) {
          return e && s(t.prototype, e), i && s(t, i), t;
        }
        function a(t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = i),
            t
          );
        }
        function l(t, e) {
          var i = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              i.push.apply(i, n);
          }
          return i;
        }
        function c(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? l(Object(i), !0).forEach(function (e) {
                  a(t, e, i[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
              : l(Object(i)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(i, e)
                  );
                });
          }
          return t;
        }
        function h(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && d(t, e);
        }
        function u(t) {
          return (
            (u = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            u(t)
          );
        }
        function d(t, e) {
          return (
            (d =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              }),
            d(t, e)
          );
        }
        function f() {
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
        function p(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function m(t, e) {
          return !e || ("object" != typeof e && "function" != typeof e)
            ? p(t)
            : e;
        }
        function g(t) {
          var e = f();
          return function () {
            var i,
              n = u(t);
            if (e) {
              var r = u(this).constructor;
              i = Reflect.construct(n, arguments, r);
            } else i = n.apply(this, arguments);
            return m(this, i);
          };
        }
        function v(t, e) {
          for (
            ;
            !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t));

          );
          return t;
        }
        function y(t, e, i) {
          return (
            (y =
              "undefined" != typeof Reflect && Reflect.get
                ? Reflect.get
                : function (t, e, i) {
                    var n = v(t, e);
                    if (n) {
                      var r = Object.getOwnPropertyDescriptor(n, e);
                      return r.get ? r.get.call(i) : r.value;
                    }
                  }),
            y(t, e, i || t)
          );
        }
        function _(t, e) {
          return x(t) || S(t, e) || k(t, e) || A();
        }
        function b(t) {
          return w(t) || T(t) || k(t) || O();
        }
        function w(t) {
          if (Array.isArray(t)) return E(t);
        }
        function x(t) {
          if (Array.isArray(t)) return t;
        }
        function T(t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        }
        function S(t, e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
            var i = [],
              n = !0,
              r = !1,
              s = void 0;
            try {
              for (
                var o, a = t[Symbol.iterator]();
                !(n = (o = a.next()).done) &&
                (i.push(o.value), !e || i.length !== e);
                n = !0
              );
            } catch (t) {
              (r = !0), (s = t);
            } finally {
              try {
                n || null == a.return || a.return();
              } finally {
                if (r) throw s;
              }
            }
            return i;
          }
        }
        function k(t, e) {
          if (t) {
            if ("string" == typeof t) return E(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === i && t.constructor && (i = t.constructor.name),
              "Map" === i || "Set" === i
                ? Array.from(t)
                : "Arguments" === i ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                ? E(t, e)
                : void 0
            );
          }
        }
        function E(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
          return n;
        }
        function O() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function A() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.Smooth = i.Native = i.default = void 0);
        var M = {
            el: document,
            name: "scroll",
            offset: [0, 0],
            repeat: !1,
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical",
            reloadOnContextChange: !1,
            lerp: 0.1,
            class: "is-inview",
            scrollbarContainer: !1,
            scrollbarClass: "c-scrollbar",
            scrollingClass: "has-scroll-scrolling",
            draggingClass: "has-scroll-dragging",
            smoothClass: "has-scroll-smooth",
            initClass: "has-scroll-init",
            getSpeed: !1,
            getDirection: !1,
            scrollFromAnywhere: !1,
            multiplier: 1,
            firefoxMultiplier: 50,
            touchMultiplier: 2,
            resetNativeScroll: !0,
            tablet: {
              smooth: !1,
              direction: "vertical",
              gestureDirection: "vertical",
              breakpoint: 1024,
            },
            smartphone: {
              smooth: !1,
              direction: "vertical",
              gestureDirection: "vertical",
            },
          },
          P = (function () {
            function t() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              r(this, t),
                Object.assign(this, M, e),
                (this.smartphone = M.smartphone),
                e.smartphone && Object.assign(this.smartphone, e.smartphone),
                (this.tablet = M.tablet),
                e.tablet && Object.assign(this.tablet, e.tablet),
                (this.namespace = "locomotive"),
                (this.html = document.documentElement),
                (this.windowHeight = window.innerHeight),
                (this.windowWidth = window.innerWidth),
                (this.windowMiddle = {
                  x: this.windowWidth / 2,
                  y: this.windowHeight / 2,
                }),
                (this.els = {}),
                (this.currentElements = {}),
                (this.listeners = {}),
                (this.hasScrollTicking = !1),
                (this.hasCallEventSet = !1),
                (this.checkScroll = this.checkScroll.bind(this)),
                (this.checkResize = this.checkResize.bind(this)),
                (this.checkEvent = this.checkEvent.bind(this)),
                (this.instance = {
                  scroll: { x: 0, y: 0 },
                  limit: {
                    x: this.html.offsetHeight,
                    y: this.html.offsetHeight,
                  },
                  currentElements: this.currentElements,
                }),
                this.isMobile
                  ? this.isTablet
                    ? (this.context = "tablet")
                    : (this.context = "smartphone")
                  : (this.context = "desktop"),
                this.isMobile &&
                  (this.direction = this[this.context].direction),
                "horizontal" === this.direction
                  ? (this.directionAxis = "x")
                  : (this.directionAxis = "y"),
                this.getDirection && (this.instance.direction = null),
                this.getDirection && (this.instance.speed = 0),
                this.html.classList.add(this.initClass),
                window.addEventListener("resize", this.checkResize, !1);
            }
            return (
              o(t, [
                {
                  key: "init",
                  value: function () {
                    this.initEvents();
                  },
                },
                {
                  key: "checkScroll",
                  value: function () {
                    this.dispatchScroll();
                  },
                },
                {
                  key: "checkResize",
                  value: function () {
                    var t = this;
                    this.resizeTick ||
                      ((this.resizeTick = !0),
                      requestAnimationFrame(function () {
                        t.resize(), (t.resizeTick = !1);
                      }));
                  },
                },
                { key: "resize", value: function () {} },
                {
                  key: "checkContext",
                  value: function () {
                    if (this.reloadOnContextChange) {
                      (this.isMobile =
                        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                          navigator.userAgent
                        ) ||
                        ("MacIntel" === navigator.platform &&
                          navigator.maxTouchPoints > 1) ||
                        this.windowWidth < this.tablet.breakpoint),
                        (this.isTablet =
                          this.isMobile &&
                          this.windowWidth >= this.tablet.breakpoint);
                      var t = this.context;
                      if (
                        (this.isMobile
                          ? this.isTablet
                            ? (this.context = "tablet")
                            : (this.context = "smartphone")
                          : (this.context = "desktop"),
                        t != this.context)
                      )
                        ("desktop" == t ? this.smooth : this[t].smooth) !=
                          ("desktop" == this.context
                            ? this.smooth
                            : this[this.context].smooth) &&
                          window.location.reload();
                    }
                  },
                },
                {
                  key: "initEvents",
                  value: function () {
                    var t = this;
                    (this.scrollToEls = this.el.querySelectorAll(
                      "[data-".concat(this.name, "-to]")
                    )),
                      (this.setScrollTo = this.setScrollTo.bind(this)),
                      this.scrollToEls.forEach(function (e) {
                        e.addEventListener("click", t.setScrollTo, !1);
                      });
                  },
                },
                {
                  key: "setScrollTo",
                  value: function (t) {
                    t.preventDefault(),
                      this.scrollTo(
                        t.currentTarget.getAttribute(
                          "data-".concat(this.name, "-href")
                        ) || t.currentTarget.getAttribute("href"),
                        {
                          offset: t.currentTarget.getAttribute(
                            "data-".concat(this.name, "-offset")
                          ),
                        }
                      );
                  },
                },
                { key: "addElements", value: function () {} },
                {
                  key: "detectElements",
                  value: function (t) {
                    var e = this,
                      i = this.instance.scroll.y,
                      n = i + this.windowHeight,
                      r = this.instance.scroll.x,
                      s = r + this.windowWidth;
                    Object.entries(this.els).forEach(function (o) {
                      var a = _(o, 2),
                        l = a[0],
                        c = a[1];
                      if (
                        (!c ||
                          (c.inView && !t) ||
                          ("horizontal" === e.direction
                            ? s >= c.left && r < c.right && e.setInView(c, l)
                            : n >= c.top && i < c.bottom && e.setInView(c, l)),
                        c && c.inView)
                      )
                        if ("horizontal" === e.direction) {
                          var h = c.right - c.left;
                          (c.progress =
                            (e.instance.scroll.x - (c.left - e.windowWidth)) /
                            (h + e.windowWidth)),
                            (s < c.left || r > c.right) && e.setOutOfView(c, l);
                        } else {
                          var u = c.bottom - c.top;
                          (c.progress =
                            (e.instance.scroll.y - (c.top - e.windowHeight)) /
                            (u + e.windowHeight)),
                            (n < c.top || i > c.bottom) && e.setOutOfView(c, l);
                        }
                    }),
                      (this.hasScrollTicking = !1);
                  },
                },
                {
                  key: "setInView",
                  value: function (t, e) {
                    (this.els[e].inView = !0),
                      t.el.classList.add(t.class),
                      (this.currentElements[e] = t),
                      t.call &&
                        this.hasCallEventSet &&
                        (this.dispatchCall(t, "enter"),
                        t.repeat || (this.els[e].call = !1));
                  },
                },
                {
                  key: "setOutOfView",
                  value: function (t, e) {
                    var i = this;
                    (this.els[e].inView = !1),
                      Object.keys(this.currentElements).forEach(function (t) {
                        t === e && delete i.currentElements[t];
                      }),
                      t.call &&
                        this.hasCallEventSet &&
                        this.dispatchCall(t, "exit"),
                      t.repeat && t.el.classList.remove(t.class);
                  },
                },
                {
                  key: "dispatchCall",
                  value: function (t, e) {
                    (this.callWay = e),
                      (this.callValue = t.call.split(",").map(function (t) {
                        return t.trim();
                      })),
                      (this.callObj = t),
                      1 == this.callValue.length &&
                        (this.callValue = this.callValue[0]);
                    var i = new Event(this.namespace + "call");
                    this.el.dispatchEvent(i);
                  },
                },
                {
                  key: "dispatchScroll",
                  value: function () {
                    var t = new Event(this.namespace + "scroll");
                    this.el.dispatchEvent(t);
                  },
                },
                {
                  key: "setEvents",
                  value: function (t, e) {
                    this.listeners[t] || (this.listeners[t] = []);
                    var i = this.listeners[t];
                    i.push(e),
                      1 === i.length &&
                        this.el.addEventListener(
                          this.namespace + t,
                          this.checkEvent,
                          !1
                        ),
                      "call" === t &&
                        ((this.hasCallEventSet = !0), this.detectElements(!0));
                  },
                },
                {
                  key: "unsetEvents",
                  value: function (t, e) {
                    if (this.listeners[t]) {
                      var i = this.listeners[t],
                        n = i.indexOf(e);
                      n < 0 ||
                        (i.splice(n, 1),
                        0 === i.index &&
                          this.el.removeEventListener(
                            this.namespace + t,
                            this.checkEvent,
                            !1
                          ));
                    }
                  },
                },
                {
                  key: "checkEvent",
                  value: function (t) {
                    var e = this,
                      i = t.type.replace(this.namespace, ""),
                      n = this.listeners[i];
                    n &&
                      0 !== n.length &&
                      n.forEach(function (t) {
                        switch (i) {
                          case "scroll":
                            return t(e.instance);
                          case "call":
                            return t(e.callValue, e.callWay, e.callObj);
                          default:
                            return t();
                        }
                      });
                  },
                },
                { key: "startScroll", value: function () {} },
                { key: "stopScroll", value: function () {} },
                {
                  key: "setScroll",
                  value: function (t, e) {
                    this.instance.scroll = { x: 0, y: 0 };
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var t = this;
                    window.removeEventListener("resize", this.checkResize, !1),
                      Object.keys(this.listeners).forEach(function (e) {
                        t.el.removeEventListener(
                          t.namespace + e,
                          t.checkEvent,
                          !1
                        );
                      }),
                      (this.listeners = {}),
                      this.scrollToEls.forEach(function (e) {
                        e.removeEventListener("click", t.setScrollTo, !1);
                      }),
                      this.html.classList.remove(this.initClass);
                  },
                },
              ]),
              t
            );
          })(),
          C =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : void 0 !== n
              ? n
              : "undefined" != typeof self
              ? self
              : {};
        function D(t, e) {
          return t((e = { exports: {} }), e.exports), e.exports;
        }
        var L = D(function (t, e) {
            t.exports = {
              polyfill: function () {
                var t = window,
                  e = document;
                if (
                  !("scrollBehavior" in e.documentElement.style) ||
                  !0 === t.__forceSmoothScrollPolyfill__
                ) {
                  var i,
                    n = t.HTMLElement || t.Element,
                    r = {
                      scroll: t.scroll || t.scrollTo,
                      scrollBy: t.scrollBy,
                      elementScroll: n.prototype.scroll || a,
                      scrollIntoView: n.prototype.scrollIntoView,
                    },
                    s =
                      t.performance && t.performance.now
                        ? t.performance.now.bind(t.performance)
                        : Date.now,
                    o =
                      ((i = t.navigator.userAgent),
                      new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(
                        i
                      )
                        ? 1
                        : 0);
                  (t.scroll = t.scrollTo =
                    function () {
                      void 0 !== arguments[0] &&
                        (!0 !== l(arguments[0])
                          ? p.call(
                              t,
                              e.body,
                              void 0 !== arguments[0].left
                                ? ~~arguments[0].left
                                : t.scrollX || t.pageXOffset,
                              void 0 !== arguments[0].top
                                ? ~~arguments[0].top
                                : t.scrollY || t.pageYOffset
                            )
                          : r.scroll.call(
                              t,
                              void 0 !== arguments[0].left
                                ? arguments[0].left
                                : "object" != typeof arguments[0]
                                ? arguments[0]
                                : t.scrollX || t.pageXOffset,
                              void 0 !== arguments[0].top
                                ? arguments[0].top
                                : void 0 !== arguments[1]
                                ? arguments[1]
                                : t.scrollY || t.pageYOffset
                            ));
                    }),
                    (t.scrollBy = function () {
                      void 0 !== arguments[0] &&
                        (l(arguments[0])
                          ? r.scrollBy.call(
                              t,
                              void 0 !== arguments[0].left
                                ? arguments[0].left
                                : "object" != typeof arguments[0]
                                ? arguments[0]
                                : 0,
                              void 0 !== arguments[0].top
                                ? arguments[0].top
                                : void 0 !== arguments[1]
                                ? arguments[1]
                                : 0
                            )
                          : p.call(
                              t,
                              e.body,
                              ~~arguments[0].left +
                                (t.scrollX || t.pageXOffset),
                              ~~arguments[0].top + (t.scrollY || t.pageYOffset)
                            ));
                    }),
                    (n.prototype.scroll = n.prototype.scrollTo =
                      function () {
                        if (void 0 !== arguments[0])
                          if (!0 !== l(arguments[0])) {
                            var t = arguments[0].left,
                              e = arguments[0].top;
                            p.call(
                              this,
                              this,
                              void 0 === t ? this.scrollLeft : ~~t,
                              void 0 === e ? this.scrollTop : ~~e
                            );
                          } else {
                            if (
                              "number" == typeof arguments[0] &&
                              void 0 === arguments[1]
                            )
                              throw new SyntaxError(
                                "Value could not be converted"
                              );
                            r.elementScroll.call(
                              this,
                              void 0 !== arguments[0].left
                                ? ~~arguments[0].left
                                : "object" != typeof arguments[0]
                                ? ~~arguments[0]
                                : this.scrollLeft,
                              void 0 !== arguments[0].top
                                ? ~~arguments[0].top
                                : void 0 !== arguments[1]
                                ? ~~arguments[1]
                                : this.scrollTop
                            );
                          }
                      }),
                    (n.prototype.scrollBy = function () {
                      void 0 !== arguments[0] &&
                        (!0 !== l(arguments[0])
                          ? this.scroll({
                              left: ~~arguments[0].left + this.scrollLeft,
                              top: ~~arguments[0].top + this.scrollTop,
                              behavior: arguments[0].behavior,
                            })
                          : r.elementScroll.call(
                              this,
                              void 0 !== arguments[0].left
                                ? ~~arguments[0].left + this.scrollLeft
                                : ~~arguments[0] + this.scrollLeft,
                              void 0 !== arguments[0].top
                                ? ~~arguments[0].top + this.scrollTop
                                : ~~arguments[1] + this.scrollTop
                            ));
                    }),
                    (n.prototype.scrollIntoView = function () {
                      if (!0 !== l(arguments[0])) {
                        var i = d(this),
                          n = i.getBoundingClientRect(),
                          s = this.getBoundingClientRect();
                        i !== e.body
                          ? (p.call(
                              this,
                              i,
                              i.scrollLeft + s.left - n.left,
                              i.scrollTop + s.top - n.top
                            ),
                            "fixed" !== t.getComputedStyle(i).position &&
                              t.scrollBy({
                                left: n.left,
                                top: n.top,
                                behavior: "smooth",
                              }))
                          : t.scrollBy({
                              left: s.left,
                              top: s.top,
                              behavior: "smooth",
                            });
                      } else
                        r.scrollIntoView.call(
                          this,
                          void 0 === arguments[0] || arguments[0]
                        );
                    });
                }
                function a(t, e) {
                  (this.scrollLeft = t), (this.scrollTop = e);
                }
                function l(t) {
                  if (
                    null === t ||
                    "object" != typeof t ||
                    void 0 === t.behavior ||
                    "auto" === t.behavior ||
                    "instant" === t.behavior
                  )
                    return !0;
                  if ("object" == typeof t && "smooth" === t.behavior)
                    return !1;
                  throw new TypeError(
                    "behavior member of ScrollOptions " +
                      t.behavior +
                      " is not a valid value for enumeration ScrollBehavior."
                  );
                }
                function c(t, e) {
                  return "Y" === e
                    ? t.clientHeight + o < t.scrollHeight
                    : "X" === e
                    ? t.clientWidth + o < t.scrollWidth
                    : void 0;
                }
                function h(e, i) {
                  var n = t.getComputedStyle(e, null)["overflow" + i];
                  return "auto" === n || "scroll" === n;
                }
                function u(t) {
                  var e = c(t, "Y") && h(t, "Y"),
                    i = c(t, "X") && h(t, "X");
                  return e || i;
                }
                function d(t) {
                  for (; t !== e.body && !1 === u(t); )
                    t = t.parentNode || t.host;
                  return t;
                }
                function f(e) {
                  var i,
                    n,
                    r,
                    o,
                    a = (s() - e.startTime) / 468;
                  (o = a = a > 1 ? 1 : a),
                    (i = 0.5 * (1 - Math.cos(Math.PI * o))),
                    (n = e.startX + (e.x - e.startX) * i),
                    (r = e.startY + (e.y - e.startY) * i),
                    e.method.call(e.scrollable, n, r),
                    (n === e.x && r === e.y) ||
                      t.requestAnimationFrame(f.bind(t, e));
                }
                function p(i, n, o) {
                  var l,
                    c,
                    h,
                    u,
                    d = s();
                  i === e.body
                    ? ((l = t),
                      (c = t.scrollX || t.pageXOffset),
                      (h = t.scrollY || t.pageYOffset),
                      (u = r.scroll))
                    : ((l = i), (c = i.scrollLeft), (h = i.scrollTop), (u = a)),
                    f({
                      scrollable: l,
                      method: u,
                      startTime: d,
                      startX: c,
                      startY: h,
                      x: n,
                      y: o,
                    });
                }
              },
            };
          }),
          B =
            (L.polyfill,
            (function (t) {
              h(i, t);
              var e = g(i);
              function i() {
                var t,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return (
                  r(this, i),
                  (t = e.call(this, n)).resetNativeScroll &&
                    (history.scrollRestoration &&
                      (history.scrollRestoration = "manual"),
                    window.scrollTo(0, 0)),
                  window.addEventListener("scroll", t.checkScroll, !1),
                  void 0 === window.smoothscrollPolyfill &&
                    ((window.smoothscrollPolyfill = L),
                    window.smoothscrollPolyfill.polyfill()),
                  t
                );
              }
              return (
                o(i, [
                  {
                    key: "init",
                    value: function () {
                      (this.instance.scroll.y = window.pageYOffset),
                        this.addElements(),
                        this.detectElements(),
                        y(u(i.prototype), "init", this).call(this);
                    },
                  },
                  {
                    key: "checkScroll",
                    value: function () {
                      var t = this;
                      y(u(i.prototype), "checkScroll", this).call(this),
                        this.getDirection && this.addDirection(),
                        this.getSpeed &&
                          (this.addSpeed(), (this.speedTs = Date.now())),
                        (this.instance.scroll.y = window.pageYOffset),
                        Object.entries(this.els).length &&
                          (this.hasScrollTicking ||
                            (requestAnimationFrame(function () {
                              t.detectElements();
                            }),
                            (this.hasScrollTicking = !0)));
                    },
                  },
                  {
                    key: "addDirection",
                    value: function () {
                      window.pageYOffset > this.instance.scroll.y
                        ? "down" !== this.instance.direction &&
                          (this.instance.direction = "down")
                        : window.pageYOffset < this.instance.scroll.y &&
                          "up" !== this.instance.direction &&
                          (this.instance.direction = "up");
                    },
                  },
                  {
                    key: "addSpeed",
                    value: function () {
                      window.pageYOffset != this.instance.scroll.y
                        ? (this.instance.speed =
                            (window.pageYOffset - this.instance.scroll.y) /
                            Math.max(1, Date.now() - this.speedTs))
                        : (this.instance.speed = 0);
                    },
                  },
                  {
                    key: "resize",
                    value: function () {
                      Object.entries(this.els).length &&
                        ((this.windowHeight = window.innerHeight),
                        this.updateElements());
                    },
                  },
                  {
                    key: "addElements",
                    value: function () {
                      var t = this;
                      (this.els = {}),
                        this.el
                          .querySelectorAll("[data-" + this.name + "]")
                          .forEach(function (e, i) {
                            e.getBoundingClientRect();
                            var n,
                              r,
                              s,
                              o = e.dataset[t.name + "Class"] || t.class,
                              a =
                                "string" == typeof e.dataset[t.name + "Id"]
                                  ? e.dataset[t.name + "Id"]
                                  : i,
                              l =
                                "string" == typeof e.dataset[t.name + "Offset"]
                                  ? e.dataset[t.name + "Offset"].split(",")
                                  : t.offset,
                              c = e.dataset[t.name + "Repeat"],
                              h = e.dataset[t.name + "Call"],
                              u = e.dataset[t.name + "Target"],
                              d = (s =
                                void 0 !== u
                                  ? document.querySelector("".concat(u))
                                  : e).getBoundingClientRect();
                            (n = d.top + t.instance.scroll.y),
                              (r = d.left + t.instance.scroll.x);
                            var f = n + s.offsetHeight,
                              p = r + s.offsetWidth;
                            "#header" === u && console.log(n, f),
                              (c = "false" != c && (null != c || t.repeat));
                            var m = t.getRelativeOffset(l),
                              g = {
                                el: e,
                                targetEl: s,
                                id: a,
                                class: o,
                                top: (n += m[0]),
                                bottom: (f -= m[1]),
                                left: r,
                                right: p,
                                offset: l,
                                progress: 0,
                                repeat: c,
                                inView: !1,
                                call: h,
                              };
                            (t.els[a] = g),
                              e.classList.contains(o) &&
                                t.setInView(t.els[a], a);
                          });
                    },
                  },
                  {
                    key: "updateElements",
                    value: function () {
                      var t = this;
                      Object.entries(this.els).forEach(function (e) {
                        var i = _(e, 2),
                          n = i[0],
                          r = i[1],
                          s =
                            r.targetEl.getBoundingClientRect().top +
                            t.instance.scroll.y,
                          o = s + r.targetEl.offsetHeight,
                          a = t.getRelativeOffset(r.offset);
                        (t.els[n].top = s + a[0]), (t.els[n].bottom = o - a[1]);
                      }),
                        (this.hasScrollTicking = !1);
                    },
                  },
                  {
                    key: "getRelativeOffset",
                    value: function (t) {
                      var e = [0, 0];
                      if (t)
                        for (var i = 0; i < t.length; i++)
                          "string" == typeof t[i]
                            ? t[i].includes("%")
                              ? (e[i] = parseInt(
                                  (t[i].replace("%", "") * this.windowHeight) /
                                    100
                                ))
                              : (e[i] = parseInt(t[i]))
                            : (e[i] = t[i]);
                      return e;
                    },
                  },
                  {
                    key: "scrollTo",
                    value: function (t) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        i = parseInt(e.offset) || 0,
                        n = !!e.callback && e.callback;
                      if ("string" == typeof t) {
                        if ("top" === t) t = this.html;
                        else if ("bottom" === t)
                          t = this.html.offsetHeight - window.innerHeight;
                        else if (!(t = document.querySelector(t))) return;
                      } else if ("number" == typeof t) t = parseInt(t);
                      else if (!t || !t.tagName)
                        return void console.warn(
                          "`target` parameter is not valid"
                        );
                      if (
                        ((i =
                          "number" != typeof t
                            ? t.getBoundingClientRect().top +
                              i +
                              this.instance.scroll.y
                            : t + i),
                        n)
                      ) {
                        i = i.toFixed();
                        var r = function t() {
                          window.pageYOffset.toFixed() === i &&
                            (window.removeEventListener("scroll", t), n());
                        };
                        window.addEventListener("scroll", r);
                      }
                      window.scrollTo({ top: i, behavior: "smooth" });
                    },
                  },
                  {
                    key: "update",
                    value: function () {
                      this.addElements(), this.detectElements();
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      y(u(i.prototype), "destroy", this).call(this),
                        window.removeEventListener(
                          "scroll",
                          this.checkScroll,
                          !1
                        );
                    },
                  },
                ]),
                i
              );
            })(P)),
          j = Object.getOwnPropertySymbols,
          R = Object.prototype.hasOwnProperty,
          I = Object.prototype.propertyIsEnumerable;
        function z(t) {
          if (null == t)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(t);
        }
        function F() {
          try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
              return !1;
            for (var e = {}, i = 0; i < 10; i++)
              e["_" + String.fromCharCode(i)] = i;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(e)
                .map(function (t) {
                  return e[t];
                })
                .join("")
            )
              return !1;
            var n = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (t) {
                n[t] = t;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, n)).join("")
            );
          } catch (t) {
            return !1;
          }
        }
        var W = F()
          ? Object.assign
          : function (t, e) {
              for (var i, n, r = z(t), s = 1; s < arguments.length; s++) {
                for (var o in (i = Object(arguments[s])))
                  R.call(i, o) && (r[o] = i[o]);
                if (j) {
                  n = j(i);
                  for (var a = 0; a < n.length; a++)
                    I.call(i, n[a]) && (r[n[a]] = i[n[a]]);
                }
              }
              return r;
            };
        function Y() {}
        Y.prototype = {
          on: function (t, e, i) {
            var n = this.e || (this.e = {});
            return (n[t] || (n[t] = [])).push({ fn: e, ctx: i }), this;
          },
          once: function (t, e, i) {
            var n = this;
            function r() {
              n.off(t, r), e.apply(i, arguments);
            }
            return (r._ = e), this.on(t, r, i);
          },
          emit: function (t) {
            for (
              var e = [].slice.call(arguments, 1),
                i = ((this.e || (this.e = {}))[t] || []).slice(),
                n = 0,
                r = i.length;
              n < r;
              n++
            )
              i[n].fn.apply(i[n].ctx, e);
            return this;
          },
          off: function (t, e) {
            var i = this.e || (this.e = {}),
              n = i[t],
              r = [];
            if (n && e)
              for (var s = 0, o = n.length; s < o; s++)
                n[s].fn !== e && n[s].fn._ !== e && r.push(n[s]);
            return r.length ? (i[t] = r) : delete i[t], this;
          },
        };
        var H = Y,
          q = D(function (t, e) {
            (function () {
              (null !== e ? e : this).Lethargy = (function () {
                function t(t, e, i, n) {
                  (this.stability = null != t ? Math.abs(t) : 8),
                    (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
                    (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
                    (this.delay = null != n ? n : 150),
                    (this.lastUpDeltas = function () {
                      var t, e, i;
                      for (
                        i = [], t = 1, e = 2 * this.stability;
                        1 <= e ? t <= e : t >= e;
                        1 <= e ? t++ : t--
                      )
                        i.push(null);
                      return i;
                    }.call(this)),
                    (this.lastDownDeltas = function () {
                      var t, e, i;
                      for (
                        i = [], t = 1, e = 2 * this.stability;
                        1 <= e ? t <= e : t >= e;
                        1 <= e ? t++ : t--
                      )
                        i.push(null);
                      return i;
                    }.call(this)),
                    (this.deltasTimestamp = function () {
                      var t, e, i;
                      for (
                        i = [], t = 1, e = 2 * this.stability;
                        1 <= e ? t <= e : t >= e;
                        1 <= e ? t++ : t--
                      )
                        i.push(null);
                      return i;
                    }.call(this));
                }
                return (
                  (t.prototype.check = function (t) {
                    var e;
                    return (
                      null != (t = t.originalEvent || t).wheelDelta
                        ? (e = t.wheelDelta)
                        : null != t.deltaY
                        ? (e = -40 * t.deltaY)
                        : (null == t.detail && 0 !== t.detail) ||
                          (e = -40 * t.detail),
                      this.deltasTimestamp.push(Date.now()),
                      this.deltasTimestamp.shift(),
                      e > 0
                        ? (this.lastUpDeltas.push(e),
                          this.lastUpDeltas.shift(),
                          this.isInertia(1))
                        : (this.lastDownDeltas.push(e),
                          this.lastDownDeltas.shift(),
                          this.isInertia(-1))
                    );
                  }),
                  (t.prototype.isInertia = function (t) {
                    var e, i, n, r, s, o, a;
                    return null ===
                      (e =
                        -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                      ? t
                      : !(
                          this.deltasTimestamp[2 * this.stability - 2] +
                            this.delay >
                            Date.now() && e[0] === e[2 * this.stability - 1]
                        ) &&
                          ((n = e.slice(0, this.stability)),
                          (i = e.slice(this.stability, 2 * this.stability)),
                          (a = n.reduce(function (t, e) {
                            return t + e;
                          })),
                          (s = i.reduce(function (t, e) {
                            return t + e;
                          })),
                          (o = a / n.length),
                          (r = s / i.length),
                          Math.abs(o) < Math.abs(r * this.tolerance) &&
                            this.sensitivity < Math.abs(r) &&
                            t);
                  }),
                  (t.prototype.showLastUpDeltas = function () {
                    return this.lastUpDeltas;
                  }),
                  (t.prototype.showLastDownDeltas = function () {
                    return this.lastDownDeltas;
                  }),
                  t
                );
              })();
            }).call(C);
          }),
          X = {
            hasWheelEvent: "onwheel" in document,
            hasMouseWheelEvent: "onmousewheel" in document,
            hasTouch:
              "ontouchstart" in window ||
              window.TouchEvent ||
              (window.DocumentTouch && document instanceof DocumentTouch),
            hasTouchWin:
              navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
            hasPointer: !!window.navigator.msPointerEnabled,
            hasKeyDown: "onkeydown" in document,
            isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
          },
          N = Object.prototype.toString,
          U = Object.prototype.hasOwnProperty,
          V = function (t) {
            if (!t)
              return console.warn("bindAll requires at least one argument.");
            var e = Array.prototype.slice.call(arguments, 1);
            if (0 === e.length)
              for (var i in t)
                U.call(t, i) &&
                  "function" == typeof t[i] &&
                  "[object Function]" == N.call(t[i]) &&
                  e.push(i);
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              t[r] = Q(t[r], t);
            }
          };
        function Q(t, e) {
          return function () {
            return t.apply(e, arguments);
          };
        }
        var G = q.Lethargy,
          K = "virtualscroll",
          $ = J,
          Z = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SPACE: 32 };
        function J(t) {
          V(
            this,
            "_onWheel",
            "_onMouseWheel",
            "_onTouchStart",
            "_onTouchMove",
            "_onKeyDown"
          ),
            (this.el = window),
            t && t.el && ((this.el = t.el), delete t.el),
            (this.options = W(
              {
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: !1,
                unpreventTouchClass: "vs-touchmove-allowed",
                limitInertia: !1,
                useKeyboard: !0,
                useTouch: !0,
              },
              t
            )),
            this.options.limitInertia && (this._lethargy = new G()),
            (this._emitter = new H()),
            (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
            (this.touchStartX = null),
            (this.touchStartY = null),
            (this.bodyTouchAction = null),
            void 0 !== this.options.passive &&
              (this.listenerOptions = { passive: this.options.passive });
        }
        function tt(t, e, i) {
          return (1 - i) * t + i * e;
        }
        function et(t) {
          var e = {};
          if (window.getComputedStyle) {
            var i = getComputedStyle(t),
              n = i.transform || i.webkitTransform || i.mozTransform,
              r = n.match(/^matrix3d\((.+)\)$/);
            return (
              r
                ? ((e.x = r ? parseFloat(r[1].split(", ")[12]) : 0),
                  (e.y = r ? parseFloat(r[1].split(", ")[13]) : 0))
                : ((r = n.match(/^matrix\((.+)\)$/)),
                  (e.x = r ? parseFloat(r[1].split(", ")[4]) : 0),
                  (e.y = r ? parseFloat(r[1].split(", ")[5]) : 0)),
              e
            );
          }
        }
        function it(t) {
          for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
          return e;
        }
        (J.prototype._notify = function (t) {
          var e = this._event;
          (e.x += e.deltaX),
            (e.y += e.deltaY),
            this._emitter.emit(K, {
              x: e.x,
              y: e.y,
              deltaX: e.deltaX,
              deltaY: e.deltaY,
              originalEvent: t,
            });
        }),
          (J.prototype._onWheel = function (t) {
            var e = this.options;
            if (!this._lethargy || !1 !== this._lethargy.check(t)) {
              var i = this._event;
              (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
                (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
                X.isFirefox &&
                  1 == t.deltaMode &&
                  ((i.deltaX *= e.firefoxMultiplier),
                  (i.deltaY *= e.firefoxMultiplier)),
                (i.deltaX *= e.mouseMultiplier),
                (i.deltaY *= e.mouseMultiplier),
                this._notify(t);
            }
          }),
          (J.prototype._onMouseWheel = function (t) {
            if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
              var e = this._event;
              (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
                (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
                this._notify(t);
            }
          }),
          (J.prototype._onTouchStart = function (t) {
            var e = t.targetTouches ? t.targetTouches[0] : t;
            (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
          }),
          (J.prototype._onTouchMove = function (t) {
            var e = this.options;
            e.preventTouch &&
              !t.target.classList.contains(e.unpreventTouchClass) &&
              t.preventDefault();
            var i = this._event,
              n = t.targetTouches ? t.targetTouches[0] : t;
            (i.deltaX = (n.pageX - this.touchStartX) * e.touchMultiplier),
              (i.deltaY = (n.pageY - this.touchStartY) * e.touchMultiplier),
              (this.touchStartX = n.pageX),
              (this.touchStartY = n.pageY),
              this._notify(t);
          }),
          (J.prototype._onKeyDown = function (t) {
            var e = this._event;
            e.deltaX = e.deltaY = 0;
            var i = window.innerHeight - 40;
            switch (t.keyCode) {
              case Z.LEFT:
              case Z.UP:
                e.deltaY = this.options.keyStep;
                break;
              case Z.RIGHT:
              case Z.DOWN:
                e.deltaY = -this.options.keyStep;
                break;
              case t.shiftKey:
                e.deltaY = i;
                break;
              case Z.SPACE:
                e.deltaY = -i;
                break;
              default:
                return;
            }
            this._notify(t);
          }),
          (J.prototype._bind = function () {
            X.hasWheelEvent &&
              this.el.addEventListener(
                "wheel",
                this._onWheel,
                this.listenerOptions
              ),
              X.hasMouseWheelEvent &&
                this.el.addEventListener(
                  "mousewheel",
                  this._onMouseWheel,
                  this.listenerOptions
                ),
              X.hasTouch &&
                this.options.useTouch &&
                (this.el.addEventListener(
                  "touchstart",
                  this._onTouchStart,
                  this.listenerOptions
                ),
                this.el.addEventListener(
                  "touchmove",
                  this._onTouchMove,
                  this.listenerOptions
                )),
              X.hasPointer &&
                X.hasTouchWin &&
                ((this.bodyTouchAction = document.body.style.msTouchAction),
                (document.body.style.msTouchAction = "none"),
                this.el.addEventListener(
                  "MSPointerDown",
                  this._onTouchStart,
                  !0
                ),
                this.el.addEventListener(
                  "MSPointerMove",
                  this._onTouchMove,
                  !0
                )),
              X.hasKeyDown &&
                this.options.useKeyboard &&
                document.addEventListener("keydown", this._onKeyDown);
          }),
          (J.prototype._unbind = function () {
            X.hasWheelEvent &&
              this.el.removeEventListener("wheel", this._onWheel),
              X.hasMouseWheelEvent &&
                this.el.removeEventListener("mousewheel", this._onMouseWheel),
              X.hasTouch &&
                (this.el.removeEventListener("touchstart", this._onTouchStart),
                this.el.removeEventListener("touchmove", this._onTouchMove)),
              X.hasPointer &&
                X.hasTouchWin &&
                ((document.body.style.msTouchAction = this.bodyTouchAction),
                this.el.removeEventListener(
                  "MSPointerDown",
                  this._onTouchStart,
                  !0
                ),
                this.el.removeEventListener(
                  "MSPointerMove",
                  this._onTouchMove,
                  !0
                )),
              X.hasKeyDown &&
                this.options.useKeyboard &&
                document.removeEventListener("keydown", this._onKeyDown);
          }),
          (J.prototype.on = function (t, e) {
            this._emitter.on(K, t, e);
            var i = this._emitter.e;
            i && i[K] && 1 === i[K].length && this._bind();
          }),
          (J.prototype.off = function (t, e) {
            this._emitter.off(K, t, e);
            var i = this._emitter.e;
            (!i[K] || i[K].length <= 0) && this._unbind();
          }),
          (J.prototype.reset = function () {
            var t = this._event;
            (t.x = 0), (t.y = 0);
          }),
          (J.prototype.destroy = function () {
            this._emitter.off(), this._unbind();
          });
        var nt = 4,
          rt = 0.001,
          st = 1e-7,
          ot = 10,
          at = 11,
          lt = 1 / (at - 1),
          ct = "function" == typeof Float32Array;
        function ht(t, e) {
          return 1 - 3 * e + 3 * t;
        }
        function ut(t, e) {
          return 3 * e - 6 * t;
        }
        function dt(t) {
          return 3 * t;
        }
        function ft(t, e, i) {
          return ((ht(e, i) * t + ut(e, i)) * t + dt(e)) * t;
        }
        function pt(t, e, i) {
          return 3 * ht(e, i) * t * t + 2 * ut(e, i) * t + dt(e);
        }
        function mt(t, e, i, n, r) {
          var s,
            o,
            a = 0;
          do {
            (s = ft((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
          } while (Math.abs(s) > st && ++a < ot);
          return o;
        }
        function gt(t, e, i, n) {
          for (var r = 0; r < nt; ++r) {
            var s = pt(e, i, n);
            if (0 === s) return e;
            e -= (ft(e, i, n) - t) / s;
          }
          return e;
        }
        function vt(t) {
          return t;
        }
        var yt = function (t, e, i, n) {
            if (!(0 <= t && t <= 1 && 0 <= i && i <= 1))
              throw new Error("bezier x values must be in [0, 1] range");
            if (t === e && i === n) return vt;
            for (
              var r = ct ? new Float32Array(at) : new Array(at), s = 0;
              s < at;
              ++s
            )
              r[s] = ft(s * lt, t, i);
            return function (s) {
              return 0 === s
                ? 0
                : 1 === s
                ? 1
                : ft(
                    (function (e) {
                      for (
                        var n = 0, s = 1, o = at - 1;
                        s !== o && r[s] <= e;
                        ++s
                      )
                        n += lt;
                      --s;
                      var a = n + ((e - r[s]) / (r[s + 1] - r[s])) * lt,
                        l = pt(a, t, i);
                      return l >= rt
                        ? gt(e, a, t, i)
                        : 0 === l
                        ? a
                        : mt(e, n, n + lt, t, i);
                    })(s),
                    e,
                    n
                  );
            };
          },
          _t = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SPACE: 32,
            TAB: 9,
            PAGEUP: 33,
            PAGEDOWN: 34,
            HOME: 36,
            END: 35,
          },
          bt = (function (t) {
            h(i, t);
            var e = g(i);
            function i() {
              var t,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              return (
                r(this, i),
                history.scrollRestoration &&
                  (history.scrollRestoration = "manual"),
                window.scrollTo(0, 0),
                (t = e.call(this, n)).inertia && (t.lerp = 0.1 * t.inertia),
                (t.isScrolling = !1),
                (t.isDraggingScrollbar = !1),
                (t.isTicking = !1),
                (t.hasScrollTicking = !1),
                (t.parallaxElements = {}),
                (t.stop = !1),
                (t.scrollbarContainer = n.scrollbarContainer),
                (t.checkKey = t.checkKey.bind(p(t))),
                window.addEventListener("keydown", t.checkKey, !1),
                t
              );
            }
            return (
              o(i, [
                {
                  key: "init",
                  value: function () {
                    var t = this;
                    this.html.classList.add(this.smoothClass),
                      this.html.setAttribute(
                        "data-".concat(this.name, "-direction"),
                        this.direction
                      ),
                      (this.instance = c(
                        { delta: { x: 0, y: 0 } },
                        this.instance
                      )),
                      (this.vs = new $({
                        el: this.scrollFromAnywhere ? document : this.el,
                        mouseMultiplier:
                          navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                        firefoxMultiplier: this.firefoxMultiplier,
                        touchMultiplier: this.touchMultiplier,
                        useKeyboard: !1,
                        passive: !0,
                      })),
                      this.vs.on(function (e) {
                        t.stop ||
                          t.isDraggingScrollbar ||
                          requestAnimationFrame(function () {
                            t.updateDelta(e),
                              t.isScrolling || t.startScrolling();
                          });
                      }),
                      this.setScrollLimit(),
                      this.initScrollBar(),
                      this.addSections(),
                      this.addElements(),
                      this.checkScroll(!0),
                      this.transformElements(!0, !0),
                      y(u(i.prototype), "init", this).call(this);
                  },
                },
                {
                  key: "setScrollLimit",
                  value: function () {
                    if (
                      ((this.instance.limit.y =
                        this.el.offsetHeight - this.windowHeight),
                      "horizontal" === this.direction)
                    ) {
                      for (
                        var t = 0, e = this.el.children, i = 0;
                        i < e.length;
                        i++
                      )
                        t += e[i].offsetWidth;
                      this.instance.limit.x = t - this.windowWidth;
                    }
                  },
                },
                {
                  key: "startScrolling",
                  value: function () {
                    (this.startScrollTs = Date.now()),
                      (this.isScrolling = !0),
                      this.checkScroll(),
                      this.html.classList.add(this.scrollingClass);
                  },
                },
                {
                  key: "stopScrolling",
                  value: function () {
                    cancelAnimationFrame(this.checkScrollRaf),
                      this.scrollToRaf &&
                        (cancelAnimationFrame(this.scrollToRaf),
                        (this.scrollToRaf = null)),
                      (this.isScrolling = !1),
                      (this.instance.scroll.y = Math.round(
                        this.instance.scroll.y
                      )),
                      this.html.classList.remove(this.scrollingClass);
                  },
                },
                {
                  key: "checkKey",
                  value: function (t) {
                    var e = this;
                    if (this.stop)
                      t.keyCode == _t.TAB &&
                        requestAnimationFrame(function () {
                          (e.html.scrollTop = 0),
                            (document.body.scrollTop = 0),
                            (e.html.scrollLeft = 0),
                            (document.body.scrollLeft = 0);
                        });
                    else {
                      switch (t.keyCode) {
                        case _t.TAB:
                          requestAnimationFrame(function () {
                            (e.html.scrollTop = 0),
                              (document.body.scrollTop = 0),
                              (e.html.scrollLeft = 0),
                              (document.body.scrollLeft = 0),
                              e.scrollTo(document.activeElement, {
                                offset: -window.innerHeight / 2,
                              });
                          });
                          break;
                        case _t.UP:
                          this.instance.delta[this.directionAxis] -= 240;
                          break;
                        case _t.DOWN:
                          this.instance.delta[this.directionAxis] += 240;
                          break;
                        case _t.PAGEUP:
                          this.instance.delta[this.directionAxis] -=
                            window.innerHeight;
                          break;
                        case _t.PAGEDOWN:
                          this.instance.delta[this.directionAxis] +=
                            window.innerHeight;
                          break;
                        case _t.HOME:
                          this.instance.delta[this.directionAxis] -=
                            this.instance.limit[this.directionAxis];
                          break;
                        case _t.END:
                          this.instance.delta[this.directionAxis] +=
                            this.instance.limit[this.directionAxis];
                          break;
                        case _t.SPACE:
                          document.activeElement instanceof HTMLInputElement ||
                            document.activeElement instanceof
                              HTMLTextAreaElement ||
                            (t.shiftKey
                              ? (this.instance.delta[this.directionAxis] -=
                                  window.innerHeight)
                              : (this.instance.delta[this.directionAxis] +=
                                  window.innerHeight));
                          break;
                        default:
                          return;
                      }
                      this.instance.delta[this.directionAxis] < 0 &&
                        (this.instance.delta[this.directionAxis] = 0),
                        this.instance.delta[this.directionAxis] >
                          this.instance.limit[this.directionAxis] &&
                          (this.instance.delta[this.directionAxis] =
                            this.instance.limit[this.directionAxis]),
                        this.stopScrolling(),
                        (this.isScrolling = !0),
                        this.checkScroll(),
                        this.html.classList.add(this.scrollingClass);
                    }
                  },
                },
                {
                  key: "checkScroll",
                  value: function () {
                    var t = this,
                      e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                    if (e || this.isScrolling || this.isDraggingScrollbar) {
                      this.hasScrollTicking ||
                        ((this.checkScrollRaf = requestAnimationFrame(
                          function () {
                            return t.checkScroll();
                          }
                        )),
                        (this.hasScrollTicking = !0)),
                        this.updateScroll();
                      var n = Math.abs(
                          this.instance.delta[this.directionAxis] -
                            this.instance.scroll[this.directionAxis]
                        ),
                        r = Date.now() - this.startScrollTs;
                      if (
                        (!this.animatingScroll &&
                          r > 100 &&
                          ((n < 0.5 &&
                            0 != this.instance.delta[this.directionAxis]) ||
                            (n < 0.5 &&
                              0 == this.instance.delta[this.directionAxis])) &&
                          this.stopScrolling(),
                        Object.entries(this.sections).forEach(function (e) {
                          var i = _(e, 2),
                            n = (i[0], i[1]);
                          n.persistent ||
                          (t.instance.scroll[t.directionAxis] >
                            n.offset[t.directionAxis] &&
                            t.instance.scroll[t.directionAxis] <
                              n.limit[t.directionAxis])
                            ? ("horizontal" === t.direction
                                ? t.transform(
                                    n.el,
                                    -t.instance.scroll[t.directionAxis],
                                    0
                                  )
                                : t.transform(
                                    n.el,
                                    0,
                                    -t.instance.scroll[t.directionAxis]
                                  ),
                              n.inView ||
                                ((n.inView = !0),
                                (n.el.style.opacity = 1),
                                (n.el.style.pointerEvents = "all"),
                                n.el.setAttribute(
                                  "data-".concat(t.name, "-section-inview"),
                                  ""
                                )))
                            : (n.inView &&
                                ((n.inView = !1),
                                (n.el.style.opacity = 0),
                                (n.el.style.pointerEvents = "none"),
                                n.el.removeAttribute(
                                  "data-".concat(t.name, "-section-inview")
                                )),
                              t.transform(n.el, 0, 0));
                        }),
                        this.getDirection && this.addDirection(),
                        this.getSpeed &&
                          (this.addSpeed(), (this.speedTs = Date.now())),
                        this.detectElements(),
                        this.transformElements(),
                        this.hasScrollbar)
                      ) {
                        var s =
                          (this.instance.scroll[this.directionAxis] /
                            this.instance.limit[this.directionAxis]) *
                          this.scrollBarLimit[this.directionAxis];
                        "horizontal" === this.direction
                          ? this.transform(this.scrollbarThumb, s, 0)
                          : this.transform(this.scrollbarThumb, 0, s);
                      }
                      y(u(i.prototype), "checkScroll", this).call(this),
                        (this.hasScrollTicking = !1);
                    }
                  },
                },
                {
                  key: "resize",
                  value: function () {
                    (this.windowHeight = window.innerHeight),
                      (this.windowWidth = window.innerWidth),
                      this.checkContext(),
                      (this.windowMiddle = {
                        x: this.windowWidth / 2,
                        y: this.windowHeight / 2,
                      }),
                      this.update();
                  },
                },
                {
                  key: "updateDelta",
                  value: function (t) {
                    var e,
                      i =
                        this[this.context] &&
                        this[this.context].gestureDirection
                          ? this[this.context].gestureDirection
                          : this.gestureDirection;
                    (e =
                      "both" === i
                        ? t.deltaX + t.deltaY
                        : "vertical" === i
                        ? t.deltaY
                        : "horizontal" === i
                        ? t.deltaX
                        : t.deltaY),
                      (this.instance.delta[this.directionAxis] -=
                        e * this.multiplier),
                      this.instance.delta[this.directionAxis] < 0 &&
                        (this.instance.delta[this.directionAxis] = 0),
                      this.instance.delta[this.directionAxis] >
                        this.instance.limit[this.directionAxis] &&
                        (this.instance.delta[this.directionAxis] =
                          this.instance.limit[this.directionAxis]);
                  },
                },
                {
                  key: "updateScroll",
                  value: function (t) {
                    this.isScrolling || this.isDraggingScrollbar
                      ? (this.instance.scroll[this.directionAxis] = tt(
                          this.instance.scroll[this.directionAxis],
                          this.instance.delta[this.directionAxis],
                          this.lerp
                        ))
                      : this.instance.scroll[this.directionAxis] >
                        this.instance.limit[this.directionAxis]
                      ? this.setScroll(
                          this.instance.scroll[this.directionAxis],
                          this.instance.limit[this.directionAxis]
                        )
                      : this.instance.scroll.y < 0
                      ? this.setScroll(
                          this.instance.scroll[this.directionAxis],
                          0
                        )
                      : this.setScroll(
                          this.instance.scroll[this.directionAxis],
                          this.instance.delta[this.directionAxis]
                        );
                  },
                },
                {
                  key: "addDirection",
                  value: function () {
                    this.instance.delta.y > this.instance.scroll.y
                      ? "down" !== this.instance.direction &&
                        (this.instance.direction = "down")
                      : this.instance.delta.y < this.instance.scroll.y &&
                        "up" !== this.instance.direction &&
                        (this.instance.direction = "up"),
                      this.instance.delta.x > this.instance.scroll.x
                        ? "right" !== this.instance.direction &&
                          (this.instance.direction = "right")
                        : this.instance.delta.x < this.instance.scroll.x &&
                          "left" !== this.instance.direction &&
                          (this.instance.direction = "left");
                  },
                },
                {
                  key: "addSpeed",
                  value: function () {
                    this.instance.delta[this.directionAxis] !=
                    this.instance.scroll[this.directionAxis]
                      ? (this.instance.speed =
                          (this.instance.delta[this.directionAxis] -
                            this.instance.scroll[this.directionAxis]) /
                          Math.max(1, Date.now() - this.speedTs))
                      : (this.instance.speed = 0);
                  },
                },
                {
                  key: "initScrollBar",
                  value: function () {
                    if (
                      ((this.scrollbar = document.createElement("span")),
                      (this.scrollbarThumb = document.createElement("span")),
                      this.scrollbar.classList.add(
                        "".concat(this.scrollbarClass)
                      ),
                      this.scrollbarThumb.classList.add(
                        "".concat(this.scrollbarClass, "_thumb")
                      ),
                      this.scrollbar.append(this.scrollbarThumb),
                      this.scrollbarContainer
                        ? this.scrollbarContainer.append(this.scrollbar)
                        : document.body.append(this.scrollbar),
                      (this.getScrollBar = this.getScrollBar.bind(this)),
                      (this.releaseScrollBar =
                        this.releaseScrollBar.bind(this)),
                      (this.moveScrollBar = this.moveScrollBar.bind(this)),
                      this.scrollbarThumb.addEventListener(
                        "mousedown",
                        this.getScrollBar
                      ),
                      window.addEventListener("mouseup", this.releaseScrollBar),
                      window.addEventListener("mousemove", this.moveScrollBar),
                      (this.hasScrollbar = !1),
                      "horizontal" == this.direction)
                    ) {
                      if (
                        this.instance.limit.x + this.windowWidth <=
                        this.windowWidth
                      )
                        return;
                    } else if (
                      this.instance.limit.y + this.windowHeight <=
                      this.windowHeight
                    )
                      return;
                    (this.hasScrollbar = !0),
                      (this.scrollbarBCR =
                        this.scrollbar.getBoundingClientRect()),
                      (this.scrollbarHeight = this.scrollbarBCR.height),
                      (this.scrollbarWidth = this.scrollbarBCR.width),
                      "horizontal" === this.direction
                        ? (this.scrollbarThumb.style.width = "".concat(
                            (this.scrollbarWidth * this.scrollbarWidth) /
                              (this.instance.limit.x + this.scrollbarWidth),
                            "px"
                          ))
                        : (this.scrollbarThumb.style.height = "".concat(
                            (this.scrollbarHeight * this.scrollbarHeight) /
                              (this.instance.limit.y + this.scrollbarHeight),
                            "px"
                          )),
                      (this.scrollbarThumbBCR =
                        this.scrollbarThumb.getBoundingClientRect()),
                      (this.scrollBarLimit = {
                        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                        y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                      });
                  },
                },
                {
                  key: "reinitScrollBar",
                  value: function () {
                    if (
                      ((this.hasScrollbar = !1), "horizontal" == this.direction)
                    ) {
                      if (
                        this.instance.limit.x + this.windowWidth <=
                        this.windowWidth
                      )
                        return;
                    } else if (
                      this.instance.limit.y + this.windowHeight <=
                      this.windowHeight
                    )
                      return;
                    (this.hasScrollbar = !0),
                      (this.scrollbarBCR =
                        this.scrollbar.getBoundingClientRect()),
                      (this.scrollbarHeight = this.scrollbarBCR.height),
                      (this.scrollbarWidth = this.scrollbarBCR.width),
                      "horizontal" === this.direction
                        ? (this.scrollbarThumb.style.width = "".concat(
                            (this.scrollbarWidth * this.scrollbarWidth) /
                              (this.instance.limit.x + this.scrollbarWidth),
                            "px"
                          ))
                        : (this.scrollbarThumb.style.height = "".concat(
                            (this.scrollbarHeight * this.scrollbarHeight) /
                              (this.instance.limit.y + this.scrollbarHeight),
                            "px"
                          )),
                      (this.scrollbarThumbBCR =
                        this.scrollbarThumb.getBoundingClientRect()),
                      (this.scrollBarLimit = {
                        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                        y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                      });
                  },
                },
                {
                  key: "destroyScrollBar",
                  value: function () {
                    this.scrollbarThumb.removeEventListener(
                      "mousedown",
                      this.getScrollBar
                    ),
                      window.removeEventListener(
                        "mouseup",
                        this.releaseScrollBar
                      ),
                      window.removeEventListener(
                        "mousemove",
                        this.moveScrollBar
                      ),
                      this.scrollbar.remove();
                  },
                },
                {
                  key: "getScrollBar",
                  value: function (t) {
                    (this.isDraggingScrollbar = !0),
                      this.checkScroll(),
                      this.html.classList.remove(this.scrollingClass),
                      this.html.classList.add(this.draggingClass);
                  },
                },
                {
                  key: "releaseScrollBar",
                  value: function (t) {
                    (this.isDraggingScrollbar = !1),
                      this.html.classList.add(this.scrollingClass),
                      this.html.classList.remove(this.draggingClass);
                  },
                },
                {
                  key: "moveScrollBar",
                  value: function (t) {
                    var e = this;
                    this.isDraggingScrollbar &&
                      requestAnimationFrame(function () {
                        var i =
                            (((100 * (t.clientX - e.scrollbarBCR.left)) /
                              e.scrollbarWidth) *
                              e.instance.limit.x) /
                            100,
                          n =
                            (((100 * (t.clientY - e.scrollbarBCR.top)) /
                              e.scrollbarHeight) *
                              e.instance.limit.y) /
                            100;
                        n > 0 &&
                          n < e.instance.limit.y &&
                          (e.instance.delta.y = n),
                          i > 0 &&
                            i < e.instance.limit.x &&
                            (e.instance.delta.x = i);
                      });
                  },
                },
                {
                  key: "addElements",
                  value: function () {
                    var t = this;
                    (this.els = {}),
                      (this.parallaxElements = {}),
                      this.el
                        .querySelectorAll("[data-".concat(this.name, "]"))
                        .forEach(function (e, i) {
                          var n,
                            r,
                            s,
                            o = it(e),
                            a = Object.entries(t.sections)
                              .map(function (t) {
                                var e = _(t, 2);
                                e[0];
                                return e[1];
                              })
                              .find(function (t) {
                                return o.includes(t.el);
                              }),
                            l = e.dataset[t.name + "Class"] || t.class,
                            c =
                              "string" == typeof e.dataset[t.name + "Id"]
                                ? e.dataset[t.name + "Id"]
                                : "el" + i,
                            h = e.dataset[t.name + "Repeat"],
                            u = e.dataset[t.name + "Call"],
                            d = e.dataset[t.name + "Position"],
                            f = e.dataset[t.name + "Delay"],
                            p = e.dataset[t.name + "Direction"],
                            m = "string" == typeof e.dataset[t.name + "Sticky"],
                            g =
                              !!e.dataset[t.name + "Speed"] &&
                              parseFloat(e.dataset[t.name + "Speed"]) / 10,
                            v =
                              "string" == typeof e.dataset[t.name + "Offset"]
                                ? e.dataset[t.name + "Offset"].split(",")
                                : t.offset,
                            y = e.dataset[t.name + "Target"],
                            b = (s =
                              void 0 !== y
                                ? document.querySelector("".concat(y))
                                : e).getBoundingClientRect();
                          null === a || a.inView
                            ? ((n = b.top + t.instance.scroll.y - et(s).y),
                              (r = b.left + t.instance.scroll.x - et(s).x))
                            : ((n = b.top - et(a.el).y - et(s).y),
                              (r = b.left - et(a.el).x - et(s).x));
                          var w = n + s.offsetHeight,
                            x = r + s.offsetWidth,
                            T = { x: (x - r) / 2 + r, y: (w - n) / 2 + n };
                          if (m) {
                            var S = e.getBoundingClientRect(),
                              k = S.top,
                              E = S.left,
                              O = { x: E - r, y: k - n };
                            (n += window.innerHeight),
                              (r += window.innerWidth),
                              (w =
                                k +
                                s.offsetHeight -
                                e.offsetHeight -
                                O[t.directionAxis]),
                              (T = {
                                x:
                                  ((x =
                                    E +
                                    s.offsetWidth -
                                    e.offsetWidth -
                                    O[t.directionAxis]) -
                                    r) /
                                    2 +
                                  r,
                                y: (w - n) / 2 + n,
                              });
                          }
                          h = "false" != h && (null != h || t.repeat);
                          var A = [0, 0];
                          if (v)
                            if ("horizontal" === t.direction) {
                              for (var M = 0; M < v.length; M++)
                                "string" == typeof v[M]
                                  ? v[M].includes("%")
                                    ? (A[M] = parseInt(
                                        (v[M].replace("%", "") *
                                          t.windowWidth) /
                                          100
                                      ))
                                    : (A[M] = parseInt(v[M]))
                                  : (A[M] = v[M]);
                              (r += A[0]), (x -= A[1]);
                            } else {
                              for (M = 0; M < v.length; M++)
                                "string" == typeof v[M]
                                  ? v[M].includes("%")
                                    ? (A[M] = parseInt(
                                        (v[M].replace("%", "") *
                                          t.windowHeight) /
                                          100
                                      ))
                                    : (A[M] = parseInt(v[M]))
                                  : (A[M] = v[M]);
                              (n += A[0]), (w -= A[1]);
                            }
                          var P = {
                            el: e,
                            id: c,
                            class: l,
                            section: a,
                            top: n,
                            middle: T,
                            bottom: w,
                            left: r,
                            right: x,
                            offset: v,
                            progress: 0,
                            repeat: h,
                            inView: !1,
                            call: u,
                            speed: g,
                            delay: f,
                            position: d,
                            target: s,
                            direction: p,
                            sticky: m,
                          };
                          (t.els[c] = P),
                            e.classList.contains(l) && t.setInView(t.els[c], c),
                            (!1 !== g || m) && (t.parallaxElements[c] = P);
                        });
                  },
                },
                {
                  key: "addSections",
                  value: function () {
                    var t = this;
                    this.sections = {};
                    var e = this.el.querySelectorAll(
                      "[data-".concat(this.name, "-section]")
                    );
                    0 === e.length && (e = [this.el]),
                      e.forEach(function (e, i) {
                        var n =
                            "string" == typeof e.dataset[t.name + "Id"]
                              ? e.dataset[t.name + "Id"]
                              : "section" + i,
                          r = e.getBoundingClientRect(),
                          s = {
                            x: r.left - 1.5 * window.innerWidth - et(e).x,
                            y: r.top - 1.5 * window.innerHeight - et(e).y,
                          },
                          o = {
                            x: s.x + r.width + 2 * window.innerWidth,
                            y: s.y + r.height + 2 * window.innerHeight,
                          },
                          a =
                            "string" == typeof e.dataset[t.name + "Persistent"];
                        e.setAttribute("data-scroll-section-id", n);
                        var l = {
                          el: e,
                          offset: s,
                          limit: o,
                          inView: !1,
                          persistent: a,
                          id: n,
                        };
                        t.sections[n] = l;
                      });
                  },
                },
                {
                  key: "transform",
                  value: function (t, e, i, n) {
                    var r;
                    if (n) {
                      var s = et(t),
                        o = tt(s.x, e, n),
                        a = tt(s.y, i, n);
                      r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                        .concat(o, ",")
                        .concat(a, ",0,1)");
                    } else
                      r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                        .concat(e, ",")
                        .concat(i, ",0,1)");
                    (t.style.webkitTransform = r),
                      (t.style.msTransform = r),
                      (t.style.transform = r);
                  },
                },
                {
                  key: "transformElements",
                  value: function (t) {
                    var e = this,
                      i =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      n = this.instance.scroll.x + this.windowWidth,
                      r = this.instance.scroll.y + this.windowHeight,
                      s = {
                        x: this.instance.scroll.x + this.windowMiddle.x,
                        y: this.instance.scroll.y + this.windowMiddle.y,
                      };
                    Object.entries(this.parallaxElements).forEach(function (o) {
                      var a = _(o, 2),
                        l = (a[0], a[1]),
                        c = !1;
                      if ((t && (c = 0), l.inView || i))
                        switch (l.position) {
                          case "top":
                          case "left":
                            c = e.instance.scroll[e.directionAxis] * -l.speed;
                            break;
                          case "elementTop":
                            c = (r - l.top) * -l.speed;
                            break;
                          case "bottom":
                            c =
                              (e.instance.limit[e.directionAxis] -
                                r +
                                e.windowHeight) *
                              l.speed;
                            break;
                          case "elementLeft":
                            c = (n - l.left) * -l.speed;
                            break;
                          case "right":
                            c =
                              (e.instance.limit[e.directionAxis] -
                                n +
                                e.windowHeight) *
                              l.speed;
                            break;
                          default:
                            c =
                              (s[e.directionAxis] - l.middle[e.directionAxis]) *
                              -l.speed;
                        }
                      l.sticky &&
                        (c = l.inView
                          ? "horizontal" === e.direction
                            ? e.instance.scroll.x - l.left + window.innerWidth
                            : e.instance.scroll.y - l.top + window.innerHeight
                          : "horizontal" === e.direction
                          ? e.instance.scroll.x < l.left - window.innerWidth &&
                            e.instance.scroll.x < l.left - window.innerWidth / 2
                            ? 0
                            : e.instance.scroll.x > l.right &&
                              e.instance.scroll.x > l.right + 100 &&
                              l.right - l.left + window.innerWidth
                          : e.instance.scroll.y < l.top - window.innerHeight &&
                            e.instance.scroll.y < l.top - window.innerHeight / 2
                          ? 0
                          : e.instance.scroll.y > l.bottom &&
                            e.instance.scroll.y > l.bottom + 100 &&
                            l.bottom - l.top + window.innerHeight),
                        !1 !== c &&
                          ("horizontal" === l.direction ||
                          ("horizontal" === e.direction &&
                            "vertical" !== l.direction)
                            ? e.transform(l.el, c, 0, !t && l.delay)
                            : e.transform(l.el, 0, c, !t && l.delay));
                    });
                  },
                },
                {
                  key: "scrollTo",
                  value: function (t) {
                    var e = this,
                      i =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n = parseInt(i.offset) || 0,
                      r = i.duration || 1e3,
                      s = i.easing || [0.25, 0, 0.35, 1],
                      o = !!i.disableLerp,
                      a = !!i.callback && i.callback;
                    if (((s = yt.apply(void 0, b(s))), "string" == typeof t)) {
                      if ("top" === t) t = 0;
                      else if ("bottom" === t) t = this.instance.limit.y;
                      else if ("left" === t) t = 0;
                      else if ("right" === t) t = this.instance.limit.x;
                      else if (!(t = document.querySelector(t))) return;
                    } else if ("number" == typeof t) t = parseInt(t);
                    else if (!t || !t.tagName)
                      return void console.warn(
                        "`target` parameter is not valid"
                      );
                    if ("number" != typeof t) {
                      var l = it(t).includes(this.el);
                      if (!l) return;
                      var c = t.getBoundingClientRect(),
                        h = c.top,
                        u = c.left,
                        d = it(t),
                        f = d.find(function (t) {
                          return Object.entries(e.sections)
                            .map(function (t) {
                              var e = _(t, 2);
                              e[0];
                              return e[1];
                            })
                            .find(function (e) {
                              return e.el == t;
                            });
                        }),
                        p = 0;
                      (p = f
                        ? et(f)[this.directionAxis]
                        : -this.instance.scroll[this.directionAxis]),
                        (n =
                          "horizontal" === this.direction
                            ? u + n - p
                            : h + n - p);
                    } else n = t + n;
                    var m = parseFloat(this.instance.delta[this.directionAxis]),
                      g = Math.max(
                        0,
                        Math.min(n, this.instance.limit[this.directionAxis])
                      ),
                      v = g - m,
                      y = function (t) {
                        o
                          ? "horizontal" === e.direction
                            ? e.setScroll(m + v * t, e.instance.delta.y)
                            : e.setScroll(e.instance.delta.x, m + v * t)
                          : (e.instance.delta[e.directionAxis] = m + v * t);
                      };
                    (this.animatingScroll = !0),
                      this.stopScrolling(),
                      this.startScrolling();
                    var w = Date.now(),
                      x = function t() {
                        var i = (Date.now() - w) / r;
                        i > 1
                          ? (y(1),
                            (e.animatingScroll = !1),
                            0 == r && e.update(),
                            a && a())
                          : ((e.scrollToRaf = requestAnimationFrame(t)),
                            y(s(i)));
                      };
                    x();
                  },
                },
                {
                  key: "update",
                  value: function () {
                    this.setScrollLimit(),
                      this.addSections(),
                      this.addElements(),
                      this.detectElements(),
                      this.updateScroll(),
                      this.transformElements(!0),
                      this.reinitScrollBar(),
                      this.checkScroll(!0);
                  },
                },
                {
                  key: "startScroll",
                  value: function () {
                    this.stop = !1;
                  },
                },
                {
                  key: "stopScroll",
                  value: function () {
                    this.stop = !0;
                  },
                },
                {
                  key: "setScroll",
                  value: function (t, e) {
                    this.instance = c(
                      c({}, this.instance),
                      {},
                      {
                        scroll: { x: t, y: e },
                        delta: { x: t, y: e },
                        speed: 0,
                      }
                    );
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    y(u(i.prototype), "destroy", this).call(this),
                      this.stopScrolling(),
                      this.html.classList.remove(this.smoothClass),
                      this.vs.destroy(),
                      this.destroyScrollBar(),
                      window.removeEventListener("keydown", this.checkKey, !1);
                  },
                },
              ]),
              i
            );
          })(P),
          wt = (function () {
            function t() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              r(this, t),
                (this.options = e),
                Object.assign(this, M, e),
                (this.smartphone = M.smartphone),
                e.smartphone && Object.assign(this.smartphone, e.smartphone),
                (this.tablet = M.tablet),
                e.tablet && Object.assign(this.tablet, e.tablet),
                this.smooth ||
                  "horizontal" != this.direction ||
                  console.warn(
                    "ðŸš¨ `smooth:false` & `horizontal` direction are not yet compatible"
                  ),
                this.tablet.smooth ||
                  "horizontal" != this.tablet.direction ||
                  console.warn(
                    "ðŸš¨ `smooth:false` & `horizontal` direction are not yet compatible (tablet)"
                  ),
                this.smartphone.smooth ||
                  "horizontal" != this.smartphone.direction ||
                  console.warn(
                    "ðŸš¨ `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"
                  ),
                this.init();
            }
            return (
              o(t, [
                {
                  key: "init",
                  value: function () {
                    if (
                      ((this.options.isMobile =
                        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                          navigator.userAgent
                        ) ||
                        ("MacIntel" === navigator.platform &&
                          navigator.maxTouchPoints > 1) ||
                        window.innerWidth < this.tablet.breakpoint),
                      (this.options.isTablet =
                        this.options.isMobile &&
                        window.innerWidth >= this.tablet.breakpoint),
                      (this.smooth && !this.options.isMobile) ||
                      (this.tablet.smooth && this.options.isTablet) ||
                      (this.smartphone.smooth &&
                        this.options.isMobile &&
                        !this.options.isTablet)
                        ? (this.scroll = new bt(this.options))
                        : (this.scroll = new B(this.options)),
                      this.scroll.init(),
                      window.location.hash)
                    ) {
                      var t = window.location.hash.slice(
                          1,
                          window.location.hash.length
                        ),
                        e = document.getElementById(t);
                      e && this.scroll.scrollTo(e);
                    }
                  },
                },
                {
                  key: "update",
                  value: function () {
                    this.scroll.update();
                  },
                },
                {
                  key: "start",
                  value: function () {
                    this.scroll.startScroll();
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    this.scroll.stopScroll();
                  },
                },
                {
                  key: "scrollTo",
                  value: function (t, e) {
                    this.scroll.scrollTo(t, e);
                  },
                },
                {
                  key: "setScroll",
                  value: function (t, e) {
                    this.scroll.setScroll(t, e);
                  },
                },
                {
                  key: "on",
                  value: function (t, e) {
                    this.scroll.setEvents(t, e);
                  },
                },
                {
                  key: "off",
                  value: function (t, e) {
                    this.scroll.unsetEvents(t, e);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.scroll.destroy();
                  },
                },
              ]),
              t
            );
          })();
        i.Smooth = wt;
        var xt = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            r(this, t),
              (this.options = e),
              Object.assign(this, M, e),
              (this.smartphone = M.smartphone),
              e.smartphone && Object.assign(this.smartphone, e.smartphone),
              (this.tablet = M.tablet),
              e.tablet && Object.assign(this.tablet, e.tablet),
              this.init();
          }
          return (
            o(t, [
              {
                key: "init",
                value: function () {
                  if (
                    ((this.scroll = new B(this.options)),
                    this.scroll.init(),
                    window.location.hash)
                  ) {
                    var t = window.location.hash.slice(
                        1,
                        window.location.hash.length
                      ),
                      e = document.getElementById(t);
                    e && this.scroll.scrollTo(e);
                  }
                },
              },
              {
                key: "update",
                value: function () {
                  this.scroll.update();
                },
              },
              {
                key: "start",
                value: function () {
                  this.scroll.startScroll();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.scroll.stopScroll();
                },
              },
              {
                key: "scrollTo",
                value: function (t, e) {
                  this.scroll.scrollTo(t, e);
                },
              },
              {
                key: "setScroll",
                value: function (t, e) {
                  this.scroll.setScroll(t, e);
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  this.scroll.setEvents(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.scroll.unsetEvents(t, e);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.scroll.destroy();
                },
              },
            ]),
            t
          );
        })();
        i.Native = xt;
        var Tt = wt;
        i.default = Tt;
      },
      {},
    ],
    C3Xv: [
      function (t, e, i) {
        "use strict";
        var n = t("../utils"),
          r = s(t("../cursor"));
        function s(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function o(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return a(t);
            })(t) ||
            (function (t) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t);
            })(t) ||
            (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return a(t, e);
              var i = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === i && t.constructor && (i = t.constructor.name);
              if ("Map" === i || "Set" === i) return Array.from(t);
              if (
                "Arguments" === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              )
                return a(t, e);
            })(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function a(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
          return n;
        }
        var l = new (s(t("locomotive-scroll")).default)({
          el: document.querySelector("[data-scroll-container]"),
          smooth: !0,
          lerp: 0.05,
          direction: "horizontal",
        });
        Promise.all([
          (0, n.preloadImages)(".gallery__item-imginner"),
          (0, n.preloadFonts)("vxy2fer"),
        ]).then(function () {
          document.body.classList.remove("loading");
          var t = new r.default(document.querySelector(".cursor"));
          o(document.querySelectorAll("a, .video-popup")).forEach(function (e) {
            e.addEventListener("mouseenter", function () {
              return t.enter();
            }),
              e.addEventListener("mouseleave", function () {
                return t.leave();
              });
          });
        }),
          l.on("scroll", (t) => {
            const {
                scroll: { x: e },
              } = t,
              i = document.getElementsByClassName("line"),
              n = document.getElementsByClassName("audento"),
              r = document.getElementsByTagName("main")[0],
              s =
                (document.getElementsByTagName("main")[0].clientWidth,
                r.scrollWidth - window.innerWidth),
              { x: o } = t.scroll,
              a = (e / s) * 100,
              l = (e / s) * 70,
              c = document.getElementsByClassName("scroll_button")[0];
            (i[0].style.height = a + "%"),
              (n[0].style.right = l + "%"),
              0 === Math.trunc(o)
                ? c && (c.classList.remove("hide"), c.classList.add("show"))
                : c && (c.classList.remove("show"), c.classList.add("hide"));
          }),
          $(".disrtoy_body").on("click", function () {
            l.stop(),
              l.start(),
              setTimeout(function () {
                l.update();
              }, 300);
          }),
          setTimeout(function () {
            0 != $(".service_page ").length &&
              (l.stop(),
              l.start(),
              setTimeout(function () {
                l.update();
              }, 600));
          }, 500),
          [...document.querySelectorAll(".click_page")].map((t) => {
            t.addEventListener("click", (t) => {
              const {
                dataset: { target: e },
              } = t.target;
              l.scrollTo(`#${e}`);
            });
          });
      },
      { "../utils": "MgTz", "../cursor": "LMRJ", "locomotive-scroll": "ez7q" },
    ],
  },
  {},
  ["C3Xv"]
);
let panelsElement = document.querySelectorAll('.panel');


let removeActiveClasses = () => {
    panelsElement.forEach(panel => {
        panel.classList.remove('active');
    });
};

panelsElement.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});