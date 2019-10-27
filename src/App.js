import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/NavBs';
import './App.css';
import BookSearch from './pages/BookSearch';
// import SearchForm from './components/SearchForm.js';
// import { Navbar, Brand, Container } from 'react-bootstrap';


function App () {
  return (
    // <Router>
      <div>
        <Nav />
        <BookSearch />
      </div>
    // </Router>
    );
}

export default App;
