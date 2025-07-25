(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [841], {
        9690: () => {},
        3368: (e, t, i) => {
            e.exports = i(6085)
        },
        3914: (e, t, i) => {
            "use strict";
            i.d(t, {
                Ij: () => l,
                _R: () => n,
                Vx: () => a
            });
            var s = i(2375),
                r = i(7044);

            function a(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: s,
                    emit: a
                } = e;

                function l(e) {
                    let i;
                    return e && "string" == typeof e && t.isElement && (i = t.el.querySelector(e) || t.hostEl.querySelector(e)) ? i : (e && ("string" == typeof e && (i = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && i && i.length > 1 && 1 === t.el.querySelectorAll(e).length ? i = t.el.querySelector(e) : i && 1 === i.length && (i = i[0])), e && !i) ? e : i
                }

                function n(e, i) {
                    let s = t.params.navigation;
                    (e = (0, r.m)(e)).forEach(e => {
                        e && (e.classList[i ? "add" : "remove"](...s.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = i), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass))
                    })
                }

                function o() {
                    let {
                        nextEl: e,
                        prevEl: i
                    } = t.navigation;
                    if (t.params.loop) {
                        n(i, !1), n(e, !1);
                        return
                    }
                    n(i, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind)
                }

                function d(e) {
                    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), a("navigationPrev"))
                }

                function p(e) {
                    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), a("navigationNext"))
                }

                function c() {
                    var e, i, s;
                    let a = t.params.navigation;
                    if (t.params.navigation = (e = t.originalParams.navigation, i = t.params.navigation, s = {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }, t.params.createElements && Object.keys(s).forEach(a => {
                            if (!i[a] && !0 === i.auto) {
                                let l = (0, r.e)(t.el, `.${s[a]}`)[0];
                                l || ((l = (0, r.c)("div", s[a])).className = s[a], t.el.append(l)), i[a] = l, e[a] = l
                            }
                        }), i), !(a.nextEl || a.prevEl)) return;
                    let n = l(a.nextEl),
                        o = l(a.prevEl);
                    Object.assign(t.navigation, {
                        nextEl: n,
                        prevEl: o
                    }), n = (0, r.m)(n), o = (0, r.m)(o);
                    let c = (e, i) => {
                        e && e.addEventListener("click", "next" === i ? p : d), !t.enabled && e && e.classList.add(...a.lockClass.split(" "))
                    };
                    n.forEach(e => c(e, "next")), o.forEach(e => c(e, "prev"))
                }

                function u() {
                    let {
                        nextEl: e,
                        prevEl: i
                    } = t.navigation;
                    e = (0, r.m)(e), i = (0, r.m)(i);
                    let s = (e, i) => {
                        e.removeEventListener("click", "next" === i ? p : d), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
                    };
                    e.forEach(e => s(e, "next")), i.forEach(e => s(e, "prev"))
                }
                i({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), t.navigation = {
                    nextEl: null,
                    prevEl: null
                }, s("init", () => {
                    !1 === t.params.navigation.enabled ? h() : (c(), o())
                }), s("toEdge fromEdge lock unlock", () => {
                    o()
                }), s("destroy", () => {
                    u()
                }), s("enable disable", () => {
                    let {
                        nextEl: e,
                        prevEl: i
                    } = t.navigation;
                    if (e = (0, r.m)(e), i = (0, r.m)(i), t.enabled) {
                        o();
                        return
                    }[...e, ...i].filter(e => !!e).forEach(e => e.classList.add(t.params.navigation.lockClass))
                }), s("click", (e, i) => {
                    let {
                        nextEl: s,
                        prevEl: l
                    } = t.navigation;
                    s = (0, r.m)(s), l = (0, r.m)(l);
                    let n = i.target,
                        o = l.includes(n) || s.includes(n);
                    if (t.isElement && !o) {
                        let e = i.path || i.composedPath && i.composedPath();
                        e && (o = e.find(e => s.includes(e) || l.includes(e)))
                    }
                    if (t.params.navigation.hideOnClick && !o) {
                        let e;
                        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
                        s.length ? e = s[0].classList.contains(t.params.navigation.hiddenClass) : l.length && (e = l[0].classList.contains(t.params.navigation.hiddenClass)), !0 === e ? a("navigationShow") : a("navigationHide"), [...s, ...l].filter(e => !!e).forEach(e => e.classList.toggle(t.params.navigation.hiddenClass))
                    }
                });
                let h = () => {
                    t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), u()
                };
                Object.assign(t.navigation, {
                    enable: () => {
                        t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), c(), o()
                    },
                    disable: h,
                    update: o,
                    init: c,
                    destroy: u
                })
            }

            function l(e) {
                let t, i, r, a, l, n, o, d, p, c, {
                    swiper: u,
                    extendParams: h,
                    on: f,
                    emit: m,
                    params: v
                } = e;
                u.autoplay = {
                    running: !1,
                    paused: !1,
                    timeLeft: 0
                }, h({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !1,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                });
                let g = v && v.autoplay ? v.autoplay.delay : 3e3,
                    w = v && v.autoplay ? v.autoplay.delay : 3e3,
                    b = new Date().getTime();

                function y(e) {
                    u && !u.destroyed && u.wrapperEl && e.target === u.wrapperEl && (u.wrapperEl.removeEventListener("transitionend", y), !c && (!e.detail || !e.detail.bySwiperTouchMove) && P())
                }
                let S = () => {
                        if (u.destroyed || !u.autoplay.running) return;
                        u.autoplay.paused ? a = !0 : a && (w = r, a = !1);
                        let e = u.autoplay.paused ? r : b + w - new Date().getTime();
                        u.autoplay.timeLeft = e, m("autoplayTimeLeft", e, e / g), i = requestAnimationFrame(() => {
                            S()
                        })
                    },
                    T = () => {
                        let e;
                        if (e = u.virtual && u.params.virtual.enabled ? u.slides.find(e => e.classList.contains("swiper-slide-active")) : u.slides[u.activeIndex]) return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
                    },
                    E = e => {
                        if (u.destroyed || !u.autoplay.running) return;
                        cancelAnimationFrame(i), S();
                        let s = void 0 === e ? u.params.autoplay.delay : e;
                        g = u.params.autoplay.delay, w = u.params.autoplay.delay;
                        let a = T();
                        !Number.isNaN(a) && a > 0 && void 0 === e && (s = a, g = a, w = a), r = s;
                        let l = u.params.speed,
                            n = () => {
                                u && !u.destroyed && (u.params.autoplay.reverseDirection ? !u.isBeginning || u.params.loop || u.params.rewind ? (u.slidePrev(l, !0, !0), m("autoplay")) : u.params.autoplay.stopOnLastSlide || (u.slideTo(u.slides.length - 1, l, !0, !0), m("autoplay")) : !u.isEnd || u.params.loop || u.params.rewind ? (u.slideNext(l, !0, !0), m("autoplay")) : u.params.autoplay.stopOnLastSlide || (u.slideTo(0, l, !0, !0), m("autoplay")), u.params.cssMode && (b = new Date().getTime(), requestAnimationFrame(() => {
                                    E()
                                })))
                            };
                        return s > 0 ? (clearTimeout(t), t = setTimeout(() => {
                            n()
                        }, s)) : requestAnimationFrame(() => {
                            n()
                        }), s
                    },
                    x = () => {
                        b = new Date().getTime(), u.autoplay.running = !0, E(), m("autoplayStart")
                    },
                    M = () => {
                        u.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(i), m("autoplayStop")
                    },
                    C = (e, i) => {
                        if (u.destroyed || !u.autoplay.running) return;
                        clearTimeout(t), e || (p = !0);
                        let s = () => {
                            m("autoplayPause"), u.params.autoplay.waitForTransition ? u.wrapperEl.addEventListener("transitionend", y) : P()
                        };
                        if (u.autoplay.paused = !0, i) {
                            d && (r = u.params.autoplay.delay), d = !1, s();
                            return
                        }
                        r = (r || u.params.autoplay.delay) - (new Date().getTime() - b), u.isEnd && r < 0 && !u.params.loop || (r < 0 && (r = 0), s())
                    },
                    P = () => {
                        u.isEnd && r < 0 && !u.params.loop || u.destroyed || !u.autoplay.running || (b = new Date().getTime(), p ? (p = !1, E(r)) : E(), u.autoplay.paused = !1, m("autoplayResume"))
                    },
                    k = () => {
                        if (u.destroyed || !u.autoplay.running) return;
                        let e = (0, s.g)();
                        "hidden" === e.visibilityState && (p = !0, C(!0)), "visible" === e.visibilityState && P()
                    },
                    L = e => {
                        "mouse" === e.pointerType && (p = !0, c = !0, u.animating || u.autoplay.paused || C(!0))
                    },
                    O = e => {
                        "mouse" === e.pointerType && (c = !1, u.autoplay.paused && P())
                    },
                    _ = () => {
                        u.params.autoplay.pauseOnMouseEnter && (u.el.addEventListener("pointerenter", L), u.el.addEventListener("pointerleave", O))
                    },
                    I = () => {
                        u.el && "string" != typeof u.el && (u.el.removeEventListener("pointerenter", L), u.el.removeEventListener("pointerleave", O))
                    },
                    A = () => {
                        (0, s.g)().addEventListener("visibilitychange", k)
                    },
                    z = () => {
                        (0, s.g)().removeEventListener("visibilitychange", k)
                    };
                f("init", () => {
                    u.params.autoplay.enabled && (_(), A(), x())
                }), f("destroy", () => {
                    I(), z(), u.autoplay.running && M()
                }), f("_freeModeStaticRelease", () => {
                    (n || p) && P()
                }), f("_freeModeNoMomentumRelease", () => {
                    u.params.autoplay.disableOnInteraction ? M() : C(!0, !0)
                }), f("beforeTransitionStart", (e, t, i) => {
                    !u.destroyed && u.autoplay.running && (i || !u.params.autoplay.disableOnInteraction ? C(!0, !0) : M())
                }), f("sliderFirstMove", () => {
                    if (!u.destroyed && u.autoplay.running) {
                        if (u.params.autoplay.disableOnInteraction) {
                            M();
                            return
                        }
                        l = !0, n = !1, p = !1, o = setTimeout(() => {
                            p = !0, n = !0, C(!0)
                        }, 200)
                    }
                }), f("touchEnd", () => {
                    if (!u.destroyed && u.autoplay.running && l) {
                        if (clearTimeout(o), clearTimeout(t), u.params.autoplay.disableOnInteraction) {
                            n = !1, l = !1;
                            return
                        }
                        n && u.params.cssMode && P(), n = !1, l = !1
                    }
                }), f("slideChange", () => {
                    !u.destroyed && u.autoplay.running && (d = !0)
                }), Object.assign(u.autoplay, {
                    start: x,
                    stop: M,
                    pause: C,
                    resume: P
                })
            }

            function n(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: s
                } = e;
                i({
                        fadeEffect: {
                            crossFade: !1
                        }
                    }),
                    function(e) {
                        let t;
                        let {
                            effect: i,
                            swiper: s,
                            on: r,
                            setTranslate: a,
                            setTransition: l,
                            overwriteParams: n,
                            perspective: o,
                            recreateShadows: d,
                            getEffectParams: p
                        } = e;
                        r("beforeInit", () => {
                            if (s.params.effect !== i) return;
                            s.classNames.push(`${s.params.containerModifierClass}${i}`), o && o() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                            let e = n ? n() : {};
                            Object.assign(s.params, e), Object.assign(s.originalParams, e)
                        }), r("setTranslate", () => {
                            s.params.effect === i && a()
                        }), r("setTransition", (e, t) => {
                            s.params.effect === i && l(t)
                        }), r("transitionEnd", () => {
                            s.params.effect === i && d && p && p().slideShadows && (s.slides.forEach(e => {
                                e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e => e.remove())
                            }), d())
                        }), r("virtualUpdate", () => {
                            s.params.effect === i && (s.slides.length || (t = !0), requestAnimationFrame(() => {
                                t && s.slides && s.slides.length && (a(), t = !1)
                            }))
                        })
                    }({
                        effect: "fade",
                        swiper: t,
                        on: s,
                        setTranslate: () => {
                            let {
                                slides: e
                            } = t;
                            t.params.fadeEffect;
                            for (let i = 0; i < e.length; i += 1) {
                                let e = t.slides[i],
                                    s = -e.swiperSlideOffset;
                                t.params.virtualTranslate || (s -= t.translate);
                                let a = 0;
                                t.isHorizontal() || (a = s, s = 0);
                                let l = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
                                    n = function(e, t) {
                                        let i = (0, r.g)(t);
                                        return i !== t && (i.style.backfaceVisibility = "hidden", i.style["-webkit-backface-visibility"] = "hidden"), i
                                    }(0, e);
                                n.style.opacity = l, n.style.transform = `translate3d(${s}px, ${a}px, 0px)`
                            }
                        },
                        setTransition: e => {
                            let i = t.slides.map(e => (0, r.g)(e));
                            i.forEach(t => {
                                    t.style.transitionDuration = `${e}ms`
                                }),
                                function(e) {
                                    let {
                                        swiper: t,
                                        duration: i,
                                        transformElements: s,
                                        allSlides: a
                                    } = e, {
                                        activeIndex: l
                                    } = t, n = e => e.parentElement ? e.parentElement : t.slides.find(t => t.shadowRoot && t.shadowRoot === e.parentNode);
                                    if (t.params.virtualTranslate && 0 !== i) {
                                        let e = !1;
                                        (a ? s : s.filter(e => {
                                            let i = e.classList.contains("swiper-slide-transform") ? n(e) : e;
                                            return t.getSlideIndex(i) === l
                                        })).forEach(i => {
                                            (0, r.k)(i, () => {
                                                if (e || !t || t.destroyed) return;
                                                e = !0, t.animating = !1;
                                                let i = new window.CustomEvent("transitionend", {
                                                    bubbles: !0,
                                                    cancelable: !0
                                                });
                                                t.wrapperEl.dispatchEvent(i)
                                            })
                                        })
                                    }
                                }({
                                    swiper: t,
                                    duration: e,
                                    transformElements: i,
                                    allSlides: !0
                                })
                        },
                        overwriteParams: () => ({
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !t.params.cssMode
                        })
                    })
            }
        },
        2375: (e, t, i) => {
            "use strict";

            function s(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function r(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {});
                let i = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : s(t[i]) && s(e[i]) && Object.keys(t[i]).length > 0 && r(e[i], t[i])
                })
            }
            i.d(t, {
                a: () => o,
                g: () => l
            });
            let a = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function l() {
                let e = "undefined" != typeof document ? document : {};
                return r(e, a), e
            }
            let n = {
                document: a,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function o() {
                let e = "undefined" != typeof window ? window : {};
                return r(e, n), e
            }
        },
        7044: (e, t, i) => {
            "use strict";
            i.d(t, {
                a: () => y,
                c: () => m,
                d: () => l,
                e: () => u,
                f: () => T,
                g: () => c,
                h: () => b,
                j: () => n,
                k: () => S,
                m: () => E,
                n: () => a,
                p: () => w,
                q: () => g,
                r: () => v,
                s: () => d,
                t: () => p,
                u: () => f,
                v: () => h,
                w: () => function e() {
                    let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                        i = ["__proto__", "constructor", "prototype"];
                    for (let s = 1; s < arguments.length; s += 1) {
                        let r = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                        if (null != r && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(r instanceof HTMLElement) : !r || 1 !== r.nodeType && 11 !== r.nodeType)) {
                            let s = Object.keys(Object(r)).filter(e => 0 > i.indexOf(e));
                            for (let i = 0, a = s.length; i < a; i += 1) {
                                let a = s[i],
                                    l = Object.getOwnPropertyDescriptor(r, a);
                                void 0 !== l && l.enumerable && (o(t[a]) && o(r[a]) ? r[a].__swiper__ ? t[a] = r[a] : e(t[a], r[a]) : !o(t[a]) && o(r[a]) ? (t[a] = {}, r[a].__swiper__ ? t[a] = r[a] : e(t[a], r[a])) : t[a] = r[a])
                            }
                        }
                    }
                    return t
                },
                x: () => r
            });
            var s = i(2375);

            function r(e) {
                Object.keys(e).forEach(t => {
                    try {
                        e[t] = null
                    } catch (e) {}
                    try {
                        delete e[t]
                    } catch (e) {}
                })
            }

            function a(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function l() {
                return Date.now()
            }

            function n(e, t) {
                let i, r, a;
                void 0 === t && (t = "x");
                let l = (0, s.a)(),
                    n = function(e) {
                        let t;
                        let i = (0, s.a)();
                        return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                    }(e);
                return l.WebKitCSSMatrix ? ((r = n.transform || n.webkitTransform).split(",").length > 6 && (r = r.split(", ").map(e => e.replace(",", ".")).join(", ")), a = new l.WebKitCSSMatrix("none" === r ? "" : r)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (r = l.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = l.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
            }

            function o(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function d(e, t, i) {
                e.style.setProperty(t, i)
            }

            function p(e) {
                let t, {
                        swiper: i,
                        targetPosition: r,
                        side: a
                    } = e,
                    l = (0, s.a)(),
                    n = -i.translate,
                    o = null,
                    d = i.params.speed;
                i.wrapperEl.style.scrollSnapType = "none", l.cancelAnimationFrame(i.cssModeFrameID);
                let p = r > n ? "next" : "prev",
                    c = (e, t) => "next" === p && e >= t || "prev" === p && e <= t,
                    u = () => {
                        t = new Date().getTime(), null === o && (o = t);
                        let e = n + (.5 - Math.cos(Math.max(Math.min((t - o) / d, 1), 0) * Math.PI) / 2) * (r - n);
                        if (c(e, r) && (e = r), i.wrapperEl.scrollTo({
                                [a]: e
                            }), c(e, r)) {
                            i.wrapperEl.style.overflow = "hidden", i.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                i.wrapperEl.style.overflow = "", i.wrapperEl.scrollTo({
                                    [a]: e
                                })
                            }), l.cancelAnimationFrame(i.cssModeFrameID);
                            return
                        }
                        i.cssModeFrameID = l.requestAnimationFrame(u)
                    };
                u()
            }

            function c(e) {
                return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
            }

            function u(e, t) {
                void 0 === t && (t = "");
                let i = (0, s.a)(),
                    r = [...e.children];
                return (i.HTMLSlotElement && e instanceof HTMLSlotElement && r.push(...e.assignedElements()), t) ? r.filter(e => e.matches(t)) : r
            }

            function h(e, t) {
                let i = (0, s.a)(),
                    r = t.contains(e);
                return !r && i.HTMLSlotElement && t instanceof HTMLSlotElement && !(r = [...t.assignedElements()].includes(e)) && (r = function(e, t) {
                    let i = [t];
                    for (; i.length > 0;) {
                        let t = i.shift();
                        if (e === t) return !0;
                        i.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
                    }
                }(e, t)), r
            }

            function f(e) {
                try {
                    console.warn(e);
                    return
                } catch (e) {}
            }

            function m(e, t) {
                var i;
                void 0 === t && (t = []);
                let s = document.createElement(e);
                return s.classList.add(...Array.isArray(t) ? t : (void 0 === (i = t) && (i = ""), i.trim().split(" ").filter(e => !!e.trim()))), s
            }

            function v(e, t) {
                let i = [];
                for (; e.previousElementSibling;) {
                    let s = e.previousElementSibling;
                    t ? s.matches(t) && i.push(s) : i.push(s), e = s
                }
                return i
            }

            function g(e, t) {
                let i = [];
                for (; e.nextElementSibling;) {
                    let s = e.nextElementSibling;
                    t ? s.matches(t) && i.push(s) : i.push(s), e = s
                }
                return i
            }

            function w(e, t) {
                return (0, s.a)().getComputedStyle(e, null).getPropertyValue(t)
            }

            function b(e) {
                let t, i = e;
                if (i) {
                    for (t = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (t += 1);
                    return t
                }
            }

            function y(e, t) {
                let i = [],
                    s = e.parentElement;
                for (; s;) t ? s.matches(t) && i.push(s) : i.push(s), s = s.parentElement;
                return i
            }

            function S(e, t) {
                t && e.addEventListener("transitionend", function i(s) {
                    s.target === e && (t.call(e, s), e.removeEventListener("transitionend", i))
                })
            }

            function T(e, t, i) {
                let r = (0, s.a)();
                return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }

            function E(e) {
                return (Array.isArray(e) ? e : [e]).filter(e => !!e)
            }
        },
        6874: (e, t, i) => {
            "use strict";
            let s, r, a;
            i.d(t, {
                RC: () => W,
                qr: () => Y
            });
            var l = i(6540),
                n = i(2375),
                o = i(7044);

            function d() {
                return s || (s = function() {
                    let e = (0, n.a)(),
                        t = (0, n.g)();
                    return {
                        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), s
            }

            function p(e) {
                return void 0 === e && (e = {}), r || (r = function(e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e, i = d(), s = (0, n.a)(), r = s.navigator.platform, a = t || s.navigator.userAgent, l = {
                        ios: !1,
                        android: !1
                    }, o = s.screen.width, p = s.screen.height, c = a.match(/(Android);?[\s\/]+([\d.]+)?/), u = a.match(/(iPad).*OS\s([\d_]+)/), h = a.match(/(iPod)(.*OS\s([\d_]+))?/), f = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m = "MacIntel" === r;
                    return !u && m && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${p}`) >= 0 && ((u = a.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]), m = !1), c && "Win32" !== r && (l.os = "android", l.android = !0), (u || f || h) && (l.os = "ios", l.ios = !0), l
                }(e)), r
            }

            function c() {
                return a || (a = function() {
                    let e = (0, n.a)(),
                        t = p(),
                        i = !1;

                    function s() {
                        let t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                    }
                    if (s()) {
                        let t = String(e.navigator.userAgent);
                        if (t.includes("Version/")) {
                            let [e, s] = t.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                            i = e < 16 || 16 === e && s < 2
                        }
                    }
                    let r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                        a = s(),
                        l = a || r && t.ios;
                    return {
                        isSafari: i || a,
                        needPerspectiveFix: i,
                        need3dFix: l,
                        isWebView: r
                    }
                }()), a
            }
            let u = (e, t, i) => {
                    t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
                },
                h = (e, t, i) => {
                    t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
                },
                f = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    let i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                    if (i) {
                        let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
                        !t && e.isElement && (i.shadowRoot ? t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                            i.shadowRoot && (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)) && t.remove()
                        })), t && t.remove()
                    }
                },
                m = (e, t) => {
                    if (!e.slides[t]) return;
                    let i = e.slides[t].querySelector('[loading="lazy"]');
                    i && i.removeAttribute("loading")
                },
                v = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext,
                        i = e.slides.length;
                    if (!i || !t || t < 0) return;
                    t = Math.min(t, i);
                    let s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        r = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        let i = [r - t];
                        i.push(...Array.from({
                            length: t
                        }).map((e, t) => r + s + t)), e.slides.forEach((t, s) => {
                            i.includes(t.column) && m(e, s)
                        });
                        return
                    }
                    let a = r + s - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let s = r - t; s <= a + t; s += 1) {
                            let t = (s % i + i) % i;
                            (t < r || t > a) && m(e, t)
                        } else
                            for (let s = Math.max(r - t, 0); s <= Math.min(a + t, i - 1); s += 1) s !== r && (s > a || s < r) && m(e, s)
                };

            function g(e) {
                let {
                    swiper: t,
                    runCallbacks: i,
                    direction: s,
                    step: r
                } = e, {
                    activeIndex: a,
                    previousIndex: l
                } = t, n = s;
                if (n || (n = a > l ? "next" : a < l ? "prev" : "reset"), t.emit(`transition${r}`), i && a !== l) {
                    if ("reset" === n) {
                        t.emit(`slideResetTransition${r}`);
                        return
                    }
                    t.emit(`slideChangeTransition${r}`), "next" === n ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`)
                }
            }

            function w(e, t, i) {
                let s = (0, n.a)(),
                    {
                        params: r
                    } = e,
                    a = r.edgeSwipeDetection,
                    l = r.edgeSwipeThreshold;
                return !a || !(i <= l) && !(i >= s.innerWidth - l) || "prevent" === a && (t.preventDefault(), !0)
            }

            function b(e) {
                let t = (0, n.g)(),
                    i = e;
                i.originalEvent && (i = i.originalEvent);
                let s = this.touchEventsData;
                if ("pointerdown" === i.type) {
                    if (null !== s.pointerId && s.pointerId !== i.pointerId) return;
                    s.pointerId = i.pointerId
                } else "touchstart" === i.type && 1 === i.targetTouches.length && (s.touchId = i.targetTouches[0].identifier);
                if ("touchstart" === i.type) {
                    w(this, i, i.targetTouches[0].pageX);
                    return
                }
                let {
                    params: r,
                    touches: a,
                    enabled: l
                } = this;
                if (!l || !r.simulateTouch && "mouse" === i.pointerType || this.animating && r.preventInteractionOnTransition) return;
                !this.animating && r.cssMode && r.loop && this.loopFix();
                let d = i.target;
                if ("wrapper" === r.touchEventsTarget && !(0, o.v)(d, this.wrapperEl) || "which" in i && 3 === i.which || "button" in i && i.button > 0 || s.isTouched && s.isMoved) return;
                let p = !!r.noSwipingClass && "" !== r.noSwipingClass,
                    c = i.composedPath ? i.composedPath() : i.path;
                p && i.target && i.target.shadowRoot && c && (d = c[0]);
                let u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
                    h = !!(i.target && i.target.shadowRoot);
                if (r.noSwiping && (h ? function(e, t) {
                        return void 0 === t && (t = this),
                            function t(i) {
                                if (!i || i === (0, n.g)() || i === (0, n.a)()) return null;
                                i.assignedSlot && (i = i.assignedSlot);
                                let s = i.closest(e);
                                return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                            }(t)
                    }(u, d) : d.closest(u))) {
                    this.allowClick = !0;
                    return
                }
                if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
                a.currentX = i.pageX, a.currentY = i.pageY;
                let f = a.currentX,
                    m = a.currentY;
                if (!w(this, i, f)) return;
                Object.assign(s, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), a.startX = f, a.startY = m, s.touchStartTime = (0, o.d)(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1);
                let v = !0;
                d.matches(s.focusableElements) && (v = !1, "SELECT" === d.nodeName && (s.isTouched = !1)), t.activeElement && t.activeElement.matches(s.focusableElements) && t.activeElement !== d && ("mouse" === i.pointerType || "mouse" !== i.pointerType && !d.matches(s.focusableElements)) && t.activeElement.blur();
                let g = v && this.allowTouchMove && r.touchStartPreventDefault;
                (r.touchStartForcePreventDefault || g) && !d.isContentEditable && i.preventDefault(), r.freeMode && r.freeMode.enabled && this.freeMode && this.animating && !r.cssMode && this.freeMode.onTouchStart(), this.emit("touchStart", i)
            }

            function y(e) {
                let t, i;
                let s = (0, n.g)(),
                    r = this.touchEventsData,
                    {
                        params: a,
                        touches: l,
                        rtlTranslate: d,
                        enabled: p
                    } = this;
                if (!p || !a.simulateTouch && "mouse" === e.pointerType) return;
                let c = e;
                if (c.originalEvent && (c = c.originalEvent), "pointermove" === c.type && (null !== r.touchId || c.pointerId !== r.pointerId)) return;
                if ("touchmove" === c.type) {
                    if (!(t = [...c.changedTouches].find(e => e.identifier === r.touchId)) || t.identifier !== r.touchId) return
                } else t = c;
                if (!r.isTouched) {
                    r.startMoving && r.isScrolling && this.emit("touchMoveOpposite", c);
                    return
                }
                let u = t.pageX,
                    h = t.pageY;
                if (c.preventedByNestedSwiper) {
                    l.startX = u, l.startY = h;
                    return
                }
                if (!this.allowTouchMove) {
                    c.target.matches(r.focusableElements) || (this.allowClick = !1), r.isTouched && (Object.assign(l, {
                        startX: u,
                        startY: h,
                        currentX: u,
                        currentY: h
                    }), r.touchStartTime = (0, o.d)());
                    return
                }
                if (a.touchReleaseOnEdges && !a.loop) {
                    if (this.isVertical()) {
                        if (h < l.startY && this.translate <= this.maxTranslate() || h > l.startY && this.translate >= this.minTranslate()) {
                            r.isTouched = !1, r.isMoved = !1;
                            return
                        }
                    } else if (u < l.startX && this.translate <= this.maxTranslate() || u > l.startX && this.translate >= this.minTranslate()) return
                }
                if (s.activeElement && s.activeElement.matches(r.focusableElements) && s.activeElement !== c.target && "mouse" !== c.pointerType && s.activeElement.blur(), s.activeElement && c.target === s.activeElement && c.target.matches(r.focusableElements)) {
                    r.isMoved = !0, this.allowClick = !1;
                    return
                }
                r.allowTouchCallbacks && this.emit("touchMove", c), l.previousX = l.currentX, l.previousY = l.currentY, l.currentX = u, l.currentY = h;
                let f = l.currentX - l.startX,
                    m = l.currentY - l.startY;
                if (this.params.threshold && Math.sqrt(f ** 2 + m ** 2) < this.params.threshold) return;
                if (void 0 === r.isScrolling) {
                    let e;
                    this.isHorizontal() && l.currentY === l.startY || this.isVertical() && l.currentX === l.startX ? r.isScrolling = !1 : f * f + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(f)) / Math.PI, r.isScrolling = this.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
                }
                if (r.isScrolling && this.emit("touchMoveOpposite", c), void 0 === r.startMoving && (l.currentX !== l.startX || l.currentY !== l.startY) && (r.startMoving = !0), r.isScrolling || "touchmove" === c.type && r.preventTouchMoveFromPointerMove) {
                    r.isTouched = !1;
                    return
                }
                if (!r.startMoving) return;
                this.allowClick = !1, !a.cssMode && c.cancelable && c.preventDefault(), a.touchMoveStopPropagation && !a.nested && c.stopPropagation();
                let v = this.isHorizontal() ? f : m,
                    g = this.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
                a.oneWayMovement && (v = Math.abs(v) * (d ? 1 : -1), g = Math.abs(g) * (d ? 1 : -1)), l.diff = v, v *= a.touchRatio, d && (v = -v, g = -g);
                let w = this.touchesDirection;
                this.swipeDirection = v > 0 ? "prev" : "next", this.touchesDirection = g > 0 ? "prev" : "next";
                let b = this.params.loop && !a.cssMode,
                    y = "next" === this.touchesDirection && this.allowSlideNext || "prev" === this.touchesDirection && this.allowSlidePrev;
                if (!r.isMoved) {
                    if (b && y && this.loopFix({
                            direction: this.swipeDirection
                        }), r.startTranslate = this.getTranslate(), this.setTransition(0), this.animating) {
                        let e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: {
                                bySwiperTouchMove: !0
                            }
                        });
                        this.wrapperEl.dispatchEvent(e)
                    }
                    r.allowMomentumBounce = !1, a.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0), this.emit("sliderFirstMove", c)
                }
                if (new Date().getTime(), !1 !== a._loopSwapReset && r.isMoved && r.allowThresholdMove && w !== this.touchesDirection && b && y && Math.abs(v) >= 1) {
                    Object.assign(l, {
                        startX: u,
                        startY: h,
                        currentX: u,
                        currentY: h,
                        startTranslate: r.currentTranslate
                    }), r.loopSwapReset = !0, r.startTranslate = r.currentTranslate;
                    return
                }
                this.emit("sliderMove", c), r.isMoved = !0, r.currentTranslate = v + r.startTranslate;
                let S = !0,
                    T = a.resistanceRatio;
                if (a.touchReleaseOnEdges && (T = 0), v > 0 ? (b && y && !i && r.allowThresholdMove && r.currentTranslate > (a.centeredSlides ? this.minTranslate() - this.slidesSizesGrid[this.activeIndex + 1] - ("auto" !== a.slidesPerView && this.slides.length - a.slidesPerView >= 2 ? this.slidesSizesGrid[this.activeIndex + 1] + this.params.spaceBetween : 0) - this.params.spaceBetween : this.minTranslate()) && this.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), r.currentTranslate > this.minTranslate() && (S = !1, a.resistance && (r.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + r.startTranslate + v) ** T))) : v < 0 && (b && y && !i && r.allowThresholdMove && r.currentTranslate < (a.centeredSlides ? this.maxTranslate() + this.slidesSizesGrid[this.slidesSizesGrid.length - 1] + this.params.spaceBetween + ("auto" !== a.slidesPerView && this.slides.length - a.slidesPerView >= 2 ? this.slidesSizesGrid[this.slidesSizesGrid.length - 1] + this.params.spaceBetween : 0) : this.maxTranslate()) && this.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: this.slides.length - ("auto" === a.slidesPerView ? this.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
                    }), r.currentTranslate < this.maxTranslate() && (S = !1, a.resistance && (r.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - r.startTranslate - v) ** T))), S && (c.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), this.allowSlidePrev || this.allowSlideNext || (r.currentTranslate = r.startTranslate), a.threshold > 0) {
                    if (Math.abs(v) > a.threshold || r.allowThresholdMove) {
                        if (!r.allowThresholdMove) {
                            r.allowThresholdMove = !0, l.startX = l.currentX, l.startY = l.currentY, r.currentTranslate = r.startTranslate, l.diff = this.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY;
                            return
                        }
                    } else {
                        r.currentTranslate = r.startTranslate;
                        return
                    }
                }
                a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && this.freeMode || a.watchSlidesProgress) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(), this.updateProgress(r.currentTranslate), this.setTranslate(r.currentTranslate))
            }

            function S(e) {
                let t, i;
                let s = this,
                    r = s.touchEventsData,
                    a = e;
                if (a.originalEvent && (a = a.originalEvent), "touchend" === a.type || "touchcancel" === a.type) {
                    if (!(t = [...a.changedTouches].find(e => e.identifier === r.touchId)) || t.identifier !== r.touchId) return
                } else {
                    if (null !== r.touchId || a.pointerId !== r.pointerId) return;
                    t = a
                }
                if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type) && !(["pointercancel", "contextmenu"].includes(a.type) && (s.browser.isSafari || s.browser.isWebView))) return;
                r.pointerId = null, r.touchId = null;
                let {
                    params: l,
                    touches: n,
                    rtlTranslate: d,
                    slidesGrid: p,
                    enabled: c
                } = s;
                if (!c || !l.simulateTouch && "mouse" === a.pointerType) return;
                if (r.allowTouchCallbacks && s.emit("touchEnd", a), r.allowTouchCallbacks = !1, !r.isTouched) {
                    r.isMoved && l.grabCursor && s.setGrabCursor(!1), r.isMoved = !1, r.startMoving = !1;
                    return
                }
                l.grabCursor && r.isMoved && r.isTouched && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!1);
                let u = (0, o.d)(),
                    h = u - r.touchStartTime;
                if (s.allowClick) {
                    let e = a.path || a.composedPath && a.composedPath();
                    s.updateClickedSlide(e && e[0] || a.target, e), s.emit("tap click", a), h < 300 && u - r.lastClickTime < 300 && s.emit("doubleTap doubleClick", a)
                }
                if (r.lastClickTime = (0, o.d)(), (0, o.n)(() => {
                        s.destroyed || (s.allowClick = !0)
                    }), !r.isTouched || !r.isMoved || !s.swipeDirection || 0 === n.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) {
                    r.isTouched = !1, r.isMoved = !1, r.startMoving = !1;
                    return
                }
                if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, i = l.followFinger ? d ? s.translate : -s.translate : -r.currentTranslate, l.cssMode) return;
                if (l.freeMode && l.freeMode.enabled) {
                    s.freeMode.onTouchEnd({
                        currentPos: i
                    });
                    return
                }
                let f = i >= -s.maxTranslate() && !s.params.loop,
                    m = 0,
                    v = s.slidesSizesGrid[0];
                for (let e = 0; e < p.length; e += e < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
                    let t = e < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
                    void 0 !== p[e + t] ? (f || i >= p[e] && i < p[e + t]) && (m = e, v = p[e + t] - p[e]) : (f || i >= p[e]) && (m = e, v = p[p.length - 1] - p[p.length - 2])
                }
                let g = null,
                    w = null;
                l.rewind && (s.isBeginning ? w = l.virtual && l.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1 : s.isEnd && (g = 0));
                let b = (i - p[m]) / v,
                    y = m < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
                if (h > l.longSwipesMs) {
                    if (!l.longSwipes) {
                        s.slideTo(s.activeIndex);
                        return
                    }
                    "next" === s.swipeDirection && (b >= l.longSwipesRatio ? s.slideTo(l.rewind && s.isEnd ? g : m + y) : s.slideTo(m)), "prev" === s.swipeDirection && (b > 1 - l.longSwipesRatio ? s.slideTo(m + y) : null !== w && b < 0 && Math.abs(b) > l.longSwipesRatio ? s.slideTo(w) : s.slideTo(m))
                } else {
                    if (!l.shortSwipes) {
                        s.slideTo(s.activeIndex);
                        return
                    }
                    s.navigation && (a.target === s.navigation.nextEl || a.target === s.navigation.prevEl) ? a.target === s.navigation.nextEl ? s.slideTo(m + y) : s.slideTo(m) : ("next" === s.swipeDirection && s.slideTo(null !== g ? g : m + y), "prev" === s.swipeDirection && s.slideTo(null !== w ? w : m))
                }
            }

            function T() {
                let e = this,
                    {
                        params: t,
                        el: i
                    } = e;
                if (i && 0 === i.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: s,
                    allowSlidePrev: r,
                    snapGrid: a
                } = e, l = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                let n = l && t.loop;
                "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || n ? e.params.loop && !l ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }, 500)), e.allowSlidePrev = r, e.allowSlideNext = s, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
            }

            function E(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function x() {
                let {
                    wrapperEl: e,
                    rtlTranslate: t,
                    enabled: i
                } = this;
                if (!i) return;
                this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop, 0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                let s = this.maxTranslate() - this.minTranslate();
                (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
            }

            function M(e) {
                f(this, e.target), !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update()
            }

            function C() {
                !this.documentTouchHandlerProceeded && (this.documentTouchHandlerProceeded = !0, this.params.touchReleaseOnEdges && (this.el.style.touchAction = "auto"))
            }
            let P = (e, t) => {
                    let i = (0, n.g)(),
                        {
                            params: s,
                            el: r,
                            wrapperEl: a,
                            device: l
                        } = e,
                        o = !!s.nested,
                        d = "on" === t ? "addEventListener" : "removeEventListener";
                    r && "string" != typeof r && (i[d]("touchstart", e.onDocumentTouchStart, {
                        passive: !1,
                        capture: o
                    }), r[d]("touchstart", e.onTouchStart, {
                        passive: !1
                    }), r[d]("pointerdown", e.onTouchStart, {
                        passive: !1
                    }), i[d]("touchmove", e.onTouchMove, {
                        passive: !1,
                        capture: o
                    }), i[d]("pointermove", e.onTouchMove, {
                        passive: !1,
                        capture: o
                    }), i[d]("touchend", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerup", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointercancel", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("touchcancel", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerout", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerleave", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("contextmenu", e.onTouchEnd, {
                        passive: !0
                    }), (s.preventClicks || s.preventClicksPropagation) && r[d]("click", e.onClick, !0), s.cssMode && a[d]("scroll", e.onScroll), s.updateOnWindowResize ? e[t](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", T, !0) : e[t]("observerUpdate", T, !0), r[d]("load", e.onLoad, {
                        capture: !0
                    }))
                },
                k = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var L = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                swiperElementNodeName: "SWIPER-CONTAINER",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                eventsPrefix: "swiper",
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopAddBlankSlides: !0,
                loopAdditionalSlides: 0,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-blank",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideFullyVisibleClass: "swiper-slide-fully-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let O = {
                    eventsEmitter: {
                        on(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
                            let r = i ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t)
                            }), s
                        },
                        once(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;

                            function r() {
                                s.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                                for (var i = arguments.length, a = Array(i), l = 0; l < i; l++) a[l] = arguments[l];
                                t.apply(s, a)
                            }
                            return r.__emitterProxy = t, s.on(e, r, i)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let i = this;
                            return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s, r) => {
                                    (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                                })
                            }), i
                        },
                        emit() {
                            let e, t, i;
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
                            for (var r = arguments.length, a = Array(r), l = 0; l < r; l++) a[l] = arguments[l];
                            return "string" == typeof a[0] || Array.isArray(a[0]) ? (e = a[0], t = a.slice(1, a.length), i = s) : (e = a[0].events, t = a[0].data, i = a[0].context || s), t.unshift(i), (Array.isArray(e) ? e : e.split(" ")).forEach(e => {
                                s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(s => {
                                    s.apply(i, [e, ...t])
                                }), s.eventsListeners && s.eventsListeners[e] && s.eventsListeners[e].forEach(e => {
                                    e.apply(i, t)
                                })
                            }), s
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t;
                            let i = this.el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i.clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i.clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt((0, o.p)(i, "padding-left") || 0, 10) - parseInt((0, o.p)(i, "padding-right") || 0, 10), t = t - parseInt((0, o.p)(i, "padding-top") || 0, 10) - parseInt((0, o.p)(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e;
                            let t = this;

                            function i(e, i) {
                                return parseFloat(e.getPropertyValue(t.getDirectionLabel(i)) || 0)
                            }
                            let s = t.params,
                                {
                                    wrapperEl: r,
                                    slidesEl: a,
                                    size: l,
                                    rtlTranslate: n,
                                    wrongRTL: d
                                } = t,
                                p = t.virtual && s.virtual.enabled,
                                c = p ? t.virtual.slides.length : t.slides.length,
                                u = (0, o.e)(a, `.${t.params.slideClass}, swiper-slide`),
                                h = p ? t.virtual.slides.length : u.length,
                                f = [],
                                m = [],
                                v = [],
                                g = s.slidesOffsetBefore;
                            "function" == typeof g && (g = s.slidesOffsetBefore.call(t));
                            let w = s.slidesOffsetAfter;
                            "function" == typeof w && (w = s.slidesOffsetAfter.call(t));
                            let b = t.snapGrid.length,
                                y = t.slidesGrid.length,
                                S = s.spaceBetween,
                                T = -g,
                                E = 0,
                                x = 0;
                            if (void 0 === l) return;
                            "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * l : "string" == typeof S && (S = parseFloat(S)), t.virtualSize = -S, u.forEach(e => {
                                n ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                            }), s.centeredSlides && s.cssMode && ((0, o.s)(r, "--swiper-centered-offset-before", ""), (0, o.s)(r, "--swiper-centered-offset-after", ""));
                            let M = s.grid && s.grid.rows > 1 && t.grid;
                            M ? t.grid.initSlides(u) : t.grid && t.grid.unsetSlides();
                            let C = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter(e => void 0 !== s.breakpoints[e].slidesPerView).length > 0;
                            for (let r = 0; r < h; r += 1) {
                                let a;
                                if (e = 0, u[r] && (a = u[r]), M && t.grid.updateSlide(r, a, u), !u[r] || "none" !== (0, o.p)(a, "display")) {
                                    if ("auto" === s.slidesPerView) {
                                        C && (u[r].style[t.getDirectionLabel("width")] = "");
                                        let l = getComputedStyle(a),
                                            n = a.style.transform,
                                            d = a.style.webkitTransform;
                                        if (n && (a.style.transform = "none"), d && (a.style.webkitTransform = "none"), s.roundLengths) e = t.isHorizontal() ? (0, o.f)(a, "width", !0) : (0, o.f)(a, "height", !0);
                                        else {
                                            let t = i(l, "width"),
                                                s = i(l, "padding-left"),
                                                r = i(l, "padding-right"),
                                                n = i(l, "margin-left"),
                                                o = i(l, "margin-right"),
                                                d = l.getPropertyValue("box-sizing");
                                            if (d && "border-box" === d) e = t + n + o;
                                            else {
                                                let {
                                                    clientWidth: i,
                                                    offsetWidth: l
                                                } = a;
                                                e = t + s + r + n + o + (l - i)
                                            }
                                        }
                                        n && (a.style.transform = n), d && (a.style.webkitTransform = d), s.roundLengths && (e = Math.floor(e))
                                    } else e = (l - (s.slidesPerView - 1) * S) / s.slidesPerView, s.roundLengths && (e = Math.floor(e)), u[r] && (u[r].style[t.getDirectionLabel("width")] = `${e}px`);
                                    u[r] && (u[r].swiperSlideSize = e), v.push(e), s.centeredSlides ? (T = T + e / 2 + E / 2 + S, 0 === E && 0 !== r && (T = T - l / 2 - S), 0 === r && (T = T - l / 2 - S), .001 > Math.abs(T) && (T = 0), s.roundLengths && (T = Math.floor(T)), x % s.slidesPerGroup == 0 && f.push(T), m.push(T)) : (s.roundLengths && (T = Math.floor(T)), (x - Math.min(t.params.slidesPerGroupSkip, x)) % t.params.slidesPerGroup == 0 && f.push(T), m.push(T), T = T + e + S), t.virtualSize += e + S, E = e, x += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, l) + w, n && d && ("slide" === s.effect || "coverflow" === s.effect) && (r.style.width = `${t.virtualSize+S}px`), s.setWrapperSize && (r.style[t.getDirectionLabel("width")] = `${t.virtualSize+S}px`), M && t.grid.updateWrapperSize(e, f), !s.centeredSlides) {
                                let e = [];
                                for (let i = 0; i < f.length; i += 1) {
                                    let r = f[i];
                                    s.roundLengths && (r = Math.floor(r)), f[i] <= t.virtualSize - l && e.push(r)
                                }
                                f = e, Math.floor(t.virtualSize - l) - Math.floor(f[f.length - 1]) > 1 && f.push(t.virtualSize - l)
                            }
                            if (p && s.loop) {
                                let e = v[0] + S;
                                if (s.slidesPerGroup > 1) {
                                    let i = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup),
                                        r = e * s.slidesPerGroup;
                                    for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + r)
                                }
                                for (let i = 0; i < t.virtual.slidesBefore + t.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && f.push(f[f.length - 1] + e), m.push(m[m.length - 1] + e), t.virtualSize += e
                            }
                            if (0 === f.length && (f = [0]), 0 !== S) {
                                let e = t.isHorizontal() && n ? "marginLeft" : t.getDirectionLabel("marginRight");
                                u.filter((e, t) => !s.cssMode || !!s.loop || t !== u.length - 1).forEach(t => {
                                    t.style[e] = `${S}px`
                                })
                            }
                            if (s.centeredSlides && s.centeredSlidesBounds) {
                                let e = 0;
                                v.forEach(t => {
                                    e += t + (S || 0)
                                });
                                let t = (e -= S) > l ? e - l : 0;
                                f = f.map(e => e <= 0 ? -g : e > t ? t + w : e)
                            }
                            if (s.centerInsufficientSlides) {
                                let e = 0;
                                v.forEach(t => {
                                    e += t + (S || 0)
                                }), e -= S;
                                let t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
                                if (e + t < l) {
                                    let i = (l - e - t) / 2;
                                    f.forEach((e, t) => {
                                        f[t] = e - i
                                    }), m.forEach((e, t) => {
                                        m[t] = e + i
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: u,
                                    snapGrid: f,
                                    slidesGrid: m,
                                    slidesSizesGrid: v
                                }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                                (0, o.s)(r, "--swiper-centered-offset-before", `${-f[0]}px`), (0, o.s)(r, "--swiper-centered-offset-after", `${t.size/2-v[v.length-1]/2}px`);
                                let e = -t.snapGrid[0],
                                    i = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + i)
                            }
                            if (h !== c && t.emit("slidesLengthChange"), f.length !== b && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), m.length !== y && t.emit("slidesGridLengthChange"), s.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !p && !s.cssMode && ("slide" === s.effect || "fade" === s.effect)) {
                                let e = `${s.containerModifierClass}backface-hidden`,
                                    i = t.el.classList.contains(e);
                                h <= s.maxBackfaceHiddenSlides ? i || t.el.classList.add(e) : i && t.el.classList.remove(e)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t;
                            let i = this,
                                s = [],
                                r = i.virtual && i.params.virtual.enabled,
                                a = 0;
                            "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                            let l = e => r ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
                            if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                                if (i.params.centeredSlides)(i.visibleSlides || []).forEach(e => {
                                    s.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                        let e = i.activeIndex + t;
                                        if (e > i.slides.length && !r) break;
                                        s.push(l(e))
                                    }
                            } else s.push(l(i.activeIndex));
                            for (t = 0; t < s.length; t += 1)
                                if (void 0 !== s[t]) {
                                    let e = s[t].offsetHeight;
                                    a = e > a ? e : a
                                }(a || 0 === a) && (i.wrapperEl.style.height = `${a}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides,
                                t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                            for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - this.cssOverflowAdjustment()
                        },
                        updateSlidesProgress: function(e) {
                            void 0 === e && (e = this && this.translate || 0);
                            let t = this.params,
                                {
                                    slides: i,
                                    rtlTranslate: s,
                                    snapGrid: r
                                } = this;
                            if (0 === i.length) return;
                            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                            let a = -e;
                            s && (a = e), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                            let l = t.spaceBetween;
                            "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * this.size : "string" == typeof l && (l = parseFloat(l));
                            for (let e = 0; e < i.length; e += 1) {
                                let n = i[e],
                                    o = n.swiperSlideOffset;
                                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                                let d = (a + (t.centeredSlides ? this.minTranslate() : 0) - o) / (n.swiperSlideSize + l),
                                    p = (a - r[0] + (t.centeredSlides ? this.minTranslate() : 0) - o) / (n.swiperSlideSize + l),
                                    c = -(a - o),
                                    h = c + this.slidesSizesGrid[e],
                                    f = c >= 0 && c <= this.size - this.slidesSizesGrid[e],
                                    m = c >= 0 && c < this.size - 1 || h > 1 && h <= this.size || c <= 0 && h >= this.size;
                                m && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(e)), u(n, m, t.slideVisibleClass), u(n, f, t.slideFullyVisibleClass), n.progress = s ? -d : d, n.originalProgress = s ? -p : p
                            }
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let t = this.params,
                                i = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: s,
                                    isBeginning: r,
                                    isEnd: a,
                                    progressLoop: l
                                } = this,
                                n = r,
                                o = a;
                            if (0 === i) s = 0, r = !0, a = !0;
                            else {
                                s = (e - this.minTranslate()) / i;
                                let t = 1 > Math.abs(e - this.minTranslate()),
                                    l = 1 > Math.abs(e - this.maxTranslate());
                                r = t || s <= 0, a = l || s >= 1, t && (s = 0), l && (s = 1)
                            }
                            if (t.loop) {
                                let t = this.getSlideIndexByData(0),
                                    i = this.getSlideIndexByData(this.slides.length - 1),
                                    s = this.slidesGrid[t],
                                    r = this.slidesGrid[i],
                                    a = this.slidesGrid[this.slidesGrid.length - 1],
                                    n = Math.abs(e);
                                (l = n >= s ? (n - s) / a : (n + a - r) / a) > 1 && (l -= 1)
                            }
                            Object.assign(this, {
                                progress: s,
                                progressLoop: l,
                                isBeginning: r,
                                isEnd: a
                            }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), r && !n && this.emit("reachBeginning toEdge"), a && !o && this.emit("reachEnd toEdge"), (n && !r || o && !a) && this.emit("fromEdge"), this.emit("progress", s)
                        },
                        updateSlidesClasses: function() {
                            let e, t, i;
                            let {
                                slides: s,
                                params: r,
                                slidesEl: a,
                                activeIndex: l
                            } = this, n = this.virtual && r.virtual.enabled, d = this.grid && r.grid && r.grid.rows > 1, p = e => (0, o.e)(a, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
                            if (n) {
                                if (r.loop) {
                                    let t = l - this.virtual.slidesBefore;
                                    t < 0 && (t = this.virtual.slides.length + t), t >= this.virtual.slides.length && (t -= this.virtual.slides.length), e = p(`[data-swiper-slide-index="${t}"]`)
                                } else e = p(`[data-swiper-slide-index="${l}"]`)
                            } else d ? (e = s.find(e => e.column === l), i = s.find(e => e.column === l + 1), t = s.find(e => e.column === l - 1)) : e = s[l];
                            e && !d && (i = (0, o.q)(e, `.${r.slideClass}, swiper-slide`)[0], r.loop && !i && (i = s[0]), t = (0, o.r)(e, `.${r.slideClass}, swiper-slide`)[0], r.loop), s.forEach(s => {
                                h(s, s === e, r.slideActiveClass), h(s, s === i, r.slideNextClass), h(s, s === t, r.slidePrevClass)
                            }), this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t, i;
                            let s = this,
                                r = s.rtlTranslate ? s.translate : -s.translate,
                                {
                                    snapGrid: a,
                                    params: l,
                                    activeIndex: n,
                                    realIndex: o,
                                    snapIndex: d
                                } = s,
                                p = e,
                                c = e => {
                                    let t = e - s.virtual.slidesBefore;
                                    return t < 0 && (t = s.virtual.slides.length + t), t >= s.virtual.slides.length && (t -= s.virtual.slides.length), t
                                };
                            if (void 0 === p && (p = function(e) {
                                    let t;
                                    let {
                                        slidesGrid: i,
                                        params: s
                                    } = e, r = e.rtlTranslate ? e.translate : -e.translate;
                                    for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2 ? t = e : r >= i[e] && r < i[e + 1] && (t = e + 1) : r >= i[e] && (t = e);
                                    return s.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                                }(s)), a.indexOf(r) >= 0) t = a.indexOf(r);
                            else {
                                let e = Math.min(l.slidesPerGroupSkip, p);
                                t = e + Math.floor((p - e) / l.slidesPerGroup)
                            }
                            if (t >= a.length && (t = a.length - 1), p === n && !s.params.loop) {
                                t !== d && (s.snapIndex = t, s.emit("snapIndexChange"));
                                return
                            }
                            if (p === n && s.params.loop && s.virtual && s.params.virtual.enabled) {
                                s.realIndex = c(p);
                                return
                            }
                            let u = s.grid && l.grid && l.grid.rows > 1;
                            if (s.virtual && l.virtual.enabled && l.loop) i = c(p);
                            else if (u) {
                                let e = s.slides.find(e => e.column === p),
                                    t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                                Number.isNaN(t) && (t = Math.max(s.slides.indexOf(e), 0)), i = Math.floor(t / l.grid.rows)
                            } else if (s.slides[p]) {
                                let e = s.slides[p].getAttribute("data-swiper-slide-index");
                                i = e ? parseInt(e, 10) : p
                            } else i = p;
                            Object.assign(s, {
                                previousSnapIndex: d,
                                snapIndex: t,
                                previousRealIndex: o,
                                realIndex: i,
                                previousIndex: n,
                                activeIndex: p
                            }), s.initialized && v(s), s.emit("activeIndexChange"), s.emit("snapIndexChange"), (s.initialized || s.params.runCallbacksOnInit) && (o !== i && s.emit("realIndexChange"), s.emit("slideChange"))
                        },
                        updateClickedSlide: function(e, t) {
                            let i;
                            let s = this.params,
                                r = e.closest(`.${s.slideClass}, swiper-slide`);
                            !r && this.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
                                !r && e.matches && e.matches(`.${s.slideClass}, swiper-slide`) && (r = e)
                            });
                            let a = !1;
                            if (r) {
                                for (let e = 0; e < this.slides.length; e += 1)
                                    if (this.slides[e] === r) {
                                        a = !0, i = e;
                                        break
                                    }
                            }
                            if (r && a) this.clickedSlide = r, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : this.clickedIndex = i;
                            else {
                                this.clickedSlide = void 0, this.clickedIndex = void 0;
                                return
                            }
                            s.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e) {
                            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                            let {
                                params: t,
                                rtlTranslate: i,
                                translate: s,
                                wrapperEl: r
                            } = this;
                            if (t.virtualTranslate) return i ? -s : s;
                            if (t.cssMode) return s;
                            let a = (0, o.j)(r, e);
                            return a += this.cssOverflowAdjustment(), i && (a = -a), a || 0
                        },
                        setTranslate: function(e, t) {
                            let {
                                rtlTranslate: i,
                                params: s,
                                wrapperEl: r,
                                progress: a
                            } = this, l = 0, n = 0;
                            this.isHorizontal() ? l = i ? -e : e : n = e, s.roundLengths && (l = Math.floor(l), n = Math.floor(n)), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : n, s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -n : s.virtualTranslate || (this.isHorizontal() ? l -= this.cssOverflowAdjustment() : n -= this.cssOverflowAdjustment(), r.style.transform = `translate3d(${l}px, ${n}px, 0px)`);
                            let o = this.maxTranslate() - this.minTranslate();
                            (0 === o ? 0 : (e - this.minTranslate()) / o) !== a && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e, t, i, s, r) {
                            let a;
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                            let l = this,
                                {
                                    params: n,
                                    wrapperEl: d
                                } = l;
                            if (l.animating && n.preventInteractionOnTransition) return !1;
                            let p = l.minTranslate(),
                                c = l.maxTranslate();
                            if (a = s && e > p ? p : s && e < c ? c : e, l.updateProgress(a), n.cssMode) {
                                let e = l.isHorizontal();
                                if (0 === t) d[e ? "scrollLeft" : "scrollTop"] = -a;
                                else {
                                    if (!l.support.smoothScroll) return (0, o.t)({
                                        swiper: l,
                                        targetPosition: -a,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    d.scrollTo({
                                        [e ? "left" : "top"]: -a,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (l.setTransition(0), l.setTranslate(a), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionEnd"))) : (l.setTransition(t), l.setTranslate(a), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionStart")), l.animating || (l.animating = !0, l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.onTranslateToWrapperTransitionEnd = null, delete l.onTranslateToWrapperTransitionEnd, l.animating = !1, i && l.emit("transitionEnd"))
                            }), l.wrapperEl.addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.params.cssMode || (this.wrapperEl.style.transitionDuration = `${e}ms`, this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: i
                            } = this;
                            i.cssMode || (i.autoHeight && this.updateAutoHeight(), g({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: i
                            } = this;
                            this.animating = !1, i.cssMode || (this.setTransition(0), g({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e, t, i, s, r) {
                            let a;
                            void 0 === e && (e = 0), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
                            let l = this,
                                n = e;
                            n < 0 && (n = 0);
                            let {
                                params: d,
                                snapGrid: p,
                                slidesGrid: u,
                                previousIndex: h,
                                activeIndex: f,
                                rtlTranslate: m,
                                wrapperEl: v,
                                enabled: g
                            } = l;
                            if (!g && !s && !r || l.destroyed || l.animating && d.preventInteractionOnTransition) return !1;
                            void 0 === t && (t = l.params.speed);
                            let w = Math.min(l.params.slidesPerGroupSkip, n),
                                b = w + Math.floor((n - w) / l.params.slidesPerGroup);
                            b >= p.length && (b = p.length - 1);
                            let y = -p[b];
                            if (d.normalizeSlideIndex)
                                for (let e = 0; e < u.length; e += 1) {
                                    let t = -Math.floor(100 * y),
                                        i = Math.floor(100 * u[e]),
                                        s = Math.floor(100 * u[e + 1]);
                                    void 0 !== u[e + 1] ? t >= i && t < s - (s - i) / 2 ? n = e : t >= i && t < s && (n = e + 1) : t >= i && (n = e)
                                }
                            if (l.initialized && n !== f && (!l.allowSlideNext && (m ? y > l.translate && y > l.minTranslate() : y < l.translate && y < l.minTranslate()) || !l.allowSlidePrev && y > l.translate && y > l.maxTranslate() && (f || 0) !== n)) return !1;
                            n !== (h || 0) && i && l.emit("beforeSlideChangeStart"), l.updateProgress(y), a = n > f ? "next" : n < f ? "prev" : "reset";
                            let S = l.virtual && l.params.virtual.enabled;
                            if (!(S && r) && (m && -y === l.translate || !m && y === l.translate)) return l.updateActiveIndex(n), d.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== d.effect && l.setTranslate(y), "reset" !== a && (l.transitionStart(i, a), l.transitionEnd(i, a)), !1;
                            if (d.cssMode) {
                                let e = l.isHorizontal(),
                                    i = m ? y : -y;
                                if (0 === t) S && (l.wrapperEl.style.scrollSnapType = "none", l._immediateVirtual = !0), S && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0 ? (l._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                                    v[e ? "scrollLeft" : "scrollTop"] = i
                                })) : v[e ? "scrollLeft" : "scrollTop"] = i, S && requestAnimationFrame(() => {
                                    l.wrapperEl.style.scrollSnapType = "", l._immediateVirtual = !1
                                });
                                else {
                                    if (!l.support.smoothScroll) return (0, o.t)({
                                        swiper: l,
                                        targetPosition: i,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    v.scrollTo({
                                        [e ? "left" : "top"]: i,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            let T = c().isSafari;
                            return S && !r && T && l.isElement && l.virtual.update(!1, !1, n), l.setTransition(t), l.setTranslate(y), l.updateActiveIndex(n), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, s), l.transitionStart(i, a), 0 === t ? l.transitionEnd(i, a) : l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(i, a))
                            }), l.wrapperEl.addEventListener("transitionend", l.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e, t, i, s) {
                            void 0 === e && (e = 0), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
                            let r = this;
                            if (r.destroyed) return;
                            void 0 === t && (t = r.params.speed);
                            let a = r.grid && r.params.grid && r.params.grid.rows > 1,
                                l = e;
                            if (r.params.loop) {
                                if (r.virtual && r.params.virtual.enabled) l += r.virtual.slidesBefore;
                                else {
                                    let e;
                                    if (a) {
                                        let t = l * r.params.grid.rows;
                                        e = r.slides.find(e => 1 * e.getAttribute("data-swiper-slide-index") === t).column
                                    } else e = r.getSlideIndexByData(l);
                                    let t = a ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
                                        {
                                            centeredSlides: i
                                        } = r.params,
                                        n = r.params.slidesPerView;
                                    "auto" === n ? n = r.slidesPerViewDynamic() : (n = Math.ceil(parseFloat(r.params.slidesPerView, 10)), i && n % 2 == 0 && (n += 1));
                                    let o = t - e < n;
                                    if (i && (o = o || e < Math.ceil(n / 2)), s && i && "auto" !== r.params.slidesPerView && !a && (o = !1), o) {
                                        let s = i ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                                        r.loopFix({
                                            direction: s,
                                            slideTo: !0,
                                            activeSlideIndex: "next" === s ? e + 1 : e - t + 1,
                                            slideRealIndex: "next" === s ? r.realIndex : void 0
                                        })
                                    }
                                    if (a) {
                                        let e = l * r.params.grid.rows;
                                        l = r.slides.find(t => 1 * t.getAttribute("data-swiper-slide-index") === e).column
                                    } else l = r.getSlideIndexByData(l)
                                }
                            }
                            return requestAnimationFrame(() => {
                                r.slideTo(l, t, i, s)
                            }), r
                        },
                        slideNext: function(e, t, i) {
                            void 0 === t && (t = !0);
                            let s = this,
                                {
                                    enabled: r,
                                    params: a,
                                    animating: l
                                } = s;
                            if (!r || s.destroyed) return s;
                            void 0 === e && (e = s.params.speed);
                            let n = a.slidesPerGroup;
                            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (n = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                            let o = s.activeIndex < a.slidesPerGroupSkip ? 1 : n,
                                d = s.virtual && a.virtual.enabled;
                            if (a.loop) {
                                if (l && !d && a.loopPreventsSliding) return !1;
                                if (s.loopFix({
                                        direction: "next"
                                    }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && a.cssMode) return requestAnimationFrame(() => {
                                    s.slideTo(s.activeIndex + o, e, t, i)
                                }), !0
                            }
                            return a.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
                        },
                        slidePrev: function(e, t, i) {
                            void 0 === t && (t = !0);
                            let s = this,
                                {
                                    params: r,
                                    snapGrid: a,
                                    slidesGrid: l,
                                    rtlTranslate: n,
                                    enabled: o,
                                    animating: d
                                } = s;
                            if (!o || s.destroyed) return s;
                            void 0 === e && (e = s.params.speed);
                            let p = s.virtual && r.virtual.enabled;
                            if (r.loop) {
                                if (d && !p && r.loopPreventsSliding) return !1;
                                s.loopFix({
                                    direction: "prev"
                                }), s._clientLeft = s.wrapperEl.clientLeft
                            }

                            function c(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let u = c(n ? s.translate : -s.translate),
                                h = a.map(e => c(e)),
                                f = r.freeMode && r.freeMode.enabled,
                                m = a[h.indexOf(u) - 1];
                            if (void 0 === m && (r.cssMode || f)) {
                                let e;
                                a.forEach((t, i) => {
                                    u >= t && (e = i)
                                }), void 0 !== e && (m = f ? a[e] : a[e > 0 ? e - 1 : e])
                            }
                            let v = 0;
                            if (void 0 !== m && ((v = l.indexOf(m)) < 0 && (v = s.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (v = Math.max(v = v - s.slidesPerViewDynamic("previous", !0) + 1, 0))), r.rewind && s.isBeginning) {
                                let r = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                                return s.slideTo(r, e, t, i)
                            }
                            return r.loop && 0 === s.activeIndex && r.cssMode ? (requestAnimationFrame(() => {
                                s.slideTo(v, e, t, i)
                            }), !0) : s.slideTo(v, e, t, i)
                        },
                        slideReset: function(e, t, i) {
                            if (void 0 === t && (t = !0), !this.destroyed) return void 0 === e && (e = this.params.speed), this.slideTo(this.activeIndex, e, t, i)
                        },
                        slideToClosest: function(e, t, i, s) {
                            if (void 0 === t && (t = !0), void 0 === s && (s = .5), this.destroyed) return;
                            void 0 === e && (e = this.params.speed);
                            let r = this.activeIndex,
                                a = Math.min(this.params.slidesPerGroupSkip, r),
                                l = a + Math.floor((r - a) / this.params.slidesPerGroup),
                                n = this.rtlTranslate ? this.translate : -this.translate;
                            if (n >= this.snapGrid[l]) {
                                let e = this.snapGrid[l];
                                n - e > (this.snapGrid[l + 1] - e) * s && (r += this.params.slidesPerGroup)
                            } else {
                                let e = this.snapGrid[l - 1];
                                n - e <= (this.snapGrid[l] - e) * s && (r -= this.params.slidesPerGroup)
                            }
                            return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1), this.slideTo(r, e, t, i)
                        },
                        slideToClickedSlide: function() {
                            let e;
                            let t = this;
                            if (t.destroyed) return;
                            let {
                                params: i,
                                slidesEl: s
                            } = t, r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, a = t.clickedIndex, l = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
                            if (i.loop) {
                                if (t.animating) return;
                                e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), i.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), a = t.getSlideIndex((0, o.e)(s, `${l}[data-swiper-slide-index="${e}"]`)[0]), (0, o.n)(() => {
                                    t.slideTo(a)
                                })) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(), a = t.getSlideIndex((0, o.e)(s, `${l}[data-swiper-slide-index="${e}"]`)[0]), (0, o.n)(() => {
                                    t.slideTo(a)
                                })) : t.slideTo(a)
                            } else t.slideTo(a)
                        }
                    },
                    loop: {
                        loopCreate: function(e) {
                            let t = this,
                                {
                                    params: i,
                                    slidesEl: s
                                } = t;
                            if (!i.loop || t.virtual && t.params.virtual.enabled) return;
                            let r = t.grid && i.grid && i.grid.rows > 1,
                                a = i.slidesPerGroup * (r ? i.grid.rows : 1),
                                l = t.slides.length % a != 0,
                                n = r && t.slides.length % i.grid.rows != 0,
                                d = e => {
                                    for (let s = 0; s < e; s += 1) {
                                        let e = t.isElement ? (0, o.c)("swiper-slide", [i.slideBlankClass]) : (0, o.c)("div", [i.slideClass, i.slideBlankClass]);
                                        t.slidesEl.append(e)
                                    }
                                };
                            l ? i.loopAddBlankSlides ? (d(a - t.slides.length % a), t.recalcSlides(), t.updateSlides()) : (0, o.u)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)") : n && (i.loopAddBlankSlides ? (d(i.grid.rows - t.slides.length % i.grid.rows), t.recalcSlides(), t.updateSlides()) : (0, o.u)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)")), (0, o.e)(s, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
                                e.setAttribute("data-swiper-slide-index", t)
                            }), t.loopFix({
                                slideRealIndex: e,
                                direction: i.centeredSlides ? void 0 : "next"
                            })
                        },
                        loopFix: function(e) {
                            let {
                                slideRealIndex: t,
                                slideTo: i = !0,
                                direction: s,
                                setTranslate: r,
                                activeSlideIndex: a,
                                byController: l,
                                byMousewheel: n
                            } = void 0 === e ? {} : e, d = this;
                            if (!d.params.loop) return;
                            d.emit("beforeLoopFix");
                            let {
                                slides: p,
                                allowSlidePrev: c,
                                allowSlideNext: u,
                                slidesEl: h,
                                params: f
                            } = d, {
                                centeredSlides: m
                            } = f;
                            if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && f.virtual.enabled) {
                                i && (f.centeredSlides || 0 !== d.snapIndex ? f.centeredSlides && d.snapIndex < f.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = c, d.allowSlideNext = u, d.emit("loopFix");
                                return
                            }
                            let v = f.slidesPerView;
                            "auto" === v ? v = d.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(f.slidesPerView, 10)), m && v % 2 == 0 && (v += 1));
                            let g = f.slidesPerGroupAuto ? v : f.slidesPerGroup,
                                w = g;
                            w % g != 0 && (w += g - w % g), w += f.loopAdditionalSlides, d.loopedSlides = w;
                            let b = d.grid && f.grid && f.grid.rows > 1;
                            p.length < v + w ? (0, o.u)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === f.grid.fill && (0, o.u)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                            let y = [],
                                S = [],
                                T = d.activeIndex;
                            void 0 === a ? a = d.getSlideIndex(p.find(e => e.classList.contains(f.slideActiveClass))) : T = a;
                            let E = "next" === s || !s,
                                x = "prev" === s || !s,
                                M = 0,
                                C = 0,
                                P = b ? Math.ceil(p.length / f.grid.rows) : p.length,
                                k = (b ? p[a].column : a) + (m && void 0 === r ? -v / 2 + .5 : 0);
                            if (k < w) {
                                M = Math.max(w - k, g);
                                for (let e = 0; e < w - k; e += 1) {
                                    let t = e - Math.floor(e / P) * P;
                                    if (b) {
                                        let e = P - t - 1;
                                        for (let t = p.length - 1; t >= 0; t -= 1) p[t].column === e && y.push(t)
                                    } else y.push(P - t - 1)
                                }
                            } else if (k + v > P - w) {
                                C = Math.max(k - (P - 2 * w), g);
                                for (let e = 0; e < C; e += 1) {
                                    let t = e - Math.floor(e / P) * P;
                                    b ? p.forEach((e, i) => {
                                        e.column === t && S.push(i)
                                    }) : S.push(t)
                                }
                            }
                            if (d.__preventObserver__ = !0, requestAnimationFrame(() => {
                                    d.__preventObserver__ = !1
                                }), x && y.forEach(e => {
                                    p[e].swiperLoopMoveDOM = !0, h.prepend(p[e]), p[e].swiperLoopMoveDOM = !1
                                }), E && S.forEach(e => {
                                    p[e].swiperLoopMoveDOM = !0, h.append(p[e]), p[e].swiperLoopMoveDOM = !1
                                }), d.recalcSlides(), "auto" === f.slidesPerView ? d.updateSlides() : b && (y.length > 0 && x || S.length > 0 && E) && d.slides.forEach((e, t) => {
                                    d.grid.updateSlide(t, e, d.slides)
                                }), f.watchSlidesProgress && d.updateSlidesOffset(), i) {
                                if (y.length > 0 && x) {
                                    if (void 0 === t) {
                                        let e = d.slidesGrid[T],
                                            t = d.slidesGrid[T + M] - e;
                                        n ? d.setTranslate(d.translate - t) : (d.slideTo(T + Math.ceil(M), 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                                    } else if (r) {
                                        let e = b ? y.length / f.grid.rows : y.length;
                                        d.slideTo(d.activeIndex + e, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate
                                    }
                                } else if (S.length > 0 && E) {
                                    if (void 0 === t) {
                                        let e = d.slidesGrid[T],
                                            t = d.slidesGrid[T - C] - e;
                                        n ? d.setTranslate(d.translate - t) : (d.slideTo(T - C, 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                                    } else {
                                        let e = b ? S.length / f.grid.rows : S.length;
                                        d.slideTo(d.activeIndex - e, 0, !1, !0)
                                    }
                                }
                            }
                            if (d.allowSlidePrev = c, d.allowSlideNext = u, d.controller && d.controller.control && !l) {
                                let e = {
                                    slideRealIndex: t,
                                    direction: s,
                                    setTranslate: r,
                                    activeSlideIndex: a,
                                    byController: !0
                                };
                                Array.isArray(d.controller.control) ? d.controller.control.forEach(t => {
                                    !t.destroyed && t.params.loop && t.loopFix({ ...e,
                                        slideTo: t.params.slidesPerView === f.slidesPerView && i
                                    })
                                }) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({ ...e,
                                    slideTo: d.controller.control.params.slidesPerView === f.slidesPerView && i
                                })
                            }
                            d.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                params: e,
                                slidesEl: t
                            } = this;
                            if (!e.loop || this.virtual && this.params.virtual.enabled) return;
                            this.recalcSlides();
                            let i = [];
                            this.slides.forEach(e => {
                                i[void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex] = e
                            }), this.slides.forEach(e => {
                                e.removeAttribute("data-swiper-slide-index")
                            }), i.forEach(e => {
                                t.append(e)
                            }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            let t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            let i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                                t.__preventObserver__ = !1
                            })
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                                e.__preventObserver__ = !1
                            }))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let {
                                params: e
                            } = this;
                            this.onTouchStart = b.bind(this), this.onTouchMove = y.bind(this), this.onTouchEnd = S.bind(this), this.onDocumentTouchStart = C.bind(this), e.cssMode && (this.onScroll = x.bind(this)), this.onClick = E.bind(this), this.onLoad = M.bind(this), P(this, "on")
                        },
                        detachEvents: function() {
                            P(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    realIndex: t,
                                    initialized: i,
                                    params: s,
                                    el: r
                                } = e,
                                a = s.breakpoints;
                            if (!a || a && 0 === Object.keys(a).length) return;
                            let l = (0, n.g)(),
                                d = "window" !== s.breakpointsBase && s.breakpointsBase ? "container" : s.breakpointsBase,
                                p = ["window", "container"].includes(s.breakpointsBase) || !s.breakpointsBase ? e.el : l.querySelector(s.breakpointsBase),
                                c = e.getBreakpoint(a, d, p);
                            if (!c || e.currentBreakpoint === c) return;
                            let u = (c in a ? a[c] : void 0) || e.originalParams,
                                h = k(e, s),
                                f = k(e, u),
                                m = e.params.grabCursor,
                                v = u.grabCursor,
                                g = s.enabled;
                            h && !f ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !h && f && (r.classList.add(`${s.containerModifierClass}grid`), (u.grid.fill && "column" === u.grid.fill || !u.grid.fill && "column" === s.grid.fill) && r.classList.add(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), m && !v ? e.unsetGrabCursor() : !m && v && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                if (void 0 === u[t]) return;
                                let i = s[t] && s[t].enabled,
                                    r = u[t] && u[t].enabled;
                                i && !r && e[t].disable(), !i && r && e[t].enable()
                            });
                            let w = u.direction && u.direction !== s.direction,
                                b = s.loop && (u.slidesPerView !== s.slidesPerView || w),
                                y = s.loop;
                            w && i && e.changeDirection(), (0, o.w)(e.params, u);
                            let S = e.params.enabled,
                                T = e.params.loop;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), g && !S ? e.disable() : !g && S && e.enable(), e.currentBreakpoint = c, e.emit("_beforeBreakpoint", u), i && (b ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !y && T ? (e.loopCreate(t), e.updateSlides()) : y && !T && e.loopDestroy()), e.emit("breakpoint", u)
                        },
                        getBreakpoint: function(e, t, i) {
                            if (void 0 === t && (t = "window"), !e || "container" === t && !i) return;
                            let s = !1,
                                r = (0, n.a)(),
                                a = "window" === t ? r.innerHeight : i.clientHeight,
                                l = Object.keys(e).map(e => "string" == typeof e && 0 === e.indexOf("@") ? {
                                    value: a * parseFloat(e.substr(1)),
                                    point: e
                                } : {
                                    value: e,
                                    point: e
                                });
                            l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < l.length; e += 1) {
                                let {
                                    point: a,
                                    value: n
                                } = l[e];
                                "window" === t ? r.matchMedia(`(min-width: ${n}px)`).matches && (s = a) : n <= i.clientWidth && (s = a)
                            }
                            return s || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let {
                                isLocked: e,
                                params: t
                            } = this, {
                                slidesOffsetBefore: i
                            } = t;
                            if (i) {
                                let e = this.slides.length - 1,
                                    t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                                this.isLocked = this.size > t
                            } else this.isLocked = 1 === this.snapGrid.length;
                            !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked), !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked), e && e !== this.isLocked && (this.isEnd = !1), e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: i,
                                el: s,
                                device: r
                            } = this, a = function(e, t) {
                                let i = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(s => {
                                        e[s] && i.push(t + s)
                                    }) : "string" == typeof e && i.push(t + e)
                                }), i
                            }(["initialized", t.direction, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: r.android
                            }, {
                                ios: r.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...a), s.classList.add(...e), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                el: e,
                                classNames: t
                            } = this;
                            e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
                        }
                    }
                },
                _ = {};
            class I {
                constructor() {
                    let e, t;
                    for (var i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                    1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? t = s[0] : [e, t] = s, t || (t = {}), t = (0, o.w)({}, t), e && !t.el && (t.el = e);
                    let a = (0, n.g)();
                    if (t.el && "string" == typeof t.el && a.querySelectorAll(t.el).length > 1) {
                        let e = [];
                        return a.querySelectorAll(t.el).forEach(i => {
                            let s = (0, o.w)({}, t, {
                                el: i
                            });
                            e.push(new I(s))
                        }), e
                    }
                    let l = this;
                    l.__swiper__ = !0, l.support = d(), l.device = p({
                        userAgent: t.userAgent
                    }), l.browser = c(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
                    let u = {};
                    l.modules.forEach(e => {
                        e({
                            params: t,
                            swiper: l,
                            extendParams: function(e, t) {
                                return function(i) {
                                    void 0 === i && (i = {});
                                    let s = Object.keys(i)[0],
                                        r = i[s];
                                    if ("object" != typeof r || null === r || (!0 === e[s] && (e[s] = {
                                            enabled: !0
                                        }), "navigation" === s && e[s] && e[s].enabled && !e[s].prevEl && !e[s].nextEl && (e[s].auto = !0), ["pagination", "scrollbar"].indexOf(s) >= 0 && e[s] && e[s].enabled && !e[s].el && (e[s].auto = !0), !(s in e && "enabled" in r))) {
                                        (0, o.w)(t, i);
                                        return
                                    }
                                    "object" != typeof e[s] || "enabled" in e[s] || (e[s].enabled = !0), e[s] || (e[s] = {
                                        enabled: !1
                                    }), (0, o.w)(t, i)
                                }
                            }(t, u),
                            on: l.on.bind(l),
                            once: l.once.bind(l),
                            off: l.off.bind(l),
                            emit: l.emit.bind(l)
                        })
                    });
                    let h = (0, o.w)({}, L, u);
                    return l.params = (0, o.w)({}, h, _, t), l.originalParams = (0, o.w)({}, l.params), l.passedParams = (0, o.w)({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach(e => {
                        l.on(e, l.params.on[e])
                    }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
                        enabled: l.params.enabled,
                        el: e,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === l.params.direction,
                        isVertical: () => "vertical" === l.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return 8388608 * Math.trunc(this.translate / 8388608)
                        },
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: l.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            pointerId: null,
                            touchId: null
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), l.emit("_swiper"), l.params.init && l.init(), l
                }
                getDirectionLabel(e) {
                    return this.isHorizontal() ? e : ({
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    })[e]
                }
                getSlideIndex(e) {
                    let {
                        slidesEl: t,
                        params: i
                    } = this, s = (0, o.e)(t, `.${i.slideClass}, swiper-slide`), r = (0, o.h)(s[0]);
                    return (0, o.h)(e) - r
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.find(t => 1 * t.getAttribute("data-swiper-slide-index") === e))
                }
                recalcSlides() {
                    let {
                        slidesEl: e,
                        params: t
                    } = this;
                    this.slides = (0, o.e)(e, `.${t.slideClass}, swiper-slide`)
                }
                enable() {
                    this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
                }
                disable() {
                    this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let i = this.minTranslate(),
                        s = (this.maxTranslate() - i) * e + i;
                    this.translateTo(s, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.forEach(i => {
                        let s = e.getSlideClasses(i);
                        t.push({
                            slideEl: i,
                            classNames: s
                        }), e.emit("_slideClass", i, s)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    let {
                        params: i,
                        slides: s,
                        slidesGrid: r,
                        slidesSizesGrid: a,
                        size: l,
                        activeIndex: n
                    } = this, o = 1;
                    if ("number" == typeof i.slidesPerView) return i.slidesPerView;
                    if (i.centeredSlides) {
                        let e, t = s[n] ? Math.ceil(s[n].swiperSlideSize) : 0;
                        for (let i = n + 1; i < s.length; i += 1) s[i] && !e && (t += Math.ceil(s[i].swiperSlideSize), o += 1, t > l && (e = !0));
                        for (let i = n - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > l && (e = !0))
                    } else if ("current" === e)
                        for (let e = n + 1; e < s.length; e += 1)(t ? r[e] + a[e] - r[n] < l : r[e] - r[n] < l) && (o += 1);
                    else
                        for (let e = n - 1; e >= 0; e -= 1) r[n] - r[e] < l && (o += 1);
                    return o
                }
                update() {
                    let e;
                    let t = this;
                    if (!t || t.destroyed) return;
                    let {
                        snapGrid: i,
                        params: s
                    } = t;

                    function r() {
                        let e = Math.min(Math.max(t.rtlTranslate ? -1 * t.translate : t.translate, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    if (s.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                            e.complete && f(t, e)
                        }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) r(), s.autoHeight && t.updateAutoHeight();
                    else {
                        if (("auto" === s.slidesPerView || s.slidesPerView > 1) && t.isEnd && !s.centeredSlides) {
                            let i = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
                            e = t.slideTo(i.length - 1, 0, !1, !0)
                        } else e = t.slideTo(t.activeIndex, 0, !1, !0);
                        e || r()
                    }
                    s.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    let i = this.params.direction;
                    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.el.classList.remove(`${this.params.containerModifierClass}${i}`), this.el.classList.add(`${this.params.containerModifierClass}${e}`), this.emitContainerClasses(), this.params.direction = e, this.slides.forEach(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), this.emit("changeDirection"), t && this.update()), this
                }
                changeLanguageDirection(e) {
                    (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e, this.rtlTranslate = "horizontal" === this.params.direction && this.rtl, this.rtl ? (this.el.classList.add(`${this.params.containerModifierClass}rtl`), this.el.dir = "rtl") : (this.el.classList.remove(`${this.params.containerModifierClass}rtl`), this.el.dir = "ltr"), this.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let i = e || t.params.el;
                    if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
                    i.swiper = t, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                    let s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        r = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : (0, o.e)(i, s())[0];
                    return !r && t.params.createElements && (r = (0, o.c)("div", t.params.wrapperClass), i.append(r), (0, o.e)(i, `.${t.params.slideClass}`).forEach(e => {
                        r.append(e)
                    })), Object.assign(t, {
                        el: i,
                        wrapperEl: r,
                        slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : r,
                        hostEl: t.isElement ? i.parentNode.host : i,
                        mounted: !0,
                        rtl: "rtl" === i.dir.toLowerCase() || "rtl" === (0, o.p)(i, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === (0, o.p)(i, "direction")),
                        wrongRTL: "-webkit-box" === (0, o.p)(r, "display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized || !1 === t.mount(e)) return t;
                    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                    let i = [...t.el.querySelectorAll('[loading="lazy"]')];
                    return t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach(e => {
                        e.complete ? f(t, e) : e.addEventListener("load", e => {
                            f(t, e.target)
                        })
                    }), v(t), t.initialized = !0, v(t), t.emit("init"), t.emit("afterInit"), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    let i = this,
                        {
                            params: s,
                            el: r,
                            wrapperEl: a,
                            slides: l
                        } = i;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r && "string" != typeof r && r.removeAttribute("style"), a && a.removeAttribute("style"), l && l.length && l.forEach(e => {
                        e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                        i.off(e)
                    }), !1 !== e && (i.el && "string" != typeof i.el && (i.el.swiper = null), (0, o.x)(i)), i.destroyed = !0), null
                }
                static extendDefaults(e) {
                    (0, o.w)(_, e)
                }
                static get extendedDefaults() {
                    return _
                }
                static get defaults() {
                    return L
                }
                static installModule(e) {
                    I.prototype.__modules__ || (I.prototype.__modules__ = []);
                    let t = I.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? e.forEach(e => I.installModule(e)) : I.installModule(e), I
                }
            }
            Object.keys(O).forEach(e => {
                Object.keys(O[e]).forEach(t => {
                    I.prototype[t] = O[e][t]
                })
            }), I.use([function(e) {
                let {
                    swiper: t,
                    on: i,
                    emit: s
                } = e, r = (0, n.a)(), a = null, l = null, o = () => {
                    t && !t.destroyed && t.initialized && (s("beforeResize"), s("resize"))
                }, d = () => {
                    t && !t.destroyed && t.initialized && (a = new ResizeObserver(e => {
                        l = r.requestAnimationFrame(() => {
                            let {
                                width: i,
                                height: s
                            } = t, r = i, a = s;
                            e.forEach(e => {
                                let {
                                    contentBoxSize: i,
                                    contentRect: s,
                                    target: l
                                } = e;
                                l && l !== t.el || (r = s ? s.width : (i[0] || i).inlineSize, a = s ? s.height : (i[0] || i).blockSize)
                            }), (r !== i || a !== s) && o()
                        })
                    })).observe(t.el)
                }, p = () => {
                    l && r.cancelAnimationFrame(l), a && a.unobserve && t.el && (a.unobserve(t.el), a = null)
                }, c = () => {
                    t && !t.destroyed && t.initialized && s("orientationchange")
                };
                i("init", () => {
                    if (t.params.resizeObserver && void 0 !== r.ResizeObserver) {
                        d();
                        return
                    }
                    r.addEventListener("resize", o), r.addEventListener("orientationchange", c)
                }), i("destroy", () => {
                    p(), r.removeEventListener("resize", o), r.removeEventListener("orientationchange", c)
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: s,
                    emit: r
                } = e, a = [], l = (0, n.a)(), d = function(e, i) {
                    void 0 === i && (i = {});
                    let s = new(l.MutationObserver || l.WebkitMutationObserver)(e => {
                        if (t.__preventObserver__) return;
                        if (1 === e.length) {
                            r("observerUpdate", e[0]);
                            return
                        }
                        let i = function() {
                            r("observerUpdate", e[0])
                        };
                        l.requestAnimationFrame ? l.requestAnimationFrame(i) : l.setTimeout(i, 0)
                    });
                    s.observe(e, {
                        attributes: void 0 === i.attributes || i.attributes,
                        childList: t.isElement || (void 0 === i.childList || i).childList,
                        characterData: void 0 === i.characterData || i.characterData
                    }), a.push(s)
                };
                i({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), s("init", () => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            let e = (0, o.a)(t.hostEl);
                            for (let t = 0; t < e.length; t += 1) d(e[t])
                        }
                        d(t.hostEl, {
                            childList: t.params.observeSlideChildren
                        }), d(t.wrapperEl, {
                            attributes: !1
                        })
                    }
                }), s("destroy", () => {
                    a.forEach(e => {
                        e.disconnect()
                    }), a.splice(0, a.length)
                })
            }]);
            let A = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function z(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
            }

            function D(e, t) {
                let i = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : z(t[i]) && z(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : D(e[i], t[i]) : e[i] = t[i]
                })
            }

            function N(e) {
                return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function G(e) {
                return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
            }

            function V(e) {
                return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
            }

            function B(e) {
                void 0 === e && (e = "");
                let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
                    i = [];
                return t.forEach(e => {
                    0 > i.indexOf(e) && i.push(e)
                }), i.join(" ")
            }
            let F = e => {
                e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            };

            function j() {
                return (j = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function $(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function R(e, t) {
                return "undefined" == typeof window ? (0, l.useEffect)(e, t) : (0, l.useLayoutEffect)(e, t)
            }
            let H = (0, l.createContext)(null),
                q = (0, l.createContext)(null),
                W = (0, l.forwardRef)(function(e, t) {
                    var i;
                    let {
                        className: s,
                        tag: r = "div",
                        wrapperTag: a = "div",
                        children: n,
                        onSwiper: o,
                        ...d
                    } = void 0 === e ? {} : e, p = !1, [c, u] = (0, l.useState)("swiper"), [h, f] = (0, l.useState)(null), [m, v] = (0, l.useState)(!1), g = (0, l.useRef)(!1), w = (0, l.useRef)(null), b = (0, l.useRef)(null), y = (0, l.useRef)(null), S = (0, l.useRef)(null), T = (0, l.useRef)(null), E = (0, l.useRef)(null), x = (0, l.useRef)(null), M = (0, l.useRef)(null), {
                        params: C,
                        passedParams: P,
                        rest: k,
                        events: O
                    } = function(e, t) {
                        void 0 === e && (e = {}), void 0 === t && (t = !0);
                        let i = {
                                on: {}
                            },
                            s = {},
                            r = {};
                        D(i, L), i._emitClasses = !0, i.init = !1;
                        let a = {},
                            l = A.map(e => e.replace(/_/, ""));
                        return Object.keys(Object.assign({}, e)).forEach(n => {
                            void 0 !== e[n] && (l.indexOf(n) >= 0 ? z(e[n]) ? (i[n] = {}, r[n] = {}, D(i[n], e[n]), D(r[n], e[n])) : (i[n] = e[n], r[n] = e[n]) : 0 === n.search(/on[A-Z]/) && "function" == typeof e[n] ? t ? s[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n] : i.on[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n] : a[n] = e[n])
                        }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                            !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
                        }), {
                            params: i,
                            passedParams: r,
                            rest: a,
                            events: s
                        }
                    }(d), {
                        slides: _,
                        slots: H
                    } = function(e) {
                        let t = [],
                            i = {
                                "container-start": [],
                                "container-end": [],
                                "wrapper-start": [],
                                "wrapper-end": []
                            };
                        return l.Children.toArray(e).forEach(e => {
                            if ($(e)) t.push(e);
                            else if (e.props && e.props.slot && i[e.props.slot]) i[e.props.slot].push(e);
                            else if (e.props && e.props.children) {
                                let s = function e(t) {
                                    let i = [];
                                    return l.Children.toArray(t).forEach(t => {
                                        $(t) ? i.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => i.push(e))
                                    }), i
                                }(e.props.children);
                                s.length > 0 ? s.forEach(e => t.push(e)) : i["container-end"].push(e)
                            } else i["container-end"].push(e)
                        }), {
                            slides: t,
                            slots: i
                        }
                    }(n), W = () => {
                        v(!m)
                    };
                    Object.assign(C.on, {
                        _containerClasses(e, t) {
                            u(t)
                        }
                    });
                    let Y = () => {
                        Object.assign(C.on, O), p = !0;
                        let e = { ...C
                        };
                        if (delete e.wrapperClass, b.current = new I(e), b.current.virtual && b.current.params.virtual.enabled) {
                            b.current.virtual.slides = _;
                            let e = {
                                cache: !1,
                                slides: _,
                                renderExternal: f,
                                renderExternalUpdate: !1
                            };
                            D(b.current.params.virtual, e), D(b.current.originalParams.virtual, e)
                        }
                    };
                    w.current || Y(), b.current && b.current.on("_beforeBreakpoint", W);
                    let X = () => {
                            !p && O && b.current && Object.keys(O).forEach(e => {
                                b.current.on(e, O[e])
                            })
                        },
                        U = () => {
                            O && b.current && Object.keys(O).forEach(e => {
                                b.current.off(e, O[e])
                            })
                        };
                    return (0, l.useEffect)(() => () => {
                        b.current && b.current.off("_beforeBreakpoint", W)
                    }), (0, l.useEffect)(() => {
                        !g.current && b.current && (b.current.emitSlidesClasses(), g.current = !0)
                    }), R(() => {
                        if (t && (t.current = w.current), w.current) return b.current.destroyed && Y(),
                            function(e, t) {
                                let {
                                    el: i,
                                    nextEl: s,
                                    prevEl: r,
                                    paginationEl: a,
                                    scrollbarEl: l,
                                    swiper: n
                                } = e;
                                N(t) && s && r && (n.params.navigation.nextEl = s, n.originalParams.navigation.nextEl = s, n.params.navigation.prevEl = r, n.originalParams.navigation.prevEl = r), G(t) && a && (n.params.pagination.el = a, n.originalParams.pagination.el = a), V(t) && l && (n.params.scrollbar.el = l, n.originalParams.scrollbar.el = l), n.init(i)
                            }({
                                el: w.current,
                                nextEl: T.current,
                                prevEl: E.current,
                                paginationEl: x.current,
                                scrollbarEl: M.current,
                                swiper: b.current
                            }, C), o && !b.current.destroyed && o(b.current), () => {
                                b.current && !b.current.destroyed && b.current.destroy(!0, !1)
                            }
                    }, []), R(() => {
                        X();
                        let e = function(e, t, i, s, r) {
                            let a = [];
                            if (!t) return a;
                            let l = e => {
                                0 > a.indexOf(e) && a.push(e)
                            };
                            if (i && s) {
                                let e = s.map(r),
                                    t = i.map(r);
                                e.join("") !== t.join("") && l("children"), s.length !== i.length && l("children")
                            }
                            return A.filter(e => "_" === e[0]).map(e => e.replace(/_/, "")).forEach(i => {
                                if (i in e && i in t) {
                                    if (z(e[i]) && z(t[i])) {
                                        let s = Object.keys(e[i]),
                                            r = Object.keys(t[i]);
                                        s.length !== r.length ? l(i) : (s.forEach(s => {
                                            e[i][s] !== t[i][s] && l(i)
                                        }), r.forEach(s => {
                                            e[i][s] !== t[i][s] && l(i)
                                        }))
                                    } else e[i] !== t[i] && l(i)
                                }
                            }), a
                        }(P, y.current, _, S.current, e => e.key);
                        return y.current = P, S.current = _, e.length && b.current && !b.current.destroyed && function(e) {
                            let t, i, s, r, a, l, n, o, {
                                    swiper: d,
                                    slides: p,
                                    passedParams: c,
                                    changedParams: u,
                                    nextEl: h,
                                    prevEl: f,
                                    scrollbarEl: m,
                                    paginationEl: v
                                } = e,
                                g = u.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e),
                                {
                                    params: w,
                                    pagination: b,
                                    navigation: y,
                                    scrollbar: S,
                                    virtual: T,
                                    thumbs: E
                                } = d;
                            u.includes("thumbs") && c.thumbs && c.thumbs.swiper && !c.thumbs.swiper.destroyed && w.thumbs && (!w.thumbs.swiper || w.thumbs.swiper.destroyed) && (t = !0), u.includes("controller") && c.controller && c.controller.control && w.controller && !w.controller.control && (i = !0), u.includes("pagination") && c.pagination && (c.pagination.el || v) && (w.pagination || !1 === w.pagination) && b && !b.el && (s = !0), u.includes("scrollbar") && c.scrollbar && (c.scrollbar.el || m) && (w.scrollbar || !1 === w.scrollbar) && S && !S.el && (r = !0), u.includes("navigation") && c.navigation && (c.navigation.prevEl || f) && (c.navigation.nextEl || h) && (w.navigation || !1 === w.navigation) && y && !y.prevEl && !y.nextEl && (a = !0);
                            let x = e => {
                                d[e] && (d[e].destroy(), "navigation" === e ? (d.isElement && (d[e].prevEl.remove(), d[e].nextEl.remove()), w[e].prevEl = void 0, w[e].nextEl = void 0, d[e].prevEl = void 0, d[e].nextEl = void 0) : (d.isElement && d[e].el.remove(), w[e].el = void 0, d[e].el = void 0))
                            };
                            u.includes("loop") && d.isElement && (w.loop && !c.loop ? l = !0 : !w.loop && c.loop ? n = !0 : o = !0), g.forEach(e => {
                                if (z(w[e]) && z(c[e])) Object.assign(w[e], c[e]), ("navigation" === e || "pagination" === e || "scrollbar" === e) && "enabled" in c[e] && !c[e].enabled && x(e);
                                else {
                                    let t = c[e];
                                    (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && x(e): w[e] = c[e]
                                }
                            }), g.includes("controller") && !i && d.controller && d.controller.control && w.controller && w.controller.control && (d.controller.control = w.controller.control), u.includes("children") && p && T && w.virtual.enabled ? (T.slides = p, T.update(!0)) : u.includes("virtual") && T && w.virtual.enabled && (p && (T.slides = p), T.update(!0)), u.includes("children") && p && w.loop && (o = !0), t && E.init() && E.update(!0), i && (d.controller.control = w.controller.control), s && (d.isElement && (!v || "string" == typeof v) && ((v = document.createElement("div")).classList.add("swiper-pagination"), v.part.add("pagination"), d.el.appendChild(v)), v && (w.pagination.el = v), b.init(), b.render(), b.update()), r && (d.isElement && (!m || "string" == typeof m) && ((m = document.createElement("div")).classList.add("swiper-scrollbar"), m.part.add("scrollbar"), d.el.appendChild(m)), m && (w.scrollbar.el = m), S.init(), S.updateSize(), S.setTranslate()), a && (d.isElement && (h && "string" != typeof h || ((h = document.createElement("div")).classList.add("swiper-button-next"), h.innerHTML = d.hostEl.constructor.nextButtonSvg, h.part.add("button-next"), d.el.appendChild(h)), f && "string" != typeof f || ((f = document.createElement("div")).classList.add("swiper-button-prev"), f.innerHTML = d.hostEl.constructor.prevButtonSvg, f.part.add("button-prev"), d.el.appendChild(f))), h && (w.navigation.nextEl = h), f && (w.navigation.prevEl = f), y.init(), y.update()), u.includes("allowSlideNext") && (d.allowSlideNext = c.allowSlideNext), u.includes("allowSlidePrev") && (d.allowSlidePrev = c.allowSlidePrev), u.includes("direction") && d.changeDirection(c.direction, !1), (l || o) && d.loopDestroy(), (n || o) && d.loopCreate(), d.update()
                        }({
                            swiper: b.current,
                            slides: _,
                            passedParams: P,
                            changedParams: e,
                            nextEl: T.current,
                            prevEl: E.current,
                            scrollbarEl: M.current,
                            paginationEl: x.current
                        }), () => {
                            U()
                        }
                    }), R(() => {
                        F(b.current)
                    }, [h]), l.createElement(r, j({
                        ref: w,
                        className: B(`${c}${s?` ${s}`:""}`)
                    }, k), l.createElement(q.Provider, {
                        value: b.current
                    }, H["container-start"], l.createElement(a, {
                        className: (void 0 === (i = C.wrapperClass) && (i = ""), i) ? i.includes("swiper-wrapper") ? i : `swiper-wrapper ${i}` : "swiper-wrapper"
                    }, H["wrapper-start"], C.virtual ? function(e, t, i) {
                        if (!i) return null;
                        let s = e => {
                                let i = e;
                                return e < 0 ? i = t.length + e : i >= t.length && (i -= t.length), i
                            },
                            r = e.isHorizontal() ? {
                                [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                            } : {
                                top: `${i.offset}px`
                            },
                            {
                                from: a,
                                to: n
                            } = i,
                            o = e.params.loop ? -t.length : 0,
                            d = e.params.loop ? 2 * t.length : t.length,
                            p = [];
                        for (let e = o; e < d; e += 1) e >= a && e <= n && p.push(t[s(e)]);
                        return p.map((t, i) => l.cloneElement(t, {
                            swiper: e,
                            style: r,
                            key: t.props.virtualIndex || t.key || `slide-${i}`
                        }))
                    }(b.current, _, h) : _.map((e, t) => l.cloneElement(e, {
                        swiper: b.current,
                        swiperSlideIndex: t
                    })), H["wrapper-end"]), N(C) && l.createElement(l.Fragment, null, l.createElement("div", {
                        ref: E,
                        className: "swiper-button-prev"
                    }), l.createElement("div", {
                        ref: T,
                        className: "swiper-button-next"
                    })), V(C) && l.createElement("div", {
                        ref: M,
                        className: "swiper-scrollbar"
                    }), G(C) && l.createElement("div", {
                        ref: x,
                        className: "swiper-pagination"
                    }), H["container-end"]))
                });
            W.displayName = "Swiper";
            let Y = (0, l.forwardRef)(function(e, t) {
                let {
                    tag: i = "div",
                    children: s,
                    className: r = "",
                    swiper: a,
                    zoom: n,
                    lazy: o,
                    virtualIndex: d,
                    swiperSlideIndex: p,
                    ...c
                } = void 0 === e ? {} : e, u = (0, l.useRef)(null), [h, f] = (0, l.useState)("swiper-slide"), [m, v] = (0, l.useState)(!1);

                function g(e, t, i) {
                    t === u.current && f(i)
                }
                R(() => {
                    if (void 0 !== p && (u.current.swiperSlideIndex = p), t && (t.current = u.current), u.current && a) {
                        if (a.destroyed) {
                            "swiper-slide" !== h && f("swiper-slide");
                            return
                        }
                        return a.on("_slideClass", g), () => {
                            a && a.off("_slideClass", g)
                        }
                    }
                }), R(() => {
                    a && u.current && !a.destroyed && f(a.getSlideClasses(u.current))
                }, [a]);
                let w = {
                        isActive: h.indexOf("swiper-slide-active") >= 0,
                        isVisible: h.indexOf("swiper-slide-visible") >= 0,
                        isPrev: h.indexOf("swiper-slide-prev") >= 0,
                        isNext: h.indexOf("swiper-slide-next") >= 0
                    },
                    b = () => "function" == typeof s ? s(w) : s;
                return l.createElement(i, j({
                    ref: u,
                    className: B(`${h}${r?` ${r}`:""}`),
                    "data-swiper-slide-index": d,
                    onLoad: () => {
                        v(!0)
                    }
                }, c), n && l.createElement(H.Provider, {
                    value: w
                }, l.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof n ? n : void 0
                }, b(), o && !m && l.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !n && l.createElement(H.Provider, {
                    value: w
                }, b(), o && !m && l.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            });
            Y.displayName = "SwiperSlide"
        }
    }
]);