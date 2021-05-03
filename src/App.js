import React from "react";
import './App.css';
import Navbar from './components/ Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Services from "./components/pages/Services";
import Footer from "./components/Footer";
import About from "./components/pages/About";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/footer' component={Footer} />
          <Route path='/about' component={About} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
