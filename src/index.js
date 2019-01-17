import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import App from './App';
import Login from './componentes/Login';
import { Router, Route, Switch } from "react-router-dom";
import history from './componentes/history';

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/timeline" component={App}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
