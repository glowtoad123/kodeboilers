import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as CodeMirror} from 'react-codemirror2'
import {useFire} from './services/fire'

export default function Create() {

    const [codeText, setCodeText] = useState("testing")

    const {currentUser} = useFire()
    
    console.log(currentUser.email)

    return (
        <div style={{width: '95%', margin: 'auto'}}>
            <h1 className="userPerson">{currentUser.email}</h1>
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
            <button type="submit" className="addCode">Add Code</button>
        </div>
    )
}
