import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import './stylesheets/ui.scss';
import { App } from './components/App';
import { Whoops404 } from './components/Whoops404';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="list-widgets" component={App}>
      <Route path=":filter" component={App} />
    </Route>
    <Route path="add-widget" component={App} />
    <Route path="*" component={Whoops404}/>
  </Router>
);

export default routes;
