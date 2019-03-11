const httpProxy = require('http-proxy-middleware');
const k2c = require('koa2-connect');
const pathToRegexp = require('path-to-regexp');

module.exports = (options = {}) => {
  return async (ctx, next) => {
    if (pathToRegexp(/proxy\//).exec(ctx.request.url)) {
      k2c(httpProxy(options))(ctx, next);
    } else {
      await next();
    }
  };
};
