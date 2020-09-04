
import React, { lazy } from 'react';
import Route from 'react-router-dom/Route';
import Router from 'react-router-dom/Router';
import Redirect from 'react-router-dom/Redirect';
import h from '../utils/history';
const P = lazy(() => import('../page/portfolio'));
const H = lazy(() => import('../page/home'));

export default () => <Router history={h} basename={process.env.PUBLIC_URL}>
    <Route path='/home' component={H} />
    <Route path='/biography' component={P} />
    <Redirect to='/home' />
</Router>