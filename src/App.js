import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './index.css';
import Navabar from './components/Navabar';
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navabar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
