import React, {Component, Fragment} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Privacy from './Privacy';
import Header from './Header';
import Home from './Home';
import About from './About';

function App() {
  return(
    <Fragment>
      <Header />
      <Privacy />
    </Fragment> 
  );
}

export default App;
