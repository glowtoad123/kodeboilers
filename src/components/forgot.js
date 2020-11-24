import React, { useState } from 'react'
import { useFire } from '../services/fire'

export default function Forgot() {
    const [email, setEmail] = useState()
    const [entered, setEntered] = useState(false)

    const {resetPassword} = useFire()
    

    return (
        <>
            {entered && <h1>A Link to reset your password has been sent to {email}</h1>}
            <div className="signbox">
                <input value={email} onChange={(event) => setEmail(event.target.value)} className="signfield" type="email" placeholder="Type in your email and we will send you a link to reset your password" />
                <button 
                        className="submit"
                        onClick={() => {
                            resetPassword(email)
                            setEntered(true)
                        }}
                >Enter email
                </button>

            </div>
        </>
    )
}
