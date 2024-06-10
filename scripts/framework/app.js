var app = {
    initializeMethods: function (methods) {
        Object.keys(methods).forEach(function (fn) {
            app[fn] = methods[fn];
        });
    },
    initializeSelectors: function (elements) {
        Object.keys(elements).forEach(function (el) {
            app[el] = document.getElementById(elements[el]);
        });
    },
    addWatchers: function (watchers) {
        Object.keys(watchers).forEach(function (el) {
            app === null || app === void 0 ? void 0 : app[el].addEventListener(watchers[el].on, watchers[el].cb);
        });
    },
    mount: function (_a) {
        var elements = _a.elements, methods = _a.methods, onMounted = _a.onMounted, watch = _a.watch;
        app.initializeSelectors(elements);
        app.initializeMethods(methods);
        app.addWatchers(watch);
        onMounted();
    },
};
export default app;
