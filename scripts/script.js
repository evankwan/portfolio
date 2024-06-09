var app = {};
app.init = function () {
    app.initColorScheme();
    app.initializeSelectors();
    app.initializeEventListeners();
};
app.initColorScheme = function () {
    var _a;
    if ((_a = window.matchMedia('(prefers-color-scheme: light)')) === null || _a === void 0 ? void 0 : _a.matches) {
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark');
    }
    else {
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
    }
};
app.initializeSelectors = function () {
    app.$navbar = document.getElementById("navbar");
    app.$hamburgerToggler = document.getElementById("hamburger-toggler");
    app.$hamburger = document.getElementById("hamburger");
};
app.initializeEventListeners = function () {
    app.$hamburgerToggler.addEventListener("click", function () {
        app.$navbar.classList.toggle("toggled");
        app.$hamburger.classList.toggle("toggled-hamburger");
    });
};
app.init();
