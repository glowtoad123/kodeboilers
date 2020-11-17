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

function App() {

  const [codeText, setCodeText] = useState("testing")

  return (
    <Fire>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/enter" component={Enter} />
            <Route path="/create" component={Create} />
          </Switch>
        </div>
      </Router>
    </Fire>
  );
}

export default App;