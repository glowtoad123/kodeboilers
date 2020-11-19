import React, {useState} from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as CodeMirror} from 'react-codemirror2'
import {useFire} from '../services/fire'

export default function Broiler() {
    const [broiler, setBroiler] = useState({})
    const history = useHistory()
    const {id} = useParams()
    const {findBroiler, deleteBroiler} = useFire()

    console.log(id)
    console.log(broiler)

    findBroiler(id).then(doc => {
        return(
            setBroiler(doc.data())
        )
    })

    function removeBroiler(){
        var confirmDelete = window.confirm("Are you sure you want to delete this Broiler?");
        if(confirmDelete == true) { 
            deleteBroiler(id)
            history.push('/')
        } else {
            alert("Broiler has not been deleted")
        }
    }

    return (
        <div style={{width: '95%', margin: 'auto', marginTop: '50px', backgroundColor: '#263238', borderRadius: '12px 12px 0 0'}}>
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
            <Link to={`/edit/${id}`}>
                <svg className="edit" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                </svg>
            </Link>
            <svg onClick={removeBroiler} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path onClick={removeBroiler} fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
            </svg>
        </div>
    )
}
