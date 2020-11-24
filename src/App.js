import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import {Fire} from './services/fire'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as CodeMirror} from 'react-codemirror2'
import Enter from './enter'
import Create from './create'
import Collection from './components/collection';
import Broiler from './components/broiler'
import Edit from './components/edit'
import Forgot from './components/forgot';
import Account from './components/account';

function App() {

  const [codeText, setCodeText] = useState("testing")

  return (
    <Fire>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/broiler/:id" component={Broiler} />
            <Route path="/edit/:id" component={Edit} />
            <Route exact path="/" component={Collection} />
            <Route path="/enter" component={Enter} />
            <Route path="/create" component={Create} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/account" component={Account} />
          </Switch>
        </div>
      </Router>
    </Fire>
  );
}

export default App;
