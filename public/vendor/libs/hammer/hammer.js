/*! For license information please see hammer.js.LICENSE.txt */
!(function (t, e) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var n = e();
        for (var i in n) ("object" == typeof exports ? exports : t)[i] = n[i];
    }
})(self, function () {
    return (function () {
        var t = {
                840: function (t, e, n) {
                    var i;
                    !(function (r, s, o, a) {
                        "use strict";
                        var u,
                            h = ["", "webkit", "Moz", "MS", "ms", "o"],
                            c = s.createElement("div"),
                            l = "function",
                            p = Math.round,
                            f = Math.abs,
                            v = Date.now;
                        function d(t, e, n) {
                            return setTimeout(I(t, n), e);
                        }
                        function m(t, e, n) {
                            return !!Array.isArray(t) && (g(t, n[e], n), !0);
                        }
                        function g(t, e, n) {
                            var i;
                            if (t)
                                if (t.forEach) t.forEach(e, n);
                                else if (t.length !== a)
                                    for (i = 0; i < t.length; )
                                        e.call(n, t[i], i, t), i++;
                                else
                                    for (i in t)
                                        t.hasOwnProperty(i) &&
                                            e.call(n, t[i], i, t);
                        }
                        function y(t, e, n) {
                            var i =
                                "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
                            return function () {
                                var e = new Error("get-stack-trace"),
                                    n =
                                        e && e.stack
                                            ? e.stack
                                                  .replace(
                                                      /^[^\(]+?[\n$]/gm,
                                                      ""
                                                  )
                                                  .replace(/^\s+at\s+/gm, "")
                                                  .replace(
                                                      /^Object.<anonymous>\s*\(/gm,
                                                      "{anonymous}()@"
                                                  )
                                            : "Unknown Stack Trace",
                                    s =
                                        r.console &&
                                        (r.console.warn || r.console.log);
                                return (
                                    s && s.call(r.console, i, n),
                                    t.apply(this, arguments)
                                );
                            };
                        }
                        u =
                            "function" != typeof Object.assign
                                ? function (t) {
                                      if (t === a || null === t)
                                          throw new TypeError(
                                              "Cannot convert undefined or null to object"
                                          );
                                      for (
                                          var e = Object(t), n = 1;
                                          n < arguments.length;
                                          n++
                                      ) {
                                          var i = arguments[n];
                                          if (i !== a && null !== i)
                                              for (var r in i)
                                                  i.hasOwnProperty(r) &&
                                                      (e[r] = i[r]);
                                      }
                                      return e;
                                  }
                                : Object.assign;
                        var T = y(
                                function (t, e, n) {
                                    for (
                                        var i = Object.keys(e), r = 0;
                                        r < i.length;

                                    )
                                        (!n || (n && t[i[r]] === a)) &&
                                            (t[i[r]] = e[i[r]]),
                                            r++;
                                    return t;
                                },
                                "extend",
                                "Use `assign`."
                            ),
                            E = y(
                                function (t, e) {
                                    return T(t, e, !0);
                                },
                                "merge",
                                "Use `assign`."
                            );
                        function b(t, e, n) {
                            var i,
                                r = e.prototype;
                            ((i = t.prototype = Object.create(r)).constructor =
                                t),
                                (i._super = r),
                                n && u(i, n);
                        }
                        function I(t, e) {
                            return function () {
                                return t.apply(e, arguments);
                            };
                        }
                        function A(t, e) {
                            return typeof t == l
                                ? t.apply((e && e[0]) || a, e)
                                : t;
                        }
                        function S(t, e) {
                            return t === a ? e : t;
                        }
                        function _(t, e, n) {
                            g(D(e), function (e) {
                                t.addEventListener(e, n, !1);
                            });
                        }
                        function P(t, e, n) {
                            g(D(e), function (e) {
                                t.removeEventListener(e, n, !1);
                            });
                        }
                        function x(t, e) {
                            for (; t; ) {
                                if (t == e) return !0;
                                t = t.parentNode;
                            }
                            return !1;
                        }
                        function C(t, e) {
                            return t.indexOf(e) > -1;
                        }
                        function D(t) {
                            return t.trim().split(/\s+/g);
                        }
                        function O(t, e, n) {
                            if (t.indexOf && !n) return t.indexOf(e);
                            for (var i = 0; i < t.length; ) {
                                if ((n && t[i][n] == e) || (!n && t[i] === e))
                                    return i;
                                i++;
                            }
                            return -1;
                        }
                        function w(t) {
                            return Array.prototype.slice.call(t, 0);
                        }
                        function M(t, e, n) {
                            for (var i = [], r = [], s = 0; s < t.length; ) {
                                var o = e ? t[s][e] : t[s];
                                O(r, o) < 0 && i.push(t[s]), (r[s] = o), s++;
                            }
                            return (
                                n &&
                                    (i = e
                                        ? i.sort(function (t, n) {
                                              return t[e] > n[e];
                                          })
                                        : i.sort()),
                                i
                            );
                        }
                        function R(t, e) {
                            for (
                                var n,
                                    i,
                                    r = e[0].toUpperCase() + e.slice(1),
                                    s = 0;
                                s < h.length;

                            ) {
                                if ((i = (n = h[s]) ? n + r : e) in t) return i;
                                s++;
                            }
                            return a;
                        }
                        var z = 1;
                        function N(t) {
                            var e = t.ownerDocument || t;
                            return e.defaultView || e.parentWindow || r;
                        }
                        var X = "ontouchstart" in r,
                            Y = R(r, "PointerEvent") !== a,
                            F =
                                X &&
                                /mobile|tablet|ip(ad|hone|od)|android/i.test(
                                    navigator.userAgent
                                ),
                            W = "touch",
                            q = "mouse",
                            j = 25,
                            k = 1,
                            L = 4,
                            H = 8,
                            U = 1,
                            V = 2,
                            G = 4,
                            Z = 8,
                            B = 16,
                            $ = V | G,
                            J = Z | B,
                            K = $ | J,
                            Q = ["x", "y"],
                            tt = ["clientX", "clientY"];
                        function et(t, e) {
                            var n = this;
                            (this.manager = t),
                                (this.callback = e),
                                (this.element = t.element),
                                (this.target = t.options.inputTarget),
                                (this.domHandler = function (e) {
                                    A(t.options.enable, [t]) && n.handler(e);
                                }),
                                this.init();
                        }
                        function nt(t, e, n) {
                            var i = n.pointers.length,
                                r = n.changedPointers.length,
                                s = e & k && i - r == 0,
                                o = e & (L | H) && i - r == 0;
                            (n.isFirst = !!s),
                                (n.isFinal = !!o),
                                s && (t.session = {}),
                                (n.eventType = e),
                                (function (t, e) {
                                    var n = t.session,
                                        i = e.pointers,
                                        r = i.length;
                                    n.firstInput || (n.firstInput = it(e)),
                                        r > 1 && !n.firstMultiple
                                            ? (n.firstMultiple = it(e))
                                            : 1 === r && (n.firstMultiple = !1);
                                    var s = n.firstInput,
                                        o = n.firstMultiple,
                                        u = o ? o.center : s.center,
                                        h = (e.center = rt(i));
                                    (e.timeStamp = v()),
                                        (e.deltaTime =
                                            e.timeStamp - s.timeStamp),
                                        (e.angle = ut(u, h)),
                                        (e.distance = at(u, h)),
                                        (function (t, e) {
                                            var n = e.center,
                                                i = t.offsetDelta || {},
                                                r = t.prevDelta || {},
                                                s = t.prevInput || {};
                                            (e.eventType !== k &&
                                                s.eventType !== L) ||
                                                ((r = t.prevDelta =
                                                    {
                                                        x: s.deltaX || 0,
                                                        y: s.deltaY || 0,
                                                    }),
                                                (i = t.offsetDelta =
                                                    {
                                                        x: n.x,
                                                        y: n.y,
                                                    })),
                                                (e.deltaX = r.x + (n.x - i.x)),
                                                (e.deltaY = r.y + (n.y - i.y));
                                        })(n, e),
                                        (e.offsetDirection = ot(
                                            e.deltaX,
                                            e.deltaY
                                        ));
                                    var c,
                                        l,
                                        p = st(e.deltaTime, e.deltaX, e.deltaY);
                                    (e.overallVelocityX = p.x),
                                        (e.overallVelocityY = p.y),
                                        (e.overallVelocity =
                                            f(p.x) > f(p.y) ? p.x : p.y),
                                        (e.scale = o
                                            ? ((c = o.pointers),
                                              at((l = i)[0], l[1], tt) /
                                                  at(c[0], c[1], tt))
                                            : 1),
                                        (e.rotation = o
                                            ? (function (t, e) {
                                                  return (
                                                      ut(e[1], e[0], tt) +
                                                      ut(t[1], t[0], tt)
                                                  );
                                              })(o.pointers, i)
                                            : 0),
                                        (e.maxPointers = n.prevInput
                                            ? e.pointers.length >
                                              n.prevInput.maxPointers
                                                ? e.pointers.length
                                                : n.prevInput.maxPointers
                                            : e.pointers.length),
                                        (function (t, e) {
                                            var n,
                                                i,
                                                r,
                                                s,
                                                o = t.lastInterval || e,
                                                u = e.timeStamp - o.timeStamp;
                                            if (
                                                e.eventType != H &&
                                                (u > j || o.velocity === a)
                                            ) {
                                                var h = e.deltaX - o.deltaX,
                                                    c = e.deltaY - o.deltaY,
                                                    l = st(u, h, c);
                                                (i = l.x),
                                                    (r = l.y),
                                                    (n =
                                                        f(l.x) > f(l.y)
                                                            ? l.x
                                                            : l.y),
                                                    (s = ot(h, c)),
                                                    (t.lastInterval = e);
                                            } else
                                                (n = o.velocity),
                                                    (i = o.velocityX),
                                                    (r = o.velocityY),
                                                    (s = o.direction);
                                            (e.velocity = n),
                                                (e.velocityX = i),
                                                (e.velocityY = r),
                                                (e.direction = s);
                                        })(n, e);
                                    var d = t.element;
                                    x(e.srcEvent.target, d) &&
                                        (d = e.srcEvent.target),
                                        (e.target = d);
                                })(t, n),
                                t.emit("hammer.input", n),
                                t.recognize(n),
                                (t.session.prevInput = n);
                        }
                        function it(t) {
                            for (var e = [], n = 0; n < t.pointers.length; )
                                (e[n] = {
                                    clientX: p(t.pointers[n].clientX),
                                    clientY: p(t.pointers[n].clientY),
                                }),
                                    n++;
                            return {
                                timeStamp: v(),
                                pointers: e,
                                center: rt(e),
                                deltaX: t.deltaX,
                                deltaY: t.deltaY,
                            };
                        }
                        function rt(t) {
                            var e = t.length;
                            if (1 === e)
                                return {
                                    x: p(t[0].clientX),
                                    y: p(t[0].clientY),
                                };
                            for (var n = 0, i = 0, r = 0; r < e; )
                                (n += t[r].clientX), (i += t[r].clientY), r++;
                            return {
                                x: p(n / e),
                                y: p(i / e),
                            };
                        }
                        function st(t, e, n) {
                            return {
                                x: e / t || 0,
                                y: n / t || 0,
                            };
                        }
                        function ot(t, e) {
                            return t === e
                                ? U
                                : f(t) >= f(e)
                                ? t < 0
                                    ? V
                                    : G
                                : e < 0
                                ? Z
                                : B;
                        }
                        function at(t, e, n) {
                            n || (n = Q);
                            var i = e[n[0]] - t[n[0]],
                                r = e[n[1]] - t[n[1]];
                            return Math.sqrt(i * i + r * r);
                        }
                        function ut(t, e, n) {
                            n || (n = Q);
                            var i = e[n[0]] - t[n[0]],
                                r = e[n[1]] - t[n[1]];
                            return (180 * Math.atan2(r, i)) / Math.PI;
                        }
                        et.prototype = {
                            handler: function () {},
                            init: function () {
                                this.evEl &&
                                    _(this.element, this.evEl, this.domHandler),
                                    this.evTarget &&
                                        _(
                                            this.target,
                                            this.evTarget,
                                            this.domHandler
                                        ),
                                    this.evWin &&
                                        _(
                                            N(this.element),
                                            this.evWin,
                                            this.domHandler
                                        );
                            },
                            destroy: function () {
                                this.evEl &&
                                    P(this.element, this.evEl, this.domHandler),
                                    this.evTarget &&
                                        P(
                                            this.target,
                                            this.evTarget,
                                            this.domHandler
                                        ),
                                    this.evWin &&
                                        P(
                                            N(this.element),
                                            this.evWin,
                                            this.domHandler
                                        );
                            },
                        };
                        var ht = {
                                mousedown: k,
                                mousemove: 2,
                                mouseup: L,
                            },
                            ct = "mousedown",
                            lt = "mousemove mouseup";
                        function pt() {
                            (this.evEl = ct),
                                (this.evWin = lt),
                                (this.pressed = !1),
                                et.apply(this, arguments);
                        }
                        b(pt, et, {
                            handler: function (t) {
                                var e = ht[t.type];
                                e & k && 0 === t.button && (this.pressed = !0),
                                    2 & e && 1 !== t.which && (e = L),
                                    this.pressed &&
                                        (e & L && (this.pressed = !1),
                                        this.callback(this.manager, e, {
                                            pointers: [t],
                                            changedPointers: [t],
                                            pointerType: q,
                                            srcEvent: t,
                                        }));
                            },
                        });
                        var ft = {
                                pointerdown: k,
                                pointermove: 2,
                                pointerup: L,
                                pointercancel: H,
                                pointerout: H,
                            },
                            vt = {
                                2: W,
                                3: "pen",
                                4: q,
                                5: "kinect",
                            },
                            dt = "pointerdown",
                            mt = "pointermove pointerup pointercancel";
                        function gt() {
                            (this.evEl = dt),
                                (this.evWin = mt),
                                et.apply(this, arguments),
                                (this.store =
                                    this.manager.session.pointerEvents =
                                        []);
                        }
                        r.MSPointerEvent &&
                            !r.PointerEvent &&
                            ((dt = "MSPointerDown"),
                            (mt = "MSPointerMove MSPointerUp MSPointerCancel")),
                            b(gt, et, {
                                handler: function (t) {
                                    var e = this.store,
                                        n = !1,
                                        i = t.type
                                            .toLowerCase()
                                            .replace("ms", ""),
                                        r = ft[i],
                                        s = vt[t.pointerType] || t.pointerType,
                                        o = s == W,
                                        a = O(e, t.pointerId, "pointerId");
                                    r & k && (0 === t.button || o)
                                        ? a < 0 &&
                                          (e.push(t), (a = e.length - 1))
                                        : r & (L | H) && (n = !0),
                                        a < 0 ||
                                            ((e[a] = t),
                                            this.callback(this.manager, r, {
                                                pointers: e,
                                                changedPointers: [t],
                                                pointerType: s,
                                                srcEvent: t,
                                            }),
                                            n && e.splice(a, 1));
                                },
                            });
                        var yt = {
                            touchstart: k,
                            touchmove: 2,
                            touchend: L,
                            touchcancel: H,
                        };
                        function Tt() {
                            (this.evTarget = "touchstart"),
                                (this.evWin =
                                    "touchstart touchmove touchend touchcancel"),
                                (this.started = !1),
                                et.apply(this, arguments);
                        }
                        function Et(t, e) {
                            var n = w(t.touches),
                                i = w(t.changedTouches);
                            return (
                                e & (L | H) &&
                                    (n = M(n.concat(i), "identifier", !0)),
                                [n, i]
                            );
                        }
                        b(Tt, et, {
                            handler: function (t) {
                                var e = yt[t.type];
                                if (
                                    (e === k && (this.started = !0),
                                    this.started)
                                ) {
                                    var n = Et.call(this, t, e);
                                    e & (L | H) &&
                                        n[0].length - n[1].length == 0 &&
                                        (this.started = !1),
                                        this.callback(this.manager, e, {
                                            pointers: n[0],
                                            changedPointers: n[1],
                                            pointerType: W,
                                            srcEvent: t,
                                        });
                                }
                            },
                        });
                        var bt = {
                                touchstart: k,
                                touchmove: 2,
                                touchend: L,
                                touchcancel: H,
                            },
                            It = "touchstart touchmove touchend touchcancel";
                        function At() {
                            (this.evTarget = It),
                                (this.targetIds = {}),
                                et.apply(this, arguments);
                        }
                        function St(t, e) {
                            var n = w(t.touches),
                                i = this.targetIds;
                            if (e & (2 | k) && 1 === n.length)
                                return (i[n[0].identifier] = !0), [n, n];
                            var r,
                                s,
                                o = w(t.changedTouches),
                                a = [],
                                u = this.target;
                            if (
                                ((s = n.filter(function (t) {
                                    return x(t.target, u);
                                })),
                                e === k)
                            )
                                for (r = 0; r < s.length; )
                                    (i[s[r].identifier] = !0), r++;
                            for (r = 0; r < o.length; )
                                i[o[r].identifier] && a.push(o[r]),
                                    e & (L | H) && delete i[o[r].identifier],
                                    r++;
                            return a.length
                                ? [M(s.concat(a), "identifier", !0), a]
                                : void 0;
                        }
                        b(At, et, {
                            handler: function (t) {
                                var e = bt[t.type],
                                    n = St.call(this, t, e);
                                n &&
                                    this.callback(this.manager, e, {
                                        pointers: n[0],
                                        changedPointers: n[1],
                                        pointerType: W,
                                        srcEvent: t,
                                    });
                            },
                        });
                        var _t = 2500;
                        function Pt() {
                            et.apply(this, arguments);
                            var t = I(this.handler, this);
                            (this.touch = new At(this.manager, t)),
                                (this.mouse = new pt(this.manager, t)),
                                (this.primaryTouch = null),
                                (this.lastTouches = []);
                        }
                        function xt(t, e) {
                            t & k
                                ? ((this.primaryTouch =
                                      e.changedPointers[0].identifier),
                                  Ct.call(this, e))
                                : t & (L | H) && Ct.call(this, e);
                        }
                        function Ct(t) {
                            var e = t.changedPointers[0];
                            if (e.identifier === this.primaryTouch) {
                                var n = {
                                    x: e.clientX,
                                    y: e.clientY,
                                };
                                this.lastTouches.push(n);
                                var i = this.lastTouches;
                                setTimeout(function () {
                                    var t = i.indexOf(n);
                                    t > -1 && i.splice(t, 1);
                                }, _t);
                            }
                        }
                        function Dt(t) {
                            for (
                                var e = t.srcEvent.clientX,
                                    n = t.srcEvent.clientY,
                                    i = 0;
                                i < this.lastTouches.length;
                                i++
                            ) {
                                var r = this.lastTouches[i],
                                    s = Math.abs(e - r.x),
                                    o = Math.abs(n - r.y);
                                if (s <= 25 && o <= 25) return !0;
                            }
                            return !1;
                        }
                        b(Pt, et, {
                            handler: function (t, e, n) {
                                var i = n.pointerType == W,
                                    r = n.pointerType == q;
                                if (
                                    !(
                                        r &&
                                        n.sourceCapabilities &&
                                        n.sourceCapabilities.firesTouchEvents
                                    )
                                ) {
                                    if (i) xt.call(this, e, n);
                                    else if (r && Dt.call(this, n)) return;
                                    this.callback(t, e, n);
                                }
                            },
                            destroy: function () {
                                this.touch.destroy(), this.mouse.destroy();
                            },
                        });
                        var Ot = R(c.style, "touchAction"),
                            wt = Ot !== a,
                            Mt = "compute",
                            Rt = "auto",
                            zt = "manipulation",
                            Nt = "none",
                            Xt = "pan-x",
                            Yt = "pan-y",
                            Ft = (function () {
                                if (!wt) return !1;
                                var t = {},
                                    e = r.CSS && r.CSS.supports;
                                return (
                                    [
                                        "auto",
                                        "manipulation",
                                        "pan-y",
                                        "pan-x",
                                        "pan-x pan-y",
                                        "none",
                                    ].forEach(function (n) {
                                        t[n] =
                                            !e ||
                                            r.CSS.supports("touch-action", n);
                                    }),
                                    t
                                );
                            })();
                        function Wt(t, e) {
                            (this.manager = t), this.set(e);
                        }
                        Wt.prototype = {
                            set: function (t) {
                                t == Mt && (t = this.compute()),
                                    wt &&
                                        this.manager.element.style &&
                                        Ft[t] &&
                                        (this.manager.element.style[Ot] = t),
                                    (this.actions = t.toLowerCase().trim());
                            },
                            update: function () {
                                this.set(this.manager.options.touchAction);
                            },
                            compute: function () {
                                var t = [];
                                return (
                                    g(this.manager.recognizers, function (e) {
                                        A(e.options.enable, [e]) &&
                                            (t = t.concat(e.getTouchAction()));
                                    }),
                                    (function (t) {
                                        if (C(t, Nt)) return Nt;
                                        var e = C(t, Xt),
                                            n = C(t, Yt);
                                        return e && n
                                            ? Nt
                                            : e || n
                                            ? e
                                                ? Xt
                                                : Yt
                                            : C(t, zt)
                                            ? zt
                                            : Rt;
                                    })(t.join(" "))
                                );
                            },
                            preventDefaults: function (t) {
                                var e = t.srcEvent,
                                    n = t.offsetDirection;
                                if (this.manager.session.prevented)
                                    e.preventDefault();
                                else {
                                    var i = this.actions,
                                        r = C(i, Nt) && !Ft[Nt],
                                        s = C(i, Yt) && !Ft[Yt],
                                        o = C(i, Xt) && !Ft[Xt];
                                    if (r) {
                                        var a = 1 === t.pointers.length,
                                            u = t.distance < 2,
                                            h = t.deltaTime < 250;
                                        if (a && u && h) return;
                                    }
                                    if (!o || !s)
                                        return r || (s && n & $) || (o && n & J)
                                            ? this.preventSrc(e)
                                            : void 0;
                                }
                            },
                            preventSrc: function (t) {
                                (this.manager.session.prevented = !0),
                                    t.preventDefault();
                            },
                        };
                        var qt = 1,
                            jt = 32;
                        function kt(t) {
                            (this.options = u({}, this.defaults, t || {})),
                                (this.id = z++),
                                (this.manager = null),
                                (this.options.enable = S(
                                    this.options.enable,
                                    !0
                                )),
                                (this.state = qt),
                                (this.simultaneous = {}),
                                (this.requireFail = []);
                        }
                        function Lt(t) {
                            return 16 & t
                                ? "cancel"
                                : 8 & t
                                ? "end"
                                : 4 & t
                                ? "move"
                                : 2 & t
                                ? "start"
                                : "";
                        }
                        function Ht(t) {
                            return t == B
                                ? "down"
                                : t == Z
                                ? "up"
                                : t == V
                                ? "left"
                                : t == G
                                ? "right"
                                : "";
                        }
                        function Ut(t, e) {
                            var n = e.manager;
                            return n ? n.get(t) : t;
                        }
                        function Vt() {
                            kt.apply(this, arguments);
                        }
                        function Gt() {
                            Vt.apply(this, arguments),
                                (this.pX = null),
                                (this.pY = null);
                        }
                        function Zt() {
                            Vt.apply(this, arguments);
                        }
                        function Bt() {
                            kt.apply(this, arguments),
                                (this._timer = null),
                                (this._input = null);
                        }
                        function $t() {
                            Vt.apply(this, arguments);
                        }
                        function Jt() {
                            Vt.apply(this, arguments);
                        }
                        function Kt() {
                            kt.apply(this, arguments),
                                (this.pTime = !1),
                                (this.pCenter = !1),
                                (this._timer = null),
                                (this._input = null),
                                (this.count = 0);
                        }
                        function Qt(t, e) {
                            return (
                                ((e = e || {}).recognizers = S(
                                    e.recognizers,
                                    Qt.defaults.preset
                                )),
                                new te(t, e)
                            );
                        }
                        function te(t, e) {
                            (this.options = u({}, Qt.defaults, e || {})),
                                (this.options.inputTarget =
                                    this.options.inputTarget || t),
                                (this.handlers = {}),
                                (this.session = {}),
                                (this.recognizers = []),
                                (this.oldCssProps = {}),
                                (this.element = t),
                                (this.input = new (this.options.inputClass ||
                                    (Y ? gt : F ? At : X ? Pt : pt))(this, nt)),
                                (this.touchAction = new Wt(
                                    this,
                                    this.options.touchAction
                                )),
                                ee(this, !0),
                                g(
                                    this.options.recognizers,
                                    function (t) {
                                        var e = this.add(new t[0](t[1]));
                                        t[2] && e.recognizeWith(t[2]),
                                            t[3] && e.requireFailure(t[3]);
                                    },
                                    this
                                );
                        }
                        function ee(t, e) {
                            var n,
                                i = t.element;
                            i.style &&
                                (g(t.options.cssProps, function (r, s) {
                                    (n = R(i.style, s)),
                                        e
                                            ? ((t.oldCssProps[n] = i.style[n]),
                                              (i.style[n] = r))
                                            : (i.style[n] =
                                                  t.oldCssProps[n] || "");
                                }),
                                e || (t.oldCssProps = {}));
                        }
                        (kt.prototype = {
                            defaults: {},
                            set: function (t) {
                                return (
                                    u(this.options, t),
                                    this.manager &&
                                        this.manager.touchAction.update(),
                                    this
                                );
                            },
                            recognizeWith: function (t) {
                                if (m(t, "recognizeWith", this)) return this;
                                var e = this.simultaneous;
                                return (
                                    e[(t = Ut(t, this)).id] ||
                                        ((e[t.id] = t), t.recognizeWith(this)),
                                    this
                                );
                            },
                            dropRecognizeWith: function (t) {
                                return (
                                    m(t, "dropRecognizeWith", this) ||
                                        ((t = Ut(t, this)),
                                        delete this.simultaneous[t.id]),
                                    this
                                );
                            },
                            requireFailure: function (t) {
                                if (m(t, "requireFailure", this)) return this;
                                var e = this.requireFail;
                                return (
                                    -1 === O(e, (t = Ut(t, this))) &&
                                        (e.push(t), t.requireFailure(this)),
                                    this
                                );
                            },
                            dropRequireFailure: function (t) {
                                if (m(t, "dropRequireFailure", this))
                                    return this;
                                t = Ut(t, this);
                                var e = O(this.requireFail, t);
                                return (
                                    e > -1 && this.requireFail.splice(e, 1),
                                    this
                                );
                            },
                            hasRequireFailures: function () {
                                return this.requireFail.length > 0;
                            },
                            canRecognizeWith: function (t) {
                                return !!this.simultaneous[t.id];
                            },
                            emit: function (t) {
                                var e = this,
                                    n = this.state;
                                function i(n) {
                                    e.manager.emit(n, t);
                                }
                                n < 8 && i(e.options.event + Lt(n)),
                                    i(e.options.event),
                                    t.additionalEvent && i(t.additionalEvent),
                                    n >= 8 && i(e.options.event + Lt(n));
                            },
                            tryEmit: function (t) {
                                if (this.canEmit()) return this.emit(t);
                                this.state = jt;
                            },
                            canEmit: function () {
                                for (var t = 0; t < this.requireFail.length; ) {
                                    if (
                                        !(this.requireFail[t].state & (jt | qt))
                                    )
                                        return !1;
                                    t++;
                                }
                                return !0;
                            },
                            recognize: function (t) {
                                var e = u({}, t);
                                if (!A(this.options.enable, [this, e]))
                                    return this.reset(), void (this.state = jt);
                                56 & this.state && (this.state = qt),
                                    (this.state = this.process(e)),
                                    30 & this.state && this.tryEmit(e);
                            },
                            process: function (t) {},
                            getTouchAction: function () {},
                            reset: function () {},
                        }),
                            b(Vt, kt, {
                                defaults: {
                                    pointers: 1,
                                },
                                attrTest: function (t) {
                                    var e = this.options.pointers;
                                    return 0 === e || t.pointers.length === e;
                                },
                                process: function (t) {
                                    var e = this.state,
                                        n = t.eventType,
                                        i = 6 & e,
                                        r = this.attrTest(t);
                                    return i && (n & H || !r)
                                        ? 16 | e
                                        : i || r
                                        ? n & L
                                            ? 8 | e
                                            : 2 & e
                                            ? 4 | e
                                            : 2
                                        : jt;
                                },
                            }),
                            b(Gt, Vt, {
                                defaults: {
                                    event: "pan",
                                    threshold: 10,
                                    pointers: 1,
                                    direction: K,
                                },
                                getTouchAction: function () {
                                    var t = this.options.direction,
                                        e = [];
                                    return (
                                        t & $ && e.push(Yt),
                                        t & J && e.push(Xt),
                                        e
                                    );
                                },
                                directionTest: function (t) {
                                    var e = this.options,
                                        n = !0,
                                        i = t.distance,
                                        r = t.direction,
                                        s = t.deltaX,
                                        o = t.deltaY;
                                    return (
                                        r & e.direction ||
                                            (e.direction & $
                                                ? ((r =
                                                      0 === s
                                                          ? U
                                                          : s < 0
                                                          ? V
                                                          : G),
                                                  (n = s != this.pX),
                                                  (i = Math.abs(t.deltaX)))
                                                : ((r =
                                                      0 === o
                                                          ? U
                                                          : o < 0
                                                          ? Z
                                                          : B),
                                                  (n = o != this.pY),
                                                  (i = Math.abs(t.deltaY)))),
                                        (t.direction = r),
                                        n && i > e.threshold && r & e.direction
                                    );
                                },
                                attrTest: function (t) {
                                    return (
                                        Vt.prototype.attrTest.call(this, t) &&
                                        (2 & this.state ||
                                            (!(2 & this.state) &&
                                                this.directionTest(t)))
                                    );
                                },
                                emit: function (t) {
                                    (this.pX = t.deltaX), (this.pY = t.deltaY);
                                    var e = Ht(t.direction);
                                    e &&
                                        (t.additionalEvent =
                                            this.options.event + e),
                                        this._super.emit.call(this, t);
                                },
                            }),
                            b(Zt, Vt, {
                                defaults: {
                                    event: "pinch",
                                    threshold: 0,
                                    pointers: 2,
                                },
                                getTouchAction: function () {
                                    return [Nt];
                                },
                                attrTest: function (t) {
                                    return (
                                        this._super.attrTest.call(this, t) &&
                                        (Math.abs(t.scale - 1) >
                                            this.options.threshold ||
                                            2 & this.state)
                                    );
                                },
                                emit: function (t) {
                                    if (1 !== t.scale) {
                                        var e = t.scale < 1 ? "in" : "out";
                                        t.additionalEvent =
                                            this.options.event + e;
                                    }
                                    this._super.emit.call(this, t);
                                },
                            }),
                            b(Bt, kt, {
                                defaults: {
                                    event: "press",
                                    pointers: 1,
                                    time: 251,
                                    threshold: 9,
                                },
                                getTouchAction: function () {
                                    return [Rt];
                                },
                                process: function (t) {
                                    var e = this.options,
                                        n = t.pointers.length === e.pointers,
                                        i = t.distance < e.threshold,
                                        r = t.deltaTime > e.time;
                                    if (
                                        ((this._input = t),
                                        !i ||
                                            !n ||
                                            (t.eventType & (L | H) && !r))
                                    )
                                        this.reset();
                                    else if (t.eventType & k)
                                        this.reset(),
                                            (this._timer = d(
                                                function () {
                                                    (this.state = 8),
                                                        this.tryEmit();
                                                },
                                                e.time,
                                                this
                                            ));
                                    else if (t.eventType & L) return 8;
                                    return jt;
                                },
                                reset: function () {
                                    clearTimeout(this._timer);
                                },
                                emit: function (t) {
                                    8 === this.state &&
                                        (t && t.eventType & L
                                            ? this.manager.emit(
                                                  this.options.event + "up",
                                                  t
                                              )
                                            : ((this._input.timeStamp = v()),
                                              this.manager.emit(
                                                  this.options.event,
                                                  this._input
                                              )));
                                },
                            }),
                            b($t, Vt, {
                                defaults: {
                                    event: "rotate",
                                    threshold: 0,
                                    pointers: 2,
                                },
                                getTouchAction: function () {
                                    return [Nt];
                                },
                                attrTest: function (t) {
                                    return (
                                        this._super.attrTest.call(this, t) &&
                                        (Math.abs(t.rotation) >
                                            this.options.threshold ||
                                            2 & this.state)
                                    );
                                },
                            }),
                            b(Jt, Vt, {
                                defaults: {
                                    event: "swipe",
                                    threshold: 10,
                                    velocity: 0.3,
                                    direction: $ | J,
                                    pointers: 1,
                                },
                                getTouchAction: function () {
                                    return Gt.prototype.getTouchAction.call(
                                        this
                                    );
                                },
                                attrTest: function (t) {
                                    var e,
                                        n = this.options.direction;
                                    return (
                                        n & ($ | J)
                                            ? (e = t.overallVelocity)
                                            : n & $
                                            ? (e = t.overallVelocityX)
                                            : n & J && (e = t.overallVelocityY),
                                        this._super.attrTest.call(this, t) &&
                                            n & t.offsetDirection &&
                                            t.distance >
                                                this.options.threshold &&
                                            t.maxPointers ==
                                                this.options.pointers &&
                                            f(e) > this.options.velocity &&
                                            t.eventType & L
                                    );
                                },
                                emit: function (t) {
                                    var e = Ht(t.offsetDirection);
                                    e &&
                                        this.manager.emit(
                                            this.options.event + e,
                                            t
                                        ),
                                        this.manager.emit(
                                            this.options.event,
                                            t
                                        );
                                },
                            }),
                            b(Kt, kt, {
                                defaults: {
                                    event: "tap",
                                    pointers: 1,
                                    taps: 1,
                                    interval: 300,
                                    time: 250,
                                    threshold: 9,
                                    posThreshold: 10,
                                },
                                getTouchAction: function () {
                                    return [zt];
                                },
                                process: function (t) {
                                    var e = this.options,
                                        n = t.pointers.length === e.pointers,
                                        i = t.distance < e.threshold,
                                        r = t.deltaTime < e.time;
                                    if (
                                        (this.reset(),
                                        t.eventType & k && 0 === this.count)
                                    )
                                        return this.failTimeout();
                                    if (i && r && n) {
                                        if (t.eventType != L)
                                            return this.failTimeout();
                                        var s =
                                                !this.pTime ||
                                                t.timeStamp - this.pTime <
                                                    e.interval,
                                            o =
                                                !this.pCenter ||
                                                at(this.pCenter, t.center) <
                                                    e.posThreshold;
                                        if (
                                            ((this.pTime = t.timeStamp),
                                            (this.pCenter = t.center),
                                            o && s
                                                ? (this.count += 1)
                                                : (this.count = 1),
                                            (this._input = t),
                                            0 == this.count % e.taps)
                                        )
                                            return this.hasRequireFailures()
                                                ? ((this._timer = d(
                                                      function () {
                                                          (this.state = 8),
                                                              this.tryEmit();
                                                      },
                                                      e.interval,
                                                      this
                                                  )),
                                                  2)
                                                : 8;
                                    }
                                    return jt;
                                },
                                failTimeout: function () {
                                    return (
                                        (this._timer = d(
                                            function () {
                                                this.state = jt;
                                            },
                                            this.options.interval,
                                            this
                                        )),
                                        jt
                                    );
                                },
                                reset: function () {
                                    clearTimeout(this._timer);
                                },
                                emit: function () {
                                    8 == this.state &&
                                        ((this._input.tapCount = this.count),
                                        this.manager.emit(
                                            this.options.event,
                                            this._input
                                        ));
                                },
                            }),
                            (Qt.VERSION = "2.0.7"),
                            (Qt.defaults = {
                                domEvents: !1,
                                touchAction: Mt,
                                enable: !0,
                                inputTarget: null,
                                inputClass: null,
                                preset: [
                                    [
                                        $t,
                                        {
                                            enable: !1,
                                        },
                                    ],
                                    [
                                        Zt,
                                        {
                                            enable: !1,
                                        },
                                        ["rotate"],
                                    ],
                                    [
                                        Jt,
                                        {
                                            direction: $,
                                        },
                                    ],
                                    [
                                        Gt,
                                        {
                                            direction: $,
                                        },
                                        ["swipe"],
                                    ],
                                    [Kt],
                                    [
                                        Kt,
                                        {
                                            event: "doubletap",
                                            taps: 2,
                                        },
                                        ["tap"],
                                    ],
                                    [Bt],
                                ],
                                cssProps: {
                                    userSelect: "none",
                                    touchSelect: "none",
                                    touchCallout: "none",
                                    contentZooming: "none",
                                    userDrag: "none",
                                    tapHighlightColor: "rgba(0,0,0,0)",
                                },
                            }),
                            (te.prototype = {
                                set: function (t) {
                                    return (
                                        u(this.options, t),
                                        t.touchAction &&
                                            this.touchAction.update(),
                                        t.inputTarget &&
                                            (this.input.destroy(),
                                            (this.input.target = t.inputTarget),
                                            this.input.init()),
                                        this
                                    );
                                },
                                stop: function (t) {
                                    this.session.stopped = t ? 2 : 1;
                                },
                                recognize: function (t) {
                                    var e = this.session;
                                    if (!e.stopped) {
                                        var n;
                                        this.touchAction.preventDefaults(t);
                                        var i = this.recognizers,
                                            r = e.curRecognizer;
                                        (!r || (r && 8 & r.state)) &&
                                            (r = e.curRecognizer = null);
                                        for (var s = 0; s < i.length; )
                                            (n = i[s]),
                                                2 === e.stopped ||
                                                (r &&
                                                    n != r &&
                                                    !n.canRecognizeWith(r))
                                                    ? n.reset()
                                                    : n.recognize(t),
                                                !r &&
                                                    14 & n.state &&
                                                    (r = e.curRecognizer = n),
                                                s++;
                                    }
                                },
                                get: function (t) {
                                    if (t instanceof kt) return t;
                                    for (
                                        var e = this.recognizers, n = 0;
                                        n < e.length;
                                        n++
                                    )
                                        if (e[n].options.event == t)
                                            return e[n];
                                    return null;
                                },
                                add: function (t) {
                                    if (m(t, "add", this)) return this;
                                    var e = this.get(t.options.event);
                                    return (
                                        e && this.remove(e),
                                        this.recognizers.push(t),
                                        (t.manager = this),
                                        this.touchAction.update(),
                                        t
                                    );
                                },
                                remove: function (t) {
                                    if (m(t, "remove", this)) return this;
                                    if ((t = this.get(t))) {
                                        var e = this.recognizers,
                                            n = O(e, t);
                                        -1 !== n &&
                                            (e.splice(n, 1),
                                            this.touchAction.update());
                                    }
                                    return this;
                                },
                                on: function (t, e) {
                                    if (t !== a && e !== a) {
                                        var n = this.handlers;
                                        return (
                                            g(D(t), function (t) {
                                                (n[t] = n[t] || []),
                                                    n[t].push(e);
                                            }),
                                            this
                                        );
                                    }
                                },
                                off: function (t, e) {
                                    if (t !== a) {
                                        var n = this.handlers;
                                        return (
                                            g(D(t), function (t) {
                                                e
                                                    ? n[t] &&
                                                      n[t].splice(O(n[t], e), 1)
                                                    : delete n[t];
                                            }),
                                            this
                                        );
                                    }
                                },
                                emit: function (t, e) {
                                    this.options.domEvents &&
                                        (function (t, e) {
                                            var n = s.createEvent("Event");
                                            n.initEvent(t, !0, !0),
                                                (n.gesture = e),
                                                e.target.dispatchEvent(n);
                                        })(t, e);
                                    var n =
                                        this.handlers[t] &&
                                        this.handlers[t].slice();
                                    if (n && n.length) {
                                        (e.type = t),
                                            (e.preventDefault = function () {
                                                e.srcEvent.preventDefault();
                                            });
                                        for (var i = 0; i < n.length; )
                                            n[i](e), i++;
                                    }
                                },
                                destroy: function () {
                                    this.element && ee(this, !1),
                                        (this.handlers = {}),
                                        (this.session = {}),
                                        this.input.destroy(),
                                        (this.element = null);
                                },
                            }),
                            u(Qt, {
                                INPUT_START: k,
                                INPUT_MOVE: 2,
                                INPUT_END: L,
                                INPUT_CANCEL: H,
                                STATE_POSSIBLE: qt,
                                STATE_BEGAN: 2,
                                STATE_CHANGED: 4,
                                STATE_ENDED: 8,
                                STATE_RECOGNIZED: 8,
                                STATE_CANCELLED: 16,
                                STATE_FAILED: jt,
                                DIRECTION_NONE: U,
                                DIRECTION_LEFT: V,
                                DIRECTION_RIGHT: G,
                                DIRECTION_UP: Z,
                                DIRECTION_DOWN: B,
                                DIRECTION_HORIZONTAL: $,
                                DIRECTION_VERTICAL: J,
                                DIRECTION_ALL: K,
                                Manager: te,
                                Input: et,
                                TouchAction: Wt,
                                TouchInput: At,
                                MouseInput: pt,
                                PointerEventInput: gt,
                                TouchMouseInput: Pt,
                                SingleTouchInput: Tt,
                                Recognizer: kt,
                                AttrRecognizer: Vt,
                                Tap: Kt,
                                Pan: Gt,
                                Swipe: Jt,
                                Pinch: Zt,
                                Rotate: $t,
                                Press: Bt,
                                on: _,
                                off: P,
                                each: g,
                                merge: E,
                                extend: T,
                                assign: u,
                                inherit: b,
                                bindFn: I,
                                prefixed: R,
                            }),
                            ((void 0 !== r
                                ? r
                                : "undefined" != typeof self
                                ? self
                                : {}
                            ).Hammer = Qt),
                            (i = function () {
                                return Qt;
                            }.call(e, n, e, t)) === a || (t.exports = i);
                    })(window, document);
                },
            },
            e = {};
        function n(i) {
            var r = e[i];
            if (void 0 !== r) return r.exports;
            var s = (e[i] = {
                exports: {},
            });
            return t[i](s, s.exports, n), s.exports;
        }
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return (
                n.d(e, {
                    a: e,
                }),
                e
            );
        }),
            (n.d = function (t, e) {
                for (var i in e)
                    n.o(e, i) &&
                        !n.o(t, i) &&
                        Object.defineProperty(t, i, {
                            enumerable: !0,
                            get: e[i],
                        });
            }),
            (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.r = function (t) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(t, "__esModule", {
                        value: !0,
                    });
            });
        var i = {};
        return (
            (function () {
                "use strict";
                n.r(i), n(840);
            })(),
            i
        );
    })();
});
