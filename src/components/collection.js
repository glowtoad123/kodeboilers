import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as CodeMirror} from 'react-codemirror2'
import {useFire} from '../services/fire'

import {Link} from 'react-router-dom'

export default function Collection() {
    const [broilers, setBroilers] = useState([])
    const [broilerIdList, setBroilerIdList] = useState([])
    const {displayBroilers} = useFire()

    broilers && broilers.length === 0 && displayBroilers().onSnapshot(data => {
        setBroilers(
            data.docs.map(doc => doc.data())
            );
        setBroilerIdList(
            data.docs.map(doc => doc.id)
        )
        })

    console.log(broilers)
    console.log(broilerIdList)

    broilers.map(broiler => console.log(broiler.title))

    return (
        <div className="collection">
            {broilers && broilers.length > 0 && broilers.map((broiler, index) => { return (
                <div className='displayedBroiler'>
                    <Link to={`/broiler/${broilerIdList[index]}`}>
                        <h1 className='displayedBroilerTitle'>
                            {broiler.title}
                        </h1>
                    </Link>
                    <CodeMirror
                        className="editor"
                        value={broiler.code}
                        options={{
                          theme: 'material',
                          lineNumbers: true,
                          mode: 'javascript'
                        }}
                    />
                    <Link to={`/edit/${broilerIdList[index]}`}>
                        <svg className="edit" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                        </svg>
                    </Link>
                </div>
            )})
            }
        </div>
    )
}
