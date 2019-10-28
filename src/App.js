import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
// import './App.css';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Search} />
          <Route path='/saved' component={Saved} />
          <Route component={404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
