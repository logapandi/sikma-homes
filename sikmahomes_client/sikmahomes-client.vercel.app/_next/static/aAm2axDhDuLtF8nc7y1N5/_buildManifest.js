self.__BUILD_MANIFEST = function(s, a, e, t, c, r) {
    return {
        __rewrites: {
            afterFiles: [],
            beforeFiles: [],
            fallback: []
        },
        __routerFilterStatic: {
            numItems: 0,
            errorRate: 1e-4,
            numBits: 0,
            numHashes: null,
            bitArray: []
        },
        __routerFilterDynamic: {
            numItems: 0,
            errorRate: 1e-4,
            numBits: a,
            numHashes: null,
            bitArray: []
        },
        "/": [s, c, "static/css/fb75a3f345cd397e.css", "static/chunks/pages/index-3b081f89c4fe6260.js"],
        "/_error": ["static/chunks/pages/_error-fde50cb7f1ab27e0.js"],
        "/about": ["static/chunks/pages/about-1feb6a830573275c.js"],
        "/blogs": [s, r, "static/chunks/pages/blogs-9ab3dcbd263ab54e.js"],
        "/blogs/[slug]": [s, "static/chunks/pages/blogs/[slug]-37cf10cac0d13f05.js"],
        "/contact": [s, "static/chunks/pages/contact-1f27ae23fd9f4b57.js"],
        "/project-detail/[name]": [s, c, "static/css/2e7962017a89c95d.css", "static/chunks/pages/project-detail/[name]-1f1208ffd23f23bb.js"],
        "/project-list/[queries]": [s, r, "static/chunks/pages/project-list/[queries]-e2ed98d9e8c59a4e.js"],
        sortedPages: ["/", "/_app", "/_error", "/about", "/blogs", "/blogs/[slug]", "/contact", "/project-detail/[name]", "/project-list/[queries]"]
    }
}("static/chunks/110-79edca6a3c5fa1d3.js", 0, 0, 0, "static/chunks/841-7d5a7cd8c758b18c.js", "static/chunks/638-9f9a1c866c89bbf1.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();