import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';

function App() {
  return (
    <>
        <section>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Products</Link>
                    </li>
                    <li>
                        <Link to="/contact">Sales</Link>
                    </li>
                </ul>
            </nav>
        </section>
        /* Redirect to components */
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/about" component={About}></Route>
        </Switch>
    </>
  );
}

export default App;
