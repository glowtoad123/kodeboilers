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
        <div style={{width: '95%', margin: 'auto'}}>
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
        </div>
    )
}
