(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [332], {
        3792: (e, s, l) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return l(7632)
            }])
        },
        2208: (e, s, l) => {
            "use strict";
            l.d(s, {
                A: () => a
            });
            let a = {
                src: "/_next/static/media/alt-image.d1300b3e.jpg",
                height: 3689,
                width: 8064,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAACgAn//xAAbEAADAAIDAAAAAAAAAAAAAAABAgMABBIUIf/aAAgBAQABPwCK0GwtOxYtzB9bP//EABYRAAMAAAAAAAAAAAAAAAAAAAABQf/aAAgBAgEBPwBw/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Aj//Z",
                blurWidth: 8,
                blurHeight: 4
            }
        },
        4777: (e, s, l) => {
            "use strict";
            l.d(s, {
                A: () => d
            });
            var a = l(4848),
                t = l(1106),
                r = l.n(t),
                i = l(9965),
                n = l.n(i),
                c = l(5228);
            let d = e => {
                let {
                    blog: s
                } = e;
                return (0, a.jsxs)(r(), {
                    href: "/blogs/".concat(null == s ? void 0 : s.slug, "?id=").concat(null == s ? void 0 : s._id),
                    className: "rounded-lg flex flex-col h-[400px] relative",
                    children: [(0, a.jsx)("div", {
                        className: "relative",
                        children: (0, a.jsx)("div", {
                            className: "!h-[250px] overflow-hidden rounded-lg",
                            children: (0, a.jsx)(n(), {
                                src: (null == s ? void 0 : s.image) || altImage,
                                alt: null == s ? void 0 : s.name,
                                width: 250,
                                height: 250,
                                layout: "responsive",
                                className: "!h-[250px] rounded-lg hover:scale-105"
                            })
                        })
                    }), (0, a.jsxs)("div", {
                        className: "flex py-2 gap-4 flex-col justify-between ",
                        children: [(0, a.jsxs)("p", {
                            className: "text-xs text-zinc-600",
                            children: ["Posted On: ", (0, c.Yq)(s.createdAt)]
                        }), (0, a.jsx)("p", {
                            className: "font-semibold text-lg",
                            children: null == s ? void 0 : s.title
                        }), (0, a.jsx)("p", {
                            className: "text-xs text-zinc-600",
                            children: null == s ? void 0 : s.description
                        })]
                    })]
                })
            }
        },
        9622: (e, s, l) => {
            "use strict";
            l.d(s, {
                A: () => o
            });
            var a = l(4848),
                t = l(1106),
                r = l.n(t),
                i = l(9965),
                n = l.n(i),
                c = l(2208),
                d = l(5228);
            let o = e => {
                let {
                    project: s
                } = e;
                return (0, a.jsxs)(r(), {
                    href: "/project-detail/".concat(null == s ? void 0 : s.name.toLowerCase().split(" ").join("-"), "?id=").concat(null == s ? void 0 : s._id),
                    className: "rounded-lg flex flex-col relative overflow-hidden shadow-md h-full",
                    children: [(0, a.jsxs)("div", {
                        className: "relative",
                        children: [(0, a.jsx)("div", {
                            className: "!h-[250px] overflow-hidden rounded-lg",
                            children: (0, a.jsx)(n(), {
                                src: (null == s ? void 0 : s.images[0]) || c.A,
                                alt: null == s ? void 0 : s.name,
                                width: 250,
                                height: 250,
                                layout: "responsive",
                                className: "!h-[250px] rounded-lg hover:scale-105"
                            })
                        }), (0, a.jsxs)("div", {
                            className: "absolute top-5 left-5 text-xs flex items-center gap-3 ",
                            children: [(0, a.jsxs)("span", {
                                className: "bg-white text-primary rounded-full px-3 py-1 gap-2 flex items-center",
                                children: [(0, a.jsx)("i", {
                                    className: "fi fi-rr-camera"
                                }), " ", s.images.length]
                            }), s.featured && (0, a.jsx)("span", {
                                className: "bg-primary rounded-full text-white px-3 py-1",
                                children: "Featured"
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "flex py-2 gap-2 flex-col justify-between px-2",
                        children: [(0, a.jsx)("p", {
                            className: "font-semibold",
                            children: null == s ? void 0 : s.name
                        }), (0, a.jsxs)("div", {
                            className: "flex gap-1 items-center text-xs",
                            children: [(0, a.jsx)("i", {
                                className: "fi fi-rr-marker"
                            }), null == s ? void 0 : s.address]
                        }), (0, a.jsx)("p", {
                            className: "text-xs text-zinc-600",
                            children: (0, d.bA)(null == s ? void 0 : s.description)
                        }), (0, a.jsxs)("p", {
                            className: "text-sm",
                            children: ["₹", (0, d.sF)(null == s ? void 0 : s.startingPrice), " Onwards"]
                        }), (null == s ? void 0 : s.launchedOn) && (0, a.jsxs)("p", {
                            className: "text-xs",
                            children: ["Launched On: ", (0, d.Yq)(null == s ? void 0 : s.launchedOn)]
                        })]
                    })]
                })
            }
        },
        323: (e, s, l) => {
            "use strict";
            l.d(s, {
                A: () => n
            });
            var a = l(4848),
                t = l(6874);
            l(9690);
            var r = l(3914),
                i = l(9622);
            let n = e => {
                let {
                    projects: s
                } = e;
                return (0, a.jsx)(t.RC, {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    modules: [r.Ij],
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: !1
                    },
                    className: "mySwiper w-full",
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    },
                    children: s.map(e => (0, a.jsx)(t.qr, {
                        children: (0, a.jsx)(i.A, {
                            project: e
                        })
                    }, e.projectId))
                })
            }
        },
        7632: (e, s, l) => {
            "use strict";
            l.r(s), l.d(s, {
                default: () => B
            });
            var a = l(4848),
                t = l(6540),
                r = l(6874);
            l(9690), l(6180);
            var i = l(3914),
                n = l(9965),
                c = l.n(n),
                d = l(6450),
                o = l(7471),
                x = l(9410);

            function m() {
                let [e, s] = (0, t.useState)([]), {
                    getBanners: l
                } = (0, x.A)(), n = async () => {
                    let e = await l();
                    e.success && s(e.data)
                };
                return (0, t.useEffect)(() => {
                    n()
                }, []), (0, a.jsxs)("section", {
                    className: "w-full relative",
                    children: [(0, a.jsx)(r.RC, {
                        effect: "fade",
                        modules: [i._R],
                        className: "mySwiper",
                        loop: !0,
                        children: e.map((e, s) => (0, a.jsx)(r.qr, {
                            className: "overflow-hidden",
                            children: (0, a.jsx)("div", {
                                className: "w-full h-screen",
                                style: {
                                    position: "relative",
                                    height: "100vh"
                                },
                                children: (0, a.jsx)(c(), {
                                    src: null == e ? void 0 : e.image,
                                    alt: null == e ? void 0 : e.name,
                                    layout: "fill",
                                    className: "object-cover"
                                })
                            })
                        }, s))
                    }), (0, a.jsx)("div", {
                        className: "page-container absolute top-[15%] md:top-[25%] flex justify-end lg:right-[10%] z-10",
                        children: (0, a.jsx)(o.A, {})
                    }), (0, a.jsx)("div", {
                        className: "absolute -bottom-12 z-10 w-full",
                        children: (0, a.jsx)(d.A, {})
                    })]
                })
            }
            var u = l(5451);
            let p = {
                    src: "/_next/static/media/hang-home.106b3959.webp",
                    height: 2848,
                    width: 4288,
                    blurDataURL: "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAUAAkA4JZwC7AD0h/pcAP72+eqlRNjQ39IGBAOX6rT0Dzqll0hJhd+2AAAA",
                    blurWidth: 8,
                    blurHeight: 5
                },
                h = {
                    src: "/_next/static/media/house-model.d2a2cd2f.webp",
                    height: 3575,
                    width: 5363,
                    blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAAAQAgCdASoIAAUAAkA4JYwCdH8AFcQfYFoAAPjl+I8zYdewXgp+7P8dNd74F/snFzvsiwm9ibvrDCEFI7ozn31TWAAAAA==",
                    blurWidth: 8,
                    blurHeight: 5
                };
            var f = l(6196);
            let A = () => {
                let {
                    settings: e
                } = (0, f.A)(), {
                    getProjects: s
                } = (0, x.A)(), [l, r] = (0, t.useState)(0);
                (0, t.useEffect)(() => {
                    (async () => {
                        let e = await s({
                            status: "completed"
                        });
                        e.success && r(e.count)
                    })()
                }, []);
                let i = [{
                    key: "clientsServed",
                    title: "Served Clients",
                    value: null == e ? void 0 : e.clientsServed,
                    icon: (0, a.jsx)("i", {
                        className: "fi fi-rr-hr-group"
                    }),
                    color: "#faedcd"
                }, {
                    key: "totalStaffs",
                    title: "Staff Members",
                    value: null == e ? void 0 : e.totalStaffs,
                    icon: (0, a.jsx)("i", {
                        className: "fi fi-rr-users-alt"
                    }),
                    color: "#d9eee9"
                }, {
                    key: "location",
                    title: "Locations",
                    value: "10+",
                    icon: (0, a.jsx)("i", {
                        className: "fi fi-rr-marker"
                    }),
                    color: "#d9e9f9"
                }, {
                    key: "project",
                    title: "Completed Projects",
                    value: l,
                    icon: (0, a.jsx)("i", {
                        className: "fi fi-rr-blueprint"
                    }),
                    color: "#eadffa"
                }];
                return (0, a.jsxs)("div", {
                    className: "page-container flex justify-center flex-col mt-5 gap-8 py-10",
                    children: [(0, a.jsxs)("h2", {
                        className: "text-5xl",
                        children: ["Where hospitality meets ", (0, a.jsx)("br", {}), " your dreams"]
                    }), (0, a.jsx)("p", {
                        className: "w-2/3 text-slate-600",
                        children: "At RealHomes, we believe in the power of exceptional experiences. With a passion for hospitality, we strive to create moments that linger in your heart long after your stay."
                    }), (0, a.jsx)(u.A, {
                        className: "rounded-lg w-32 text-white",
                        children: "Know More"
                    }), (0, a.jsxs)("div", {
                        className: "flex gap-5 max-md:flex-col",
                        children: [(0, a.jsx)(c(), {
                            src: h,
                            alt: "house model",
                            className: "w-full aspect-[2/1] md:w-1/2 rounded-3xl hover:-translate-y-1 duration-100 cursor-pointer object-cover"
                        }), (0, a.jsx)(c(), {
                            src: p,
                            alt: "house home",
                            className: "w-full aspect-[2/1] md:w-1/2 rounded-3xl hover:-translate-y-1 duration-100 cursor-pointer object-cover"
                        })]
                    }), (0, a.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2",
                        children: i.map(e => {
                            let {
                                title: s,
                                value: l,
                                icon: t,
                                color: r,
                                key: i
                            } = e;
                            return (0, a.jsxs)("div", {
                                className: "flex p-5 justify-start gap-5 rounded-lg hover:-translate-y-1 duration-100 cursor-pointer",
                                style: {
                                    background: r
                                },
                                children: [(0, a.jsx)("span", {
                                    className: "w-16 aspect-square flex justify-center items-center rounded-full bg-white",
                                    children: t
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-col justify-center",
                                    children: [(0, a.jsx)("p", {
                                        className: "text-2xl",
                                        children: l
                                    }), (0, a.jsx)("p", {
                                        className: "text-sm",
                                        children: s
                                    })]
                                })]
                            }, i)
                        })
                    })]
                })
            };
            var j = l(323);
            let g = () => {
                let [e, s] = (0, t.useState)([]), {
                    getProjects: l
                } = (0, x.A)(), r = async () => {
                    let e = await l();
                    e.success && s(e.data)
                };
                return (0, t.useEffect)(() => {
                    r()
                }, []), (0, a.jsxs)("section", {
                    className: "page-container flex flex-col gap-10",
                    children: [(0, a.jsxs)("div", {
                        className: "",
                        children: [(0, a.jsx)("h4", {
                            className: "text-3xl",
                            children: "Discover Latest Projects"
                        }), (0, a.jsx)("p", {
                            className: "text-sm text-zinc-600",
                            children: "Newest Properties Around You"
                        })]
                    }), (0, a.jsx)(j.A, {
                        projects: e
                    })]
                })
            };
            var w = l(1106),
                v = l.n(w),
                N = l(2208),
                b = l(5228);
            let y = e => {
                    var s;
                    let {
                        project: l
                    } = e;
                    return (0, a.jsxs)(v(), {
                        href: "/project-detail/".concat(null == l ? void 0 : l.name.toLowerCase().split(" ").join("-"), "?id=").concat(null == l ? void 0 : l._id),
                        className: "rounded-lg flex flex-col relative overflow-hidden group",
                        children: [(0, a.jsxs)("div", {
                            className: "relative h-full",
                            children: [(0, a.jsx)(c(), {
                                src: null !== (s = l.images[0]) && void 0 !== s ? s : N.A,
                                alt: l.name,
                                width: 250,
                                height: 250,
                                layout: "responsive",
                                className: "rounded-lg min-h-[400px] lg:!min-h-[600px] object-cover h-full"
                            }), (0, a.jsxs)("div", {
                                className: "absolute top-5 left-5 text-xs flex items-center gap-3",
                                children: [(0, a.jsxs)("span", {
                                    className: "bg-white text-primary rounded-full px-3 py-1 gap-2 flex items-center",
                                    children: [(0, a.jsx)("i", {
                                        className: "fi fi-rr-camera"
                                    }), " ", l.images.length]
                                }), l.featured && (0, a.jsx)("span", {
                                    className: "bg-primary rounded-full text-white px-3 py-1",
                                    children: "Featured"
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "absolute flex justify-start bottom-0 sm:bottom-20 w-full group-hover:scale-105",
                            children: (0, a.jsxs)("div", {
                                className: "flex py-2 gap-2 flex-col justify-between max-w-md bg-white bg-opacity-50 p-10 rounded-lg backdrop-blur-sm w-[90%] max-sm:mx-auto sm:ml-20",
                                children: [(0, a.jsx)("p", {
                                    className: "font-semibold",
                                    children: null == l ? void 0 : l.name
                                }), (0, a.jsxs)("p", {
                                    href: "/blogs",
                                    className: "flex gap-1 items-center text-xs",
                                    children: [(0, a.jsx)("i", {
                                        className: "fi fi-rr-marker"
                                    }), null == l ? void 0 : l.address]
                                }), (0, a.jsx)("p", {
                                    className: "text-xs text-zinc-600",
                                    children: (0, b.bA)(null == l ? void 0 : l.description)
                                }), (0, a.jsxs)("p", {
                                    className: "text-sm",
                                    children: ["₹", (0, b.sF)(null == l ? void 0 : l.startingPrice), " Onwards"]
                                }), (null == l ? void 0 : l.launchedOn) && (0, a.jsxs)("p", {
                                    className: "text-xs",
                                    children: ["Launched On: ", (0, b.Yq)(null == l ? void 0 : l.launchedOn)]
                                })]
                            })
                        })]
                    })
                },
                C = () => {
                    let [e, s] = (0, t.useState)([]), {
                        getProjects: l
                    } = (0, x.A)(), n = async () => {
                        let e = await l();
                        e.success && s(e.data)
                    };
                    return (0, t.useEffect)(() => {
                        n()
                    }, []), (0, a.jsx)("section", {
                        className: " bg-secondary py-20 ",
                        children: (0, a.jsxs)("div", {
                            className: "page-container flex flex-col gap-10",
                            children: [(0, a.jsxs)("div", {
                                className: "w-full flex gap-2 flex-col lg:w-1/2",
                                children: [(0, a.jsx)("h4", {
                                    className: "text-5xl",
                                    children: "Immerse yourself in our featured Projects"
                                }), (0, a.jsx)("p", {
                                    className: "text-sm text-zinc-600",
                                    children: "Experience a dream like no other as you immerse yourself in our featured projects, carefully crafted to provide the perfect blend of comfort and luxury."
                                })]
                            }), (0, a.jsx)(r.RC, {
                                slidesPerView: "auto",
                                spaceBetween: 30,
                                modules: [i.Ij],
                                className: "mySwiper w-full",
                                children: e.map(e => (0, a.jsx)(r.qr, {
                                    className: "!w-full md:!w-3/4",
                                    children: (0, a.jsx)(y, {
                                        project: e
                                    }, e.projectId)
                                }, e.projectId))
                            })]
                        })
                    })
                };
            var k = l(4777);
            let z = () => {
                let [e, s] = (0, t.useState)([]), {
                    getBlogs: l
                } = (0, x.A)(), i = async () => {
                    let e = await l();
                    e.success && s(e.data)
                };
                return (0, t.useEffect)(() => {
                    i()
                }, []), (0, a.jsxs)("section", {
                    className: "page-container flex flex-col gap-10",
                    children: [(0, a.jsxs)("div", {
                        className: "flex justify-between w-full",
                        children: [(0, a.jsxs)("div", {
                            className: "",
                            children: [(0, a.jsx)("h4", {
                                className: "text-3xl",
                                children: "Latest News & Update"
                            }), (0, a.jsx)("p", {
                                className: "text-sm text-zinc-600",
                                children: "Latest News About Real Estate"
                            })]
                        }), (0, a.jsx)(u.A, {
                            className: "sm:px-10 ",
                            children: (0, a.jsxs)(v(), {
                                href: "/blogs",
                                className: "flex items-center gap-2",
                                children: [(0, a.jsx)("span", {
                                    className: "max-sm:hidden",
                                    children: "Explore"
                                }), " ", (0, a.jsx)("i", {
                                    className: "fi fi-rr-arrow-small-right text-lg pt-2"
                                })]
                            })
                        })]
                    }), (0, a.jsx)(r.RC, {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        className: "mySwiper w-full",
                        breakpoints: {
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        },
                        children: e.map(e => (0, a.jsx)(r.qr, {
                            children: (0, a.jsx)(k.A, {
                                blog: e
                            }, null == e ? void 0 : e._id)
                        }, null == e ? void 0 : e._id))
                    })]
                })
            };
            var P = l(3368),
                I = l.n(P);

            function B() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(I(), {
                        children: [(0, a.jsx)("title", {
                            children: "Sikma Homes | Creating the space you deserve"
                        }), (0, a.jsx)("meta", {
                            name: "description",
                            content: "Explore real estate projects related to your wish. View project details, locations, and more."
                        })]
                    }), (0, a.jsxs)("main", {
                        className: "relative bg-white text-black flex flex-col gap-20 pb-20",
                        children: [(0, a.jsx)(m, {}), (0, a.jsx)(A, {}), (0, a.jsx)(g, {}), (0, a.jsx)(C, {}), (0, a.jsx)(z, {})]
                    })]
                })
            }
        },
        6450: (e, s, l) => {
            "use strict";
            l.d(s, {
                A: () => b
            });
            var a = l(4848),
                t = l(5451),
                r = l(6540),
                i = l(9916),
                n = l(9664),
                c = l(3877),
                d = l(8404),
                o = l(9751);
            let x = i.bL,
                m = i.YJ,
                u = i.WT,
                p = r.forwardRef((e, s) => {
                    let {
                        className: l,
                        children: t,
                        ...r
                    } = e;
                    return (0, a.jsxs)(i.l9, {
                        ref: s,
                        className: (0, o.cn)("flex h-10 w-full items-center justify-between rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300", l),
                        ...r,
                        children: [t, (0, a.jsx)(i.In, {
                            asChild: !0,
                            children: (0, a.jsx)(n.A, {
                                className: "h-4 w-4 opacity-50"
                            })
                        })]
                    })
                });
            p.displayName = i.l9.displayName;
            let h = r.forwardRef((e, s) => {
                let {
                    className: l,
                    ...t
                } = e;
                return (0, a.jsx)(i.PP, {
                    ref: s,
                    className: (0, o.cn)("flex cursor-default items-center justify-center py-1", l),
                    ...t,
                    children: (0, a.jsx)(c.A, {
                        className: "h-4 w-4"
                    })
                })
            });
            h.displayName = i.PP.displayName;
            let f = r.forwardRef((e, s) => {
                let {
                    className: l,
                    ...t
                } = e;
                return (0, a.jsx)(i.wn, {
                    ref: s,
                    className: (0, o.cn)("flex cursor-default items-center justify-center py-1", l),
                    ...t,
                    children: (0, a.jsx)(n.A, {
                        className: "h-4 w-4"
                    })
                })
            });
            f.displayName = i.wn.displayName;
            let A = r.forwardRef((e, s) => {
                let {
                    className: l,
                    children: t,
                    position: r = "popper",
                    ...n
                } = e;
                return (0, a.jsx)(i.ZL, {
                    children: (0, a.jsxs)(i.UC, {
                        ref: s,
                        className: (0, o.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white text-zinc-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50", "popper" === r && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", l),
                        position: r,
                        ...n,
                        children: [(0, a.jsx)(h, {}), (0, a.jsx)(i.LM, {
                            className: (0, o.cn)("p-1", "popper" === r && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                            children: t
                        }), (0, a.jsx)(f, {})]
                    })
                })
            });
            A.displayName = i.UC.displayName;
            let j = r.forwardRef((e, s) => {
                let {
                    className: l,
                    ...t
                } = e;
                return (0, a.jsx)(i.JU, {
                    ref: s,
                    className: (0, o.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", l),
                    ...t
                })
            });
            j.displayName = i.JU.displayName;
            let g = r.forwardRef((e, s) => {
                let {
                    className: l,
                    children: t,
                    ...r
                } = e;
                return (0, a.jsxs)(i.q7, {
                    ref: s,
                    className: (0, o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50", l),
                    ...r,
                    children: [(0, a.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, a.jsx)(i.VF, {
                            children: (0, a.jsx)(d.A, {
                                className: "h-4 w-4"
                            })
                        })
                    }), (0, a.jsx)(i.p4, {
                        children: t
                    })]
                })
            });

            function w(e) {
                let {
                    options: s,
                    placeholder: l,
                    value: t,
                    onChange: r,
                    label: i,
                    icon: n,
                    className: c = ""
                } = e, d = n ? (0, a.jsxs)("p", {
                    className: "flex items-center gap-3",
                    children: [n, l]
                }) : l;
                return (0, a.jsxs)(x, {
                    value: t,
                    onValueChange: r,
                    children: [(0, a.jsx)(p, {
                        className: "".concat(c, " bg-white rounded-lg text-black border-none focus:ring-none focus:ring-offset-0 py-5"),
                        children: (0, a.jsx)(u, {
                            placeholder: d
                        })
                    }), (0, a.jsx)(A, {
                        children: (0, a.jsxs)(m, {
                            children: [(0, a.jsx)(j, {
                                children: i
                            }), s.map(e => (0, a.jsx)(g, {
                                value: e.value,
                                children: e.label
                            }, e.value))]
                        })
                    })]
                })
            }
            g.displayName = i.q7.displayName, r.forwardRef((e, s) => {
                let {
                    className: l,
                    ...t
                } = e;
                return (0, a.jsx)(i.wv, {
                    ref: s,
                    className: (0, o.cn)("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800", l),
                    ...t
                })
            }).displayName = i.wv.displayName;
            var v = l(1106),
                N = l.n(v);
            let b = e => {
                let {
                    query: s
                } = e, [l, i] = (0, r.useState)(null != s ? s : {}), n = (e, s) => {
                    i(l => ({ ...l,
                        [e]: s
                    }))
                };
                return (0, a.jsxs)("div", {
                    className: "w-full lg:w-4/5 mx-auto flex items-center py-4 border bottom-1 bg-white xl:gap-5 flex-wrap rounded-lg px-5",
                    children: [(0, a.jsxs)("div", {
                        className: "w-full md:w-[50%] xl:w-1/4 border-r-2 flex items-center ",
                        children: [(0, a.jsx)("i", {
                            className: "fi fi-rr-marker text-lg"
                        }), (0, a.jsx)(w, {
                            options: [{
                                label: "Coimbatore",
                                value: "coimbatore"
                            }, {
                                label: "Tirupur",
                                value: "tirupur"
                            }],
                            placeholder: "Where You want?",
                            value: null == l ? void 0 : l.location,
                            onChange: e => n("location", e),
                            name: "location",
                            label: "Location"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "w-full md:w-[50%] xl:w-1/4 border-r-2 flex items-center ",
                        children: [(0, a.jsx)("i", {
                            className: "fi fi-rr-building text-lg"
                        }), (0, a.jsx)(w, {
                            options: [{
                                label: "Plot",
                                value: "plot"
                            }, {
                                label: "Villa",
                                value: "villa"
                            }, {
                                label: "Apartment",
                                value: "apartment"
                            }],
                            placeholder: "What You want?",
                            value: null == l ? void 0 : l.type,
                            onChange: e => n("type", e),
                            name: "type",
                            label: "Property Type"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "w-full xl:w-1/4 flex items-center",
                        children: [(0, a.jsx)("i", {
                            className: "fi fi-rr-completed text-lg"
                        }), (0, a.jsx)(w, {
                            options: [{
                                label: "OnGoing Project",
                                value: "ongoing"
                            }, {
                                label: "Completed Project",
                                value: "completed"
                            }, {
                                label: "Upcoming Project",
                                value: "upcoming"
                            }],
                            placeholder: "Status?",
                            value: null == l ? void 0 : l.status,
                            onChange: e => n("status", e),
                            label: "Status",
                            name: "status"
                        })]
                    }), (0, a.jsx)(N(), {
                        href: "/project-list/".concat(Object.entries(l).map(e => {
                            let [s, l] = e;
                            return "".concat(s, "_").concat(l)
                        }).join("-")),
                        className: "w-full  xl:w-1/6",
                        target: "_blank",
                        children: (0, a.jsx)(t.A, {
                            className: "w-full py-2 rounded-lg",
                            children: "Search"
                        })
                    })]
                })
            }
        },
        5228: (e, s, l) => {
            "use strict";
            l.d(s, {
                Yq: () => r,
                ZH: () => t,
                bA: () => a,
                sF: () => i
            });
            let a = e => e.length <= 150 ? e : e.slice(0, 140).trim() + "...",
                t = e => null == e ? void 0 : e.toLowerCase().split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" "),
                r = e => {
                    let s = new Date(e);
                    return "".concat(s.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit"
                    }))
                };

            function i(e) {
                return e >= 1e7 ? "".concat((e / 1e7).toFixed(1), " Cr") : e >= 1e5 ? "".concat((e / 1e5).toFixed(1), " L") : e >= 1e3 ? "".concat((e / 1e3).toFixed(1), " K") : null == e ? void 0 : e.toString()
            }
        },
        6180: () => {}
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [110, 841, 636, 593, 792], () => s(3792)), _N_E = e.O()
    }
]);