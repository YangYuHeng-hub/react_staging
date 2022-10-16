const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware(
            '/api1', //只有/api开头的请求，才转发给后端服务器
            {
            target: 'http://localhost:5000', //转发给谁
            changeOrigin: true, //控制服务器接受到的请求头中host字段的值，去掉这行，请求来自于localhost:3000，加上，请求来自localhost:5000
            pathRewrite: {'^/api1':''}, //重写路径(目的是去掉api前缀)
        }),
        createProxyMiddleware(
            '/api2', //只有/api开头的请求，才转发给后端服务器
            {
            target: 'http://localhost:5001', //转发给谁
            changeOrigin: true, //控制服务器接受到的请求头中host字段的值，去掉这行，请求来自于localhost:3000，加上，请求来自localhost:5000
            pathRewrite: {'^/api2':''}, //重写路径(目的是去掉api前缀)
        })
    );
};