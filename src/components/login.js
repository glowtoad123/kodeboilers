import React from 'react'
import {Fire} from '../services/fire'
import './enter.css'

export default function Login(props){
    return(
        <Fire>

        <div className="signbox">
            <input 
                onChange={props.typing}
                value={props.email}
                type="email"    
                name="email" 
                placeholder="email" 
                className="signfield"
                ref={props.em}
            />
            <input
                onChange={props.typing}  
                value={props.password}    
                type="password" 
                name="password"    
                placeholder="password" 
                className="signfield"
                ref={props.pass}
            />
            <button 
                    onClick={props.authenticate}
                    className="submit"
            >Login
            </button>
        </div>
        </Fire>
    )
}