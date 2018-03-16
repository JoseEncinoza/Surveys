/**
 * React Hot Loader
 */
if (module.hot) {
  require('react-hot-loader/patch');
}

/**
 * Polyfills for ES6
 */
require('babel-polyfill');
require('whatwg-fetch');

/**
 * CSS library that corrects broken and missing styles in all browsers
 */
require('sanitize.css/sanitize.css');

/**
 * Module dependencies
 */
const React = require('react');
const ReactDOM = require('react-dom');
const {AppContainer} = require('react-hot-loader');
const Router = require('./router');

require('./styles.scss');

/**
 * Render Site
 */
const render = (AppRouter) => {
  ReactDOM.render(
    <AppContainer>
      <AppRouter />
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Router);

// need to re-mount app component on hot reload
if (module.hot) {
  module.hot.accept('./router.js', () => {
    render(require('./router').default);
  });
}
