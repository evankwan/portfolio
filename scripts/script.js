import app from "./framework/app.js";
import { navLinks } from "./navLinks.js";
var config = {
    state: {},
    elements: {
        $navbar: "navbar",
        $hamburgerToggler: "hamburger-toggler",
        $hamburger: "hamburger",
        $navLinksContainer: "nav-links-container"
    },
    methods: {
        initColorScheme: function () {
            var _a;
            if ((_a = window.matchMedia('(prefers-color-scheme: light)')) === null || _a === void 0 ? void 0 : _a.matches) {
                document.body.classList.add('theme-light');
                document.body.classList.remove('theme-dark');
            }
            else {
                document.body.classList.add('theme-dark');
                document.body.classList.remove('theme-light');
            }
        },
        addNavLinks: function () {
            app.$navLinksContainer.innerHTML = navLinks.reduce(function (temp, link) { return "\n        ".concat(temp, "\n        <li>\n          <button id=\"nav-link-").concat(link.id, "\">\n            ").concat(link.text, "\n          </button>\n        </li>\n      "); }, "");
            navLinks.forEach(function (link) {
                var button = document.getElementById("nav-link-".concat(link.id));
                button === null || button === void 0 ? void 0 : button.addEventListener("click", function (e) {
                    link.onClick(e);
                });
            });
        }
    },
    onMounted: function () {
        app.initColorScheme();
        app.addNavLinks();
    },
    watch: {
        $hamburgerToggler: {
            on: "click",
            cb: function () {
                app.$navbar.classList.toggle("toggled");
                app.$hamburger.classList.toggle("toggled-hamburger");
            },
        },
    },
};
app.mount(config);
