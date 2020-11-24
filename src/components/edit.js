import React, {useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as CodeMirror} from 'react-codemirror2'
import {useFire} from '../services/fire'
import { LinearProgress } from '@material-ui/core'

export default function Edit() {
    const [title, setTitle] = useState("")
    const [code, setCode] = useState('')
    const [user, setUser] = useState("")

    const {id} = useParams()
    const {findBroiler, updateBroiler, currentUser} = useFire()

    const history = useHistory()

    title.length === 0 && findBroiler(id).then(doc => {
            setTitle(doc.data().title)
            setCode(doc.data().code)
            setUser(doc.data().user)
    })

    console.log(title)

    function editBroiler(){
        updateBroiler(id, title, code)
        history.push("/")
    }


    return (
        <>
        {currentUser && user && currentUser.uid !== user && <LinearProgress />}
        {currentUser && user && currentUser.uid === user && <div style={{width: '95%', margin: 'auto', marginTop: '50px'}}>
            <input type="text" className="title" value={title} placeholder="loading Broiler"/>
            <CodeMirror
                onBeforeChange={(editor, data, value) => {
                    setCode(value);
                }}
                className="editor"
                value={code}
                options={{
                  theme: 'material',
                  lineNumbers: true,
                  mode: 'javascript'
                }}
                onChange={(editor, data, value) => {
                    setCode(value);
                  }}
            />
            <button type="submit" className="addCode" onClick={editBroiler}>Update Broiler</button>
        </div>}
        </>
    )
}
