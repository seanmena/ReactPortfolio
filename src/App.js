import React from "react";
import './App.css';
import Navbar from './components/ Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Services from "./components/pages/Services";
import Projects from "./components/pages/Projects";
import AboutMe from "./components/pages/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Projects} />
          <Route path='/sign-up' component={AboutMe} />
          <Route path='/footer' component={Footer} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
