(() => {
    "use strict";
    var e = {},
        r = {};

    function t(o) {
        var n = r[o];
        if (void 0 !== n) return n.exports;
        var f = r[o] = {
                exports: {}
            },
            i = !0;
        try {
            e[o](f, f.exports, t), i = !1
        } finally {
            i && delete r[o]
        }
        return f.exports
    }
    t.m = e, (() => {
        var e = [];
        t.O = (r, o, n, f) => {
            if (o) {
                f = f || 0;
                for (var i = e.length; i > 0 && e[i - 1][2] > f; i--) e[i] = e[i - 1];
                e[i] = [o, n, f];
                return
            }
            for (var a = 1 / 0, i = 0; i < e.length; i++) {
                for (var [o, n, f] = e[i], l = !0, u = 0; u < o.length; u++)(!1 & f || a >= f) && Object.keys(t.O).every(e => t.O[e](o[u])) ? o.splice(u--, 1) : (l = !1, f < a && (a = f));
                if (l) {
                    e.splice(i--, 1);
                    var c = n();
                    void 0 !== c && (r = c)
                }
            }
            return r
        }
    })(), t.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return t.d(r, {
            a: r
        }), r
    }, (() => {
        var e, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        t.t = function(o, n) {
            if (1 & n && (o = this(o)), 8 & n || "object" == typeof o && o && (4 & n && o.__esModule || 16 & n && "function" == typeof o.then)) return o;
            var f = Object.create(null);
            t.r(f);
            var i = {};
            e = e || [null, r({}), r([]), r(r)];
            for (var a = 2 & n && o;
                "object" == typeof a && !~e.indexOf(a); a = r(a)) Object.getOwnPropertyNames(a).forEach(e => i[e] = () => o[e]);
            return i.default = () => o, t.d(f, i), f
        }
    })(), t.d = (e, r) => {
        for (var o in r) t.o(r, o) && !t.o(e, o) && Object.defineProperty(e, o, {
            enumerable: !0,
            get: r[o]
        })
    }, t.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), t.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.p = "/_next/", (() => {
        var e = {
            68: 0
        };
        t.O.j = r => 0 === e[r];
        var r = (r, o) => {
                var n, f, [i, a, l] = o,
                    u = 0;
                if (i.some(r => 0 !== e[r])) {
                    for (n in a) t.o(a, n) && (t.m[n] = a[n]);
                    if (l) var c = l(t)
                }
                for (r && r(o); u < i.length; u++) f = i[u], t.o(e, f) && e[f] && e[f][0](), e[f] = 0;
                return t.O(c)
            },
            o = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
        o.forEach(r.bind(null, 0)), o.push = r.bind(null, o.push.bind(o))
    })(), t.nc = void 0
})();;
(function() {
    if (!/(?:^|;\s)__vercel_toolbar=1(?:;|$)/.test(document.cookie)) return;
    var s = document.createElement('script');
    s.src = 'https://vercel.live/_next-live/feedback/feedback.js';
    s.setAttribute("data-explicit-opt-in", "true");
    s.setAttribute("data-cookie-opt-in", "true");
    s.setAttribute("data-deployment-id", "dpl_wnTimtE7tdGJjydVpZziLmsowkVv");
    ((document.head || document.documentElement).appendChild(s))
})();