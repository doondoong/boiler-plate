const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",

        createProxyMiddleware({
            target: "https://myboiler-plate.herokuapp.com:5000",

            changeOrigin: true,
        })
    );
};
