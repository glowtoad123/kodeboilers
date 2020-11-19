import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as CodeMirror} from 'react-codemirror2'
import {useFire} from '../services/fire'

export default function Broiler() {
    const [broiler, setBroiler] = useState({})

    const {id} = useParams()
    const {findBroiler} = useFire()

    console.log(id)
    console.log(broiler)

    findBroiler(id).then(doc => {
        return(
            setBroiler(doc.data())
        )
    })


    return (
        <div style={{width: '95%', margin: 'auto', marginTop: '50px'}}>
            <input type="text" className="title" value={broiler.title} placeholder="loading Broiler"/>
            <CodeMirror
                className="editor"
                value={broiler.code}
                options={{
                  theme: 'material',
                  lineNumbers: true,
                  mode: 'javascript'
                }}
            />
        </div>
    )
}
