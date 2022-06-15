const { createProxyMiddleware } = require('http-proxy-middleware');

// 修改了proxy之后需要重启服务器，代理才会生效
module.exports = function (app) {
  app.use(
    '/ajax',
    createProxyMiddleware({
      target: 'https://i.maoyan.com',
      changeOrigin: true,
    })
  );
};