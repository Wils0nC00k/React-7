import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Home from './Home'
import History from './History'
import NoMatch from './NoMatch'
import Navigation from './Navigation'

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/our-history" component={History}/>
        <Route component={NoMatch}/>
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
