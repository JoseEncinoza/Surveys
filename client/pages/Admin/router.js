/**
 * Module dependencies
 */
const React = require('react');
const {BrowserRouter, Route, Switch} = require('react-router-dom');

const App = require('./containers/App');

module.exports = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/admin" name="admin" component={App} />
    </Switch>
  </BrowserRouter>
);
