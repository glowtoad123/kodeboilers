import React from 'react'
import {Fire} from '../services/fire'

export default function Register(props){
    return(
        <Fire>

        <div className="signbox">
            <input 
                onChange={props.typing}
                value={props.email}
                ref={props.em}
                type="email"    
                name="email" 
                placeholder="email" 
                className="signfield"
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
            >Register
            </button>
        </div>
        </Fire>
    )
}