import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import SignUp from './components/pages/SignUp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router >
        <ScrollToTop>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/portfolio" exact component={Portfolio}/>
          <Route path="/sign-up" exact component={SignUp}/>
        </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
