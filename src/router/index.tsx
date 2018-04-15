import * as React from 'react';
import * as Loadable from 'react-loadable';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import PageLoading from './../components/PageLoading';
import Error from './../components/Error';

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './../views/Home'),
  loading: PageLoading
})
const Login = Loadable({
  loader: () => import(/* webpackChunkName: "login" */ './../views/Login'),
  loading: PageLoading
});

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route component={Error} />
    </Switch>
  </Router>
)

export default AppRouter;
