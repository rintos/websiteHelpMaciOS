import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Privacy from './Privacy';
import Terms from './Terms';
import Support from './Support';
import About from './About';
import Home from './Home';

import {BrowserRouter, Switch, Route} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App}></Route>
      <Route path='/privacy' component={Privacy}></Route>
      <Route path='/terms' component={Terms}></Route>
      <Route path='/support' component={Support}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/home' component={Home}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
