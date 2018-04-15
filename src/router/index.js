"use strict";
import * as React from 'react';
import * as Loadable from 'react-loadable';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PageLoading from './../components/PageLoading';
import Error from './../components/Error';
const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ './../views/Home'),
    loading: PageLoading
});
const Login = Loadable({
    loader: () => import(/* webpackChunkName: "login" */ './../views/Login'),
    loading: PageLoading
});
const AppRouter = () => (React.createElement(Router, null,
    React.createElement(Switch, null,
        React.createElement(Route, { exact: true, path: "/", component: Home }),
        React.createElement(Route, { exact: true, path: "/login", component: Login }),
        React.createElement(Route, { component: Error }))));
export default AppRouter;
//# sourceMappingURL=index.js.map