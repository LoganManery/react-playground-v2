import React from 'react';
import {  Route, Switch, Link } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import NotFound from './pages/NotFound';
import Register from './pages/RegisterPage';

function App() {

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                dw
              </li>
              <li>
                
              </li>
            </ul>
          </nav>
          <Switch>
            <Route>

            </Route>
            <Route>
              
            </Route>
            <Route>
              
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
