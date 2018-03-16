const {resolve} = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config.dev');

const compiler = webpack(webpackConfig);
const clientBuildPath = resolve(__dirname, '..', '..', 'build-dev', 'client');

module.exports = function setup(app) {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true
    }
  }));

  app.use(webpackHotMiddleware(compiler));

  // all other requests be handled by UI itself
  app.get('/', (req, res) => res.sendFile(resolve(clientBuildPath, 'site', 'index.html')));
  app.get('/admin', (req, res) => res.sendFile(resolve(clientBuildPath, 'admin', 'index.html')));
};
