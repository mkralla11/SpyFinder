import React from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from "./app.js";
import FindSpies from "./pages/find_spies/find_spies.js";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={FindSpies}/>
      <Route path="find-spies" component={FindSpies}/>
    </Route>
  </Router>
)


export default routes