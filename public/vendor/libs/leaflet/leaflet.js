/*! For license information please see leaflet.js.LICENSE.txt */
!(function (t, e) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var i = e();
        for (var n in i) ("object" == typeof exports ? exports : t)[n] = i[n];
    }
})(self, function () {
    return (function () {
        var t = {
                5243: function (t, e) {
                    !(function (t) {
                        "use strict";
                        function e(t) {
                            var e, i, n, o;
                            for (i = 1, n = arguments.length; i < n; i++)
                                for (e in (o = arguments[i])) t[e] = o[e];
                            return t;
                        }
                        var i =
                            Object.create ||
                            (function () {
                                function t() {}
                                return function (e) {
                                    return (t.prototype = e), new t();
                                };
                            })();
                        function n(t, e) {
                            var i = Array.prototype.slice;
                            if (t.bind)
                                return t.bind.apply(t, i.call(arguments, 1));
                            var n = i.call(arguments, 2);
                            return function () {
                                return t.apply(
                                    e,
                                    n.length
                                        ? n.concat(i.call(arguments))
                                        : arguments
                                );
                            };
                        }
                        var o = 0;
                        function s(t) {
                            return (
                                "_leaflet_id" in t || (t._leaflet_id = ++o),
                                t._leaflet_id
                            );
                        }
                        function r(t, e, i) {
                            var n, o, s, r;
                            return (
                                (r = function () {
                                    (n = !1), o && (s.apply(i, o), (o = !1));
                                }),
                                (s = function () {
                                    n
                                        ? (o = arguments)
                                        : (t.apply(i, arguments),
                                          setTimeout(r, e),
                                          (n = !0));
                                }),
                                s
                            );
                        }
                        function a(t, e, i) {
                            var n = e[1],
                                o = e[0],
                                s = n - o;
                            return t === n && i
                                ? t
                                : ((((t - o) % s) + s) % s) + o;
                        }
                        function h() {
                            return !1;
                        }
                        function l(t, e) {
                            if (!1 === e) return t;
                            var i = Math.pow(10, void 0 === e ? 6 : e);
                            return Math.round(t * i) / i;
                        }
                        function u(t) {
                            return t.trim
                                ? t.trim()
                                : t.replace(/^\s+|\s+$/g, "");
                        }
                        function c(t) {
                            return u(t).split(/\s+/);
                        }
                        function d(t, e) {
                            for (var n in (Object.prototype.hasOwnProperty.call(
                                t,
                                "options"
                            ) || (t.options = t.options ? i(t.options) : {}),
                            e))
                                t.options[n] = e[n];
                            return t.options;
                        }
                        function _(t, e, i) {
                            var n = [];
                            for (var o in t)
                                n.push(
                                    encodeURIComponent(
                                        i ? o.toUpperCase() : o
                                    ) +
                                        "=" +
                                        encodeURIComponent(t[o])
                                );
                            return (
                                (e && -1 !== e.indexOf("?") ? "&" : "?") +
                                n.join("&")
                            );
                        }
                        var p = /\{ *([\w_ -]+) *\}/g;
                        function m(t, e) {
                            return t.replace(p, function (t, i) {
                                var n = e[i];
                                if (void 0 === n)
                                    throw new Error(
                                        "No value provided for variable " + t
                                    );
                                return "function" == typeof n && (n = n(e)), n;
                            });
                        }
                        var f =
                            Array.isArray ||
                            function (t) {
                                return (
                                    "[object Array]" ===
                                    Object.prototype.toString.call(t)
                                );
                            };
                        function g(t, e) {
                            for (var i = 0; i < t.length; i++)
                                if (t[i] === e) return i;
                            return -1;
                        }
                        var v =
                            "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
                        function y(t) {
                            return (
                                window["webkit" + t] ||
                                window["moz" + t] ||
                                window["ms" + t]
                            );
                        }
                        var x = 0;
                        function w(t) {
                            var e = +new Date(),
                                i = Math.max(0, 16 - (e - x));
                            return (x = e + i), window.setTimeout(t, i);
                        }
                        var b =
                                window.requestAnimationFrame ||
                                y("RequestAnimationFrame") ||
                                w,
                            P =
                                window.cancelAnimationFrame ||
                                y("CancelAnimationFrame") ||
                                y("CancelRequestAnimationFrame") ||
                                function (t) {
                                    window.clearTimeout(t);
                                };
                        function T(t, e, i) {
                            if (!i || b !== w) return b.call(window, n(t, e));
                            t.call(e);
                        }
                        function M(t) {
                            t && P.call(window, t);
                        }
                        var z = {
                            __proto__: null,
                            extend: e,
                            create: i,
                            bind: n,
                            get lastId() {
                                return o;
                            },
                            stamp: s,
                            throttle: r,
                            wrapNum: a,
                            falseFn: h,
                            formatNum: l,
                            trim: u,
                            splitWords: c,
                            setOptions: d,
                            getParamString: _,
                            template: m,
                            isArray: f,
                            indexOf: g,
                            emptyImageUrl: v,
                            requestFn: b,
                            cancelFn: P,
                            requestAnimFrame: T,
                            cancelAnimFrame: M,
                        };
                        function C() {}
                        (C.extend = function (t) {
                            var n = function () {
                                    d(this),
                                        this.initialize &&
                                            this.initialize.apply(
                                                this,
                                                arguments
                                            ),
                                        this.callInitHooks();
                                },
                                o = (n.__super__ = this.prototype),
                                s = i(o);
                            for (var r in ((s.constructor = n),
                            (n.prototype = s),
                            this))
                                Object.prototype.hasOwnProperty.call(this, r) &&
                                    "prototype" !== r &&
                                    "__super__" !== r &&
                                    (n[r] = this[r]);
                            return (
                                t.statics && e(n, t.statics),
                                t.includes &&
                                    ((function (t) {
                                        if (
                                            "undefined" != typeof L &&
                                            L &&
                                            L.Mixin
                                        ) {
                                            t = f(t) ? t : [t];
                                            for (var e = 0; e < t.length; e++)
                                                t[e] === L.Mixin.Events &&
                                                    console.warn(
                                                        "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
                                                        new Error().stack
                                                    );
                                        }
                                    })(t.includes),
                                    e.apply(null, [s].concat(t.includes))),
                                e(s, t),
                                delete s.statics,
                                delete s.includes,
                                s.options &&
                                    ((s.options = o.options
                                        ? i(o.options)
                                        : {}),
                                    e(s.options, t.options)),
                                (s._initHooks = []),
                                (s.callInitHooks = function () {
                                    if (!this._initHooksCalled) {
                                        o.callInitHooks &&
                                            o.callInitHooks.call(this),
                                            (this._initHooksCalled = !0);
                                        for (
                                            var t = 0, e = s._initHooks.length;
                                            t < e;
                                            t++
                                        )
                                            s._initHooks[t].call(this);
                                    }
                                }),
                                n
                            );
                        }),
                            (C.include = function (t) {
                                var i = this.prototype.options;
                                return (
                                    e(this.prototype, t),
                                    t.options &&
                                        ((this.prototype.options = i),
                                        this.mergeOptions(t.options)),
                                    this
                                );
                            }),
                            (C.mergeOptions = function (t) {
                                return e(this.prototype.options, t), this;
                            }),
                            (C.addInitHook = function (t) {
                                var e = Array.prototype.slice.call(
                                        arguments,
                                        1
                                    ),
                                    i =
                                        "function" == typeof t
                                            ? t
                                            : function () {
                                                  this[t].apply(this, e);
                                              };
                                return (
                                    (this.prototype._initHooks =
                                        this.prototype._initHooks || []),
                                    this.prototype._initHooks.push(i),
                                    this
                                );
                            });
                        var S = {
                            on: function (t, e, i) {
                                if ("object" == typeof t)
                                    for (var n in t) this._on(n, t[n], e);
                                else
                                    for (
                                        var o = 0, s = (t = c(t)).length;
                                        o < s;
                                        o++
                                    )
                                        this._on(t[o], e, i);
                                return this;
                            },
                            off: function (t, e, i) {
                                if (arguments.length)
                                    if ("object" == typeof t)
                                        for (var n in t) this._off(n, t[n], e);
                                    else {
                                        t = c(t);
                                        for (
                                            var o = 1 === arguments.length,
                                                s = 0,
                                                r = t.length;
                                            s < r;
                                            s++
                                        )
                                            o
                                                ? this._off(t[s])
                                                : this._off(t[s], e, i);
                                    }
                                else delete this._events;
                                return this;
                            },
                            _on: function (t, e, i, n) {
                                if ("function" == typeof e) {
                                    if (!1 === this._listens(t, e, i)) {
                                        i === this && (i = void 0);
                                        var o = {
                                            fn: e,
                                            ctx: i,
                                        };
                                        n && (o.once = !0),
                                            (this._events = this._events || {}),
                                            (this._events[t] =
                                                this._events[t] || []),
                                            this._events[t].push(o);
                                    }
                                } else
                                    console.warn(
                                        "wrong listener type: " + typeof e
                                    );
                            },
                            _off: function (t, e, i) {
                                var n, o, s;
                                if (this._events && (n = this._events[t]))
                                    if (1 !== arguments.length)
                                        if ("function" == typeof e) {
                                            var r = this._listens(t, e, i);
                                            if (!1 !== r) {
                                                var a = n[r];
                                                this._firingCount &&
                                                    ((a.fn = h),
                                                    (this._events[t] = n =
                                                        n.slice())),
                                                    n.splice(r, 1);
                                            }
                                        } else
                                            console.warn(
                                                "wrong listener type: " +
                                                    typeof e
                                            );
                                    else {
                                        if (this._firingCount)
                                            for (
                                                o = 0, s = n.length;
                                                o < s;
                                                o++
                                            )
                                                n[o].fn = h;
                                        delete this._events[t];
                                    }
                            },
                            fire: function (t, i, n) {
                                if (!this.listens(t, n)) return this;
                                var o = e({}, i, {
                                    type: t,
                                    target: this,
                                    sourceTarget: (i && i.sourceTarget) || this,
                                });
                                if (this._events) {
                                    var s = this._events[t];
                                    if (s) {
                                        this._firingCount =
                                            this._firingCount + 1 || 1;
                                        for (
                                            var r = 0, a = s.length;
                                            r < a;
                                            r++
                                        ) {
                                            var h = s[r],
                                                l = h.fn;
                                            h.once && this.off(t, l, h.ctx),
                                                l.call(h.ctx || this, o);
                                        }
                                        this._firingCount--;
                                    }
                                }
                                return n && this._propagateEvent(o), this;
                            },
                            listens: function (t, e, i, n) {
                                "string" != typeof t &&
                                    console.warn(
                                        '"string" type argument expected'
                                    );
                                var o = e;
                                "function" != typeof e &&
                                    ((n = !!e), (o = void 0), (i = void 0));
                                var s = this._events && this._events[t];
                                if (
                                    s &&
                                    s.length &&
                                    !1 !== this._listens(t, o, i)
                                )
                                    return !0;
                                if (n)
                                    for (var r in this._eventParents)
                                        if (
                                            this._eventParents[r].listens(
                                                t,
                                                e,
                                                i,
                                                n
                                            )
                                        )
                                            return !0;
                                return !1;
                            },
                            _listens: function (t, e, i) {
                                if (!this._events) return !1;
                                var n = this._events[t] || [];
                                if (!e) return !!n.length;
                                i === this && (i = void 0);
                                for (var o = 0, s = n.length; o < s; o++)
                                    if (n[o].fn === e && n[o].ctx === i)
                                        return o;
                                return !1;
                            },
                            once: function (t, e, i) {
                                if ("object" == typeof t)
                                    for (var n in t) this._on(n, t[n], e, !0);
                                else
                                    for (
                                        var o = 0, s = (t = c(t)).length;
                                        o < s;
                                        o++
                                    )
                                        this._on(t[o], e, i, !0);
                                return this;
                            },
                            addEventParent: function (t) {
                                return (
                                    (this._eventParents =
                                        this._eventParents || {}),
                                    (this._eventParents[s(t)] = t),
                                    this
                                );
                            },
                            removeEventParent: function (t) {
                                return (
                                    this._eventParents &&
                                        delete this._eventParents[s(t)],
                                    this
                                );
                            },
                            _propagateEvent: function (t) {
                                for (var i in this._eventParents)
                                    this._eventParents[i].fire(
                                        t.type,
                                        e(
                                            {
                                                layer: t.target,
                                                propagatedFrom: t.target,
                                            },
                                            t
                                        ),
                                        !0
                                    );
                            },
                        };
                        (S.addEventListener = S.on),
                            (S.removeEventListener = S.clearAllEventListeners =
                                S.off),
                            (S.addOneTimeEventListener = S.once),
                            (S.fireEvent = S.fire),
                            (S.hasEventListeners = S.listens);
                        var Z = C.extend(S);
                        function E(t, e, i) {
                            (this.x = i ? Math.round(t) : t),
                                (this.y = i ? Math.round(e) : e);
                        }
                        var k =
                            Math.trunc ||
                            function (t) {
                                return t > 0 ? Math.floor(t) : Math.ceil(t);
                            };
                        function O(t, e, i) {
                            return t instanceof E
                                ? t
                                : f(t)
                                ? new E(t[0], t[1])
                                : null == t
                                ? t
                                : "object" == typeof t && "x" in t && "y" in t
                                ? new E(t.x, t.y)
                                : new E(t, e, i);
                        }
                        function A(t, e) {
                            if (t)
                                for (
                                    var i = e ? [t, e] : t, n = 0, o = i.length;
                                    n < o;
                                    n++
                                )
                                    this.extend(i[n]);
                        }
                        function B(t, e) {
                            return !t || t instanceof A ? t : new A(t, e);
                        }
                        function I(t, e) {
                            if (t)
                                for (
                                    var i = e ? [t, e] : t, n = 0, o = i.length;
                                    n < o;
                                    n++
                                )
                                    this.extend(i[n]);
                        }
                        function R(t, e) {
                            return t instanceof I ? t : new I(t, e);
                        }
                        function N(t, e, i) {
                            if (isNaN(t) || isNaN(e))
                                throw new Error(
                                    "Invalid LatLng object: (" +
                                        t +
                                        ", " +
                                        e +
                                        ")"
                                );
                            (this.lat = +t),
                                (this.lng = +e),
                                void 0 !== i && (this.alt = +i);
                        }
                        function D(t, e, i) {
                            return t instanceof N
                                ? t
                                : f(t) && "object" != typeof t[0]
                                ? 3 === t.length
                                    ? new N(t[0], t[1], t[2])
                                    : 2 === t.length
                                    ? new N(t[0], t[1])
                                    : null
                                : null == t
                                ? t
                                : "object" == typeof t && "lat" in t
                                ? new N(
                                      t.lat,
                                      "lng" in t ? t.lng : t.lon,
                                      t.alt
                                  )
                                : void 0 === e
                                ? null
                                : new N(t, e, i);
                        }
                        (E.prototype = {
                            clone: function () {
                                return new E(this.x, this.y);
                            },
                            add: function (t) {
                                return this.clone()._add(O(t));
                            },
                            _add: function (t) {
                                return (this.x += t.x), (this.y += t.y), this;
                            },
                            subtract: function (t) {
                                return this.clone()._subtract(O(t));
                            },
                            _subtract: function (t) {
                                return (this.x -= t.x), (this.y -= t.y), this;
                            },
                            divideBy: function (t) {
                                return this.clone()._divideBy(t);
                            },
                            _divideBy: function (t) {
                                return (this.x /= t), (this.y /= t), this;
                            },
                            multiplyBy: function (t) {
                                return this.clone()._multiplyBy(t);
                            },
                            _multiplyBy: function (t) {
                                return (this.x *= t), (this.y *= t), this;
                            },
                            scaleBy: function (t) {
                                return new E(this.x * t.x, this.y * t.y);
                            },
                            unscaleBy: function (t) {
                                return new E(this.x / t.x, this.y / t.y);
                            },
                            round: function () {
                                return this.clone()._round();
                            },
                            _round: function () {
                                return (
                                    (this.x = Math.round(this.x)),
                                    (this.y = Math.round(this.y)),
                                    this
                                );
                            },
                            floor: function () {
                                return this.clone()._floor();
                            },
                            _floor: function () {
                                return (
                                    (this.x = Math.floor(this.x)),
                                    (this.y = Math.floor(this.y)),
                                    this
                                );
                            },
                            ceil: function () {
                                return this.clone()._ceil();
                            },
                            _ceil: function () {
                                return (
                                    (this.x = Math.ceil(this.x)),
                                    (this.y = Math.ceil(this.y)),
                                    this
                                );
                            },
                            trunc: function () {
                                return this.clone()._trunc();
                            },
                            _trunc: function () {
                                return (
                                    (this.x = k(this.x)),
                                    (this.y = k(this.y)),
                                    this
                                );
                            },
                            distanceTo: function (t) {
                                var e = (t = O(t)).x - this.x,
                                    i = t.y - this.y;
                                return Math.sqrt(e * e + i * i);
                            },
                            equals: function (t) {
                                return (
                                    (t = O(t)).x === this.x && t.y === this.y
                                );
                            },
                            contains: function (t) {
                                return (
                                    (t = O(t)),
                                    Math.abs(t.x) <= Math.abs(this.x) &&
                                        Math.abs(t.y) <= Math.abs(this.y)
                                );
                            },
                            toString: function () {
                                return (
                                    "Point(" +
                                    l(this.x) +
                                    ", " +
                                    l(this.y) +
                                    ")"
                                );
                            },
                        }),
                            (A.prototype = {
                                extend: function (t) {
                                    var e, i;
                                    if (!t) return this;
                                    if (
                                        t instanceof E ||
                                        "number" == typeof t[0] ||
                                        "x" in t
                                    )
                                        e = i = O(t);
                                    else if (
                                        ((e = (t = B(t)).min),
                                        (i = t.max),
                                        !e || !i)
                                    )
                                        return this;
                                    return (
                                        this.min || this.max
                                            ? ((this.min.x = Math.min(
                                                  e.x,
                                                  this.min.x
                                              )),
                                              (this.max.x = Math.max(
                                                  i.x,
                                                  this.max.x
                                              )),
                                              (this.min.y = Math.min(
                                                  e.y,
                                                  this.min.y
                                              )),
                                              (this.max.y = Math.max(
                                                  i.y,
                                                  this.max.y
                                              )))
                                            : ((this.min = e.clone()),
                                              (this.max = i.clone())),
                                        this
                                    );
                                },
                                getCenter: function (t) {
                                    return O(
                                        (this.min.x + this.max.x) / 2,
                                        (this.min.y + this.max.y) / 2,
                                        t
                                    );
                                },
                                getBottomLeft: function () {
                                    return O(this.min.x, this.max.y);
                                },
                                getTopRight: function () {
                                    return O(this.max.x, this.min.y);
                                },
                                getTopLeft: function () {
                                    return this.min;
                                },
                                getBottomRight: function () {
                                    return this.max;
                                },
                                getSize: function () {
                                    return this.max.subtract(this.min);
                                },
                                contains: function (t) {
                                    var e, i;
                                    return (
                                        (t =
                                            "number" == typeof t[0] ||
                                            t instanceof E
                                                ? O(t)
                                                : B(t)) instanceof A
                                            ? ((e = t.min), (i = t.max))
                                            : (e = i = t),
                                        e.x >= this.min.x &&
                                            i.x <= this.max.x &&
                                            e.y >= this.min.y &&
                                            i.y <= this.max.y
                                    );
                                },
                                intersects: function (t) {
                                    t = B(t);
                                    var e = this.min,
                                        i = this.max,
                                        n = t.min,
                                        o = t.max,
                                        s = o.x >= e.x && n.x <= i.x,
                                        r = o.y >= e.y && n.y <= i.y;
                                    return s && r;
                                },
                                overlaps: function (t) {
                                    t = B(t);
                                    var e = this.min,
                                        i = this.max,
                                        n = t.min,
                                        o = t.max,
                                        s = o.x > e.x && n.x < i.x,
                                        r = o.y > e.y && n.y < i.y;
                                    return s && r;
                                },
                                isValid: function () {
                                    return !(!this.min || !this.max);
                                },
                                pad: function (t) {
                                    var e = this.min,
                                        i = this.max,
                                        n = Math.abs(e.x - i.x) * t,
                                        o = Math.abs(e.y - i.y) * t;
                                    return B(
                                        O(e.x - n, e.y - o),
                                        O(i.x + n, i.y + o)
                                    );
                                },
                                equals: function (t) {
                                    return (
                                        !!t &&
                                        ((t = B(t)),
                                        this.min.equals(t.getTopLeft()) &&
                                            this.max.equals(t.getBottomRight()))
                                    );
                                },
                            }),
                            (I.prototype = {
                                extend: function (t) {
                                    var e,
                                        i,
                                        n = this._southWest,
                                        o = this._northEast;
                                    if (t instanceof N) (e = t), (i = t);
                                    else {
                                        if (!(t instanceof I))
                                            return t
                                                ? this.extend(D(t) || R(t))
                                                : this;
                                        if (
                                            ((e = t._southWest),
                                            (i = t._northEast),
                                            !e || !i)
                                        )
                                            return this;
                                    }
                                    return (
                                        n || o
                                            ? ((n.lat = Math.min(e.lat, n.lat)),
                                              (n.lng = Math.min(e.lng, n.lng)),
                                              (o.lat = Math.max(i.lat, o.lat)),
                                              (o.lng = Math.max(i.lng, o.lng)))
                                            : ((this._southWest = new N(
                                                  e.lat,
                                                  e.lng
                                              )),
                                              (this._northEast = new N(
                                                  i.lat,
                                                  i.lng
                                              ))),
                                        this
                                    );
                                },
                                pad: function (t) {
                                    var e = this._southWest,
                                        i = this._northEast,
                                        n = Math.abs(e.lat - i.lat) * t,
                                        o = Math.abs(e.lng - i.lng) * t;
                                    return new I(
                                        new N(e.lat - n, e.lng - o),
                                        new N(i.lat + n, i.lng + o)
                                    );
                                },
                                getCenter: function () {
                                    return new N(
                                        (this._southWest.lat +
                                            this._northEast.lat) /
                                            2,
                                        (this._southWest.lng +
                                            this._northEast.lng) /
                                            2
                                    );
                                },
                                getSouthWest: function () {
                                    return this._southWest;
                                },
                                getNorthEast: function () {
                                    return this._northEast;
                                },
                                getNorthWest: function () {
                                    return new N(
                                        this.getNorth(),
                                        this.getWest()
                                    );
                                },
                                getSouthEast: function () {
                                    return new N(
                                        this.getSouth(),
                                        this.getEast()
                                    );
                                },
                                getWest: function () {
                                    return this._southWest.lng;
                                },
                                getSouth: function () {
                                    return this._southWest.lat;
                                },
                                getEast: function () {
                                    return this._northEast.lng;
                                },
                                getNorth: function () {
                                    return this._northEast.lat;
                                },
                                contains: function (t) {
                                    t =
                                        "number" == typeof t[0] ||
                                        t instanceof N ||
                                        "lat" in t
                                            ? D(t)
                                            : R(t);
                                    var e,
                                        i,
                                        n = this._southWest,
                                        o = this._northEast;
                                    return (
                                        t instanceof I
                                            ? ((e = t.getSouthWest()),
                                              (i = t.getNorthEast()))
                                            : (e = i = t),
                                        e.lat >= n.lat &&
                                            i.lat <= o.lat &&
                                            e.lng >= n.lng &&
                                            i.lng <= o.lng
                                    );
                                },
                                intersects: function (t) {
                                    t = R(t);
                                    var e = this._southWest,
                                        i = this._northEast,
                                        n = t.getSouthWest(),
                                        o = t.getNorthEast(),
                                        s = o.lat >= e.lat && n.lat <= i.lat,
                                        r = o.lng >= e.lng && n.lng <= i.lng;
                                    return s && r;
                                },
                                overlaps: function (t) {
                                    t = R(t);
                                    var e = this._southWest,
                                        i = this._northEast,
                                        n = t.getSouthWest(),
                                        o = t.getNorthEast(),
                                        s = o.lat > e.lat && n.lat < i.lat,
                                        r = o.lng > e.lng && n.lng < i.lng;
                                    return s && r;
                                },
                                toBBoxString: function () {
                                    return [
                                        this.getWest(),
                                        this.getSouth(),
                                        this.getEast(),
                                        this.getNorth(),
                                    ].join(",");
                                },
                                equals: function (t, e) {
                                    return (
                                        !!t &&
                                        ((t = R(t)),
                                        this._southWest.equals(
                                            t.getSouthWest(),
                                            e
                                        ) &&
                                            this._northEast.equals(
                                                t.getNorthEast(),
                                                e
                                            ))
                                    );
                                },
                                isValid: function () {
                                    return !(
                                        !this._southWest || !this._northEast
                                    );
                                },
                            }),
                            (N.prototype = {
                                equals: function (t, e) {
                                    return (
                                        !!t &&
                                        ((t = D(t)),
                                        Math.max(
                                            Math.abs(this.lat - t.lat),
                                            Math.abs(this.lng - t.lng)
                                        ) <= (void 0 === e ? 1e-9 : e))
                                    );
                                },
                                toString: function (t) {
                                    return (
                                        "LatLng(" +
                                        l(this.lat, t) +
                                        ", " +
                                        l(this.lng, t) +
                                        ")"
                                    );
                                },
                                distanceTo: function (t) {
                                    return F.distance(this, D(t));
                                },
                                wrap: function () {
                                    return F.wrapLatLng(this);
                                },
                                toBounds: function (t) {
                                    var e = (180 * t) / 40075017,
                                        i =
                                            e /
                                            Math.cos(
                                                (Math.PI / 180) * this.lat
                                            );
                                    return R(
                                        [this.lat - e, this.lng - i],
                                        [this.lat + e, this.lng + i]
                                    );
                                },
                                clone: function () {
                                    return new N(this.lat, this.lng, this.alt);
                                },
                            });
                        var j,
                            H = {
                                latLngToPoint: function (t, e) {
                                    var i = this.projection.project(t),
                                        n = this.scale(e);
                                    return this.transformation._transform(i, n);
                                },
                                pointToLatLng: function (t, e) {
                                    var i = this.scale(e),
                                        n = this.transformation.untransform(
                                            t,
                                            i
                                        );
                                    return this.projection.unproject(n);
                                },
                                project: function (t) {
                                    return this.projection.project(t);
                                },
                                unproject: function (t) {
                                    return this.projection.unproject(t);
                                },
                                scale: function (t) {
                                    return 256 * Math.pow(2, t);
                                },
                                zoom: function (t) {
                                    return Math.log(t / 256) / Math.LN2;
                                },
                                getProjectedBounds: function (t) {
                                    if (this.infinite) return null;
                                    var e = this.projection.bounds,
                                        i = this.scale(t);
                                    return new A(
                                        this.transformation.transform(e.min, i),
                                        this.transformation.transform(e.max, i)
                                    );
                                },
                                infinite: !1,
                                wrapLatLng: function (t) {
                                    var e = this.wrapLng
                                        ? a(t.lng, this.wrapLng, !0)
                                        : t.lng;
                                    return new N(
                                        this.wrapLat
                                            ? a(t.lat, this.wrapLat, !0)
                                            : t.lat,
                                        e,
                                        t.alt
                                    );
                                },
                                wrapLatLngBounds: function (t) {
                                    var e = t.getCenter(),
                                        i = this.wrapLatLng(e),
                                        n = e.lat - i.lat,
                                        o = e.lng - i.lng;
                                    if (0 === n && 0 === o) return t;
                                    var s = t.getSouthWest(),
                                        r = t.getNorthEast();
                                    return new I(
                                        new N(s.lat - n, s.lng - o),
                                        new N(r.lat - n, r.lng - o)
                                    );
                                },
                            },
                            F = e({}, H, {
                                wrapLng: [-180, 180],
                                R: 6371e3,
                                distance: function (t, e) {
                                    var i = Math.PI / 180,
                                        n = t.lat * i,
                                        o = e.lat * i,
                                        s = Math.sin(((e.lat - t.lat) * i) / 2),
                                        r = Math.sin(((e.lng - t.lng) * i) / 2),
                                        a =
                                            s * s +
                                            Math.cos(n) * Math.cos(o) * r * r,
                                        h =
                                            2 *
                                            Math.atan2(
                                                Math.sqrt(a),
                                                Math.sqrt(1 - a)
                                            );
                                    return this.R * h;
                                },
                            }),
                            W = 6378137,
                            U = {
                                R: W,
                                MAX_LATITUDE: 85.0511287798,
                                project: function (t) {
                                    var e = Math.PI / 180,
                                        i = this.MAX_LATITUDE,
                                        n = Math.max(Math.min(i, t.lat), -i),
                                        o = Math.sin(n * e);
                                    return new E(
                                        this.R * t.lng * e,
                                        (this.R * Math.log((1 + o) / (1 - o))) /
                                            2
                                    );
                                },
                                unproject: function (t) {
                                    var e = 180 / Math.PI;
                                    return new N(
                                        (2 * Math.atan(Math.exp(t.y / this.R)) -
                                            Math.PI / 2) *
                                            e,
                                        (t.x * e) / this.R
                                    );
                                },
                                bounds:
                                    ((j = W * Math.PI),
                                    new A([-j, -j], [j, j])),
                            };
                        function V(t, e, i, n) {
                            if (f(t))
                                return (
                                    (this._a = t[0]),
                                    (this._b = t[1]),
                                    (this._c = t[2]),
                                    void (this._d = t[3])
                                );
                            (this._a = t),
                                (this._b = e),
                                (this._c = i),
                                (this._d = n);
                        }
                        function q(t, e, i, n) {
                            return new V(t, e, i, n);
                        }
                        V.prototype = {
                            transform: function (t, e) {
                                return this._transform(t.clone(), e);
                            },
                            _transform: function (t, e) {
                                return (
                                    (e = e || 1),
                                    (t.x = e * (this._a * t.x + this._b)),
                                    (t.y = e * (this._c * t.y + this._d)),
                                    t
                                );
                            },
                            untransform: function (t, e) {
                                return (
                                    (e = e || 1),
                                    new E(
                                        (t.x / e - this._b) / this._a,
                                        (t.y / e - this._d) / this._c
                                    )
                                );
                            },
                        };
                        var G = e({}, F, {
                                code: "EPSG:3857",
                                projection: U,
                                transformation: (function () {
                                    var t = 0.5 / (Math.PI * U.R);
                                    return q(t, 0.5, -t, 0.5);
                                })(),
                            }),
                            K = e({}, G, {
                                code: "EPSG:900913",
                            });
                        function Y(t) {
                            return document.createElementNS(
                                "http://www.w3.org/2000/svg",
                                t
                            );
                        }
                        function X(t, e) {
                            var i,
                                n,
                                o,
                                s,
                                r,
                                a,
                                h = "";
                            for (i = 0, o = t.length; i < o; i++) {
                                for (n = 0, s = (r = t[i]).length; n < s; n++)
                                    h +=
                                        (n ? "L" : "M") +
                                        (a = r[n]).x +
                                        " " +
                                        a.y;
                                h += e ? (At.svg ? "z" : "x") : "";
                            }
                            return h || "M0 0";
                        }
                        var J,
                            $ = document.documentElement.style,
                            Q = "ActiveXObject" in window,
                            tt = Q && !document.addEventListener,
                            et =
                                "msLaunchUri" in navigator &&
                                !("documentMode" in document),
                            it = Ot("webkit"),
                            nt = Ot("android"),
                            ot = Ot("android 2") || Ot("android 3"),
                            st = parseInt(
                                /WebKit\/([0-9]+)|$/.exec(
                                    navigator.userAgent
                                )[1],
                                10
                            ),
                            rt =
                                nt &&
                                Ot("Google") &&
                                st < 537 &&
                                !("AudioNode" in window),
                            at = !!window.opera,
                            ht = !et && Ot("chrome"),
                            lt = Ot("gecko") && !it && !at && !Q,
                            ut = !ht && Ot("safari"),
                            ct = Ot("phantom"),
                            dt = "OTransition" in $,
                            _t = 0 === navigator.platform.indexOf("Win"),
                            pt = Q && "transition" in $,
                            mt =
                                "WebKitCSSMatrix" in window &&
                                "m11" in new window.WebKitCSSMatrix() &&
                                !ot,
                            ft = "MozPerspective" in $,
                            gt =
                                !window.L_DISABLE_3D &&
                                (pt || mt || ft) &&
                                !dt &&
                                !ct,
                            vt =
                                "undefined" != typeof orientation ||
                                Ot("mobile"),
                            yt = vt && it,
                            xt = vt && mt,
                            wt = !window.PointerEvent && window.MSPointerEvent,
                            bt = !(!window.PointerEvent && !wt),
                            Pt =
                                "ontouchstart" in window || !!window.TouchEvent,
                            Lt = !window.L_NO_TOUCH && (Pt || bt),
                            Tt = vt && at,
                            Mt = vt && lt,
                            zt =
                                (window.devicePixelRatio ||
                                    window.screen.deviceXDPI /
                                        window.screen.logicalXDPI) > 1,
                            Ct = (function () {
                                var t = !1;
                                try {
                                    var e = Object.defineProperty(
                                        {},
                                        "passive",
                                        {
                                            get: function () {
                                                t = !0;
                                            },
                                        }
                                    );
                                    window.addEventListener(
                                        "testPassiveEventSupport",
                                        h,
                                        e
                                    ),
                                        window.removeEventListener(
                                            "testPassiveEventSupport",
                                            h,
                                            e
                                        );
                                } catch (t) {}
                                return t;
                            })(),
                            St = !!document.createElement("canvas").getContext,
                            Zt = !(
                                !document.createElementNS ||
                                !Y("svg").createSVGRect
                            ),
                            Et =
                                !!Zt &&
                                (((J =
                                    document.createElement("div")).innerHTML =
                                    "<svg/>"),
                                "http://www.w3.org/2000/svg" ===
                                    (J.firstChild &&
                                        J.firstChild.namespaceURI)),
                            kt =
                                !Zt &&
                                (function () {
                                    try {
                                        var t = document.createElement("div");
                                        t.innerHTML = '<v:shape adj="1"/>';
                                        var e = t.firstChild;
                                        return (
                                            (e.style.behavior =
                                                "url(#default#VML)"),
                                            e && "object" == typeof e.adj
                                        );
                                    } catch (t) {
                                        return !1;
                                    }
                                })();
                        function Ot(t) {
                            return (
                                navigator.userAgent.toLowerCase().indexOf(t) >=
                                0
                            );
                        }
                        var At = {
                                ie: Q,
                                ielt9: tt,
                                edge: et,
                                webkit: it,
                                android: nt,
                                android23: ot,
                                androidStock: rt,
                                opera: at,
                                chrome: ht,
                                gecko: lt,
                                safari: ut,
                                phantom: ct,
                                opera12: dt,
                                win: _t,
                                ie3d: pt,
                                webkit3d: mt,
                                gecko3d: ft,
                                any3d: gt,
                                mobile: vt,
                                mobileWebkit: yt,
                                mobileWebkit3d: xt,
                                msPointer: wt,
                                pointer: bt,
                                touch: Lt,
                                touchNative: Pt,
                                mobileOpera: Tt,
                                mobileGecko: Mt,
                                retina: zt,
                                passiveEvents: Ct,
                                canvas: St,
                                svg: Zt,
                                vml: kt,
                                inlineSvg: Et,
                                mac: 0 === navigator.platform.indexOf("Mac"),
                                linux:
                                    0 === navigator.platform.indexOf("Linux"),
                            },
                            Bt = At.msPointer ? "MSPointerDown" : "pointerdown",
                            It = At.msPointer ? "MSPointerMove" : "pointermove",
                            Rt = At.msPointer ? "MSPointerUp" : "pointerup",
                            Nt = At.msPointer
                                ? "MSPointerCancel"
                                : "pointercancel",
                            Dt = {
                                touchstart: Bt,
                                touchmove: It,
                                touchend: Rt,
                                touchcancel: Nt,
                            },
                            jt = {
                                touchstart: function (t, e) {
                                    e.MSPOINTER_TYPE_TOUCH &&
                                        e.pointerType ===
                                            e.MSPOINTER_TYPE_TOUCH &&
                                        Ne(e),
                                        Gt(t, e);
                                },
                                touchmove: Gt,
                                touchend: Gt,
                                touchcancel: Gt,
                            },
                            Ht = {},
                            Ft = !1;
                        function Wt(t, e, i) {
                            return (
                                "touchstart" === e &&
                                    (Ft ||
                                        (document.addEventListener(Bt, Ut, !0),
                                        document.addEventListener(It, Vt, !0),
                                        document.addEventListener(Rt, qt, !0),
                                        document.addEventListener(Nt, qt, !0),
                                        (Ft = !0))),
                                jt[e]
                                    ? ((i = jt[e].bind(this, i)),
                                      t.addEventListener(Dt[e], i, !1),
                                      i)
                                    : (console.warn(
                                          "wrong event specified:",
                                          e
                                      ),
                                      h)
                            );
                        }
                        function Ut(t) {
                            Ht[t.pointerId] = t;
                        }
                        function Vt(t) {
                            Ht[t.pointerId] && (Ht[t.pointerId] = t);
                        }
                        function qt(t) {
                            delete Ht[t.pointerId];
                        }
                        function Gt(t, e) {
                            if (
                                e.pointerType !==
                                (e.MSPOINTER_TYPE_MOUSE || "mouse")
                            ) {
                                for (var i in ((e.touches = []), Ht))
                                    e.touches.push(Ht[i]);
                                (e.changedTouches = [e]), t(e);
                            }
                        }
                        var Kt = 200;
                        var Yt,
                            Xt,
                            Jt,
                            $t,
                            Qt,
                            te = fe([
                                "transform",
                                "webkitTransform",
                                "OTransform",
                                "MozTransform",
                                "msTransform",
                            ]),
                            ee = fe([
                                "webkitTransition",
                                "transition",
                                "OTransition",
                                "MozTransition",
                                "msTransition",
                            ]),
                            ie =
                                "webkitTransition" === ee ||
                                "OTransition" === ee
                                    ? ee + "End"
                                    : "transitionend";
                        function ne(t) {
                            return "string" == typeof t
                                ? document.getElementById(t)
                                : t;
                        }
                        function oe(t, e) {
                            var i =
                                t.style[e] ||
                                (t.currentStyle && t.currentStyle[e]);
                            if ((!i || "auto" === i) && document.defaultView) {
                                var n = document.defaultView.getComputedStyle(
                                    t,
                                    null
                                );
                                i = n ? n[e] : null;
                            }
                            return "auto" === i ? null : i;
                        }
                        function se(t, e, i) {
                            var n = document.createElement(t);
                            return (
                                (n.className = e || ""),
                                i && i.appendChild(n),
                                n
                            );
                        }
                        function re(t) {
                            var e = t.parentNode;
                            e && e.removeChild(t);
                        }
                        function ae(t) {
                            for (; t.firstChild; ) t.removeChild(t.firstChild);
                        }
                        function he(t) {
                            var e = t.parentNode;
                            e && e.lastChild !== t && e.appendChild(t);
                        }
                        function le(t) {
                            var e = t.parentNode;
                            e &&
                                e.firstChild !== t &&
                                e.insertBefore(t, e.firstChild);
                        }
                        function ue(t, e) {
                            if (void 0 !== t.classList)
                                return t.classList.contains(e);
                            var i = pe(t);
                            return (
                                i.length > 0 &&
                                new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
                            );
                        }
                        function ce(t, e) {
                            if (void 0 !== t.classList)
                                for (
                                    var i = c(e), n = 0, o = i.length;
                                    n < o;
                                    n++
                                )
                                    t.classList.add(i[n]);
                            else if (!ue(t, e)) {
                                var s = pe(t);
                                _e(t, (s ? s + " " : "") + e);
                            }
                        }
                        function de(t, e) {
                            void 0 !== t.classList
                                ? t.classList.remove(e)
                                : _e(
                                      t,
                                      u(
                                          (" " + pe(t) + " ").replace(
                                              " " + e + " ",
                                              " "
                                          )
                                      )
                                  );
                        }
                        function _e(t, e) {
                            void 0 === t.className.baseVal
                                ? (t.className = e)
                                : (t.className.baseVal = e);
                        }
                        function pe(t) {
                            return (
                                t.correspondingElement &&
                                    (t = t.correspondingElement),
                                void 0 === t.className.baseVal
                                    ? t.className
                                    : t.className.baseVal
                            );
                        }
                        function me(t, e) {
                            "opacity" in t.style
                                ? (t.style.opacity = e)
                                : "filter" in t.style &&
                                  (function (t, e) {
                                      var i = !1,
                                          n =
                                              "DXImageTransform.Microsoft.Alpha";
                                      try {
                                          i = t.filters.item(n);
                                      } catch (t) {
                                          if (1 === e) return;
                                      }
                                      (e = Math.round(100 * e)),
                                          i
                                              ? ((i.Enabled = 100 !== e),
                                                (i.Opacity = e))
                                              : (t.style.filter +=
                                                    " progid:" +
                                                    n +
                                                    "(opacity=" +
                                                    e +
                                                    ")");
                                  })(t, e);
                        }
                        function fe(t) {
                            for (
                                var e = document.documentElement.style, i = 0;
                                i < t.length;
                                i++
                            )
                                if (t[i] in e) return t[i];
                            return !1;
                        }
                        function ge(t, e, i) {
                            var n = e || new E(0, 0);
                            t.style[te] =
                                (At.ie3d
                                    ? "translate(" + n.x + "px," + n.y + "px)"
                                    : "translate3d(" +
                                      n.x +
                                      "px," +
                                      n.y +
                                      "px,0)") + (i ? " scale(" + i + ")" : "");
                        }
                        function ve(t, e) {
                            (t._leaflet_pos = e),
                                At.any3d
                                    ? ge(t, e)
                                    : ((t.style.left = e.x + "px"),
                                      (t.style.top = e.y + "px"));
                        }
                        function ye(t) {
                            return t._leaflet_pos || new E(0, 0);
                        }
                        if ("onselectstart" in document)
                            (Yt = function () {
                                Ce(window, "selectstart", Ne);
                            }),
                                (Xt = function () {
                                    Ze(window, "selectstart", Ne);
                                });
                        else {
                            var xe = fe([
                                "userSelect",
                                "WebkitUserSelect",
                                "OUserSelect",
                                "MozUserSelect",
                                "msUserSelect",
                            ]);
                            (Yt = function () {
                                if (xe) {
                                    var t = document.documentElement.style;
                                    (Jt = t[xe]), (t[xe] = "none");
                                }
                            }),
                                (Xt = function () {
                                    xe &&
                                        ((document.documentElement.style[xe] =
                                            Jt),
                                        (Jt = void 0));
                                });
                        }
                        function we() {
                            Ce(window, "dragstart", Ne);
                        }
                        function be() {
                            Ze(window, "dragstart", Ne);
                        }
                        function Pe(t) {
                            for (; -1 === t.tabIndex; ) t = t.parentNode;
                            t.style &&
                                (Le(),
                                ($t = t),
                                (Qt = t.style.outlineStyle),
                                (t.style.outlineStyle = "none"),
                                Ce(window, "keydown", Le));
                        }
                        function Le() {
                            $t &&
                                (($t.style.outlineStyle = Qt),
                                ($t = void 0),
                                (Qt = void 0),
                                Ze(window, "keydown", Le));
                        }
                        function Te(t) {
                            do {
                                t = t.parentNode;
                            } while (
                                !(
                                    (t.offsetWidth && t.offsetHeight) ||
                                    t === document.body
                                )
                            );
                            return t;
                        }
                        function Me(t) {
                            var e = t.getBoundingClientRect();
                            return {
                                x: e.width / t.offsetWidth || 1,
                                y: e.height / t.offsetHeight || 1,
                                boundingClientRect: e,
                            };
                        }
                        var ze = {
                            __proto__: null,
                            TRANSFORM: te,
                            TRANSITION: ee,
                            TRANSITION_END: ie,
                            get: ne,
                            getStyle: oe,
                            create: se,
                            remove: re,
                            empty: ae,
                            toFront: he,
                            toBack: le,
                            hasClass: ue,
                            addClass: ce,
                            removeClass: de,
                            setClass: _e,
                            getClass: pe,
                            setOpacity: me,
                            testProp: fe,
                            setTransform: ge,
                            setPosition: ve,
                            getPosition: ye,
                            get disableTextSelection() {
                                return Yt;
                            },
                            get enableTextSelection() {
                                return Xt;
                            },
                            disableImageDrag: we,
                            enableImageDrag: be,
                            preventOutline: Pe,
                            restoreOutline: Le,
                            getSizedParentNode: Te,
                            getScale: Me,
                        };
                        function Ce(t, e, i, n) {
                            if (e && "object" == typeof e)
                                for (var o in e) Oe(t, o, e[o], i);
                            else
                                for (
                                    var s = 0, r = (e = c(e)).length;
                                    s < r;
                                    s++
                                )
                                    Oe(t, e[s], i, n);
                            return this;
                        }
                        var Se = "_leaflet_events";
                        function Ze(t, e, i, n) {
                            if (1 === arguments.length) Ee(t), delete t[Se];
                            else if (e && "object" == typeof e)
                                for (var o in e) Ae(t, o, e[o], i);
                            else if (((e = c(e)), 2 === arguments.length))
                                Ee(t, function (t) {
                                    return -1 !== g(e, t);
                                });
                            else
                                for (var s = 0, r = e.length; s < r; s++)
                                    Ae(t, e[s], i, n);
                            return this;
                        }
                        function Ee(t, e) {
                            for (var i in t[Se]) {
                                var n = i.split(/\d/)[0];
                                (e && !e(n)) || Ae(t, n, null, null, i);
                            }
                        }
                        var ke = {
                            mouseenter: "mouseover",
                            mouseleave: "mouseout",
                            wheel: !("onwheel" in window) && "mousewheel",
                        };
                        function Oe(t, e, i, n) {
                            var o = e + s(i) + (n ? "_" + s(n) : "");
                            if (t[Se] && t[Se][o]) return this;
                            var r = function (e) {
                                    return i.call(n || t, e || window.event);
                                },
                                a = r;
                            !At.touchNative &&
                            At.pointer &&
                            0 === e.indexOf("touch")
                                ? (r = Wt(t, e, r))
                                : At.touch && "dblclick" === e
                                ? (r = (function (t, e) {
                                      t.addEventListener("dblclick", e);
                                      var i,
                                          n = 0;
                                      function o(t) {
                                          if (1 === t.detail) {
                                              if (
                                                  "mouse" !== t.pointerType &&
                                                  (!t.sourceCapabilities ||
                                                      t.sourceCapabilities
                                                          .firesTouchEvents)
                                              ) {
                                                  var o = je(t);
                                                  if (
                                                      !o.some(function (t) {
                                                          return (
                                                              t instanceof
                                                                  HTMLLabelElement &&
                                                              t.attributes.for
                                                          );
                                                      }) ||
                                                      o.some(function (t) {
                                                          return (
                                                              t instanceof
                                                                  HTMLInputElement ||
                                                              t instanceof
                                                                  HTMLSelectElement
                                                          );
                                                      })
                                                  ) {
                                                      var s = Date.now();
                                                      s - n <= Kt
                                                          ? 2 == ++i &&
                                                            e(
                                                                (function (t) {
                                                                    var e,
                                                                        i,
                                                                        n = {};
                                                                    for (i in t)
                                                                        (e =
                                                                            t[
                                                                                i
                                                                            ]),
                                                                            (n[
                                                                                i
                                                                            ] =
                                                                                e &&
                                                                                e.bind
                                                                                    ? e.bind(
                                                                                          t
                                                                                      )
                                                                                    : e);
                                                                    return (
                                                                        (t = n),
                                                                        (n.type =
                                                                            "dblclick"),
                                                                        (n.detail = 2),
                                                                        (n.isTrusted =
                                                                            !1),
                                                                        (n._simulated =
                                                                            !0),
                                                                        n
                                                                    );
                                                                })(t)
                                                            )
                                                          : (i = 1),
                                                          (n = s);
                                                  }
                                              }
                                          } else i = t.detail;
                                      }
                                      return (
                                          t.addEventListener("click", o),
                                          {
                                              dblclick: e,
                                              simDblclick: o,
                                          }
                                      );
                                  })(t, r))
                                : "addEventListener" in t
                                ? "touchstart" === e ||
                                  "touchmove" === e ||
                                  "wheel" === e ||
                                  "mousewheel" === e
                                    ? t.addEventListener(
                                          ke[e] || e,
                                          r,
                                          !!At.passiveEvents && {
                                              passive: !1,
                                          }
                                      )
                                    : "mouseenter" === e || "mouseleave" === e
                                    ? ((r = function (e) {
                                          (e = e || window.event),
                                              Ue(t, e) && a(e);
                                      }),
                                      t.addEventListener(ke[e], r, !1))
                                    : t.addEventListener(e, a, !1)
                                : t.attachEvent("on" + e, r),
                                (t[Se] = t[Se] || {}),
                                (t[Se][o] = r);
                        }
                        function Ae(t, e, i, n, o) {
                            o = o || e + s(i) + (n ? "_" + s(n) : "");
                            var r = t[Se] && t[Se][o];
                            if (!r) return this;
                            !At.touchNative &&
                            At.pointer &&
                            0 === e.indexOf("touch")
                                ? (function (t, e, i) {
                                      Dt[e]
                                          ? t.removeEventListener(Dt[e], i, !1)
                                          : console.warn(
                                                "wrong event specified:",
                                                e
                                            );
                                  })(t, e, r)
                                : At.touch && "dblclick" === e
                                ? (function (t, e) {
                                      t.removeEventListener(
                                          "dblclick",
                                          e.dblclick
                                      ),
                                          t.removeEventListener(
                                              "click",
                                              e.simDblclick
                                          );
                                  })(t, r)
                                : "removeEventListener" in t
                                ? t.removeEventListener(ke[e] || e, r, !1)
                                : t.detachEvent("on" + e, r),
                                (t[Se][o] = null);
                        }
                        function Be(t) {
                            return (
                                t.stopPropagation
                                    ? t.stopPropagation()
                                    : t.originalEvent
                                    ? (t.originalEvent._stopped = !0)
                                    : (t.cancelBubble = !0),
                                this
                            );
                        }
                        function Ie(t) {
                            return Oe(t, "wheel", Be), this;
                        }
                        function Re(t) {
                            return (
                                Ce(
                                    t,
                                    "mousedown touchstart dblclick contextmenu",
                                    Be
                                ),
                                (t._leaflet_disable_click = !0),
                                this
                            );
                        }
                        function Ne(t) {
                            return (
                                t.preventDefault
                                    ? t.preventDefault()
                                    : (t.returnValue = !1),
                                this
                            );
                        }
                        function De(t) {
                            return Ne(t), Be(t), this;
                        }
                        function je(t) {
                            if (t.composedPath) return t.composedPath();
                            for (var e = [], i = t.target; i; )
                                e.push(i), (i = i.parentNode);
                            return e;
                        }
                        function He(t, e) {
                            if (!e) return new E(t.clientX, t.clientY);
                            var i = Me(e),
                                n = i.boundingClientRect;
                            return new E(
                                (t.clientX - n.left) / i.x - e.clientLeft,
                                (t.clientY - n.top) / i.y - e.clientTop
                            );
                        }
                        var Fe =
                            At.linux && At.chrome
                                ? window.devicePixelRatio
                                : At.mac
                                ? 3 * window.devicePixelRatio
                                : window.devicePixelRatio > 0
                                ? 2 * window.devicePixelRatio
                                : 1;
                        function We(t) {
                            return At.edge
                                ? t.wheelDeltaY / 2
                                : t.deltaY && 0 === t.deltaMode
                                ? -t.deltaY / Fe
                                : t.deltaY && 1 === t.deltaMode
                                ? 20 * -t.deltaY
                                : t.deltaY && 2 === t.deltaMode
                                ? 60 * -t.deltaY
                                : t.deltaX || t.deltaZ
                                ? 0
                                : t.wheelDelta
                                ? (t.wheelDeltaY || t.wheelDelta) / 2
                                : t.detail && Math.abs(t.detail) < 32765
                                ? 20 * -t.detail
                                : t.detail
                                ? (t.detail / -32765) * 60
                                : 0;
                        }
                        function Ue(t, e) {
                            var i = e.relatedTarget;
                            if (!i) return !0;
                            try {
                                for (; i && i !== t; ) i = i.parentNode;
                            } catch (t) {
                                return !1;
                            }
                            return i !== t;
                        }
                        var Ve = {
                                __proto__: null,
                                on: Ce,
                                off: Ze,
                                stopPropagation: Be,
                                disableScrollPropagation: Ie,
                                disableClickPropagation: Re,
                                preventDefault: Ne,
                                stop: De,
                                getPropagationPath: je,
                                getMousePosition: He,
                                getWheelDelta: We,
                                isExternalTarget: Ue,
                                addListener: Ce,
                                removeListener: Ze,
                            },
                            qe = Z.extend({
                                run: function (t, e, i, n) {
                                    this.stop(),
                                        (this._el = t),
                                        (this._inProgress = !0),
                                        (this._duration = i || 0.25),
                                        (this._easeOutPower =
                                            1 / Math.max(n || 0.5, 0.2)),
                                        (this._startPos = ye(t)),
                                        (this._offset = e.subtract(
                                            this._startPos
                                        )),
                                        (this._startTime = +new Date()),
                                        this.fire("start"),
                                        this._animate();
                                },
                                stop: function () {
                                    this._inProgress &&
                                        (this._step(!0), this._complete());
                                },
                                _animate: function () {
                                    (this._animId = T(this._animate, this)),
                                        this._step();
                                },
                                _step: function (t) {
                                    var e = +new Date() - this._startTime,
                                        i = 1e3 * this._duration;
                                    e < i
                                        ? this._runFrame(
                                              this._easeOut(e / i),
                                              t
                                          )
                                        : (this._runFrame(1), this._complete());
                                },
                                _runFrame: function (t, e) {
                                    var i = this._startPos.add(
                                        this._offset.multiplyBy(t)
                                    );
                                    e && i._round(),
                                        ve(this._el, i),
                                        this.fire("step");
                                },
                                _complete: function () {
                                    M(this._animId),
                                        (this._inProgress = !1),
                                        this.fire("end");
                                },
                                _easeOut: function (t) {
                                    return (
                                        1 - Math.pow(1 - t, this._easeOutPower)
                                    );
                                },
                            }),
                            Ge = Z.extend({
                                options: {
                                    crs: G,
                                    center: void 0,
                                    zoom: void 0,
                                    minZoom: void 0,
                                    maxZoom: void 0,
                                    layers: [],
                                    maxBounds: void 0,
                                    renderer: void 0,
                                    zoomAnimation: !0,
                                    zoomAnimationThreshold: 4,
                                    fadeAnimation: !0,
                                    markerZoomAnimation: !0,
                                    transform3DLimit: 8388608,
                                    zoomSnap: 1,
                                    zoomDelta: 1,
                                    trackResize: !0,
                                },
                                initialize: function (t, e) {
                                    (e = d(this, e)),
                                        (this._handlers = []),
                                        (this._layers = {}),
                                        (this._zoomBoundLayers = {}),
                                        (this._sizeChanged = !0),
                                        this._initContainer(t),
                                        this._initLayout(),
                                        (this._onResize = n(
                                            this._onResize,
                                            this
                                        )),
                                        this._initEvents(),
                                        e.maxBounds &&
                                            this.setMaxBounds(e.maxBounds),
                                        void 0 !== e.zoom &&
                                            (this._zoom = this._limitZoom(
                                                e.zoom
                                            )),
                                        e.center &&
                                            void 0 !== e.zoom &&
                                            this.setView(D(e.center), e.zoom, {
                                                reset: !0,
                                            }),
                                        this.callInitHooks(),
                                        (this._zoomAnimated =
                                            ee &&
                                            At.any3d &&
                                            !At.mobileOpera &&
                                            this.options.zoomAnimation),
                                        this._zoomAnimated &&
                                            (this._createAnimProxy(),
                                            Ce(
                                                this._proxy,
                                                ie,
                                                this._catchTransitionEnd,
                                                this
                                            )),
                                        this._addLayers(this.options.layers);
                                },
                                setView: function (t, i, n) {
                                    return (
                                        (i =
                                            void 0 === i
                                                ? this._zoom
                                                : this._limitZoom(i)),
                                        (t = this._limitCenter(
                                            D(t),
                                            i,
                                            this.options.maxBounds
                                        )),
                                        (n = n || {}),
                                        this._stop(),
                                        this._loaded &&
                                        !n.reset &&
                                        !0 !== n &&
                                        (void 0 !== n.animate &&
                                            ((n.zoom = e(
                                                {
                                                    animate: n.animate,
                                                },
                                                n.zoom
                                            )),
                                            (n.pan = e(
                                                {
                                                    animate: n.animate,
                                                    duration: n.duration,
                                                },
                                                n.pan
                                            ))),
                                        this._zoom !== i
                                            ? this._tryAnimatedZoom &&
                                              this._tryAnimatedZoom(
                                                  t,
                                                  i,
                                                  n.zoom
                                              )
                                            : this._tryAnimatedPan(t, n.pan))
                                            ? (clearTimeout(this._sizeTimer),
                                              this)
                                            : (this._resetView(
                                                  t,
                                                  i,
                                                  n.pan && n.pan.noMoveStart
                                              ),
                                              this)
                                    );
                                },
                                setZoom: function (t, e) {
                                    return this._loaded
                                        ? this.setView(this.getCenter(), t, {
                                              zoom: e,
                                          })
                                        : ((this._zoom = t), this);
                                },
                                zoomIn: function (t, e) {
                                    return (
                                        (t =
                                            t ||
                                            (At.any3d
                                                ? this.options.zoomDelta
                                                : 1)),
                                        this.setZoom(this._zoom + t, e)
                                    );
                                },
                                zoomOut: function (t, e) {
                                    return (
                                        (t =
                                            t ||
                                            (At.any3d
                                                ? this.options.zoomDelta
                                                : 1)),
                                        this.setZoom(this._zoom - t, e)
                                    );
                                },
                                setZoomAround: function (t, e, i) {
                                    var n = this.getZoomScale(e),
                                        o = this.getSize().divideBy(2),
                                        s = (
                                            t instanceof E
                                                ? t
                                                : this.latLngToContainerPoint(t)
                                        )
                                            .subtract(o)
                                            .multiplyBy(1 - 1 / n),
                                        r = this.containerPointToLatLng(
                                            o.add(s)
                                        );
                                    return this.setView(r, e, {
                                        zoom: i,
                                    });
                                },
                                _getBoundsCenterZoom: function (t, e) {
                                    (e = e || {}),
                                        (t = t.getBounds
                                            ? t.getBounds()
                                            : R(t));
                                    var i = O(
                                            e.paddingTopLeft ||
                                                e.padding || [0, 0]
                                        ),
                                        n = O(
                                            e.paddingBottomRight ||
                                                e.padding || [0, 0]
                                        ),
                                        o = this.getBoundsZoom(t, !1, i.add(n));
                                    if (
                                        (o =
                                            "number" == typeof e.maxZoom
                                                ? Math.min(e.maxZoom, o)
                                                : o) ===
                                        1 / 0
                                    )
                                        return {
                                            center: t.getCenter(),
                                            zoom: o,
                                        };
                                    var s = n.subtract(i).divideBy(2),
                                        r = this.project(t.getSouthWest(), o),
                                        a = this.project(t.getNorthEast(), o);
                                    return {
                                        center: this.unproject(
                                            r.add(a).divideBy(2).add(s),
                                            o
                                        ),
                                        zoom: o,
                                    };
                                },
                                fitBounds: function (t, e) {
                                    if (!(t = R(t)).isValid())
                                        throw new Error(
                                            "Bounds are not valid."
                                        );
                                    var i = this._getBoundsCenterZoom(t, e);
                                    return this.setView(i.center, i.zoom, e);
                                },
                                fitWorld: function (t) {
                                    return this.fitBounds(
                                        [
                                            [-90, -180],
                                            [90, 180],
                                        ],
                                        t
                                    );
                                },
                                panTo: function (t, e) {
                                    return this.setView(t, this._zoom, {
                                        pan: e,
                                    });
                                },
                                panBy: function (t, e) {
                                    if (
                                        ((e = e || {}),
                                        !(t = O(t).round()).x && !t.y)
                                    )
                                        return this.fire("moveend");
                                    if (
                                        !0 !== e.animate &&
                                        !this.getSize().contains(t)
                                    )
                                        return (
                                            this._resetView(
                                                this.unproject(
                                                    this.project(
                                                        this.getCenter()
                                                    ).add(t)
                                                ),
                                                this.getZoom()
                                            ),
                                            this
                                        );
                                    if (
                                        (this._panAnim ||
                                            ((this._panAnim = new qe()),
                                            this._panAnim.on(
                                                {
                                                    step: this
                                                        ._onPanTransitionStep,
                                                    end: this
                                                        ._onPanTransitionEnd,
                                                },
                                                this
                                            )),
                                        e.noMoveStart || this.fire("movestart"),
                                        !1 !== e.animate)
                                    ) {
                                        ce(this._mapPane, "leaflet-pan-anim");
                                        var i = this._getMapPanePos()
                                            .subtract(t)
                                            .round();
                                        this._panAnim.run(
                                            this._mapPane,
                                            i,
                                            e.duration || 0.25,
                                            e.easeLinearity
                                        );
                                    } else
                                        this._rawPanBy(t),
                                            this.fire("move").fire("moveend");
                                    return this;
                                },
                                flyTo: function (t, e, i) {
                                    if (
                                        !1 === (i = i || {}).animate ||
                                        !At.any3d
                                    )
                                        return this.setView(t, e, i);
                                    this._stop();
                                    var n = this.project(this.getCenter()),
                                        o = this.project(t),
                                        s = this.getSize(),
                                        r = this._zoom;
                                    (t = D(t)), (e = void 0 === e ? r : e);
                                    var a = Math.max(s.x, s.y),
                                        h = a * this.getZoomScale(r, e),
                                        l = o.distanceTo(n) || 1,
                                        u = 1.42,
                                        c = u * u;
                                    function d(t) {
                                        var e =
                                                (h * h -
                                                    a * a +
                                                    (t ? -1 : 1) *
                                                        c *
                                                        c *
                                                        l *
                                                        l) /
                                                (2 * (t ? h : a) * c * l),
                                            i = Math.sqrt(e * e + 1) - e;
                                        return i < 1e-9 ? -18 : Math.log(i);
                                    }
                                    function _(t) {
                                        return (Math.exp(t) - Math.exp(-t)) / 2;
                                    }
                                    function p(t) {
                                        return (Math.exp(t) + Math.exp(-t)) / 2;
                                    }
                                    var m = d(0);
                                    function f(t) {
                                        return (
                                            (a *
                                                (p(m) *
                                                    (_((e = m + u * t)) /
                                                        p(e)) -
                                                    _(m))) /
                                            c
                                        );
                                        var e;
                                    }
                                    var g = Date.now(),
                                        v = (d(1) - m) / u,
                                        y = i.duration
                                            ? 1e3 * i.duration
                                            : 1e3 * v * 0.8;
                                    return (
                                        this._moveStart(!0, i.noMoveStart),
                                        function i() {
                                            var s = (Date.now() - g) / y,
                                                h =
                                                    (function (t) {
                                                        return (
                                                            1 -
                                                            Math.pow(1 - t, 1.5)
                                                        );
                                                    })(s) * v;
                                            s <= 1
                                                ? ((this._flyToFrame = T(
                                                      i,
                                                      this
                                                  )),
                                                  this._move(
                                                      this.unproject(
                                                          n.add(
                                                              o
                                                                  .subtract(n)
                                                                  .multiplyBy(
                                                                      f(h) / l
                                                                  )
                                                          ),
                                                          r
                                                      ),
                                                      this.getScaleZoom(
                                                          a /
                                                              (function (t) {
                                                                  return (
                                                                      a *
                                                                      (p(m) /
                                                                          p(
                                                                              m +
                                                                                  u *
                                                                                      t
                                                                          ))
                                                                  );
                                                              })(h),
                                                          r
                                                      ),
                                                      {
                                                          flyTo: !0,
                                                      }
                                                  ))
                                                : this._move(t, e)._moveEnd(!0);
                                        }.call(this),
                                        this
                                    );
                                },
                                flyToBounds: function (t, e) {
                                    var i = this._getBoundsCenterZoom(t, e);
                                    return this.flyTo(i.center, i.zoom, e);
                                },
                                setMaxBounds: function (t) {
                                    return (
                                        (t = R(t)),
                                        this.listens(
                                            "moveend",
                                            this._panInsideMaxBounds
                                        ) &&
                                            this.off(
                                                "moveend",
                                                this._panInsideMaxBounds
                                            ),
                                        t.isValid()
                                            ? ((this.options.maxBounds = t),
                                              this._loaded &&
                                                  this._panInsideMaxBounds(),
                                              this.on(
                                                  "moveend",
                                                  this._panInsideMaxBounds
                                              ))
                                            : ((this.options.maxBounds = null),
                                              this)
                                    );
                                },
                                setMinZoom: function (t) {
                                    var e = this.options.minZoom;
                                    return (
                                        (this.options.minZoom = t),
                                        this._loaded &&
                                        e !== t &&
                                        (this.fire("zoomlevelschange"),
                                        this.getZoom() < this.options.minZoom)
                                            ? this.setZoom(t)
                                            : this
                                    );
                                },
                                setMaxZoom: function (t) {
                                    var e = this.options.maxZoom;
                                    return (
                                        (this.options.maxZoom = t),
                                        this._loaded &&
                                        e !== t &&
                                        (this.fire("zoomlevelschange"),
                                        this.getZoom() > this.options.maxZoom)
                                            ? this.setZoom(t)
                                            : this
                                    );
                                },
                                panInsideBounds: function (t, e) {
                                    this._enforcingBounds = !0;
                                    var i = this.getCenter(),
                                        n = this._limitCenter(
                                            i,
                                            this._zoom,
                                            R(t)
                                        );
                                    return (
                                        i.equals(n) || this.panTo(n, e),
                                        (this._enforcingBounds = !1),
                                        this
                                    );
                                },
                                panInside: function (t, e) {
                                    var i = O(
                                            (e = e || {}).paddingTopLeft ||
                                                e.padding || [0, 0]
                                        ),
                                        n = O(
                                            e.paddingBottomRight ||
                                                e.padding || [0, 0]
                                        ),
                                        o = this.project(this.getCenter()),
                                        s = this.project(t),
                                        r = this.getPixelBounds(),
                                        a = B([
                                            r.min.add(i),
                                            r.max.subtract(n),
                                        ]),
                                        h = a.getSize();
                                    if (!a.contains(s)) {
                                        this._enforcingBounds = !0;
                                        var l = s.subtract(a.getCenter()),
                                            u = a
                                                .extend(s)
                                                .getSize()
                                                .subtract(h);
                                        (o.x += l.x < 0 ? -u.x : u.x),
                                            (o.y += l.y < 0 ? -u.y : u.y),
                                            this.panTo(this.unproject(o), e),
                                            (this._enforcingBounds = !1);
                                    }
                                    return this;
                                },
                                invalidateSize: function (t) {
                                    if (!this._loaded) return this;
                                    t = e(
                                        {
                                            animate: !1,
                                            pan: !0,
                                        },
                                        !0 === t
                                            ? {
                                                  animate: !0,
                                              }
                                            : t
                                    );
                                    var i = this.getSize();
                                    (this._sizeChanged = !0),
                                        (this._lastCenter = null);
                                    var o = this.getSize(),
                                        s = i.divideBy(2).round(),
                                        r = o.divideBy(2).round(),
                                        a = s.subtract(r);
                                    return a.x || a.y
                                        ? (t.animate && t.pan
                                              ? this.panBy(a)
                                              : (t.pan && this._rawPanBy(a),
                                                this.fire("move"),
                                                t.debounceMoveend
                                                    ? (clearTimeout(
                                                          this._sizeTimer
                                                      ),
                                                      (this._sizeTimer =
                                                          setTimeout(
                                                              n(
                                                                  this.fire,
                                                                  this,
                                                                  "moveend"
                                                              ),
                                                              200
                                                          )))
                                                    : this.fire("moveend")),
                                          this.fire("resize", {
                                              oldSize: i,
                                              newSize: o,
                                          }))
                                        : this;
                                },
                                stop: function () {
                                    return (
                                        this.setZoom(
                                            this._limitZoom(this._zoom)
                                        ),
                                        this.options.zoomSnap ||
                                            this.fire("viewreset"),
                                        this._stop()
                                    );
                                },
                                locate: function (t) {
                                    if (
                                        ((t = this._locateOptions =
                                            e(
                                                {
                                                    timeout: 1e4,
                                                    watch: !1,
                                                },
                                                t
                                            )),
                                        !("geolocation" in navigator))
                                    )
                                        return (
                                            this._handleGeolocationError({
                                                code: 0,
                                                message:
                                                    "Geolocation not supported.",
                                            }),
                                            this
                                        );
                                    var i = n(
                                            this._handleGeolocationResponse,
                                            this
                                        ),
                                        o = n(
                                            this._handleGeolocationError,
                                            this
                                        );
                                    return (
                                        t.watch
                                            ? (this._locationWatchId =
                                                  navigator.geolocation.watchPosition(
                                                      i,
                                                      o,
                                                      t
                                                  ))
                                            : navigator.geolocation.getCurrentPosition(
                                                  i,
                                                  o,
                                                  t
                                              ),
                                        this
                                    );
                                },
                                stopLocate: function () {
                                    return (
                                        navigator.geolocation &&
                                            navigator.geolocation.clearWatch &&
                                            navigator.geolocation.clearWatch(
                                                this._locationWatchId
                                            ),
                                        this._locateOptions &&
                                            (this._locateOptions.setView = !1),
                                        this
                                    );
                                },
                                _handleGeolocationError: function (t) {
                                    if (this._container._leaflet_id) {
                                        var e = t.code,
                                            i =
                                                t.message ||
                                                (1 === e
                                                    ? "permission denied"
                                                    : 2 === e
                                                    ? "position unavailable"
                                                    : "timeout");
                                        this._locateOptions.setView &&
                                            !this._loaded &&
                                            this.fitWorld(),
                                            this.fire("locationerror", {
                                                code: e,
                                                message:
                                                    "Geolocation error: " +
                                                    i +
                                                    ".",
                                            });
                                    }
                                },
                                _handleGeolocationResponse: function (t) {
                                    if (this._container._leaflet_id) {
                                        var e = new N(
                                                t.coords.latitude,
                                                t.coords.longitude
                                            ),
                                            i = e.toBounds(
                                                2 * t.coords.accuracy
                                            ),
                                            n = this._locateOptions;
                                        if (n.setView) {
                                            var o = this.getBoundsZoom(i);
                                            this.setView(
                                                e,
                                                n.maxZoom
                                                    ? Math.min(o, n.maxZoom)
                                                    : o
                                            );
                                        }
                                        var s = {
                                            latlng: e,
                                            bounds: i,
                                            timestamp: t.timestamp,
                                        };
                                        for (var r in t.coords)
                                            "number" == typeof t.coords[r] &&
                                                (s[r] = t.coords[r]);
                                        this.fire("locationfound", s);
                                    }
                                },
                                addHandler: function (t, e) {
                                    if (!e) return this;
                                    var i = (this[t] = new e(this));
                                    return (
                                        this._handlers.push(i),
                                        this.options[t] && i.enable(),
                                        this
                                    );
                                },
                                remove: function () {
                                    if (
                                        (this._initEvents(!0),
                                        this.options.maxBounds &&
                                            this.off(
                                                "moveend",
                                                this._panInsideMaxBounds
                                            ),
                                        this._containerId !==
                                            this._container._leaflet_id)
                                    )
                                        throw new Error(
                                            "Map container is being reused by another instance"
                                        );
                                    try {
                                        delete this._container._leaflet_id,
                                            delete this._containerId;
                                    } catch (t) {
                                        (this._container._leaflet_id = void 0),
                                            (this._containerId = void 0);
                                    }
                                    var t;
                                    for (t in (void 0 !==
                                        this._locationWatchId &&
                                        this.stopLocate(),
                                    this._stop(),
                                    re(this._mapPane),
                                    this._clearControlPos &&
                                        this._clearControlPos(),
                                    this._resizeRequest &&
                                        (M(this._resizeRequest),
                                        (this._resizeRequest = null)),
                                    this._clearHandlers(),
                                    this._loaded && this.fire("unload"),
                                    this._layers))
                                        this._layers[t].remove();
                                    for (t in this._panes) re(this._panes[t]);
                                    return (
                                        (this._layers = []),
                                        (this._panes = []),
                                        delete this._mapPane,
                                        delete this._renderer,
                                        this
                                    );
                                },
                                createPane: function (t, e) {
                                    var i = se(
                                        "div",
                                        "leaflet-pane" +
                                            (t
                                                ? " leaflet-" +
                                                  t.replace("Pane", "") +
                                                  "-pane"
                                                : ""),
                                        e || this._mapPane
                                    );
                                    return t && (this._panes[t] = i), i;
                                },
                                getCenter: function () {
                                    return (
                                        this._checkIfLoaded(),
                                        this._lastCenter && !this._moved()
                                            ? this._lastCenter.clone()
                                            : this.layerPointToLatLng(
                                                  this._getCenterLayerPoint()
                                              )
                                    );
                                },
                                getZoom: function () {
                                    return this._zoom;
                                },
                                getBounds: function () {
                                    var t = this.getPixelBounds();
                                    return new I(
                                        this.unproject(t.getBottomLeft()),
                                        this.unproject(t.getTopRight())
                                    );
                                },
                                getMinZoom: function () {
                                    return void 0 === this.options.minZoom
                                        ? this._layersMinZoom || 0
                                        : this.options.minZoom;
                                },
                                getMaxZoom: function () {
                                    return void 0 === this.options.maxZoom
                                        ? void 0 === this._layersMaxZoom
                                            ? 1 / 0
                                            : this._layersMaxZoom
                                        : this.options.maxZoom;
                                },
                                getBoundsZoom: function (t, e, i) {
                                    (t = R(t)), (i = O(i || [0, 0]));
                                    var n = this.getZoom() || 0,
                                        o = this.getMinZoom(),
                                        s = this.getMaxZoom(),
                                        r = t.getNorthWest(),
                                        a = t.getSouthEast(),
                                        h = this.getSize().subtract(i),
                                        l = B(
                                            this.project(a, n),
                                            this.project(r, n)
                                        ).getSize(),
                                        u = At.any3d
                                            ? this.options.zoomSnap
                                            : 1,
                                        c = h.x / l.x,
                                        d = h.y / l.y,
                                        _ = e ? Math.max(c, d) : Math.min(c, d);
                                    return (
                                        (n = this.getScaleZoom(_, n)),
                                        u &&
                                            ((n =
                                                Math.round(n / (u / 100)) *
                                                (u / 100)),
                                            (n = e
                                                ? Math.ceil(n / u) * u
                                                : Math.floor(n / u) * u)),
                                        Math.max(o, Math.min(s, n))
                                    );
                                },
                                getSize: function () {
                                    return (
                                        (this._size && !this._sizeChanged) ||
                                            ((this._size = new E(
                                                this._container.clientWidth ||
                                                    0,
                                                this._container.clientHeight ||
                                                    0
                                            )),
                                            (this._sizeChanged = !1)),
                                        this._size.clone()
                                    );
                                },
                                getPixelBounds: function (t, e) {
                                    var i = this._getTopLeftPoint(t, e);
                                    return new A(i, i.add(this.getSize()));
                                },
                                getPixelOrigin: function () {
                                    return (
                                        this._checkIfLoaded(), this._pixelOrigin
                                    );
                                },
                                getPixelWorldBounds: function (t) {
                                    return this.options.crs.getProjectedBounds(
                                        void 0 === t ? this.getZoom() : t
                                    );
                                },
                                getPane: function (t) {
                                    return "string" == typeof t
                                        ? this._panes[t]
                                        : t;
                                },
                                getPanes: function () {
                                    return this._panes;
                                },
                                getContainer: function () {
                                    return this._container;
                                },
                                getZoomScale: function (t, e) {
                                    var i = this.options.crs;
                                    return (
                                        (e = void 0 === e ? this._zoom : e),
                                        i.scale(t) / i.scale(e)
                                    );
                                },
                                getScaleZoom: function (t, e) {
                                    var i = this.options.crs;
                                    e = void 0 === e ? this._zoom : e;
                                    var n = i.zoom(t * i.scale(e));
                                    return isNaN(n) ? 1 / 0 : n;
                                },
                                project: function (t, e) {
                                    return (
                                        (e = void 0 === e ? this._zoom : e),
                                        this.options.crs.latLngToPoint(D(t), e)
                                    );
                                },
                                unproject: function (t, e) {
                                    return (
                                        (e = void 0 === e ? this._zoom : e),
                                        this.options.crs.pointToLatLng(O(t), e)
                                    );
                                },
                                layerPointToLatLng: function (t) {
                                    var e = O(t).add(this.getPixelOrigin());
                                    return this.unproject(e);
                                },
                                latLngToLayerPoint: function (t) {
                                    return this.project(D(t))
                                        ._round()
                                        ._subtract(this.getPixelOrigin());
                                },
                                wrapLatLng: function (t) {
                                    return this.options.crs.wrapLatLng(D(t));
                                },
                                wrapLatLngBounds: function (t) {
                                    return this.options.crs.wrapLatLngBounds(
                                        R(t)
                                    );
                                },
                                distance: function (t, e) {
                                    return this.options.crs.distance(
                                        D(t),
                                        D(e)
                                    );
                                },
                                containerPointToLayerPoint: function (t) {
                                    return O(t).subtract(this._getMapPanePos());
                                },
                                layerPointToContainerPoint: function (t) {
                                    return O(t).add(this._getMapPanePos());
                                },
                                containerPointToLatLng: function (t) {
                                    var e = this.containerPointToLayerPoint(
                                        O(t)
                                    );
                                    return this.layerPointToLatLng(e);
                                },
                                latLngToContainerPoint: function (t) {
                                    return this.layerPointToContainerPoint(
                                        this.latLngToLayerPoint(D(t))
                                    );
                                },
                                mouseEventToContainerPoint: function (t) {
                                    return He(t, this._container);
                                },
                                mouseEventToLayerPoint: function (t) {
                                    return this.containerPointToLayerPoint(
                                        this.mouseEventToContainerPoint(t)
                                    );
                                },
                                mouseEventToLatLng: function (t) {
                                    return this.layerPointToLatLng(
                                        this.mouseEventToLayerPoint(t)
                                    );
                                },
                                _initContainer: function (t) {
                                    var e = (this._container = ne(t));
                                    if (!e)
                                        throw new Error(
                                            "Map container not found."
                                        );
                                    if (e._leaflet_id)
                                        throw new Error(
                                            "Map container is already initialized."
                                        );
                                    Ce(e, "scroll", this._onScroll, this),
                                        (this._containerId = s(e));
                                },
                                _initLayout: function () {
                                    var t = this._container;
                                    (this._fadeAnimated =
                                        this.options.fadeAnimation && At.any3d),
                                        ce(
                                            t,
                                            "leaflet-container" +
                                                (At.touch
                                                    ? " leaflet-touch"
                                                    : "") +
                                                (At.retina
                                                    ? " leaflet-retina"
                                                    : "") +
                                                (At.ielt9
                                                    ? " leaflet-oldie"
                                                    : "") +
                                                (At.safari
                                                    ? " leaflet-safari"
                                                    : "") +
                                                (this._fadeAnimated
                                                    ? " leaflet-fade-anim"
                                                    : "")
                                        );
                                    var e = oe(t, "position");
                                    "absolute" !== e &&
                                        "relative" !== e &&
                                        "fixed" !== e &&
                                        "sticky" !== e &&
                                        (t.style.position = "relative"),
                                        this._initPanes(),
                                        this._initControlPos &&
                                            this._initControlPos();
                                },
                                _initPanes: function () {
                                    var t = (this._panes = {});
                                    (this._paneRenderers = {}),
                                        (this._mapPane = this.createPane(
                                            "mapPane",
                                            this._container
                                        )),
                                        ve(this._mapPane, new E(0, 0)),
                                        this.createPane("tilePane"),
                                        this.createPane("overlayPane"),
                                        this.createPane("shadowPane"),
                                        this.createPane("markerPane"),
                                        this.createPane("tooltipPane"),
                                        this.createPane("popupPane"),
                                        this.options.markerZoomAnimation ||
                                            (ce(
                                                t.markerPane,
                                                "leaflet-zoom-hide"
                                            ),
                                            ce(
                                                t.shadowPane,
                                                "leaflet-zoom-hide"
                                            ));
                                },
                                _resetView: function (t, e, i) {
                                    ve(this._mapPane, new E(0, 0));
                                    var n = !this._loaded;
                                    (this._loaded = !0),
                                        (e = this._limitZoom(e)),
                                        this.fire("viewprereset");
                                    var o = this._zoom !== e;
                                    this._moveStart(o, i)
                                        ._move(t, e)
                                        ._moveEnd(o),
                                        this.fire("viewreset"),
                                        n && this.fire("load");
                                },
                                _moveStart: function (t, e) {
                                    return (
                                        t && this.fire("zoomstart"),
                                        e || this.fire("movestart"),
                                        this
                                    );
                                },
                                _move: function (t, e, i, n) {
                                    void 0 === e && (e = this._zoom);
                                    var o = this._zoom !== e;
                                    return (
                                        (this._zoom = e),
                                        (this._lastCenter = t),
                                        (this._pixelOrigin =
                                            this._getNewPixelOrigin(t)),
                                        n
                                            ? i &&
                                              i.pinch &&
                                              this.fire("zoom", i)
                                            : ((o || (i && i.pinch)) &&
                                                  this.fire("zoom", i),
                                              this.fire("move", i)),
                                        this
                                    );
                                },
                                _moveEnd: function (t) {
                                    return (
                                        t && this.fire("zoomend"),
                                        this.fire("moveend")
                                    );
                                },
                                _stop: function () {
                                    return (
                                        M(this._flyToFrame),
                                        this._panAnim && this._panAnim.stop(),
                                        this
                                    );
                                },
                                _rawPanBy: function (t) {
                                    ve(
                                        this._mapPane,
                                        this._getMapPanePos().subtract(t)
                                    );
                                },
                                _getZoomSpan: function () {
                                    return (
                                        this.getMaxZoom() - this.getMinZoom()
                                    );
                                },
                                _panInsideMaxBounds: function () {
                                    this._enforcingBounds ||
                                        this.panInsideBounds(
                                            this.options.maxBounds
                                        );
                                },
                                _checkIfLoaded: function () {
                                    if (!this._loaded)
                                        throw new Error(
                                            "Set map center and zoom first."
                                        );
                                },
                                _initEvents: function (t) {
                                    (this._targets = {}),
                                        (this._targets[s(this._container)] =
                                            this);
                                    var e = t ? Ze : Ce;
                                    e(
                                        this._container,
                                        "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
                                        this._handleDOMEvent,
                                        this
                                    ),
                                        this.options.trackResize &&
                                            e(
                                                window,
                                                "resize",
                                                this._onResize,
                                                this
                                            ),
                                        At.any3d &&
                                            this.options.transform3DLimit &&
                                            (t ? this.off : this.on).call(
                                                this,
                                                "moveend",
                                                this._onMoveEnd
                                            );
                                },
                                _onResize: function () {
                                    M(this._resizeRequest),
                                        (this._resizeRequest = T(function () {
                                            this.invalidateSize({
                                                debounceMoveend: !0,
                                            });
                                        }, this));
                                },
                                _onScroll: function () {
                                    (this._container.scrollTop = 0),
                                        (this._container.scrollLeft = 0);
                                },
                                _onMoveEnd: function () {
                                    var t = this._getMapPanePos();
                                    Math.max(Math.abs(t.x), Math.abs(t.y)) >=
                                        this.options.transform3DLimit &&
                                        this._resetView(
                                            this.getCenter(),
                                            this.getZoom()
                                        );
                                },
                                _findEventTargets: function (t, e) {
                                    for (
                                        var i,
                                            n = [],
                                            o =
                                                "mouseout" === e ||
                                                "mouseover" === e,
                                            r = t.target || t.srcElement,
                                            a = !1;
                                        r;

                                    ) {
                                        if (
                                            (i = this._targets[s(r)]) &&
                                            ("click" === e ||
                                                "preclick" === e) &&
                                            this._draggableMoved(i)
                                        ) {
                                            a = !0;
                                            break;
                                        }
                                        if (i && i.listens(e, !0)) {
                                            if (o && !Ue(r, t)) break;
                                            if ((n.push(i), o)) break;
                                        }
                                        if (r === this._container) break;
                                        r = r.parentNode;
                                    }
                                    return (
                                        n.length ||
                                            a ||
                                            o ||
                                            !this.listens(e, !0) ||
                                            (n = [this]),
                                        n
                                    );
                                },
                                _isClickDisabled: function (t) {
                                    for (; t && t !== this._container; ) {
                                        if (t._leaflet_disable_click) return !0;
                                        t = t.parentNode;
                                    }
                                },
                                _handleDOMEvent: function (t) {
                                    var e = t.target || t.srcElement;
                                    if (
                                        !(
                                            !this._loaded ||
                                            e._leaflet_disable_events ||
                                            ("click" === t.type &&
                                                this._isClickDisabled(e))
                                        )
                                    ) {
                                        var i = t.type;
                                        "mousedown" === i && Pe(e),
                                            this._fireDOMEvent(t, i);
                                    }
                                },
                                _mouseEvents: [
                                    "click",
                                    "dblclick",
                                    "mouseover",
                                    "mouseout",
                                    "contextmenu",
                                ],
                                _fireDOMEvent: function (t, i, n) {
                                    if ("click" === t.type) {
                                        var o = e({}, t);
                                        (o.type = "preclick"),
                                            this._fireDOMEvent(o, o.type, n);
                                    }
                                    var s = this._findEventTargets(t, i);
                                    if (n) {
                                        for (
                                            var r = [], a = 0;
                                            a < n.length;
                                            a++
                                        )
                                            n[a].listens(i, !0) && r.push(n[a]);
                                        s = r.concat(s);
                                    }
                                    if (s.length) {
                                        "contextmenu" === i && Ne(t);
                                        var h = s[0],
                                            l = {
                                                originalEvent: t,
                                            };
                                        if (
                                            "keypress" !== t.type &&
                                            "keydown" !== t.type &&
                                            "keyup" !== t.type
                                        ) {
                                            var u =
                                                h.getLatLng &&
                                                (!h._radius || h._radius <= 10);
                                            (l.containerPoint = u
                                                ? this.latLngToContainerPoint(
                                                      h.getLatLng()
                                                  )
                                                : this.mouseEventToContainerPoint(
                                                      t
                                                  )),
                                                (l.layerPoint =
                                                    this.containerPointToLayerPoint(
                                                        l.containerPoint
                                                    )),
                                                (l.latlng = u
                                                    ? h.getLatLng()
                                                    : this.layerPointToLatLng(
                                                          l.layerPoint
                                                      ));
                                        }
                                        for (a = 0; a < s.length; a++)
                                            if (
                                                (s[a].fire(i, l, !0),
                                                l.originalEvent._stopped ||
                                                    (!1 ===
                                                        s[a].options
                                                            .bubblingMouseEvents &&
                                                        -1 !==
                                                            g(
                                                                this
                                                                    ._mouseEvents,
                                                                i
                                                            )))
                                            )
                                                return;
                                    }
                                },
                                _draggableMoved: function (t) {
                                    return (
                                        ((t =
                                            t.dragging && t.dragging.enabled()
                                                ? t
                                                : this).dragging &&
                                            t.dragging.moved()) ||
                                        (this.boxZoom && this.boxZoom.moved())
                                    );
                                },
                                _clearHandlers: function () {
                                    for (
                                        var t = 0, e = this._handlers.length;
                                        t < e;
                                        t++
                                    )
                                        this._handlers[t].disable();
                                },
                                whenReady: function (t, e) {
                                    return (
                                        this._loaded
                                            ? t.call(e || this, {
                                                  target: this,
                                              })
                                            : this.on("load", t, e),
                                        this
                                    );
                                },
                                _getMapPanePos: function () {
                                    return ye(this._mapPane) || new E(0, 0);
                                },
                                _moved: function () {
                                    var t = this._getMapPanePos();
                                    return t && !t.equals([0, 0]);
                                },
                                _getTopLeftPoint: function (t, e) {
                                    return (
                                        t && void 0 !== e
                                            ? this._getNewPixelOrigin(t, e)
                                            : this.getPixelOrigin()
                                    ).subtract(this._getMapPanePos());
                                },
                                _getNewPixelOrigin: function (t, e) {
                                    var i = this.getSize()._divideBy(2);
                                    return this.project(t, e)
                                        ._subtract(i)
                                        ._add(this._getMapPanePos())
                                        ._round();
                                },
                                _latLngToNewLayerPoint: function (t, e, i) {
                                    var n = this._getNewPixelOrigin(i, e);
                                    return this.project(t, e)._subtract(n);
                                },
                                _latLngBoundsToNewLayerBounds: function (
                                    t,
                                    e,
                                    i
                                ) {
                                    var n = this._getNewPixelOrigin(i, e);
                                    return B([
                                        this.project(
                                            t.getSouthWest(),
                                            e
                                        )._subtract(n),
                                        this.project(
                                            t.getNorthWest(),
                                            e
                                        )._subtract(n),
                                        this.project(
                                            t.getSouthEast(),
                                            e
                                        )._subtract(n),
                                        this.project(
                                            t.getNorthEast(),
                                            e
                                        )._subtract(n),
                                    ]);
                                },
                                _getCenterLayerPoint: function () {
                                    return this.containerPointToLayerPoint(
                                        this.getSize()._divideBy(2)
                                    );
                                },
                                _getCenterOffset: function (t) {
                                    return this.latLngToLayerPoint(t).subtract(
                                        this._getCenterLayerPoint()
                                    );
                                },
                                _limitCenter: function (t, e, i) {
                                    if (!i) return t;
                                    var n = this.project(t, e),
                                        o = this.getSize().divideBy(2),
                                        s = new A(n.subtract(o), n.add(o)),
                                        r = this._getBoundsOffset(s, i, e);
                                    return Math.abs(r.x) <= 1 &&
                                        Math.abs(r.y) <= 1
                                        ? t
                                        : this.unproject(n.add(r), e);
                                },
                                _limitOffset: function (t, e) {
                                    if (!e) return t;
                                    var i = this.getPixelBounds(),
                                        n = new A(i.min.add(t), i.max.add(t));
                                    return t.add(this._getBoundsOffset(n, e));
                                },
                                _getBoundsOffset: function (t, e, i) {
                                    var n = B(
                                            this.project(e.getNorthEast(), i),
                                            this.project(e.getSouthWest(), i)
                                        ),
                                        o = n.min.subtract(t.min),
                                        s = n.max.subtract(t.max);
                                    return new E(
                                        this._rebound(o.x, -s.x),
                                        this._rebound(o.y, -s.y)
                                    );
                                },
                                _rebound: function (t, e) {
                                    return t + e > 0
                                        ? Math.round(t - e) / 2
                                        : Math.max(0, Math.ceil(t)) -
                                              Math.max(0, Math.floor(e));
                                },
                                _limitZoom: function (t) {
                                    var e = this.getMinZoom(),
                                        i = this.getMaxZoom(),
                                        n = At.any3d
                                            ? this.options.zoomSnap
                                            : 1;
                                    return (
                                        n && (t = Math.round(t / n) * n),
                                        Math.max(e, Math.min(i, t))
                                    );
                                },
                                _onPanTransitionStep: function () {
                                    this.fire("move");
                                },
                                _onPanTransitionEnd: function () {
                                    de(this._mapPane, "leaflet-pan-anim"),
                                        this.fire("moveend");
                                },
                                _tryAnimatedPan: function (t, e) {
                                    var i = this._getCenterOffset(t)._trunc();
                                    return !(
                                        (!0 !== (e && e.animate) &&
                                            !this.getSize().contains(i)) ||
                                        (this.panBy(i, e), 0)
                                    );
                                },
                                _createAnimProxy: function () {
                                    var t = (this._proxy = se(
                                        "div",
                                        "leaflet-proxy leaflet-zoom-animated"
                                    ));
                                    this._panes.mapPane.appendChild(t),
                                        this.on(
                                            "zoomanim",
                                            function (t) {
                                                var e = te,
                                                    i = this._proxy.style[e];
                                                ge(
                                                    this._proxy,
                                                    this.project(
                                                        t.center,
                                                        t.zoom
                                                    ),
                                                    this.getZoomScale(t.zoom, 1)
                                                ),
                                                    i ===
                                                        this._proxy.style[e] &&
                                                        this._animatingZoom &&
                                                        this._onZoomTransitionEnd();
                                            },
                                            this
                                        ),
                                        this.on(
                                            "load moveend",
                                            this._animMoveEnd,
                                            this
                                        ),
                                        this._on(
                                            "unload",
                                            this._destroyAnimProxy,
                                            this
                                        );
                                },
                                _destroyAnimProxy: function () {
                                    re(this._proxy),
                                        this.off(
                                            "load moveend",
                                            this._animMoveEnd,
                                            this
                                        ),
                                        delete this._proxy;
                                },
                                _animMoveEnd: function () {
                                    var t = this.getCenter(),
                                        e = this.getZoom();
                                    ge(
                                        this._proxy,
                                        this.project(t, e),
                                        this.getZoomScale(e, 1)
                                    );
                                },
                                _catchTransitionEnd: function (t) {
                                    this._animatingZoom &&
                                        t.propertyName.indexOf("transform") >=
                                            0 &&
                                        this._onZoomTransitionEnd();
                                },
                                _nothingToAnimate: function () {
                                    return !this._container.getElementsByClassName(
                                        "leaflet-zoom-animated"
                                    ).length;
                                },
                                _tryAnimatedZoom: function (t, e, i) {
                                    if (this._animatingZoom) return !0;
                                    if (
                                        ((i = i || {}),
                                        !this._zoomAnimated ||
                                            !1 === i.animate ||
                                            this._nothingToAnimate() ||
                                            Math.abs(e - this._zoom) >
                                                this.options
                                                    .zoomAnimationThreshold)
                                    )
                                        return !1;
                                    var n = this.getZoomScale(e),
                                        o = this._getCenterOffset(t)._divideBy(
                                            1 - 1 / n
                                        );
                                    return !(
                                        (!0 !== i.animate &&
                                            !this.getSize().contains(o)) ||
                                        (T(function () {
                                            this._moveStart(
                                                !0,
                                                i.noMoveStart || !1
                                            )._animateZoom(t, e, !0);
                                        }, this),
                                        0)
                                    );
                                },
                                _animateZoom: function (t, e, i, o) {
                                    this._mapPane &&
                                        (i &&
                                            ((this._animatingZoom = !0),
                                            (this._animateToCenter = t),
                                            (this._animateToZoom = e),
                                            ce(
                                                this._mapPane,
                                                "leaflet-zoom-anim"
                                            )),
                                        this.fire("zoomanim", {
                                            center: t,
                                            zoom: e,
                                            noUpdate: o,
                                        }),
                                        this._tempFireZoomEvent ||
                                            (this._tempFireZoomEvent =
                                                this._zoom !==
                                                this._animateToZoom),
                                        this._move(
                                            this._animateToCenter,
                                            this._animateToZoom,
                                            void 0,
                                            !0
                                        ),
                                        setTimeout(
                                            n(this._onZoomTransitionEnd, this),
                                            250
                                        ));
                                },
                                _onZoomTransitionEnd: function () {
                                    this._animatingZoom &&
                                        (this._mapPane &&
                                            de(
                                                this._mapPane,
                                                "leaflet-zoom-anim"
                                            ),
                                        (this._animatingZoom = !1),
                                        this._move(
                                            this._animateToCenter,
                                            this._animateToZoom,
                                            void 0,
                                            !0
                                        ),
                                        this._tempFireZoomEvent &&
                                            this.fire("zoom"),
                                        delete this._tempFireZoomEvent,
                                        this.fire("move"),
                                        this._moveEnd(!0));
                                },
                            });
                        var Ke = C.extend({
                                options: {
                                    position: "topright",
                                },
                                initialize: function (t) {
                                    d(this, t);
                                },
                                getPosition: function () {
                                    return this.options.position;
                                },
                                setPosition: function (t) {
                                    var e = this._map;
                                    return (
                                        e && e.removeControl(this),
                                        (this.options.position = t),
                                        e && e.addControl(this),
                                        this
                                    );
                                },
                                getContainer: function () {
                                    return this._container;
                                },
                                addTo: function (t) {
                                    this.remove(), (this._map = t);
                                    var e = (this._container = this.onAdd(t)),
                                        i = this.getPosition(),
                                        n = t._controlCorners[i];
                                    return (
                                        ce(e, "leaflet-control"),
                                        -1 !== i.indexOf("bottom")
                                            ? n.insertBefore(e, n.firstChild)
                                            : n.appendChild(e),
                                        this._map.on(
                                            "unload",
                                            this.remove,
                                            this
                                        ),
                                        this
                                    );
                                },
                                remove: function () {
                                    return this._map
                                        ? (re(this._container),
                                          this.onRemove &&
                                              this.onRemove(this._map),
                                          this._map.off(
                                              "unload",
                                              this.remove,
                                              this
                                          ),
                                          (this._map = null),
                                          this)
                                        : this;
                                },
                                _refocusOnMap: function (t) {
                                    this._map &&
                                        t &&
                                        t.screenX > 0 &&
                                        t.screenY > 0 &&
                                        this._map.getContainer().focus();
                                },
                            }),
                            Ye = function (t) {
                                return new Ke(t);
                            };
                        Ge.include({
                            addControl: function (t) {
                                return t.addTo(this), this;
                            },
                            removeControl: function (t) {
                                return t.remove(), this;
                            },
                            _initControlPos: function () {
                                var t = (this._controlCorners = {}),
                                    e = "leaflet-",
                                    i = (this._controlContainer = se(
                                        "div",
                                        e + "control-container",
                                        this._container
                                    ));
                                function n(n, o) {
                                    var s = e + n + " " + e + o;
                                    t[n + o] = se("div", s, i);
                                }
                                n("top", "left"),
                                    n("top", "right"),
                                    n("bottom", "left"),
                                    n("bottom", "right");
                            },
                            _clearControlPos: function () {
                                for (var t in this._controlCorners)
                                    re(this._controlCorners[t]);
                                re(this._controlContainer),
                                    delete this._controlCorners,
                                    delete this._controlContainer;
                            },
                        });
                        var Xe = Ke.extend({
                                options: {
                                    collapsed: !0,
                                    position: "topright",
                                    autoZIndex: !0,
                                    hideSingleBase: !1,
                                    sortLayers: !1,
                                    sortFunction: function (t, e, i, n) {
                                        return i < n ? -1 : n < i ? 1 : 0;
                                    },
                                },
                                initialize: function (t, e, i) {
                                    for (var n in (d(this, i),
                                    (this._layerControlInputs = []),
                                    (this._layers = []),
                                    (this._lastZIndex = 0),
                                    (this._handlingClick = !1),
                                    (this._preventClick = !1),
                                    t))
                                        this._addLayer(t[n], n);
                                    for (n in e) this._addLayer(e[n], n, !0);
                                },
                                onAdd: function (t) {
                                    this._initLayout(),
                                        this._update(),
                                        (this._map = t),
                                        t.on(
                                            "zoomend",
                                            this._checkDisabledLayers,
                                            this
                                        );
                                    for (
                                        var e = 0;
                                        e < this._layers.length;
                                        e++
                                    )
                                        this._layers[e].layer.on(
                                            "add remove",
                                            this._onLayerChange,
                                            this
                                        );
                                    return this._container;
                                },
                                addTo: function (t) {
                                    return (
                                        Ke.prototype.addTo.call(this, t),
                                        this._expandIfNotCollapsed()
                                    );
                                },
                                onRemove: function () {
                                    this._map.off(
                                        "zoomend",
                                        this._checkDisabledLayers,
                                        this
                                    );
                                    for (
                                        var t = 0;
                                        t < this._layers.length;
                                        t++
                                    )
                                        this._layers[t].layer.off(
                                            "add remove",
                                            this._onLayerChange,
                                            this
                                        );
                                },
                                addBaseLayer: function (t, e) {
                                    return (
                                        this._addLayer(t, e),
                                        this._map ? this._update() : this
                                    );
                                },
                                addOverlay: function (t, e) {
                                    return (
                                        this._addLayer(t, e, !0),
                                        this._map ? this._update() : this
                                    );
                                },
                                removeLayer: function (t) {
                                    t.off(
                                        "add remove",
                                        this._onLayerChange,
                                        this
                                    );
                                    var e = this._getLayer(s(t));
                                    return (
                                        e &&
                                            this._layers.splice(
                                                this._layers.indexOf(e),
                                                1
                                            ),
                                        this._map ? this._update() : this
                                    );
                                },
                                expand: function () {
                                    ce(
                                        this._container,
                                        "leaflet-control-layers-expanded"
                                    ),
                                        (this._section.style.height = null);
                                    var t =
                                        this._map.getSize().y -
                                        (this._container.offsetTop + 50);
                                    return (
                                        t < this._section.clientHeight
                                            ? (ce(
                                                  this._section,
                                                  "leaflet-control-layers-scrollbar"
                                              ),
                                              (this._section.style.height =
                                                  t + "px"))
                                            : de(
                                                  this._section,
                                                  "leaflet-control-layers-scrollbar"
                                              ),
                                        this._checkDisabledLayers(),
                                        this
                                    );
                                },
                                collapse: function () {
                                    return (
                                        de(
                                            this._container,
                                            "leaflet-control-layers-expanded"
                                        ),
                                        this
                                    );
                                },
                                _initLayout: function () {
                                    var t = "leaflet-control-layers",
                                        e = (this._container = se("div", t)),
                                        i = this.options.collapsed;
                                    e.setAttribute("aria-haspopup", !0),
                                        Re(e),
                                        Ie(e);
                                    var n = (this._section = se(
                                        "section",
                                        t + "-list"
                                    ));
                                    i &&
                                        (this._map.on(
                                            "click",
                                            this.collapse,
                                            this
                                        ),
                                        Ce(
                                            e,
                                            {
                                                mouseenter: this._expandSafely,
                                                mouseleave: this.collapse,
                                            },
                                            this
                                        ));
                                    var o = (this._layersLink = se(
                                        "a",
                                        t + "-toggle",
                                        e
                                    ));
                                    (o.href = "#"),
                                        (o.title = "Layers"),
                                        o.setAttribute("role", "button"),
                                        Ce(
                                            o,
                                            {
                                                keydown: function (t) {
                                                    13 === t.keyCode &&
                                                        this._expandSafely();
                                                },
                                                click: function (t) {
                                                    Ne(t), this._expandSafely();
                                                },
                                            },
                                            this
                                        ),
                                        i || this.expand(),
                                        (this._baseLayersList = se(
                                            "div",
                                            t + "-base",
                                            n
                                        )),
                                        (this._separator = se(
                                            "div",
                                            t + "-separator",
                                            n
                                        )),
                                        (this._overlaysList = se(
                                            "div",
                                            t + "-overlays",
                                            n
                                        )),
                                        e.appendChild(n);
                                },
                                _getLayer: function (t) {
                                    for (
                                        var e = 0;
                                        e < this._layers.length;
                                        e++
                                    )
                                        if (
                                            this._layers[e] &&
                                            s(this._layers[e].layer) === t
                                        )
                                            return this._layers[e];
                                },
                                _addLayer: function (t, e, i) {
                                    this._map &&
                                        t.on(
                                            "add remove",
                                            this._onLayerChange,
                                            this
                                        ),
                                        this._layers.push({
                                            layer: t,
                                            name: e,
                                            overlay: i,
                                        }),
                                        this.options.sortLayers &&
                                            this._layers.sort(
                                                n(function (t, e) {
                                                    return this.options.sortFunction(
                                                        t.layer,
                                                        e.layer,
                                                        t.name,
                                                        e.name
                                                    );
                                                }, this)
                                            ),
                                        this.options.autoZIndex &&
                                            t.setZIndex &&
                                            (this._lastZIndex++,
                                            t.setZIndex(this._lastZIndex)),
                                        this._expandIfNotCollapsed();
                                },
                                _update: function () {
                                    if (!this._container) return this;
                                    ae(this._baseLayersList),
                                        ae(this._overlaysList),
                                        (this._layerControlInputs = []);
                                    var t,
                                        e,
                                        i,
                                        n,
                                        o = 0;
                                    for (i = 0; i < this._layers.length; i++)
                                        (n = this._layers[i]),
                                            this._addItem(n),
                                            (e = e || n.overlay),
                                            (t = t || !n.overlay),
                                            (o += n.overlay ? 0 : 1);
                                    return (
                                        this.options.hideSingleBase &&
                                            ((t = t && o > 1),
                                            (this._baseLayersList.style.display =
                                                t ? "" : "none")),
                                        (this._separator.style.display =
                                            e && t ? "" : "none"),
                                        this
                                    );
                                },
                                _onLayerChange: function (t) {
                                    this._handlingClick || this._update();
                                    var e = this._getLayer(s(t.target)),
                                        i = e.overlay
                                            ? "add" === t.type
                                                ? "overlayadd"
                                                : "overlayremove"
                                            : "add" === t.type
                                            ? "baselayerchange"
                                            : null;
                                    i && this._map.fire(i, e);
                                },
                                _createRadioElement: function (t, e) {
                                    var i =
                                            '<input type="radio" class="leaflet-control-layers-selector" name="' +
                                            t +
                                            '"' +
                                            (e ? ' checked="checked"' : "") +
                                            "/>",
                                        n = document.createElement("div");
                                    return (n.innerHTML = i), n.firstChild;
                                },
                                _addItem: function (t) {
                                    var e,
                                        i = document.createElement("label"),
                                        n = this._map.hasLayer(t.layer);
                                    t.overlay
                                        ? (((e =
                                              document.createElement(
                                                  "input"
                                              )).type = "checkbox"),
                                          (e.className =
                                              "leaflet-control-layers-selector"),
                                          (e.defaultChecked = n))
                                        : (e = this._createRadioElement(
                                              "leaflet-base-layers_" + s(this),
                                              n
                                          )),
                                        this._layerControlInputs.push(e),
                                        (e.layerId = s(t.layer)),
                                        Ce(
                                            e,
                                            "click",
                                            this._onInputClick,
                                            this
                                        );
                                    var o = document.createElement("span");
                                    o.innerHTML = " " + t.name;
                                    var r = document.createElement("span");
                                    return (
                                        i.appendChild(r),
                                        r.appendChild(e),
                                        r.appendChild(o),
                                        (t.overlay
                                            ? this._overlaysList
                                            : this._baseLayersList
                                        ).appendChild(i),
                                        this._checkDisabledLayers(),
                                        i
                                    );
                                },
                                _onInputClick: function () {
                                    if (!this._preventClick) {
                                        var t,
                                            e,
                                            i = this._layerControlInputs,
                                            n = [],
                                            o = [];
                                        this._handlingClick = !0;
                                        for (var s = i.length - 1; s >= 0; s--)
                                            (t = i[s]),
                                                (e = this._getLayer(
                                                    t.layerId
                                                ).layer),
                                                t.checked
                                                    ? n.push(e)
                                                    : t.checked || o.push(e);
                                        for (s = 0; s < o.length; s++)
                                            this._map.hasLayer(o[s]) &&
                                                this._map.removeLayer(o[s]);
                                        for (s = 0; s < n.length; s++)
                                            this._map.hasLayer(n[s]) ||
                                                this._map.addLayer(n[s]);
                                        (this._handlingClick = !1),
                                            this._refocusOnMap();
                                    }
                                },
                                _checkDisabledLayers: function () {
                                    for (
                                        var t,
                                            e,
                                            i = this._layerControlInputs,
                                            n = this._map.getZoom(),
                                            o = i.length - 1;
                                        o >= 0;
                                        o--
                                    )
                                        (t = i[o]),
                                            (e = this._getLayer(
                                                t.layerId
                                            ).layer),
                                            (t.disabled =
                                                (void 0 !== e.options.minZoom &&
                                                    n < e.options.minZoom) ||
                                                (void 0 !== e.options.maxZoom &&
                                                    n > e.options.maxZoom));
                                },
                                _expandIfNotCollapsed: function () {
                                    return (
                                        this._map &&
                                            !this.options.collapsed &&
                                            this.expand(),
                                        this
                                    );
                                },
                                _expandSafely: function () {
                                    var t = this._section;
                                    (this._preventClick = !0),
                                        Ce(t, "click", Ne),
                                        this.expand();
                                    var e = this;
                                    setTimeout(function () {
                                        Ze(t, "click", Ne),
                                            (e._preventClick = !1);
                                    });
                                },
                            }),
                            Je = Ke.extend({
                                options: {
                                    position: "topleft",
                                    zoomInText:
                                        '<span aria-hidden="true">+</span>',
                                    zoomInTitle: "Zoom in",
                                    zoomOutText:
                                        '<span aria-hidden="true">&#x2212;</span>',
                                    zoomOutTitle: "Zoom out",
                                },
                                onAdd: function (t) {
                                    var e = "leaflet-control-zoom",
                                        i = se("div", e + " leaflet-bar"),
                                        n = this.options;
                                    return (
                                        (this._zoomInButton =
                                            this._createButton(
                                                n.zoomInText,
                                                n.zoomInTitle,
                                                e + "-in",
                                                i,
                                                this._zoomIn
                                            )),
                                        (this._zoomOutButton =
                                            this._createButton(
                                                n.zoomOutText,
                                                n.zoomOutTitle,
                                                e + "-out",
                                                i,
                                                this._zoomOut
                                            )),
                                        this._updateDisabled(),
                                        t.on(
                                            "zoomend zoomlevelschange",
                                            this._updateDisabled,
                                            this
                                        ),
                                        i
                                    );
                                },
                                onRemove: function (t) {
                                    t.off(
                                        "zoomend zoomlevelschange",
                                        this._updateDisabled,
                                        this
                                    );
                                },
                                disable: function () {
                                    return (
                                        (this._disabled = !0),
                                        this._updateDisabled(),
                                        this
                                    );
                                },
                                enable: function () {
                                    return (
                                        (this._disabled = !1),
                                        this._updateDisabled(),
                                        this
                                    );
                                },
                                _zoomIn: function (t) {
                                    !this._disabled &&
                                        this._map._zoom <
                                            this._map.getMaxZoom() &&
                                        this._map.zoomIn(
                                            this._map.options.zoomDelta *
                                                (t.shiftKey ? 3 : 1)
                                        );
                                },
                                _zoomOut: function (t) {
                                    !this._disabled &&
                                        this._map._zoom >
                                            this._map.getMinZoom() &&
                                        this._map.zoomOut(
                                            this._map.options.zoomDelta *
                                                (t.shiftKey ? 3 : 1)
                                        );
                                },
                                _createButton: function (t, e, i, n, o) {
                                    var s = se("a", i, n);
                                    return (
                                        (s.innerHTML = t),
                                        (s.href = "#"),
                                        (s.title = e),
                                        s.setAttribute("role", "button"),
                                        s.setAttribute("aria-label", e),
                                        Re(s),
                                        Ce(s, "click", De),
                                        Ce(s, "click", o, this),
                                        Ce(
                                            s,
                                            "click",
                                            this._refocusOnMap,
                                            this
                                        ),
                                        s
                                    );
                                },
                                _updateDisabled: function () {
                                    var t = this._map,
                                        e = "leaflet-disabled";
                                    de(this._zoomInButton, e),
                                        de(this._zoomOutButton, e),
                                        this._zoomInButton.setAttribute(
                                            "aria-disabled",
                                            "false"
                                        ),
                                        this._zoomOutButton.setAttribute(
                                            "aria-disabled",
                                            "false"
                                        ),
                                        (this._disabled ||
                                            t._zoom === t.getMinZoom()) &&
                                            (ce(this._zoomOutButton, e),
                                            this._zoomOutButton.setAttribute(
                                                "aria-disabled",
                                                "true"
                                            )),
                                        (this._disabled ||
                                            t._zoom === t.getMaxZoom()) &&
                                            (ce(this._zoomInButton, e),
                                            this._zoomInButton.setAttribute(
                                                "aria-disabled",
                                                "true"
                                            ));
                                },
                            });
                        Ge.mergeOptions({
                            zoomControl: !0,
                        }),
                            Ge.addInitHook(function () {
                                this.options.zoomControl &&
                                    ((this.zoomControl = new Je()),
                                    this.addControl(this.zoomControl));
                            });
                        var $e = Ke.extend({
                                options: {
                                    position: "bottomleft",
                                    maxWidth: 100,
                                    metric: !0,
                                    imperial: !0,
                                },
                                onAdd: function (t) {
                                    var e = "leaflet-control-scale",
                                        i = se("div", e),
                                        n = this.options;
                                    return (
                                        this._addScales(n, e + "-line", i),
                                        t.on(
                                            n.updateWhenIdle
                                                ? "moveend"
                                                : "move",
                                            this._update,
                                            this
                                        ),
                                        t.whenReady(this._update, this),
                                        i
                                    );
                                },
                                onRemove: function (t) {
                                    t.off(
                                        this.options.updateWhenIdle
                                            ? "moveend"
                                            : "move",
                                        this._update,
                                        this
                                    );
                                },
                                _addScales: function (t, e, i) {
                                    t.metric &&
                                        (this._mScale = se("div", e, i)),
                                        t.imperial &&
                                            (this._iScale = se("div", e, i));
                                },
                                _update: function () {
                                    var t = this._map,
                                        e = t.getSize().y / 2,
                                        i = t.distance(
                                            t.containerPointToLatLng([0, e]),
                                            t.containerPointToLatLng([
                                                this.options.maxWidth,
                                                e,
                                            ])
                                        );
                                    this._updateScales(i);
                                },
                                _updateScales: function (t) {
                                    this.options.metric &&
                                        t &&
                                        this._updateMetric(t),
                                        this.options.imperial &&
                                            t &&
                                            this._updateImperial(t);
                                },
                                _updateMetric: function (t) {
                                    var e = this._getRoundNum(t),
                                        i =
                                            e < 1e3
                                                ? e + " m"
                                                : e / 1e3 + " km";
                                    this._updateScale(this._mScale, i, e / t);
                                },
                                _updateImperial: function (t) {
                                    var e,
                                        i,
                                        n,
                                        o = 3.2808399 * t;
                                    o > 5280
                                        ? ((e = o / 5280),
                                          (i = this._getRoundNum(e)),
                                          this._updateScale(
                                              this._iScale,
                                              i + " mi",
                                              i / e
                                          ))
                                        : ((n = this._getRoundNum(o)),
                                          this._updateScale(
                                              this._iScale,
                                              n + " ft",
                                              n / o
                                          ));
                                },
                                _updateScale: function (t, e, i) {
                                    (t.style.width =
                                        Math.round(this.options.maxWidth * i) +
                                        "px"),
                                        (t.innerHTML = e);
                                },
                                _getRoundNum: function (t) {
                                    var e = Math.pow(
                                            10,
                                            (Math.floor(t) + "").length - 1
                                        ),
                                        i = t / e;
                                    return (
                                        e *
                                        (i >= 10
                                            ? 10
                                            : i >= 5
                                            ? 5
                                            : i >= 3
                                            ? 3
                                            : i >= 2
                                            ? 2
                                            : 1)
                                    );
                                },
                            }),
                            Qe = Ke.extend({
                                options: {
                                    position: "bottomright",
                                    prefix:
                                        '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
                                        (At.inlineSvg
                                            ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> '
                                            : "") +
                                        "Leaflet</a>",
                                },
                                initialize: function (t) {
                                    d(this, t), (this._attributions = {});
                                },
                                onAdd: function (t) {
                                    for (var e in ((t.attributionControl =
                                        this),
                                    (this._container = se(
                                        "div",
                                        "leaflet-control-attribution"
                                    )),
                                    Re(this._container),
                                    t._layers))
                                        t._layers[e].getAttribution &&
                                            this.addAttribution(
                                                t._layers[e].getAttribution()
                                            );
                                    return (
                                        this._update(),
                                        t.on(
                                            "layeradd",
                                            this._addAttribution,
                                            this
                                        ),
                                        this._container
                                    );
                                },
                                onRemove: function (t) {
                                    t.off(
                                        "layeradd",
                                        this._addAttribution,
                                        this
                                    );
                                },
                                _addAttribution: function (t) {
                                    t.layer.getAttribution &&
                                        (this.addAttribution(
                                            t.layer.getAttribution()
                                        ),
                                        t.layer.once(
                                            "remove",
                                            function () {
                                                this.removeAttribution(
                                                    t.layer.getAttribution()
                                                );
                                            },
                                            this
                                        ));
                                },
                                setPrefix: function (t) {
                                    return (
                                        (this.options.prefix = t),
                                        this._update(),
                                        this
                                    );
                                },
                                addAttribution: function (t) {
                                    return t
                                        ? (this._attributions[t] ||
                                              (this._attributions[t] = 0),
                                          this._attributions[t]++,
                                          this._update(),
                                          this)
                                        : this;
                                },
                                removeAttribution: function (t) {
                                    return t
                                        ? (this._attributions[t] &&
                                              (this._attributions[t]--,
                                              this._update()),
                                          this)
                                        : this;
                                },
                                _update: function () {
                                    if (this._map) {
                                        var t = [];
                                        for (var e in this._attributions)
                                            this._attributions[e] && t.push(e);
                                        var i = [];
                                        this.options.prefix &&
                                            i.push(this.options.prefix),
                                            t.length && i.push(t.join(", ")),
                                            (this._container.innerHTML = i.join(
                                                ' <span aria-hidden="true">|</span> '
                                            ));
                                    }
                                },
                            });
                        Ge.mergeOptions({
                            attributionControl: !0,
                        }),
                            Ge.addInitHook(function () {
                                this.options.attributionControl &&
                                    new Qe().addTo(this);
                            });
                        (Ke.Layers = Xe),
                            (Ke.Zoom = Je),
                            (Ke.Scale = $e),
                            (Ke.Attribution = Qe),
                            (Ye.layers = function (t, e, i) {
                                return new Xe(t, e, i);
                            }),
                            (Ye.zoom = function (t) {
                                return new Je(t);
                            }),
                            (Ye.scale = function (t) {
                                return new $e(t);
                            }),
                            (Ye.attribution = function (t) {
                                return new Qe(t);
                            });
                        var ti = C.extend({
                            initialize: function (t) {
                                this._map = t;
                            },
                            enable: function () {
                                return (
                                    this._enabled ||
                                        ((this._enabled = !0), this.addHooks()),
                                    this
                                );
                            },
                            disable: function () {
                                return this._enabled
                                    ? ((this._enabled = !1),
                                      this.removeHooks(),
                                      this)
                                    : this;
                            },
                            enabled: function () {
                                return !!this._enabled;
                            },
                        });
                        ti.addTo = function (t, e) {
                            return t.addHandler(e, this), this;
                        };
                        var ei = {
                                Events: S,
                            },
                            ii = At.touch
                                ? "touchstart mousedown"
                                : "mousedown",
                            ni = Z.extend({
                                options: {
                                    clickTolerance: 3,
                                },
                                initialize: function (t, e, i, n) {
                                    d(this, n),
                                        (this._element = t),
                                        (this._dragStartTarget = e || t),
                                        (this._preventOutline = i);
                                },
                                enable: function () {
                                    this._enabled ||
                                        (Ce(
                                            this._dragStartTarget,
                                            ii,
                                            this._onDown,
                                            this
                                        ),
                                        (this._enabled = !0));
                                },
                                disable: function () {
                                    this._enabled &&
                                        (ni._dragging === this &&
                                            this.finishDrag(!0),
                                        Ze(
                                            this._dragStartTarget,
                                            ii,
                                            this._onDown,
                                            this
                                        ),
                                        (this._enabled = !1),
                                        (this._moved = !1));
                                },
                                _onDown: function (t) {
                                    if (
                                        this._enabled &&
                                        ((this._moved = !1),
                                        !ue(this._element, "leaflet-zoom-anim"))
                                    )
                                        if (t.touches && 1 !== t.touches.length)
                                            ni._dragging === this &&
                                                this.finishDrag();
                                        else if (
                                            !(
                                                ni._dragging ||
                                                t.shiftKey ||
                                                (1 !== t.which &&
                                                    1 !== t.button &&
                                                    !t.touches) ||
                                                ((ni._dragging = this),
                                                this._preventOutline &&
                                                    Pe(this._element),
                                                we(),
                                                Yt(),
                                                this._moving)
                                            )
                                        ) {
                                            this.fire("down");
                                            var e = t.touches
                                                    ? t.touches[0]
                                                    : t,
                                                i = Te(this._element);
                                            (this._startPoint = new E(
                                                e.clientX,
                                                e.clientY
                                            )),
                                                (this._startPos = ye(
                                                    this._element
                                                )),
                                                (this._parentScale = Me(i));
                                            var n = "mousedown" === t.type;
                                            Ce(
                                                document,
                                                n ? "mousemove" : "touchmove",
                                                this._onMove,
                                                this
                                            ),
                                                Ce(
                                                    document,
                                                    n
                                                        ? "mouseup"
                                                        : "touchend touchcancel",
                                                    this._onUp,
                                                    this
                                                );
                                        }
                                },
                                _onMove: function (t) {
                                    if (this._enabled)
                                        if (t.touches && t.touches.length > 1)
                                            this._moved = !0;
                                        else {
                                            var e =
                                                    t.touches &&
                                                    1 === t.touches.length
                                                        ? t.touches[0]
                                                        : t,
                                                i = new E(
                                                    e.clientX,
                                                    e.clientY
                                                )._subtract(this._startPoint);
                                            (i.x || i.y) &&
                                                (Math.abs(i.x) + Math.abs(i.y) <
                                                    this.options
                                                        .clickTolerance ||
                                                    ((i.x /=
                                                        this._parentScale.x),
                                                    (i.y /=
                                                        this._parentScale.y),
                                                    Ne(t),
                                                    this._moved ||
                                                        (this.fire("dragstart"),
                                                        (this._moved = !0),
                                                        ce(
                                                            document.body,
                                                            "leaflet-dragging"
                                                        ),
                                                        (this._lastTarget =
                                                            t.target ||
                                                            t.srcElement),
                                                        window.SVGElementInstance &&
                                                            this
                                                                ._lastTarget instanceof
                                                                window.SVGElementInstance &&
                                                            (this._lastTarget =
                                                                this._lastTarget.correspondingUseElement),
                                                        ce(
                                                            this._lastTarget,
                                                            "leaflet-drag-target"
                                                        )),
                                                    (this._newPos =
                                                        this._startPos.add(i)),
                                                    (this._moving = !0),
                                                    (this._lastEvent = t),
                                                    this._updatePosition()));
                                        }
                                },
                                _updatePosition: function () {
                                    var t = {
                                        originalEvent: this._lastEvent,
                                    };
                                    this.fire("predrag", t),
                                        ve(this._element, this._newPos),
                                        this.fire("drag", t);
                                },
                                _onUp: function () {
                                    this._enabled && this.finishDrag();
                                },
                                finishDrag: function (t) {
                                    de(document.body, "leaflet-dragging"),
                                        this._lastTarget &&
                                            (de(
                                                this._lastTarget,
                                                "leaflet-drag-target"
                                            ),
                                            (this._lastTarget = null)),
                                        Ze(
                                            document,
                                            "mousemove touchmove",
                                            this._onMove,
                                            this
                                        ),
                                        Ze(
                                            document,
                                            "mouseup touchend touchcancel",
                                            this._onUp,
                                            this
                                        ),
                                        be(),
                                        Xt();
                                    var e = this._moved && this._moving;
                                    (this._moving = !1),
                                        (ni._dragging = !1),
                                        e &&
                                            this.fire("dragend", {
                                                noInertia: t,
                                                distance:
                                                    this._newPos.distanceTo(
                                                        this._startPos
                                                    ),
                                            });
                                },
                            });
                        function oi(t, e, i) {
                            var n,
                                o,
                                s,
                                r,
                                a,
                                h,
                                l,
                                u,
                                c,
                                d = [1, 4, 2, 8];
                            for (o = 0, l = t.length; o < l; o++)
                                t[o]._code = pi(t[o], e);
                            for (r = 0; r < 4; r++) {
                                for (
                                    u = d[r],
                                        n = [],
                                        o = 0,
                                        s = (l = t.length) - 1;
                                    o < l;
                                    s = o++
                                )
                                    (a = t[o]),
                                        (h = t[s]),
                                        a._code & u
                                            ? h._code & u ||
                                              (((c = _i(h, a, u, e, i))._code =
                                                  pi(c, e)),
                                              n.push(c))
                                            : (h._code & u &&
                                                  (((c = _i(
                                                      h,
                                                      a,
                                                      u,
                                                      e,
                                                      i
                                                  ))._code = pi(c, e)),
                                                  n.push(c)),
                                              n.push(a));
                                t = n;
                            }
                            return t;
                        }
                        function si(t, e) {
                            var i, n, o, s, r, a, h, l, u;
                            if (!t || 0 === t.length)
                                throw new Error("latlngs not passed");
                            gi(t) ||
                                (console.warn(
                                    "latlngs are not flat! Only the first ring will be used"
                                ),
                                (t = t[0]));
                            var c = D([0, 0]),
                                d = R(t);
                            d.getNorthWest().distanceTo(d.getSouthWest()) *
                                d.getNorthEast().distanceTo(d.getNorthWest()) <
                                1700 && (c = ri(t));
                            var _ = t.length,
                                p = [];
                            for (i = 0; i < _; i++) {
                                var m = D(t[i]);
                                p.push(
                                    e.project(D([m.lat - c.lat, m.lng - c.lng]))
                                );
                            }
                            for (
                                a = h = l = 0, i = 0, n = _ - 1;
                                i < _;
                                n = i++
                            )
                                (o = p[i]),
                                    (s = p[n]),
                                    (r = o.y * s.x - s.y * o.x),
                                    (h += (o.x + s.x) * r),
                                    (l += (o.y + s.y) * r),
                                    (a += 3 * r);
                            u = 0 === a ? p[0] : [h / a, l / a];
                            var f = e.unproject(O(u));
                            return D([f.lat + c.lat, f.lng + c.lng]);
                        }
                        function ri(t) {
                            for (
                                var e = 0, i = 0, n = 0, o = 0;
                                o < t.length;
                                o++
                            ) {
                                var s = D(t[o]);
                                (e += s.lat), (i += s.lng), n++;
                            }
                            return D([e / n, i / n]);
                        }
                        var ai,
                            hi = {
                                __proto__: null,
                                clipPolygon: oi,
                                polygonCenter: si,
                                centroid: ri,
                            };
                        function li(t, e) {
                            if (!e || !t.length) return t.slice();
                            var i = e * e;
                            return (function (t, e) {
                                var i = t.length,
                                    n = new (
                                        typeof Uint8Array != void 0 + ""
                                            ? Uint8Array
                                            : Array
                                    )(i);
                                (n[0] = n[i - 1] = 1), ci(t, n, e, 0, i - 1);
                                var o,
                                    s = [];
                                for (o = 0; o < i; o++) n[o] && s.push(t[o]);
                                return s;
                            })(
                                (t = (function (t, e) {
                                    for (
                                        var i = [t[0]],
                                            n = 1,
                                            o = 0,
                                            s = t.length;
                                        n < s;
                                        n++
                                    )
                                        mi(t[n], t[o]) > e &&
                                            (i.push(t[n]), (o = n));
                                    return o < s - 1 && i.push(t[s - 1]), i;
                                })(t, i)),
                                i
                            );
                        }
                        function ui(t, e, i) {
                            return Math.sqrt(fi(t, e, i, !0));
                        }
                        function ci(t, e, i, n, o) {
                            var s,
                                r,
                                a,
                                h = 0;
                            for (r = n + 1; r <= o - 1; r++)
                                (a = fi(t[r], t[n], t[o], !0)) > h &&
                                    ((s = r), (h = a));
                            h > i &&
                                ((e[s] = 1),
                                ci(t, e, i, n, s),
                                ci(t, e, i, s, o));
                        }
                        function di(t, e, i, n, o) {
                            var s,
                                r,
                                a,
                                h = n ? ai : pi(t, i),
                                l = pi(e, i);
                            for (ai = l; ; ) {
                                if (!(h | l)) return [t, e];
                                if (h & l) return !1;
                                (a = pi((r = _i(t, e, (s = h || l), i, o)), i)),
                                    s === h
                                        ? ((t = r), (h = a))
                                        : ((e = r), (l = a));
                            }
                        }
                        function _i(t, e, i, n, o) {
                            var s,
                                r,
                                a = e.x - t.x,
                                h = e.y - t.y,
                                l = n.min,
                                u = n.max;
                            return (
                                8 & i
                                    ? ((s = t.x + (a * (u.y - t.y)) / h),
                                      (r = u.y))
                                    : 4 & i
                                    ? ((s = t.x + (a * (l.y - t.y)) / h),
                                      (r = l.y))
                                    : 2 & i
                                    ? ((s = u.x),
                                      (r = t.y + (h * (u.x - t.x)) / a))
                                    : 1 & i &&
                                      ((s = l.x),
                                      (r = t.y + (h * (l.x - t.x)) / a)),
                                new E(s, r, o)
                            );
                        }
                        function pi(t, e) {
                            var i = 0;
                            return (
                                t.x < e.min.x
                                    ? (i |= 1)
                                    : t.x > e.max.x && (i |= 2),
                                t.y < e.min.y
                                    ? (i |= 4)
                                    : t.y > e.max.y && (i |= 8),
                                i
                            );
                        }
                        function mi(t, e) {
                            var i = e.x - t.x,
                                n = e.y - t.y;
                            return i * i + n * n;
                        }
                        function fi(t, e, i, n) {
                            var o,
                                s = e.x,
                                r = e.y,
                                a = i.x - s,
                                h = i.y - r,
                                l = a * a + h * h;
                            return (
                                l > 0 &&
                                    ((o = ((t.x - s) * a + (t.y - r) * h) / l) >
                                    1
                                        ? ((s = i.x), (r = i.y))
                                        : o > 0 &&
                                          ((s += a * o), (r += h * o))),
                                (a = t.x - s),
                                (h = t.y - r),
                                n ? a * a + h * h : new E(s, r)
                            );
                        }
                        function gi(t) {
                            return (
                                !f(t[0]) ||
                                ("object" != typeof t[0][0] &&
                                    void 0 !== t[0][0])
                            );
                        }
                        function vi(t) {
                            return (
                                console.warn(
                                    "Deprecated use of _flat, please use L.LineUtil.isFlat instead."
                                ),
                                gi(t)
                            );
                        }
                        function yi(t, e) {
                            var i, n, o, s, r, a, h, l;
                            if (!t || 0 === t.length)
                                throw new Error("latlngs not passed");
                            gi(t) ||
                                (console.warn(
                                    "latlngs are not flat! Only the first ring will be used"
                                ),
                                (t = t[0]));
                            var u = D([0, 0]),
                                c = R(t);
                            c.getNorthWest().distanceTo(c.getSouthWest()) *
                                c.getNorthEast().distanceTo(c.getNorthWest()) <
                                1700 && (u = ri(t));
                            var d = t.length,
                                _ = [];
                            for (i = 0; i < d; i++) {
                                var p = D(t[i]);
                                _.push(
                                    e.project(D([p.lat - u.lat, p.lng - u.lng]))
                                );
                            }
                            for (i = 0, n = 0; i < d - 1; i++)
                                n += _[i].distanceTo(_[i + 1]) / 2;
                            if (0 === n) l = _[0];
                            else
                                for (i = 0, s = 0; i < d - 1; i++)
                                    if (
                                        ((r = _[i]),
                                        (a = _[i + 1]),
                                        (s += o = r.distanceTo(a)) > n)
                                    ) {
                                        (h = (s - n) / o),
                                            (l = [
                                                a.x - h * (a.x - r.x),
                                                a.y - h * (a.y - r.y),
                                            ]);
                                        break;
                                    }
                            var m = e.unproject(O(l));
                            return D([m.lat + u.lat, m.lng + u.lng]);
                        }
                        var xi = {
                                __proto__: null,
                                simplify: li,
                                pointToSegmentDistance: ui,
                                closestPointOnSegment: function (t, e, i) {
                                    return fi(t, e, i);
                                },
                                clipSegment: di,
                                _getEdgeIntersection: _i,
                                _getBitCode: pi,
                                _sqClosestPointOnSegment: fi,
                                isFlat: gi,
                                _flat: vi,
                                polylineCenter: yi,
                            },
                            wi = {
                                project: function (t) {
                                    return new E(t.lng, t.lat);
                                },
                                unproject: function (t) {
                                    return new N(t.y, t.x);
                                },
                                bounds: new A([-180, -90], [180, 90]),
                            },
                            bi = {
                                R: 6378137,
                                R_MINOR: 6356752.314245179,
                                bounds: new A(
                                    [-20037508.34279, -15496570.73972],
                                    [20037508.34279, 18764656.23138]
                                ),
                                project: function (t) {
                                    var e = Math.PI / 180,
                                        i = this.R,
                                        n = t.lat * e,
                                        o = this.R_MINOR / i,
                                        s = Math.sqrt(1 - o * o),
                                        r = s * Math.sin(n),
                                        a =
                                            Math.tan(Math.PI / 4 - n / 2) /
                                            Math.pow((1 - r) / (1 + r), s / 2);
                                    return (
                                        (n = -i * Math.log(Math.max(a, 1e-10))),
                                        new E(t.lng * e * i, n)
                                    );
                                },
                                unproject: function (t) {
                                    for (
                                        var e,
                                            i = 180 / Math.PI,
                                            n = this.R,
                                            o = this.R_MINOR / n,
                                            s = Math.sqrt(1 - o * o),
                                            r = Math.exp(-t.y / n),
                                            a = Math.PI / 2 - 2 * Math.atan(r),
                                            h = 0,
                                            l = 0.1;
                                        h < 15 && Math.abs(l) > 1e-7;
                                        h++
                                    )
                                        (e = s * Math.sin(a)),
                                            (e = Math.pow(
                                                (1 - e) / (1 + e),
                                                s / 2
                                            )),
                                            (a += l =
                                                Math.PI / 2 -
                                                2 * Math.atan(r * e) -
                                                a);
                                    return new N(a * i, (t.x * i) / n);
                                },
                            },
                            Pi = {
                                __proto__: null,
                                LonLat: wi,
                                Mercator: bi,
                                SphericalMercator: U,
                            },
                            Li = e({}, F, {
                                code: "EPSG:3395",
                                projection: bi,
                                transformation: (function () {
                                    var t = 0.5 / (Math.PI * bi.R);
                                    return q(t, 0.5, -t, 0.5);
                                })(),
                            }),
                            Ti = e({}, F, {
                                code: "EPSG:4326",
                                projection: wi,
                                transformation: q(1 / 180, 1, -1 / 180, 0.5),
                            }),
                            Mi = e({}, H, {
                                projection: wi,
                                transformation: q(1, 0, -1, 0),
                                scale: function (t) {
                                    return Math.pow(2, t);
                                },
                                zoom: function (t) {
                                    return Math.log(t) / Math.LN2;
                                },
                                distance: function (t, e) {
                                    var i = e.lng - t.lng,
                                        n = e.lat - t.lat;
                                    return Math.sqrt(i * i + n * n);
                                },
                                infinite: !0,
                            });
                        (H.Earth = F),
                            (H.EPSG3395 = Li),
                            (H.EPSG3857 = G),
                            (H.EPSG900913 = K),
                            (H.EPSG4326 = Ti),
                            (H.Simple = Mi);
                        var zi = Z.extend({
                            options: {
                                pane: "overlayPane",
                                attribution: null,
                                bubblingMouseEvents: !0,
                            },
                            addTo: function (t) {
                                return t.addLayer(this), this;
                            },
                            remove: function () {
                                return this.removeFrom(
                                    this._map || this._mapToAdd
                                );
                            },
                            removeFrom: function (t) {
                                return t && t.removeLayer(this), this;
                            },
                            getPane: function (t) {
                                return this._map.getPane(
                                    t ? this.options[t] || t : this.options.pane
                                );
                            },
                            addInteractiveTarget: function (t) {
                                return (this._map._targets[s(t)] = this), this;
                            },
                            removeInteractiveTarget: function (t) {
                                return delete this._map._targets[s(t)], this;
                            },
                            getAttribution: function () {
                                return this.options.attribution;
                            },
                            _layerAdd: function (t) {
                                var e = t.target;
                                if (e.hasLayer(this)) {
                                    if (
                                        ((this._map = e),
                                        (this._zoomAnimated = e._zoomAnimated),
                                        this.getEvents)
                                    ) {
                                        var i = this.getEvents();
                                        e.on(i, this),
                                            this.once(
                                                "remove",
                                                function () {
                                                    e.off(i, this);
                                                },
                                                this
                                            );
                                    }
                                    this.onAdd(e),
                                        this.fire("add"),
                                        e.fire("layeradd", {
                                            layer: this,
                                        });
                                }
                            },
                        });
                        Ge.include({
                            addLayer: function (t) {
                                if (!t._layerAdd)
                                    throw new Error(
                                        "The provided object is not a Layer."
                                    );
                                var e = s(t);
                                return (
                                    this._layers[e] ||
                                        ((this._layers[e] = t),
                                        (t._mapToAdd = this),
                                        t.beforeAdd && t.beforeAdd(this),
                                        this.whenReady(t._layerAdd, t)),
                                    this
                                );
                            },
                            removeLayer: function (t) {
                                var e = s(t);
                                return this._layers[e]
                                    ? (this._loaded && t.onRemove(this),
                                      delete this._layers[e],
                                      this._loaded &&
                                          (this.fire("layerremove", {
                                              layer: t,
                                          }),
                                          t.fire("remove")),
                                      (t._map = t._mapToAdd = null),
                                      this)
                                    : this;
                            },
                            hasLayer: function (t) {
                                return s(t) in this._layers;
                            },
                            eachLayer: function (t, e) {
                                for (var i in this._layers)
                                    t.call(e, this._layers[i]);
                                return this;
                            },
                            _addLayers: function (t) {
                                for (
                                    var e = 0,
                                        i = (t = t ? (f(t) ? t : [t]) : [])
                                            .length;
                                    e < i;
                                    e++
                                )
                                    this.addLayer(t[e]);
                            },
                            _addZoomLimit: function (t) {
                                (isNaN(t.options.maxZoom) &&
                                    isNaN(t.options.minZoom)) ||
                                    ((this._zoomBoundLayers[s(t)] = t),
                                    this._updateZoomLevels());
                            },
                            _removeZoomLimit: function (t) {
                                var e = s(t);
                                this._zoomBoundLayers[e] &&
                                    (delete this._zoomBoundLayers[e],
                                    this._updateZoomLevels());
                            },
                            _updateZoomLevels: function () {
                                var t = 1 / 0,
                                    e = -1 / 0,
                                    i = this._getZoomSpan();
                                for (var n in this._zoomBoundLayers) {
                                    var o = this._zoomBoundLayers[n].options;
                                    (t =
                                        void 0 === o.minZoom
                                            ? t
                                            : Math.min(t, o.minZoom)),
                                        (e =
                                            void 0 === o.maxZoom
                                                ? e
                                                : Math.max(e, o.maxZoom));
                                }
                                (this._layersMaxZoom =
                                    e === -1 / 0 ? void 0 : e),
                                    (this._layersMinZoom =
                                        t === 1 / 0 ? void 0 : t),
                                    i !== this._getZoomSpan() &&
                                        this.fire("zoomlevelschange"),
                                    void 0 === this.options.maxZoom &&
                                        this._layersMaxZoom &&
                                        this.getZoom() > this._layersMaxZoom &&
                                        this.setZoom(this._layersMaxZoom),
                                    void 0 === this.options.minZoom &&
                                        this._layersMinZoom &&
                                        this.getZoom() < this._layersMinZoom &&
                                        this.setZoom(this._layersMinZoom);
                            },
                        });
                        var Ci = zi.extend({
                                initialize: function (t, e) {
                                    var i, n;
                                    if ((d(this, e), (this._layers = {}), t))
                                        for (i = 0, n = t.length; i < n; i++)
                                            this.addLayer(t[i]);
                                },
                                addLayer: function (t) {
                                    var e = this.getLayerId(t);
                                    return (
                                        (this._layers[e] = t),
                                        this._map && this._map.addLayer(t),
                                        this
                                    );
                                },
                                removeLayer: function (t) {
                                    var e =
                                        t in this._layers
                                            ? t
                                            : this.getLayerId(t);
                                    return (
                                        this._map &&
                                            this._layers[e] &&
                                            this._map.removeLayer(
                                                this._layers[e]
                                            ),
                                        delete this._layers[e],
                                        this
                                    );
                                },
                                hasLayer: function (t) {
                                    return (
                                        ("number" == typeof t
                                            ? t
                                            : this.getLayerId(t)) in
                                        this._layers
                                    );
                                },
                                clearLayers: function () {
                                    return this.eachLayer(
                                        this.removeLayer,
                                        this
                                    );
                                },
                                invoke: function (t) {
                                    var e,
                                        i,
                                        n = Array.prototype.slice.call(
                                            arguments,
                                            1
                                        );
                                    for (e in this._layers)
                                        (i = this._layers[e])[t] &&
                                            i[t].apply(i, n);
                                    return this;
                                },
                                onAdd: function (t) {
                                    this.eachLayer(t.addLayer, t);
                                },
                                onRemove: function (t) {
                                    this.eachLayer(t.removeLayer, t);
                                },
                                eachLayer: function (t, e) {
                                    for (var i in this._layers)
                                        t.call(e, this._layers[i]);
                                    return this;
                                },
                                getLayer: function (t) {
                                    return this._layers[t];
                                },
                                getLayers: function () {
                                    var t = [];
                                    return this.eachLayer(t.push, t), t;
                                },
                                setZIndex: function (t) {
                                    return this.invoke("setZIndex", t);
                                },
                                getLayerId: function (t) {
                                    return s(t);
                                },
                            }),
                            Si = Ci.extend({
                                addLayer: function (t) {
                                    return this.hasLayer(t)
                                        ? this
                                        : (t.addEventParent(this),
                                          Ci.prototype.addLayer.call(this, t),
                                          this.fire("layeradd", {
                                              layer: t,
                                          }));
                                },
                                removeLayer: function (t) {
                                    return this.hasLayer(t)
                                        ? (t in this._layers &&
                                              (t = this._layers[t]),
                                          t.removeEventParent(this),
                                          Ci.prototype.removeLayer.call(
                                              this,
                                              t
                                          ),
                                          this.fire("layerremove", {
                                              layer: t,
                                          }))
                                        : this;
                                },
                                setStyle: function (t) {
                                    return this.invoke("setStyle", t);
                                },
                                bringToFront: function () {
                                    return this.invoke("bringToFront");
                                },
                                bringToBack: function () {
                                    return this.invoke("bringToBack");
                                },
                                getBounds: function () {
                                    var t = new I();
                                    for (var e in this._layers) {
                                        var i = this._layers[e];
                                        t.extend(
                                            i.getBounds
                                                ? i.getBounds()
                                                : i.getLatLng()
                                        );
                                    }
                                    return t;
                                },
                            }),
                            Zi = C.extend({
                                options: {
                                    popupAnchor: [0, 0],
                                    tooltipAnchor: [0, 0],
                                    crossOrigin: !1,
                                },
                                initialize: function (t) {
                                    d(this, t);
                                },
                                createIcon: function (t) {
                                    return this._createIcon("icon", t);
                                },
                                createShadow: function (t) {
                                    return this._createIcon("shadow", t);
                                },
                                _createIcon: function (t, e) {
                                    var i = this._getIconUrl(t);
                                    if (!i) {
                                        if ("icon" === t)
                                            throw new Error(
                                                "iconUrl not set in Icon options (see the docs)."
                                            );
                                        return null;
                                    }
                                    var n = this._createImg(
                                        i,
                                        e && "IMG" === e.tagName ? e : null
                                    );
                                    return (
                                        this._setIconStyles(n, t),
                                        (this.options.crossOrigin ||
                                            "" === this.options.crossOrigin) &&
                                            (n.crossOrigin =
                                                !0 === this.options.crossOrigin
                                                    ? ""
                                                    : this.options.crossOrigin),
                                        n
                                    );
                                },
                                _setIconStyles: function (t, e) {
                                    var i = this.options,
                                        n = i[e + "Size"];
                                    "number" == typeof n && (n = [n, n]);
                                    var o = O(n),
                                        s = O(
                                            ("shadow" === e &&
                                                i.shadowAnchor) ||
                                                i.iconAnchor ||
                                                (o && o.divideBy(2, !0))
                                        );
                                    (t.className =
                                        "leaflet-marker-" +
                                        e +
                                        " " +
                                        (i.className || "")),
                                        s &&
                                            ((t.style.marginLeft = -s.x + "px"),
                                            (t.style.marginTop = -s.y + "px")),
                                        o &&
                                            ((t.style.width = o.x + "px"),
                                            (t.style.height = o.y + "px"));
                                },
                                _createImg: function (t, e) {
                                    return (
                                        ((e =
                                            e ||
                                            document.createElement("img")).src =
                                            t),
                                        e
                                    );
                                },
                                _getIconUrl: function (t) {
                                    return (
                                        (At.retina &&
                                            this.options[t + "RetinaUrl"]) ||
                                        this.options[t + "Url"]
                                    );
                                },
                            });
                        var Ei = Zi.extend({
                                options: {
                                    iconUrl: "marker-icon.png",
                                    iconRetinaUrl: "marker-icon-2x.png",
                                    shadowUrl: "marker-shadow.png",
                                    iconSize: [25, 41],
                                    iconAnchor: [12, 41],
                                    popupAnchor: [1, -34],
                                    tooltipAnchor: [16, -28],
                                    shadowSize: [41, 41],
                                },
                                _getIconUrl: function (t) {
                                    return (
                                        "string" != typeof Ei.imagePath &&
                                            (Ei.imagePath =
                                                this._detectIconPath()),
                                        (this.options.imagePath ||
                                            Ei.imagePath) +
                                            Zi.prototype._getIconUrl.call(
                                                this,
                                                t
                                            )
                                    );
                                },
                                _stripUrl: function (t) {
                                    var e = function (t, e, i) {
                                        var n = e.exec(t);
                                        return n && n[i];
                                    };
                                    return (
                                        (t = e(
                                            t,
                                            /^url\((['"])?(.+)\1\)$/,
                                            2
                                        )) && e(t, /^(.*)marker-icon\.png$/, 1)
                                    );
                                },
                                _detectIconPath: function () {
                                    var t = se(
                                            "div",
                                            "leaflet-default-icon-path",
                                            document.body
                                        ),
                                        e =
                                            oe(t, "background-image") ||
                                            oe(t, "backgroundImage");
                                    if (
                                        (document.body.removeChild(t),
                                        (e = this._stripUrl(e)))
                                    )
                                        return e;
                                    var i = document.querySelector(
                                        'link[href$="leaflet.css"]'
                                    );
                                    return i
                                        ? i.href.substring(
                                              0,
                                              i.href.length - 11 - 1
                                          )
                                        : "";
                                },
                            }),
                            ki = ti.extend({
                                initialize: function (t) {
                                    this._marker = t;
                                },
                                addHooks: function () {
                                    var t = this._marker._icon;
                                    this._draggable ||
                                        (this._draggable = new ni(t, t, !0)),
                                        this._draggable
                                            .on(
                                                {
                                                    dragstart:
                                                        this._onDragStart,
                                                    predrag: this._onPreDrag,
                                                    drag: this._onDrag,
                                                    dragend: this._onDragEnd,
                                                },
                                                this
                                            )
                                            .enable(),
                                        ce(t, "leaflet-marker-draggable");
                                },
                                removeHooks: function () {
                                    this._draggable
                                        .off(
                                            {
                                                dragstart: this._onDragStart,
                                                predrag: this._onPreDrag,
                                                drag: this._onDrag,
                                                dragend: this._onDragEnd,
                                            },
                                            this
                                        )
                                        .disable(),
                                        this._marker._icon &&
                                            de(
                                                this._marker._icon,
                                                "leaflet-marker-draggable"
                                            );
                                },
                                moved: function () {
                                    return (
                                        this._draggable &&
                                        this._draggable._moved
                                    );
                                },
                                _adjustPan: function (t) {
                                    var e = this._marker,
                                        i = e._map,
                                        n = this._marker.options.autoPanSpeed,
                                        o = this._marker.options.autoPanPadding,
                                        s = ye(e._icon),
                                        r = i.getPixelBounds(),
                                        a = i.getPixelOrigin(),
                                        h = B(
                                            r.min._subtract(a).add(o),
                                            r.max._subtract(a).subtract(o)
                                        );
                                    if (!h.contains(s)) {
                                        var l = O(
                                            (Math.max(h.max.x, s.x) - h.max.x) /
                                                (r.max.x - h.max.x) -
                                                (Math.min(h.min.x, s.x) -
                                                    h.min.x) /
                                                    (r.min.x - h.min.x),
                                            (Math.max(h.max.y, s.y) - h.max.y) /
                                                (r.max.y - h.max.y) -
                                                (Math.min(h.min.y, s.y) -
                                                    h.min.y) /
                                                    (r.min.y - h.min.y)
                                        ).multiplyBy(n);
                                        i.panBy(l, {
                                            animate: !1,
                                        }),
                                            this._draggable._newPos._add(l),
                                            this._draggable._startPos._add(l),
                                            ve(
                                                e._icon,
                                                this._draggable._newPos
                                            ),
                                            this._onDrag(t),
                                            (this._panRequest = T(
                                                this._adjustPan.bind(this, t)
                                            ));
                                    }
                                },
                                _onDragStart: function () {
                                    (this._oldLatLng =
                                        this._marker.getLatLng()),
                                        this._marker.closePopup &&
                                            this._marker.closePopup(),
                                        this._marker
                                            .fire("movestart")
                                            .fire("dragstart");
                                },
                                _onPreDrag: function (t) {
                                    this._marker.options.autoPan &&
                                        (M(this._panRequest),
                                        (this._panRequest = T(
                                            this._adjustPan.bind(this, t)
                                        )));
                                },
                                _onDrag: function (t) {
                                    var e = this._marker,
                                        i = e._shadow,
                                        n = ye(e._icon),
                                        o = e._map.layerPointToLatLng(n);
                                    i && ve(i, n),
                                        (e._latlng = o),
                                        (t.latlng = o),
                                        (t.oldLatLng = this._oldLatLng),
                                        e.fire("move", t).fire("drag", t);
                                },
                                _onDragEnd: function (t) {
                                    M(this._panRequest),
                                        delete this._oldLatLng,
                                        this._marker
                                            .fire("moveend")
                                            .fire("dragend", t);
                                },
                            }),
                            Oi = zi.extend({
                                options: {
                                    icon: new Ei(),
                                    interactive: !0,
                                    keyboard: !0,
                                    title: "",
                                    alt: "Marker",
                                    zIndexOffset: 0,
                                    opacity: 1,
                                    riseOnHover: !1,
                                    riseOffset: 250,
                                    pane: "markerPane",
                                    shadowPane: "shadowPane",
                                    bubblingMouseEvents: !1,
                                    autoPanOnFocus: !0,
                                    draggable: !1,
                                    autoPan: !1,
                                    autoPanPadding: [50, 50],
                                    autoPanSpeed: 10,
                                },
                                initialize: function (t, e) {
                                    d(this, e), (this._latlng = D(t));
                                },
                                onAdd: function (t) {
                                    (this._zoomAnimated =
                                        this._zoomAnimated &&
                                        t.options.markerZoomAnimation),
                                        this._zoomAnimated &&
                                            t.on(
                                                "zoomanim",
                                                this._animateZoom,
                                                this
                                            ),
                                        this._initIcon(),
                                        this.update();
                                },
                                onRemove: function (t) {
                                    this.dragging &&
                                        this.dragging.enabled() &&
                                        ((this.options.draggable = !0),
                                        this.dragging.removeHooks()),
                                        delete this.dragging,
                                        this._zoomAnimated &&
                                            t.off(
                                                "zoomanim",
                                                this._animateZoom,
                                                this
                                            ),
                                        this._removeIcon(),
                                        this._removeShadow();
                                },
                                getEvents: function () {
                                    return {
                                        zoom: this.update,
                                        viewreset: this.update,
                                    };
                                },
                                getLatLng: function () {
                                    return this._latlng;
                                },
                                setLatLng: function (t) {
                                    var e = this._latlng;
                                    return (
                                        (this._latlng = D(t)),
                                        this.update(),
                                        this.fire("move", {
                                            oldLatLng: e,
                                            latlng: this._latlng,
                                        })
                                    );
                                },
                                setZIndexOffset: function (t) {
                                    return (
                                        (this.options.zIndexOffset = t),
                                        this.update()
                                    );
                                },
                                getIcon: function () {
                                    return this.options.icon;
                                },
                                setIcon: function (t) {
                                    return (
                                        (this.options.icon = t),
                                        this._map &&
                                            (this._initIcon(), this.update()),
                                        this._popup &&
                                            this.bindPopup(
                                                this._popup,
                                                this._popup.options
                                            ),
                                        this
                                    );
                                },
                                getElement: function () {
                                    return this._icon;
                                },
                                update: function () {
                                    if (this._icon && this._map) {
                                        var t = this._map
                                            .latLngToLayerPoint(this._latlng)
                                            .round();
                                        this._setPos(t);
                                    }
                                    return this;
                                },
                                _initIcon: function () {
                                    var t = this.options,
                                        e =
                                            "leaflet-zoom-" +
                                            (this._zoomAnimated
                                                ? "animated"
                                                : "hide"),
                                        i = t.icon.createIcon(this._icon),
                                        n = !1;
                                    i !== this._icon &&
                                        (this._icon && this._removeIcon(),
                                        (n = !0),
                                        t.title && (i.title = t.title),
                                        "IMG" === i.tagName &&
                                            (i.alt = t.alt || "")),
                                        ce(i, e),
                                        t.keyboard &&
                                            ((i.tabIndex = "0"),
                                            i.setAttribute("role", "button")),
                                        (this._icon = i),
                                        t.riseOnHover &&
                                            this.on({
                                                mouseover: this._bringToFront,
                                                mouseout: this._resetZIndex,
                                            }),
                                        this.options.autoPanOnFocus &&
                                            Ce(
                                                i,
                                                "focus",
                                                this._panOnFocus,
                                                this
                                            );
                                    var o = t.icon.createShadow(this._shadow),
                                        s = !1;
                                    o !== this._shadow &&
                                        (this._removeShadow(), (s = !0)),
                                        o && (ce(o, e), (o.alt = "")),
                                        (this._shadow = o),
                                        t.opacity < 1 && this._updateOpacity(),
                                        n &&
                                            this.getPane().appendChild(
                                                this._icon
                                            ),
                                        this._initInteraction(),
                                        o &&
                                            s &&
                                            this.getPane(
                                                t.shadowPane
                                            ).appendChild(this._shadow);
                                },
                                _removeIcon: function () {
                                    this.options.riseOnHover &&
                                        this.off({
                                            mouseover: this._bringToFront,
                                            mouseout: this._resetZIndex,
                                        }),
                                        this.options.autoPanOnFocus &&
                                            Ze(
                                                this._icon,
                                                "focus",
                                                this._panOnFocus,
                                                this
                                            ),
                                        re(this._icon),
                                        this.removeInteractiveTarget(
                                            this._icon
                                        ),
                                        (this._icon = null);
                                },
                                _removeShadow: function () {
                                    this._shadow && re(this._shadow),
                                        (this._shadow = null);
                                },
                                _setPos: function (t) {
                                    this._icon && ve(this._icon, t),
                                        this._shadow && ve(this._shadow, t),
                                        (this._zIndex =
                                            t.y + this.options.zIndexOffset),
                                        this._resetZIndex();
                                },
                                _updateZIndex: function (t) {
                                    this._icon &&
                                        (this._icon.style.zIndex =
                                            this._zIndex + t);
                                },
                                _animateZoom: function (t) {
                                    var e = this._map
                                        ._latLngToNewLayerPoint(
                                            this._latlng,
                                            t.zoom,
                                            t.center
                                        )
                                        .round();
                                    this._setPos(e);
                                },
                                _initInteraction: function () {
                                    if (
                                        this.options.interactive &&
                                        (ce(this._icon, "leaflet-interactive"),
                                        this.addInteractiveTarget(this._icon),
                                        ki)
                                    ) {
                                        var t = this.options.draggable;
                                        this.dragging &&
                                            ((t = this.dragging.enabled()),
                                            this.dragging.disable()),
                                            (this.dragging = new ki(this)),
                                            t && this.dragging.enable();
                                    }
                                },
                                setOpacity: function (t) {
                                    return (
                                        (this.options.opacity = t),
                                        this._map && this._updateOpacity(),
                                        this
                                    );
                                },
                                _updateOpacity: function () {
                                    var t = this.options.opacity;
                                    this._icon && me(this._icon, t),
                                        this._shadow && me(this._shadow, t);
                                },
                                _bringToFront: function () {
                                    this._updateZIndex(this.options.riseOffset);
                                },
                                _resetZIndex: function () {
                                    this._updateZIndex(0);
                                },
                                _panOnFocus: function () {
                                    var t = this._map;
                                    if (t) {
                                        var e = this.options.icon.options,
                                            i = e.iconSize
                                                ? O(e.iconSize)
                                                : O(0, 0),
                                            n = e.iconAnchor
                                                ? O(e.iconAnchor)
                                                : O(0, 0);
                                        t.panInside(this._latlng, {
                                            paddingTopLeft: n,
                                            paddingBottomRight: i.subtract(n),
                                        });
                                    }
                                },
                                _getPopupAnchor: function () {
                                    return this.options.icon.options
                                        .popupAnchor;
                                },
                                _getTooltipAnchor: function () {
                                    return this.options.icon.options
                                        .tooltipAnchor;
                                },
                            });
                        var Ai = zi.extend({
                                options: {
                                    stroke: !0,
                                    color: "#3388ff",
                                    weight: 3,
                                    opacity: 1,
                                    lineCap: "round",
                                    lineJoin: "round",
                                    dashArray: null,
                                    dashOffset: null,
                                    fill: !1,
                                    fillColor: null,
                                    fillOpacity: 0.2,
                                    fillRule: "evenodd",
                                    interactive: !0,
                                    bubblingMouseEvents: !0,
                                },
                                beforeAdd: function (t) {
                                    this._renderer = t.getRenderer(this);
                                },
                                onAdd: function () {
                                    this._renderer._initPath(this),
                                        this._reset(),
                                        this._renderer._addPath(this);
                                },
                                onRemove: function () {
                                    this._renderer._removePath(this);
                                },
                                redraw: function () {
                                    return (
                                        this._map &&
                                            this._renderer._updatePath(this),
                                        this
                                    );
                                },
                                setStyle: function (t) {
                                    return (
                                        d(this, t),
                                        this._renderer &&
                                            (this._renderer._updateStyle(this),
                                            this.options.stroke &&
                                                t &&
                                                Object.prototype.hasOwnProperty.call(
                                                    t,
                                                    "weight"
                                                ) &&
                                                this._updateBounds()),
                                        this
                                    );
                                },
                                bringToFront: function () {
                                    return (
                                        this._renderer &&
                                            this._renderer._bringToFront(this),
                                        this
                                    );
                                },
                                bringToBack: function () {
                                    return (
                                        this._renderer &&
                                            this._renderer._bringToBack(this),
                                        this
                                    );
                                },
                                getElement: function () {
                                    return this._path;
                                },
                                _reset: function () {
                                    this._project(), this._update();
                                },
                                _clickTolerance: function () {
                                    return (
                                        (this.options.stroke
                                            ? this.options.weight / 2
                                            : 0) +
                                        (this._renderer.options.tolerance || 0)
                                    );
                                },
                            }),
                            Bi = Ai.extend({
                                options: {
                                    fill: !0,
                                    radius: 10,
                                },
                                initialize: function (t, e) {
                                    d(this, e),
                                        (this._latlng = D(t)),
                                        (this._radius = this.options.radius);
                                },
                                setLatLng: function (t) {
                                    var e = this._latlng;
                                    return (
                                        (this._latlng = D(t)),
                                        this.redraw(),
                                        this.fire("move", {
                                            oldLatLng: e,
                                            latlng: this._latlng,
                                        })
                                    );
                                },
                                getLatLng: function () {
                                    return this._latlng;
                                },
                                setRadius: function (t) {
                                    return (
                                        (this.options.radius = this._radius =
                                            t),
                                        this.redraw()
                                    );
                                },
                                getRadius: function () {
                                    return this._radius;
                                },
                                setStyle: function (t) {
                                    var e = (t && t.radius) || this._radius;
                                    return (
                                        Ai.prototype.setStyle.call(this, t),
                                        this.setRadius(e),
                                        this
                                    );
                                },
                                _project: function () {
                                    (this._point = this._map.latLngToLayerPoint(
                                        this._latlng
                                    )),
                                        this._updateBounds();
                                },
                                _updateBounds: function () {
                                    var t = this._radius,
                                        e = this._radiusY || t,
                                        i = this._clickTolerance(),
                                        n = [t + i, e + i];
                                    this._pxBounds = new A(
                                        this._point.subtract(n),
                                        this._point.add(n)
                                    );
                                },
                                _update: function () {
                                    this._map && this._updatePath();
                                },
                                _updatePath: function () {
                                    this._renderer._updateCircle(this);
                                },
                                _empty: function () {
                                    return (
                                        this._radius &&
                                        !this._renderer._bounds.intersects(
                                            this._pxBounds
                                        )
                                    );
                                },
                                _containsPoint: function (t) {
                                    return (
                                        t.distanceTo(this._point) <=
                                        this._radius + this._clickTolerance()
                                    );
                                },
                            });
                        var Ii = Bi.extend({
                            initialize: function (t, i, n) {
                                if (
                                    ("number" == typeof i &&
                                        (i = e({}, n, {
                                            radius: i,
                                        })),
                                    d(this, i),
                                    (this._latlng = D(t)),
                                    isNaN(this.options.radius))
                                )
                                    throw new Error(
                                        "Circle radius cannot be NaN"
                                    );
                                this._mRadius = this.options.radius;
                            },
                            setRadius: function (t) {
                                return (this._mRadius = t), this.redraw();
                            },
                            getRadius: function () {
                                return this._mRadius;
                            },
                            getBounds: function () {
                                var t = [
                                    this._radius,
                                    this._radiusY || this._radius,
                                ];
                                return new I(
                                    this._map.layerPointToLatLng(
                                        this._point.subtract(t)
                                    ),
                                    this._map.layerPointToLatLng(
                                        this._point.add(t)
                                    )
                                );
                            },
                            setStyle: Ai.prototype.setStyle,
                            _project: function () {
                                var t = this._latlng.lng,
                                    e = this._latlng.lat,
                                    i = this._map,
                                    n = i.options.crs;
                                if (n.distance === F.distance) {
                                    var o = Math.PI / 180,
                                        s = this._mRadius / F.R / o,
                                        r = i.project([e + s, t]),
                                        a = i.project([e - s, t]),
                                        h = r.add(a).divideBy(2),
                                        l = i.unproject(h).lat,
                                        u =
                                            Math.acos(
                                                (Math.cos(s * o) -
                                                    Math.sin(e * o) *
                                                        Math.sin(l * o)) /
                                                    (Math.cos(e * o) *
                                                        Math.cos(l * o))
                                            ) / o;
                                    (isNaN(u) || 0 === u) &&
                                        (u = s / Math.cos((Math.PI / 180) * e)),
                                        (this._point = h.subtract(
                                            i.getPixelOrigin()
                                        )),
                                        (this._radius = isNaN(u)
                                            ? 0
                                            : h.x - i.project([l, t - u]).x),
                                        (this._radiusY = h.y - r.y);
                                } else {
                                    var c = n.unproject(
                                        n
                                            .project(this._latlng)
                                            .subtract([this._mRadius, 0])
                                    );
                                    (this._point = i.latLngToLayerPoint(
                                        this._latlng
                                    )),
                                        (this._radius =
                                            this._point.x -
                                            i.latLngToLayerPoint(c).x);
                                }
                                this._updateBounds();
                            },
                        });
                        var Ri = Ai.extend({
                            options: {
                                smoothFactor: 1,
                                noClip: !1,
                            },
                            initialize: function (t, e) {
                                d(this, e), this._setLatLngs(t);
                            },
                            getLatLngs: function () {
                                return this._latlngs;
                            },
                            setLatLngs: function (t) {
                                return this._setLatLngs(t), this.redraw();
                            },
                            isEmpty: function () {
                                return !this._latlngs.length;
                            },
                            closestLayerPoint: function (t) {
                                for (
                                    var e,
                                        i,
                                        n = 1 / 0,
                                        o = null,
                                        s = fi,
                                        r = 0,
                                        a = this._parts.length;
                                    r < a;
                                    r++
                                )
                                    for (
                                        var h = this._parts[r],
                                            l = 1,
                                            u = h.length;
                                        l < u;
                                        l++
                                    ) {
                                        var c = s(
                                            t,
                                            (e = h[l - 1]),
                                            (i = h[l]),
                                            !0
                                        );
                                        c < n && ((n = c), (o = s(t, e, i)));
                                    }
                                return o && (o.distance = Math.sqrt(n)), o;
                            },
                            getCenter: function () {
                                if (!this._map)
                                    throw new Error(
                                        "Must add layer to map before using getCenter()"
                                    );
                                return yi(
                                    this._defaultShape(),
                                    this._map.options.crs
                                );
                            },
                            getBounds: function () {
                                return this._bounds;
                            },
                            addLatLng: function (t, e) {
                                return (
                                    (e = e || this._defaultShape()),
                                    (t = D(t)),
                                    e.push(t),
                                    this._bounds.extend(t),
                                    this.redraw()
                                );
                            },
                            _setLatLngs: function (t) {
                                (this._bounds = new I()),
                                    (this._latlngs = this._convertLatLngs(t));
                            },
                            _defaultShape: function () {
                                return gi(this._latlngs)
                                    ? this._latlngs
                                    : this._latlngs[0];
                            },
                            _convertLatLngs: function (t) {
                                for (
                                    var e = [], i = gi(t), n = 0, o = t.length;
                                    n < o;
                                    n++
                                )
                                    i
                                        ? ((e[n] = D(t[n])),
                                          this._bounds.extend(e[n]))
                                        : (e[n] = this._convertLatLngs(t[n]));
                                return e;
                            },
                            _project: function () {
                                var t = new A();
                                (this._rings = []),
                                    this._projectLatlngs(
                                        this._latlngs,
                                        this._rings,
                                        t
                                    ),
                                    this._bounds.isValid() &&
                                        t.isValid() &&
                                        ((this._rawPxBounds = t),
                                        this._updateBounds());
                            },
                            _updateBounds: function () {
                                var t = this._clickTolerance(),
                                    e = new E(t, t);
                                this._rawPxBounds &&
                                    (this._pxBounds = new A([
                                        this._rawPxBounds.min.subtract(e),
                                        this._rawPxBounds.max.add(e),
                                    ]));
                            },
                            _projectLatlngs: function (t, e, i) {
                                var n,
                                    o,
                                    s = t[0] instanceof N,
                                    r = t.length;
                                if (s) {
                                    for (o = [], n = 0; n < r; n++)
                                        (o[n] = this._map.latLngToLayerPoint(
                                            t[n]
                                        )),
                                            i.extend(o[n]);
                                    e.push(o);
                                } else
                                    for (n = 0; n < r; n++)
                                        this._projectLatlngs(t[n], e, i);
                            },
                            _clipPoints: function () {
                                var t = this._renderer._bounds;
                                if (
                                    ((this._parts = []),
                                    this._pxBounds &&
                                        this._pxBounds.intersects(t))
                                )
                                    if (this.options.noClip)
                                        this._parts = this._rings;
                                    else {
                                        var e,
                                            i,
                                            n,
                                            o,
                                            s,
                                            r,
                                            a,
                                            h = this._parts;
                                        for (
                                            e = 0,
                                                n = 0,
                                                o = this._rings.length;
                                            e < o;
                                            e++
                                        )
                                            for (
                                                i = 0,
                                                    s = (a = this._rings[e])
                                                        .length;
                                                i < s - 1;
                                                i++
                                            )
                                                (r = di(
                                                    a[i],
                                                    a[i + 1],
                                                    t,
                                                    i,
                                                    !0
                                                )) &&
                                                    ((h[n] = h[n] || []),
                                                    h[n].push(r[0]),
                                                    (r[1] === a[i + 1] &&
                                                        i !== s - 2) ||
                                                        (h[n].push(r[1]), n++));
                                    }
                            },
                            _simplifyPoints: function () {
                                for (
                                    var t = this._parts,
                                        e = this.options.smoothFactor,
                                        i = 0,
                                        n = t.length;
                                    i < n;
                                    i++
                                )
                                    t[i] = li(t[i], e);
                            },
                            _update: function () {
                                this._map &&
                                    (this._clipPoints(),
                                    this._simplifyPoints(),
                                    this._updatePath());
                            },
                            _updatePath: function () {
                                this._renderer._updatePoly(this);
                            },
                            _containsPoint: function (t, e) {
                                var i,
                                    n,
                                    o,
                                    s,
                                    r,
                                    a,
                                    h = this._clickTolerance();
                                if (
                                    !this._pxBounds ||
                                    !this._pxBounds.contains(t)
                                )
                                    return !1;
                                for (i = 0, s = this._parts.length; i < s; i++)
                                    for (
                                        n = 0,
                                            o =
                                                (r = (a = this._parts[i])
                                                    .length) - 1;
                                        n < r;
                                        o = n++
                                    )
                                        if (
                                            (e || 0 !== n) &&
                                            ui(t, a[o], a[n]) <= h
                                        )
                                            return !0;
                                return !1;
                            },
                        });
                        Ri._flat = vi;
                        var Ni = Ri.extend({
                            options: {
                                fill: !0,
                            },
                            isEmpty: function () {
                                return (
                                    !this._latlngs.length ||
                                    !this._latlngs[0].length
                                );
                            },
                            getCenter: function () {
                                if (!this._map)
                                    throw new Error(
                                        "Must add layer to map before using getCenter()"
                                    );
                                return si(
                                    this._defaultShape(),
                                    this._map.options.crs
                                );
                            },
                            _convertLatLngs: function (t) {
                                var e = Ri.prototype._convertLatLngs.call(
                                        this,
                                        t
                                    ),
                                    i = e.length;
                                return (
                                    i >= 2 &&
                                        e[0] instanceof N &&
                                        e[0].equals(e[i - 1]) &&
                                        e.pop(),
                                    e
                                );
                            },
                            _setLatLngs: function (t) {
                                Ri.prototype._setLatLngs.call(this, t),
                                    gi(this._latlngs) &&
                                        (this._latlngs = [this._latlngs]);
                            },
                            _defaultShape: function () {
                                return gi(this._latlngs[0])
                                    ? this._latlngs[0]
                                    : this._latlngs[0][0];
                            },
                            _clipPoints: function () {
                                var t = this._renderer._bounds,
                                    e = this.options.weight,
                                    i = new E(e, e);
                                if (
                                    ((t = new A(
                                        t.min.subtract(i),
                                        t.max.add(i)
                                    )),
                                    (this._parts = []),
                                    this._pxBounds &&
                                        this._pxBounds.intersects(t))
                                )
                                    if (this.options.noClip)
                                        this._parts = this._rings;
                                    else
                                        for (
                                            var n,
                                                o = 0,
                                                s = this._rings.length;
                                            o < s;
                                            o++
                                        )
                                            (n = oi(this._rings[o], t, !0))
                                                .length && this._parts.push(n);
                            },
                            _updatePath: function () {
                                this._renderer._updatePoly(this, !0);
                            },
                            _containsPoint: function (t) {
                                var e,
                                    i,
                                    n,
                                    o,
                                    s,
                                    r,
                                    a,
                                    h,
                                    l = !1;
                                if (
                                    !this._pxBounds ||
                                    !this._pxBounds.contains(t)
                                )
                                    return !1;
                                for (o = 0, a = this._parts.length; o < a; o++)
                                    for (
                                        s = 0,
                                            r =
                                                (h = (e = this._parts[o])
                                                    .length) - 1;
                                        s < h;
                                        r = s++
                                    )
                                        (i = e[s]),
                                            (n = e[r]),
                                            i.y > t.y != n.y > t.y &&
                                                t.x <
                                                    ((n.x - i.x) *
                                                        (t.y - i.y)) /
                                                        (n.y - i.y) +
                                                        i.x &&
                                                (l = !l);
                                return (
                                    l ||
                                    Ri.prototype._containsPoint.call(
                                        this,
                                        t,
                                        !0
                                    )
                                );
                            },
                        });
                        var Di = Si.extend({
                            initialize: function (t, e) {
                                d(this, e),
                                    (this._layers = {}),
                                    t && this.addData(t);
                            },
                            addData: function (t) {
                                var e,
                                    i,
                                    n,
                                    o = f(t) ? t : t.features;
                                if (o) {
                                    for (e = 0, i = o.length; e < i; e++)
                                        ((n = o[e]).geometries ||
                                            n.geometry ||
                                            n.features ||
                                            n.coordinates) &&
                                            this.addData(n);
                                    return this;
                                }
                                var s = this.options;
                                if (s.filter && !s.filter(t)) return this;
                                var r = ji(t, s);
                                return r
                                    ? ((r.feature = Gi(t)),
                                      (r.defaultOptions = r.options),
                                      this.resetStyle(r),
                                      s.onEachFeature && s.onEachFeature(t, r),
                                      this.addLayer(r))
                                    : this;
                            },
                            resetStyle: function (t) {
                                return void 0 === t
                                    ? this.eachLayer(this.resetStyle, this)
                                    : ((t.options = e({}, t.defaultOptions)),
                                      this._setLayerStyle(
                                          t,
                                          this.options.style
                                      ),
                                      this);
                            },
                            setStyle: function (t) {
                                return this.eachLayer(function (e) {
                                    this._setLayerStyle(e, t);
                                }, this);
                            },
                            _setLayerStyle: function (t, e) {
                                t.setStyle &&
                                    ("function" == typeof e &&
                                        (e = e(t.feature)),
                                    t.setStyle(e));
                            },
                        });
                        function ji(t, e) {
                            var i,
                                n,
                                o,
                                s,
                                r = "Feature" === t.type ? t.geometry : t,
                                a = r ? r.coordinates : null,
                                h = [],
                                l = e && e.pointToLayer,
                                u = (e && e.coordsToLatLng) || Fi;
                            if (!a && !r) return null;
                            switch (r.type) {
                                case "Point":
                                    return Hi(l, t, (i = u(a)), e);
                                case "MultiPoint":
                                    for (o = 0, s = a.length; o < s; o++)
                                        (i = u(a[o])), h.push(Hi(l, t, i, e));
                                    return new Si(h);
                                case "LineString":
                                case "MultiLineString":
                                    return (
                                        (n = Wi(
                                            a,
                                            "LineString" === r.type ? 0 : 1,
                                            u
                                        )),
                                        new Ri(n, e)
                                    );
                                case "Polygon":
                                case "MultiPolygon":
                                    return (
                                        (n = Wi(
                                            a,
                                            "Polygon" === r.type ? 1 : 2,
                                            u
                                        )),
                                        new Ni(n, e)
                                    );
                                case "GeometryCollection":
                                    for (
                                        o = 0, s = r.geometries.length;
                                        o < s;
                                        o++
                                    ) {
                                        var c = ji(
                                            {
                                                geometry: r.geometries[o],
                                                type: "Feature",
                                                properties: t.properties,
                                            },
                                            e
                                        );
                                        c && h.push(c);
                                    }
                                    return new Si(h);
                                case "FeatureCollection":
                                    for (
                                        o = 0, s = r.features.length;
                                        o < s;
                                        o++
                                    ) {
                                        var d = ji(r.features[o], e);
                                        d && h.push(d);
                                    }
                                    return new Si(h);
                                default:
                                    throw new Error("Invalid GeoJSON object.");
                            }
                        }
                        function Hi(t, e, i, n) {
                            return t
                                ? t(e, i)
                                : new Oi(i, n && n.markersInheritOptions && n);
                        }
                        function Fi(t) {
                            return new N(t[1], t[0], t[2]);
                        }
                        function Wi(t, e, i) {
                            for (var n, o = [], s = 0, r = t.length; s < r; s++)
                                (n = e ? Wi(t[s], e - 1, i) : (i || Fi)(t[s])),
                                    o.push(n);
                            return o;
                        }
                        function Ui(t, e) {
                            return void 0 !== (t = D(t)).alt
                                ? [l(t.lng, e), l(t.lat, e), l(t.alt, e)]
                                : [l(t.lng, e), l(t.lat, e)];
                        }
                        function Vi(t, e, i, n) {
                            for (var o = [], s = 0, r = t.length; s < r; s++)
                                o.push(
                                    e
                                        ? Vi(t[s], gi(t[s]) ? 0 : e - 1, i, n)
                                        : Ui(t[s], n)
                                );
                            return (
                                !e && i && o.length > 0 && o.push(o[0].slice()),
                                o
                            );
                        }
                        function qi(t, i) {
                            return t.feature
                                ? e({}, t.feature, {
                                      geometry: i,
                                  })
                                : Gi(i);
                        }
                        function Gi(t) {
                            return "Feature" === t.type ||
                                "FeatureCollection" === t.type
                                ? t
                                : {
                                      type: "Feature",
                                      properties: {},
                                      geometry: t,
                                  };
                        }
                        var Ki = {
                            toGeoJSON: function (t) {
                                return qi(this, {
                                    type: "Point",
                                    coordinates: Ui(this.getLatLng(), t),
                                });
                            },
                        };
                        function Yi(t, e) {
                            return new Di(t, e);
                        }
                        Oi.include(Ki),
                            Ii.include(Ki),
                            Bi.include(Ki),
                            Ri.include({
                                toGeoJSON: function (t) {
                                    var e = !gi(this._latlngs);
                                    return qi(this, {
                                        type: (e ? "Multi" : "") + "LineString",
                                        coordinates: Vi(
                                            this._latlngs,
                                            e ? 1 : 0,
                                            !1,
                                            t
                                        ),
                                    });
                                },
                            }),
                            Ni.include({
                                toGeoJSON: function (t) {
                                    var e = !gi(this._latlngs),
                                        i = e && !gi(this._latlngs[0]),
                                        n = Vi(
                                            this._latlngs,
                                            i ? 2 : e ? 1 : 0,
                                            !0,
                                            t
                                        );
                                    return (
                                        e || (n = [n]),
                                        qi(this, {
                                            type:
                                                (i ? "Multi" : "") + "Polygon",
                                            coordinates: n,
                                        })
                                    );
                                },
                            }),
                            Ci.include({
                                toMultiPoint: function (t) {
                                    var e = [];
                                    return (
                                        this.eachLayer(function (i) {
                                            e.push(
                                                i.toGeoJSON(t).geometry
                                                    .coordinates
                                            );
                                        }),
                                        qi(this, {
                                            type: "MultiPoint",
                                            coordinates: e,
                                        })
                                    );
                                },
                                toGeoJSON: function (t) {
                                    var e =
                                        this.feature &&
                                        this.feature.geometry &&
                                        this.feature.geometry.type;
                                    if ("MultiPoint" === e)
                                        return this.toMultiPoint(t);
                                    var i = "GeometryCollection" === e,
                                        n = [];
                                    return (
                                        this.eachLayer(function (e) {
                                            if (e.toGeoJSON) {
                                                var o = e.toGeoJSON(t);
                                                if (i) n.push(o.geometry);
                                                else {
                                                    var s = Gi(o);
                                                    "FeatureCollection" ===
                                                    s.type
                                                        ? n.push.apply(
                                                              n,
                                                              s.features
                                                          )
                                                        : n.push(s);
                                                }
                                            }
                                        }),
                                        i
                                            ? qi(this, {
                                                  geometries: n,
                                                  type: "GeometryCollection",
                                              })
                                            : {
                                                  type: "FeatureCollection",
                                                  features: n,
                                              }
                                    );
                                },
                            });
                        var Xi = Yi,
                            Ji = zi.extend({
                                options: {
                                    opacity: 1,
                                    alt: "",
                                    interactive: !1,
                                    crossOrigin: !1,
                                    errorOverlayUrl: "",
                                    zIndex: 1,
                                    className: "",
                                },
                                initialize: function (t, e, i) {
                                    (this._url = t),
                                        (this._bounds = R(e)),
                                        d(this, i);
                                },
                                onAdd: function () {
                                    this._image ||
                                        (this._initImage(),
                                        this.options.opacity < 1 &&
                                            this._updateOpacity()),
                                        this.options.interactive &&
                                            (ce(
                                                this._image,
                                                "leaflet-interactive"
                                            ),
                                            this.addInteractiveTarget(
                                                this._image
                                            )),
                                        this.getPane().appendChild(this._image),
                                        this._reset();
                                },
                                onRemove: function () {
                                    re(this._image),
                                        this.options.interactive &&
                                            this.removeInteractiveTarget(
                                                this._image
                                            );
                                },
                                setOpacity: function (t) {
                                    return (
                                        (this.options.opacity = t),
                                        this._image && this._updateOpacity(),
                                        this
                                    );
                                },
                                setStyle: function (t) {
                                    return (
                                        t.opacity && this.setOpacity(t.opacity),
                                        this
                                    );
                                },
                                bringToFront: function () {
                                    return this._map && he(this._image), this;
                                },
                                bringToBack: function () {
                                    return this._map && le(this._image), this;
                                },
                                setUrl: function (t) {
                                    return (
                                        (this._url = t),
                                        this._image && (this._image.src = t),
                                        this
                                    );
                                },
                                setBounds: function (t) {
                                    return (
                                        (this._bounds = R(t)),
                                        this._map && this._reset(),
                                        this
                                    );
                                },
                                getEvents: function () {
                                    var t = {
                                        zoom: this._reset,
                                        viewreset: this._reset,
                                    };
                                    return (
                                        this._zoomAnimated &&
                                            (t.zoomanim = this._animateZoom),
                                        t
                                    );
                                },
                                setZIndex: function (t) {
                                    return (
                                        (this.options.zIndex = t),
                                        this._updateZIndex(),
                                        this
                                    );
                                },
                                getBounds: function () {
                                    return this._bounds;
                                },
                                getElement: function () {
                                    return this._image;
                                },
                                _initImage: function () {
                                    var t = "IMG" === this._url.tagName,
                                        e = (this._image = t
                                            ? this._url
                                            : se("img"));
                                    ce(e, "leaflet-image-layer"),
                                        this._zoomAnimated &&
                                            ce(e, "leaflet-zoom-animated"),
                                        this.options.className &&
                                            ce(e, this.options.className),
                                        (e.onselectstart = h),
                                        (e.onmousemove = h),
                                        (e.onload = n(this.fire, this, "load")),
                                        (e.onerror = n(
                                            this._overlayOnError,
                                            this,
                                            "error"
                                        )),
                                        (this.options.crossOrigin ||
                                            "" === this.options.crossOrigin) &&
                                            (e.crossOrigin =
                                                !0 === this.options.crossOrigin
                                                    ? ""
                                                    : this.options.crossOrigin),
                                        this.options.zIndex &&
                                            this._updateZIndex(),
                                        t
                                            ? (this._url = e.src)
                                            : ((e.src = this._url),
                                              (e.alt = this.options.alt));
                                },
                                _animateZoom: function (t) {
                                    var e = this._map.getZoomScale(t.zoom),
                                        i =
                                            this._map._latLngBoundsToNewLayerBounds(
                                                this._bounds,
                                                t.zoom,
                                                t.center
                                            ).min;
                                    ge(this._image, i, e);
                                },
                                _reset: function () {
                                    var t = this._image,
                                        e = new A(
                                            this._map.latLngToLayerPoint(
                                                this._bounds.getNorthWest()
                                            ),
                                            this._map.latLngToLayerPoint(
                                                this._bounds.getSouthEast()
                                            )
                                        ),
                                        i = e.getSize();
                                    ve(t, e.min),
                                        (t.style.width = i.x + "px"),
                                        (t.style.height = i.y + "px");
                                },
                                _updateOpacity: function () {
                                    me(this._image, this.options.opacity);
                                },
                                _updateZIndex: function () {
                                    this._image &&
                                        void 0 !== this.options.zIndex &&
                                        null !== this.options.zIndex &&
                                        (this._image.style.zIndex =
                                            this.options.zIndex);
                                },
                                _overlayOnError: function () {
                                    this.fire("error");
                                    var t = this.options.errorOverlayUrl;
                                    t &&
                                        this._url !== t &&
                                        ((this._url = t),
                                        (this._image.src = t));
                                },
                                getCenter: function () {
                                    return this._bounds.getCenter();
                                },
                            }),
                            $i = Ji.extend({
                                options: {
                                    autoplay: !0,
                                    loop: !0,
                                    keepAspectRatio: !0,
                                    muted: !1,
                                    playsInline: !0,
                                },
                                _initImage: function () {
                                    var t = "VIDEO" === this._url.tagName,
                                        e = (this._image = t
                                            ? this._url
                                            : se("video"));
                                    if (
                                        (ce(e, "leaflet-image-layer"),
                                        this._zoomAnimated &&
                                            ce(e, "leaflet-zoom-animated"),
                                        this.options.className &&
                                            ce(e, this.options.className),
                                        (e.onselectstart = h),
                                        (e.onmousemove = h),
                                        (e.onloadeddata = n(
                                            this.fire,
                                            this,
                                            "load"
                                        )),
                                        t)
                                    ) {
                                        for (
                                            var i =
                                                    e.getElementsByTagName(
                                                        "source"
                                                    ),
                                                o = [],
                                                s = 0;
                                            s < i.length;
                                            s++
                                        )
                                            o.push(i[s].src);
                                        this._url = i.length > 0 ? o : [e.src];
                                    } else {
                                        f(this._url) ||
                                            (this._url = [this._url]),
                                            !this.options.keepAspectRatio &&
                                                Object.prototype.hasOwnProperty.call(
                                                    e.style,
                                                    "objectFit"
                                                ) &&
                                                (e.style.objectFit = "fill"),
                                            (e.autoplay =
                                                !!this.options.autoplay),
                                            (e.loop = !!this.options.loop),
                                            (e.muted = !!this.options.muted),
                                            (e.playsInline =
                                                !!this.options.playsInline);
                                        for (
                                            var r = 0;
                                            r < this._url.length;
                                            r++
                                        ) {
                                            var a = se("source");
                                            (a.src = this._url[r]),
                                                e.appendChild(a);
                                        }
                                    }
                                },
                            });
                        var Qi = Ji.extend({
                            _initImage: function () {
                                var t = (this._image = this._url);
                                ce(t, "leaflet-image-layer"),
                                    this._zoomAnimated &&
                                        ce(t, "leaflet-zoom-animated"),
                                    this.options.className &&
                                        ce(t, this.options.className),
                                    (t.onselectstart = h),
                                    (t.onmousemove = h);
                            },
                        });
                        var tn = zi.extend({
                            options: {
                                interactive: !1,
                                offset: [0, 0],
                                className: "",
                                pane: void 0,
                                content: "",
                            },
                            initialize: function (t, e) {
                                t && (t instanceof N || f(t))
                                    ? ((this._latlng = D(t)), d(this, e))
                                    : (d(this, t), (this._source = e)),
                                    this.options.content &&
                                        (this._content = this.options.content);
                            },
                            openOn: function (t) {
                                return (
                                    (t = arguments.length
                                        ? t
                                        : this._source._map).hasLayer(this) ||
                                        t.addLayer(this),
                                    this
                                );
                            },
                            close: function () {
                                return (
                                    this._map && this._map.removeLayer(this),
                                    this
                                );
                            },
                            toggle: function (t) {
                                return (
                                    this._map
                                        ? this.close()
                                        : (arguments.length
                                              ? (this._source = t)
                                              : (t = this._source),
                                          this._prepareOpen(),
                                          this.openOn(t._map)),
                                    this
                                );
                            },
                            onAdd: function (t) {
                                (this._zoomAnimated = t._zoomAnimated),
                                    this._container || this._initLayout(),
                                    t._fadeAnimated && me(this._container, 0),
                                    clearTimeout(this._removeTimeout),
                                    this.getPane().appendChild(this._container),
                                    this.update(),
                                    t._fadeAnimated && me(this._container, 1),
                                    this.bringToFront(),
                                    this.options.interactive &&
                                        (ce(
                                            this._container,
                                            "leaflet-interactive"
                                        ),
                                        this.addInteractiveTarget(
                                            this._container
                                        ));
                            },
                            onRemove: function (t) {
                                t._fadeAnimated
                                    ? (me(this._container, 0),
                                      (this._removeTimeout = setTimeout(
                                          n(re, void 0, this._container),
                                          200
                                      )))
                                    : re(this._container),
                                    this.options.interactive &&
                                        (de(
                                            this._container,
                                            "leaflet-interactive"
                                        ),
                                        this.removeInteractiveTarget(
                                            this._container
                                        ));
                            },
                            getLatLng: function () {
                                return this._latlng;
                            },
                            setLatLng: function (t) {
                                return (
                                    (this._latlng = D(t)),
                                    this._map &&
                                        (this._updatePosition(),
                                        this._adjustPan()),
                                    this
                                );
                            },
                            getContent: function () {
                                return this._content;
                            },
                            setContent: function (t) {
                                return (this._content = t), this.update(), this;
                            },
                            getElement: function () {
                                return this._container;
                            },
                            update: function () {
                                this._map &&
                                    ((this._container.style.visibility =
                                        "hidden"),
                                    this._updateContent(),
                                    this._updateLayout(),
                                    this._updatePosition(),
                                    (this._container.style.visibility = ""),
                                    this._adjustPan());
                            },
                            getEvents: function () {
                                var t = {
                                    zoom: this._updatePosition,
                                    viewreset: this._updatePosition,
                                };
                                return (
                                    this._zoomAnimated &&
                                        (t.zoomanim = this._animateZoom),
                                    t
                                );
                            },
                            isOpen: function () {
                                return !!this._map && this._map.hasLayer(this);
                            },
                            bringToFront: function () {
                                return this._map && he(this._container), this;
                            },
                            bringToBack: function () {
                                return this._map && le(this._container), this;
                            },
                            _prepareOpen: function (t) {
                                var e = this._source;
                                if (!e._map) return !1;
                                if (e instanceof Si) {
                                    e = null;
                                    var i = this._source._layers;
                                    for (var n in i)
                                        if (i[n]._map) {
                                            e = i[n];
                                            break;
                                        }
                                    if (!e) return !1;
                                    this._source = e;
                                }
                                if (!t)
                                    if (e.getCenter) t = e.getCenter();
                                    else if (e.getLatLng) t = e.getLatLng();
                                    else {
                                        if (!e.getBounds)
                                            throw new Error(
                                                "Unable to get source layer LatLng."
                                            );
                                        t = e.getBounds().getCenter();
                                    }
                                return (
                                    this.setLatLng(t),
                                    this._map && this.update(),
                                    !0
                                );
                            },
                            _updateContent: function () {
                                if (this._content) {
                                    var t = this._contentNode,
                                        e =
                                            "function" == typeof this._content
                                                ? this._content(
                                                      this._source || this
                                                  )
                                                : this._content;
                                    if ("string" == typeof e) t.innerHTML = e;
                                    else {
                                        for (; t.hasChildNodes(); )
                                            t.removeChild(t.firstChild);
                                        t.appendChild(e);
                                    }
                                    this.fire("contentupdate");
                                }
                            },
                            _updatePosition: function () {
                                if (this._map) {
                                    var t = this._map.latLngToLayerPoint(
                                            this._latlng
                                        ),
                                        e = O(this.options.offset),
                                        i = this._getAnchor();
                                    this._zoomAnimated
                                        ? ve(this._container, t.add(i))
                                        : (e = e.add(t).add(i));
                                    var n = (this._containerBottom = -e.y),
                                        o = (this._containerLeft =
                                            -Math.round(
                                                this._containerWidth / 2
                                            ) + e.x);
                                    (this._container.style.bottom = n + "px"),
                                        (this._container.style.left = o + "px");
                                }
                            },
                            _getAnchor: function () {
                                return [0, 0];
                            },
                        });
                        Ge.include({
                            _initOverlay: function (t, e, i, n) {
                                var o = e;
                                return (
                                    o instanceof t ||
                                        (o = new t(n).setContent(e)),
                                    i && o.setLatLng(i),
                                    o
                                );
                            },
                        }),
                            zi.include({
                                _initOverlay: function (t, e, i, n) {
                                    var o = i;
                                    return (
                                        o instanceof t
                                            ? (d(o, n), (o._source = this))
                                            : (o =
                                                  e && !n
                                                      ? e
                                                      : new t(
                                                            n,
                                                            this
                                                        )).setContent(i),
                                        o
                                    );
                                },
                            });
                        var en = tn.extend({
                            options: {
                                pane: "popupPane",
                                offset: [0, 7],
                                maxWidth: 300,
                                minWidth: 50,
                                maxHeight: null,
                                autoPan: !0,
                                autoPanPaddingTopLeft: null,
                                autoPanPaddingBottomRight: null,
                                autoPanPadding: [5, 5],
                                keepInView: !1,
                                closeButton: !0,
                                autoClose: !0,
                                closeOnEscapeKey: !0,
                                className: "",
                            },
                            openOn: function (t) {
                                return (
                                    !(t = arguments.length
                                        ? t
                                        : this._source._map).hasLayer(this) &&
                                        t._popup &&
                                        t._popup.options.autoClose &&
                                        t.removeLayer(t._popup),
                                    (t._popup = this),
                                    tn.prototype.openOn.call(this, t)
                                );
                            },
                            onAdd: function (t) {
                                tn.prototype.onAdd.call(this, t),
                                    t.fire("popupopen", {
                                        popup: this,
                                    }),
                                    this._source &&
                                        (this._source.fire(
                                            "popupopen",
                                            {
                                                popup: this,
                                            },
                                            !0
                                        ),
                                        this._source instanceof Ai ||
                                            this._source.on("preclick", Be));
                            },
                            onRemove: function (t) {
                                tn.prototype.onRemove.call(this, t),
                                    t.fire("popupclose", {
                                        popup: this,
                                    }),
                                    this._source &&
                                        (this._source.fire(
                                            "popupclose",
                                            {
                                                popup: this,
                                            },
                                            !0
                                        ),
                                        this._source instanceof Ai ||
                                            this._source.off("preclick", Be));
                            },
                            getEvents: function () {
                                var t = tn.prototype.getEvents.call(this);
                                return (
                                    (void 0 !== this.options.closeOnClick
                                        ? this.options.closeOnClick
                                        : this._map.options
                                              .closePopupOnClick) &&
                                        (t.preclick = this.close),
                                    this.options.keepInView &&
                                        (t.moveend = this._adjustPan),
                                    t
                                );
                            },
                            _initLayout: function () {
                                var t = "leaflet-popup",
                                    e = (this._container = se(
                                        "div",
                                        t +
                                            " " +
                                            (this.options.className || "") +
                                            " leaflet-zoom-animated"
                                    )),
                                    i = (this._wrapper = se(
                                        "div",
                                        t + "-content-wrapper",
                                        e
                                    ));
                                if (
                                    ((this._contentNode = se(
                                        "div",
                                        t + "-content",
                                        i
                                    )),
                                    Re(e),
                                    Ie(this._contentNode),
                                    Ce(e, "contextmenu", Be),
                                    (this._tipContainer = se(
                                        "div",
                                        t + "-tip-container",
                                        e
                                    )),
                                    (this._tip = se(
                                        "div",
                                        t + "-tip",
                                        this._tipContainer
                                    )),
                                    this.options.closeButton)
                                ) {
                                    var n = (this._closeButton = se(
                                        "a",
                                        t + "-close-button",
                                        e
                                    ));
                                    n.setAttribute("role", "button"),
                                        n.setAttribute(
                                            "aria-label",
                                            "Close popup"
                                        ),
                                        (n.href = "#close"),
                                        (n.innerHTML =
                                            '<span aria-hidden="true">&#215;</span>'),
                                        Ce(
                                            n,
                                            "click",
                                            function (t) {
                                                Ne(t), this.close();
                                            },
                                            this
                                        );
                                }
                            },
                            _updateLayout: function () {
                                var t = this._contentNode,
                                    e = t.style;
                                (e.width = ""), (e.whiteSpace = "nowrap");
                                var i = t.offsetWidth;
                                (i = Math.min(i, this.options.maxWidth)),
                                    (i = Math.max(i, this.options.minWidth)),
                                    (e.width = i + 1 + "px"),
                                    (e.whiteSpace = ""),
                                    (e.height = "");
                                var n = t.offsetHeight,
                                    o = this.options.maxHeight,
                                    s = "leaflet-popup-scrolled";
                                o && n > o
                                    ? ((e.height = o + "px"), ce(t, s))
                                    : de(t, s),
                                    (this._containerWidth =
                                        this._container.offsetWidth);
                            },
                            _animateZoom: function (t) {
                                var e = this._map._latLngToNewLayerPoint(
                                        this._latlng,
                                        t.zoom,
                                        t.center
                                    ),
                                    i = this._getAnchor();
                                ve(this._container, e.add(i));
                            },
                            _adjustPan: function () {
                                if (this.options.autoPan)
                                    if (
                                        (this._map._panAnim &&
                                            this._map._panAnim.stop(),
                                        this._autopanning)
                                    )
                                        this._autopanning = !1;
                                    else {
                                        var t = this._map,
                                            e =
                                                parseInt(
                                                    oe(
                                                        this._container,
                                                        "marginBottom"
                                                    ),
                                                    10
                                                ) || 0,
                                            i =
                                                this._container.offsetHeight +
                                                e,
                                            n = this._containerWidth,
                                            o = new E(
                                                this._containerLeft,
                                                -i - this._containerBottom
                                            );
                                        o._add(ye(this._container));
                                        var s = t.layerPointToContainerPoint(o),
                                            r = O(this.options.autoPanPadding),
                                            a = O(
                                                this.options
                                                    .autoPanPaddingTopLeft || r
                                            ),
                                            h = O(
                                                this.options
                                                    .autoPanPaddingBottomRight ||
                                                    r
                                            ),
                                            l = t.getSize(),
                                            u = 0,
                                            c = 0;
                                        s.x + n + h.x > l.x &&
                                            (u = s.x + n - l.x + h.x),
                                            s.x - u - a.x < 0 &&
                                                (u = s.x - a.x),
                                            s.y + i + h.y > l.y &&
                                                (c = s.y + i - l.y + h.y),
                                            s.y - c - a.y < 0 &&
                                                (c = s.y - a.y),
                                            (u || c) &&
                                                (this.options.keepInView &&
                                                    (this._autopanning = !0),
                                                t
                                                    .fire("autopanstart")
                                                    .panBy([u, c]));
                                    }
                            },
                            _getAnchor: function () {
                                return O(
                                    this._source && this._source._getPopupAnchor
                                        ? this._source._getPopupAnchor()
                                        : [0, 0]
                                );
                            },
                        });
                        Ge.mergeOptions({
                            closePopupOnClick: !0,
                        }),
                            Ge.include({
                                openPopup: function (t, e, i) {
                                    return (
                                        this._initOverlay(en, t, e, i).openOn(
                                            this
                                        ),
                                        this
                                    );
                                },
                                closePopup: function (t) {
                                    return (
                                        (t = arguments.length
                                            ? t
                                            : this._popup) && t.close(),
                                        this
                                    );
                                },
                            }),
                            zi.include({
                                bindPopup: function (t, e) {
                                    return (
                                        (this._popup = this._initOverlay(
                                            en,
                                            this._popup,
                                            t,
                                            e
                                        )),
                                        this._popupHandlersAdded ||
                                            (this.on({
                                                click: this._openPopup,
                                                keypress: this._onKeyPress,
                                                remove: this.closePopup,
                                                move: this._movePopup,
                                            }),
                                            (this._popupHandlersAdded = !0)),
                                        this
                                    );
                                },
                                unbindPopup: function () {
                                    return (
                                        this._popup &&
                                            (this.off({
                                                click: this._openPopup,
                                                keypress: this._onKeyPress,
                                                remove: this.closePopup,
                                                move: this._movePopup,
                                            }),
                                            (this._popupHandlersAdded = !1),
                                            (this._popup = null)),
                                        this
                                    );
                                },
                                openPopup: function (t) {
                                    return (
                                        this._popup &&
                                            (this instanceof Si ||
                                                (this._popup._source = this),
                                            this._popup._prepareOpen(
                                                t || this._latlng
                                            ) && this._popup.openOn(this._map)),
                                        this
                                    );
                                },
                                closePopup: function () {
                                    return (
                                        this._popup && this._popup.close(), this
                                    );
                                },
                                togglePopup: function () {
                                    return (
                                        this._popup && this._popup.toggle(this),
                                        this
                                    );
                                },
                                isPopupOpen: function () {
                                    return (
                                        !!this._popup && this._popup.isOpen()
                                    );
                                },
                                setPopupContent: function (t) {
                                    return (
                                        this._popup &&
                                            this._popup.setContent(t),
                                        this
                                    );
                                },
                                getPopup: function () {
                                    return this._popup;
                                },
                                _openPopup: function (t) {
                                    if (this._popup && this._map) {
                                        De(t);
                                        var e = t.layer || t.target;
                                        this._popup._source !== e ||
                                        e instanceof Ai
                                            ? ((this._popup._source = e),
                                              this.openPopup(t.latlng))
                                            : this._map.hasLayer(this._popup)
                                            ? this.closePopup()
                                            : this.openPopup(t.latlng);
                                    }
                                },
                                _movePopup: function (t) {
                                    this._popup.setLatLng(t.latlng);
                                },
                                _onKeyPress: function (t) {
                                    13 === t.originalEvent.keyCode &&
                                        this._openPopup(t);
                                },
                            });
                        var nn = tn.extend({
                            options: {
                                pane: "tooltipPane",
                                offset: [0, 0],
                                direction: "auto",
                                permanent: !1,
                                sticky: !1,
                                opacity: 0.9,
                            },
                            onAdd: function (t) {
                                tn.prototype.onAdd.call(this, t),
                                    this.setOpacity(this.options.opacity),
                                    t.fire("tooltipopen", {
                                        tooltip: this,
                                    }),
                                    this._source &&
                                        (this.addEventParent(this._source),
                                        this._source.fire(
                                            "tooltipopen",
                                            {
                                                tooltip: this,
                                            },
                                            !0
                                        ));
                            },
                            onRemove: function (t) {
                                tn.prototype.onRemove.call(this, t),
                                    t.fire("tooltipclose", {
                                        tooltip: this,
                                    }),
                                    this._source &&
                                        (this.removeEventParent(this._source),
                                        this._source.fire(
                                            "tooltipclose",
                                            {
                                                tooltip: this,
                                            },
                                            !0
                                        ));
                            },
                            getEvents: function () {
                                var t = tn.prototype.getEvents.call(this);
                                return (
                                    this.options.permanent ||
                                        (t.preclick = this.close),
                                    t
                                );
                            },
                            _initLayout: function () {
                                var t =
                                    "leaflet-tooltip " +
                                    (this.options.className || "") +
                                    " leaflet-zoom-" +
                                    (this._zoomAnimated ? "animated" : "hide");
                                (this._contentNode = this._container =
                                    se("div", t)),
                                    this._container.setAttribute(
                                        "role",
                                        "tooltip"
                                    ),
                                    this._container.setAttribute(
                                        "id",
                                        "leaflet-tooltip-" + s(this)
                                    );
                            },
                            _updateLayout: function () {},
                            _adjustPan: function () {},
                            _setPosition: function (t) {
                                var e,
                                    i,
                                    n = this._map,
                                    o = this._container,
                                    s = n.latLngToContainerPoint(n.getCenter()),
                                    r = n.layerPointToContainerPoint(t),
                                    a = this.options.direction,
                                    h = o.offsetWidth,
                                    l = o.offsetHeight,
                                    u = O(this.options.offset),
                                    c = this._getAnchor();
                                "top" === a
                                    ? ((e = h / 2), (i = l))
                                    : "bottom" === a
                                    ? ((e = h / 2), (i = 0))
                                    : "center" === a
                                    ? ((e = h / 2), (i = l / 2))
                                    : "right" === a
                                    ? ((e = 0), (i = l / 2))
                                    : "left" === a
                                    ? ((e = h), (i = l / 2))
                                    : r.x < s.x
                                    ? ((a = "right"), (e = 0), (i = l / 2))
                                    : ((a = "left"),
                                      (e = h + 2 * (u.x + c.x)),
                                      (i = l / 2)),
                                    (t = t.subtract(O(e, i, !0)).add(u).add(c)),
                                    de(o, "leaflet-tooltip-right"),
                                    de(o, "leaflet-tooltip-left"),
                                    de(o, "leaflet-tooltip-top"),
                                    de(o, "leaflet-tooltip-bottom"),
                                    ce(o, "leaflet-tooltip-" + a),
                                    ve(o, t);
                            },
                            _updatePosition: function () {
                                var t = this._map.latLngToLayerPoint(
                                    this._latlng
                                );
                                this._setPosition(t);
                            },
                            setOpacity: function (t) {
                                (this.options.opacity = t),
                                    this._container && me(this._container, t);
                            },
                            _animateZoom: function (t) {
                                var e = this._map._latLngToNewLayerPoint(
                                    this._latlng,
                                    t.zoom,
                                    t.center
                                );
                                this._setPosition(e);
                            },
                            _getAnchor: function () {
                                return O(
                                    this._source &&
                                        this._source._getTooltipAnchor &&
                                        !this.options.sticky
                                        ? this._source._getTooltipAnchor()
                                        : [0, 0]
                                );
                            },
                        });
                        Ge.include({
                            openTooltip: function (t, e, i) {
                                return (
                                    this._initOverlay(nn, t, e, i).openOn(this),
                                    this
                                );
                            },
                            closeTooltip: function (t) {
                                return t.close(), this;
                            },
                        }),
                            zi.include({
                                bindTooltip: function (t, e) {
                                    return (
                                        this._tooltip &&
                                            this.isTooltipOpen() &&
                                            this.unbindTooltip(),
                                        (this._tooltip = this._initOverlay(
                                            nn,
                                            this._tooltip,
                                            t,
                                            e
                                        )),
                                        this._initTooltipInteractions(),
                                        this._tooltip.options.permanent &&
                                            this._map &&
                                            this._map.hasLayer(this) &&
                                            this.openTooltip(),
                                        this
                                    );
                                },
                                unbindTooltip: function () {
                                    return (
                                        this._tooltip &&
                                            (this._initTooltipInteractions(!0),
                                            this.closeTooltip(),
                                            (this._tooltip = null)),
                                        this
                                    );
                                },
                                _initTooltipInteractions: function (t) {
                                    if (t || !this._tooltipHandlersAdded) {
                                        var e = t ? "off" : "on",
                                            i = {
                                                remove: this.closeTooltip,
                                                move: this._moveTooltip,
                                            };
                                        this._tooltip.options.permanent
                                            ? (i.add = this._openTooltip)
                                            : ((i.mouseover =
                                                  this._openTooltip),
                                              (i.mouseout = this.closeTooltip),
                                              (i.click = this._openTooltip),
                                              this._map
                                                  ? this._addFocusListeners()
                                                  : (i.add =
                                                        this._addFocusListeners)),
                                            this._tooltip.options.sticky &&
                                                (i.mousemove =
                                                    this._moveTooltip),
                                            this[e](i),
                                            (this._tooltipHandlersAdded = !t);
                                    }
                                },
                                openTooltip: function (t) {
                                    return (
                                        this._tooltip &&
                                            (this instanceof Si ||
                                                (this._tooltip._source = this),
                                            this._tooltip._prepareOpen(t) &&
                                                (this._tooltip.openOn(
                                                    this._map
                                                ),
                                                this.getElement
                                                    ? this._setAriaDescribedByOnLayer(
                                                          this
                                                      )
                                                    : this.eachLayer &&
                                                      this.eachLayer(
                                                          this
                                                              ._setAriaDescribedByOnLayer,
                                                          this
                                                      ))),
                                        this
                                    );
                                },
                                closeTooltip: function () {
                                    if (this._tooltip)
                                        return this._tooltip.close();
                                },
                                toggleTooltip: function () {
                                    return (
                                        this._tooltip &&
                                            this._tooltip.toggle(this),
                                        this
                                    );
                                },
                                isTooltipOpen: function () {
                                    return this._tooltip.isOpen();
                                },
                                setTooltipContent: function (t) {
                                    return (
                                        this._tooltip &&
                                            this._tooltip.setContent(t),
                                        this
                                    );
                                },
                                getTooltip: function () {
                                    return this._tooltip;
                                },
                                _addFocusListeners: function () {
                                    this.getElement
                                        ? this._addFocusListenersOnLayer(this)
                                        : this.eachLayer &&
                                          this.eachLayer(
                                              this._addFocusListenersOnLayer,
                                              this
                                          );
                                },
                                _addFocusListenersOnLayer: function (t) {
                                    var e =
                                        "function" == typeof t.getElement &&
                                        t.getElement();
                                    e &&
                                        (Ce(
                                            e,
                                            "focus",
                                            function () {
                                                (this._tooltip._source = t),
                                                    this.openTooltip();
                                            },
                                            this
                                        ),
                                        Ce(e, "blur", this.closeTooltip, this));
                                },
                                _setAriaDescribedByOnLayer: function (t) {
                                    var e =
                                        "function" == typeof t.getElement &&
                                        t.getElement();
                                    e &&
                                        e.setAttribute(
                                            "aria-describedby",
                                            this._tooltip._container.id
                                        );
                                },
                                _openTooltip: function (t) {
                                    if (this._tooltip && this._map)
                                        if (
                                            this._map.dragging &&
                                            this._map.dragging.moving() &&
                                            !this._openOnceFlag
                                        ) {
                                            this._openOnceFlag = !0;
                                            var e = this;
                                            this._map.once(
                                                "moveend",
                                                function () {
                                                    (e._openOnceFlag = !1),
                                                        e._openTooltip(t);
                                                }
                                            );
                                        } else
                                            (this._tooltip._source =
                                                t.layer || t.target),
                                                this.openTooltip(
                                                    this._tooltip.options.sticky
                                                        ? t.latlng
                                                        : void 0
                                                );
                                },
                                _moveTooltip: function (t) {
                                    var e,
                                        i,
                                        n = t.latlng;
                                    this._tooltip.options.sticky &&
                                        t.originalEvent &&
                                        ((e =
                                            this._map.mouseEventToContainerPoint(
                                                t.originalEvent
                                            )),
                                        (i =
                                            this._map.containerPointToLayerPoint(
                                                e
                                            )),
                                        (n = this._map.layerPointToLatLng(i))),
                                        this._tooltip.setLatLng(n);
                                },
                            });
                        var on = Zi.extend({
                            options: {
                                iconSize: [12, 12],
                                html: !1,
                                bgPos: null,
                                className: "leaflet-div-icon",
                            },
                            createIcon: function (t) {
                                var e =
                                        t && "DIV" === t.tagName
                                            ? t
                                            : document.createElement("div"),
                                    i = this.options;
                                if (
                                    (i.html instanceof Element
                                        ? (ae(e), e.appendChild(i.html))
                                        : (e.innerHTML =
                                              !1 !== i.html ? i.html : ""),
                                    i.bgPos)
                                ) {
                                    var n = O(i.bgPos);
                                    e.style.backgroundPosition =
                                        -n.x + "px " + -n.y + "px";
                                }
                                return this._setIconStyles(e, "icon"), e;
                            },
                            createShadow: function () {
                                return null;
                            },
                        });
                        Zi.Default = Ei;
                        var sn = zi.extend({
                            options: {
                                tileSize: 256,
                                opacity: 1,
                                updateWhenIdle: At.mobile,
                                updateWhenZooming: !0,
                                updateInterval: 200,
                                zIndex: 1,
                                bounds: null,
                                minZoom: 0,
                                maxZoom: void 0,
                                maxNativeZoom: void 0,
                                minNativeZoom: void 0,
                                noWrap: !1,
                                pane: "tilePane",
                                className: "",
                                keepBuffer: 2,
                            },
                            initialize: function (t) {
                                d(this, t);
                            },
                            onAdd: function () {
                                this._initContainer(),
                                    (this._levels = {}),
                                    (this._tiles = {}),
                                    this._resetView();
                            },
                            beforeAdd: function (t) {
                                t._addZoomLimit(this);
                            },
                            onRemove: function (t) {
                                this._removeAllTiles(),
                                    re(this._container),
                                    t._removeZoomLimit(this),
                                    (this._container = null),
                                    (this._tileZoom = void 0);
                            },
                            bringToFront: function () {
                                return (
                                    this._map &&
                                        (he(this._container),
                                        this._setAutoZIndex(Math.max)),
                                    this
                                );
                            },
                            bringToBack: function () {
                                return (
                                    this._map &&
                                        (le(this._container),
                                        this._setAutoZIndex(Math.min)),
                                    this
                                );
                            },
                            getContainer: function () {
                                return this._container;
                            },
                            setOpacity: function (t) {
                                return (
                                    (this.options.opacity = t),
                                    this._updateOpacity(),
                                    this
                                );
                            },
                            setZIndex: function (t) {
                                return (
                                    (this.options.zIndex = t),
                                    this._updateZIndex(),
                                    this
                                );
                            },
                            isLoading: function () {
                                return this._loading;
                            },
                            redraw: function () {
                                if (this._map) {
                                    this._removeAllTiles();
                                    var t = this._clampZoom(
                                        this._map.getZoom()
                                    );
                                    t !== this._tileZoom &&
                                        ((this._tileZoom = t),
                                        this._updateLevels()),
                                        this._update();
                                }
                                return this;
                            },
                            getEvents: function () {
                                var t = {
                                    viewprereset: this._invalidateAll,
                                    viewreset: this._resetView,
                                    zoom: this._resetView,
                                    moveend: this._onMoveEnd,
                                };
                                return (
                                    this.options.updateWhenIdle ||
                                        (this._onMove ||
                                            (this._onMove = r(
                                                this._onMoveEnd,
                                                this.options.updateInterval,
                                                this
                                            )),
                                        (t.move = this._onMove)),
                                    this._zoomAnimated &&
                                        (t.zoomanim = this._animateZoom),
                                    t
                                );
                            },
                            createTile: function () {
                                return document.createElement("div");
                            },
                            getTileSize: function () {
                                var t = this.options.tileSize;
                                return t instanceof E ? t : new E(t, t);
                            },
                            _updateZIndex: function () {
                                this._container &&
                                    void 0 !== this.options.zIndex &&
                                    null !== this.options.zIndex &&
                                    (this._container.style.zIndex =
                                        this.options.zIndex);
                            },
                            _setAutoZIndex: function (t) {
                                for (
                                    var e,
                                        i = this.getPane().children,
                                        n = -t(-1 / 0, 1 / 0),
                                        o = 0,
                                        s = i.length;
                                    o < s;
                                    o++
                                )
                                    (e = i[o].style.zIndex),
                                        i[o] !== this._container &&
                                            e &&
                                            (n = t(n, +e));
                                isFinite(n) &&
                                    ((this.options.zIndex = n + t(-1, 1)),
                                    this._updateZIndex());
                            },
                            _updateOpacity: function () {
                                if (this._map && !At.ielt9) {
                                    me(this._container, this.options.opacity);
                                    var t = +new Date(),
                                        e = !1,
                                        i = !1;
                                    for (var n in this._tiles) {
                                        var o = this._tiles[n];
                                        if (o.current && o.loaded) {
                                            var s = Math.min(
                                                1,
                                                (t - o.loaded) / 200
                                            );
                                            me(o.el, s),
                                                s < 1
                                                    ? (e = !0)
                                                    : (o.active
                                                          ? (i = !0)
                                                          : this._onOpaqueTile(
                                                                o
                                                            ),
                                                      (o.active = !0));
                                        }
                                    }
                                    i && !this._noPrune && this._pruneTiles(),
                                        e &&
                                            (M(this._fadeFrame),
                                            (this._fadeFrame = T(
                                                this._updateOpacity,
                                                this
                                            )));
                                }
                            },
                            _onOpaqueTile: h,
                            _initContainer: function () {
                                this._container ||
                                    ((this._container = se(
                                        "div",
                                        "leaflet-layer " +
                                            (this.options.className || "")
                                    )),
                                    this._updateZIndex(),
                                    this.options.opacity < 1 &&
                                        this._updateOpacity(),
                                    this.getPane().appendChild(
                                        this._container
                                    ));
                            },
                            _updateLevels: function () {
                                var t = this._tileZoom,
                                    e = this.options.maxZoom;
                                if (void 0 !== t) {
                                    for (var i in this._levels)
                                        (i = Number(i)),
                                            this._levels[i].el.children
                                                .length || i === t
                                                ? ((this._levels[
                                                      i
                                                  ].el.style.zIndex =
                                                      e - Math.abs(t - i)),
                                                  this._onUpdateLevel(i))
                                                : (re(this._levels[i].el),
                                                  this._removeTilesAtZoom(i),
                                                  this._onRemoveLevel(i),
                                                  delete this._levels[i]);
                                    var n = this._levels[t],
                                        o = this._map;
                                    return (
                                        n ||
                                            (((n = this._levels[t] = {}).el =
                                                se(
                                                    "div",
                                                    "leaflet-tile-container leaflet-zoom-animated",
                                                    this._container
                                                )),
                                            (n.el.style.zIndex = e),
                                            (n.origin = o
                                                .project(
                                                    o.unproject(
                                                        o.getPixelOrigin()
                                                    ),
                                                    t
                                                )
                                                .round()),
                                            (n.zoom = t),
                                            this._setZoomTransform(
                                                n,
                                                o.getCenter(),
                                                o.getZoom()
                                            ),
                                            n.el.offsetWidth,
                                            this._onCreateLevel(n)),
                                        (this._level = n),
                                        n
                                    );
                                }
                            },
                            _onUpdateLevel: h,
                            _onRemoveLevel: h,
                            _onCreateLevel: h,
                            _pruneTiles: function () {
                                if (this._map) {
                                    var t,
                                        e,
                                        i = this._map.getZoom();
                                    if (
                                        i > this.options.maxZoom ||
                                        i < this.options.minZoom
                                    )
                                        this._removeAllTiles();
                                    else {
                                        for (t in this._tiles)
                                            (e = this._tiles[t]).retain =
                                                e.current;
                                        for (t in this._tiles)
                                            if (
                                                (e = this._tiles[t]).current &&
                                                !e.active
                                            ) {
                                                var n = e.coords;
                                                this._retainParent(
                                                    n.x,
                                                    n.y,
                                                    n.z,
                                                    n.z - 5
                                                ) ||
                                                    this._retainChildren(
                                                        n.x,
                                                        n.y,
                                                        n.z,
                                                        n.z + 2
                                                    );
                                            }
                                        for (t in this._tiles)
                                            this._tiles[t].retain ||
                                                this._removeTile(t);
                                    }
                                }
                            },
                            _removeTilesAtZoom: function (t) {
                                for (var e in this._tiles)
                                    this._tiles[e].coords.z === t &&
                                        this._removeTile(e);
                            },
                            _removeAllTiles: function () {
                                for (var t in this._tiles) this._removeTile(t);
                            },
                            _invalidateAll: function () {
                                for (var t in this._levels)
                                    re(this._levels[t].el),
                                        this._onRemoveLevel(Number(t)),
                                        delete this._levels[t];
                                this._removeAllTiles(),
                                    (this._tileZoom = void 0);
                            },
                            _retainParent: function (t, e, i, n) {
                                var o = Math.floor(t / 2),
                                    s = Math.floor(e / 2),
                                    r = i - 1,
                                    a = new E(+o, +s);
                                a.z = +r;
                                var h = this._tileCoordsToKey(a),
                                    l = this._tiles[h];
                                return l && l.active
                                    ? ((l.retain = !0), !0)
                                    : (l && l.loaded && (l.retain = !0),
                                      r > n && this._retainParent(o, s, r, n));
                            },
                            _retainChildren: function (t, e, i, n) {
                                for (var o = 2 * t; o < 2 * t + 2; o++)
                                    for (var s = 2 * e; s < 2 * e + 2; s++) {
                                        var r = new E(o, s);
                                        r.z = i + 1;
                                        var a = this._tileCoordsToKey(r),
                                            h = this._tiles[a];
                                        h && h.active
                                            ? (h.retain = !0)
                                            : (h && h.loaded && (h.retain = !0),
                                              i + 1 < n &&
                                                  this._retainChildren(
                                                      o,
                                                      s,
                                                      i + 1,
                                                      n
                                                  ));
                                    }
                            },
                            _resetView: function (t) {
                                var e = t && (t.pinch || t.flyTo);
                                this._setView(
                                    this._map.getCenter(),
                                    this._map.getZoom(),
                                    e,
                                    e
                                );
                            },
                            _animateZoom: function (t) {
                                this._setView(t.center, t.zoom, !0, t.noUpdate);
                            },
                            _clampZoom: function (t) {
                                var e = this.options;
                                return void 0 !== e.minNativeZoom &&
                                    t < e.minNativeZoom
                                    ? e.minNativeZoom
                                    : void 0 !== e.maxNativeZoom &&
                                      e.maxNativeZoom < t
                                    ? e.maxNativeZoom
                                    : t;
                            },
                            _setView: function (t, e, i, n) {
                                var o = Math.round(e);
                                o =
                                    (void 0 !== this.options.maxZoom &&
                                        o > this.options.maxZoom) ||
                                    (void 0 !== this.options.minZoom &&
                                        o < this.options.minZoom)
                                        ? void 0
                                        : this._clampZoom(o);
                                var s =
                                    this.options.updateWhenZooming &&
                                    o !== this._tileZoom;
                                (n && !s) ||
                                    ((this._tileZoom = o),
                                    this._abortLoading && this._abortLoading(),
                                    this._updateLevels(),
                                    this._resetGrid(),
                                    void 0 !== o && this._update(t),
                                    i || this._pruneTiles(),
                                    (this._noPrune = !!i)),
                                    this._setZoomTransforms(t, e);
                            },
                            _setZoomTransforms: function (t, e) {
                                for (var i in this._levels)
                                    this._setZoomTransform(
                                        this._levels[i],
                                        t,
                                        e
                                    );
                            },
                            _setZoomTransform: function (t, e, i) {
                                var n = this._map.getZoomScale(i, t.zoom),
                                    o = t.origin
                                        .multiplyBy(n)
                                        .subtract(
                                            this._map._getNewPixelOrigin(e, i)
                                        )
                                        .round();
                                At.any3d ? ge(t.el, o, n) : ve(t.el, o);
                            },
                            _resetGrid: function () {
                                var t = this._map,
                                    e = t.options.crs,
                                    i = (this._tileSize = this.getTileSize()),
                                    n = this._tileZoom,
                                    o = this._map.getPixelWorldBounds(
                                        this._tileZoom
                                    );
                                o &&
                                    (this._globalTileRange =
                                        this._pxBoundsToTileRange(o)),
                                    (this._wrapX = e.wrapLng &&
                                        !this.options.noWrap && [
                                            Math.floor(
                                                t.project([0, e.wrapLng[0]], n)
                                                    .x / i.x
                                            ),
                                            Math.ceil(
                                                t.project([0, e.wrapLng[1]], n)
                                                    .x / i.y
                                            ),
                                        ]),
                                    (this._wrapY = e.wrapLat &&
                                        !this.options.noWrap && [
                                            Math.floor(
                                                t.project([e.wrapLat[0], 0], n)
                                                    .y / i.x
                                            ),
                                            Math.ceil(
                                                t.project([e.wrapLat[1], 0], n)
                                                    .y / i.y
                                            ),
                                        ]);
                            },
                            _onMoveEnd: function () {
                                this._map &&
                                    !this._map._animatingZoom &&
                                    this._update();
                            },
                            _getTiledPixelBounds: function (t) {
                                var e = this._map,
                                    i = e._animatingZoom
                                        ? Math.max(
                                              e._animateToZoom,
                                              e.getZoom()
                                          )
                                        : e.getZoom(),
                                    n = e.getZoomScale(i, this._tileZoom),
                                    o = e.project(t, this._tileZoom).floor(),
                                    s = e.getSize().divideBy(2 * n);
                                return new A(o.subtract(s), o.add(s));
                            },
                            _update: function (t) {
                                var e = this._map;
                                if (e) {
                                    var i = this._clampZoom(e.getZoom());
                                    if (
                                        (void 0 === t && (t = e.getCenter()),
                                        void 0 !== this._tileZoom)
                                    ) {
                                        var n = this._getTiledPixelBounds(t),
                                            o = this._pxBoundsToTileRange(n),
                                            s = o.getCenter(),
                                            r = [],
                                            a = this.options.keepBuffer,
                                            h = new A(
                                                o
                                                    .getBottomLeft()
                                                    .subtract([a, -a]),
                                                o.getTopRight().add([a, -a])
                                            );
                                        if (
                                            !(
                                                isFinite(o.min.x) &&
                                                isFinite(o.min.y) &&
                                                isFinite(o.max.x) &&
                                                isFinite(o.max.y)
                                            )
                                        )
                                            throw new Error(
                                                "Attempted to load an infinite number of tiles"
                                            );
                                        for (var l in this._tiles) {
                                            var u = this._tiles[l].coords;
                                            (u.z === this._tileZoom &&
                                                h.contains(new E(u.x, u.y))) ||
                                                (this._tiles[l].current = !1);
                                        }
                                        if (Math.abs(i - this._tileZoom) > 1)
                                            this._setView(t, i);
                                        else {
                                            for (
                                                var c = o.min.y;
                                                c <= o.max.y;
                                                c++
                                            )
                                                for (
                                                    var d = o.min.x;
                                                    d <= o.max.x;
                                                    d++
                                                ) {
                                                    var _ = new E(d, c);
                                                    if (
                                                        ((_.z = this._tileZoom),
                                                        this._isValidTile(_))
                                                    ) {
                                                        var p =
                                                            this._tiles[
                                                                this._tileCoordsToKey(
                                                                    _
                                                                )
                                                            ];
                                                        p
                                                            ? (p.current = !0)
                                                            : r.push(_);
                                                    }
                                                }
                                            if (
                                                (r.sort(function (t, e) {
                                                    return (
                                                        t.distanceTo(s) -
                                                        e.distanceTo(s)
                                                    );
                                                }),
                                                0 !== r.length)
                                            ) {
                                                this._loading ||
                                                    ((this._loading = !0),
                                                    this.fire("loading"));
                                                var m =
                                                    document.createDocumentFragment();
                                                for (d = 0; d < r.length; d++)
                                                    this._addTile(r[d], m);
                                                this._level.el.appendChild(m);
                                            }
                                        }
                                    }
                                }
                            },
                            _isValidTile: function (t) {
                                var e = this._map.options.crs;
                                if (!e.infinite) {
                                    var i = this._globalTileRange;
                                    if (
                                        (!e.wrapLng &&
                                            (t.x < i.min.x || t.x > i.max.x)) ||
                                        (!e.wrapLat &&
                                            (t.y < i.min.y || t.y > i.max.y))
                                    )
                                        return !1;
                                }
                                if (!this.options.bounds) return !0;
                                var n = this._tileCoordsToBounds(t);
                                return R(this.options.bounds).overlaps(n);
                            },
                            _keyToBounds: function (t) {
                                return this._tileCoordsToBounds(
                                    this._keyToTileCoords(t)
                                );
                            },
                            _tileCoordsToNwSe: function (t) {
                                var e = this._map,
                                    i = this.getTileSize(),
                                    n = t.scaleBy(i),
                                    o = n.add(i);
                                return [
                                    e.unproject(n, t.z),
                                    e.unproject(o, t.z),
                                ];
                            },
                            _tileCoordsToBounds: function (t) {
                                var e = this._tileCoordsToNwSe(t),
                                    i = new I(e[0], e[1]);
                                return (
                                    this.options.noWrap ||
                                        (i = this._map.wrapLatLngBounds(i)),
                                    i
                                );
                            },
                            _tileCoordsToKey: function (t) {
                                return t.x + ":" + t.y + ":" + t.z;
                            },
                            _keyToTileCoords: function (t) {
                                var e = t.split(":"),
                                    i = new E(+e[0], +e[1]);
                                return (i.z = +e[2]), i;
                            },
                            _removeTile: function (t) {
                                var e = this._tiles[t];
                                e &&
                                    (re(e.el),
                                    delete this._tiles[t],
                                    this.fire("tileunload", {
                                        tile: e.el,
                                        coords: this._keyToTileCoords(t),
                                    }));
                            },
                            _initTile: function (t) {
                                ce(t, "leaflet-tile");
                                var e = this.getTileSize();
                                (t.style.width = e.x + "px"),
                                    (t.style.height = e.y + "px"),
                                    (t.onselectstart = h),
                                    (t.onmousemove = h),
                                    At.ielt9 &&
                                        this.options.opacity < 1 &&
                                        me(t, this.options.opacity);
                            },
                            _addTile: function (t, e) {
                                var i = this._getTilePos(t),
                                    o = this._tileCoordsToKey(t),
                                    s = this.createTile(
                                        this._wrapCoords(t),
                                        n(this._tileReady, this, t)
                                    );
                                this._initTile(s),
                                    this.createTile.length < 2 &&
                                        T(n(this._tileReady, this, t, null, s)),
                                    ve(s, i),
                                    (this._tiles[o] = {
                                        el: s,
                                        coords: t,
                                        current: !0,
                                    }),
                                    e.appendChild(s),
                                    this.fire("tileloadstart", {
                                        tile: s,
                                        coords: t,
                                    });
                            },
                            _tileReady: function (t, e, i) {
                                e &&
                                    this.fire("tileerror", {
                                        error: e,
                                        tile: i,
                                        coords: t,
                                    });
                                var o = this._tileCoordsToKey(t);
                                (i = this._tiles[o]) &&
                                    ((i.loaded = +new Date()),
                                    this._map._fadeAnimated
                                        ? (me(i.el, 0),
                                          M(this._fadeFrame),
                                          (this._fadeFrame = T(
                                              this._updateOpacity,
                                              this
                                          )))
                                        : ((i.active = !0), this._pruneTiles()),
                                    e ||
                                        (ce(i.el, "leaflet-tile-loaded"),
                                        this.fire("tileload", {
                                            tile: i.el,
                                            coords: t,
                                        })),
                                    this._noTilesToLoad() &&
                                        ((this._loading = !1),
                                        this.fire("load"),
                                        At.ielt9 || !this._map._fadeAnimated
                                            ? T(this._pruneTiles, this)
                                            : setTimeout(
                                                  n(this._pruneTiles, this),
                                                  250
                                              )));
                            },
                            _getTilePos: function (t) {
                                return t
                                    .scaleBy(this.getTileSize())
                                    .subtract(this._level.origin);
                            },
                            _wrapCoords: function (t) {
                                var e = new E(
                                    this._wrapX ? a(t.x, this._wrapX) : t.x,
                                    this._wrapY ? a(t.y, this._wrapY) : t.y
                                );
                                return (e.z = t.z), e;
                            },
                            _pxBoundsToTileRange: function (t) {
                                var e = this.getTileSize();
                                return new A(
                                    t.min.unscaleBy(e).floor(),
                                    t.max.unscaleBy(e).ceil().subtract([1, 1])
                                );
                            },
                            _noTilesToLoad: function () {
                                for (var t in this._tiles)
                                    if (!this._tiles[t].loaded) return !1;
                                return !0;
                            },
                        });
                        var rn = sn.extend({
                            options: {
                                minZoom: 0,
                                maxZoom: 18,
                                subdomains: "abc",
                                errorTileUrl: "",
                                zoomOffset: 0,
                                tms: !1,
                                zoomReverse: !1,
                                detectRetina: !1,
                                crossOrigin: !1,
                                referrerPolicy: !1,
                            },
                            initialize: function (t, e) {
                                (this._url = t),
                                    (e = d(this, e)).detectRetina &&
                                    At.retina &&
                                    e.maxZoom > 0
                                        ? ((e.tileSize = Math.floor(
                                              e.tileSize / 2
                                          )),
                                          e.zoomReverse
                                              ? (e.zoomOffset--,
                                                (e.minZoom = Math.min(
                                                    e.maxZoom,
                                                    e.minZoom + 1
                                                )))
                                              : (e.zoomOffset++,
                                                (e.maxZoom = Math.max(
                                                    e.minZoom,
                                                    e.maxZoom - 1
                                                ))),
                                          (e.minZoom = Math.max(0, e.minZoom)))
                                        : e.zoomReverse
                                        ? (e.minZoom = Math.min(
                                              e.maxZoom,
                                              e.minZoom
                                          ))
                                        : (e.maxZoom = Math.max(
                                              e.minZoom,
                                              e.maxZoom
                                          )),
                                    "string" == typeof e.subdomains &&
                                        (e.subdomains = e.subdomains.split("")),
                                    this.on("tileunload", this._onTileRemove);
                            },
                            setUrl: function (t, e) {
                                return (
                                    this._url === t && void 0 === e && (e = !0),
                                    (this._url = t),
                                    e || this.redraw(),
                                    this
                                );
                            },
                            createTile: function (t, e) {
                                var i = document.createElement("img");
                                return (
                                    Ce(
                                        i,
                                        "load",
                                        n(this._tileOnLoad, this, e, i)
                                    ),
                                    Ce(
                                        i,
                                        "error",
                                        n(this._tileOnError, this, e, i)
                                    ),
                                    (this.options.crossOrigin ||
                                        "" === this.options.crossOrigin) &&
                                        (i.crossOrigin =
                                            !0 === this.options.crossOrigin
                                                ? ""
                                                : this.options.crossOrigin),
                                    "string" ==
                                        typeof this.options.referrerPolicy &&
                                        (i.referrerPolicy =
                                            this.options.referrerPolicy),
                                    (i.alt = ""),
                                    (i.src = this.getTileUrl(t)),
                                    i
                                );
                            },
                            getTileUrl: function (t) {
                                var i = {
                                    r: At.retina ? "@2x" : "",
                                    s: this._getSubdomain(t),
                                    x: t.x,
                                    y: t.y,
                                    z: this._getZoomForUrl(),
                                };
                                if (
                                    this._map &&
                                    !this._map.options.crs.infinite
                                ) {
                                    var n = this._globalTileRange.max.y - t.y;
                                    this.options.tms && (i.y = n),
                                        (i["-y"] = n);
                                }
                                return m(this._url, e(i, this.options));
                            },
                            _tileOnLoad: function (t, e) {
                                At.ielt9
                                    ? setTimeout(n(t, this, null, e), 0)
                                    : t(null, e);
                            },
                            _tileOnError: function (t, e, i) {
                                var n = this.options.errorTileUrl;
                                n && e.getAttribute("src") !== n && (e.src = n),
                                    t(i, e);
                            },
                            _onTileRemove: function (t) {
                                t.tile.onload = null;
                            },
                            _getZoomForUrl: function () {
                                var t = this._tileZoom,
                                    e = this.options.maxZoom;
                                return (
                                    this.options.zoomReverse && (t = e - t),
                                    t + this.options.zoomOffset
                                );
                            },
                            _getSubdomain: function (t) {
                                var e =
                                    Math.abs(t.x + t.y) %
                                    this.options.subdomains.length;
                                return this.options.subdomains[e];
                            },
                            _abortLoading: function () {
                                var t, e;
                                for (t in this._tiles)
                                    if (
                                        this._tiles[t].coords.z !==
                                            this._tileZoom &&
                                        (((e = this._tiles[t].el).onload = h),
                                        (e.onerror = h),
                                        !e.complete)
                                    ) {
                                        e.src = v;
                                        var i = this._tiles[t].coords;
                                        re(e),
                                            delete this._tiles[t],
                                            this.fire("tileabort", {
                                                tile: e,
                                                coords: i,
                                            });
                                    }
                            },
                            _removeTile: function (t) {
                                var e = this._tiles[t];
                                if (e)
                                    return (
                                        e.el.setAttribute("src", v),
                                        sn.prototype._removeTile.call(this, t)
                                    );
                            },
                            _tileReady: function (t, e, i) {
                                if (
                                    this._map &&
                                    (!i || i.getAttribute("src") !== v)
                                )
                                    return sn.prototype._tileReady.call(
                                        this,
                                        t,
                                        e,
                                        i
                                    );
                            },
                        });
                        function an(t, e) {
                            return new rn(t, e);
                        }
                        var hn = rn.extend({
                            defaultWmsParams: {
                                service: "WMS",
                                request: "GetMap",
                                layers: "",
                                styles: "",
                                format: "image/jpeg",
                                transparent: !1,
                                version: "1.1.1",
                            },
                            options: {
                                crs: null,
                                uppercase: !1,
                            },
                            initialize: function (t, i) {
                                this._url = t;
                                var n = e({}, this.defaultWmsParams);
                                for (var o in i)
                                    o in this.options || (n[o] = i[o]);
                                var s =
                                        (i = d(this, i)).detectRetina &&
                                        At.retina
                                            ? 2
                                            : 1,
                                    r = this.getTileSize();
                                (n.width = r.x * s),
                                    (n.height = r.y * s),
                                    (this.wmsParams = n);
                            },
                            onAdd: function (t) {
                                (this._crs = this.options.crs || t.options.crs),
                                    (this._wmsVersion = parseFloat(
                                        this.wmsParams.version
                                    ));
                                var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                                (this.wmsParams[e] = this._crs.code),
                                    rn.prototype.onAdd.call(this, t);
                            },
                            getTileUrl: function (t) {
                                var e = this._tileCoordsToNwSe(t),
                                    i = this._crs,
                                    n = B(i.project(e[0]), i.project(e[1])),
                                    o = n.min,
                                    s = n.max,
                                    r = (
                                        this._wmsVersion >= 1.3 &&
                                        this._crs === Ti
                                            ? [o.y, o.x, s.y, s.x]
                                            : [o.x, o.y, s.x, s.y]
                                    ).join(","),
                                    a = rn.prototype.getTileUrl.call(this, t);
                                return (
                                    a +
                                    _(
                                        this.wmsParams,
                                        a,
                                        this.options.uppercase
                                    ) +
                                    (this.options.uppercase
                                        ? "&BBOX="
                                        : "&bbox=") +
                                    r
                                );
                            },
                            setParams: function (t, i) {
                                return (
                                    e(this.wmsParams, t),
                                    i || this.redraw(),
                                    this
                                );
                            },
                        });
                        (rn.WMS = hn),
                            (an.wms = function (t, e) {
                                return new hn(t, e);
                            });
                        var ln = zi.extend({
                                options: {
                                    padding: 0.1,
                                },
                                initialize: function (t) {
                                    d(this, t),
                                        s(this),
                                        (this._layers = this._layers || {});
                                },
                                onAdd: function () {
                                    this._container ||
                                        (this._initContainer(),
                                        ce(
                                            this._container,
                                            "leaflet-zoom-animated"
                                        )),
                                        this.getPane().appendChild(
                                            this._container
                                        ),
                                        this._update(),
                                        this.on(
                                            "update",
                                            this._updatePaths,
                                            this
                                        );
                                },
                                onRemove: function () {
                                    this.off("update", this._updatePaths, this),
                                        this._destroyContainer();
                                },
                                getEvents: function () {
                                    var t = {
                                        viewreset: this._reset,
                                        zoom: this._onZoom,
                                        moveend: this._update,
                                        zoomend: this._onZoomEnd,
                                    };
                                    return (
                                        this._zoomAnimated &&
                                            (t.zoomanim = this._onAnimZoom),
                                        t
                                    );
                                },
                                _onAnimZoom: function (t) {
                                    this._updateTransform(t.center, t.zoom);
                                },
                                _onZoom: function () {
                                    this._updateTransform(
                                        this._map.getCenter(),
                                        this._map.getZoom()
                                    );
                                },
                                _updateTransform: function (t, e) {
                                    var i = this._map.getZoomScale(
                                            e,
                                            this._zoom
                                        ),
                                        n = this._map
                                            .getSize()
                                            .multiplyBy(
                                                0.5 + this.options.padding
                                            ),
                                        o = this._map.project(this._center, e),
                                        s = n
                                            .multiplyBy(-i)
                                            .add(o)
                                            .subtract(
                                                this._map._getNewPixelOrigin(
                                                    t,
                                                    e
                                                )
                                            );
                                    At.any3d
                                        ? ge(this._container, s, i)
                                        : ve(this._container, s);
                                },
                                _reset: function () {
                                    for (var t in (this._update(),
                                    this._updateTransform(
                                        this._center,
                                        this._zoom
                                    ),
                                    this._layers))
                                        this._layers[t]._reset();
                                },
                                _onZoomEnd: function () {
                                    for (var t in this._layers)
                                        this._layers[t]._project();
                                },
                                _updatePaths: function () {
                                    for (var t in this._layers)
                                        this._layers[t]._update();
                                },
                                _update: function () {
                                    var t = this.options.padding,
                                        e = this._map.getSize(),
                                        i = this._map
                                            .containerPointToLayerPoint(
                                                e.multiplyBy(-t)
                                            )
                                            .round();
                                    (this._bounds = new A(
                                        i,
                                        i.add(e.multiplyBy(1 + 2 * t)).round()
                                    )),
                                        (this._center = this._map.getCenter()),
                                        (this._zoom = this._map.getZoom());
                                },
                            }),
                            un = ln.extend({
                                options: {
                                    tolerance: 0,
                                },
                                getEvents: function () {
                                    var t = ln.prototype.getEvents.call(this);
                                    return (
                                        (t.viewprereset = this._onViewPreReset),
                                        t
                                    );
                                },
                                _onViewPreReset: function () {
                                    this._postponeUpdatePaths = !0;
                                },
                                onAdd: function () {
                                    ln.prototype.onAdd.call(this), this._draw();
                                },
                                _initContainer: function () {
                                    var t = (this._container =
                                        document.createElement("canvas"));
                                    Ce(t, "mousemove", this._onMouseMove, this),
                                        Ce(
                                            t,
                                            "click dblclick mousedown mouseup contextmenu",
                                            this._onClick,
                                            this
                                        ),
                                        Ce(
                                            t,
                                            "mouseout",
                                            this._handleMouseOut,
                                            this
                                        ),
                                        (t._leaflet_disable_events = !0),
                                        (this._ctx = t.getContext("2d"));
                                },
                                _destroyContainer: function () {
                                    M(this._redrawRequest),
                                        delete this._ctx,
                                        re(this._container),
                                        Ze(this._container),
                                        delete this._container;
                                },
                                _updatePaths: function () {
                                    if (!this._postponeUpdatePaths) {
                                        for (var t in ((this._redrawBounds =
                                            null),
                                        this._layers))
                                            this._layers[t]._update();
                                        this._redraw();
                                    }
                                },
                                _update: function () {
                                    if (
                                        !this._map._animatingZoom ||
                                        !this._bounds
                                    ) {
                                        ln.prototype._update.call(this);
                                        var t = this._bounds,
                                            e = this._container,
                                            i = t.getSize(),
                                            n = At.retina ? 2 : 1;
                                        ve(e, t.min),
                                            (e.width = n * i.x),
                                            (e.height = n * i.y),
                                            (e.style.width = i.x + "px"),
                                            (e.style.height = i.y + "px"),
                                            At.retina && this._ctx.scale(2, 2),
                                            this._ctx.translate(
                                                -t.min.x,
                                                -t.min.y
                                            ),
                                            this.fire("update");
                                    }
                                },
                                _reset: function () {
                                    ln.prototype._reset.call(this),
                                        this._postponeUpdatePaths &&
                                            ((this._postponeUpdatePaths = !1),
                                            this._updatePaths());
                                },
                                _initPath: function (t) {
                                    this._updateDashArray(t),
                                        (this._layers[s(t)] = t);
                                    var e = (t._order = {
                                        layer: t,
                                        prev: this._drawLast,
                                        next: null,
                                    });
                                    this._drawLast && (this._drawLast.next = e),
                                        (this._drawLast = e),
                                        (this._drawFirst =
                                            this._drawFirst || this._drawLast);
                                },
                                _addPath: function (t) {
                                    this._requestRedraw(t);
                                },
                                _removePath: function (t) {
                                    var e = t._order,
                                        i = e.next,
                                        n = e.prev;
                                    i ? (i.prev = n) : (this._drawLast = n),
                                        n
                                            ? (n.next = i)
                                            : (this._drawFirst = i),
                                        delete t._order,
                                        delete this._layers[s(t)],
                                        this._requestRedraw(t);
                                },
                                _updatePath: function (t) {
                                    this._extendRedrawBounds(t),
                                        t._project(),
                                        t._update(),
                                        this._requestRedraw(t);
                                },
                                _updateStyle: function (t) {
                                    this._updateDashArray(t),
                                        this._requestRedraw(t);
                                },
                                _updateDashArray: function (t) {
                                    if (
                                        "string" == typeof t.options.dashArray
                                    ) {
                                        var e,
                                            i,
                                            n =
                                                t.options.dashArray.split(
                                                    /[, ]+/
                                                ),
                                            o = [];
                                        for (i = 0; i < n.length; i++) {
                                            if (((e = Number(n[i])), isNaN(e)))
                                                return;
                                            o.push(e);
                                        }
                                        t.options._dashArray = o;
                                    } else
                                        t.options._dashArray =
                                            t.options.dashArray;
                                },
                                _requestRedraw: function (t) {
                                    this._map &&
                                        (this._extendRedrawBounds(t),
                                        (this._redrawRequest =
                                            this._redrawRequest ||
                                            T(this._redraw, this)));
                                },
                                _extendRedrawBounds: function (t) {
                                    if (t._pxBounds) {
                                        var e = (t.options.weight || 0) + 1;
                                        (this._redrawBounds =
                                            this._redrawBounds || new A()),
                                            this._redrawBounds.extend(
                                                t._pxBounds.min.subtract([e, e])
                                            ),
                                            this._redrawBounds.extend(
                                                t._pxBounds.max.add([e, e])
                                            );
                                    }
                                },
                                _redraw: function () {
                                    (this._redrawRequest = null),
                                        this._redrawBounds &&
                                            (this._redrawBounds.min._floor(),
                                            this._redrawBounds.max._ceil()),
                                        this._clear(),
                                        this._draw(),
                                        (this._redrawBounds = null);
                                },
                                _clear: function () {
                                    var t = this._redrawBounds;
                                    if (t) {
                                        var e = t.getSize();
                                        this._ctx.clearRect(
                                            t.min.x,
                                            t.min.y,
                                            e.x,
                                            e.y
                                        );
                                    } else
                                        this._ctx.save(),
                                            this._ctx.setTransform(
                                                1,
                                                0,
                                                0,
                                                1,
                                                0,
                                                0
                                            ),
                                            this._ctx.clearRect(
                                                0,
                                                0,
                                                this._container.width,
                                                this._container.height
                                            ),
                                            this._ctx.restore();
                                },
                                _draw: function () {
                                    var t,
                                        e = this._redrawBounds;
                                    if ((this._ctx.save(), e)) {
                                        var i = e.getSize();
                                        this._ctx.beginPath(),
                                            this._ctx.rect(
                                                e.min.x,
                                                e.min.y,
                                                i.x,
                                                i.y
                                            ),
                                            this._ctx.clip();
                                    }
                                    this._drawing = !0;
                                    for (var n = this._drawFirst; n; n = n.next)
                                        (t = n.layer),
                                            (!e ||
                                                (t._pxBounds &&
                                                    t._pxBounds.intersects(
                                                        e
                                                    ))) &&
                                                t._updatePath();
                                    (this._drawing = !1), this._ctx.restore();
                                },
                                _updatePoly: function (t, e) {
                                    if (this._drawing) {
                                        var i,
                                            n,
                                            o,
                                            s,
                                            r = t._parts,
                                            a = r.length,
                                            h = this._ctx;
                                        if (a) {
                                            for (
                                                h.beginPath(), i = 0;
                                                i < a;
                                                i++
                                            ) {
                                                for (
                                                    n = 0, o = r[i].length;
                                                    n < o;
                                                    n++
                                                )
                                                    (s = r[i][n]),
                                                        h[
                                                            n
                                                                ? "lineTo"
                                                                : "moveTo"
                                                        ](s.x, s.y);
                                                e && h.closePath();
                                            }
                                            this._fillStroke(h, t);
                                        }
                                    }
                                },
                                _updateCircle: function (t) {
                                    if (this._drawing && !t._empty()) {
                                        var e = t._point,
                                            i = this._ctx,
                                            n = Math.max(
                                                Math.round(t._radius),
                                                1
                                            ),
                                            o =
                                                (Math.max(
                                                    Math.round(t._radiusY),
                                                    1
                                                ) || n) / n;
                                        1 !== o && (i.save(), i.scale(1, o)),
                                            i.beginPath(),
                                            i.arc(
                                                e.x,
                                                e.y / o,
                                                n,
                                                0,
                                                2 * Math.PI,
                                                !1
                                            ),
                                            1 !== o && i.restore(),
                                            this._fillStroke(i, t);
                                    }
                                },
                                _fillStroke: function (t, e) {
                                    var i = e.options;
                                    i.fill &&
                                        ((t.globalAlpha = i.fillOpacity),
                                        (t.fillStyle = i.fillColor || i.color),
                                        t.fill(i.fillRule || "evenodd")),
                                        i.stroke &&
                                            0 !== i.weight &&
                                            (t.setLineDash &&
                                                t.setLineDash(
                                                    (e.options &&
                                                        e.options._dashArray) ||
                                                        []
                                                ),
                                            (t.globalAlpha = i.opacity),
                                            (t.lineWidth = i.weight),
                                            (t.strokeStyle = i.color),
                                            (t.lineCap = i.lineCap),
                                            (t.lineJoin = i.lineJoin),
                                            t.stroke());
                                },
                                _onClick: function (t) {
                                    for (
                                        var e,
                                            i,
                                            n =
                                                this._map.mouseEventToLayerPoint(
                                                    t
                                                ),
                                            o = this._drawFirst;
                                        o;
                                        o = o.next
                                    )
                                        (e = o.layer).options.interactive &&
                                            e._containsPoint(n) &&
                                            (("click" !== t.type &&
                                                "preclick" !== t.type) ||
                                                !this._map._draggableMoved(
                                                    e
                                                )) &&
                                            (i = e);
                                    this._fireEvent(!!i && [i], t);
                                },
                                _onMouseMove: function (t) {
                                    if (
                                        this._map &&
                                        !this._map.dragging.moving() &&
                                        !this._map._animatingZoom
                                    ) {
                                        var e =
                                            this._map.mouseEventToLayerPoint(t);
                                        this._handleMouseHover(t, e);
                                    }
                                },
                                _handleMouseOut: function (t) {
                                    var e = this._hoveredLayer;
                                    e &&
                                        (de(
                                            this._container,
                                            "leaflet-interactive"
                                        ),
                                        this._fireEvent([e], t, "mouseout"),
                                        (this._hoveredLayer = null),
                                        (this._mouseHoverThrottled = !1));
                                },
                                _handleMouseHover: function (t, e) {
                                    if (!this._mouseHoverThrottled) {
                                        for (
                                            var i, o, s = this._drawFirst;
                                            s;
                                            s = s.next
                                        )
                                            (i = s.layer).options.interactive &&
                                                i._containsPoint(e) &&
                                                (o = i);
                                        o !== this._hoveredLayer &&
                                            (this._handleMouseOut(t),
                                            o &&
                                                (ce(
                                                    this._container,
                                                    "leaflet-interactive"
                                                ),
                                                this._fireEvent(
                                                    [o],
                                                    t,
                                                    "mouseover"
                                                ),
                                                (this._hoveredLayer = o))),
                                            this._fireEvent(
                                                !!this._hoveredLayer && [
                                                    this._hoveredLayer,
                                                ],
                                                t
                                            ),
                                            (this._mouseHoverThrottled = !0),
                                            setTimeout(
                                                n(function () {
                                                    this._mouseHoverThrottled =
                                                        !1;
                                                }, this),
                                                32
                                            );
                                    }
                                },
                                _fireEvent: function (t, e, i) {
                                    this._map._fireDOMEvent(e, i || e.type, t);
                                },
                                _bringToFront: function (t) {
                                    var e = t._order;
                                    if (e) {
                                        var i = e.next,
                                            n = e.prev;
                                        i &&
                                            ((i.prev = n),
                                            n
                                                ? (n.next = i)
                                                : i && (this._drawFirst = i),
                                            (e.prev = this._drawLast),
                                            (this._drawLast.next = e),
                                            (e.next = null),
                                            (this._drawLast = e),
                                            this._requestRedraw(t));
                                    }
                                },
                                _bringToBack: function (t) {
                                    var e = t._order;
                                    if (e) {
                                        var i = e.next,
                                            n = e.prev;
                                        n &&
                                            ((n.next = i),
                                            i
                                                ? (i.prev = n)
                                                : n && (this._drawLast = n),
                                            (e.prev = null),
                                            (e.next = this._drawFirst),
                                            (this._drawFirst.prev = e),
                                            (this._drawFirst = e),
                                            this._requestRedraw(t));
                                    }
                                },
                            });
                        function cn(t) {
                            return At.canvas ? new un(t) : null;
                        }
                        var dn = (function () {
                                try {
                                    return (
                                        document.namespaces.add(
                                            "lvml",
                                            "urn:schemas-microsoft-com:vml"
                                        ),
                                        function (t) {
                                            return document.createElement(
                                                "<lvml:" + t + ' class="lvml">'
                                            );
                                        }
                                    );
                                } catch (t) {}
                                return function (t) {
                                    return document.createElement(
                                        "<" +
                                            t +
                                            ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
                                    );
                                };
                            })(),
                            _n = {
                                _initContainer: function () {
                                    this._container = se(
                                        "div",
                                        "leaflet-vml-container"
                                    );
                                },
                                _update: function () {
                                    this._map._animatingZoom ||
                                        (ln.prototype._update.call(this),
                                        this.fire("update"));
                                },
                                _initPath: function (t) {
                                    var e = (t._container = dn("shape"));
                                    ce(
                                        e,
                                        "leaflet-vml-shape " +
                                            (this.options.className || "")
                                    ),
                                        (e.coordsize = "1 1"),
                                        (t._path = dn("path")),
                                        e.appendChild(t._path),
                                        this._updateStyle(t),
                                        (this._layers[s(t)] = t);
                                },
                                _addPath: function (t) {
                                    var e = t._container;
                                    this._container.appendChild(e),
                                        t.options.interactive &&
                                            t.addInteractiveTarget(e);
                                },
                                _removePath: function (t) {
                                    var e = t._container;
                                    re(e),
                                        t.removeInteractiveTarget(e),
                                        delete this._layers[s(t)];
                                },
                                _updateStyle: function (t) {
                                    var e = t._stroke,
                                        i = t._fill,
                                        n = t.options,
                                        o = t._container;
                                    (o.stroked = !!n.stroke),
                                        (o.filled = !!n.fill),
                                        n.stroke
                                            ? (e ||
                                                  (e = t._stroke =
                                                      dn("stroke")),
                                              o.appendChild(e),
                                              (e.weight = n.weight + "px"),
                                              (e.color = n.color),
                                              (e.opacity = n.opacity),
                                              n.dashArray
                                                  ? (e.dashStyle = f(
                                                        n.dashArray
                                                    )
                                                        ? n.dashArray.join(" ")
                                                        : n.dashArray.replace(
                                                              /( *, *)/g,
                                                              " "
                                                          ))
                                                  : (e.dashStyle = ""),
                                              (e.endcap = n.lineCap.replace(
                                                  "butt",
                                                  "flat"
                                              )),
                                              (e.joinstyle = n.lineJoin))
                                            : e &&
                                              (o.removeChild(e),
                                              (t._stroke = null)),
                                        n.fill
                                            ? (i || (i = t._fill = dn("fill")),
                                              o.appendChild(i),
                                              (i.color =
                                                  n.fillColor || n.color),
                                              (i.opacity = n.fillOpacity))
                                            : i &&
                                              (o.removeChild(i),
                                              (t._fill = null));
                                },
                                _updateCircle: function (t) {
                                    var e = t._point.round(),
                                        i = Math.round(t._radius),
                                        n = Math.round(t._radiusY || i);
                                    this._setPath(
                                        t,
                                        t._empty()
                                            ? "M0 0"
                                            : "AL " +
                                                  e.x +
                                                  "," +
                                                  e.y +
                                                  " " +
                                                  i +
                                                  "," +
                                                  n +
                                                  " 0,23592600"
                                    );
                                },
                                _setPath: function (t, e) {
                                    t._path.v = e;
                                },
                                _bringToFront: function (t) {
                                    he(t._container);
                                },
                                _bringToBack: function (t) {
                                    le(t._container);
                                },
                            },
                            pn = At.vml ? dn : Y,
                            mn = ln.extend({
                                _initContainer: function () {
                                    (this._container = pn("svg")),
                                        this._container.setAttribute(
                                            "pointer-events",
                                            "none"
                                        ),
                                        (this._rootGroup = pn("g")),
                                        this._container.appendChild(
                                            this._rootGroup
                                        );
                                },
                                _destroyContainer: function () {
                                    re(this._container),
                                        Ze(this._container),
                                        delete this._container,
                                        delete this._rootGroup,
                                        delete this._svgSize;
                                },
                                _update: function () {
                                    if (
                                        !this._map._animatingZoom ||
                                        !this._bounds
                                    ) {
                                        ln.prototype._update.call(this);
                                        var t = this._bounds,
                                            e = t.getSize(),
                                            i = this._container;
                                        (this._svgSize &&
                                            this._svgSize.equals(e)) ||
                                            ((this._svgSize = e),
                                            i.setAttribute("width", e.x),
                                            i.setAttribute("height", e.y)),
                                            ve(i, t.min),
                                            i.setAttribute(
                                                "viewBox",
                                                [
                                                    t.min.x,
                                                    t.min.y,
                                                    e.x,
                                                    e.y,
                                                ].join(" ")
                                            ),
                                            this.fire("update");
                                    }
                                },
                                _initPath: function (t) {
                                    var e = (t._path = pn("path"));
                                    t.options.className &&
                                        ce(e, t.options.className),
                                        t.options.interactive &&
                                            ce(e, "leaflet-interactive"),
                                        this._updateStyle(t),
                                        (this._layers[s(t)] = t);
                                },
                                _addPath: function (t) {
                                    this._rootGroup || this._initContainer(),
                                        this._rootGroup.appendChild(t._path),
                                        t.addInteractiveTarget(t._path);
                                },
                                _removePath: function (t) {
                                    re(t._path),
                                        t.removeInteractiveTarget(t._path),
                                        delete this._layers[s(t)];
                                },
                                _updatePath: function (t) {
                                    t._project(), t._update();
                                },
                                _updateStyle: function (t) {
                                    var e = t._path,
                                        i = t.options;
                                    e &&
                                        (i.stroke
                                            ? (e.setAttribute(
                                                  "stroke",
                                                  i.color
                                              ),
                                              e.setAttribute(
                                                  "stroke-opacity",
                                                  i.opacity
                                              ),
                                              e.setAttribute(
                                                  "stroke-width",
                                                  i.weight
                                              ),
                                              e.setAttribute(
                                                  "stroke-linecap",
                                                  i.lineCap
                                              ),
                                              e.setAttribute(
                                                  "stroke-linejoin",
                                                  i.lineJoin
                                              ),
                                              i.dashArray
                                                  ? e.setAttribute(
                                                        "stroke-dasharray",
                                                        i.dashArray
                                                    )
                                                  : e.removeAttribute(
                                                        "stroke-dasharray"
                                                    ),
                                              i.dashOffset
                                                  ? e.setAttribute(
                                                        "stroke-dashoffset",
                                                        i.dashOffset
                                                    )
                                                  : e.removeAttribute(
                                                        "stroke-dashoffset"
                                                    ))
                                            : e.setAttribute("stroke", "none"),
                                        i.fill
                                            ? (e.setAttribute(
                                                  "fill",
                                                  i.fillColor || i.color
                                              ),
                                              e.setAttribute(
                                                  "fill-opacity",
                                                  i.fillOpacity
                                              ),
                                              e.setAttribute(
                                                  "fill-rule",
                                                  i.fillRule || "evenodd"
                                              ))
                                            : e.setAttribute("fill", "none"));
                                },
                                _updatePoly: function (t, e) {
                                    this._setPath(t, X(t._parts, e));
                                },
                                _updateCircle: function (t) {
                                    var e = t._point,
                                        i = Math.max(Math.round(t._radius), 1),
                                        n =
                                            "a" +
                                            i +
                                            "," +
                                            (Math.max(
                                                Math.round(t._radiusY),
                                                1
                                            ) || i) +
                                            " 0 1,0 ",
                                        o = t._empty()
                                            ? "M0 0"
                                            : "M" +
                                              (e.x - i) +
                                              "," +
                                              e.y +
                                              n +
                                              2 * i +
                                              ",0 " +
                                              n +
                                              2 * -i +
                                              ",0 ";
                                    this._setPath(t, o);
                                },
                                _setPath: function (t, e) {
                                    t._path.setAttribute("d", e);
                                },
                                _bringToFront: function (t) {
                                    he(t._path);
                                },
                                _bringToBack: function (t) {
                                    le(t._path);
                                },
                            });
                        function fn(t) {
                            return At.svg || At.vml ? new mn(t) : null;
                        }
                        At.vml && mn.include(_n),
                            Ge.include({
                                getRenderer: function (t) {
                                    var e =
                                        t.options.renderer ||
                                        this._getPaneRenderer(t.options.pane) ||
                                        this.options.renderer ||
                                        this._renderer;
                                    return (
                                        e ||
                                            (e = this._renderer =
                                                this._createRenderer()),
                                        this.hasLayer(e) || this.addLayer(e),
                                        e
                                    );
                                },
                                _getPaneRenderer: function (t) {
                                    if ("overlayPane" === t || void 0 === t)
                                        return !1;
                                    var e = this._paneRenderers[t];
                                    return (
                                        void 0 === e &&
                                            ((e = this._createRenderer({
                                                pane: t,
                                            })),
                                            (this._paneRenderers[t] = e)),
                                        e
                                    );
                                },
                                _createRenderer: function (t) {
                                    return (
                                        (this.options.preferCanvas && cn(t)) ||
                                        fn(t)
                                    );
                                },
                            });
                        var gn = Ni.extend({
                            initialize: function (t, e) {
                                Ni.prototype.initialize.call(
                                    this,
                                    this._boundsToLatLngs(t),
                                    e
                                );
                            },
                            setBounds: function (t) {
                                return this.setLatLngs(
                                    this._boundsToLatLngs(t)
                                );
                            },
                            _boundsToLatLngs: function (t) {
                                return [
                                    (t = R(t)).getSouthWest(),
                                    t.getNorthWest(),
                                    t.getNorthEast(),
                                    t.getSouthEast(),
                                ];
                            },
                        });
                        (mn.create = pn),
                            (mn.pointsToPath = X),
                            (Di.geometryToLayer = ji),
                            (Di.coordsToLatLng = Fi),
                            (Di.coordsToLatLngs = Wi),
                            (Di.latLngToCoords = Ui),
                            (Di.latLngsToCoords = Vi),
                            (Di.getFeature = qi),
                            (Di.asFeature = Gi),
                            Ge.mergeOptions({
                                boxZoom: !0,
                            });
                        var vn = ti.extend({
                            initialize: function (t) {
                                (this._map = t),
                                    (this._container = t._container),
                                    (this._pane = t._panes.overlayPane),
                                    (this._resetStateTimeout = 0),
                                    t.on("unload", this._destroy, this);
                            },
                            addHooks: function () {
                                Ce(
                                    this._container,
                                    "mousedown",
                                    this._onMouseDown,
                                    this
                                );
                            },
                            removeHooks: function () {
                                Ze(
                                    this._container,
                                    "mousedown",
                                    this._onMouseDown,
                                    this
                                );
                            },
                            moved: function () {
                                return this._moved;
                            },
                            _destroy: function () {
                                re(this._pane), delete this._pane;
                            },
                            _resetState: function () {
                                (this._resetStateTimeout = 0),
                                    (this._moved = !1);
                            },
                            _clearDeferredResetState: function () {
                                0 !== this._resetStateTimeout &&
                                    (clearTimeout(this._resetStateTimeout),
                                    (this._resetStateTimeout = 0));
                            },
                            _onMouseDown: function (t) {
                                if (
                                    !t.shiftKey ||
                                    (1 !== t.which && 1 !== t.button)
                                )
                                    return !1;
                                this._clearDeferredResetState(),
                                    this._resetState(),
                                    Yt(),
                                    we(),
                                    (this._startPoint =
                                        this._map.mouseEventToContainerPoint(
                                            t
                                        )),
                                    Ce(
                                        document,
                                        {
                                            contextmenu: De,
                                            mousemove: this._onMouseMove,
                                            mouseup: this._onMouseUp,
                                            keydown: this._onKeyDown,
                                        },
                                        this
                                    );
                            },
                            _onMouseMove: function (t) {
                                this._moved ||
                                    ((this._moved = !0),
                                    (this._box = se(
                                        "div",
                                        "leaflet-zoom-box",
                                        this._container
                                    )),
                                    ce(this._container, "leaflet-crosshair"),
                                    this._map.fire("boxzoomstart")),
                                    (this._point =
                                        this._map.mouseEventToContainerPoint(
                                            t
                                        ));
                                var e = new A(this._point, this._startPoint),
                                    i = e.getSize();
                                ve(this._box, e.min),
                                    (this._box.style.width = i.x + "px"),
                                    (this._box.style.height = i.y + "px");
                            },
                            _finish: function () {
                                this._moved &&
                                    (re(this._box),
                                    de(this._container, "leaflet-crosshair")),
                                    Xt(),
                                    be(),
                                    Ze(
                                        document,
                                        {
                                            contextmenu: De,
                                            mousemove: this._onMouseMove,
                                            mouseup: this._onMouseUp,
                                            keydown: this._onKeyDown,
                                        },
                                        this
                                    );
                            },
                            _onMouseUp: function (t) {
                                if (
                                    (1 === t.which || 1 === t.button) &&
                                    (this._finish(), this._moved)
                                ) {
                                    this._clearDeferredResetState(),
                                        (this._resetStateTimeout = setTimeout(
                                            n(this._resetState, this),
                                            0
                                        ));
                                    var e = new I(
                                        this._map.containerPointToLatLng(
                                            this._startPoint
                                        ),
                                        this._map.containerPointToLatLng(
                                            this._point
                                        )
                                    );
                                    this._map.fitBounds(e).fire("boxzoomend", {
                                        boxZoomBounds: e,
                                    });
                                }
                            },
                            _onKeyDown: function (t) {
                                27 === t.keyCode &&
                                    (this._finish(),
                                    this._clearDeferredResetState(),
                                    this._resetState());
                            },
                        });
                        Ge.addInitHook("addHandler", "boxZoom", vn),
                            Ge.mergeOptions({
                                doubleClickZoom: !0,
                            });
                        var yn = ti.extend({
                            addHooks: function () {
                                this._map.on(
                                    "dblclick",
                                    this._onDoubleClick,
                                    this
                                );
                            },
                            removeHooks: function () {
                                this._map.off(
                                    "dblclick",
                                    this._onDoubleClick,
                                    this
                                );
                            },
                            _onDoubleClick: function (t) {
                                var e = this._map,
                                    i = e.getZoom(),
                                    n = e.options.zoomDelta,
                                    o = t.originalEvent.shiftKey
                                        ? i - n
                                        : i + n;
                                "center" === e.options.doubleClickZoom
                                    ? e.setZoom(o)
                                    : e.setZoomAround(t.containerPoint, o);
                            },
                        });
                        Ge.addInitHook("addHandler", "doubleClickZoom", yn),
                            Ge.mergeOptions({
                                dragging: !0,
                                inertia: !0,
                                inertiaDeceleration: 3400,
                                inertiaMaxSpeed: 1 / 0,
                                easeLinearity: 0.2,
                                worldCopyJump: !1,
                                maxBoundsViscosity: 0,
                            });
                        var xn = ti.extend({
                            addHooks: function () {
                                if (!this._draggable) {
                                    var t = this._map;
                                    (this._draggable = new ni(
                                        t._mapPane,
                                        t._container
                                    )),
                                        this._draggable.on(
                                            {
                                                dragstart: this._onDragStart,
                                                drag: this._onDrag,
                                                dragend: this._onDragEnd,
                                            },
                                            this
                                        ),
                                        this._draggable.on(
                                            "predrag",
                                            this._onPreDragLimit,
                                            this
                                        ),
                                        t.options.worldCopyJump &&
                                            (this._draggable.on(
                                                "predrag",
                                                this._onPreDragWrap,
                                                this
                                            ),
                                            t.on(
                                                "zoomend",
                                                this._onZoomEnd,
                                                this
                                            ),
                                            t.whenReady(this._onZoomEnd, this));
                                }
                                ce(
                                    this._map._container,
                                    "leaflet-grab leaflet-touch-drag"
                                ),
                                    this._draggable.enable(),
                                    (this._positions = []),
                                    (this._times = []);
                            },
                            removeHooks: function () {
                                de(this._map._container, "leaflet-grab"),
                                    de(
                                        this._map._container,
                                        "leaflet-touch-drag"
                                    ),
                                    this._draggable.disable();
                            },
                            moved: function () {
                                return (
                                    this._draggable && this._draggable._moved
                                );
                            },
                            moving: function () {
                                return (
                                    this._draggable && this._draggable._moving
                                );
                            },
                            _onDragStart: function () {
                                var t = this._map;
                                if (
                                    (t._stop(),
                                    this._map.options.maxBounds &&
                                        this._map.options.maxBoundsViscosity)
                                ) {
                                    var e = R(this._map.options.maxBounds);
                                    (this._offsetLimit = B(
                                        this._map
                                            .latLngToContainerPoint(
                                                e.getNorthWest()
                                            )
                                            .multiplyBy(-1),
                                        this._map
                                            .latLngToContainerPoint(
                                                e.getSouthEast()
                                            )
                                            .multiplyBy(-1)
                                            .add(this._map.getSize())
                                    )),
                                        (this._viscosity = Math.min(
                                            1,
                                            Math.max(
                                                0,
                                                this._map.options
                                                    .maxBoundsViscosity
                                            )
                                        ));
                                } else this._offsetLimit = null;
                                t.fire("movestart").fire("dragstart"),
                                    t.options.inertia &&
                                        ((this._positions = []),
                                        (this._times = []));
                            },
                            _onDrag: function (t) {
                                if (this._map.options.inertia) {
                                    var e = (this._lastTime = +new Date()),
                                        i = (this._lastPos =
                                            this._draggable._absPos ||
                                            this._draggable._newPos);
                                    this._positions.push(i),
                                        this._times.push(e),
                                        this._prunePositions(e);
                                }
                                this._map.fire("move", t).fire("drag", t);
                            },
                            _prunePositions: function (t) {
                                for (
                                    ;
                                    this._positions.length > 1 &&
                                    t - this._times[0] > 50;

                                )
                                    this._positions.shift(),
                                        this._times.shift();
                            },
                            _onZoomEnd: function () {
                                var t = this._map.getSize().divideBy(2),
                                    e = this._map.latLngToLayerPoint([0, 0]);
                                (this._initialWorldOffset = e.subtract(t).x),
                                    (this._worldWidth = this._map
                                        .getPixelWorldBounds()
                                        .getSize().x);
                            },
                            _viscousLimit: function (t, e) {
                                return t - (t - e) * this._viscosity;
                            },
                            _onPreDragLimit: function () {
                                if (this._viscosity && this._offsetLimit) {
                                    var t = this._draggable._newPos.subtract(
                                            this._draggable._startPos
                                        ),
                                        e = this._offsetLimit;
                                    t.x < e.min.x &&
                                        (t.x = this._viscousLimit(
                                            t.x,
                                            e.min.x
                                        )),
                                        t.y < e.min.y &&
                                            (t.y = this._viscousLimit(
                                                t.y,
                                                e.min.y
                                            )),
                                        t.x > e.max.x &&
                                            (t.x = this._viscousLimit(
                                                t.x,
                                                e.max.x
                                            )),
                                        t.y > e.max.y &&
                                            (t.y = this._viscousLimit(
                                                t.y,
                                                e.max.y
                                            )),
                                        (this._draggable._newPos =
                                            this._draggable._startPos.add(t));
                                }
                            },
                            _onPreDragWrap: function () {
                                var t = this._worldWidth,
                                    e = Math.round(t / 2),
                                    i = this._initialWorldOffset,
                                    n = this._draggable._newPos.x,
                                    o = ((n - e + i) % t) + e - i,
                                    s = ((n + e + i) % t) - e - i,
                                    r =
                                        Math.abs(o + i) < Math.abs(s + i)
                                            ? o
                                            : s;
                                (this._draggable._absPos =
                                    this._draggable._newPos.clone()),
                                    (this._draggable._newPos.x = r);
                            },
                            _onDragEnd: function (t) {
                                var e = this._map,
                                    i = e.options,
                                    n =
                                        !i.inertia ||
                                        t.noInertia ||
                                        this._times.length < 2;
                                if ((e.fire("dragend", t), n))
                                    e.fire("moveend");
                                else {
                                    this._prunePositions(+new Date());
                                    var o = this._lastPos.subtract(
                                            this._positions[0]
                                        ),
                                        s =
                                            (this._lastTime - this._times[0]) /
                                            1e3,
                                        r = i.easeLinearity,
                                        a = o.multiplyBy(r / s),
                                        h = a.distanceTo([0, 0]),
                                        l = Math.min(i.inertiaMaxSpeed, h),
                                        u = a.multiplyBy(l / h),
                                        c = l / (i.inertiaDeceleration * r),
                                        d = u.multiplyBy(-c / 2).round();
                                    d.x || d.y
                                        ? ((d = e._limitOffset(
                                              d,
                                              e.options.maxBounds
                                          )),
                                          T(function () {
                                              e.panBy(d, {
                                                  duration: c,
                                                  easeLinearity: r,
                                                  noMoveStart: !0,
                                                  animate: !0,
                                              });
                                          }))
                                        : e.fire("moveend");
                                }
                            },
                        });
                        Ge.addInitHook("addHandler", "dragging", xn),
                            Ge.mergeOptions({
                                keyboard: !0,
                                keyboardPanDelta: 80,
                            });
                        var wn = ti.extend({
                            keyCodes: {
                                left: [37],
                                right: [39],
                                down: [40],
                                up: [38],
                                zoomIn: [187, 107, 61, 171],
                                zoomOut: [189, 109, 54, 173],
                            },
                            initialize: function (t) {
                                (this._map = t),
                                    this._setPanDelta(
                                        t.options.keyboardPanDelta
                                    ),
                                    this._setZoomDelta(t.options.zoomDelta);
                            },
                            addHooks: function () {
                                var t = this._map._container;
                                t.tabIndex <= 0 && (t.tabIndex = "0"),
                                    Ce(
                                        t,
                                        {
                                            focus: this._onFocus,
                                            blur: this._onBlur,
                                            mousedown: this._onMouseDown,
                                        },
                                        this
                                    ),
                                    this._map.on(
                                        {
                                            focus: this._addHooks,
                                            blur: this._removeHooks,
                                        },
                                        this
                                    );
                            },
                            removeHooks: function () {
                                this._removeHooks(),
                                    Ze(
                                        this._map._container,
                                        {
                                            focus: this._onFocus,
                                            blur: this._onBlur,
                                            mousedown: this._onMouseDown,
                                        },
                                        this
                                    ),
                                    this._map.off(
                                        {
                                            focus: this._addHooks,
                                            blur: this._removeHooks,
                                        },
                                        this
                                    );
                            },
                            _onMouseDown: function () {
                                if (!this._focused) {
                                    var t = document.body,
                                        e = document.documentElement,
                                        i = t.scrollTop || e.scrollTop,
                                        n = t.scrollLeft || e.scrollLeft;
                                    this._map._container.focus(),
                                        window.scrollTo(n, i);
                                }
                            },
                            _onFocus: function () {
                                (this._focused = !0), this._map.fire("focus");
                            },
                            _onBlur: function () {
                                (this._focused = !1), this._map.fire("blur");
                            },
                            _setPanDelta: function (t) {
                                var e,
                                    i,
                                    n = (this._panKeys = {}),
                                    o = this.keyCodes;
                                for (e = 0, i = o.left.length; e < i; e++)
                                    n[o.left[e]] = [-1 * t, 0];
                                for (e = 0, i = o.right.length; e < i; e++)
                                    n[o.right[e]] = [t, 0];
                                for (e = 0, i = o.down.length; e < i; e++)
                                    n[o.down[e]] = [0, t];
                                for (e = 0, i = o.up.length; e < i; e++)
                                    n[o.up[e]] = [0, -1 * t];
                            },
                            _setZoomDelta: function (t) {
                                var e,
                                    i,
                                    n = (this._zoomKeys = {}),
                                    o = this.keyCodes;
                                for (e = 0, i = o.zoomIn.length; e < i; e++)
                                    n[o.zoomIn[e]] = t;
                                for (e = 0, i = o.zoomOut.length; e < i; e++)
                                    n[o.zoomOut[e]] = -t;
                            },
                            _addHooks: function () {
                                Ce(document, "keydown", this._onKeyDown, this);
                            },
                            _removeHooks: function () {
                                Ze(document, "keydown", this._onKeyDown, this);
                            },
                            _onKeyDown: function (t) {
                                if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                                    var e,
                                        i = t.keyCode,
                                        n = this._map;
                                    if (i in this._panKeys) {
                                        if (
                                            !n._panAnim ||
                                            !n._panAnim._inProgress
                                        )
                                            if (
                                                ((e = this._panKeys[i]),
                                                t.shiftKey &&
                                                    (e = O(e).multiplyBy(3)),
                                                n.options.maxBounds &&
                                                    (e = n._limitOffset(
                                                        O(e),
                                                        n.options.maxBounds
                                                    )),
                                                n.options.worldCopyJump)
                                            ) {
                                                var o = n.wrapLatLng(
                                                    n.unproject(
                                                        n
                                                            .project(
                                                                n.getCenter()
                                                            )
                                                            .add(e)
                                                    )
                                                );
                                                n.panTo(o);
                                            } else n.panBy(e);
                                    } else if (i in this._zoomKeys)
                                        n.setZoom(
                                            n.getZoom() +
                                                (t.shiftKey ? 3 : 1) *
                                                    this._zoomKeys[i]
                                        );
                                    else {
                                        if (
                                            27 !== i ||
                                            !n._popup ||
                                            !n._popup.options.closeOnEscapeKey
                                        )
                                            return;
                                        n.closePopup();
                                    }
                                    De(t);
                                }
                            },
                        });
                        Ge.addInitHook("addHandler", "keyboard", wn),
                            Ge.mergeOptions({
                                scrollWheelZoom: !0,
                                wheelDebounceTime: 40,
                                wheelPxPerZoomLevel: 60,
                            });
                        var bn = ti.extend({
                            addHooks: function () {
                                Ce(
                                    this._map._container,
                                    "wheel",
                                    this._onWheelScroll,
                                    this
                                ),
                                    (this._delta = 0);
                            },
                            removeHooks: function () {
                                Ze(
                                    this._map._container,
                                    "wheel",
                                    this._onWheelScroll,
                                    this
                                );
                            },
                            _onWheelScroll: function (t) {
                                var e = We(t),
                                    i = this._map.options.wheelDebounceTime;
                                (this._delta += e),
                                    (this._lastMousePos =
                                        this._map.mouseEventToContainerPoint(
                                            t
                                        )),
                                    this._startTime ||
                                        (this._startTime = +new Date());
                                var o = Math.max(
                                    i - (+new Date() - this._startTime),
                                    0
                                );
                                clearTimeout(this._timer),
                                    (this._timer = setTimeout(
                                        n(this._performZoom, this),
                                        o
                                    )),
                                    De(t);
                            },
                            _performZoom: function () {
                                var t = this._map,
                                    e = t.getZoom(),
                                    i = this._map.options.zoomSnap || 0;
                                t._stop();
                                var n =
                                        this._delta /
                                        (4 *
                                            this._map.options
                                                .wheelPxPerZoomLevel),
                                    o =
                                        (4 *
                                            Math.log(
                                                2 / (1 + Math.exp(-Math.abs(n)))
                                            )) /
                                        Math.LN2,
                                    s = i ? Math.ceil(o / i) * i : o,
                                    r =
                                        t._limitZoom(
                                            e + (this._delta > 0 ? s : -s)
                                        ) - e;
                                (this._delta = 0),
                                    (this._startTime = null),
                                    r &&
                                        ("center" === t.options.scrollWheelZoom
                                            ? t.setZoom(e + r)
                                            : t.setZoomAround(
                                                  this._lastMousePos,
                                                  e + r
                                              ));
                            },
                        });
                        Ge.addInitHook("addHandler", "scrollWheelZoom", bn);
                        Ge.mergeOptions({
                            tapHold: At.touchNative && At.safari && At.mobile,
                            tapTolerance: 15,
                        });
                        var Pn = ti.extend({
                            addHooks: function () {
                                Ce(
                                    this._map._container,
                                    "touchstart",
                                    this._onDown,
                                    this
                                );
                            },
                            removeHooks: function () {
                                Ze(
                                    this._map._container,
                                    "touchstart",
                                    this._onDown,
                                    this
                                );
                            },
                            _onDown: function (t) {
                                if (
                                    (clearTimeout(this._holdTimeout),
                                    1 === t.touches.length)
                                ) {
                                    var e = t.touches[0];
                                    (this._startPos = this._newPos =
                                        new E(e.clientX, e.clientY)),
                                        (this._holdTimeout = setTimeout(
                                            n(function () {
                                                this._cancel(),
                                                    this._isTapValid() &&
                                                        (Ce(
                                                            document,
                                                            "touchend",
                                                            Ne
                                                        ),
                                                        Ce(
                                                            document,
                                                            "touchend touchcancel",
                                                            this
                                                                ._cancelClickPrevent
                                                        ),
                                                        this._simulateEvent(
                                                            "contextmenu",
                                                            e
                                                        ));
                                            }, this),
                                            600
                                        )),
                                        Ce(
                                            document,
                                            "touchend touchcancel contextmenu",
                                            this._cancel,
                                            this
                                        ),
                                        Ce(
                                            document,
                                            "touchmove",
                                            this._onMove,
                                            this
                                        );
                                }
                            },
                            _cancelClickPrevent: function t() {
                                Ze(document, "touchend", Ne),
                                    Ze(document, "touchend touchcancel", t);
                            },
                            _cancel: function () {
                                clearTimeout(this._holdTimeout),
                                    Ze(
                                        document,
                                        "touchend touchcancel contextmenu",
                                        this._cancel,
                                        this
                                    ),
                                    Ze(
                                        document,
                                        "touchmove",
                                        this._onMove,
                                        this
                                    );
                            },
                            _onMove: function (t) {
                                var e = t.touches[0];
                                this._newPos = new E(e.clientX, e.clientY);
                            },
                            _isTapValid: function () {
                                return (
                                    this._newPos.distanceTo(this._startPos) <=
                                    this._map.options.tapTolerance
                                );
                            },
                            _simulateEvent: function (t, e) {
                                var i = new MouseEvent(t, {
                                    bubbles: !0,
                                    cancelable: !0,
                                    view: window,
                                    screenX: e.screenX,
                                    screenY: e.screenY,
                                    clientX: e.clientX,
                                    clientY: e.clientY,
                                });
                                (i._simulated = !0), e.target.dispatchEvent(i);
                            },
                        });
                        Ge.addInitHook("addHandler", "tapHold", Pn),
                            Ge.mergeOptions({
                                touchZoom: At.touch,
                                bounceAtZoomLimits: !0,
                            });
                        var Ln = ti.extend({
                            addHooks: function () {
                                ce(this._map._container, "leaflet-touch-zoom"),
                                    Ce(
                                        this._map._container,
                                        "touchstart",
                                        this._onTouchStart,
                                        this
                                    );
                            },
                            removeHooks: function () {
                                de(this._map._container, "leaflet-touch-zoom"),
                                    Ze(
                                        this._map._container,
                                        "touchstart",
                                        this._onTouchStart,
                                        this
                                    );
                            },
                            _onTouchStart: function (t) {
                                var e = this._map;
                                if (
                                    t.touches &&
                                    2 === t.touches.length &&
                                    !e._animatingZoom &&
                                    !this._zooming
                                ) {
                                    var i = e.mouseEventToContainerPoint(
                                            t.touches[0]
                                        ),
                                        n = e.mouseEventToContainerPoint(
                                            t.touches[1]
                                        );
                                    (this._centerPoint = e
                                        .getSize()
                                        ._divideBy(2)),
                                        (this._startLatLng =
                                            e.containerPointToLatLng(
                                                this._centerPoint
                                            )),
                                        "center" !== e.options.touchZoom &&
                                            (this._pinchStartLatLng =
                                                e.containerPointToLatLng(
                                                    i.add(n)._divideBy(2)
                                                )),
                                        (this._startDist = i.distanceTo(n)),
                                        (this._startZoom = e.getZoom()),
                                        (this._moved = !1),
                                        (this._zooming = !0),
                                        e._stop(),
                                        Ce(
                                            document,
                                            "touchmove",
                                            this._onTouchMove,
                                            this
                                        ),
                                        Ce(
                                            document,
                                            "touchend touchcancel",
                                            this._onTouchEnd,
                                            this
                                        ),
                                        Ne(t);
                                }
                            },
                            _onTouchMove: function (t) {
                                if (
                                    t.touches &&
                                    2 === t.touches.length &&
                                    this._zooming
                                ) {
                                    var e = this._map,
                                        i = e.mouseEventToContainerPoint(
                                            t.touches[0]
                                        ),
                                        o = e.mouseEventToContainerPoint(
                                            t.touches[1]
                                        ),
                                        s = i.distanceTo(o) / this._startDist;
                                    if (
                                        ((this._zoom = e.getScaleZoom(
                                            s,
                                            this._startZoom
                                        )),
                                        !e.options.bounceAtZoomLimits &&
                                            ((this._zoom < e.getMinZoom() &&
                                                s < 1) ||
                                                (this._zoom > e.getMaxZoom() &&
                                                    s > 1)) &&
                                            (this._zoom = e._limitZoom(
                                                this._zoom
                                            )),
                                        "center" === e.options.touchZoom)
                                    ) {
                                        if (
                                            ((this._center = this._startLatLng),
                                            1 === s)
                                        )
                                            return;
                                    } else {
                                        var r = i
                                            ._add(o)
                                            ._divideBy(2)
                                            ._subtract(this._centerPoint);
                                        if (1 === s && 0 === r.x && 0 === r.y)
                                            return;
                                        this._center = e.unproject(
                                            e
                                                .project(
                                                    this._pinchStartLatLng,
                                                    this._zoom
                                                )
                                                .subtract(r),
                                            this._zoom
                                        );
                                    }
                                    this._moved ||
                                        (e._moveStart(!0, !1),
                                        (this._moved = !0)),
                                        M(this._animRequest);
                                    var a = n(
                                        e._move,
                                        e,
                                        this._center,
                                        this._zoom,
                                        {
                                            pinch: !0,
                                            round: !1,
                                        },
                                        void 0
                                    );
                                    (this._animRequest = T(a, this, !0)), Ne(t);
                                }
                            },
                            _onTouchEnd: function () {
                                this._moved && this._zooming
                                    ? ((this._zooming = !1),
                                      M(this._animRequest),
                                      Ze(
                                          document,
                                          "touchmove",
                                          this._onTouchMove,
                                          this
                                      ),
                                      Ze(
                                          document,
                                          "touchend touchcancel",
                                          this._onTouchEnd,
                                          this
                                      ),
                                      this._map.options.zoomAnimation
                                          ? this._map._animateZoom(
                                                this._center,
                                                this._map._limitZoom(
                                                    this._zoom
                                                ),
                                                !0,
                                                this._map.options.zoomSnap
                                            )
                                          : this._map._resetView(
                                                this._center,
                                                this._map._limitZoom(this._zoom)
                                            ))
                                    : (this._zooming = !1);
                            },
                        });
                        Ge.addInitHook("addHandler", "touchZoom", Ln),
                            (Ge.BoxZoom = vn),
                            (Ge.DoubleClickZoom = yn),
                            (Ge.Drag = xn),
                            (Ge.Keyboard = wn),
                            (Ge.ScrollWheelZoom = bn),
                            (Ge.TapHold = Pn),
                            (Ge.TouchZoom = Ln),
                            (t.Bounds = A),
                            (t.Browser = At),
                            (t.CRS = H),
                            (t.Canvas = un),
                            (t.Circle = Ii),
                            (t.CircleMarker = Bi),
                            (t.Class = C),
                            (t.Control = Ke),
                            (t.DivIcon = on),
                            (t.DivOverlay = tn),
                            (t.DomEvent = Ve),
                            (t.DomUtil = ze),
                            (t.Draggable = ni),
                            (t.Evented = Z),
                            (t.FeatureGroup = Si),
                            (t.GeoJSON = Di),
                            (t.GridLayer = sn),
                            (t.Handler = ti),
                            (t.Icon = Zi),
                            (t.ImageOverlay = Ji),
                            (t.LatLng = N),
                            (t.LatLngBounds = I),
                            (t.Layer = zi),
                            (t.LayerGroup = Ci),
                            (t.LineUtil = xi),
                            (t.Map = Ge),
                            (t.Marker = Oi),
                            (t.Mixin = ei),
                            (t.Path = Ai),
                            (t.Point = E),
                            (t.PolyUtil = hi),
                            (t.Polygon = Ni),
                            (t.Polyline = Ri),
                            (t.Popup = en),
                            (t.PosAnimation = qe),
                            (t.Projection = Pi),
                            (t.Rectangle = gn),
                            (t.Renderer = ln),
                            (t.SVG = mn),
                            (t.SVGOverlay = Qi),
                            (t.TileLayer = rn),
                            (t.Tooltip = nn),
                            (t.Transformation = V),
                            (t.Util = z),
                            (t.VideoOverlay = $i),
                            (t.bind = n),
                            (t.bounds = B),
                            (t.canvas = cn),
                            (t.circle = function (t, e, i) {
                                return new Ii(t, e, i);
                            }),
                            (t.circleMarker = function (t, e) {
                                return new Bi(t, e);
                            }),
                            (t.control = Ye),
                            (t.divIcon = function (t) {
                                return new on(t);
                            }),
                            (t.extend = e),
                            (t.featureGroup = function (t, e) {
                                return new Si(t, e);
                            }),
                            (t.geoJSON = Yi),
                            (t.geoJson = Xi),
                            (t.gridLayer = function (t) {
                                return new sn(t);
                            }),
                            (t.icon = function (t) {
                                return new Zi(t);
                            }),
                            (t.imageOverlay = function (t, e, i) {
                                return new Ji(t, e, i);
                            }),
                            (t.latLng = D),
                            (t.latLngBounds = R),
                            (t.layerGroup = function (t, e) {
                                return new Ci(t, e);
                            }),
                            (t.map = function (t, e) {
                                return new Ge(t, e);
                            }),
                            (t.marker = function (t, e) {
                                return new Oi(t, e);
                            }),
                            (t.point = O),
                            (t.polygon = function (t, e) {
                                return new Ni(t, e);
                            }),
                            (t.polyline = function (t, e) {
                                return new Ri(t, e);
                            }),
                            (t.popup = function (t, e) {
                                return new en(t, e);
                            }),
                            (t.rectangle = function (t, e) {
                                return new gn(t, e);
                            }),
                            (t.setOptions = d),
                            (t.stamp = s),
                            (t.svg = fn),
                            (t.svgOverlay = function (t, e, i) {
                                return new Qi(t, e, i);
                            }),
                            (t.tileLayer = an),
                            (t.tooltip = function (t, e) {
                                return new nn(t, e);
                            }),
                            (t.transformation = q),
                            (t.version = "1.9.4"),
                            (t.videoOverlay = function (t, e, i) {
                                return new $i(t, e, i);
                            });
                        var Tn = window.L;
                        (t.noConflict = function () {
                            return (window.L = Tn), this;
                        }),
                            (window.L = t);
                    })(e);
                },
            },
            e = {};
        function i(n) {
            var o = e[n];
            if (void 0 !== o) return o.exports;
            var s = (e[n] = {
                exports: {},
            });
            return t[n].call(s.exports, s, s.exports, i), s.exports;
        }
        (i.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return (
                i.d(e, {
                    a: e,
                }),
                e
            );
        }),
            (i.d = function (t, e) {
                for (var n in e)
                    i.o(e, n) &&
                        !i.o(t, n) &&
                        Object.defineProperty(t, n, {
                            enumerable: !0,
                            get: e[n],
                        });
            }),
            (i.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (i.r = function (t) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(t, "__esModule", {
                        value: !0,
                    });
            });
        var n = {};
        return (
            (function () {
                "use strict";
                i.r(n),
                    i.d(n, {
                        leaFlet: function () {
                            return e.a;
                        },
                    });
                var t = i(5243),
                    e = i.n(t);
                try {
                    window.leaFlet = e();
                } catch (t) {}
            })(),
            n
        );
    })();
});
