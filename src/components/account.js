import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFire } from '../services/fire'

export default function Account() {

    const {currentUser, updateEmail, updatePassword} = useFire()

    const [email, setEmail] = useState(currentUser.email)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const history = useHistory()



    async function UpdateAccount(){
        try {

            await updateEmail(email)
            confirmPassword && confirmPassword !== "" && await updatePassword(confirmPassword)
            history.push("/")
        } catch {
            alert("has not been updated")
        }
    }


    return (
        <>
            {
                password === confirmPassword ? <h1 style={{backgroundColor: "green", color: "white"}}>Passwords match</h1> : <h1 style={{backgroundColor: "red", color: "white"}}>passwords do not match</h1>
            }
            {email && email !== "" && <div className="signbox">
                <input className="signfield" type="email" value={email} placeholder="email" onChange={event => setEmail(event.target.value)}/>
                <input className="signfield" type="password" value={password} placeholder="password" onChange={event => setPassword(event.target.value)}/>
                {password && password !== "" && <input className="signfield" type="password" value={confirmPassword} placeholder="Confirm password" onChange={event => setConfirmPassword(event.target.value)}/>}
                <button className="submit" type="submit" onClick={UpdateAccount}>Update Account</button>
            </div>}
            {email && email === "" && <h1 style={{
                backgroundColor: "#060621",
                color: 'white',
                width: 'max-context',
                padding: '10px',
                border: 'none',
                borderRadius: '12px'
            }}>You Are not Loggedin</h1>}
        </>

    )
}
