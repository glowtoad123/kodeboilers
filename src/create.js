import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as CodeMirror} from 'react-codemirror2'
import {useFire} from './services/fire'
import { useHistory } from 'react-router-dom'

export default function Create() {

    const [codeText, setCodeText] = useState("testing")
    const [title, setTitle] = useState("")

    const {currentUser, submitBroiler} = useFire()
    
    console.log(currentUser)

    const history = useHistory()

    function addBroiler(){
        submitBroiler(title, codeText, currentUser.uid)
        history.push("/")
    }

    return (
      <>
        {currentUser && <div style={{width: '95%', margin: 'auto'}}>
            <input type="text" className="title" value={title} onChange={event => setTitle(event.target.value)} placeholder="Please name this broiler"/>
            <CodeMirror
                onBeforeChange={(editor, data, value) => {
                  setCodeText(value);
                }}
                className="editor"
                value={codeText}
                options={{
                  theme: 'material',
                  lineNumbers: true,
                  mode: 'javascript'
                }}
                onChange={(editor, data, value) => {
                  setCodeText(value);
                }}
            />
            <button type="submit" className="addCode" onClick={addBroiler}>Add Broiler</button>
        </div>}

        {!currentUser && 
            <div>
                <br />
                <br />
                <br />
                <h1 id="getStarted" style={{width: '80%'}}>
                    If You are seeing this screen, then you must not be loggedIn. Press the   
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-door-closed-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4 1a1 1 0 0 0-1 1v13H1.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2a1 1 0 0 0-1-1H4zm2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg> Icon to Sign in or to Register if you do not have an account. Only then can you create a broiler by pressing the 
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg> Icon.
                </h1>
            </div>
        }
      </>
    )
}
