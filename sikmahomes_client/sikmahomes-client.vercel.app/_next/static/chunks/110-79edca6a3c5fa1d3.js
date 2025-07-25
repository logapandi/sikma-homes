"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [110], {
        9916: (e, t, n) => {
            n.d(t, {
                UC: () => nS,
                YJ: () => nP,
                In: () => nE,
                q7: () => nA,
                VF: () => nj,
                p4: () => nL,
                JU: () => nT,
                ZL: () => nC,
                bL: () => nw,
                wn: () => nk,
                PP: () => nN,
                wv: () => nD,
                l9: () => nx,
                WT: () => nb,
                LM: () => nR
            });
            var r, o = n(6540),
                i = n.t(o, 2),
                l = n(961);

            function a(e, [t, n]) {
                return Math.min(n, Math.max(t, e))
            }

            function s(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (e ? .(r), !1 === n || !r.defaultPrevented) return t ? .(r)
                }
            }
            var u = n(4848);

            function c(e, t = []) {
                let n = [],
                    r = () => {
                        let t = n.map(e => o.createContext(e));
                        return function(n) {
                            let r = n ? .[e] || t;
                            return o.useMemo(() => ({
                                [`__scope${e}`]: { ...n,
                                    [e]: r
                                }
                            }), [n, r])
                        }
                    };
                return r.scopeName = e, [function(t, r) {
                    let i = o.createContext(r),
                        l = n.length;
                    n = [...n, r];
                    let a = t => {
                        let {
                            scope: n,
                            children: r,
                            ...a
                        } = t, s = n ? .[e] ? .[l] || i, c = o.useMemo(() => a, Object.values(a));
                        return (0, u.jsx)(s.Provider, {
                            value: c,
                            children: r
                        })
                    };
                    return a.displayName = t + "Provider", [a, function(n, a) {
                        let s = a ? .[e] ? .[l] || i,
                            u = o.useContext(s);
                        if (u) return u;
                        if (void 0 !== r) return r;
                        throw Error(`\`${n}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let n = () => {
                        let n = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let r = n.reduce((t, {
                                useScope: n,
                                scopeName: r
                            }) => {
                                let o = n(e)[`__scope${r}`];
                                return { ...t,
                                    ...o
                                }
                            }, {});
                            return o.useMemo(() => ({
                                [`__scope${t.scopeName}`]: r
                            }), [r])
                        }
                    };
                    return n.scopeName = t.scopeName, n
                }(r, ...t)]
            }

            function f(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function d(...e) {
                return t => {
                    let n = !1,
                        r = e.map(e => {
                            let r = f(e, t);
                            return n || "function" != typeof r || (n = !0), r
                        });
                    if (n) return () => {
                        for (let t = 0; t < r.length; t++) {
                            let n = r[t];
                            "function" == typeof n ? n() : f(e[t], null)
                        }
                    }
                }
            }

            function p(...e) {
                return o.useCallback(d(...e), e)
            }
            var m = o.forwardRef((e, t) => {
                let {
                    children: n,
                    ...r
                } = e, i = o.Children.toArray(n), l = i.find(g);
                if (l) {
                    let e = l.props.children,
                        n = i.map(t => t !== l ? t : o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null);
                    return (0, u.jsx)(h, { ...r,
                        ref: t,
                        children: o.isValidElement(e) ? o.cloneElement(e, void 0, n) : null
                    })
                }
                return (0, u.jsx)(h, { ...r,
                    ref: t,
                    children: n
                })
            });
            m.displayName = "Slot";
            var h = o.forwardRef((e, t) => {
                let {
                    children: n,
                    ...r
                } = e;
                if (o.isValidElement(n)) {
                    let e = function(e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            return n ? e.ref : (n = (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                        }(n),
                        i = function(e, t) {
                            let n = { ...t
                            };
                            for (let r in t) {
                                let o = e[r],
                                    i = t[r];
                                /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                                    i(...e), o(...e)
                                } : o && (n[r] = o) : "style" === r ? n[r] = { ...o,
                                    ...i
                                } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...n
                            }
                        }(r, n.props);
                    return n.type !== o.Fragment && (i.ref = t ? d(t, e) : e), o.cloneElement(n, i)
                }
                return o.Children.count(n) > 1 ? o.Children.only(null) : null
            });
            h.displayName = "SlotClone";
            var v = ({
                children: e
            }) => (0, u.jsx)(u.Fragment, {
                children: e
            });

            function g(e) {
                return o.isValidElement(e) && e.type === v
            }
            var y = o.createContext(void 0),
                w = o.forwardRef((e, t) => {
                    let {
                        children: n,
                        ...r
                    } = e, i = o.Children.toArray(n), l = i.find(E);
                    if (l) {
                        let e = l.props.children,
                            n = i.map(t => t !== l ? t : o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null);
                        return (0, u.jsx)(x, { ...r,
                            ref: t,
                            children: o.isValidElement(e) ? o.cloneElement(e, void 0, n) : null
                        })
                    }
                    return (0, u.jsx)(x, { ...r,
                        ref: t,
                        children: n
                    })
                });
            w.displayName = "Slot";
            var x = o.forwardRef((e, t) => {
                let {
                    children: n,
                    ...r
                } = e;
                if (o.isValidElement(n)) {
                    let e = function(e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            return n ? e.ref : (n = (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                        }(n),
                        i = function(e, t) {
                            let n = { ...t
                            };
                            for (let r in t) {
                                let o = e[r],
                                    i = t[r];
                                /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                                    i(...e), o(...e)
                                } : o && (n[r] = o) : "style" === r ? n[r] = { ...o,
                                    ...i
                                } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...n
                            }
                        }(r, n.props);
                    return n.type !== o.Fragment && (i.ref = t ? d(t, e) : e), o.cloneElement(n, i)
                }
                return o.Children.count(n) > 1 ? o.Children.only(null) : null
            });
            x.displayName = "SlotClone";
            var b = ({
                children: e
            }) => (0, u.jsx)(u.Fragment, {
                children: e
            });

            function E(e) {
                return o.isValidElement(e) && e.type === b
            }
            var C = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                let n = o.forwardRef((e, n) => {
                    let {
                        asChild: r,
                        ...o
                    } = e, i = r ? w : t;
                    return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, u.jsx)(i, { ...o,
                        ref: n
                    })
                });
                return n.displayName = `Primitive.${t}`, { ...e,
                    [t]: n
                }
            }, {});

            function S(e) {
                let t = o.useRef(e);
                return o.useEffect(() => {
                    t.current = e
                }), o.useMemo(() => (...e) => t.current ? .(...e), [])
            }
            var R = "dismissableLayer.update",
                P = o.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                T = o.forwardRef((e, t) => {
                    let {
                        disableOutsidePointerEvents: n = !1,
                        onEscapeKeyDown: i,
                        onPointerDownOutside: l,
                        onFocusOutside: a,
                        onInteractOutside: c,
                        onDismiss: f,
                        ...d
                    } = e, m = o.useContext(P), [h, v] = o.useState(null), g = h ? .ownerDocument ? ? globalThis ? .document, [, y] = o.useState({}), w = p(t, e => v(e)), x = Array.from(m.layers), [b] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), E = x.indexOf(b), T = h ? x.indexOf(h) : -1, j = m.layersWithOutsidePointerEventsDisabled.size > 0, N = T >= E, k = function(e, t = globalThis ? .document) {
                        let n = S(e),
                            r = o.useRef(!1),
                            i = o.useRef(() => {});
                        return o.useEffect(() => {
                            let e = e => {
                                    if (e.target && !r.current) {
                                        let r = function() {
                                                L("dismissableLayer.pointerDownOutside", n, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (t.removeEventListener("click", i.current), i.current = r, t.addEventListener("click", i.current, {
                                            once: !0
                                        })) : r()
                                    } else t.removeEventListener("click", i.current);
                                    r.current = !1
                                },
                                o = window.setTimeout(() => {
                                    t.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current)
                            }
                        }, [t, n]), {
                            onPointerDownCapture: () => r.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...m.branches].some(e => e.contains(t));
                        !N || n || (l ? .(e), c ? .(e), e.defaultPrevented || f ? .())
                    }, g), D = function(e, t = globalThis ? .document) {
                        let n = S(e),
                            r = o.useRef(!1);
                        return o.useEffect(() => {
                            let e = e => {
                                e.target && !r.current && L("dismissableLayer.focusOutside", n, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                        }, [t, n]), {
                            onFocusCapture: () => r.current = !0,
                            onBlurCapture: () => r.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        [...m.branches].some(e => e.contains(t)) || (a ? .(e), c ? .(e), e.defaultPrevented || f ? .())
                    }, g);
                    return ! function(e, t = globalThis ? .document) {
                        let n = S(e);
                        o.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [n, t])
                    }(e => {
                        T !== m.layers.size - 1 || (i ? .(e), !e.defaultPrevented && f && (e.preventDefault(), f()))
                    }, g), o.useEffect(() => {
                        if (h) return n && (0 === m.layersWithOutsidePointerEventsDisabled.size && (r = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(h)), m.layers.add(h), A(), () => {
                            n && 1 === m.layersWithOutsidePointerEventsDisabled.size && (g.body.style.pointerEvents = r)
                        }
                    }, [h, g, n, m]), o.useEffect(() => () => {
                        h && (m.layers.delete(h), m.layersWithOutsidePointerEventsDisabled.delete(h), A())
                    }, [h, m]), o.useEffect(() => {
                        let e = () => y({});
                        return document.addEventListener(R, e), () => document.removeEventListener(R, e)
                    }, []), (0, u.jsx)(C.div, { ...d,
                        ref: w,
                        style: {
                            pointerEvents: j ? N ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: s(e.onFocusCapture, D.onFocusCapture),
                        onBlurCapture: s(e.onBlurCapture, D.onBlurCapture),
                        onPointerDownCapture: s(e.onPointerDownCapture, k.onPointerDownCapture)
                    })
                });

            function A() {
                let e = new CustomEvent(R);
                document.dispatchEvent(e)
            }

            function L(e, t, n, {
                discrete: r
            }) {
                let o = n.originalEvent.target,
                    i = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: n
                    });
                (t && o.addEventListener(e, t, {
                    once: !0
                }), r) ? o && l.flushSync(() => o.dispatchEvent(i)): o.dispatchEvent(i)
            }
            T.displayName = "DismissableLayer", o.forwardRef((e, t) => {
                let n = o.useContext(P),
                    r = o.useRef(null),
                    i = p(t, r);
                return o.useEffect(() => {
                    let e = r.current;
                    if (e) return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
                }, [n.branches]), (0, u.jsx)(C.div, { ...e,
                    ref: i
                })
            }).displayName = "DismissableLayerBranch";
            var j = 0;

            function N() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
            }
            var k = "focusScope.autoFocusOnMount",
                D = "focusScope.autoFocusOnUnmount",
                O = {
                    bubbles: !1,
                    cancelable: !0
                },
                M = o.forwardRef((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: i,
                        onUnmountAutoFocus: l,
                        ...a
                    } = e, [s, c] = o.useState(null), f = S(i), d = S(l), m = o.useRef(null), h = p(t, e => c(e)), v = o.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    o.useEffect(() => {
                        if (r) {
                            let e = function(e) {
                                    if (v.paused || !s) return;
                                    let t = e.target;
                                    s.contains(t) ? m.current = t : W(m.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (v.paused || !s) return;
                                    let t = e.relatedTarget;
                                    null === t || s.contains(t) || W(m.current, {
                                        select: !0
                                    })
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && W(s)
                            });
                            return s && n.observe(s, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [r, s, v.paused]), o.useEffect(() => {
                        if (s) {
                            H.add(v);
                            let e = document.activeElement;
                            if (!s.contains(e)) {
                                let t = new CustomEvent(k, O);
                                s.addEventListener(k, f), s.dispatchEvent(t), t.defaultPrevented || (function(e, {
                                    select: t = !1
                                } = {}) {
                                    let n = document.activeElement;
                                    for (let r of e)
                                        if (W(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(I(s).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && W(s))
                            }
                            return () => {
                                s.removeEventListener(k, f), setTimeout(() => {
                                    let t = new CustomEvent(D, O);
                                    s.addEventListener(D, d), s.dispatchEvent(t), t.defaultPrevented || W(e ? ? document.body, {
                                        select: !0
                                    }), s.removeEventListener(D, d), H.remove(v)
                                }, 0)
                            }
                        }
                    }, [s, f, d, v]);
                    let g = o.useCallback(e => {
                        if (!n && !r || v.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, i] = function(e) {
                                    let t = I(e);
                                    return [F(t, e), F(t.reverse(), e)]
                                }(t);
                            r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && W(i, {
                                select: !0
                            })) : (e.preventDefault(), n && W(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [n, r, v.paused]);
                    return (0, u.jsx)(C.div, {
                        tabIndex: -1,
                        ...a,
                        ref: h,
                        onKeyDown: g
                    })
                });

            function I(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function F(e, t) {
                for (let n of e)
                    if (! function(e, {
                            upTo: t
                        }) {
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === t || e !== t);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function W(e, {
                select: t = !1
            } = {}) {
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            M.displayName = "FocusScope";
            var H = function() {
                let e = [];
                return {
                    add(t) {
                        let n = e[0];
                        t !== n && n ? .pause(), (e = V(e, t)).unshift(t)
                    },
                    remove(t) {
                        e = V(e, t), e[0] ? .resume()
                    }
                }
            }();

            function V(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
            var B = globalThis ? .document ? o.useLayoutEffect : () => {},
                _ = i["useId".toString()] || (() => void 0),
                z = 0;

            function $(e) {
                let [t, n] = o.useState(_());
                return B(() => {
                    e || n(e => e ? ? String(z++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
            let K = ["top", "right", "bottom", "left"],
                U = Math.min,
                q = Math.max,
                Y = Math.round,
                X = Math.floor,
                Z = e => ({
                    x: e,
                    y: e
                }),
                J = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                G = {
                    start: "end",
                    end: "start"
                };

            function Q(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function ee(e) {
                return e.split("-")[0]
            }

            function et(e) {
                return e.split("-")[1]
            }

            function en(e) {
                return "x" === e ? "y" : "x"
            }

            function er(e) {
                return "y" === e ? "height" : "width"
            }

            function eo(e) {
                return ["top", "bottom"].includes(ee(e)) ? "y" : "x"
            }

            function ei(e) {
                return e.replace(/start|end/g, e => G[e])
            }

            function el(e) {
                return e.replace(/left|right|bottom|top/g, e => J[e])
            }

            function ea(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function es(e) {
                let {
                    x: t,
                    y: n,
                    width: r,
                    height: o
                } = e;
                return {
                    width: r,
                    height: o,
                    top: n,
                    left: t,
                    right: t + r,
                    bottom: n + o,
                    x: t,
                    y: n
                }
            }

            function eu(e, t, n) {
                let r, {
                        reference: o,
                        floating: i
                    } = e,
                    l = eo(t),
                    a = en(eo(t)),
                    s = er(a),
                    u = ee(t),
                    c = "y" === l,
                    f = o.x + o.width / 2 - i.width / 2,
                    d = o.y + o.height / 2 - i.height / 2,
                    p = o[s] / 2 - i[s] / 2;
                switch (u) {
                    case "top":
                        r = {
                            x: f,
                            y: o.y - i.height
                        };
                        break;
                    case "bottom":
                        r = {
                            x: f,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        r = {
                            x: o.x + o.width,
                            y: d
                        };
                        break;
                    case "left":
                        r = {
                            x: o.x - i.width,
                            y: d
                        };
                        break;
                    default:
                        r = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (et(t)) {
                    case "start":
                        r[a] -= p * (n && c ? -1 : 1);
                        break;
                    case "end":
                        r[a] += p * (n && c ? -1 : 1)
                }
                return r
            }
            let ec = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: l
                } = n, a = i.filter(Boolean), s = await (null == l.isRTL ? void 0 : l.isRTL(t)), u = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: c,
                    y: f
                } = eu(u, r, s), d = r, p = {}, m = 0;
                for (let n = 0; n < a.length; n++) {
                    let {
                        name: i,
                        fn: h
                    } = a[n], {
                        x: v,
                        y: g,
                        data: y,
                        reset: w
                    } = await h({
                        x: c,
                        y: f,
                        initialPlacement: r,
                        placement: d,
                        strategy: o,
                        middlewareData: p,
                        rects: u,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    c = null != v ? v : c, f = null != g ? g : f, p = { ...p,
                        [i]: { ...p[i],
                            ...y
                        }
                    }, w && m <= 50 && (m++, "object" == typeof w && (w.placement && (d = w.placement), w.rects && (u = !0 === w.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : w.rects), {
                        x: c,
                        y: f
                    } = eu(u, d, s)), n = -1)
                }
                return {
                    x: c,
                    y: f,
                    placement: d,
                    strategy: o,
                    middlewareData: p
                }
            };
            async function ef(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: r,
                    y: o,
                    platform: i,
                    rects: l,
                    elements: a,
                    strategy: s
                } = e, {
                    boundary: u = "clippingAncestors",
                    rootBoundary: c = "viewport",
                    elementContext: f = "floating",
                    altBoundary: d = !1,
                    padding: p = 0
                } = Q(t, e), m = ea(p), h = a[d ? "floating" === f ? "reference" : "floating" : f], v = es(await i.getClippingRect({
                    element: null == (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                    boundary: u,
                    rootBoundary: c,
                    strategy: s
                })), g = "floating" === f ? {
                    x: r,
                    y: o,
                    width: l.floating.width,
                    height: l.floating.height
                } : l.reference, y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), w = await (null == i.isElement ? void 0 : i.isElement(y)) && await (null == i.getScale ? void 0 : i.getScale(y)) || {
                    x: 1,
                    y: 1
                }, x = es(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: a,
                    rect: g,
                    offsetParent: y,
                    strategy: s
                }) : g);
                return {
                    top: (v.top - x.top + m.top) / w.y,
                    bottom: (x.bottom - v.bottom + m.bottom) / w.y,
                    left: (v.left - x.left + m.left) / w.x,
                    right: (x.right - v.right + m.right) / w.x
                }
            }

            function ed(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function ep(e) {
                return K.some(t => e[t] >= 0)
            }
            async function em(e, t) {
                let {
                    placement: n,
                    platform: r,
                    elements: o
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), l = ee(n), a = et(n), s = "y" === eo(n), u = ["left", "top"].includes(l) ? -1 : 1, c = i && s ? -1 : 1, f = Q(t, e), {
                    mainAxis: d,
                    crossAxis: p,
                    alignmentAxis: m
                } = "number" == typeof f ? {
                    mainAxis: f,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: f.mainAxis || 0,
                    crossAxis: f.crossAxis || 0,
                    alignmentAxis: f.alignmentAxis
                };
                return a && "number" == typeof m && (p = "end" === a ? -1 * m : m), s ? {
                    x: p * c,
                    y: d * u
                } : {
                    x: d * u,
                    y: p * c
                }
            }

            function eh() {
                return "undefined" != typeof window
            }

            function ev(e) {
                return ew(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function eg(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function ey(e) {
                var t;
                return null == (t = (ew(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function ew(e) {
                return !!eh() && (e instanceof Node || e instanceof eg(e).Node)
            }

            function ex(e) {
                return !!eh() && (e instanceof Element || e instanceof eg(e).Element)
            }

            function eb(e) {
                return !!eh() && (e instanceof HTMLElement || e instanceof eg(e).HTMLElement)
            }

            function eE(e) {
                return !!eh() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof eg(e).ShadowRoot)
            }

            function eC(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = eA(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
            }

            function eS(e) {
                return [":popover-open", ":modal"].some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function eR(e) {
                let t = eP(),
                    n = ex(e) ? eA(e) : e;
                return ["transform", "translate", "scale", "rotate", "perspective"].some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
            }

            function eP() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function eT(e) {
                return ["html", "body", "#document"].includes(ev(e))
            }

            function eA(e) {
                return eg(e).getComputedStyle(e)
            }

            function eL(e) {
                return ex(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function ej(e) {
                if ("html" === ev(e)) return e;
                let t = e.assignedSlot || e.parentNode || eE(e) && e.host || ey(e);
                return eE(t) ? t.host : t
            }

            function eN(e, t, n) {
                var r;
                void 0 === t && (t = []), void 0 === n && (n = !0);
                let o = function e(t) {
                        let n = ej(t);
                        return eT(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : eb(n) && eC(n) ? n : e(n)
                    }(e),
                    i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
                    l = eg(o);
                if (i) {
                    let e = ek(l);
                    return t.concat(l, l.visualViewport || [], eC(o) ? o : [], e && n ? eN(e) : [])
                }
                return t.concat(o, eN(o, [], n))
            }

            function ek(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
            }

            function eD(e) {
                let t = eA(e),
                    n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    o = eb(e),
                    i = o ? e.offsetWidth : n,
                    l = o ? e.offsetHeight : r,
                    a = Y(n) !== i || Y(r) !== l;
                return a && (n = i, r = l), {
                    width: n,
                    height: r,
                    $: a
                }
            }

            function eO(e) {
                return ex(e) ? e : e.contextElement
            }

            function eM(e) {
                let t = eO(e);
                if (!eb(t)) return Z(1);
                let n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: o,
                        $: i
                    } = eD(t),
                    l = (i ? Y(n.width) : n.width) / r,
                    a = (i ? Y(n.height) : n.height) / o;
                return l && Number.isFinite(l) || (l = 1), a && Number.isFinite(a) || (a = 1), {
                    x: l,
                    y: a
                }
            }
            let eI = Z(0);

            function eF(e) {
                let t = eg(e);
                return eP() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : eI
            }

            function eW(e, t, n, r) {
                var o;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let i = e.getBoundingClientRect(),
                    l = eO(e),
                    a = Z(1);
                t && (r ? ex(r) && (a = eM(r)) : a = eM(e));
                let s = (void 0 === (o = n) && (o = !1), r && (!o || r === eg(l)) && o) ? eF(l) : Z(0),
                    u = (i.left + s.x) / a.x,
                    c = (i.top + s.y) / a.y,
                    f = i.width / a.x,
                    d = i.height / a.y;
                if (l) {
                    let e = eg(l),
                        t = r && ex(r) ? eg(r) : r,
                        n = e,
                        o = ek(n);
                    for (; o && r && t !== n;) {
                        let e = eM(o),
                            t = o.getBoundingClientRect(),
                            r = eA(o),
                            i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                        u *= e.x, c *= e.y, f *= e.x, d *= e.y, u += i, c += l, o = ek(n = eg(o))
                    }
                }
                return es({
                    width: f,
                    height: d,
                    x: u,
                    y: c
                })
            }

            function eH(e, t) {
                let n = eL(e).scrollLeft;
                return t ? t.left + n : eW(ey(e)).left + n
            }

            function eV(e, t, n) {
                void 0 === n && (n = !1);
                let r = e.getBoundingClientRect();
                return {
                    x: r.left + t.scrollLeft - (n ? 0 : eH(e, r)),
                    y: r.top + t.scrollTop
                }
            }

            function eB(e, t, n) {
                let r;
                if ("viewport" === t) r = function(e, t) {
                    let n = eg(e),
                        r = ey(e),
                        o = n.visualViewport,
                        i = r.clientWidth,
                        l = r.clientHeight,
                        a = 0,
                        s = 0;
                    if (o) {
                        i = o.width, l = o.height;
                        let e = eP();
                        (!e || e && "fixed" === t) && (a = o.offsetLeft, s = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: s
                    }
                }(e, n);
                else if ("document" === t) r = function(e) {
                    let t = ey(e),
                        n = eL(e),
                        r = e.ownerDocument.body,
                        o = q(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        i = q(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        l = -n.scrollLeft + eH(e),
                        a = -n.scrollTop;
                    return "rtl" === eA(r).direction && (l += q(t.clientWidth, r.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: l,
                        y: a
                    }
                }(ey(e));
                else if (ex(t)) r = function(e, t) {
                    let n = eW(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        o = n.left + e.clientLeft,
                        i = eb(e) ? eM(e) : Z(1),
                        l = e.clientWidth * i.x;
                    return {
                        width: l,
                        height: e.clientHeight * i.y,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
                else {
                    let n = eF(e);
                    r = {
                        x: t.x - n.x,
                        y: t.y - n.y,
                        width: t.width,
                        height: t.height
                    }
                }
                return es(r)
            }

            function e_(e) {
                return "static" === eA(e).position
            }

            function ez(e, t) {
                if (!eb(e) || "fixed" === eA(e).position) return null;
                if (t) return t(e);
                let n = e.offsetParent;
                return ey(e) === n && (n = n.ownerDocument.body), n
            }

            function e$(e, t) {
                let n = eg(e);
                if (eS(e)) return n;
                if (!eb(e)) {
                    let t = ej(e);
                    for (; t && !eT(t);) {
                        if (ex(t) && !e_(t)) return t;
                        t = ej(t)
                    }
                    return n
                }
                let r = ez(e, t);
                for (; r && ["table", "td", "th"].includes(ev(r)) && e_(r);) r = ez(r, t);
                return r && eT(r) && e_(r) && !eR(r) ? n : r || function(e) {
                    let t = ej(e);
                    for (; eb(t) && !eT(t);) {
                        if (eR(t)) return t;
                        if (eS(t)) break;
                        t = ej(t)
                    }
                    return null
                }(e) || n
            }
            let eK = async function(e) {
                    let t = this.getOffsetParent || e$,
                        n = this.getDimensions,
                        r = await n(e.floating);
                    return {
                        reference: function(e, t, n) {
                            let r = eb(t),
                                o = ey(t),
                                i = "fixed" === n,
                                l = eW(e, !0, i, t),
                                a = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                s = Z(0);
                            if (r || !r && !i) {
                                if (("body" !== ev(t) || eC(o)) && (a = eL(t)), r) {
                                    let e = eW(t, !0, i, t);
                                    s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
                                } else o && (s.x = eH(o))
                            }
                            let u = !o || r || i ? Z(0) : eV(o, a);
                            return {
                                x: l.left + a.scrollLeft - s.x - u.x,
                                y: l.top + a.scrollTop - s.y - u.y,
                                width: l.width,
                                height: l.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: r.width,
                            height: r.height
                        }
                    }
                },
                eU = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: n,
                            offsetParent: r,
                            strategy: o
                        } = e, i = "fixed" === o, l = ey(r), a = !!t && eS(t.floating);
                        if (r === l || a && i) return n;
                        let s = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            u = Z(1),
                            c = Z(0),
                            f = eb(r);
                        if ((f || !f && !i) && (("body" !== ev(r) || eC(l)) && (s = eL(r)), eb(r))) {
                            let e = eW(r);
                            u = eM(r), c.x = e.x + r.clientLeft, c.y = e.y + r.clientTop
                        }
                        let d = !l || f || i ? Z(0) : eV(l, s, !0);
                        return {
                            width: n.width * u.x,
                            height: n.height * u.y,
                            x: n.x * u.x - s.scrollLeft * u.x + c.x + d.x,
                            y: n.y * u.y - s.scrollTop * u.y + c.y + d.y
                        }
                    },
                    getDocumentElement: ey,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: n,
                            rootBoundary: r,
                            strategy: o
                        } = e, i = [..."clippingAncestors" === n ? eS(t) ? [] : function(e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = eN(e, [], !1).filter(e => ex(e) && "body" !== ev(e)),
                                o = null,
                                i = "fixed" === eA(e).position,
                                l = i ? ej(e) : e;
                            for (; ex(l) && !eT(l);) {
                                let t = eA(l),
                                    n = eR(l);
                                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || eC(l) && !n && function e(t, n) {
                                    let r = ej(t);
                                    return !(r === n || !ex(r) || eT(r)) && ("fixed" === eA(r).position || e(r, n))
                                }(e, l)) ? r = r.filter(e => e !== l) : o = t, l = ej(l)
                            }
                            return t.set(e, r), r
                        }(t, this._c) : [].concat(n), r], l = i[0], a = i.reduce((e, n) => {
                            let r = eB(t, n, o);
                            return e.top = q(r.top, e.top), e.right = U(r.right, e.right), e.bottom = U(r.bottom, e.bottom), e.left = q(r.left, e.left), e
                        }, eB(t, l, o));
                        return {
                            width: a.right - a.left,
                            height: a.bottom - a.top,
                            x: a.left,
                            y: a.top
                        }
                    },
                    getOffsetParent: e$,
                    getElementRects: eK,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: n
                        } = eD(e);
                        return {
                            width: t,
                            height: n
                        }
                    },
                    getScale: eM,
                    isElement: ex,
                    isRTL: function(e) {
                        return "rtl" === eA(e).direction
                    }
                };

            function eq(e, t) {
                return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
            }
            let eY = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: n,
                            y: r,
                            placement: o,
                            rects: i,
                            platform: l,
                            elements: a,
                            middlewareData: s
                        } = t, {
                            element: u,
                            padding: c = 0
                        } = Q(e, t) || {};
                        if (null == u) return {};
                        let f = ea(c),
                            d = {
                                x: n,
                                y: r
                            },
                            p = en(eo(o)),
                            m = er(p),
                            h = await l.getDimensions(u),
                            v = "y" === p,
                            g = v ? "clientHeight" : "clientWidth",
                            y = i.reference[m] + i.reference[p] - d[p] - i.floating[m],
                            w = d[p] - i.reference[p],
                            x = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(u)),
                            b = x ? x[g] : 0;
                        b && await (null == l.isElement ? void 0 : l.isElement(x)) || (b = a.floating[g] || i.floating[m]);
                        let E = b / 2 - h[m] / 2 - 1,
                            C = U(f[v ? "top" : "left"], E),
                            S = U(f[v ? "bottom" : "right"], E),
                            R = b - h[m] - S,
                            P = b / 2 - h[m] / 2 + (y / 2 - w / 2),
                            T = q(C, U(P, R)),
                            A = !s.arrow && null != et(o) && P !== T && i.reference[m] / 2 - (P < C ? C : S) - h[m] / 2 < 0,
                            L = A ? P < C ? P - C : P - R : 0;
                        return {
                            [p]: d[p] + L,
                            data: {
                                [p]: T,
                                centerOffset: P - T - L,
                                ...A && {
                                    alignmentOffset: L
                                }
                            },
                            reset: A
                        }
                    }
                }),
                eX = (e, t, n) => {
                    let r = new Map,
                        o = {
                            platform: eU,
                            ...n
                        },
                        i = { ...o.platform,
                            _c: r
                        };
                    return ec(e, t, { ...o,
                        platform: i
                    })
                };
            var eZ = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;

            function eJ(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) !== t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!eJ(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !eJ(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function eG(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function eQ(e, t) {
                let n = eG(e);
                return Math.round(t * n) / n
            }

            function e0(e) {
                let t = o.useRef(e);
                return eZ(() => {
                    t.current = e
                }), t
            }
            let e1 = e => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let {
                            element: n,
                            padding: r
                        } = "function" == typeof e ? e(t) : e;
                        return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? eY({
                            element: n.current,
                            padding: r
                        }).fn(t) : {} : n ? eY({
                            element: n,
                            padding: r
                        }).fn(t) : {}
                    }
                }),
                e2 = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = 0), {
                            name: "offset",
                            options: e,
                            async fn(t) {
                                var n, r;
                                let {
                                    x: o,
                                    y: i,
                                    placement: l,
                                    middlewareData: a
                                } = t, s = await em(t, e);
                                return l === (null == (n = a.offset) ? void 0 : n.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : {
                                    x: o + s.x,
                                    y: i + s.y,
                                    data: { ...s,
                                        placement: l
                                    }
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                e5 = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "shift",
                            options: e,
                            async fn(t) {
                                let {
                                    x: n,
                                    y: r,
                                    placement: o
                                } = t, {
                                    mainAxis: i = !0,
                                    crossAxis: l = !1,
                                    limiter: a = {
                                        fn: e => {
                                            let {
                                                x: t,
                                                y: n
                                            } = e;
                                            return {
                                                x: t,
                                                y: n
                                            }
                                        }
                                    },
                                    ...s
                                } = Q(e, t), u = {
                                    x: n,
                                    y: r
                                }, c = await ef(t, s), f = eo(ee(o)), d = en(f), p = u[d], m = u[f];
                                if (i) {
                                    let e = "y" === d ? "top" : "left",
                                        t = "y" === d ? "bottom" : "right",
                                        n = p + c[e],
                                        r = p - c[t];
                                    p = q(n, U(p, r))
                                }
                                if (l) {
                                    let e = "y" === f ? "top" : "left",
                                        t = "y" === f ? "bottom" : "right",
                                        n = m + c[e],
                                        r = m - c[t];
                                    m = q(n, U(m, r))
                                }
                                let h = a.fn({ ...t,
                                    [d]: p,
                                    [f]: m
                                });
                                return { ...h,
                                    data: {
                                        x: h.x - n,
                                        y: h.y - r,
                                        enabled: {
                                            [d]: i,
                                            [f]: l
                                        }
                                    }
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                e6 = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            options: e,
                            fn(t) {
                                let {
                                    x: n,
                                    y: r,
                                    placement: o,
                                    rects: i,
                                    middlewareData: l
                                } = t, {
                                    offset: a = 0,
                                    mainAxis: s = !0,
                                    crossAxis: u = !0
                                } = Q(e, t), c = {
                                    x: n,
                                    y: r
                                }, f = eo(o), d = en(f), p = c[d], m = c[f], h = Q(a, t), v = "number" == typeof h ? {
                                    mainAxis: h,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...h
                                };
                                if (s) {
                                    let e = "y" === d ? "height" : "width",
                                        t = i.reference[d] - i.floating[e] + v.mainAxis,
                                        n = i.reference[d] + i.reference[e] - v.mainAxis;
                                    p < t ? p = t : p > n && (p = n)
                                }
                                if (u) {
                                    var g, y;
                                    let e = "y" === d ? "width" : "height",
                                        t = ["top", "left"].includes(ee(o)),
                                        n = i.reference[f] - i.floating[e] + (t && (null == (g = l.offset) ? void 0 : g[f]) || 0) + (t ? 0 : v.crossAxis),
                                        r = i.reference[f] + i.reference[e] + (t ? 0 : (null == (y = l.offset) ? void 0 : y[f]) || 0) - (t ? v.crossAxis : 0);
                                    m < n ? m = n : m > r && (m = r)
                                }
                                return {
                                    [d]: p,
                                    [f]: m
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                e9 = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "flip",
                            options: e,
                            async fn(t) {
                                var n, r, o, i, l;
                                let {
                                    placement: a,
                                    middlewareData: s,
                                    rects: u,
                                    initialPlacement: c,
                                    platform: f,
                                    elements: d
                                } = t, {
                                    mainAxis: p = !0,
                                    crossAxis: m = !0,
                                    fallbackPlacements: h,
                                    fallbackStrategy: v = "bestFit",
                                    fallbackAxisSideDirection: g = "none",
                                    flipAlignment: y = !0,
                                    ...w
                                } = Q(e, t);
                                if (null != (n = s.arrow) && n.alignmentOffset) return {};
                                let x = ee(a),
                                    b = eo(c),
                                    E = ee(c) === c,
                                    C = await (null == f.isRTL ? void 0 : f.isRTL(d.floating)),
                                    S = h || (E || !y ? [el(c)] : function(e) {
                                        let t = el(e);
                                        return [ei(e), t, ei(t)]
                                    }(c)),
                                    R = "none" !== g;
                                !h && R && S.push(... function(e, t, n, r) {
                                    let o = et(e),
                                        i = function(e, t, n) {
                                            let r = ["left", "right"],
                                                o = ["right", "left"];
                                            switch (e) {
                                                case "top":
                                                case "bottom":
                                                    if (n) return t ? o : r;
                                                    return t ? r : o;
                                                case "left":
                                                case "right":
                                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                                default:
                                                    return []
                                            }
                                        }(ee(e), "start" === n, r);
                                    return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(ei)))), i
                                }(c, y, g, C));
                                let P = [c, ...S],
                                    T = await ef(t, w),
                                    A = [],
                                    L = (null == (r = s.flip) ? void 0 : r.overflows) || [];
                                if (p && A.push(T[x]), m) {
                                    let e = function(e, t, n) {
                                        void 0 === n && (n = !1);
                                        let r = et(e),
                                            o = en(eo(e)),
                                            i = er(o),
                                            l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                        return t.reference[i] > t.floating[i] && (l = el(l)), [l, el(l)]
                                    }(a, u, C);
                                    A.push(T[e[0]], T[e[1]])
                                }
                                if (L = [...L, {
                                        placement: a,
                                        overflows: A
                                    }], !A.every(e => e <= 0)) {
                                    let e = ((null == (o = s.flip) ? void 0 : o.index) || 0) + 1,
                                        t = P[e];
                                    if (t) return {
                                        data: {
                                            index: e,
                                            overflows: L
                                        },
                                        reset: {
                                            placement: t
                                        }
                                    };
                                    let n = null == (i = L.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                    if (!n) switch (v) {
                                        case "bestFit":
                                            {
                                                let e = null == (l = L.filter(e => {
                                                    if (R) {
                                                        let t = eo(e.placement);
                                                        return t === b || "y" === t
                                                    }
                                                    return !0
                                                }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];e && (n = e);
                                                break
                                            }
                                        case "initialPlacement":
                                            n = c
                                    }
                                    if (a !== n) return {
                                        reset: {
                                            placement: n
                                        }
                                    }
                                }
                                return {}
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                e4 = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "size",
                            options: e,
                            async fn(t) {
                                var n, r;
                                let o, i;
                                let {
                                    placement: l,
                                    rects: a,
                                    platform: s,
                                    elements: u
                                } = t, {
                                    apply: c = () => {},
                                    ...f
                                } = Q(e, t), d = await ef(t, f), p = ee(l), m = et(l), h = "y" === eo(l), {
                                    width: v,
                                    height: g
                                } = a.floating;
                                "top" === p || "bottom" === p ? (o = p, i = m === (await (null == s.isRTL ? void 0 : s.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (i = p, o = "end" === m ? "top" : "bottom");
                                let y = g - d.top - d.bottom,
                                    w = v - d.left - d.right,
                                    x = U(g - d[o], y),
                                    b = U(v - d[i], w),
                                    E = !t.middlewareData.shift,
                                    C = x,
                                    S = b;
                                if (null != (n = t.middlewareData.shift) && n.enabled.x && (S = w), null != (r = t.middlewareData.shift) && r.enabled.y && (C = y), E && !m) {
                                    let e = q(d.left, 0),
                                        t = q(d.right, 0),
                                        n = q(d.top, 0),
                                        r = q(d.bottom, 0);
                                    h ? S = v - 2 * (0 !== e || 0 !== t ? e + t : q(d.left, d.right)) : C = g - 2 * (0 !== n || 0 !== r ? n + r : q(d.top, d.bottom))
                                }
                                await c({ ...t,
                                    availableWidth: S,
                                    availableHeight: C
                                });
                                let R = await s.getDimensions(u.floating);
                                return v !== R.width || g !== R.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                e7 = (e, t) => ({ ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "hide",
                            options: e,
                            async fn(t) {
                                let {
                                    rects: n
                                } = t, {
                                    strategy: r = "referenceHidden",
                                    ...o
                                } = Q(e, t);
                                switch (r) {
                                    case "referenceHidden":
                                        {
                                            let e = ed(await ef(t, { ...o,
                                                elementContext: "reference"
                                            }), n.reference);
                                            return {
                                                data: {
                                                    referenceHiddenOffsets: e,
                                                    referenceHidden: ep(e)
                                                }
                                            }
                                        }
                                    case "escaped":
                                        {
                                            let e = ed(await ef(t, { ...o,
                                                altBoundary: !0
                                            }), n.floating);
                                            return {
                                                data: {
                                                    escapedOffsets: e,
                                                    escaped: ep(e)
                                                }
                                            }
                                        }
                                    default:
                                        return {}
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                e8 = (e, t) => ({ ...e1(e),
                    options: [e, t]
                });
            var e3 = o.forwardRef((e, t) => {
                let {
                    children: n,
                    width: r = 10,
                    height: o = 5,
                    ...i
                } = e;
                return (0, u.jsx)(C.svg, { ...i,
                    ref: t,
                    width: r,
                    height: o,
                    viewBox: "0 0 30 10",
                    preserveAspectRatio: "none",
                    children: e.asChild ? n : (0, u.jsx)("polygon", {
                        points: "0,0 30,0 15,10"
                    })
                })
            });
            e3.displayName = "Arrow";
            var te = "Popper",
                [tt, tn] = c(te),
                [tr, to] = tt(te),
                ti = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [r, i] = o.useState(null);
                    return (0, u.jsx)(tr, {
                        scope: t,
                        anchor: r,
                        onAnchorChange: i,
                        children: n
                    })
                };
            ti.displayName = te;
            var tl = "PopperAnchor",
                ta = o.forwardRef((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: r,
                        ...i
                    } = e, l = to(tl, n), a = o.useRef(null), s = p(t, a);
                    return o.useEffect(() => {
                        l.onAnchorChange(r ? .current || a.current)
                    }), r ? null : (0, u.jsx)(C.div, { ...i,
                        ref: s
                    })
                });
            ta.displayName = tl;
            var ts = "PopperContent",
                [tu, tc] = tt(ts),
                tf = o.forwardRef((e, t) => {
                    let {
                        __scopePopper: n,
                        side: r = "bottom",
                        sideOffset: i = 0,
                        align: a = "center",
                        alignOffset: s = 0,
                        arrowPadding: c = 0,
                        avoidCollisions: f = !0,
                        collisionBoundary: d = [],
                        collisionPadding: m = 0,
                        sticky: h = "partial",
                        hideWhenDetached: v = !1,
                        updatePositionStrategy: g = "optimized",
                        onPlaced: y,
                        ...w
                    } = e, x = to(ts, n), [b, E] = o.useState(null), R = p(t, e => E(e)), [P, T] = o.useState(null), A = function(e) {
                        let [t, n] = o.useState(void 0);
                        return B(() => {
                            if (e) {
                                n({
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                });
                                let t = new ResizeObserver(t => {
                                    let r, o;
                                    if (!Array.isArray(t) || !t.length) return;
                                    let i = t[0];
                                    if ("borderBoxSize" in i) {
                                        let e = i.borderBoxSize,
                                            t = Array.isArray(e) ? e[0] : e;
                                        r = t.inlineSize, o = t.blockSize
                                    } else r = e.offsetWidth, o = e.offsetHeight;
                                    n({
                                        width: r,
                                        height: o
                                    })
                                });
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => t.unobserve(e)
                            }
                            n(void 0)
                        }, [e]), t
                    }(P), L = A ? .width ? ? 0, j = A ? .height ? ? 0, N = "number" == typeof m ? m : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...m
                    }, k = Array.isArray(d) ? d : [d], D = k.length > 0, O = {
                        padding: N,
                        boundary: k.filter(th),
                        altBoundary: D
                    }, {
                        refs: M,
                        floatingStyles: I,
                        placement: F,
                        isPositioned: W,
                        middlewareData: H
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: n = "absolute",
                            middleware: r = [],
                            platform: i,
                            elements: {
                                reference: a,
                                floating: s
                            } = {},
                            transform: u = !0,
                            whileElementsMounted: c,
                            open: f
                        } = e, [d, p] = o.useState({
                            x: 0,
                            y: 0,
                            strategy: n,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [m, h] = o.useState(r);
                        eJ(m, r) || h(r);
                        let [v, g] = o.useState(null), [y, w] = o.useState(null), x = o.useCallback(e => {
                            e !== S.current && (S.current = e, g(e))
                        }, []), b = o.useCallback(e => {
                            e !== R.current && (R.current = e, w(e))
                        }, []), E = a || v, C = s || y, S = o.useRef(null), R = o.useRef(null), P = o.useRef(d), T = null != c, A = e0(c), L = e0(i), j = e0(f), N = o.useCallback(() => {
                            if (!S.current || !R.current) return;
                            let e = {
                                placement: t,
                                strategy: n,
                                middleware: m
                            };
                            L.current && (e.platform = L.current), eX(S.current, R.current, e).then(e => {
                                let t = { ...e,
                                    isPositioned: !1 !== j.current
                                };
                                k.current && !eJ(P.current, t) && (P.current = t, l.flushSync(() => {
                                    p(t)
                                }))
                            })
                        }, [m, t, n, L, j]);
                        eZ(() => {
                            !1 === f && P.current.isPositioned && (P.current.isPositioned = !1, p(e => ({ ...e,
                                isPositioned: !1
                            })))
                        }, [f]);
                        let k = o.useRef(!1);
                        eZ(() => (k.current = !0, () => {
                            k.current = !1
                        }), []), eZ(() => {
                            if (E && (S.current = E), C && (R.current = C), E && C) {
                                if (A.current) return A.current(E, C, N);
                                N()
                            }
                        }, [E, C, N, A, T]);
                        let D = o.useMemo(() => ({
                                reference: S,
                                floating: R,
                                setReference: x,
                                setFloating: b
                            }), [x, b]),
                            O = o.useMemo(() => ({
                                reference: E,
                                floating: C
                            }), [E, C]),
                            M = o.useMemo(() => {
                                let e = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!O.floating) return e;
                                let t = eQ(O.floating, d.x),
                                    r = eQ(O.floating, d.y);
                                return u ? { ...e,
                                    transform: "translate(" + t + "px, " + r + "px)",
                                    ...eG(O.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: t,
                                    top: r
                                }
                            }, [n, u, O.floating, d.x, d.y]);
                        return o.useMemo(() => ({ ...d,
                            update: N,
                            refs: D,
                            elements: O,
                            floatingStyles: M
                        }), [d, N, D, O, M])
                    }({
                        strategy: "fixed",
                        placement: r + ("center" !== a ? "-" + a : ""),
                        whileElementsMounted: (...e) => (function(e, t, n, r) {
                            let o;
                            void 0 === r && (r = {});
                            let {
                                ancestorScroll: i = !0,
                                ancestorResize: l = !0,
                                elementResize: a = "function" == typeof ResizeObserver,
                                layoutShift: s = "function" == typeof IntersectionObserver,
                                animationFrame: u = !1
                            } = r, c = eO(e), f = i || l ? [...c ? eN(c) : [], ...eN(t)] : [];
                            f.forEach(e => {
                                i && e.addEventListener("scroll", n, {
                                    passive: !0
                                }), l && e.addEventListener("resize", n)
                            });
                            let d = c && s ? function(e, t) {
                                    let n, r = null,
                                        o = ey(e);

                                    function i() {
                                        var e;
                                        clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                                    }
                                    return ! function l(a, s) {
                                        void 0 === a && (a = !1), void 0 === s && (s = 1), i();
                                        let u = e.getBoundingClientRect(),
                                            {
                                                left: c,
                                                top: f,
                                                width: d,
                                                height: p
                                            } = u;
                                        if (a || t(), !d || !p) return;
                                        let m = X(f),
                                            h = X(o.clientWidth - (c + d)),
                                            v = {
                                                rootMargin: -m + "px " + -h + "px " + -X(o.clientHeight - (f + p)) + "px " + -X(c) + "px",
                                                threshold: q(0, U(1, s)) || 1
                                            },
                                            g = !0;

                                        function y(t) {
                                            let r = t[0].intersectionRatio;
                                            if (r !== s) {
                                                if (!g) return l();
                                                r ? l(!1, r) : n = setTimeout(() => {
                                                    l(!1, 1e-7)
                                                }, 1e3)
                                            }
                                            1 !== r || eq(u, e.getBoundingClientRect()) || l(), g = !1
                                        }
                                        try {
                                            r = new IntersectionObserver(y, { ...v,
                                                root: o.ownerDocument
                                            })
                                        } catch (e) {
                                            r = new IntersectionObserver(y, v)
                                        }
                                        r.observe(e)
                                    }(!0), i
                                }(c, n) : null,
                                p = -1,
                                m = null;
                            a && (m = new ResizeObserver(e => {
                                let [r] = e;
                                r && r.target === c && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
                                    var e;
                                    null == (e = m) || e.observe(t)
                                })), n()
                            }), c && !u && m.observe(c), m.observe(t));
                            let h = u ? eW(e) : null;
                            return u && function t() {
                                let r = eW(e);
                                h && !eq(h, r) && n(), h = r, o = requestAnimationFrame(t)
                            }(), n(), () => {
                                var e;
                                f.forEach(e => {
                                    i && e.removeEventListener("scroll", n), l && e.removeEventListener("resize", n)
                                }), null == d || d(), null == (e = m) || e.disconnect(), m = null, u && cancelAnimationFrame(o)
                            }
                        })(...e, {
                            animationFrame: "always" === g
                        }),
                        elements: {
                            reference: x.anchor
                        },
                        middleware: [e2({
                            mainAxis: i + j,
                            alignmentAxis: s
                        }), f && e5({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === h ? e6() : void 0,
                            ...O
                        }), f && e9({ ...O
                        }), e4({ ...O,
                            apply: ({
                                elements: e,
                                rects: t,
                                availableWidth: n,
                                availableHeight: r
                            }) => {
                                let {
                                    width: o,
                                    height: i
                                } = t.reference, l = e.floating.style;
                                l.setProperty("--radix-popper-available-width", `${n}px`), l.setProperty("--radix-popper-available-height", `${r}px`), l.setProperty("--radix-popper-anchor-width", `${o}px`), l.setProperty("--radix-popper-anchor-height", `${i}px`)
                            }
                        }), P && e8({
                            element: P,
                            padding: c
                        }), tv({
                            arrowWidth: L,
                            arrowHeight: j
                        }), v && e7({
                            strategy: "referenceHidden",
                            ...O
                        })]
                    }), [V, _] = tg(F), z = S(y);
                    B(() => {
                        W && z ? .()
                    }, [W, z]);
                    let $ = H.arrow ? .x,
                        K = H.arrow ? .y,
                        Y = H.arrow ? .centerOffset !== 0,
                        [Z, J] = o.useState();
                    return B(() => {
                        b && J(window.getComputedStyle(b).zIndex)
                    }, [b]), (0, u.jsx)("div", {
                        ref: M.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...I,
                            transform: W ? I.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: Z,
                            "--radix-popper-transform-origin": [H.transformOrigin ? .x, H.transformOrigin ? .y].join(" "),
                            ...H.hide ? .referenceHidden && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, u.jsx)(tu, {
                            scope: n,
                            placedSide: V,
                            onArrowChange: T,
                            arrowX: $,
                            arrowY: K,
                            shouldHideArrow: Y,
                            children: (0, u.jsx)(C.div, {
                                "data-side": V,
                                "data-align": _,
                                ...w,
                                ref: R,
                                style: { ...w.style,
                                    animation: W ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            tf.displayName = ts;
            var td = "PopperArrow",
                tp = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                tm = o.forwardRef(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...r
                    } = e, o = tc(td, n), i = tp[o.placedSide];
                    return (0, u.jsx)("span", {
                        ref: o.onArrowChange,
                        style: {
                            position: "absolute",
                            left: o.arrowX,
                            top: o.arrowY,
                            [i]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[o.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[o.placedSide],
                            visibility: o.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, u.jsx)(e3, { ...r,
                            ref: t,
                            style: { ...r.style,
                                display: "block"
                            }
                        })
                    })
                });

            function th(e) {
                return null !== e
            }
            tm.displayName = td;
            var tv = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    let {
                        placement: n,
                        rects: r,
                        middlewareData: o
                    } = t, i = o.arrow ? .centerOffset !== 0, l = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [s, u] = tg(n), c = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[u], f = (o.arrow ? .x ? ? 0) + l / 2, d = (o.arrow ? .y ? ? 0) + a / 2, p = "", m = "";
                    return "bottom" === s ? (p = i ? c : `${f}px`, m = `${-a}px`) : "top" === s ? (p = i ? c : `${f}px`, m = `${r.floating.height+a}px`) : "right" === s ? (p = `${-a}px`, m = i ? c : `${d}px`) : "left" === s && (p = `${r.floating.width+a}px`, m = i ? c : `${d}px`), {
                        data: {
                            x: p,
                            y: m
                        }
                    }
                }
            });

            function tg(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            var ty = o.forwardRef((e, t) => {
                let {
                    container: n,
                    ...r
                } = e, [i, a] = o.useState(!1);
                B(() => a(!0), []);
                let s = n || i && globalThis ? .document ? .body;
                return s ? l.createPortal((0, u.jsx)(C.div, { ...r,
                    ref: t
                }), s) : null
            });
            ty.displayName = "Portal";
            var tw = o.forwardRef((e, t) => {
                let {
                    children: n,
                    ...r
                } = e, i = o.Children.toArray(n), l = i.find(tE);
                if (l) {
                    let e = l.props.children,
                        n = i.map(t => t !== l ? t : o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null);
                    return (0, u.jsx)(tx, { ...r,
                        ref: t,
                        children: o.isValidElement(e) ? o.cloneElement(e, void 0, n) : null
                    })
                }
                return (0, u.jsx)(tx, { ...r,
                    ref: t,
                    children: n
                })
            });
            tw.displayName = "Slot";
            var tx = o.forwardRef((e, t) => {
                let {
                    children: n,
                    ...r
                } = e;
                if (o.isValidElement(n)) {
                    let e = function(e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            return n ? e.ref : (n = (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                        }(n),
                        i = function(e, t) {
                            let n = { ...t
                            };
                            for (let r in t) {
                                let o = e[r],
                                    i = t[r];
                                /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                                    i(...e), o(...e)
                                } : o && (n[r] = o) : "style" === r ? n[r] = { ...o,
                                    ...i
                                } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...n
                            }
                        }(r, n.props);
                    return n.type !== o.Fragment && (i.ref = t ? d(t, e) : e), o.cloneElement(n, i)
                }
                return o.Children.count(n) > 1 ? o.Children.only(null) : null
            });
            tx.displayName = "SlotClone";
            var tb = ({
                children: e
            }) => (0, u.jsx)(u.Fragment, {
                children: e
            });

            function tE(e) {
                return o.isValidElement(e) && e.type === tb
            }

            function tC({
                prop: e,
                defaultProp: t,
                onChange: n = () => {}
            }) {
                let [r, i] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let n = o.useState(e),
                        [r] = n,
                        i = o.useRef(r),
                        l = S(t);
                    return o.useEffect(() => {
                        i.current !== r && (l(r), i.current = r)
                    }, [r, i, l]), n
                }({
                    defaultProp: t,
                    onChange: n
                }), l = void 0 !== e, a = l ? e : r, s = S(n);
                return [a, o.useCallback(t => {
                    if (l) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && s(n)
                    } else i(t)
                }, [l, e, i, s])]
            }
            var tS = o.forwardRef((e, t) => (0, u.jsx)(C.span, { ...e,
                ref: t,
                style: {
                    position: "absolute",
                    border: 0,
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    wordWrap: "normal",
                    ...e.style
                }
            }));
            tS.displayName = "VisuallyHidden";
            var tR = n(8241),
                tP = n(5810),
                tT = [" ", "Enter", "ArrowUp", "ArrowDown"],
                tA = [" ", "Enter"],
                tL = "Select",
                [tj, tN, tk] = function(e) {
                    let t = e + "CollectionProvider",
                        [n, r] = c(t),
                        [i, l] = n(t, {
                            collectionRef: {
                                current: null
                            },
                            itemMap: new Map
                        }),
                        a = e => {
                            let {
                                scope: t,
                                children: n
                            } = e, r = o.useRef(null), l = o.useRef(new Map).current;
                            return (0, u.jsx)(i, {
                                scope: t,
                                itemMap: l,
                                collectionRef: r,
                                children: n
                            })
                        };
                    a.displayName = t;
                    let s = e + "CollectionSlot",
                        f = o.forwardRef((e, t) => {
                            let {
                                scope: n,
                                children: r
                            } = e, o = p(t, l(s, n).collectionRef);
                            return (0, u.jsx)(m, {
                                ref: o,
                                children: r
                            })
                        });
                    f.displayName = s;
                    let d = e + "CollectionItemSlot",
                        h = "data-radix-collection-item",
                        v = o.forwardRef((e, t) => {
                            let {
                                scope: n,
                                children: r,
                                ...i
                            } = e, a = o.useRef(null), s = p(t, a), c = l(d, n);
                            return o.useEffect(() => (c.itemMap.set(a, {
                                ref: a,
                                ...i
                            }), () => void c.itemMap.delete(a))), (0, u.jsx)(m, {
                                [h]: "",
                                ref: s,
                                children: r
                            })
                        });
                    return v.displayName = d, [{
                        Provider: a,
                        Slot: f,
                        ItemSlot: v
                    }, function(t) {
                        let n = l(e + "CollectionConsumer", t);
                        return o.useCallback(() => {
                            let e = n.collectionRef.current;
                            if (!e) return [];
                            let t = Array.from(e.querySelectorAll(`[${h}]`));
                            return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
                        }, [n.collectionRef, n.itemMap])
                    }, r]
                }(tL),
                [tD, tO] = c(tL, [tk, tn]),
                tM = tn(),
                [tI, tF] = tD(tL),
                [tW, tH] = tD(tL),
                tV = e => {
                    let {
                        __scopeSelect: t,
                        children: n,
                        open: r,
                        defaultOpen: i,
                        onOpenChange: l,
                        value: a,
                        defaultValue: s,
                        onValueChange: c,
                        dir: f,
                        name: d,
                        autoComplete: p,
                        disabled: m,
                        required: h,
                        form: v
                    } = e, g = tM(t), [w, x] = o.useState(null), [b, E] = o.useState(null), [C, S] = o.useState(!1), R = function(e) {
                        let t = o.useContext(y);
                        return e || t || "ltr"
                    }(f), [P = !1, T] = tC({
                        prop: r,
                        defaultProp: i,
                        onChange: l
                    }), [A, L] = tC({
                        prop: a,
                        defaultProp: s,
                        onChange: c
                    }), j = o.useRef(null), N = !w || v || !!w.closest("form"), [k, D] = o.useState(new Set), O = Array.from(k).map(e => e.props.value).join(";");
                    return (0, u.jsx)(ti, { ...g,
                        children: (0, u.jsxs)(tI, {
                            required: h,
                            scope: t,
                            trigger: w,
                            onTriggerChange: x,
                            valueNode: b,
                            onValueNodeChange: E,
                            valueNodeHasChildren: C,
                            onValueNodeHasChildrenChange: S,
                            contentId: $(),
                            value: A,
                            onValueChange: L,
                            open: P,
                            onOpenChange: T,
                            dir: R,
                            triggerPointerDownPosRef: j,
                            disabled: m,
                            children: [(0, u.jsx)(tj.Provider, {
                                scope: t,
                                children: (0, u.jsx)(tW, {
                                    scope: e.__scopeSelect,
                                    onNativeOptionAdd: o.useCallback(e => {
                                        D(t => new Set(t).add(e))
                                    }, []),
                                    onNativeOptionRemove: o.useCallback(e => {
                                        D(t => {
                                            let n = new Set(t);
                                            return n.delete(e), n
                                        })
                                    }, []),
                                    children: n
                                })
                            }), N ? (0, u.jsxs)(nv, {
                                "aria-hidden": !0,
                                required: h,
                                tabIndex: -1,
                                name: d,
                                autoComplete: p,
                                value: A,
                                onChange: e => L(e.target.value),
                                disabled: m,
                                form: v,
                                children: [void 0 === A ? (0, u.jsx)("option", {
                                    value: ""
                                }) : null, Array.from(k)]
                            }, O) : null]
                        })
                    })
                };
            tV.displayName = tL;
            var tB = "SelectTrigger",
                t_ = o.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        disabled: r = !1,
                        ...i
                    } = e, l = tM(n), a = tF(tB, n), c = a.disabled || r, f = p(t, a.onTriggerChange), d = tN(n), m = o.useRef("touch"), [h, v, g] = ng(e => {
                        let t = d().filter(e => !e.disabled),
                            n = t.find(e => e.value === a.value),
                            r = ny(t, e, n);
                        void 0 !== r && a.onValueChange(r.value)
                    }), y = e => {
                        c || (a.onOpenChange(!0), g()), e && (a.triggerPointerDownPosRef.current = {
                            x: Math.round(e.pageX),
                            y: Math.round(e.pageY)
                        })
                    };
                    return (0, u.jsx)(ta, {
                        asChild: !0,
                        ...l,
                        children: (0, u.jsx)(C.button, {
                            type: "button",
                            role: "combobox",
                            "aria-controls": a.contentId,
                            "aria-expanded": a.open,
                            "aria-required": a.required,
                            "aria-autocomplete": "none",
                            dir: a.dir,
                            "data-state": a.open ? "open" : "closed",
                            disabled: c,
                            "data-disabled": c ? "" : void 0,
                            "data-placeholder": nh(a.value) ? "" : void 0,
                            ...i,
                            ref: f,
                            onClick: s(i.onClick, e => {
                                e.currentTarget.focus(), "mouse" !== m.current && y(e)
                            }),
                            onPointerDown: s(i.onPointerDown, e => {
                                m.current = e.pointerType;
                                let t = e.target;
                                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (y(e), e.preventDefault())
                            }),
                            onKeyDown: s(i.onKeyDown, e => {
                                let t = "" !== h.current;
                                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || v(e.key), (!t || " " !== e.key) && tT.includes(e.key) && (y(), e.preventDefault())
                            })
                        })
                    })
                });
            t_.displayName = tB;
            var tz = "SelectValue",
                t$ = o.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        className: r,
                        style: o,
                        children: i,
                        placeholder: l = "",
                        ...a
                    } = e, s = tF(tz, n), {
                        onValueNodeHasChildrenChange: c
                    } = s, f = void 0 !== i, d = p(t, s.onValueNodeChange);
                    return B(() => {
                        c(f)
                    }, [c, f]), (0, u.jsx)(C.span, { ...a,
                        ref: d,
                        style: {
                            pointerEvents: "none"
                        },
                        children: nh(s.value) ? (0, u.jsx)(u.Fragment, {
                            children: l
                        }) : i
                    })
                });
            t$.displayName = tz;
            var tK = o.forwardRef((e, t) => {
                let {
                    __scopeSelect: n,
                    children: r,
                    ...o
                } = e;
                return (0, u.jsx)(C.span, {
                    "aria-hidden": !0,
                    ...o,
                    ref: t,
                    children: r || "▼"
                })
            });
            tK.displayName = "SelectIcon";
            var tU = e => (0, u.jsx)(ty, {
                asChild: !0,
                ...e
            });
            tU.displayName = "SelectPortal";
            var tq = "SelectContent",
                tY = o.forwardRef((e, t) => {
                    let n = tF(tq, e.__scopeSelect),
                        [r, i] = o.useState();
                    return (B(() => {
                        i(new DocumentFragment)
                    }, []), n.open) ? (0, u.jsx)(tJ, { ...e,
                        ref: t
                    }) : r ? l.createPortal((0, u.jsx)(tX, {
                        scope: e.__scopeSelect,
                        children: (0, u.jsx)(tj.Slot, {
                            scope: e.__scopeSelect,
                            children: (0, u.jsx)("div", {
                                children: e.children
                            })
                        })
                    }), r) : null
                });
            tY.displayName = tq;
            var [tX, tZ] = tD(tq), tJ = o.forwardRef((e, t) => {
                let {
                    __scopeSelect: n,
                    position: r = "item-aligned",
                    onCloseAutoFocus: i,
                    onEscapeKeyDown: l,
                    onPointerDownOutside: a,
                    side: c,
                    sideOffset: f,
                    align: d,
                    alignOffset: m,
                    arrowPadding: h,
                    collisionBoundary: v,
                    collisionPadding: g,
                    sticky: y,
                    hideWhenDetached: w,
                    avoidCollisions: x,
                    ...b
                } = e, E = tF(tq, n), [C, S] = o.useState(null), [R, P] = o.useState(null), A = p(t, e => S(e)), [L, k] = o.useState(null), [D, O] = o.useState(null), I = tN(n), [F, W] = o.useState(!1), H = o.useRef(!1);
                o.useEffect(() => {
                    if (C) return (0, tR.Eq)(C)
                }, [C]), o.useEffect(() => {
                    let e = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", e[0] ? ? N()), document.body.insertAdjacentElement("beforeend", e[1] ? ? N()), j++, () => {
                        1 === j && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), j--
                    }
                }, []);
                let V = o.useCallback(e => {
                        let [t, ...n] = I().map(e => e.ref.current), [r] = n.slice(-1), o = document.activeElement;
                        for (let n of e)
                            if (n === o || (n ? .scrollIntoView({
                                    block: "nearest"
                                }), n === t && R && (R.scrollTop = 0), n === r && R && (R.scrollTop = R.scrollHeight), n ? .focus(), document.activeElement !== o)) return
                    }, [I, R]),
                    B = o.useCallback(() => V([L, C]), [V, L, C]);
                o.useEffect(() => {
                    F && B()
                }, [F, B]);
                let {
                    onOpenChange: _,
                    triggerPointerDownPosRef: z
                } = E;
                o.useEffect(() => {
                    if (C) {
                        let e = {
                                x: 0,
                                y: 0
                            },
                            t = t => {
                                e = {
                                    x: Math.abs(Math.round(t.pageX) - (z.current ? .x ? ? 0)),
                                    y: Math.abs(Math.round(t.pageY) - (z.current ? .y ? ? 0))
                                }
                            },
                            n = n => {
                                e.x <= 10 && e.y <= 10 ? n.preventDefault() : C.contains(n.target) || _(!1), document.removeEventListener("pointermove", t), z.current = null
                            };
                        return null !== z.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                            capture: !0,
                            once: !0
                        })), () => {
                            document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                                capture: !0
                            })
                        }
                    }
                }, [C, _, z]), o.useEffect(() => {
                    let e = () => _(!1);
                    return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                        window.removeEventListener("blur", e), window.removeEventListener("resize", e)
                    }
                }, [_]);
                let [$, K] = ng(e => {
                    let t = I().filter(e => !e.disabled),
                        n = t.find(e => e.ref.current === document.activeElement),
                        r = ny(t, e, n);
                    r && setTimeout(() => r.ref.current.focus())
                }), U = o.useCallback((e, t, n) => {
                    let r = !H.current && !n;
                    (void 0 !== E.value && E.value === t || r) && (k(e), r && (H.current = !0))
                }, [E.value]), q = o.useCallback(() => C ? .focus(), [C]), Y = o.useCallback((e, t, n) => {
                    let r = !H.current && !n;
                    (void 0 !== E.value && E.value === t || r) && O(e)
                }, [E.value]), X = "popper" === r ? tQ : tG, Z = X === tQ ? {
                    side: c,
                    sideOffset: f,
                    align: d,
                    alignOffset: m,
                    arrowPadding: h,
                    collisionBoundary: v,
                    collisionPadding: g,
                    sticky: y,
                    hideWhenDetached: w,
                    avoidCollisions: x
                } : {};
                return (0, u.jsx)(tX, {
                    scope: n,
                    content: C,
                    viewport: R,
                    onViewportChange: P,
                    itemRefCallback: U,
                    selectedItem: L,
                    onItemLeave: q,
                    itemTextRefCallback: Y,
                    focusSelectedItem: B,
                    selectedItemText: D,
                    position: r,
                    isPositioned: F,
                    searchRef: $,
                    children: (0, u.jsx)(tP.A, {
                        as: tw,
                        allowPinchZoom: !0,
                        children: (0, u.jsx)(M, {
                            asChild: !0,
                            trapped: E.open,
                            onMountAutoFocus: e => {
                                e.preventDefault()
                            },
                            onUnmountAutoFocus: s(i, e => {
                                E.trigger ? .focus({
                                    preventScroll: !0
                                }), e.preventDefault()
                            }),
                            children: (0, u.jsx)(T, {
                                asChild: !0,
                                disableOutsidePointerEvents: !0,
                                onEscapeKeyDown: l,
                                onPointerDownOutside: a,
                                onFocusOutside: e => e.preventDefault(),
                                onDismiss: () => E.onOpenChange(!1),
                                children: (0, u.jsx)(X, {
                                    role: "listbox",
                                    id: E.contentId,
                                    "data-state": E.open ? "open" : "closed",
                                    dir: E.dir,
                                    onContextMenu: e => e.preventDefault(),
                                    ...b,
                                    ...Z,
                                    onPlaced: () => W(!0),
                                    ref: A,
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        outline: "none",
                                        ...b.style
                                    },
                                    onKeyDown: s(b.onKeyDown, e => {
                                        let t = e.ctrlKey || e.altKey || e.metaKey;
                                        if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || K(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                            let t = I().filter(e => !e.disabled).map(e => e.ref.current);
                                            if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                                let n = e.target,
                                                    r = t.indexOf(n);
                                                t = t.slice(r + 1)
                                            }
                                            setTimeout(() => V(t)), e.preventDefault()
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            });
            tJ.displayName = "SelectContentImpl";
            var tG = o.forwardRef((e, t) => {
                let {
                    __scopeSelect: n,
                    onPlaced: r,
                    ...i
                } = e, l = tF(tq, n), s = tZ(tq, n), [c, f] = o.useState(null), [d, m] = o.useState(null), h = p(t, e => m(e)), v = tN(n), g = o.useRef(!1), y = o.useRef(!0), {
                    viewport: w,
                    selectedItem: x,
                    selectedItemText: b,
                    focusSelectedItem: E
                } = s, S = o.useCallback(() => {
                    if (l.trigger && l.valueNode && c && d && w && x && b) {
                        let e = l.trigger.getBoundingClientRect(),
                            t = d.getBoundingClientRect(),
                            n = l.valueNode.getBoundingClientRect(),
                            o = b.getBoundingClientRect();
                        if ("rtl" !== l.dir) {
                            let r = o.left - t.left,
                                i = n.left - r,
                                l = e.left - i,
                                s = e.width + l,
                                u = Math.max(s, t.width),
                                f = a(i, [10, Math.max(10, window.innerWidth - 10 - u)]);
                            c.style.minWidth = s + "px", c.style.left = f + "px"
                        } else {
                            let r = t.right - o.right,
                                i = window.innerWidth - n.right - r,
                                l = window.innerWidth - e.right - i,
                                s = e.width + l,
                                u = Math.max(s, t.width),
                                f = a(i, [10, Math.max(10, window.innerWidth - 10 - u)]);
                            c.style.minWidth = s + "px", c.style.right = f + "px"
                        }
                        let i = v(),
                            s = window.innerHeight - 20,
                            u = w.scrollHeight,
                            f = window.getComputedStyle(d),
                            p = parseInt(f.borderTopWidth, 10),
                            m = parseInt(f.paddingTop, 10),
                            h = parseInt(f.borderBottomWidth, 10),
                            y = p + m + u + parseInt(f.paddingBottom, 10) + h,
                            E = Math.min(5 * x.offsetHeight, y),
                            C = window.getComputedStyle(w),
                            S = parseInt(C.paddingTop, 10),
                            R = parseInt(C.paddingBottom, 10),
                            P = e.top + e.height / 2 - 10,
                            T = x.offsetHeight / 2,
                            A = p + m + (x.offsetTop + T);
                        if (A <= P) {
                            let e = i.length > 0 && x === i[i.length - 1].ref.current;
                            c.style.bottom = "0px";
                            let t = Math.max(s - P, T + (e ? R : 0) + (d.clientHeight - w.offsetTop - w.offsetHeight) + h);
                            c.style.height = A + t + "px"
                        } else {
                            let e = i.length > 0 && x === i[0].ref.current;
                            c.style.top = "0px";
                            let t = Math.max(P, p + w.offsetTop + (e ? S : 0) + T);
                            c.style.height = t + (y - A) + "px", w.scrollTop = A - P + w.offsetTop
                        }
                        c.style.margin = "10px 0", c.style.minHeight = E + "px", c.style.maxHeight = s + "px", r ? .(), requestAnimationFrame(() => g.current = !0)
                    }
                }, [v, l.trigger, l.valueNode, c, d, w, x, b, l.dir, r]);
                B(() => S(), [S]);
                let [R, P] = o.useState();
                B(() => {
                    d && P(window.getComputedStyle(d).zIndex)
                }, [d]);
                let T = o.useCallback(e => {
                    e && !0 === y.current && (S(), E ? .(), y.current = !1)
                }, [S, E]);
                return (0, u.jsx)(t0, {
                    scope: n,
                    contentWrapper: c,
                    shouldExpandOnScrollRef: g,
                    onScrollButtonChange: T,
                    children: (0, u.jsx)("div", {
                        ref: f,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "fixed",
                            zIndex: R
                        },
                        children: (0, u.jsx)(C.div, { ...i,
                            ref: h,
                            style: {
                                boxSizing: "border-box",
                                maxHeight: "100%",
                                ...i.style
                            }
                        })
                    })
                })
            });
            tG.displayName = "SelectItemAlignedPosition";
            var tQ = o.forwardRef((e, t) => {
                let {
                    __scopeSelect: n,
                    align: r = "start",
                    collisionPadding: o = 10,
                    ...i
                } = e, l = tM(n);
                return (0, u.jsx)(tf, { ...l,
                    ...i,
                    ref: t,
                    align: r,
                    collisionPadding: o,
                    style: {
                        boxSizing: "border-box",
                        ...i.style,
                        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            });
            tQ.displayName = "SelectPopperPosition";
            var [t0, t1] = tD(tq, {}), t2 = "SelectViewport", t5 = o.forwardRef((e, t) => {
                let {
                    __scopeSelect: n,
                    nonce: r,
                    ...i
                } = e, l = tZ(t2, n), a = t1(t2, n), c = p(t, l.onViewportChange), f = o.useRef(0);
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                        },
                        nonce: r
                    }), (0, u.jsx)(tj.Slot, {
                        scope: n,
                        children: (0, u.jsx)(C.div, {
                            "data-radix-select-viewport": "",
                            role: "presentation",
                            ...i,
                            ref: c,
                            style: {
                                position: "relative",
                                flex: 1,
                                overflow: "hidden auto",
                                ...i.style
                            },
                            onScroll: s(i.onScroll, e => {
                                let t = e.currentTarget,
                                    {
                                        contentWrapper: n,
                                        shouldExpandOnScrollRef: r
                                    } = a;
                                if (r ? .current && n) {
                                    let e = Math.abs(f.current - t.scrollTop);
                                    if (e > 0) {
                                        let r = window.innerHeight - 20,
                                            o = Math.max(parseFloat(n.style.minHeight), parseFloat(n.style.height));
                                        if (o < r) {
                                            let i = o + e,
                                                l = Math.min(r, i),
                                                a = i - l;
                                            n.style.height = l + "px", "0px" === n.style.bottom && (t.scrollTop = a > 0 ? a : 0, n.style.justifyContent = "flex-end")
                                        }
                                    }
                                }
                                f.current = t.scrollTop
                            })
                        })
                    })]
                })
            });
            t5.displayName = t2;
            var t6 = "SelectGroup",
                [t9, t4] = tD(t6),
                t7 = o.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...r
                    } = e, o = $();
                    return (0, u.jsx)(t9, {
                        scope: n,
                        id: o,
                        children: (0, u.jsx)(C.div, {
                            role: "group",
                            "aria-labelledby": o,
                            ...r,
                            ref: t
                        })
                    })
                });
            t7.displayName = t6;
            var t8 = "SelectLabel",
                t3 = o.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...r
                    } = e, o = t4(t8, n);
                    return (0, u.jsx)(C.div, {
                        id: o.id,
                        ...r,
                        ref: t
                    })
                });
            t3.displayName = t8;
            var ne = "SelectItem",
                [nt, nn] = tD(ne),
                nr = o.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        value: r,
                        disabled: i = !1,
                        textValue: l,
                        ...a
                    } = e, c = tF(ne, n), f = tZ(ne, n), d = c.value === r, [m, h] = o.useState(l ? ? ""), [v, g] = o.useState(!1), y = p(t, e => f.itemRefCallback ? .(e, r, i)), w = $(), x = o.useRef("touch"), b = () => {
                        i || (c.onValueChange(r), c.onOpenChange(!1))
                    };
                    if ("" === r) throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
                    return (0, u.jsx)(nt, {
                        scope: n,
                        value: r,
                        disabled: i,
                        textId: w,
                        isSelected: d,
                        onItemTextChange: o.useCallback(e => {
                            h(t => t || (e ? .textContent ? ? "").trim())
                        }, []),
                        children: (0, u.jsx)(tj.ItemSlot, {
                            scope: n,
                            value: r,
                            disabled: i,
                            textValue: m,
                            children: (0, u.jsx)(C.div, {
                                role: "option",
                                "aria-labelledby": w,
                                "data-highlighted": v ? "" : void 0,
                                "aria-selected": d && v,
                                "data-state": d ? "checked" : "unchecked",
                                "aria-disabled": i || void 0,
                                "data-disabled": i ? "" : void 0,
                                tabIndex: i ? void 0 : -1,
                                ...a,
                                ref: y,
                                onFocus: s(a.onFocus, () => g(!0)),
                                onBlur: s(a.onBlur, () => g(!1)),
                                onClick: s(a.onClick, () => {
                                    "mouse" !== x.current && b()
                                }),
                                onPointerUp: s(a.onPointerUp, () => {
                                    "mouse" === x.current && b()
                                }),
                                onPointerDown: s(a.onPointerDown, e => {
                                    x.current = e.pointerType
                                }),
                                onPointerMove: s(a.onPointerMove, e => {
                                    x.current = e.pointerType, i ? f.onItemLeave ? .() : "mouse" === x.current && e.currentTarget.focus({
                                        preventScroll: !0
                                    })
                                }),
                                onPointerLeave: s(a.onPointerLeave, e => {
                                    e.currentTarget === document.activeElement && f.onItemLeave ? .()
                                }),
                                onKeyDown: s(a.onKeyDown, e => {
                                    f.searchRef ? .current !== "" && " " === e.key || (tA.includes(e.key) && b(), " " === e.key && e.preventDefault())
                                })
                            })
                        })
                    })
                });
            nr.displayName = ne;
            var no = "SelectItemText",
                ni = o.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        className: r,
                        style: i,
                        ...a
                    } = e, s = tF(no, n), c = tZ(no, n), f = nn(no, n), d = tH(no, n), [m, h] = o.useState(null), v = p(t, e => h(e), f.onItemTextChange, e => c.itemTextRefCallback ? .(e, f.value, f.disabled)), g = m ? .textContent, y = o.useMemo(() => (0, u.jsx)("option", {
                        value: f.value,
                        disabled: f.disabled,
                        children: g
                    }, f.value), [f.disabled, f.value, g]), {
                        onNativeOptionAdd: w,
                        onNativeOptionRemove: x
                    } = d;
                    return B(() => (w(y), () => x(y)), [w, x, y]), (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(C.span, {
                            id: f.textId,
                            ...a,
                            ref: v
                        }), f.isSelected && s.valueNode && !s.valueNodeHasChildren ? l.createPortal(a.children, s.valueNode) : null]
                    })
                });
            ni.displayName = no;
            var nl = "SelectItemIndicator",
                na = o.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...r
                    } = e;
                    return nn(nl, n).isSelected ? (0, u.jsx)(C.span, {
                        "aria-hidden": !0,
                        ...r,
                        ref: t
                    }) : null
                });
            na.displayName = nl;
            var ns = "SelectScrollUpButton",
                nu = o.forwardRef((e, t) => {
                    let n = tZ(ns, e.__scopeSelect),
                        r = t1(ns, e.__scopeSelect),
                        [i, l] = o.useState(!1),
                        a = p(t, r.onScrollButtonChange);
                    return B(() => {
                        if (n.viewport && n.isPositioned) {
                            let e = function() {
                                    l(t.scrollTop > 0)
                                },
                                t = n.viewport;
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [n.viewport, n.isPositioned]), i ? (0, u.jsx)(nd, { ...e,
                        ref: a,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = n;
                            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                        }
                    }) : null
                });
            nu.displayName = ns;
            var nc = "SelectScrollDownButton",
                nf = o.forwardRef((e, t) => {
                    let n = tZ(nc, e.__scopeSelect),
                        r = t1(nc, e.__scopeSelect),
                        [i, l] = o.useState(!1),
                        a = p(t, r.onScrollButtonChange);
                    return B(() => {
                        if (n.viewport && n.isPositioned) {
                            let e = function() {
                                    let e = t.scrollHeight - t.clientHeight;
                                    l(Math.ceil(t.scrollTop) < e)
                                },
                                t = n.viewport;
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [n.viewport, n.isPositioned]), i ? (0, u.jsx)(nd, { ...e,
                        ref: a,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = n;
                            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                        }
                    }) : null
                });
            nf.displayName = nc;
            var nd = o.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        onAutoScroll: r,
                        ...i
                    } = e, l = tZ("SelectScrollButton", n), a = o.useRef(null), c = tN(n), f = o.useCallback(() => {
                        null !== a.current && (window.clearInterval(a.current), a.current = null)
                    }, []);
                    return o.useEffect(() => () => f(), [f]), B(() => {
                        let e = c().find(e => e.ref.current === document.activeElement);
                        e ? .ref.current ? .scrollIntoView({
                            block: "nearest"
                        })
                    }, [c]), (0, u.jsx)(C.div, {
                        "aria-hidden": !0,
                        ...i,
                        ref: t,
                        style: {
                            flexShrink: 0,
                            ...i.style
                        },
                        onPointerDown: s(i.onPointerDown, () => {
                            null === a.current && (a.current = window.setInterval(r, 50))
                        }),
                        onPointerMove: s(i.onPointerMove, () => {
                            l.onItemLeave ? .(), null === a.current && (a.current = window.setInterval(r, 50))
                        }),
                        onPointerLeave: s(i.onPointerLeave, () => {
                            f()
                        })
                    })
                }),
                np = o.forwardRef((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...r
                    } = e;
                    return (0, u.jsx)(C.div, {
                        "aria-hidden": !0,
                        ...r,
                        ref: t
                    })
                });
            np.displayName = "SelectSeparator";
            var nm = "SelectArrow";

            function nh(e) {
                return "" === e || void 0 === e
            }
            o.forwardRef((e, t) => {
                let {
                    __scopeSelect: n,
                    ...r
                } = e, o = tM(n), i = tF(nm, n), l = tZ(nm, n);
                return i.open && "popper" === l.position ? (0, u.jsx)(tm, { ...o,
                    ...r,
                    ref: t
                }) : null
            }).displayName = nm;
            var nv = o.forwardRef((e, t) => {
                let {
                    value: n,
                    ...r
                } = e, i = o.useRef(null), l = p(t, i), a = function(e) {
                    let t = o.useRef({
                        value: e,
                        previous: e
                    });
                    return o.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
                }(n);
                return o.useEffect(() => {
                    let e = i.current,
                        t = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
                    if (a !== n && t) {
                        let r = new Event("change", {
                            bubbles: !0
                        });
                        t.call(e, n), e.dispatchEvent(r)
                    }
                }, [a, n]), (0, u.jsx)(tS, {
                    asChild: !0,
                    children: (0, u.jsx)("select", { ...r,
                        ref: l,
                        defaultValue: n
                    })
                })
            });

            function ng(e) {
                let t = S(e),
                    n = o.useRef(""),
                    r = o.useRef(0),
                    i = o.useCallback(e => {
                        let o = n.current + e;
                        t(o),
                            function e(t) {
                                n.current = t, window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout(() => e(""), 1e3))
                            }(o)
                    }, [t]),
                    l = o.useCallback(() => {
                        n.current = "", window.clearTimeout(r.current)
                    }, []);
                return o.useEffect(() => () => window.clearTimeout(r.current), []), [n, i, l]
            }

            function ny(e, t, n) {
                var r;
                let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                    i = (r = Math.max(n ? e.indexOf(n) : -1, 0), e.map((t, n) => e[(r + n) % e.length]));
                1 === o.length && (i = i.filter(e => e !== n));
                let l = i.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
                return l !== n ? l : void 0
            }
            nv.displayName = "BubbleSelect";
            var nw = tV,
                nx = t_,
                nb = t$,
                nE = tK,
                nC = tU,
                nS = tY,
                nR = t5,
                nP = t7,
                nT = t3,
                nA = nr,
                nL = ni,
                nj = na,
                nN = nu,
                nk = nf,
                nD = np
        },
        8404: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9279).A)("Check", [
                ["path", {
                    d: "M20 6 9 17l-5-5",
                    key: "1gmf2c"
                }]
            ])
        },
        9664: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9279).A)("ChevronDown", [
                ["path", {
                    d: "m6 9 6 6 6-6",
                    key: "qrunsl"
                }]
            ])
        },
        3877: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = (0, n(9279).A)("ChevronUp", [
                ["path", {
                    d: "m18 15-6-6-6 6",
                    key: "153udz"
                }]
            ])
        }
    }
]);