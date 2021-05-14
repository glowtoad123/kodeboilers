import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import './App.css';
import Nav from './components/nav'
import {Fire} from './services/fire'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Enter from './enter'
import Create from './create'
import Collection from './components/collection';
import Snippet from './components/broiler'
import Edit from './components/edit'
import Forgot from './components/forgot';
import Account from './components/account';
import Info from './info';

function App() {

  return (
    <Fire>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/snippet/:id" component={Snippet} />
            <Route path="/edit/:id" component={Edit} />
            <Route exact path="/" component={Collection} />
            <Route path="/enter" component={Enter} />
            <Route path="/create" component={Create} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/account" component={Account} />
            <Route path="/about" component={Info} />
          </Switch>
        </div>
      </Router>
    </Fire>
  );
}

export default App;
