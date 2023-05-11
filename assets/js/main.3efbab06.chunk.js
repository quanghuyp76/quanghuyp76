(this.webpackJsonpreactjs = this.webpackJsonpreactjs || []).push([
    [0], {
        16: function(e, t, c) {},
        28: function(e, t, c) {
            "use strict";
            c.r(t);
            var s = c(1),
                n = c.n(s),
                a = c(8),
                i = c.n(a),
                l = c(5),
                o = c.n(l),
                r = c(9),
                j = c(2),
                d = (c(16), c(0)),
                h = function(e) {
                    var t = e.preloader;
                    return Object(d.jsx)("div", {
                        className: "preloader",
                        style: t ? {
                            display: "block"
                        } : {
                            display: "none"
                        },
                        children: Object(d.jsxs)("div", {
                            className: "preloader__wrap",
                            children: [Object(d.jsxs)("div", {
                                className: "circle-pulse",
                                children: [Object(d.jsx)("div", {
                                    className: "circle-pulse__1"
                                }), Object(d.jsx)("div", {
                                    className: "circle-pulse__2"
                                })]
                            }), Object(d.jsx)("div", {
                                className: "preloader__progress",
                                children: Object(d.jsx)("span", {})
                            })]
                        })
                    })
                },
                b = c(10),
                m = c.n(b),
             var g = function() {
                    var e = Object(s.useState)(!0),
                        t = Object(j.a)(e, 2),
                        c = t[0],
                        n = t[1],
                        a = Object(s.useState)(null),
                        i = Object(j.a)(a, 2),
                        l = i[0],
                        b = i[1],
                        m = Object(s.useState)([]),
                        g = Object(j.a)(m, 2),
                        O = g[0],
                        p = g[1],
                        u = function() {
                            var e = Object(r.a)(o.a.mark((function e() {
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, fetch("https://api.ipify.org?format=json").then((function(e) {
                                                return e.json()
                                         }), Object(d.jsxs)("footer", {
                                            className: "footer",
                                            children: ["IP truy cập : ", l]
                                        })]
                                    })
                                })]
                            })]
                        }), Object(d.jsx)("div", {
                            className: "back-to-top"
                        })]
                    })
                },
                O = function(e) {
                    e && e instanceof Function && c.e(3).then(c.bind(null, 29)).then((function(t) {
                        var c = t.getCLS,
                            s = t.getFID,
                            n = t.getFCP,
                            a = t.getLCP,
                            i = t.getTTFB;
                        c(e), s(e), n(e), a(e), i(e)
                    }))
                };
            i.a.render(Object(d.jsx)(n.a.StrictMode, {
                children: Object(d.jsx)(g, {})
            }), document.getElementById("root")), O()
        }
    },
    [
        [28, 1, 2]
    ]
]);
