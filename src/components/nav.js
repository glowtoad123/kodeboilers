import React from 'react'
import {Link} from 'react-router-dom'
import {useFire} from '../services/fire'

const theWidth = window.innerWidth


export default function Nav(){
    
    const {logout, currentUser} = useFire()

    const navButtonStyle = {
        margin: "auto",
    }
//test

    console.log("theWidth", theWidth)
      

    /* if (window.innerWidth < 750) { 
      navStyle.right = "auto"; 
      navStyle.top = "auto"; 
      navStyle.bottom = "0";
      navStyle.flexDirection = "row";
      navStyle.margin = "auto"
    } else {
      navStyle.right = '5px'; 
      navStyle.top = !currentUser ? '35%' : '20%'; 
      navStyle.bottom = "auto";
      navStyle.flexDirection = "column";
      navStyle.margin = "auto"
    } */

console.log("pageWidth", window.innerWidth)

    async function handleLogout(){
        try {
            await logout()
        } catch(err) {
            console.log(err)
        }
    }

    return(
        <nav onClick={() => console.log("window.innerWidth", window.innerWidth)} className="nav">
            <Link to="/">
                <svg style={navButtonStyle} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
            </Link>
            {currentUser && <><Link to="/create">
                <svg style={navButtonStyle} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg>
            </Link>
            <Link to="/account">
                <svg style={navButtonStyle} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            </Link></>}
            <a href>
                <svg style={navButtonStyle} onClick={handleLogout} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-door-closed-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path onClick={handleLogout} fill-rule="evenodd" d="M4 1a1 1 0 0 0-1 1v13H1.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2a1 1 0 0 0-1-1H4zm2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
            </a>
            <Link to="/about">
                <svg style={navButtonStyle} width="43.314" height="43.314" version="1.1" viewBox="0 0 11.46 11.46" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <g transform="translate(1.5131 1.4803)">
                  <path transform="matrix(.26458 0 0 .26458 -.01644 .01644)" d="m0 0c-7.5425 7.5425-7.5425 24.458 0 32s24.458 7.5425 32 0 7.5425-24.458 0-32-24.458-7.5425-32 0zm13.93 1.3613h4.1406v3.8086h-4.1406zm0.23437 7.4609h3.6719v21.816h-3.6719z"/>
                 </g>
                </svg>
            </Link>
        </nav>
    )
}
