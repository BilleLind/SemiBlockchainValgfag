import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './styles.css';
import { Blockchain } from './Blockchain';

function Nav() {
  return (
    <div>
        <Router>
            <div>
                <div className="nav">
                    <Link to="/">Home</Link>    
                    <Link to="/about">About</Link>
                    <Link to="/blockchain">Blockchain</Link>
                </div>

                <div className="main">
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/blockchain">
                            <Blockchain />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>    
            </div>
        </Router>
    </div>
  );

}

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <p>This is the homepage</p>
        </div>
    );


}

function About() {
    return <h2>About</h2>;
}

export default Nav;
