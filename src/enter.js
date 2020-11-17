import React, {useState, useEffect, useContext, createContext, useRef} from 'react'
import {Fire} from './services/fire'
import Login from "./components/login";
import Register from "./components/register"
import {auth} from './services/auth'
import * as theFire from './services/fire'

export default function Enter(){

    const [account, setAccount] = useState({})
    /* const [currentUser, setCurrentUser] = useState() */
    const emailRef = useRef()
    const passwordRef = useRef()

    const { checkAccount, submitAccount, currentUser } = theFire.useAuthen()

    console.log(currentUser)



    function readingProgress(event){
        var name = event.target.name
        var value = event.target.value
        setAccount(current => ({...current, [name]: value}))
        console.log(account)
    }

    async function readingAccount(event){
        event.preventDefault()

        try {
            await checkAccount(account.email, account.password)
        } catch {
            alert("wrong")
        }
    }

    async function addingAccount(event){
        event.preventDefault()

        try {
            await submitAccount(account.email, account.password)
        } catch(error) {
            console.log(error)
        }
    }

/*     async function readAccount(){
        try {
            await auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        } catch(error) {
            console.log(error)
        } finally {

        }
      }
  
      async function addAccount(){
          try{
              await auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
          } catch(error) {
              console.log(error)
          }
      } */


/*       useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
      })
        
        return unsubscribe
      }, [])

      console.log(currentUser) */


    return(
        <Fire>
{/*             <Login 
                typing={readingProgress} 
                authenticate={readAccount}
                password={account.password}
                email={account.email}
                em={emailRef}
                pass={passwordRef}
            />
            <Register 
                typing={readingProgress} 
                authenticate={addAccount}
                email={account.email}
                password={account.password}
                em={emailRef}
                pass={passwordRef}
                username={account.username}
            /> */}

<Login 
                typing={readingProgress} 
                authenticate={readingAccount}
                password={account.password}
                email={account.email}
                em={emailRef}
                pass={passwordRef}
            />
            <Register 
                typing={readingProgress} 
                authenticate={addingAccount}
                email={account.email}
                password={account.password}
                em={emailRef}
                pass={passwordRef}
                username={account.username}
            />
        </Fire>
    )
}