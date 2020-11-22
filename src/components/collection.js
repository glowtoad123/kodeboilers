import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as CodeMirror} from 'react-codemirror2'
import {useFire} from '../services/fire'

import {Link, useHistory} from 'react-router-dom'
import { CircularProgress, LinearProgress } from '@material-ui/core'

export default function Collection() {
    const [broilers, setBroilers] = useState([])
    const [broilerIdList, setBroilerIdList] = useState([])
    const [receivedCheck, setReceivedCheck] = useState(false)
    const {displayBroilers, deleteBroiler, loggedinCondition, logout, currentUser} = useFire()

        !receivedCheck && displayBroilers().onSnapshot(data => {
        setBroilers(
            data.docs.map(doc => doc.data())
            );
        setBroilerIdList(
            data.docs.map(doc => doc.id)
        )
        setReceivedCheck(true)
        })

    console.log(broilers)
    console.log(broilerIdList)

    broilers.map(broiler => console.log(broiler.title))

    function removeBroiler(broilerId){
        var confirmDelete = window.confirm("Are you sure you want to delete this Broiler?");
        if(confirmDelete == true) { 
            deleteBroiler(broilerId)
        } else {
            alert("Broiler has not been deleted")
        }


    }

    return (
        <div className="collection">
            <br />
            <br />
            {broilers && broilers.length > 0 ? broilers.map((broiler, index) => { return (
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
                    <svg onClick={() => removeBroiler(broilerIdList[index])} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path onClick={() => removeBroiler(broilerIdList[index])} fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                    </svg>
                </div>
            )})
            : broilers.length == 0 && !currentUser ?
                <div>
                    <br />
                    <br />
                    <br />
                    <h1 id="getStarted" style={{width: '80%'}}>
                        Have no Broilers? Press the   
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-door-closed-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4 1a1 1 0 0 0-1 1v13H1.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2a1 1 0 0 0-1-1H4zm2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg> Icon Sign in/Register. If You are SignedIn press the                 
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                        </svg> 
                        Icon to create a broiler
                    </h1>
                </div>
            :
                <>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <LinearProgress color="primary" />
                </>
            }
        </div>
    )
}
